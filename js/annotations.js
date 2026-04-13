// ============================================================
// annotations.js — Sistema de anotaciones para IO Campus
// Funcionalidades: subrayado (highlight), notas con imágenes,
// panel "Mis Notas", etiqueta "Repasar"
// ============================================================

const ANNOTATIONS_KEY = 'io_annotations_v2';

let annotations = {};       // { unitId: [annotation, ...] }
let activeUnitId = null;
let selectionData = null;   // datos de la selección activa
let pendingAnnotationForNote = null;
let noteImageData = null;
let notesPanelOpen = false;
let currentNotesFilter = 'all';

// ============================================================
// DATA LAYER
// ============================================================

function loadAnnotations() {
  try { annotations = JSON.parse(localStorage.getItem(ANNOTATIONS_KEY) || '{}'); }
  catch { annotations = {}; }
}

function saveAnnotations() {
  try { localStorage.setItem(ANNOTATIONS_KEY, JSON.stringify(annotations)); }
  catch { showToast('Error guardando anotación (almacenamiento lleno)', 'error'); }
}

function getUnitAnnotations(unitId) { return annotations[unitId] || []; }

function addAnnotation(ann) {
  const uid = String(ann.unitId);
  if (!annotations[uid]) annotations[uid] = [];
  annotations[uid].push(ann);
  saveAnnotations();
}

function updateAnnotation(unitId, id, changes) {
  const uid = String(unitId);
  const list = annotations[uid] || [];
  const idx = list.findIndex(a => a.id === id);
  if (idx >= 0) { annotations[uid][idx] = { ...list[idx], ...changes }; saveAnnotations(); }
}

function deleteAnnotation(unitId, id) {
  const uid = String(unitId);
  if (!annotations[uid]) return;
  annotations[uid] = annotations[uid].filter(a => a.id !== id);
  saveAnnotations();
}

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// ============================================================
// INIT
// ============================================================

function initAnnotationSystem(unitId) {
  activeUnitId = unitId;
  loadAnnotations();
  createAnnotationToolbar();
  createNoteModal();
  createNotesPanel();
  document.addEventListener('mouseup', onSelectionEnd);
  document.addEventListener('keyup', onSelectionEnd);
}

// ============================================================
// SELECTION DETECTION
// ============================================================

function onSelectionEnd(e) {
  if (e.target.closest('#botPanel, #noteModal, #notesPanel, #annToolbar')) return;

  setTimeout(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.toString().trim().length < 2) {
      hideAnnotationToolbar();
      return;
    }

    const range = sel.getRangeAt(0);
    const selectedText = sel.toString().trim();
    const container = getAnnotatableContainer(range);
    if (!container) { hideAnnotationToolbar(); return; }

    const sectionId = container.id.replace('Content', '');
    const occurrence = computeOccurrence(container, range, selectedText);

    selectionData = { selectedText, sectionId, container, occurrence };

    const rect = range.getBoundingClientRect();
    showAnnotationToolbar(rect);
  }, 20);
}

function getAnnotatableContainer(range) {
  const node = range.commonAncestorContainer;
  const el = node.nodeType === 1 ? node : node.parentElement;
  return el.closest('#teoriaContent, #resumenContent, #formulasContent, #casosContent');
}

function computeOccurrence(containerEl, range, text) {
  const before = getTextBefore(range.startContainer, range.startOffset, containerEl);
  const full = containerEl.textContent;
  let count = 0, pos = 0;
  while (true) {
    const found = full.indexOf(text, pos);
    if (found < 0 || found >= before.length) break;
    count++;
    pos = found + 1;
  }
  return count;
}

function getTextBefore(node, offset, root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let text = '', cur;
  while ((cur = walker.nextNode())) {
    if (cur === node) { text += cur.textContent.slice(0, offset); break; }
    text += cur.textContent;
  }
  return text;
}

// ============================================================
// ANNOTATION TOOLBAR (floating)
// ============================================================

