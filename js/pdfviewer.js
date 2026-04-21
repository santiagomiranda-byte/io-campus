// ============================================================
// pdfviewer.js — PDF viewer with highlight rectangles + sticky notes
// ============================================================

class PDFViewer {
  constructor() {
    this.pdfDoc  = null;
    this.file    = null;
    this.scale   = 1.4;
    this.tool    = 'none'; // 'highlight' | 'note' | 'none'
    this.data    = {};     // { filename: { highlights: {pageNum: [{x,y,w,h,color}]}, notes: {pageNum: [{x,y,text}]} } }
    this._drag   = null;
    this._loadData();
  }

  _loadData() {
    try { this.data = JSON.parse(localStorage.getItem('pdfAnnotations') || '{}'); } catch {}
  }
  _saveData() {
    localStorage.setItem('pdfAnnotations', JSON.stringify(this.data));
  }
  _fileData() {
    const k = this.file?.name || '__';
    if (!this.data[k]) this.data[k] = { highlights: {}, notes: {} };
    return this.data[k];
  }

  // ---- Open ----
  async open(file) {
    this.file  = file;
    this.scale = 1.4;
    this.tool  = 'none';
    this._drag = null;
    this._buildUI();

    if (!window.pdfjsLib) {
      await this._loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    const buf   = await file.arrayBuffer();
    this.pdfDoc = await pdfjsLib.getDocument({ data: buf }).promise;

    document.getElementById('pvFilename').textContent = file.name;
    document.getElementById('pvTotal').textContent    = this.pdfDoc.numPages;

    await this._renderAll();
  }

  // ---- UI ----
  _buildUI() {
    document.getElementById('pdfViewerModal')?.remove();

    const m = document.createElement('div');
    m.id = 'pdfViewerModal';
    m.innerHTML = `
      <div class="pv-inner">
        <div class="pv-toolbar">
          <div class="pv-tb-left">
            <span class="pv-filename" id="pvFilename">Cargando…</span>
            <span class="pv-pages">Pág <span id="pvCurrent">1</span> / <span id="pvTotal">?</span></span>
          </div>
          <div class="pv-tb-center">
            <button class="pv-btn pv-tool" id="pvHighlight" data-tool="highlight">🖊️ Resaltar</button>
            <button class="pv-btn pv-tool" id="pvNote"      data-tool="note">📝 Nota</button>
            <button class="pv-btn" id="pvZoomIn">🔍+</button>
            <button class="pv-btn" id="pvZoomOut">🔍−</button>
          </div>
          <div class="pv-tb-right">
            <button class="pv-btn pv-close-btn" id="pvClose">✕ Cerrar</button>
          </div>
        </div>
        <div class="pv-hint" id="pvHint" style="display:none"></div>
        <div class="pv-scroll" id="pvScroll"></div>
      </div>`;
    document.body.appendChild(m);

    document.getElementById('pvClose').onclick   = () => m.remove();
    document.getElementById('pvZoomIn').onclick  = () => { this.scale = Math.min(this.scale + 0.25, 3);   this._renderAll(); };
    document.getElementById('pvZoomOut').onclick = () => { this.scale = Math.max(this.scale - 0.25, 0.5); this._renderAll(); };

    document.querySelectorAll('.pv-tool').forEach(btn => {
      btn.onclick = () => {
        const t = btn.dataset.tool;
        this.tool = this.tool === t ? 'none' : t;
        document.querySelectorAll('.pv-tool').forEach(b => b.classList.toggle('active', b.dataset.tool === this.tool));
        const hints = { highlight: '🖊️ Arrastrá sobre la página para resaltar un área. Clic en un resaltado para eliminarlo.', note: '📝 Clic en cualquier lugar para agregar una nota adhesiva.' };
        const hint = document.getElementById('pvHint');
        if (hints[this.tool]) { hint.textContent = hints[this.tool]; hint.style.display = 'block'; }
        else hint.style.display = 'none';
      };
    });

    // Update current page indicator on scroll
    document.getElementById('pvScroll').addEventListener('scroll', () => {
      const scroller = document.getElementById('pvScroll');
      const pages = scroller.querySelectorAll('.pv-page');
      for (const p of pages) {
        if (p.getBoundingClientRect().top >= scroller.getBoundingClientRect().top - 80) {
          document.getElementById('pvCurrent').textContent = p.dataset.page;
          break;
        }
      }
    });

    // Global mouse handlers for highlight drag
    document.addEventListener('mousemove', this._onGlobalMove.bind(this));
    document.addEventListener('mouseup',   this._onGlobalUp.bind(this));
  }

  // ---- Render all pages ----
  async _renderAll() {
    const scroller = document.getElementById('pvScroll');
    if (!scroller || !this.pdfDoc) return;
    scroller.innerHTML = '<div style="color:#aaa;text-align:center;padding:60px;font-size:14px;">Renderizando páginas…</div>';

    const total = this.pdfDoc.numPages;

    for (let i = 1; i <= total; i++) {
      const page = await this.pdfDoc.getPage(i);
      const vp   = page.getViewport({ scale: this.scale });

      // Wrapper
      const wrap = document.createElement('div');
      wrap.className   = 'pv-page';
      wrap.dataset.page = i;
      wrap.style.cssText = `position:relative;width:${vp.width}px;height:${vp.height}px;margin:12px auto;box-shadow:0 2px 12px rgba(0,0,0,0.35);background:white;flex-shrink:0;`;

      // Canvas
      const canvas    = document.createElement('canvas');
      canvas.width    = vp.width;
      canvas.height   = vp.height;
      canvas.style.cssText = 'display:block;';
      wrap.appendChild(canvas);

      // Highlight SVG layer
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.classList.add('pv-svg');
      svg.style.cssText = `position:absolute;inset:0;width:100%;height:100%;overflow:visible;`;
      wrap.appendChild(svg);

      // Note layer
      const noteLayer = document.createElement('div');
      noteLayer.classList.add('pv-note-layer');
      noteLayer.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
      wrap.appendChild(noteLayer);

      // Page label
      const lbl = document.createElement('div');
      lbl.className = 'pv-page-label';
      lbl.textContent = `Página ${i}`;
      wrap.appendChild(lbl);

      if (i === 1) scroller.innerHTML = '';
      scroller.appendChild(wrap);

      await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;

      this._setupPageInteraction(wrap, svg, noteLayer, vp, i);
      this._restoreAnnotations(svg, noteLayer, vp, i);
    }
  }

  // ---- Interaction setup ----
  _setupPageInteraction(wrap, svg, noteLayer, vp, pageNum) {
    wrap.addEventListener('mousedown', (e) => {
      if (this.tool !== 'highlight') return;
      if (e.target.closest('.pv-note-el')) return;
      e.preventDefault();

      const r = wrap.getBoundingClientRect();
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('fill', 'rgba(255,220,0,0.4)');
      rect.setAttribute('stroke', 'rgba(200,160,0,0.7)');
      rect.setAttribute('stroke-width', '1.5');
      svg.appendChild(rect);

      this._drag = {
        wrap, svg, rect, vp, pageNum,
        startX: e.clientX - wrap.getBoundingClientRect().left,
        startY: e.clientY - wrap.getBoundingClientRect().top
      };
    });

    wrap.addEventListener('click', (e) => {
      if (this.tool !== 'note') return;
      if (e.target.closest('.pv-note-el')) return;
      const r  = wrap.getBoundingClientRect();
      const x  = (e.clientX - r.left) / vp.width * 100;
      const y  = (e.clientY - r.top)  / vp.height * 100;
      this._createNote(noteLayer, vp, pageNum, x, y, '');
    });
  }

  _onGlobalMove(e) {
    if (!this._drag) return;
    const { wrap, rect, startX, startY } = this._drag;
    const r  = wrap.getBoundingClientRect();
    const cx = e.clientX - r.left;
    const cy = e.clientY - r.top;
    rect.setAttribute('x',      Math.min(startX, cx));
    rect.setAttribute('y',      Math.min(startY, cy));
    rect.setAttribute('width',  Math.abs(cx - startX));
    rect.setAttribute('height', Math.abs(cy - startY));
  }

  _onGlobalUp(e) {
    if (!this._drag) return;
    const { wrap, svg, rect, vp, pageNum, startX, startY } = this._drag;
    this._drag = null;

    const w = parseFloat(rect.getAttribute('width')  || 0);
    const h = parseFloat(rect.getAttribute('height') || 0);
    if (w < 8 || h < 8) { svg.removeChild(rect); return; }

    const highlight = {
      x: parseFloat(rect.getAttribute('x')) / vp.width  * 100,
      y: parseFloat(rect.getAttribute('y')) / vp.height * 100,
      w: w / vp.width  * 100,
      h: h / vp.height * 100,
      color: 'rgba(255,220,0,0.4)'
    };

    const fd = this._fileData();
    if (!fd.highlights[pageNum]) fd.highlights[pageNum] = [];
    fd.highlights[pageNum].push(highlight);
    this._saveData();

    rect.style.cursor = 'pointer';
    rect.setAttribute('title', 'Clic para eliminar resaltado');
    rect.addEventListener('click', () => {
      rect.remove();
      fd.highlights[pageNum] = fd.highlights[pageNum].filter(h => h !== highlight);
      this._saveData();
    });
  }

  // ---- Notes ----
  _createNote(noteLayer, vp, pageNum, x, y, text, save = true) {
    const fd  = this._fileData();
    const el  = document.createElement('div');
    el.className = 'pv-note-el';
    el.style.cssText = `left:${x}%;top:${y}%;`;

    const noteData = save ? { x, y, text } : null;

    el.innerHTML = `
      <div class="pv-note-head">📝 <button class="pv-note-del">✕</button></div>
      <textarea class="pv-note-ta" placeholder="Escribí tu nota…" rows="3"></textarea>`;

    noteLayer.style.pointerEvents = '';
    noteLayer.appendChild(el);

    const ta = el.querySelector('.pv-note-ta');
    ta.value = text;

    if (save) {
      if (!fd.notes[pageNum]) fd.notes[pageNum] = [];
      fd.notes[pageNum].push(noteData);
      this._saveData();
      ta.focus();
    }

    ta.addEventListener('input', () => {
      if (noteData) { noteData.text = ta.value; this._saveData(); }
    });

    el.querySelector('.pv-note-del').addEventListener('click', (e) => {
      e.stopPropagation();
      el.remove();
      if (noteData && fd.notes[pageNum]) {
        fd.notes[pageNum] = fd.notes[pageNum].filter(n => n !== noteData);
        this._saveData();
      }
    });

    // Drag to reposition
    let dragging = false, ox, oy;
    el.querySelector('.pv-note-head').addEventListener('mousedown', (e) => {
      dragging = true;
      ox = e.clientX - el.offsetLeft;
      oy = e.clientY - el.offsetTop;
      e.preventDefault();
    });
    document.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const newX = (e.clientX - ox) / vp.width  * 100;
      const newY = (e.clientY - oy) / vp.height * 100;
      el.style.left = newX + '%';
      el.style.top  = newY + '%';
      if (noteData) { noteData.x = newX; noteData.y = newY; }
    });
    document.addEventListener('mouseup', () => {
      if (dragging) { dragging = false; this._saveData(); }
    });
  }

  // ---- Restore saved annotations ----
  _restoreAnnotations(svg, noteLayer, vp, pageNum) {
    const fd = this._fileData();

    for (const h of fd.highlights[pageNum] || []) {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x',      h.x * vp.width  / 100);
      rect.setAttribute('y',      h.y * vp.height / 100);
      rect.setAttribute('width',  h.w * vp.width  / 100);
      rect.setAttribute('height', h.h * vp.height / 100);
      rect.setAttribute('fill',   h.color || 'rgba(255,220,0,0.4)');
      rect.setAttribute('stroke', 'rgba(200,160,0,0.7)');
      rect.setAttribute('stroke-width', '1.5');
      rect.style.cursor = 'pointer';
      rect.setAttribute('title', 'Clic para eliminar');
      svg.appendChild(rect);
      rect.addEventListener('click', () => {
        rect.remove();
        fd.highlights[pageNum] = fd.highlights[pageNum].filter(hh => hh !== h);
        this._saveData();
      });
    }

    for (const n of fd.notes[pageNum] || []) {
      this._createNote(noteLayer, vp, pageNum, n.x, n.y, n.text, false);
    }
  }

  // ---- Utils ----
  _loadScript(src) {
    return new Promise((resolve, reject) => {
      const s   = document.createElement('script');
      s.src     = src;
      s.onload  = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
}

window.pdfViewer = new PDFViewer();
