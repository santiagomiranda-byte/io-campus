// ============================================================
// bot.js — AI bot with Puter.js (gratis, sin API key) + adjuntos
// ============================================================

const BOT_RESPONSES = [
  {
    keywords: ["simplex", "tableau", "pivote", "pivotear", "base", "básica", "variable entrante", "variable saliente"],
    title: "Método Simplex",
    response: `El **Simplex** es el algoritmo estándar para resolver Programación Lineal.

**Pasos clave:**
1. Convertir a forma estándar: agregar variables de holgura (slack) sᵢ
2. Armar el **tableau inicial** con slacks en la base
3. **Variable entrante** → columna con mayor coeficiente negativo en fila Z
4. **Variable saliente** → mínimo ratio bᵢ/aᵢⱼ (con aᵢⱼ > 0)
5. Pivotear: hacer 1 el elemento pivote, 0 el resto de su columna
6. Repetir hasta que todos los coef en fila Z ≥ 0 → **ÓPTIMO**

**Condición de optimalidad (MAX):** todos los valores en la fila Z son ≥ 0`
  },
  {
    keywords: ["pert", "cpm", "camino crítico", "crítico", "nodo", "actividad", "proyecto", "forward", "backward", "tiempo esperado", "margen total"],
    title: "PERT / CPM",
    response: `**PERT/CPM** son técnicas de redes para gestión de proyectos.

**Cálculo del camino crítico:**
- **TE (Forward):** TEⱼ = MAX(TEᵢ + dᵢⱼ) → de izquierda a derecha
- **TL (Backward):** TLᵢ = MIN(TLⱼ − dᵢⱼ) → de derecha a izquierda
- **Margen Total:** MT = TLⱼ − TEᵢ − dᵢⱼ

**Camino crítico = actividades con MT = 0**

**PERT probabilístico:** tₑ = (a + 4m + b)/6 | σ² = [(b−a)/6]²

La duración del proyecto = TE del nodo final`
  },
  {
    keywords: ["inventario", "inventarios", "eoq", "lote", "stock", "epq", "pedido", "orden", "reorden", "abc", "holding"],
    title: "Gestión de Inventarios",
    response: `**Modelos de Inventario** — fórmulas clave:

**EOQ (Economic Order Quantity):**
- Q* = √(2DS/H)
- D = demanda anual | S = costo de ordenar | H = costo de mantener

**Costo Total:** CT = (D/Q)·S + (Q/2)·H → mínimo cuando costos de ordenar = costos de mantener

**EPQ (producción interna):** Q* = √(2DS/H) · √(p/(p−d))

**Punto de Reorden:** ROP = d·L (demanda diaria × lead time)

**ABC:** A (20% ítems, 80% valor) | B (30%, 15%) | C (50%, 5%)`
  },
  {
    keywords: ["cola", "colas", "espera", "canal", "servidor", "lambda", "mu", "mm1", "mm/1", "m/m/1", "little", "utilización", "kendall"],
    title: "Teoría de Colas",
    response: `**Teoría de Colas M/M/1** — sistema con 1 servidor:

**Parámetros:** λ=llegadas | μ=servicio | ρ=λ/μ (utilización, debe ser <1)

**Métricas:**
- L = ρ/(1−ρ) → clientes en el sistema
- Lq = ρ²/(1−ρ) → clientes en la cola
- W = 1/(μ−λ) → tiempo en el sistema
- Wq = λ/[μ(μ−λ)] → tiempo en la cola

**Fórmula de Little (universal):** L = λ·W | Lq = λ·Wq

**Notación Kendall:** A/B/s → ej. M/M/1, M/M/2, M/G/1`
  },
  {
    keywords: ["simulación", "simular", "montecarlo", "aleatorio", "aleatoria", "transformación", "inversa", "congruencial", "warmup", "warm-up"],
    title: "Simulación y Montecarlo",
    response: `**Simulación de Procesos — Montecarlo:**

**Pasos:**
1. Definir la distribución de probabilidad
2. Construir la FDA (Función de Distribución Acumulada)
3. Asignar rangos de números aleatorios (NA) proporcionales a P
4. Generar NA (tabla o computadora)
5. Leer el valor simulado usando la FDA inversa

**Transformación Inversa:** X = F⁻¹(U) donde U ~ U(0,1)
- Exponencial: X = −ln(U)/λ
- Uniforme(a,b): X = a + (b−a)·U

**Generador congruencial:** Xₙ₊₁ = (a·Xₙ + c) mod m`
  },
  {
    keywords: ["dual", "dualidad", "precio sombra", "primal", "complementaria"],
    title: "Dualidad en PL",
    response: `**Problema Dual en Programación Lineal:**

Si el **Primal** es: MAX Z = cᵀx | Ax ≤ b | x ≥ 0
El **Dual** es: MIN W = bᵀy | Aᵀy ≥ c | y ≥ 0

**Teorema de dualidad fuerte:** Z* = W* (si ambos son factibles)

**Precio sombra (yᵢ*):** incremento en Z* por cada unidad adicional del recurso bᵢ

**Holgura complementaria:** xⱼ·(c−Aᵀy)ⱼ = 0 | yᵢ·(b−Ax)ᵢ = 0`
  },
  {
    keywords: ["branch", "bound", "entera", "entero", "binaria", "binario", "mochila", "0-1", "programación entera"],
    title: "Branch and Bound",
    response: `**Branch and Bound** para Programación Entera:

**Procedimiento:**
1. Resolver la relajación LP (ignorar integralidad)
2. Si la solución es entera → terminado ✓
3. Seleccionar una variable fraccionaria xⱼ = f (ej: 2.7)
4. **Rama izquierda:** añadir xⱼ ≤ ⌊f⌋ (ej: xⱼ ≤ 2)
5. **Rama derecha:** añadir xⱼ ≥ ⌈f⌉ (ej: xⱼ ≥ 3)
6. Resolver cada subproblema | Podar si: infactible | peor que cota | entero
7. Actualizar la mejor solución entera conocida`
  },
  {
    keywords: ["sensibilidad", "análisis de sensibilidad", "rango", "optimalidad", "factibilidad", "parámetro"],
    title: "Análisis de Sensibilidad",
    response: `**Análisis de Sensibilidad en PL:**

Estudia cómo cambia Z* ante variaciones en los parámetros:

**Rango de optimalidad (cⱼ):** intervalo donde la base óptima no cambia
- Calcular los ratios en la fila Z del tableau óptimo

**Rango de factibilidad (bᵢ):** intervalo donde la base sigue siendo factible
- Relacionado con los precios sombra

**Precio sombra:** ΔZ*/Δbᵢ (cuánto mejora Z* por unidad adicional de recurso i)

Si el precio sombra de un recurso es 0 → el recurso no es restrictivo (tiene holgura)`
  },
  {
    keywords: ["formulación", "formular", "modelar", "modelo", "función objetivo", "restricción", "variable de decisión"],
    title: "Formulación de Modelos",
    response: `**Pasos para formular un modelo de PL:**

1. **Identificar variables de decisión:** ¿qué controlamos? (ej: x₁ = unidades del prod A)
2. **Función objetivo:** ¿qué optimizamos? MAX ganancia o MIN costo → expresión lineal
3. **Restricciones:** limitaciones físicas, presupuestarias, de calidad → inecuaciones lineales
4. **No negatividad:** xⱼ ≥ 0 para todas las variables

**Verificar:**
- ¿Los coeficientes tienen unidades consistentes?
- ¿Todas las restricciones relevantes están incluidas?
- ¿El modelo es lineal?`
  }
];