function createAnnotationToolbar() {
  if (document.getElementById('annToolbar')) return;
  const toolbar = document.createElement('div');
  toolbar.id = 'annToolbar';
  toolbar.className = 'ann-toolbar';
  toolbar.innerHTML = `
    <span class="ann-toolbar-label">Subrayar</span>
    <button class="ann-color-btn" data-color="#fef08a" title="Amarillo" style="background:#fef08a"></button>
    <button class="ann-color-btn" data-color="#bbf7d0" title="Verde"    style="background:#bbf7d0"></button>
    <button class="ann-color-btn" data-color="#fecaca" title="Rojo"     style="background:#fecaca"></button>
    <button class="ann-color-btn" data-color="#bfdbfe" title="Azul"     style="background:#bfdbfe"></button>
    <button class="ann-color-btn" data-color="#ddd6fe" title="Violeta"  style="background:#ddd6fe"></button>
    <div class="ann-toolbar-sep"></div>
    <button class="ann-note-btn" title="Agregar nota con texto e imagen">📝 Nota</button>
  `;
  document.body.appendChild(toolbar);

  toolbar.querySelectorAll('.ann-color-btn').forEach(btn => {
    btn.addEventListener('click', () => createHighlight(btn.dataset.color));
  });
  toolbar.querySelector('.ann-note-btn').addEventListener('click', () => openNoteModal(null));
}

function showAnnotationToolbar(rect) {
  const tb = document.getElementById('annToolbar');
  if (!tb) return;
  // Position above selection, centered
  const tbW = tb.offsetWidth || 340;
  const x = rect.left + rect.width / 2 + window.scrollX - tbW / 2;
  const y = rect.top + window.scrollY - 52;
  tb.style.left = `${Math.max(8, Math.min(x, window.innerWidth - tbW - 8))}px`;
  tb.style.top  = `${Math.max(8, y)}px`;
  tb.classList.add('visible');
}

function hideAnnotationToolbar() {
  const tb = document.getElementById('annToolbar');
  if (tb) tb.classList.remove('visible');
  selectionData = null;
}

// ============================================================
// CREATE HIGHLIGHT
// ============================================================

function createHighlight(color, noteText = '', imageData = null, repasar = false) {
  if (!selectionData) return;

  const ann = {
    id: genId(),
    unitId: activeUnitId,
    section: selectionData.sectionId,
    type: 'highlight',
    selectedText: selectionData.selectedText,
    occurrence: selectionData.occurrence,
    color,
    noteText,
    imageData,
    repasar,
    createdAt: new Date().toISOString()
  };

  addAnnotation(ann);
  applyHighlightToDOM(selectionData.container, ann);
  hideAnnotationToolbar();
  window.getSelection().removeAllRanges();
  showToast('Subrayado guardado ✓', 'success');
}

// ============================================================
// APPLY HIGHLIGHTS TO DOM
// ============================================================

function applyAnnotationsToSection(unitId, sectionId) {
  const el = document.getElementById(sectionId + 'Content') || document.getElementById(sectionId);
  if (!el) return;
  const uid = String(unitId);
  const anns = (annotations[uid] || []).filter(a => a.section === sectionId && a.type === 'highlight');
  anns.forEach(ann => applyHighlightToDOM(el, ann));
}

