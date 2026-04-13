// ============================================================
// flashcards.js — Flashcard System with flip animation
// ============================================================

let currentDeck = [];
let currentIndex = 0;
let currentUnitId = null;
let examMode = false;
let scores = {}; // { cardKey: 'easy'|'medium'|'hard' }

// Load scores from localStorage
function loadScores() {
  try {
    scores = JSON.parse(localStorage.getItem('io_flashcard_scores') || '{}');
  } catch { scores = {}; }
}

function saveScores() {
  localStorage.setItem('io_flashcard_scores', JSON.stringify(scores));
}

function cardKey(unitId, index) {
  return `u${unitId}_c${index}`;
}

// ---- Initialize flashcard deck for a unit ----
function initFlashcards(unitId) {
  loadScores();
  currentUnitId = unitId;
  const cards = FLASHCARDS[unitId] || [];
  currentDeck = cards.map((card, i) => ({ ...card, originalIndex: i }));
  currentIndex = 0;
  examMode = false;
  renderFlashcardUI();
}

// ---- Exam Mode: shuffle all cards from all units ----
function initExamMode() {
  loadScores();
  examMode = true;
  currentDeck = [];
  Object.keys(FLASHCARDS).forEach(uid => {
    FLASHCARDS[uid].forEach((card, i) => {
      currentDeck.push({ ...card, unitId: parseInt(uid), originalIndex: i });
    });
  });
  // Fisher-Yates shuffle
  for (let i = currentDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]];
  }
  currentIndex = 0;
  renderFlashcardUI();
}

// ---- Render the flashcard UI ----
function renderFlashcardUI() {
  const container = document.getElementById('flashcardContainer');
  if (!container) return;

  const total = currentDeck.length;
  const card = currentDeck[currentIndex] || {};
  const uid = card.unitId || currentUnitId;
  const key = cardKey(uid, card.originalIndex);
  const score = scores[key];

  container.innerHTML = `
    <div class="fc-header">
      <div class="fc-mode-badge ${examMode ? 'exam' : 'unit'}">
        ${examMode ? '🎓 Modo Examen' : '📚 Modo Unidad'}
      </div>
      <div class="fc-counter">
        <span class="fc-current">${currentIndex + 1}</span>
        <span class="fc-sep"> / </span>
        <span class="fc-total">${total}</span>
      </div>
      <div class="fc-actions">
        ${!examMode ? `<button class="fc-btn-exam" onclick="initExamMode()">🎲 Modo Examen</button>` : `<button class="fc-btn-exam" onclick="initFlashcards(${currentUnitId || 1})">↩ Volver</button>`}
        <button class="fc-btn-shuffle" onclick="shuffleDeck()">🔀 Barajar</button>
      </div>
    </div>

    <div class="fc-progress">
      <div class="fc-progress-bar" style="width: ${((currentIndex) / total * 100).toFixed(1)}%"></div>
    </div>

    <div class="fc-card-wrapper">
      <div class="fc-card ${score ? 'rated-' + score : ''}" id="fcCard" onclick="flipCard()">
        <div class="fc-card-inner" id="fcCardInner">
          <div class="fc-card-front">
            <div class="fc-label">Pregunta</div>
            <div class="fc-question">${card.q || 'No hay tarjetas disponibles'}</div>
            <div class="fc-hint">Hacer clic para revelar la respuesta</div>
          </div>
          <div class="fc-card-back">
            <div class="fc-label">Respuesta</div>
            <div class="fc-answer">${card.a || ''}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="fc-difficulty" id="fcDifficulty" style="display:none">
      <p class="fc-difficulty-label">¿Qué tan difícil fue?</p>
      <div class="fc-difficulty-btns">
        <button class="fc-diff-btn easy ${score === 'easy' ? 'selected' : ''}" onclick="rateCard('easy')">
          😊 Fácil
        </button>
        <button class="fc-diff-btn medium ${score === 'medium' ? 'selected' : ''}" onclick="rateCard('medium')">
          🤔 Regular
        </button>
        <button class="fc-diff-btn hard ${score === 'hard' ? 'selected' : ''}" onclick="rateCard('hard')">
          😤 Difícil
        </button>
      </div>
    </div>

    <div class="fc-nav">
      <button class="fc-nav-btn prev" onclick="prevCard()" ${currentIndex === 0 ? 'disabled' : ''}>
        ← Anterior
      </button>
      <div class="fc-dots">
        ${currentDeck.slice(Math.max(0, currentIndex-2), Math.min(total, currentIndex+3)).map((_, i) => {
          const absIndex = Math.max(0, currentIndex-2) + i;
          return `<div class="fc-dot ${absIndex === currentIndex ? 'active' : ''}"></div>`;
        }).join('')}
      </div>
      <button class="fc-nav-btn next" onclick="nextCard()" ${currentIndex === total - 1 ? 'disabled' : ''}>
        Siguiente →
      </button>
    </div>

    <div class="fc-stats">
      ${renderScoreStats()}
    </div>
  `;
}

function flipCard() {
  const inner = document.getElementById('fcCardInner');
  const difficulty = document.getElementById('fcDifficulty');
  if (!inner) return;
  inner.classList.toggle('flipped');
  if (difficulty) {
    difficulty.style.display = inner.classList.contains('flipped') ? 'block' : 'none';
  }
}

function nextCard() {
  if (currentIndex < currentDeck.length - 1) {
    currentIndex++;
    renderFlashcardUI();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    renderFlashcardUI();
  }
}

