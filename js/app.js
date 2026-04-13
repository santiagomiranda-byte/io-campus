// ============================================================
// app.js — Main application logic for IO Campus
// ============================================================

// ---- Progress Management ----
let progress = {};

function loadProgress() {
  try {
    progress = JSON.parse(localStorage.getItem('io_progress') || '{}');
  } catch { progress = {}; }
}

function saveProgress() {
  localStorage.setItem('io_progress', JSON.stringify(progress));
}

function markUnitComplete(unitId) {
  progress[unitId] = progress[unitId] || {};
  progress[unitId].completed = true;
  progress[unitId].completedAt = new Date().toISOString();
  saveProgress();
  updateProgressUI();
  showToast('Unidad marcada como completada ✓', 'success');
}

function updateProgressUI() {
  const total = UNITS.length;
  const completed = Object.values(progress).filter(p => p && p.completed).length;
  const pct = Math.round((completed / total) * 100);

  const progressEl = document.getElementById('totalProgress');
  const progressBar = document.getElementById('totalProgressBar');
  const progressText = document.getElementById('totalProgressText');

  if (progressEl) progressEl.textContent = `${completed}/${total}`;
  if (progressBar) progressBar.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `${pct}% completado`;

  // Update unit cards
  UNITS.forEach(unit => {
    const card = document.getElementById(`unit-card-${unit.id}`);
    if (card) {
      const isDone = progress[unit.id] && progress[unit.id].completed;
      card.classList.toggle('completed', isDone);
    }
  });
}

// ---- Search ----
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  if (!searchInput) return;

  searchInput.addEventListener('input', debounce(() => {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length < 2) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }
    performSearch(query, searchResults);
  }, 300));

  document.addEventListener('click', e => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
}

function performSearch(query, resultsEl) {
  const results = [];

  UNITS.forEach(unit => {
    // Search in title and topics
    if (unit.title.toLowerCase().includes(query) || unit.description.toLowerCase().includes(query)) {
      results.push({ type: 'unit', unit, title: unit.title, snippet: unit.description });
    }

    // Search in topics
    unit.topics.forEach(topic => {
      if (topic.toLowerCase().includes(query)) {
        results.push({ type: 'topic', unit, title: topic, snippet: `Unidad ${unit.id}: ${unit.title}` });
      }
    });

    // Search in flashcards
    const cards = FLASHCARDS[unit.id] || [];
    cards.forEach((card, i) => {
      if (card.q.toLowerCase().includes(query) || card.a.toLowerCase().includes(query)) {
        results.push({
          type: 'flashcard',
          unit,
          cardIndex: i,
          title: card.q.substring(0, 60) + (card.q.length > 60 ? '...' : ''),
          snippet: card.a.substring(0, 80) + '...'
        });
      }
    });
  });

  if (results.length === 0) {
    resultsEl.innerHTML = '<div class="search-result-empty">No se encontraron resultados</div>';
    resultsEl.style.display = 'block';
    return;
  }

  resultsEl.innerHTML = results.slice(0, 8).map(r => `
    <div class="search-result-item" onclick="handleSearchResult(${JSON.stringify(r).replace(/"/g, '&quot;')})">
      <span class="search-result-type">${
        r.type === 'unit' ? '📖' : r.type === 'topic' ? '🏷️' : '🃏'
      }</span>
      <div class="search-result-content">
        <div class="search-result-title">${r.title}</div>
        <div class="search-result-snippet">${r.snippet}</div>
      </div>
    </div>
  `).join('');
  resultsEl.style.display = 'block';
}

function handleSearchResult(result) {
  document.getElementById('searchResults').style.display = 'none';
  document.getElementById('searchInput').value = '';

  if (result.type === 'unit' || result.type === 'topic') {
    navigateToUnit(result.unit.id);
  } else if (result.type === 'flashcard') {
    navigateToUnit(result.unit.id, 'flashcards', result.cardIndex);
  }
}

// ---- Content Editor (Edit Mode) ----
let editMode = false;

function toggleEditMode() {
  editMode = !editMode;
  const btn = document.getElementById('editModeBtn');
  const saveBtn = document.getElementById('saveContentBtn');
  const editableElements = document.querySelectorAll('.editable-content');

  if (editMode) {
    editableElements.forEach(el => { el.contentEditable = 'true'; el.classList.add('editing'); });
    if (btn) { btn.textContent = '✏️ Modo Edición ON'; btn.classList.add('active'); }
    if (saveBtn) saveBtn.style.display = 'inline-flex';
    showToast('Modo edición activado. Podés modificar el contenido.', 'info');
  } else {
    editableElements.forEach(el => { el.contentEditable = 'false'; el.classList.remove('editing'); });
    if (btn) { btn.textContent = '✏️ Modo Edición'; btn.classList.remove('active'); }
    if (saveBtn) saveBtn.style.display = 'none';
  }
}