function applyHighlightToDOM(containerEl, ann) {
  if (!ann.selectedText) return;
  // Skip if already applied
  if (containerEl.querySelector(`[data-aid="${ann.id}"]`)) return;

  // Build index of text nodes with cumulative positions
  const walker = document.createTreeWalker(containerEl, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let full = '', cur;
  while ((cur = walker.nextNode())) {
    // Skip text inside existing annotation spans (prevent double-wrap)
    if (cur.parentElement.dataset.aid) continue;
    nodes.push({ node: cur, start: full.length });
    full += cur.textContent;
  }

  // Find the target occurrence
  const text = ann.selectedText;
  let occ = 0, pos = 0, foundPos = -1;
  while (true) {
    const f = full.indexOf(text, pos);
    if (f < 0) break;
    if (occ === ann.occurrence) { foundPos = f; break; }
    occ++;
    pos = f + 1;
  }
  if (foundPos < 0) return;

  wrapRange(nodes, foundPos, foundPos + text.length, ann);
}

function wrapRange(nodes, start, end, ann) {
  const relevant = nodes
    .filter(np => {
      const ne = np.start + np.node.textContent.length;
      return np.start < end && ne > start;
    })
    .reverse(); // process last-to-first to avoid position shifts

  relevant.forEach(np => {
    const nodeEnd = np.start + np.node.textContent.length;
    const localStart = Math.max(0, start - np.start);
    const localEnd   = Math.min(np.node.textContent.length, end - np.start);
    if (localStart >= localEnd) return;

    const before     = np.node.textContent.slice(0, localStart);
    const highlighted = np.node.textContent.slice(localStart, localEnd);
    const after      = np.node.textContent.slice(localEnd);

    const span = document.createElement('span');
    span.className = 'ann-highlight';
    span.dataset.aid = ann.id;
    span.style.setProperty('--ann-color', ann.color || '#fef08a');
    span.textContent = highlighted;
    span.title = ann.noteText ? ann.noteText.slice(0, 100) : '📌 Subrayado — clic para ver nota';

    if (ann.noteText || ann.imageData) {
      const pin = document.createElement('span');
      pin.className = 'ann-pin';
      pin.textContent = '📌';
      pin.addEventListener('click', e => { e.stopPropagation(); openAnnotationDetail(ann); });
      span.appendChild(pin);
    }
    span.addEventListener('click', e => { e.stopPropagation(); openAnnotationDetail(ann); });

    const frag = document.createDocumentFragment();
    if (before) frag.appendChild(document.createTextNode(before));
    frag.appendChild(span);
    if (after) frag.appendChild(document.createTextNode(after));
    np.node.parentNode.replaceChild(frag, np.node);
  });
}

// ============================================================
// NOTE MODAL
// ============================================================

function createNoteModal() {
  if (document.getElementById('noteModal')) return;
  const modal = document.createElement('div');
  modal.id = 'noteModal';
  modal.className = 'note-modal';
  modal.innerHTML = `
    <div class="note-modal-backdrop" onclick="closeNoteModal()"></div>
    <div class="note-modal-card">
      <div class="note-modal-header">
        <h3>📝 Agregar nota</h3>
        <button class="note-modal-close" onclick="closeNoteModal()">✕</button>
      </div>
      <div class="note-modal-body">
        <div class="note-color-row">
          <span>Color:</span>
          <button class="ann-color-btn modal-color-btn active" data-color="#fef08a" style="background:#fef08a"></button>
          <button class="ann-color-btn modal-color-btn"       data-color="#bbf7d0" style="background:#bbf7d0"></button>
          <button class="ann-color-btn modal-color-btn"       data-color="#fecaca" style="background:#fecaca"></button>
          <button class="ann-color-btn modal-color-btn"       data-color="#bfdbfe" style="background:#bfdbfe"></button>
          <button class="ann-color-btn modal-color-btn"       data-color="#ddd6fe" style="background:#ddd6fe"></button>
        </div>
        <div class="note-selected-preview" id="noteSelectedPreview"></div>
        <textarea id="noteTextInput" placeholder="Escribí tu comentario acá..." rows="4"></textarea>
        <div class="note-image-area" id="noteImageArea">
          <div class="note-image-drop" id="noteImageDrop">
            <span>📎 Pegá una imagen con <kbd>Ctrl+V</kbd> o</span>
            <label class="note-image-pick">
              elegí un archivo
              <input type="file" id="noteImageFile" accept="image/*" style="display:none">
            </label>
          </div>
          <div class="note-image-preview-wrap" id="noteImagePreviewWrap" style="display:none">
            <img id="noteImagePreview" class="note-image-preview" alt="Imagen adjunta">
            <button class="note-remove-image-btn" onclick="removeNoteImage()">✕ Quitar imagen</button>
          </div>
        </div>
        <label class="note-repasar-label">
          <input type="checkbox" id="noteModeRepasar">
          <span>🔖 Marcar como <strong>Repasar</strong></span>
        </label>
      </div>
      <div class="note-modal-footer">
        <button class="btn-outline" onclick="closeNoteModal()">Cancelar</button>
        <button class="btn-primary" id="saveNoteBtn" onclick="saveNote()">💾 Guardar nota</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Color selection within modal
  let selectedColor = '#fef08a';
  modal.querySelectorAll('.modal-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.querySelectorAll('.modal-color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      modal._selectedColor = btn.dataset.color;
    });
  });
  modal._selectedColor = '#fef08a';

  // Image paste on textarea
  modal.querySelector('#noteTextInput').addEventListener('paste', e => handleImagePaste(e));

  // Global paste when modal open
  document.addEventListener('paste', e => {
    if (document.getElementById('noteModal').classList.contains('open') &&
        !e.target.closest('#chatInput, [contenteditable]')) {
      handleImagePaste(e);
    }
  });

  // File picker
  modal.querySelector('#noteImageFile').addEventListener('change', e => {
    if (e.target.files[0]) loadImageFile(e.target.files[0]);
  });
}

function handleImagePaste(e) {
  const items = e.clipboardData && e.clipboardData.items;
  if (!items) return;
  for (const item of items) {
    if (item.type.startsWith('image/')) {
      e.preventDefault();
      loadImageFile(item.getAsFile());
      break;
    }
  }
}

function loadImageFile(file) {
  const reader = new FileReader();
  reader.onload = ev => resizeImageDataUrl(ev.target.result, 900, dataUrl => {
    noteImageData = dataUrl;
    showNoteImagePreview(dataUrl);
  });
  reader.readAsDataURL(file);
}

function resizeImageDataUrl(dataUrl, maxW, callback) {
  const img = new Image();
  img.onload = () => {
    let w = img.width, h = img.height;
    if (w > maxW) { h = Math.round(h * maxW / w); w = maxW; }
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    c.getContext('2d').drawImage(img, 0, 0, w, h);
    callback(c.toDataURL('image/jpeg', 0.82));
  };
  img.src = dataUrl;
}

function showNoteImagePreview(dataUrl) {
  const wrap = document.getElementById('noteImagePreviewWrap');
  const img  = document.getElementById('noteImagePreview');
  const drop = document.getElementById('noteImageDrop');
  if (img)  { img.src = dataUrl; }
  if (wrap) wrap.style.display = 'block';
  if (drop) drop.style.display = 'none';
}

function removeNoteImage() {
  noteImageData = null;
  const wrap = document.getElementById('noteImagePreviewWrap');
  const img  = document.getElementById('noteImagePreview');
  const drop = document.getElementById('noteImageDrop');
  if (img)  img.src = '';
  if (wrap) wrap.style.display = 'none';
  if (drop) drop.style.display = 'flex';
}

function openNoteModal(existingAnnotation) {
  pendingAnnotationForNote = existingAnnotation;
  noteImageData = existingAnnotation ? (existingAnnotation.imageData || null) : null;
  const modal = document.getElementById('noteModal');
  if (!modal) return;

  const previewEl  = document.getElementById('noteSelectedPreview');
  const textarea   = document.getElementById('noteTextInput');
  const repasarChk = document.getElementById('noteModeRepasar');

  if (existingAnnotation) {
    modal.querySelector('.note-modal-header h3').textContent = '✏️ Editar nota';
    if (previewEl)  previewEl.textContent = `"${existingAnnotation.selectedText}"`;
    if (textarea)   textarea.value = existingAnnotation.noteText || '';
    if (repasarChk) repasarChk.checked = existingAnnotation.repasar || false;
    modal._selectedColor = existingAnnotation.color || '#fef08a';
  } else {
    modal.querySelector('.note-modal-header h3').textContent = '📝 Agregar nota';
    if (previewEl)  previewEl.textContent = selectionData ? `"${selectionData.selectedText}"` : '';
    if (textarea)   textarea.value = '';
    if (repasarChk) repasarChk.checked = false;
    modal._selectedColor = '#fef08a';
  }

  // Sync color buttons
  modal.querySelectorAll('.modal-color-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.color === modal._selectedColor);
  });

  // Sync image
  if (noteImageData) {
    showNoteImagePreview(noteImageData);
  } else {
    removeNoteImage();
  }

  modal.classList.add('open');
}

function closeNoteModal() {
  const modal = document.getElementById('noteModal');
  if (modal) modal.classList.remove('open');
  pendingAnnotationForNote = null;
  noteImageData = null;
  hideAnnotationToolbar();
}

function saveNote() {
  const modal    = document.getElementById('noteModal');
  const textarea = document.getElementById('noteTextInput');
  const repasarChk = document.getElementById('noteModeRepasar');
  const noteText = textarea ? textarea.value.trim() : '';
  const color    = modal._selectedColor || '#fef08a';
  const isRepasar = repasarChk ? repasarChk.checked : false;

  if (pendingAnnotationForNote) {
    // Edit existing
    updateAnnotation(pendingAnnotationForNote.unitId, pendingAnnotationForNote.id, {
      noteText, imageData: noteImageData, repasar: isRepasar, color
    });
    // Update visual in DOM
    const spans = document.querySelectorAll(`[data-aid="${pendingAnnotationForNote.id}"]`);
    spans.forEach(span => {
      span.style.setProperty('--ann-color', color);
      span.title = noteText ? noteText.slice(0, 100) : '📌 Subrayado';
      // Update/add pin
      let pin = span.querySelector('.ann-pin');
      if (noteText || noteImageData) {
        if (!pin) {
          pin = document.createElement('span');
          pin.className = 'ann-pin';
          pin.textContent = '📌';
          span.appendChild(pin);
        }
        pin.onclick = e => { e.stopPropagation(); openAnnotationDetail({ ...pendingAnnotationForNote, noteText, imageData: noteImageData, color, repasar: isRepasar }); };
      } else if (pin) {
        pin.remove();
      }
    });
    if (notesPanelOpen) renderNotesPanel();
    showToast('Nota actualizada ✓', 'success');
  } else if (selectionData) {
    createHighlight(color, noteText, noteImageData, isRepasar);
    if (notesPanelOpen) renderNotesPanel();
    showToast('Nota guardada ✓', 'success');
  }
  closeNoteModal();
}

function openAnnotationDetail(ann) {
  // Reload the latest version of this annotation from store
  const uid = String(ann.unitId || activeUnitId);
  const latest = (annotations[uid] || []).find(a => a.id === ann.id) || ann;
  pendingAnnotationForNote = latest;
  noteImageData = latest.imageData || null;

  const modal = document.getElementById('noteModal');
  if (!modal) return;

  const previewEl  = document.getElementById('noteSelectedPreview');
  const textarea   = document.getElementById('noteTextInput');
  const repasarChk = document.getElementById('noteModeRepasar');

  modal.querySelector('.note-modal-header h3').textContent = '✏️ Ver / editar nota';
  if (previewEl)  previewEl.textContent = `"${latest.selectedText}"`;
  if (textarea)   textarea.value = latest.noteText || '';
  if (repasarChk) repasarChk.checked = latest.repasar || false;
  modal._selectedColor = latest.color || '#fef08a';

  modal.querySelectorAll('.modal-color-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.color === modal._selectedColor);
  });

  if (noteImageData) showNoteImagePreview(noteImageData);
  else removeNoteImage();

  modal.classList.add('open');
}

// ============================================================
// NOTES PANEL
// ============================================================

function createNotesPanel() {
  if (document.getElementById('notesPanel')) return;

  const overlay = document.createElement('div');
  overlay.id = 'notesPanelOverlay';
  overlay.className = 'notes-panel-overlay';
  overlay.onclick = closeNotesPanel;
  document.body.appendChild(overlay);

  const panel = document.createElement('div');
  panel.id = 'notesPanel';
  panel.className = 'notes-panel';
  panel.innerHTML = `
    <div class="notes-panel-header">
      <div class="notes-panel-title">
        <span class="notes-panel-icon">📚</span>
        <h2>Mis Notas</h2>
      </div>
      <div class="notes-panel-filters">
        <button class="notes-filter-btn active" data-filter="all"     onclick="filterNotes('all')">Todas</button>
        <button class="notes-filter-btn"        data-filter="repasar" onclick="filterNotes('repasar')">🔖 Repasar</button>
      </div>
      <button class="notes-panel-close" onclick="closeNotesPanel()">✕</button>
    </div>
    <div class="notes-list" id="notesList">
      <div class="notes-empty">
        <div class="notes-empty-icon">📭</div>
        <p>Seleccioná texto en cualquier sección y subrayalo para crear tu primera nota.</p>
      </div>
    </div>
  `;
  document.body.appendChild(panel);
}

function openNotesPanel() {
  notesPanelOpen = true;
  renderNotesPanel();
  document.getElementById('notesPanel').classList.add('open');
  document.getElementById('notesPanelOverlay').classList.add('open');
}

function closeNotesPanel() {
  notesPanelOpen = false;
  document.getElementById('notesPanel').classList.remove('open');
  document.getElementById('notesPanelOverlay').classList.remove('open');
}

function filterNotes(filter) {
  currentNotesFilter = filter;
  document.querySelectorAll('.notes-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });
  renderNotesPanel();
}

function renderNotesPanel() {
  const list = document.getElementById('notesList');
  if (!list) return;

  // Flatten all annotations
  let all = [];
  Object.entries(annotations).forEach(([uid, anns]) => {
    (anns || []).forEach(a => all.push({ ...a, _uid: uid }));
  });

  if (currentNotesFilter === 'repasar') all = all.filter(a => a.repasar);
  all.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (all.length === 0) {
    list.innerHTML = `
      <div class="notes-empty">
        <div class="notes-empty-icon">${currentNotesFilter === 'repasar' ? '🔖' : '📭'}</div>
        <p>${currentNotesFilter === 'repasar'
          ? 'No tenés notas marcadas como Repasar todavía.'
          : 'Todavía no tenés notas. Seleccioná texto y subrayalo para empezar.'}</p>
      </div>`;
    return;
  }

  // Group by unit
  const byUnit = {};
  all.forEach(a => {
    const key = a._uid;
    if (!byUnit[key]) byUnit[key] = [];
    byUnit[key].push(a);
  });

  list.innerHTML = Object.entries(byUnit).map(([uid, anns]) => {
    const unit = typeof UNITS !== 'undefined' ? UNITS.find(u => u.id === parseInt(uid)) : null;
    const label = unit ? `${unit.icon} U${uid}. ${unit.title}` : `Unidad ${uid}`;
    return `
      <div class="notes-unit-group">
        <div class="notes-unit-label">${label}</div>
        ${anns.map(ann => `
          <div class="note-item${ann.repasar ? ' repasar' : ''}" data-nid="${ann.id}">
            <div class="note-item-highlight" style="--ann-color:${ann.color || '#fef08a'}">
              <span class="note-highlight-text">"${escapeHtml(ann.selectedText ? ann.selectedText.slice(0, 90) + (ann.selectedText.length > 90 ? '…' : '') : '')}"</span>
            </div>
            ${ann.noteText ? `<div class="note-item-text">${escapeHtml(ann.noteText)}</div>` : ''}
            ${ann.imageData ? `<img class="note-item-image" src="${ann.imageData}" alt="Imagen adjunta" loading="lazy">` : ''}
            <div class="note-item-meta">
              <span class="note-item-section">${getSectionLabel(ann.section)}</span>
              ${ann.repasar ? '<span class="note-repasar-badge">🔖 Repasar</span>' : ''}
              <span class="note-item-date">${formatDate(ann.createdAt)}</span>
            </div>
            <div class="note-item-actions">
              <button class="note-action-btn" onclick="editNoteFromPanel('${ann._uid}','${ann.id}')">✏️ Editar</button>
              <button class="note-action-btn${ann.repasar ? ' repasar-on' : ''}" onclick="toggleRepasar('${ann._uid}','${ann.id}')">
                ${ann.repasar ? '✅ Repasar' : '🔖 Repasar'}
              </button>
              <button class="note-action-btn delete-btn" onclick="deleteNoteFromPanel('${ann._uid}','${ann.id}')">🗑️</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function getSectionLabel(sectionId) {
  const m = { teoria: '📖 Teoría', resumen: '⚡ Resumen', formulas: '🔢 Fórmulas', casos: '📐 Casos' };
  return m[sectionId] || sectionId;
}

function formatDate(iso) {
  if (!iso) return '';
  try { return new Date(iso).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' }); }
  catch { return ''; }
}

function editNoteFromPanel(uid, id) {
  const ann = (annotations[uid] || []).find(a => a.id === id);
  if (ann) openAnnotationDetail({ ...ann, unitId: uid });
}

function toggleRepasar(uid, id) {
  const ann = (annotations[uid] || []).find(a => a.id === id);
  if (!ann) return;
  updateAnnotation(uid, id, { repasar: !ann.repasar });
  renderNotesPanel();
  showToast(ann.repasar ? 'Quitado de Repasar' : '🔖 Marcado como Repasar', 'success');
}

function deleteNoteFromPanel(uid, id) {
  if (!confirm('¿Eliminar esta nota?')) return;
  deleteAnnotation(uid, id);
  // Remove visual highlight from DOM
  document.querySelectorAll(`[data-aid="${id}"]`).forEach(span => {
    const parent = span.parentNode;
    const textNode = document.createTextNode(span.textContent.replace('📌', '').trim());
    parent.replaceChild(textNode, span);
    parent.normalize();
  });
  renderNotesPanel();
  showToast('Nota eliminada', 'info');
}

// ============================================================
// GLOBAL EXPORTS
// ============================================================
window.initAnnotationSystem   = initAnnotationSystem;
window.applyAnnotationsToSection = applyAnnotationsToSection;
window.openNotesPanel         = openNotesPanel;
window.closeNotesPanel        = closeNotesPanel;
window.filterNotes            = filterNotes;
window.closeNoteModal         = closeNoteModal;
window.saveNote               = saveNote;
window.removeNoteImage        = removeNoteImage;
window.editNoteFromPanel      = editNoteFromPanel;
window.toggleRepasar          = toggleRepasar;
window.deleteNoteFromPanel    = deleteNoteFromPanel;