function shuffleDeck() {
  for (let i = currentDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]];
  }
  currentIndex = 0;
  renderFlashcardUI();
}

function rateCard(difficulty) {
  const card = currentDeck[currentIndex];
  if (!card) return;
  const uid = card.unitId || currentUnitId;
  const key = cardKey(uid, card.originalIndex);
  scores[key] = difficulty;
  saveScores();

  // Update button visuals
  document.querySelectorAll('.fc-diff-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (btn.classList.contains(difficulty)) btn.classList.add('selected');
  });

  // Auto-advance after rating
  setTimeout(() => {
    if (currentIndex < currentDeck.length - 1) {
      nextCard();
    } else {
      showCompletionMessage();
    }
  }, 600);
}

function showCompletionMessage() {
  const container = document.getElementById('flashcardContainer');
  if (!container) return;

  const total = currentDeck.length;
  const easy = Object.values(scores).filter(s => s === 'easy').length;
  const medium = Object.values(scores).filter(s => s === 'medium').length;
  const hard = Object.values(scores).filter(s => s === 'hard').length;

  container.innerHTML = `
    <div class="fc-completion">
      <div class="fc-completion-icon">🎉</div>
      <h2>¡Mazo completado!</h2>
      <p>Revisaste las ${total} tarjetas del mazo.</p>
      <div class="fc-completion-stats">
        <div class="stat-card easy"><span class="stat-num">${easy}</span><span class="stat-label">Fáciles</span></div>
        <div class="stat-card medium"><span class="stat-num">${medium}</span><span class="stat-label">Regulares</span></div>
        <div class="stat-card hard"><span class="stat-num">${hard}</span><span class="stat-label">Difíciles</span></div>
      </div>
      <div class="fc-completion-actions">
        <button class="btn-primary" onclick="restartDeck()">↩ Repetir mazo</button>
        <button class="btn-secondary" onclick="initExamMode()">🎓 Modo Examen</button>
        ${hard > 0 ? `<button class="btn-hard" onclick="studyHard()">😤 Solo difíciles (${hard})</button>` : ''}
      </div>
    </div>
  `;
}

function restartDeck() {
  currentIndex = 0;
  renderFlashcardUI();
}

function studyHard() {
  const hardCards = currentDeck.filter((card, i) => {
    const uid = card.unitId || currentUnitId;
    const key = cardKey(uid, card.originalIndex);
    return scores[key] === 'hard';
  });
  if (hardCards.length > 0) {
    currentDeck = hardCards;
    currentIndex = 0;
    renderFlashcardUI();
  }
}

function renderScoreStats() {
  const deck = currentDeck;
  const total = deck.length;
  let easy = 0, medium = 0, hard = 0, unrated = 0;

  deck.forEach(card => {
    const uid = card.unitId || currentUnitId;
    const key = cardKey(uid, card.originalIndex);
    const s = scores[key];
    if (s === 'easy') easy++;
    else if (s === 'medium') medium++;
    else if (s === 'hard') hard++;
    else unrated++;
  });

  const rated = easy + medium + hard;

  return `
    <div class="fc-stats-inner">
      <div class="fc-stat-item easy">
        <span class="fc-stat-icon">😊</span>
        <span class="fc-stat-count">${easy}</span>
        <div class="fc-stat-bar"><div style="width:${total ? easy/total*100 : 0}%"></div></div>
      </div>
      <div class="fc-stat-item medium">
        <span class="fc-stat-icon">🤔</span>
        <span class="fc-stat-count">${medium}</span>
        <div class="fc-stat-bar"><div style="width:${total ? medium/total*100 : 0}%"></div></div>
      </div>
      <div class="fc-stat-item hard">
        <span class="fc-stat-icon">😤</span>
        <span class="fc-stat-count">${hard}</span>
        <div class="fc-stat-bar"><div style="width:${total ? hard/total*100 : 0}%"></div></div>
      </div>
      <div class="fc-stat-progress">
        <span>${rated}/${total} calificadas</span>
      </div>
    </div>
  `;
}

// ---- Add card (edit mode) ----
function addFlashcard(unitId) {
  const q = prompt('Nueva pregunta:');
  if (!q) return;
  const a = prompt('Respuesta:');
  if (!a) return;

  if (!FLASHCARDS[unitId]) FLASHCARDS[unitId] = [];
  FLASHCARDS[unitId].push({ q, a });

  // Save to localStorage
  try {
    const custom = JSON.parse(localStorage.getItem('io_custom_cards') || '{}');
    if (!custom[unitId]) custom[unitId] = [];
    custom[unitId].push({ q, a });
    localStorage.setItem('io_custom_cards', JSON.stringify(custom));
  } catch {}

  initFlashcards(unitId);
  showToast('Tarjeta agregada', 'success');
}

// Load custom cards from localStorage on startup
function loadCustomCards() {
  try {
    const custom = JSON.parse(localStorage.getItem('io_custom_cards') || '{}');
    Object.keys(custom).forEach(uid => {
      if (!FLASHCARDS[uid]) FLASHCARDS[uid] = [];
      FLASHCARDS[uid].push(...custom[uid]);
    });
  } catch {}
}

// Export for global access
window.initFlashcards = initFlashcards;
window.initExamMode = initExamMode;
window.flipCard = flipCard;
window.nextCard = nextCard;
window.prevCard = prevCard;
window.shuffleDeck = shuffleDeck;
window.rateCard = rateCard;
window.restartDeck = restartDeck;
window.studyHard = studyHard;
window.addFlashcard = addFlashcard;
window.loadCustomCards = loadCustomCards;