const DEFAULT_RESPONSE = `No pude conectar con la IA en este momento.

**Para que funcione la IA:**
1. Hacé clic en el botón de enviar de nuevo
2. Si aparece un popup de Puter → aceptalo (es la cuenta gratis de IA)
3. Si no aparece nada → permitir popups para este sitio en tu navegador

Mientras tanto podés usar los botones rápidos de abajo para respuestas básicas.`;

// ---- State ----
let conversationHistory = [];
let pendingAttachment = null;
let _puterReady = false;
let _puterLoading = false;

async function ensurePuter() {
  if (_puterReady && window.puter) return;
  if (window.puter) { _puterReady = true; return; }

  if (_puterLoading) {
    // Wait for the existing load attempt
    await new Promise((resolve) => {
      const check = setInterval(() => {
        if (window.puter || _puterReady) { clearInterval(check); resolve(); }
      }, 200);
      setTimeout(() => { clearInterval(check); resolve(); }, 12000);
    });
    if (!window.puter) throw new Error('La IA no cargó. Recargá la página y permitir popups si te lo pide.');
    _puterReady = true;
    return;
  }

  _puterLoading = true;
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('timeout')), 12000);
    if (window.puter) { clearTimeout(timeout); resolve(); return; }
    window.addEventListener('puterloaded', () => { clearTimeout(timeout); resolve(); }, { once: true });
  });
  _puterLoading = false;
  _puterReady = true;
}