function saveContent(unitId) {
  try {
    const saved = JSON.parse(localStorage.getItem('io_content') || '{}');
    const teoriaEl = document.getElementById('teoriaContent');
    const resumenEl = document.getElementById('resumenContent');
    if (!saved[unitId]) saved[unitId] = {};
    if (teoriaEl) saved[unitId].teoria = teoriaEl.innerHTML;
    if (resumenEl) saved[unitId].resumen = resumenEl.innerHTML;
    localStorage.setItem('io_content', JSON.stringify(saved));
    showToast('Contenido guardado ✓', 'success');
  } catch (e) {
    showToast('Error al guardar. El contenido es muy grande.', 'error');
  }
}

function loadSavedContent(unitId) {
  try {
    const saved = JSON.parse(localStorage.getItem('io_content') || '{}');
    if (saved[unitId]) {
      const teoriaEl = document.getElementById('teoriaContent');
      const resumenEl = document.getElementById('resumenContent');
      if (teoriaEl && saved[unitId].teoria) teoriaEl.innerHTML = saved[unitId].teoria;
      if (resumenEl && saved[unitId].resumen) resumenEl.innerHTML = saved[unitId].resumen;
    }
  } catch {}
}

// ---- Toast Notifications ----
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function createToastContainer() {
  const div = document.createElement('div');
  div.id = 'toastContainer';
  div.className = 'toast-container';
  document.body.appendChild(div);
  return div;
}

// ---- Navigation (for index.html) ----
function navigateToUnit(unitId, section = 'teoria', cardIndex = 0) {
  const params = new URLSearchParams({ unit: unitId, section, card: cardIndex });
  window.location.href = `pages/unidad.html?${params}`;
}

// ---- Sidebar Navigation (for unidad.html) ----
function initSidebarNav() {
  const links = document.querySelectorAll('.sidebar-nav-link');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = link.dataset.section;
      showSection(section);
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const target = document.getElementById(`section-${sectionId}`);
  if (target) {
    target.style.display = 'block';
    setTimeout(() => target.classList.add('active'), 10);
  }
}

// ---- Utility: debounce ----
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ---- Landing Page Init ----
function initLanding() {
  loadProgress();
  updateProgressUI();
  renderRoadmap();
  initSearch();
}

function renderRoadmap() {
  const grid = document.getElementById('unitsGrid');
  if (!grid) return;

  grid.innerHTML = UNITS.map((unit, idx) => {
    const isDone = progress[unit.id] && progress[unit.id].completed;
    const isCurrent = !isDone && UNITS.slice(0, idx).every(u => progress[u.id] && progress[u.id].completed);

    return `
      <div class="unit-card ${isDone ? 'completed' : ''} ${isCurrent ? 'current' : ''}"
           id="unit-card-${unit.id}"
           onclick="navigateToUnit(${unit.id})"
           style="--unit-color: ${unit.color}">
        <div class="unit-card-header">
          <div class="unit-icon-wrap" style="background: ${unit.color}20; border: 2px solid ${unit.color}40">
            <span class="unit-icon">${unit.icon}</span>
          </div>
          <div class="unit-meta">
            <span class="unit-num">Unidad ${unit.id}</span>
            ${isDone ? '<span class="unit-badge done">✓ Completada</span>' : ''}
            ${isCurrent ? '<span class="unit-badge current">→ Actual</span>' : ''}
          </div>
        </div>
        <h3 class="unit-title">${unit.title}</h3>
        <p class="unit-desc">${unit.description}</p>
        <div class="unit-topics">
          ${unit.topics.slice(0, 3).map(t => `<span class="topic-pill" style="background:${unit.color}15;color:${unit.color}">${t}</span>`).join('')}
          ${unit.topics.length > 3 ? `<span class="topic-pill more">+${unit.topics.length - 3}</span>` : ''}
        </div>
        <div class="unit-footer">
          <div class="unit-stats">
            <span class="unit-stat">⏱ ${unit.hours}h</span>
            <span class="unit-stat">🃏 ${(FLASHCARDS[unit.id] || []).length} tarjetas</span>
          </div>
          <span class="difficulty-badge" style="background:${unit.difficultyColor}20;color:${unit.difficultyColor}">
            ${unit.difficulty}
          </span>
        </div>
        <div class="unit-card-arrow">→</div>
      </div>
    `;
  }).join('');
}

