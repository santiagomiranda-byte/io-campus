// ============================================================
// bot.js — Pre-programmed bot + Claude API integration
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
    keywords: ["pert", "cpm", "crítico", "camino", "red", "nodo", "actividad", "proyecto", "te", "tl", "margen"],
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

const DEFAULT_RESPONSE = `No encontré una respuesta específica para esa pregunta.

**Podés intentar:**
- Preguntar sobre: Simplex, PERT, EOQ, M/M/1, Montecarlo, Branch and Bound, Dualidad
- Usar las preguntas rápidas abajo
- Revisar la sección de **Fórmulas** de cada unidad
- Consultar los **Casos Prácticos** resueltos

Si tenés una API key de Anthropic, ingresála arriba para obtener respuestas personalizadas de Claude IA.`;

// ---- Bot State ----
let apiKey = '';
let isConnected = false;
let conversationHistory = [];

// ---- DOM References ----
let chatMessages, chatInput, sendBtn, botPanel, botToggle;
let apiKeyInput, apiStatus;

// ---- Initialize Bot ----
function initBot() {
  chatMessages = document.getElementById('chatMessages');
  chatInput = document.getElementById('chatInput');
  sendBtn = document.getElementById('sendBtn');
  botPanel = document.getElementById('botPanel');
  botToggle = document.getElementById('botToggle');
  apiKeyInput = document.getElementById('apiKeyInput');
  apiStatus = document.getElementById('apiStatus');

  if (!chatMessages) return;

  // Event listeners
  sendBtn.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  });

  botToggle.addEventListener('click', toggleBot);
  document.getElementById('closeBot').addEventListener('click', () => {
    botPanel.classList.remove('open');
  });

  // API Key listener
  if (apiKeyInput) {
    apiKeyInput.addEventListener('input', handleApiKeyChange);
  }

  // Quick topic buttons
  document.querySelectorAll('.quick-topic').forEach(btn => {
    btn.addEventListener('click', () => {
      const topic = btn.dataset.topic;
      chatInput.value = topic;
      handleSend();
    });
  });

  // Welcome message
  setTimeout(() => {
    addMessage('bot', `¡Hola! Soy tu asistente de **Investigación Operativa**.

Podés preguntarme sobre:
- Simplex y Programación Lineal
- PERT/CPM y camino crítico
- Inventarios y EOQ
- Teoría de Colas M/M/1
- Simulación Montecarlo

¿Qué querés repasar hoy?`);
  }, 500);
}

function toggleBot() {
  botPanel.classList.toggle('open');
}

function handleApiKeyChange() {
  const key = apiKeyInput.value.trim();
  if (key.startsWith('sk-ant-') && key.length > 20) {
    apiKey = key;
    isConnected = true;
    apiStatus.textContent = '🟢 Conectado a Claude';
    apiStatus.className = 'api-status connected';
  } else if (key.length === 0) {
    apiKey = '';
    isConnected = false;
    apiStatus.textContent = '🔴 Sin conexión API';
    apiStatus.className = 'api-status';
  } else {
    apiKey = '';
    isConnected = false;
    apiStatus.textContent = '🟡 API key inválida';
    apiStatus.className = 'api-status warning';
  }
}

async function handleSend() {
  const message = chatInput.value.trim();
  if (!message) return;

  addMessage('user', message);
  chatInput.value = '';
  sendBtn.disabled = true;

  // Show typing indicator
  const typingId = showTyping();

  try {
    let response;
    if (isConnected && apiKey) {
      response = await sendToClaude(message, apiKey);
    } else {
      // Simulate a small delay for realism
      await new Promise(r => setTimeout(r, 600 + Math.random() * 400));
      response = getPreProgrammedResponse(message);
    }
    removeTyping(typingId);
    addMessage('bot', response);
  } catch (err) {
    removeTyping(typingId);
    if (err.message && err.message.includes('API')) {
      addMessage('bot', `⚠️ Error al conectar con Claude API: ${err.message}\n\nUsando respuestas pre-programadas...`);
      const fallback = getPreProgrammedResponse(message);
      addMessage('bot', fallback);
    } else {
      addMessage('bot', `⚠️ Ocurrió un error. ${DEFAULT_RESPONSE}`);
    }
  } finally {
    sendBtn.disabled = false;
  }
}

function getPreProgrammedResponse(message) {
  const lower = message.toLowerCase();

  for (const entry of BOT_RESPONSES) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.response;
    }
  }
  return DEFAULT_RESPONSE;
}

async function sendToClaude(message, key) {
  conversationHistory.push({ role: 'user', content: message });

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: `Eres un tutor experto en Investigación Operativa para ingeniería industrial.
Respondés en español argentino, de forma clara y concisa.
Usás fórmulas matemáticas cuando es necesario (formato texto simple).
Estructurás tus respuestas con listas y negritas cuando ayuda a la comprensión.
Nunca respondés en inglés a menos que sea terminología técnica necesaria.
El contexto es una materia universitaria de ingeniería industrial con estas unidades:
1. Introducción a IO, 2. Programación Lineal, 3. Prog. Entera/Extensiones,
4. PERT/CPM, 5. Inventarios, 6. Teoría de Colas, 7. Simulación.`,
      messages: conversationHistory
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`API Error ${response.status}: ${errorData.error?.message || 'Error desconocido'}`);
  }

  const data = await response.json();
  const assistantMessage = data.content[0].text;
  conversationHistory.push({ role: 'assistant', content: assistantMessage });

  // Keep conversation history manageable
  if (conversationHistory.length > 20) {
    conversationHistory = conversationHistory.slice(-16);
  }

  return assistantMessage;
}

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
    <div class="message-bubble typing">
      <span></span><span></span><span></span>
    </div>
  `;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function formatBotMessage(text) {
  // Convert markdown-like syntax to HTML
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

// Export for global access
window.initBot = initBot;
window.toggleBot = toggleBot;