// ---- DOM ----
let chatMessages, chatInput, sendBtn, botPanel, botToggle;
let fileInput, attachBtn, attachmentPreview, attachmentNameEl;

// ---- Init ----
function initBot() {
  chatMessages     = document.getElementById('chatMessages');
  chatInput        = document.getElementById('chatInput');
  sendBtn          = document.getElementById('sendBtn');
  botPanel         = document.getElementById('botPanel');
  botToggle        = document.getElementById('botToggle');
  fileInput        = document.getElementById('fileInput');
  attachBtn        = document.getElementById('attachBtn');
  attachmentPreview = document.getElementById('attachmentPreview');
  attachmentNameEl  = document.getElementById('attachmentName');

  if (!chatMessages) return;

  sendBtn.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  });
  chatInput.addEventListener('input', autoResize);
  chatInput.addEventListener('paste', handlePaste);

  botToggle.addEventListener('click', toggleBot);
  document.getElementById('closeBot').addEventListener('click', () => {
    botPanel.classList.remove('open');
  });

  if (attachBtn) attachBtn.addEventListener('click', () => fileInput && fileInput.click());
  if (fileInput) fileInput.addEventListener('change', handleFileSelect);
  const removeBtn = document.getElementById('attachmentRemove');
  if (removeBtn) removeBtn.addEventListener('click', clearAttachment);

  const captureBtn = document.getElementById('captureBtn');
  if (captureBtn) captureBtn.addEventListener('click', startCapture);

  document.querySelectorAll('.quick-topic').forEach(btn => {
    btn.addEventListener('click', () => {
      chatInput.value = btn.dataset.topic;
      handleSend();
    });
  });

  // Try to load Puter.js and update status
  const statusEl = document.querySelector('.bot-status');
  if (statusEl) statusEl.textContent = '🟡 Conectando IA…';
  ensurePuter()
    .then(() => { if (statusEl) statusEl.textContent = '🟢 IA lista — gratis'; })
    .catch(() => { if (statusEl) statusEl.textContent = '⚠️ IA no disponible — recargá'; });

  setTimeout(() => {
    addMessage('bot', `¡Hola! Soy tu asistente de **Investigación Operativa** con IA gratuita.

Podés:
- Preguntarme sobre **cualquier tema** de IO o lo que quieras
- Adjuntar tu **guía en PDF** con el clip 📎
- Subir una **imagen** de un ejercicio y preguntarme sobre ella
- Usar el botón 📸 para **capturar** cualquier parte de la guía en pantalla
- Pegar un **link de YouTube**

_La primera vez que mandes un mensaje puede aparecer un popup de login gratuito en Puter.com — aceptalo para activar la IA._ ¿Qué querés repasar?`);
  }, 500);
}

function autoResize() {
  chatInput.style.height = 'auto';
  chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
}

function toggleBot() {
  botPanel.classList.toggle('open');
}

// ---- File / attachment handling ----
async function handleFileSelect(e) {
  const file = e.target.files[0];
  if (!file) return;
  fileInput.value = '';

  if (file.type === 'application/pdf') {
    showAttachmentPreview('📄 ' + file.name, 'Extrayendo texto...');
    try {
      const { text, totalPages } = await extractPdfText(file);
      pendingAttachment = { type: 'pdf', name: file.name, content: text };
      const label = totalPages > 20
        ? `${totalPages} págs — solo primeras 20 para el bot`
        : Math.ceil(text.length / 1000) + 'k caracteres';
      showAttachmentPreview('📄 ' + file.name, label);

      if (totalPages > 20) {
        window._lastPdfFile = file;
        addMessage('bot',
          `⚠️ Este PDF tiene **${totalPages} páginas**. Para el bot solo voy a usar las primeras 20 — el resto no lo va a considerar.\n\nSi querés leer el PDF completo con **subrayado y notas**, abrilo en el visor integrado: <button class="open-viewer-btn" onclick="window.pdfViewer && window.pdfViewer.open(window._lastPdfFile)">📖 Abrir visor completo</button>`
        );
      }
    } catch {
      pendingAttachment = { type: 'pdf', name: file.name, content: `[Archivo PDF: ${file.name}]` };
      showAttachmentPreview('📄 ' + file.name);
    }
  } else if (file.type.startsWith('image/')) {
    const base64 = await readAsBase64(file);
    pendingAttachment = { type: 'image', name: file.name, content: base64 };
    showAttachmentPreview('🖼️ ' + file.name);
  }
}