// ---- Unit Page Init ----
function initUnitPage() {
  loadProgress();
  loadCustomCards();

  const params = new URLSearchParams(window.location.search);
  const unitId = parseInt(params.get('unit')) || 1;
  const section = params.get('section') || 'teoria';
  const cardIndex = parseInt(params.get('card')) || 0;

  const unit = UNITS.find(u => u.id === unitId);
  if (!unit) { window.location.href = '../index.html'; return; }

  // Store current unit
  window.currentUnit = unit;

  // Set page title and metadata
  document.title = `${unit.title} — IO Campus`;
  document.getElementById('unitTitle').textContent = unit.title;
  document.getElementById('unitIcon').textContent = unit.icon;
  document.getElementById('unitSubtitle').textContent = unit.description;
  document.getElementById('breadcrumbUnit').textContent = unit.title;

  // Apply unit color
  document.documentElement.style.setProperty('--unit-accent', unit.color);

  // Initialize annotations FIRST so saved highlights load before renders
  if (typeof initAnnotationSystem === 'function') initAnnotationSystem(unitId);

  // Render navigation sidebar unit list
  renderUnitSidebar(unitId);

  // Render content sections (annotations applied inside each render)
  renderTeoria(unit);
  renderResumen(unit);
  renderFormulas(unit);
  renderCasos(unit);
  renderFlashcardSection(unitId, cardIndex);

  // Show initial section
  initSidebarNav();
  showSection(section);
  highlightSidebarLink(section);

  // Load any saved edits
  loadSavedContent(unitId);

  // Progress button
  const progressBtn = document.getElementById('markCompleteBtn');
  if (progressBtn) {
    const isDone = progress[unitId] && progress[unitId].completed;
    progressBtn.textContent = isDone ? '✓ Completada' : 'Marcar como completada';
    progressBtn.classList.toggle('done', isDone);
    progressBtn.addEventListener('click', () => markUnitComplete(unitId));
  }
}

function highlightSidebarLink(section) {
  document.querySelectorAll('.sidebar-nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === section);
  });
}

function renderUnitSidebar(currentId) {
  const list = document.getElementById('unitSidebarList');
  if (!list) return;
  list.innerHTML = UNITS.map(u => `
    <a href="unidad.html?unit=${u.id}" class="sidebar-unit-link ${u.id === currentId ? 'active' : ''}" style="--c: ${u.color}">
      <span class="sidelink-icon">${u.icon}</span>
      <span class="sidelink-text">U${u.id}. ${u.title}</span>
      ${progress[u.id] && progress[u.id].completed ? '<span class="sidelink-done">✓</span>' : ''}
    </a>
  `).join('');
}

function renderTeoria(unit) {
  const el = document.getElementById('teoriaContent');
  if (el) el.innerHTML = unit.teoria;
  // Re-apply saved highlights after content renders
  if (typeof applyAnnotationsToSection === 'function') applyAnnotationsToSection(unit.id, 'teoria');
}

function renderResumen(unit) {
  const el = document.getElementById('resumenContent');
  if (el) el.innerHTML = unit.resumen;
  if (typeof applyAnnotationsToSection === 'function') applyAnnotationsToSection(unit.id, 'resumen');
}

function renderFormulas(unit) {
  const el = document.getElementById('formulasContent');
  if (el) el.innerHTML = unit.formulas;
  if (typeof applyAnnotationsToSection === 'function') applyAnnotationsToSection(unit.id, 'formulas');
}

function renderCasos(unit) {
  const el = document.getElementById('casosContent');
  if (!el) return;
  el.innerHTML = (unit.casos || []).map((caso, i) => `
    <div class="caso-card">
      <div class="caso-header">
        <span class="caso-num">Caso ${i + 1}</span>
        <h3 class="caso-title">${caso.titulo}</h3>
      </div>
      <div class="caso-enunciado">
        <div class="caso-label">📋 Enunciado</div>
        <p>${caso.enunciado}</p>
      </div>
      <div class="caso-solucion">
        <div class="caso-label">📐 Resolución paso a paso</div>
        <ol class="caso-steps">
          ${caso.pasos.map(paso => `<li>${paso}</li>`).join('')}
        </ol>
      </div>
      <div class="caso-respuesta">
        <div class="caso-label">✅ Respuesta Final</div>
        <p>${caso.respuesta}</p>
      </div>
    </div>
  `).join('');
  if (typeof applyAnnotationsToSection === 'function') applyAnnotationsToSection(unit.id, 'casos');
}

function renderFlashcardSection(unitId, startIndex = 0) {
  const el = document.getElementById('flashcardsContent');
  if (!el) return;
  el.innerHTML = `
    <div class="flashcard-section-header">
      <h2>Tarjetas de Estudio</h2>
      <div class="fc-section-actions">
        <button class="btn-outline" onclick="addFlashcard(${unitId})">+ Agregar tarjeta</button>
        <button class="btn-primary" onclick="initExamMode()">🎓 Modo Examen Global</button>
      </div>
    </div>
    <div id="flashcardContainer"></div>
  `;
  initFlashcards(unitId);
  if (startIndex > 0) {
    currentIndex = Math.min(startIndex, currentDeck.length - 1);
    renderFlashcardUI();
  }
}

// ---- Keyboard navigation ----
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.contentEditable === 'true') return;
  if (e.key === 'ArrowRight') nextCard();
  if (e.key === 'ArrowLeft') prevCard();
  if (e.key === ' ') { e.preventDefault(); flipCard(); }
});

// ---- Global UI helpers ----
window.navigateToUnit = navigateToUnit;
window.markUnitComplete = markUnitComplete;
window.toggleEditMode = toggleEditMode;
window.saveContent = saveContent;
window.showToast = showToast;
window.handleSearchResult = handleSearchResult;

// ---- Entry point ----
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (page === 'landing') initLanding();
  if (page === 'unit') initUnitPage();
  if (typeof initBot === 'function') initBot();
});