function handlePaste(e) {
  const text = e.clipboardData.getData('text');
  const video = detectVideoUrl(text);
  if (video) {
    e.preventDefault();
    pendingAttachment = { type: 'video', name: video.title, url: video.url };
    showAttachmentPreview('🎬 ' + video.title);
  }
}

function detectVideoUrl(text) {
  const trimmed = text.trim();
  const ytMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return { url: trimmed, title: 'YouTube video' };
  if (trimmed.match(/^https?:\/\/.+\.(mp4|webm|mov)/i)) return { url: trimmed, title: trimmed };
  return null;
}

function showAttachmentPreview(name, subtitle) {
  if (!attachmentPreview || !attachmentNameEl) return;
  attachmentPreview.style.display = 'flex';
  attachmentNameEl.textContent = name + (subtitle ? ' — ' + subtitle : '');
}

function clearAttachment() {
  pendingAttachment = null;
  if (attachmentPreview) attachmentPreview.style.display = 'none';
  if (attachmentNameEl) attachmentNameEl.textContent = '';
}

// ---- PDF extraction (lazy-load pdf.js) ----
async function extractPdfText(file) {
  if (!window.pdfjsLib) {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  const totalPages = pdf.numPages;
  const maxPages = Math.min(totalPages, 20);
  const texts = [];
  for (let i = 1; i <= maxPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    texts.push(content.items.map(item => item.str).join(' '));
  }
  return { text: texts.join('\n\n'), totalPages };
}

// ---- Screen region capture ----
function startCapture() {
  if (!window.html2canvas) {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js')
      .then(doCapture).catch(() => addMessage('bot', '⚠️ No se pudo cargar el capturador.'));
  } else {
    doCapture();
  }
}

function doCapture() {
  const overlay = document.createElement('div');
  overlay.id = 'captureOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;cursor:crosshair;background:rgba(0,0,0,0.15);';
  overlay.title = 'Arrastrá para seleccionar el área a capturar. ESC para cancelar.';

  const hint = document.createElement('div');
  hint.style.cssText = 'position:fixed;top:12px;left:50%;transform:translateX(-50%);background:#1e1e2e;color:white;padding:8px 18px;border-radius:20px;font-size:13px;z-index:100000;pointer-events:none;';
  hint.textContent = 'Arrastrá para capturar un área de la guía — ESC para cancelar';
  document.body.appendChild(hint);

  let startX, startY, selBox;

  const rect2 = (x, y, w, h) => {
    if (!selBox) {
      selBox = document.createElement('div');
      selBox.style.cssText = 'position:fixed;border:2px solid #8b5cf6;background:rgba(139,92,246,0.1);z-index:100001;pointer-events:none;';
      document.body.appendChild(selBox);
    }
    selBox.style.left   = Math.min(x, x + w) + 'px';
    selBox.style.top    = Math.min(y, y + h) + 'px';
    selBox.style.width  = Math.abs(w) + 'px';
    selBox.style.height = Math.abs(h) + 'px';
  };

  const cleanup = () => {
    overlay.remove();
    hint.remove();
    selBox?.remove();
    document.removeEventListener('keydown', onKey);
  };

  const onKey = (e) => { if (e.key === 'Escape') cleanup(); };
  document.addEventListener('keydown', onKey);

  overlay.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    startY = e.clientY;
    overlay.addEventListener('mousemove', onMove);
    overlay.addEventListener('mouseup', onUp, { once: true });
  });

  const onMove = (e) => rect2(startX, startY, e.clientX - startX, e.clientY - startY);

  const onUp = async (e) => {
    overlay.removeEventListener('mousemove', onMove);
    cleanup();

    const x = Math.min(startX, e.clientX);
    const y = Math.min(startY, e.clientY);
    const w = Math.abs(e.clientX - startX);
    const h = Math.abs(e.clientY - startY);

    if (w < 20 || h < 20) return;

    try {
      const canvas = await html2canvas(document.body, {
        x: x + window.scrollX,
        y: y + window.scrollY,
        width: w,
        height: h,
        scale: window.devicePixelRatio || 1,
        useCORS: true,
        logging: false
      });
      const base64 = canvas.toDataURL('image/png');
      pendingAttachment = { type: 'image', name: 'captura-pantalla.png', content: base64 };
      showAttachmentPreview('📸 Captura de pantalla');
      botPanel.classList.add('open');
      chatInput.focus();
    } catch {
      addMessage('bot', '⚠️ No se pudo capturar la imagen.');
    }
  };

  document.body.appendChild(overlay);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function readAsBase64(file) {
  return new Promise(resolve => {
    const r = new FileReader();
    r.onload = e => resolve(e.target.result);
    r.readAsDataURL(file);
  });
}

// ---- Send message ----
async function handleSend() {
  const userText = chatInput.value.trim();
  if (!userText && !pendingAttachment) return;

  let displayText = userText;
  if (pendingAttachment) {
    const icon = { pdf: '📄', image: '🖼️', video: '🎬' }[pendingAttachment.type] || '📎';
    if (displayText) displayText += '\n';
    displayText += icon + ' ' + pendingAttachment.name;
  }
  addMessage('user', displayText || '[adjunto]');

  chatInput.value = '';
  chatInput.style.height = 'auto';
  sendBtn.disabled = true;

  const attachment = pendingAttachment;
  clearAttachment();

  const typingId = showTyping();
  try {
    const response = await sendToAI(userText, attachment);
    removeTyping(typingId);
    addMessage('bot', response);
  } catch (err) {
    removeTyping(typingId);
    console.warn('AI error:', err);
    const errMsg = err?.message || 'Error desconocido';
    const isPuterError = errMsg.includes('popup') || errMsg.includes('Puter') || errMsg.includes('puter') || errMsg.includes('disponible') || errMsg.includes('timeout');
    if (isPuterError) {
      addMessage('bot', `⚠️ **No se pudo conectar con la IA.**\n\n${errMsg}\n\n💡 **Qué hacer:**\n- Permitir popups para este sitio\n- Recargar la página con **Ctrl+Shift+R** (Win) o **Cmd+Shift+R** (Mac)\n- Si aparece un popup de Puter.com → aceptalo para activar la IA gratuita`);
    } else {
      addMessage('bot', `⚠️ Error de IA: ${errMsg}`);
    }
    const statusEl = document.querySelector('.bot-status');
    if (statusEl) statusEl.textContent = '⚠️ Error de IA — reintentá';
  } finally {
    sendBtn.disabled = false;
  }
}

// ---- Puter.js AI ----
async function sendToAI(userText, attachment) {
  await ensurePuter();
  if (!window.puter) throw new Error('La IA (Puter) no está disponible. Recargá la página con Ctrl+Shift+R y permitir popups si te lo pide.');

  let userContent;

  if (attachment?.type === 'image') {
    userContent = [
      { type: 'text', text: userText || 'Analizá esta imagen en el contexto de Investigación Operativa.' },
      { type: 'image_url', image_url: { url: attachment.content } }
    ];
  } else {
    let text = userText || '';
    if (attachment?.type === 'pdf') {
      text += `\n\n[Contenido del PDF "${attachment.name}"]\n${attachment.content.slice(0, 8000)}`;
    } else if (attachment?.type === 'video') {
      text += `\n\n[El alumno adjuntó este video: ${attachment.url}]`;
    }
    userContent = text.trim();
  }

  conversationHistory.push({ role: 'user', content: userContent });

  const messages = [
    { role: 'system', content: buildSystemPrompt() },
    ...conversationHistory
  ];

  const result = await puter.ai.chat(messages);
  const text = extractText(result);

  conversationHistory.push({ role: 'assistant', content: text });
  if (conversationHistory.length > 20) conversationHistory = conversationHistory.slice(-16);

  return text;
}

function extractText(response) {
  if (typeof response === 'string') return response;
  if (response?.message?.content) {
    const c = response.message.content;
    if (typeof c === 'string') return c;
    if (Array.isArray(c)) return c.map(p => p.text || '').join('');
  }
  if (response?.choices?.[0]?.message?.content) return response.choices[0].message.content;
  if (response?.content?.[0]?.text) return response.content[0].text;
  return String(response);
}

function buildSystemPrompt() {
  const unitTitle    = document.getElementById('unitTitle')?.textContent?.trim() || '';
  const teoriaText   = document.getElementById('teoriaContent')?.innerText?.trim().slice(0, 3000) || '';
  const formulasText = document.getElementById('formulasContent')?.innerText?.trim().slice(0, 1500) || '';

  return `Sos un asistente inteligente y tutor de Investigación Operativa para ingeniería industrial en Argentina.
Respondés siempre en español rioplatense (vos, te, etc.), de forma clara y concisa.
Podés responder cualquier pregunta general, no solo de IO: comportate como una IA de propósito general.
Si el alumno adjunta un PDF, analizá su contenido en detalle y respondé en base a él.
Si adjunta una imagen o screenshot, describí e interpretá lo que ves con detalle, identificando ejercicios, tablas, fórmulas o conceptos visibles.
Si menciona un video, reconocelo y respondé con lo que podés inferir.

FORMATO DE TABLA SIMPLEX — Cuando resolvés ejercicios de Simplex o Programación Lineal, SIEMPRE usás tablas HTML con exactamente esta estructura:
<table class="simplex-table">
  <tr class="cj-row"><td></td><td></td><td>cj→</td><td>[c1]</td><td>[c2]</td><td>...</td><td></td></tr>
  <tr class="header-row"><td>ck</td><td>xk</td><td>Bk</td><td>[var1]</td><td>[var2]</td><td>...</td><td>bi/aij</td></tr>
  <tr><td>[ck]</td><td>[xk]</td><td>[Bk]</td><td>[a11]</td><td>[a12]</td><td>...</td><td>[ratio]</td></tr>
  <tr class="z-row"><td colspan="2">Z=[valor]</td><td></td><td>[zj-cj1]</td><td>[zj-cj2]</td><td>...</td><td>zj-cj</td></tr>
</table>
Marcás la celda pivote con class="pivot". Si hay múltiples iteraciones, generás una tabla por iteración. Explicás brevemente qué hiciste entre iteraciones.

Unidad actual: ${unitTitle || 'Investigación Operativa'}
Unidades del curso: 1. Intro a IO | 2. Programación Lineal | 3. Prog. Entera/Extensiones | 4. PERT/CPM | 5. Inventarios | 6. Teoría de Colas | 7. Simulación
${teoriaText   ? '\nContenido de la guía (teoría):\n' + teoriaText   : ''}
${formulasText ? '\nFórmulas de la unidad:\n'          + formulasText : ''}`;
}

// ---- Fallback offline ----
function getPreProgrammedResponse(message) {
  const lower = message.toLowerCase();
  for (const entry of BOT_RESPONSES) {
    if (entry.keywords.some(kw => lower.includes(kw))) return entry.response;
  }
  return DEFAULT_RESPONSE;
}

// ---- UI helpers ----
function addMessage(role, text) {
  const div = document.createElement('div');
  div.className = `chat-message ${role}`;
  div.innerHTML = `
    <div class="message-avatar">${role === 'bot' ? '🤖' : '👤'}</div>
    <div class="message-bubble">${formatBotMessage(text)}</div>
  `;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const id = 'typing-' + Date.now();
  const div = document.createElement('div');
  div.className = 'chat-message bot';
  div.id = id;
  div.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message-bubble typing"><span></span><span></span><span></span></div>
  `;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return id;
}

function removeTyping(id) {
  document.getElementById(id)?.remove();
}

function formatBotMessage(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^## (.+)$/gm, '<h3>$1</h3>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, match => `<ul>${match}</ul>`)
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^(?!<[hup])(.+)$/gm, (m, p1) => p1 ? `<p>${p1}</p>` : m)
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hul])/g, '$1')
    .replace(/(<\/[hul][^>]*>)<\/p>/g, '$1');
}

window.initBot = initBot;
window.toggleBot = toggleBot;
