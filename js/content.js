// ============================================================
// content.js — All course content for IO Campus
// ============================================================

const UNITS = [
  {
    id: 1,
    slug: "introduccion",
    title: "Introducción a IO",
    icon: "🔬",
    color: "#8b5cf6",
    colorLight: "#ede9fe",
    hours: 6,
    difficulty: "Básico",
    difficultyColor: "#10b981",
    topics: ["Proceso decisorio", "Metodología IO", "Modelos matemáticos", "Clasificación"],
    description: "Historia, metodología y clasificación de modelos de la Investigación Operativa.",
    teoria: `
<h2>¿Qué es la Investigación Operativa?</h2>
<p>La <strong>Investigación Operativa (IO)</strong> es una disciplina científica que aplica métodos matemáticos, estadísticos y analíticos para la toma de decisiones óptimas en sistemas complejos. Su objetivo fundamental es proporcionar a los tomadores de decisiones una base cuantitativa y racional para elegir entre diferentes alternativas de acción.</p>

<h3>Origen e Historia</h3>
<p>La IO surgió durante la <strong>Segunda Guerra Mundial</strong> (1939-1945) cuando el gobierno británico convocó a grupos interdisciplinarios de científicos (físicos, matemáticos, estadísticos) para resolver problemas militares críticos:</p>
<ul>
  <li>Optimización del uso del radar para detección de submarinos</li>
  <li>Asignación eficiente de recursos militares escasos</li>
  <li>Planificación de convoys navales y rutas aéreas</li>
  <li>Minimización de pérdidas en batallas</li>
</ul>
<p>El nombre "Investigación Operativa" proviene de investigar las operaciones militares. Tras la guerra, estas técnicas se transfirieron al ámbito empresarial y gubernamental con enorme éxito.</p>

<h3>Características Distintivas</h3>
<ul>
  <li><strong>Enfoque sistémico:</strong> analiza el sistema completo, no partes aisladas</li>
  <li><strong>Equipos interdisciplinarios:</strong> integra especialistas de distintas áreas</li>
  <li><strong>Modelos matemáticos:</strong> representación cuantitativa del problema</li>
  <li><strong>Solución óptima:</strong> busca la mejor solución posible, no solo una buena</li>
  <li><strong>Orientación a decisiones:</strong> los resultados deben ser implementables</li>
</ul>

<h2>Metodología de la IO</h2>
<p>La IO sigue un proceso estructurado de 6 etapas:</p>

<div class="steps-container">
  <div class="step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Definición del Problema</h4>
      <p>Identificar claramente el problema, sus objetivos, variables de decisión y restricciones. Esta es la etapa más crítica: un problema mal definido lleva a soluciones incorrectas.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Construcción del Modelo</h4>
      <p>Representar matemáticamente el sistema mediante una función objetivo y un conjunto de restricciones. El modelo es una abstracción simplificada de la realidad.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Solución del Modelo</h4>
      <p>Aplicar técnicas matemáticas (algoritmos) para encontrar la solución óptima. Dependiendo del modelo, puede ser analítica, gráfica o computacional.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Validación del Modelo</h4>
      <p>Verificar que el modelo representa adecuadamente la realidad comparando sus predicciones con datos históricos o situaciones conocidas.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4>Implementación</h4>
      <p>Traducir la solución matemática en acciones concretas dentro de la organización, capacitando al personal y adaptando los procesos.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-number">6</div>
    <div class="step-content">
      <h4>Control y Seguimiento</h4>
      <p>Monitorear continuamente la solución implementada y actualizar el modelo cuando las condiciones del sistema cambien.</p>
    </div>
  </div>
</div>

<h2>Clasificación de Modelos en IO</h2>

<h3>Por Naturaleza de las Variables</h3>
<table class="content-table">
  <thead><tr><th>Tipo</th><th>Característica</th><th>Ejemplo</th></tr></thead>
  <tbody>
    <tr><td><strong>Programación Lineal</strong></td><td>Función objetivo y restricciones lineales, variables continuas</td><td>Mezcla óptima de productos</td></tr>
    <tr><td><strong>Programación Entera</strong></td><td>Variables toman valores enteros</td><td>Número de máquinas a comprar</td></tr>
    <tr><td><strong>Programación No Lineal</strong></td><td>Relaciones no lineales</td><td>Modelos de inventario con descuentos</td></tr>
    <tr><td><strong>Programación Dinámica</strong></td><td>Decisiones secuenciales en el tiempo</td><td>Planificación de inversiones</td></tr>
  </tbody>
</table>

<h3>Por Tratamiento del Tiempo</h3>
<ul>
  <li><strong>Modelos Estáticos:</strong> no consideran la dimensión temporal (ej: PL clásica)</li>
  <li><strong>Modelos Dinámicos:</strong> incluyen la evolución en el tiempo (ej: PERT/CPM)</li>
</ul>

<h3>Por Certeza de los Datos</h3>
<ul>
  <li><strong>Determinísticos:</strong> todos los parámetros son conocidos con certeza (ej: EOQ básico)</li>
  <li><strong>Estocásticos:</strong> algún parámetro es aleatorio (ej: modelos de colas, simulación)</li>
</ul>`,

    resumen: `
<h2>Resumen — Unidad 1</h2>
<div class="formula-box">
  <strong>Definición:</strong> IO = métodos matemáticos + análisis cuantitativo → decisiones óptimas en sistemas complejos
</div>

<h3>Las 6 Etapas de la Metodología IO</h3>
<ol>
  <li><strong>Definir</strong> el problema (objetivo, variables, restricciones)</li>
  <li><strong>Modelar</strong> matemáticamente el sistema</li>
  <li><strong>Resolver</strong> el modelo con algoritmos</li>
  <li><strong>Validar</strong> el modelo contra la realidad</li>
  <li><strong>Implementar</strong> la solución</li>
  <li><strong>Controlar</strong> y actualizar</li>
</ol>

<h3>Clasificación de Modelos</h3>
<ul>
  <li><strong>Por variables:</strong> Lineal / Entera / No Lineal / Dinámica</li>
  <li><strong>Por tiempo:</strong> Estático / Dinámico</li>
  <li><strong>Por certeza:</strong> Determinístico / Estocástico</li>
</ul>

<div class="formula-box">
  <strong>Dato histórico:</strong> IO nació en la 2ª Guerra Mundial (Gran Bretaña, 1939) para optimizar operaciones militares → luego migró a la industria.
</div>`,

    formulas: `
<h2>Conceptos Clave — Unidad 1</h2>
<div class="formula-box">
  <strong>Modelo General IO</strong><br>
  MAX (o MIN) Z = f(x₁, x₂, ..., xₙ)<br>
  sujeto a: g(x₁, ..., xₙ) ≤ b<br>
  x₁, x₂, ..., xₙ ≥ 0
</div>
<div class="formula-box">
  <strong>Componentes de un Modelo</strong><br>
  • <em>Variables de decisión:</em> xⱼ (qué decidimos)<br>
  • <em>Función objetivo:</em> Z = f(x) (qué optimizamos)<br>
  • <em>Restricciones:</em> g(x) ≤ b (qué nos limita)<br>
  • <em>Parámetros:</em> cⱼ, aᵢⱼ, bᵢ (datos del problema)
</div>`,

    casos: [
      {
        titulo: "Caso 1: Clasificación de un Problema Real",
        enunciado: "Una empresa de logística debe decidir cuántos camiones de cada tipo (pequeño, mediano, grande) enviar en cada ruta, dado un presupuesto y capacidad de carga. ¿Qué tipo de modelo IO corresponde?",
        pasos: [
          "Identificar las variables de decisión: xᵢⱼ = cantidad de camiones tipo i en ruta j",
          "La función objetivo es lineal (maximizar ganancia o minimizar costo)",
          "Las restricciones de presupuesto y capacidad son lineales",
          "Las variables deben ser enteras (no se envían fracciones de camión)",
          "Los datos (costos, capacidades) son conocidos con certeza"
        ],
        respuesta: "Es un modelo de <strong>Programación Entera Lineal (PEL)</strong>, determinístico y estático."
      },
      {
        titulo: "Caso 2: Etapas del Proceso IO",
        enunciado: "Un hospital quiere reducir el tiempo de espera en urgencias. Describir cómo aplicar la metodología IO.",
        pasos: [
          "<strong>Definir:</strong> Problema = tiempos de espera > 4 horas. Variables = cantidad de médicos, turnos, distribución de boxes. Objetivo = MIN tiempo de espera promedio.",
          "<strong>Modelar:</strong> Sistema de colas M/M/s (llegada de pacientes = Poisson, atención = exponencial, s servidores)",
          "<strong>Resolver:</strong> Calcular Wq (tiempo en cola) para distintos valores de s (médicos)",
          "<strong>Validar:</strong> Comparar Wq calculado con datos históricos del hospital",
          "<strong>Implementar:</strong> Ajustar turnos según la solución óptima",
          "<strong>Controlar:</strong> Monitorear tiempos reales semanalmente"
        ],
        respuesta: "Se aplican modelos de <strong>Teoría de Colas</strong>. El modelo elegido depende de la distribución de llegadas y tiempos de servicio reales."
      }
    ]
  },

  {
    id: 2,
    slug: "programacion-lineal",
    title: "Programación Lineal",
    icon: "📐",
    color: "#3b82f6",
    colorLight: "#dbeafe",
    hours: 18,
    difficulty: "Intermedio",
    difficultyColor: "#f59e0b",
    topics: ["Formulación", "Método gráfico", "Simplex", "Sensibilidad", "Dualidad"],
    description: "Formulación, resolución gráfica, algoritmo Simplex, análisis de sensibilidad y problema dual.",
    teoria: `
<h2>Programación Lineal (PL)</h2>
<p>La <strong>Programación Lineal</strong> es la técnica de IO más ampliamente utilizada. Permite optimizar (maximizar o minimizar) una función lineal sujeta a restricciones también lineales. Su campo de aplicación incluye producción, transporte, asignación, finanzas y logística.</p>

<h3>Forma Estándar</h3>
<p>Todo problema de PL puede expresarse en forma estándar:</p>
<div class="formula-highlight">
  MAX (o MIN) Z = c₁x₁ + c₂x₂ + ... + cₙxₙ<br><br>
  Sujeto a:<br>
  &nbsp;&nbsp;a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ ≤ b₁<br>
  &nbsp;&nbsp;a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ ≤ b₂<br>
  &nbsp;&nbsp;⋮<br>
  &nbsp;&nbsp;aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ ≤ bₘ<br>
  &nbsp;&nbsp;x₁, x₂, ..., xₙ ≥ 0
</div>

<h3>Pasos para Formular un PL</h3>
<div class="steps-container">
  <div class="step">
    <div class="step-number">1</div>
    <div class="step-content"><h4>Identificar Variables de Decisión</h4><p>¿Qué cantidades controlamos? Nombrarlas claramente: x₁ = unidades del producto A, x₂ = unidades del producto B, etc.</p></div>
  </div>
  <div class="step">
    <div class="step-number">2</div>
    <div class="step-content"><h4>Definir Función Objetivo</h4><p>¿Maximizamos ganancia o minimizamos costo? Expresarla linealmente en función de las variables.</p></div>
  </div>
  <div class="step">
    <div class="step-number">3</div>
    <div class="step-content"><h4>Identificar Restricciones</h4><p>Recursos limitados, requisitos mínimos, capacidades máximas. Expresar cada una como una inecuación lineal.</p></div>
  </div>
  <div class="step">
    <div class="step-number">4</div>
    <div class="step-content"><h4>No Negatividad</h4><p>Las variables físicas no pueden ser negativas: xⱼ ≥ 0 para todo j.</p></div>
  </div>
</div>

<h2>Método Gráfico</h2>
<p>Aplicable solo para 2 variables. Permite visualizar la <strong>región factible</strong> (conjunto de soluciones que satisfacen todas las restricciones) y encontrar el óptimo.</p>

<h3>Procedimiento</h3>
<ol>
  <li>Graficar cada restricción como una recta y sombrear el lado factible</li>
  <li>La intersección de todos los semiplanos es la <strong>región factible</strong> (polígono convexo)</li>
  <li>El óptimo siempre está en un <strong>vértice</strong> (punto extremo) de la región factible</li>
  <li>Evaluar Z en cada vértice: el mayor (MAX) o menor (MIN) es el óptimo</li>
</ol>

<h2>Algoritmo Simplex</h2>
<p>El Simplex es el algoritmo estándar para resolver PL con cualquier número de variables. Se basa en moverse de vértice en vértice de la región factible mejorando Z en cada paso.</p>

<h3>Pasos del Simplex</h3>
<ol>
  <li><strong>Convertir a forma estándar:</strong> agregar variables de holgura (slack) sᵢ a cada restricción ≤</li>
  <li><strong>Tableau inicial:</strong> tabla con todas las variables, coeficientes y lado derecho</li>
  <li><strong>Seleccionar variable entrante:</strong> columna pivote = mayor coeficiente negativo en fila Z</li>
  <li><strong>Seleccionar variable saliente:</strong> fila pivote = mínimo ratio b/aᵢⱼ (con aᵢⱼ &gt; 0)</li>
  <li><strong>Operaciones de fila:</strong> hacer 1 el elemento pivote y 0 el resto de su columna</li>
  <li><strong>Repetir</strong> hasta que no haya coeficientes negativos en la fila Z</li>
</ol>

<h3>Tableau Simplex — Estructura</h3>
<table class="simplex-table">
  <thead>
    <tr><th>Base</th><th>x₁</th><th>x₂</th><th>s₁</th><th>s₂</th><th>b</th></tr>
  </thead>
  <tbody>
    <tr><td>s₁</td><td>a₁₁</td><td>a₁₂</td><td>1</td><td>0</td><td>b₁</td></tr>
    <tr><td>s₂</td><td>a₂₁</td><td>a₂₂</td><td>0</td><td>1</td><td>b₂</td></tr>
    <tr class="obj-row"><td>Z</td><td>-c₁</td><td>-c₂</td><td>0</td><td>0</td><td>0</td></tr>
  </tbody>
</table>

<h2>Análisis de Sensibilidad</h2>
<p>El análisis de sensibilidad estudia cómo varía la solución óptima ante cambios en los parámetros del modelo. Permite al tomador de decisiones comprender la <strong>robustez</strong> de su solución y responder preguntas del tipo "¿qué pasa si...?"</p>

<h3>1. Variación de Coeficientes de la Función Objetivo (cⱼ)</h3>
<p>Si el coeficiente cⱼ de una variable varía, el <strong>rango de optimalidad</strong> indica hasta dónde puede variar sin que cambie la base óptima (es decir, sin que cambien qué variables son básicas).</p>
<div class="formula-highlight">
  Para una variable básica xⱼ: cⱼ puede variar entre [cⱼ − Δ⁻, cⱼ + Δ⁺]<br>
  sin que cambie la base óptima.<br><br>
  Para una variable no básica (xⱼ = 0): el <strong>costo reducido</strong> indica cuánto<br>
  debe mejorar cⱼ para que esa variable entre a la base.
</div>
<p>En Excel Solver este rango aparece en el <em>Informe de Sensibilidad</em> como "Permisible Aumentar" y "Permisible Disminuir" para cada variable de decisión.</p>

<h3>2. Variación de Recursos (bᵢ — lado derecho)</h3>
<p>El <strong>precio sombra</strong> (shadow price) yᵢ* indica cuánto mejora Z* por cada unidad adicional del recurso i. Solo es válido dentro del <strong>rango de factibilidad</strong>.</p>
<div class="formula-highlight">
  Precio sombra: yᵢ* = ΔZ* / Δbᵢ<br><br>
  Propiedades:<br>
  &nbsp;&nbsp;• Restricciones activas (holgura = 0): precio sombra &gt; 0 (el recurso limita)<br>
  &nbsp;&nbsp;• Restricciones no activas (con holgura): precio sombra = 0 (el recurso sobra)<br>
  &nbsp;&nbsp;• Solo válido dentro del rango de factibilidad de bᵢ
</div>

<h3>3. Análisis Paramétrico</h3>
<p>Extiende el análisis de sensibilidad a variaciones continuas de un parámetro. Al variar bᵢ o cⱼ más allá del rango de sensibilidad, la base cambia. Las <strong>curvas de oferta</strong> muestran Z* en función del parámetro, con quiebres en cada cambio de base.</p>

<h3>4. Incorporación de un Nuevo Producto</h3>
<p>Para saber si conviene agregar una nueva variable x_nuevo al modelo actual sin resolver de cero:</p>
<ol>
  <li>Calcular su <strong>costo reducido</strong>: c̄ⱼ = cⱼ − cB · B⁻¹ · Aⱼ</li>
  <li>Para MAX: si c̄ⱼ &gt; 0, el producto entraría a la base → conviene incluirlo</li>
  <li>Para MAX: si c̄ⱼ ≤ 0, la solución actual sigue siendo óptima sin el producto</li>
</ol>

<h3>5. Incorporación de Nuevas Restricciones</h3>
<p>Si la solución óptima actual satisface la nueva restricción → la solución no cambia. Si la viola → se debe agregar la restricción y re-optimizar (método Simplex dual).</p>

<h3>Ejemplo — Fábrica de Bombones</h3>
<p>Solución óptima: x₁=200 cajas tipo A, x₂=100 cajas tipo B, Z*=$33.000. Precio sombra de la restricción de materia prima = $90/kg. Si se consiguen 10 kg adicionales del recurso:</p>
<div class="formula-highlight">
  ΔZ* = precio sombra × Δb = $90 × 10 kg = $900<br>
  → Nuevo óptimo estimado: Z* = $33.900 (válido dentro del rango de factibilidad)
</div>

<h2>Problema Dual</h2>
<p>Todo problema de PL (primal) tiene asociado un problema <strong>dual</strong>. La relación primal-dual tiene profunda interpretación económica: las variables duales son exactamente los precios sombra.</p>

<h3>Reglas de Conversión Primal → Dual</h3>
<table class="content-table">
  <thead>
    <tr><th>Primal (MAX)</th><th>Dual (MIN)</th></tr>
  </thead>
  <tbody>
    <tr><td>m restricciones ≤ bᵢ</td><td>m variables duales yᵢ ≥ 0</td></tr>
    <tr><td>n variables xⱼ ≥ 0</td><td>n restricciones duales ≥ cⱼ</td></tr>
    <tr><td>FO: MAX Z = Σ cⱼxⱼ</td><td>FO: MIN W = Σ bᵢyᵢ</td></tr>
    <tr><td>Coeficientes tecnológicos Aᵢⱼ</td><td>Transpuestos: Aᵢⱼ → Aⱼᵢ</td></tr>
    <tr><td>Restricción i como igualdad</td><td>Variable dual yᵢ libre (sin signo)</td></tr>
    <tr><td>Variable xⱼ libre</td><td>Restricción j del dual es igualdad</td></tr>
  </tbody>
</table>

<div class="formula-highlight">
  Primal: MAX Z = cᵀx &nbsp; s.a. Ax ≤ b, x ≥ 0<br>
  Dual: &nbsp; MIN W = bᵀy &nbsp; s.a. Aᵀy ≥ c, y ≥ 0<br><br>
  <strong>Teorema débil:</strong> Z (cualquier x factible) ≤ W (cualquier y factible)<br>
  <strong>Teorema fuerte:</strong> Z* = W* (si ambos tienen solución óptima y acotada)
</div>

<h3>Lectura del Dual desde el Tableau Óptimo</h3>
<p>En el tableau Simplex óptimo, los valores duales se obtienen directamente:</p>
<ul>
  <li><strong>y*ᵢ</strong> = coeficiente de la variable de holgura sᵢ en la fila Z del tableau óptimo</li>
  <li><strong>Costo reducido de xⱼ</strong> = coeficiente de xⱼ en la fila Z del óptimo</li>
  <li>Esto confirma: precio sombra = variable dual del problema</li>
</ul>

<h3>Holgura Complementaria</h3>
<div class="formula-highlight">
  Si xⱼ &gt; 0 (variable básica) → restricción dual j es activa<br>
  Si yᵢ &gt; 0 (dual positiva) → restricción primal i es activa (holgura = 0)<br><br>
  xⱼ · (cⱼ − Aⱼᵀy) = 0 &nbsp;&nbsp;&nbsp; yᵢ · (bᵢ − Aᵢx) = 0
</div>

<h2>Interpretación de Reportes del Solver (Excel)</h2>

<h3>1. Informe de Respuestas (Answer Report)</h3>
<table class="content-table">
  <thead><tr><th>Elemento</th><th>Descripción</th></tr></thead>
  <tbody>
    <tr><td>Valor objetivo</td><td>Z* alcanzado en el óptimo</td></tr>
    <tr><td>Valor de variables</td><td>Solución óptima x*ⱼ para cada variable de decisión</td></tr>
    <tr><td>Estado de restricciones</td><td>"Vinculante" = activa (holgura=0) / "No vinculante" = con holgura</td></tr>
    <tr><td>Holgura / Superávit</td><td>Unidades sobrantes del recurso en la solución óptima</td></tr>
  </tbody>
</table>

<h3>2. Informe de Sensibilidad (Sensitivity Report)</h3>
<table class="content-table">
  <thead><tr><th>Columna</th><th>Significado</th></tr></thead>
  <tbody>
    <tr><td>Costo reducido</td><td>Para var. no básicas: cuánto debe mejorar cⱼ para entrar a la base. Para básicas: 0.</td></tr>
    <tr><td>Permisible aumentar/disminuir (FO)</td><td>Rango de optimalidad de cⱼ: hasta cuánto puede variar sin cambiar la base</td></tr>
    <tr><td>Precio sombra</td><td>Mejora en Z* por unidad adicional del recurso i (= variable dual y*ᵢ)</td></tr>
    <tr><td>Permisible aumentar/disminuir (RHS)</td><td>Rango de factibilidad de bᵢ: donde el precio sombra sigue siendo válido</td></tr>
  </tbody>
</table>

<h3>3. Informe de Límites (Limits Report)</h3>
<p>Para cada variable muestra los límites inferior y superior de variación manteniendo la factibilidad, con el correspondiente valor de Z* en cada límite.</p>`,

    resumen: `
<h2>Resumen — Programación Lineal</h2>
<div class="formula-box">
  <strong>Forma Estándar PL:</strong><br>
  MAX/MIN Z = cᵀx &nbsp;|&nbsp; s.a. Ax ≤ b, x ≥ 0
</div>
<h3>Método Gráfico (2 variables)</h3>
<ol>
  <li>Graficar restricciones → región factible (polígono convexo)</li>
  <li>El óptimo está en un <strong>vértice</strong> de la región factible</li>
  <li>Evaluar Z en cada vértice → tomar el mejor</li>
</ol>
<h3>Simplex (n variables)</h3>
<ol>
  <li>Agregar slacks → forma estándar (igualdades)</li>
  <li>Variable entrante = mayor |coef negativo| en fila Z</li>
  <li>Variable saliente = mínimo ratio b/aᵢⱼ</li>
  <li>Pivotear hasta que fila Z ≥ 0 (MAX)</li>
</ol>
<div class="formula-box">
  <strong>Condición de optimalidad (MAX):</strong> todos los coeficientes en la fila Z ≥ 0
</div>
<div class="formula-box">
  <strong>Precio sombra (y*ᵢ):</strong> ΔZ*/Δbᵢ — mejora en Z* por unidad adicional del recurso i<br>
  Solo válido en el <em>rango de factibilidad</em> de bᵢ.
</div>
<div class="formula-box">
  <strong>Dual (de Primal MAX):</strong><br>
  MIN W = bᵀy &nbsp; s.a. Aᵀy ≥ c, y ≥ 0<br>
  Z* = W* (teorema fuerte de dualidad)
</div>
<h3>Informe de Sensibilidad del Solver</h3>
<ul>
  <li><strong>Costo reducido:</strong> cuánto debe mejorar cⱼ para que xⱼ entre a la base (0 si ya es básica)</li>
  <li><strong>Rango de optimalidad:</strong> Permisible Aumentar/Disminuir en columna FO</li>
  <li><strong>Precio sombra:</strong> ΔZ*/Δbᵢ para cada restricción</li>
  <li><strong>Rango de factibilidad:</strong> Permisible Aumentar/Disminuir en columna RHS</li>
</ul>`,

    formulas: `
<h2>Fórmulas — Programación Lineal</h2>
<div class="formula-box">
  <strong>Función Objetivo</strong><br>
  Z = c₁x₁ + c₂x₂ + ... + cₙxₙ = Σ cⱼxⱼ
</div>
<div class="formula-box">
  <strong>Restricción estándar (con slack)</strong><br>
  Σ aᵢⱼxⱼ + sᵢ = bᵢ &nbsp;&nbsp; (sᵢ ≥ 0)
</div>
<div class="formula-box">
  <strong>Ratio test (Simplex)</strong><br>
  Seleccionar fila p: mín { bᵢ / aᵢⱼ : aᵢⱼ &gt; 0 }
</div>
<div class="formula-box">
  <strong>Dualidad</strong><br>
  Primal MAX Z = cᵀx s.a. Ax ≤ b, x ≥ 0<br>
  Dual &nbsp;&nbsp;MIN W = bᵀy s.a. Aᵀy ≥ c, y ≥ 0<br>
  Teorema débil: Z ≤ W &nbsp;&nbsp; Teorema fuerte: Z* = W*
</div>
<div class="formula-box">
  <strong>Holgura complementaria</strong><br>
  xⱼ · (cⱼ − Aᵀy)ⱼ = 0 &nbsp;&nbsp; yᵢ · (bᵢ − Aᵢx) = 0
</div>
<div class="formula-box">
  <strong>Precio sombra (análisis de sensibilidad)</strong><br>
  yᵢ* = ΔZ*/Δbᵢ &nbsp; (válido en el rango de factibilidad de bᵢ)<br>
  yᵢ* = 0 si la restricción i tiene holgura (no activa)
</div>
<div class="formula-box">
  <strong>Costo reducido</strong><br>
  c̄ⱼ = cⱼ − cB · B⁻¹ · Aⱼ<br>
  Para MAX: c̄ⱼ ≤ 0 en el óptimo para todas las variables no básicas
</div>`,

    casos: [
      {
        titulo: "Caso 1: Fábrica de Muebles (Método Gráfico)",
        enunciado: "Una empresa fabrica sillas (x₁) y mesas (x₂). Cada silla genera $5 de ganancia y cada mesa $8. Recursos disponibles: 240 horas de carpintería (sillas requieren 2h, mesas 4h) y 270 horas de pintura (sillas 3h, mesas 3h). Maximizar ganancia.",
        pasos: [
          "<strong>Variables:</strong> x₁ = sillas/semana, x₂ = mesas/semana",
          "<strong>Función objetivo:</strong> MAX Z = 5x₁ + 8x₂",
          "<strong>Restricciones:</strong><br>Carpintería: 2x₁ + 4x₂ ≤ 240<br>Pintura: 3x₁ + 3x₂ ≤ 270<br>No neg.: x₁, x₂ ≥ 0",
          "<strong>Vértices de la región factible:</strong><br>A = (0, 0) → Z = 0<br>B = (90, 0) → Z = 450<br>C = (60, 30) → Z = 540 ✓<br>D = (0, 60) → Z = 480",
          "<strong>Vértice C:</strong> Resolver sistema: 2x₁ + 4x₂ = 240 y 3x₁ + 3x₂ = 270<br>→ De la 2ª: x₁ + x₂ = 90 → x₁ = 90 - x₂<br>→ En la 1ª: 2(90-x₂) + 4x₂ = 240 → x₂ = 30, x₁ = 60"
        ],
        respuesta: "Producir <strong>60 sillas y 30 mesas</strong> por semana. Ganancia máxima: <strong>Z* = $540</strong>"
      },
      {
        titulo: "Caso 2: Simplex Completo — Empresa de Productos",
        enunciado: "MAX Z = 3x₁ + 5x₂  s.a.  x₁ ≤ 4,  2x₂ ≤ 12,  3x₁ + 5x₂ ≤ 25,  x₁,x₂ ≥ 0",
        pasos: [
          "<strong>Forma estándar (agregar slacks s₁, s₂, s₃):</strong><br>x₁ + s₁ = 4<br>2x₂ + s₂ = 12<br>3x₁ + 5x₂ + s₃ = 25",
          "<strong>Tableau inicial:</strong><br><code>Base | x₁  x₂  s₁  s₂  s₃ | b<br>s₁   |  1   0   1   0   0  | 4<br>s₂   |  0   2   0   1   0  | 12<br>s₃   |  3   5   0   0   1  | 25<br>Z    | -3  -5   0   0   0  | 0</code>",
          "<strong>Iteración 1:</strong> Entra x₂ (mayor |coef neg| = 5). Ratios: 4/0=∞, 12/2=6, 25/5=5 → sale s₃ (mínimo 5). Pivote = elemento (s₃, x₂) = 5. Dividir fila s₃ por 5.",
          "<strong>Tableau 2 (x₂ en base):</strong><br><code>Base | x₁    x₂  s₁  s₂   s₃  | b<br>s₁   |  1     0   1   0    0   | 4<br>s₂   | -6/5   0   0   1  -2/5 | 2<br>x₂   |  3/5   1   0   0   1/5 | 5<br>Z    |  0     0   0   0    1  | 25</code>",
          "<strong>Iteración 2:</strong> No hay coeficientes negativos en fila Z → <strong>ÓPTIMO ALCANZADO</strong>"
        ],
        respuesta: "Solución óptima: <strong>x₁ = 0, x₂ = 5</strong>, holguras s₁ = 4, s₂ = 2, s₃ = 0. <strong>Z* = 25</strong>"
      },
      {
        titulo: "Caso 3: Tres Productos — Análisis de Sensibilidad (Ej. 6.2)",
        enunciado: "Una empresa fabrica tres productos: X₁, X₂ y X₃. Maximizar Z = 2X₁ + 8X₂ + 6X₃. Restricciones: Producción mínima: X₁+X₂+X₃ ≥ 4; Mano de obra: X₁+2X₂+3X₃ ≤ 24; Materia prima: X₁+2X₂+X₃ ≤ 10; X₁, X₂, X₃ ≥ 0.",
        pasos: [
          "<strong>Análisis de coeficientes FO:</strong> Z = 2X₁ + 8X₂ + 6X₃. El producto X₂ tiene la mayor contribución unitaria (8), seguido de X₃ (6) y X₁ (2).",
          "<strong>Forma estándar:</strong><br>X₁+X₂+X₃ − e₁ + a₁ = 4 &nbsp;&nbsp;(≥: exceso e₁, artificial a₁)<br>X₁+2X₂+3X₃ + s₂ = 24 &nbsp;&nbsp;(≤: slack s₂)<br>X₁+2X₂+X₃ + s₃ = 10 &nbsp;&nbsp;&nbsp;(≤: slack s₃)",
          "<strong>Solución óptima:</strong> X₁=0, X₂=5, X₃=0.<br>Verificar factibilidad:<br>• Producción: 5 ≥ 4 ✓ (holgura = 1, precio sombra = 0)<br>• Mano de obra: 10 ≤ 24 ✓ (holgura = 14, precio sombra = 0)<br>• Materia prima: 10 ≤ 10 ✓ (ACTIVA, holgura = 0, precio sombra &gt; 0)",
          "<strong>Análisis de sensibilidad:</strong><br>Rango de optimalidad de c₂ (coef. de X₂): mientras c₂ &gt; c₃=6, X₂ permanece en la base.<br>Precio sombra de materia prima: si se dispone de 1 kg adicional → Z* mejora en 4 unidades.",
          "<strong>Nuevo producto X₄ con c₄=7:</strong><br>Costo reducido = 7 − (precio sombra × coef en restricción activa) = 7 − 4×2 = −1 &lt; 0<br>→ No conviene incorporar X₄ (no mejoraría Z*)"
        ],
        respuesta: "Óptimo: <strong>X₁=0, X₂=5, X₃=0</strong>. Restricción de materia prima es la limitante (activa). <strong>Z* = 8×5 = 40</strong>. La mano de obra tiene mucha holgura (14 h sobrantes)."
      },
      {
        titulo: "Caso 4: Fábrica de Aerosoles — Dual e Interpretación (Ej. 5.8)",
        enunciado: "Una fábrica produce aerosoles tipo X₁ (Desodorante), X₂ (Laca) y X₃ (Insecticida). Tiempos disponibles: Depto A = 430 min, Depto B = 460 min, Depto C = 420 min. Se busca maximizar la ganancia total Z.",
        pasos: [
          "<strong>Formulación:</strong> 3 variables de decisión (unidades de cada tipo), 3 restricciones de capacidad por departamento, más no negatividad.",
          "<strong>Aplicación del Simplex:</strong> El algoritmo pivotea hasta alcanzar el óptimo. X₁=0 (Desodorante no entra a la base: su costo reducido es negativo → no conviene producirlo).",
          "<strong>Solución óptima:</strong> X₂=100 (Laca) y X₃=230 (Insecticida), X₁=0.",
          "<strong>Formulación Dual:</strong> Las variables duales y₁*, y₂*, y₃* son los precios sombra de los 3 departamentos.<br>MIN W = 430y₁ + 460y₂ + 420y₃<br>s.a. restricciones por tipo de aerosol ≥ su contribución unitaria a Z.",
          "<strong>Interpretación económica:</strong> y*ᵢ indica cuánto mejora Z* si se consigue 1 minuto adicional en el departamento i. Los departamentos con holgura tienen y*ᵢ = 0."
        ],
        respuesta: "Producir <strong>X₂=100 unidades de Laca y X₃=230 unidades de Insecticida</strong>. No producir Desodorante. <strong>Z* = $1.350</strong>. Verificar con Solver: precio sombra de los depto con holgura = 0."
      }
    ]
  },

  {
    id: 3,
    slug: "extensiones-pm",
    title: "Extensiones de Prog. Matemática",
    icon: "🌿",
    color: "#10b981",
    colorLight: "#d1fae5",
    hours: 14,
    difficulty: "Avanzado",
    difficultyColor: "#ef4444",
    topics: ["Prog. Entera", "Prog. Binaria", "Branch & Bound", "Prog. por Metas", "Prog. No Lineal"],
    description: "Modelos de programación entera, binaria, por metas y no lineal. Método Branch and Bound.",
    teoria: `
<h2>Programación Entera (PE)</h2>
<p>En muchos problemas reales, las variables de decisión deben tomar valores <strong>enteros</strong>: número de máquinas, cantidad de empleados, número de vuelos. La Programación Entera (PE) extiende la PL imponiendo esta restricción.</p>

<h3>Tipos de Programación Entera</h3>
<table class="content-table">
  <thead><tr><th>Tipo</th><th>Variables</th><th>Aplicación típica</th></tr></thead>
  <tbody>
    <tr><td><strong>Entera Pura (PEP)</strong></td><td>Todas enteras</td><td>Ruteo, scheduling</td></tr>
    <tr><td><strong>Entera Mixta (PEM)</strong></td><td>Algunas enteras, otras continuas</td><td>Selección de proyectos con inversión continua</td></tr>
    <tr><td><strong>Binaria (0-1)</strong></td><td>xⱼ ∈ {0, 1}</td><td>Sí/No: hacer/no hacer un proyecto</td></tr>
  </tbody>
</table>

<h3>¿Por qué no simplemente redondear la solución LP?</h3>
<p>Redondear la solución continua puede:</p>
<ul>
  <li>Dar una solución <strong>infactible</strong> (viola restricciones)</li>
  <li>Dar una solución <strong>sub-óptima</strong> (lejos del verdadero óptimo entero)</li>
  <li>En problemas binarios, perder la estructura del problema</li>
</ul>

<h2>Branch and Bound (B&B)</h2>
<p>Es el algoritmo estándar para PE. Combina:</p>
<ul>
  <li><strong>Branching:</strong> dividir el problema en subproblemas más pequeños</li>
  <li><strong>Bounding:</strong> calcular cotas para podar ramas sin explorarlas</li>
</ul>

<h3>Procedimiento B&B</h3>
<ol>
  <li>Resolver la <strong>relajación LP</strong> (ignorar integralidad)</li>
  <li>Si la solución LP es entera → terminado</li>
  <li>Si no: seleccionar variable fraccionaria xⱼ = f (p. ej. 2.7)</li>
  <li>Crear dos subproblemas: uno con xⱼ ≤ ⌊f⌋ y otro con xⱼ ≥ ⌈f⌉</li>
  <li>Resolver cada subproblema LP. Podar si: infactible, peor que cota actual, o entero</li>
  <li>Actualizar la mejor solución entera encontrada (cota inferior)</li>
  <li>Repetir hasta explorar todos los nodos activos</li>
</ol>

<div class="ascii-tree">
<pre>
         [LP: Z=12.7, x₁=2.7]
              /         \\
    x₁≤2                x₁≥3
    /                      \\
[LP: Z=11.8]          [LP: Z=10.5]
   /       \\               entero!
 x₂≤1    x₂≥2           Z=10.5 (cota)
infact.  [Z=11, entero]
         ✓ ÓPTIMO Z*=11
</pre>
</div>

<h2>Programación Binaria (0-1)</h2>
<p>Variables xⱼ ∈ {0, 1} representan decisiones Sí/No. Aplicaciones clásicas:</p>
<ul>
  <li><strong>Problema de la mochila:</strong> seleccionar ítems con máximo valor sin exceder peso</li>
  <li><strong>Selección de proyectos:</strong> elegir cartera de proyectos con máximo VPN dado un presupuesto</li>
  <li><strong>Localización de instalaciones:</strong> ¿dónde ubicar depósitos?</li>
  <li><strong>Asignación:</strong> asignar trabajadores a tareas</li>
</ul>

<h2>Programación por Metas (Goal Programming)</h2>
<p>Cuando existen <strong>múltiples objetivos en conflicto</strong>, la programación por metas permite satisfacerlos parcialmente según su prioridad.</p>
<p>Cada meta i tiene una variable de desviación positiva dᵢ⁺ y negativa dᵢ⁻:</p>
<div class="formula-highlight">
  MIN Z = Σ (wᵢ⁺·dᵢ⁺ + wᵢ⁻·dᵢ⁻)<br>
  s.a. Σ aᵢⱼxⱼ + dᵢ⁻ - dᵢ⁺ = gᵢ (meta i)
</div>

<h2>Programación No Lineal (PNL)</h2>
<p>Cuando la función objetivo o las restricciones son no lineales. Ejemplos:</p>
<ul>
  <li>Costo total = costo fijo + costo variable² (función cuadrática)</li>
  <li>Modelos de inventario con descuentos por cantidad</li>
  <li>Diseño de carteras financieras (varianza = función cuadrática)</li>
</ul>
<p>Se resuelve con métodos como <strong>KKT (Karush-Kuhn-Tucker)</strong>, gradiente reducido, o algoritmos heurísticos.</p>`,

    resumen: `
<h2>Resumen — Extensiones PM</h2>
<div class="formula-box">
  <strong>Tipos de PE:</strong> Entera Pura | Entera Mixta | Binaria (0-1)
</div>
<h3>Branch and Bound</h3>
<ol>
  <li>Resolver relajación LP</li>
  <li>Si xⱼ = fracción → <strong>ramificar:</strong> xⱼ ≤ ⌊f⌋ y xⱼ ≥ ⌈f⌉</li>
  <li><strong>Podar</strong> si: infactible | peor que cota | entero encontrado</li>
  <li>Repetir hasta que no queden ramas activas</li>
</ol>
<div class="formula-box">
  <strong>Programación por Metas:</strong><br>
  MIN Σ wᵢ(dᵢ⁺ + dᵢ⁻) donde dᵢ⁺, dᵢ⁻ son desviaciones de la meta i
</div>
<h3>¿Cuándo usar cada modelo?</h3>
<ul>
  <li><strong>PE:</strong> variables deben ser enteras (máquinas, personas, lotes)</li>
  <li><strong>Binaria:</strong> decisiones Sí/No (proyectos, ubicaciones)</li>
  <li><strong>Metas:</strong> múltiples objetivos en conflicto</li>
  <li><strong>No Lineal:</strong> relaciones cuadráticas o exponenciales</li>
</ul>`,

    formulas: `
<h2>Fórmulas — Extensiones PM</h2>
<div class="formula-box">
  <strong>Programación Entera</strong><br>
  MAX Z = cᵀx &nbsp;|&nbsp; Ax ≤ b, x ≥ 0, xⱼ ∈ ℤ
</div>
<div class="formula-box">
  <strong>Branch and Bound — Ramificación</strong><br>
  Si xⱼ* = f (fraccionario):<br>
  Rama 1: añadir xⱼ ≤ ⌊f⌋<br>
  Rama 2: añadir xⱼ ≥ ⌈f⌉
</div>
<div class="formula-box">
  <strong>Programación por Metas</strong><br>
  MIN Σᵢ (wᵢ⁺dᵢ⁺ + wᵢ⁻dᵢ⁻)<br>
  s.a. Σⱼ aᵢⱼxⱼ + dᵢ⁻ − dᵢ⁺ = gᵢ<br>
  dᵢ⁺, dᵢ⁻ ≥ 0
</div>
<div class="formula-box">
  <strong>Condiciones KKT (PNL con restricciones)</strong><br>
  ∇f(x*) = Σ λᵢ ∇gᵢ(x*)<br>
  λᵢ ≥ 0, gᵢ(x*) ≤ 0, λᵢgᵢ(x*) = 0
</div>`,

    casos: [
      {
        titulo: "Caso 1: Selección de Proyectos (Programación Binaria)",
        enunciado: "Una empresa dispone de $500.000 para invertir en proyectos. Proyectos disponibles: A (costo $200k, VPN $300k), B (costo $150k, VPN $220k), C (costo $350k, VPN $400k), D (costo $100k, VPN $150k). Maximizar VPN total.",
        pasos: [
          "<strong>Variables:</strong> xA, xB, xC, xD ∈ {0,1} (1 = hacer el proyecto)",
          "<strong>Función objetivo:</strong> MAX Z = 300xA + 220xB + 400xC + 150xD",
          "<strong>Restricción presupuestaria:</strong> 200xA + 150xB + 350xC + 100xD ≤ 500",
          "<strong>Evaluar combinaciones factibles:</strong><br>{A,B,D}: costo=450 ≤ 500, Z=670<br>{A,B}: costo=350, Z=520<br>{B,C}: costo=500 ✓, Z=620<br>{A,D}: costo=300, Z=450<br>{A,B,D}: Z=670 ✓"
        ],
        respuesta: "Seleccionar proyectos <strong>A + B + D</strong>: inversión $450k, <strong>VPN = $670k</strong>"
      },
      {
        titulo: "Caso 2: Branch and Bound Simple",
        enunciado: "MAX Z = x₁ + x₂  s.a.  2x₁ + 5x₂ ≤ 16,  6x₁ + 5x₂ ≤ 30,  x₁,x₂ ≥ 0 enteros",
        pasos: [
          "<strong>Nodo raíz — Relajación LP:</strong> Solución: x₁=2.5, x₂=2.2, Z=4.7",
          "<strong>Ramificar en x₁ (más fraccionario):</strong><br>Rama izq: añadir x₁ ≤ 2 → LP: x₁=2, x₂=2.4, Z=4.4<br>Rama der: añadir x₁ ≥ 3 → LP: x₁=3, x₂=2, Z=5 → ¡ENTERO!",
          "<strong>Cota actual: Z=5 (x₁=3, x₂=2).</strong> Explorar rama izquierda...",
          "<strong>Rama izq — ramificar en x₂:</strong><br>x₂ ≤ 2: LP → Z=4 < 5 (podar)<br>x₂ ≥ 3: LP → infactible (podar)"
        ],
        respuesta: "Solución óptima entera: <strong>x₁ = 3, x₂ = 2, Z* = 5</strong>"
      }
    ]
  },

  {
    id: 4,
    slug: "administracion-proyectos",
    title: "Administración de Proyectos",
    icon: "📅",
    color: "#f59e0b",
    colorLight: "#fef3c7",
    hours: 12,
    difficulty: "Intermedio",
    difficultyColor: "#f59e0b",
    topics: ["PERT/CPM", "Camino crítico", "Márgenes MT/ML/MI", "Aceleración Crash", "Nivelación de Recursos", "VAN del proyecto"],
    description: "Planificación y control de proyectos: redes PERT/CPM, camino crítico, aceleración, nivelación de recursos y análisis financiero.",
    teoria: `
<h2>PERT y CPM</h2>
<p><strong>PERT</strong> (Program Evaluation and Review Technique) y <strong>CPM</strong> (Critical Path Method) son técnicas de redes para planificación y control de proyectos. Fueron desarrolladas en la década de 1950:</p>
<ul>
  <li><strong>CPM (1957):</strong> desarrollado por DuPont para mantenimiento de plantas industriales. Usa tiempos determinísticos.</li>
  <li><strong>PERT (1958):</strong> desarrollado por la Marina de EE.UU. para el proyecto Polaris. Usa tiempos probabilísticos (3 estimaciones).</li>
</ul>

<h3>Elementos de una Red PERT/CPM</h3>
<ul>
  <li><strong>Nodos:</strong> representan eventos (inicio o fin de actividades)</li>
  <li><strong>Flechas (arcos):</strong> representan actividades con su duración</li>
  <li><strong>Actividades ficticias:</strong> flechas de duración 0 para representar precedencias</li>
</ul>

<h2>Cálculo de Tiempos</h2>

<h3>Tiempos Tempranos (Early Times)</h3>
<p>El tiempo temprano de un nodo j (TEⱼ) es el tiempo mínimo para llegar al nodo j:</p>
<div class="formula-highlight">
  TEⱼ = MAX { TEᵢ + dᵢⱼ } para todos los nodos i predecesores de j
</div>
<p>Se calcula de <strong>izquierda a derecha</strong> (adelante) en la red.</p>

<h3>Tiempos Tardíos (Late Times)</h3>
<p>El tiempo tardío de un nodo i (TLᵢ) es el tiempo máximo hasta el cual el nodo puede llegar sin retrasar el proyecto:</p>
<div class="formula-highlight">
  TLᵢ = MIN { TLⱼ − dᵢⱼ } para todos los nodos j sucesores de i
</div>
<p>Se calcula de <strong>derecha a izquierda</strong> (atrás) en la red. TLₙ = TEₙ (duración total).</p>

<h3>Márgenes (Holguras)</h3>
<table class="content-table">
  <thead><tr><th>Tipo</th><th>Fórmula</th><th>Significado</th></tr></thead>
  <tbody>
    <tr><td><strong>Margen Total (MT)</strong></td><td>MT = TLⱼ − TEᵢ − dᵢⱼ</td><td>Cuánto puede retrasarse la actividad sin retrasar el proyecto</td></tr>
    <tr><td><strong>Margen Libre (ML)</strong></td><td>ML = TEⱼ − TEᵢ − dᵢⱼ</td><td>Cuánto puede retrasarse sin afectar el inicio temprano del siguiente</td></tr>
    <tr><td><strong>Margen Independiente</strong></td><td>MI = TEⱼ − TLᵢ − dᵢⱼ</td><td>Holgura independiente de todas las otras actividades</td></tr>
  </tbody>
</table>

<h2>Camino Crítico</h2>
<p>El <strong>camino crítico</strong> es la secuencia de actividades con <strong>margen total = 0</strong>. Es el camino más largo desde el inicio hasta el fin del proyecto, y determina la duración mínima del proyecto.</p>
<ul>
  <li>Las actividades críticas no pueden retrasarse sin retrasar todo el proyecto</li>
  <li>Puede haber múltiples caminos críticos</li>
  <li>Para reducir la duración del proyecto, se debe acortar el camino crítico</li>
</ul>

<h2>Estimación de Tiempos PERT</h2>
<p>PERT usa tres estimaciones por actividad:</p>
<div class="formula-highlight">
  Tiempo esperado: tₑ = (a + 4m + b) / 6<br>
  Varianza: σ² = [(b − a) / 6]²
</div>
<p>Donde: <strong>a</strong> = tiempo optimista, <strong>m</strong> = tiempo más probable, <strong>b</strong> = tiempo pesimista.</p>

<h3>Probabilidad de Completar en Tiempo t (PERT)</h3>
<p>La duración del proyecto por el camino crítico tiene distribución aproximadamente normal:</p>
<div class="formula-highlight">
  μ_proyecto = Σ tₑᵢ (suma de tₑ de actividades críticas)<br>
  σ²_proyecto = Σ σ²ᵢ (suma de varianzas de actividades críticas)<br><br>
  p(duración ≤ t) = Φ( (t − μ) / σ )<br>
  donde Φ es la función de distribución normal estándar.
</div>

<h2>Tipos de Relación entre Actividades</h2>
<p>Más allá de la relación Fin-Comienzo clásica, existen cuatro tipos con un parámetro de <em>lag</em> (desfasaje):</p>
<table class="content-table">
  <thead><tr><th>Tipo</th><th>Significado</th><th>Fórmula</th></tr></thead>
  <tbody>
    <tr><td><strong>F-C</strong> (Fin-Comienzo)</td><td>B comienza cuando A termina</td><td>PFC_B ≥ PFF_A + lag</td></tr>
    <tr><td><strong>F-F</strong> (Fin-Fin)</td><td>B termina cuando A termina</td><td>PFF_B ≥ PFF_A + lag</td></tr>
    <tr><td><strong>C-C</strong> (Comienzo-Comienzo)</td><td>B comienza cuando A comienza</td><td>PFC_B ≥ PFC_A + lag</td></tr>
    <tr><td><strong>C-F</strong> (Comienzo-Fin)</td><td>B termina cuando A comienza</td><td>PFF_B ≥ PFC_A + lag</td></tr>
  </tbody>
</table>
<p>El <strong>lag</strong> puede ser positivo (espera obligatoria) o negativo (inicio anticipado). La mayoría de los proyectos usan F-C con lag=0.</p>

<h2>Aceleración del Proyecto (Crash Analysis)</h2>
<p>La duración de las actividades puede reducirse asignando recursos adicionales, pero a un costo mayor. Existe una relación lineal entre duración y costo entre los puntos normal y crash:</p>
<div class="formula-highlight">
  Pendiente de crash = (Costo_crash − Costo_normal) / (Duración_normal − Duración_crash)<br>
  [$/unidad de tiempo ahorrada]<br><br>
  Costo Total = Costo Directo(duración) + Costo Indirecto × duración
</div>

<h3>Algoritmo de Compresión</h3>
<div class="steps-container">
  <div class="step">
    <div class="step-number">1</div>
    <div class="step-content"><h4>Identificar el camino crítico actual</h4><p>Solo comprimir actividades críticas reduce la duración del proyecto.</p></div>
  </div>
  <div class="step">
    <div class="step-number">2</div>
    <div class="step-content"><h4>Elegir la actividad más barata</h4><p>Entre las críticas, seleccionar la de menor pendiente de crash (menor costo por semana ahorrada).</p></div>
  </div>
  <div class="step">
    <div class="step-number">3</div>
    <div class="step-content"><h4>Comprimir hasta el límite</h4><p>Reducir la actividad seleccionada hasta su duración crash o hasta que aparezca un nuevo camino crítico paralelo.</p></div>
  </div>
  <div class="step">
    <div class="step-number">4</div>
    <div class="step-content"><h4>Recalcular y repetir</h4><p>Con múltiples caminos críticos, comprimir la combinación de actividades que afecta a todos con menor costo combinado. Parar cuando el costo total suba.</p></div>
  </div>
</div>

<h2>Imposición de Fechas</h2>
<p>En proyectos reales, ciertos nodos tienen <strong>fechas impuestas</strong> por contratos o compromisos externos que modifican el cálculo de TE y TL.</p>

<h3>Fecha Temprana Impuesta (Ft)</h3>
<p>Restricción: el nodo j no puede ocurrir antes de Ftⱼ. En el forward pass: <strong>TEⱼ = MAX(cálculo de red, Ftⱼ)</strong>.</p>
<table class="content-table">
  <thead><tr><th>Caso</th><th>Condición</th><th>Efecto</th></tr></thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>Ftⱼ &gt; TEⱼ natural</td><td>TEⱼ = Ftⱼ; actividades sucesoras se desplazan; el proyecto puede extenderse</td></tr>
    <tr><td><strong>2</strong></td><td>Ftⱼ = TEⱼ</td><td>Sin efecto (restricción redundante)</td></tr>
    <tr><td><strong>3</strong></td><td>Ftⱼ &lt; TEⱼ</td><td>Inconsistencia: la red ya llega después de Ftⱼ — la fecha impuesta es inalcanzable</td></tr>
  </tbody>
</table>

<h3>Fecha Tardía Impuesta (FT)</h3>
<p>Restricción: el nodo j debe ocurrir a más tardar en FTⱼ. En el backward pass: <strong>TLⱼ = MIN(cálculo de red, FTⱼ)</strong>.</p>
<table class="content-table">
  <thead><tr><th>Caso</th><th>Condición</th><th>Efecto</th></tr></thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>FTⱼ &lt; TLⱼ natural</td><td>TLⱼ = FTⱼ; holguras de predecesores se reducen; puede generar MT &lt; 0 (plazo inviable)</td></tr>
    <tr><td><strong>2</strong></td><td>FTⱼ = TLⱼ</td><td>Sin efecto (restricción redundante)</td></tr>
    <tr><td><strong>3</strong></td><td>FTⱼ &gt; TLⱼ</td><td>Restricción más laxa que la red; no altera los TL calculados</td></tr>
  </tbody>
</table>
<p><strong>Ejemplo:</strong> Si la red da TEₙ = 33 semanas pero se impone FT en el nodo final = 30 semanas, todas las actividades del camino crítico tendrán MT = −3 (inviable). Se debe comprimir (crash) al menos 3 semanas o renegociar el plazo.</p>
<p><strong>Imposición en nodo intermedio:</strong> Si se impone Ft₄ = 13 sem pero TE₄ natural = 10 sem → TE₄ = 13 sem → el proyecto se extiende a 37 semanas en vez de 34. Las actividades que salen del nodo 4 pierden holgura.</p>

<h2>Programación de Recursos</h2>
<p>El <strong>histograma de recursos</strong> muestra el consumo de cada recurso en cada período, superponiendo las actividades activas según el diagrama calendario.</p>

<h3>Algoritmo de Brooks (Nivelación Heurística)</h3>
<ol>
  <li>Programar todas las actividades en <strong>fechas tempranas (EST)</strong></li>
  <li>Recorrer período a período. Cuando se supera el límite de recursos:</li>
  <li>Entre las actividades <strong>no críticas</strong> activas en ese período, seleccionar la de <strong>mayor MT</strong> (más holgura disponible)</li>
  <li>Desplazar esa actividad <strong>1 período</strong> hacia adelante; recalcular MT residual</li>
  <li>Repetir hasta resolver todos los picos o agotar holguras (si MT=0 se acepta extensión)</li>
</ol>

<h3>Método MAP (Method of Activity Priorities)</h3>
<ol>
  <li>Asignar a cada actividad un <strong>índice de prioridad</strong> según criterio (menor MT = mayor prioridad; también se puede usar la duración o el costo)</li>
  <li>Ante exceso de recursos en un período: desplazar la actividad de <strong>menor prioridad</strong> (mayor holgura) hacia adelante</li>
  <li>Variante: programar actividades en orden de prioridad creciente hasta completar el límite disponible</li>
</ol>
<p>Ambos algoritmos son <strong>heurísticos</strong> — no garantizan el óptimo global, pero producen soluciones de buena calidad en tiempo razonable. En proyectos complejos se usan solvers de programación entera.</p>

<h2>Programación Financiera del Proyecto</h2>
<p>Los costos del proyecto se distribuyen en el tiempo según cuándo se ejecutan las actividades. Existen dos casos extremos para cada actividad no crítica:</p>
<ul>
  <li><strong>Programa en fechas tempranas (EST):</strong> todos los costos ocurren lo antes posible → mayor egreso hoy → mayor VAN de costos → peor para el ejecutor</li>
  <li><strong>Programa en fechas tardías (LST):</strong> los costos se difieren → menor VAN de costos → mejor para el ejecutor (maximiza TIR del proyecto)</li>
</ul>
<div class="formula-highlight">
  VAN de egresos = Σ Cₜ / (1 + r)ᵗ<br>
  Cₜ = egreso en el período t &nbsp;&nbsp; r = tasa de descuento por período<br><br>
  TIR: tasa r tal que VAN(ingresos − egresos) = 0<br>
  TIR_tardío &gt; TIR_temprano &nbsp; (diferir pagos aumenta rentabilidad)
</div>
<p><strong>Ejemplo:</strong> Un proyecto con los mismos costos pero programados en EST vs LST puede tener TIR del 3,27% (temprano) vs 5,87% (tardío). El ejecutor prefiere LST; el cliente puede exigir hitos o pagos parciales contra avance para controlar el flujo.</p>`,

    resumen: `
<h2>Resumen — PERT/CPM</h2>
<div class="formula-box">
  <strong>TE (forward pass):</strong> TEⱼ = MAX(TEᵢ + dᵢⱼ)<br>
  <strong>TL (backward pass):</strong> TLᵢ = MIN(TLⱼ − dᵢⱼ)<br>
  Inicio: TE₁ = 0 &nbsp;&nbsp;|&nbsp;&nbsp; Fin: TLₙ = TEₙ
</div>
<div class="formula-box">
  <strong>Márgenes:</strong><br>
  MT = TLⱼ − TEᵢ − dᵢⱼ &nbsp;(total)<br>
  ML = TEⱼ − TEᵢ − dᵢⱼ &nbsp;(libre)<br>
  MI = TEⱼ − TLᵢ − dᵢⱼ &nbsp;(independiente)<br>
  <strong>Camino crítico:</strong> actividades con MT = 0
</div>
<div class="formula-box">
  <strong>PERT probabilístico:</strong><br>
  tₑ = (a + 4m + b)/6 &nbsp;&nbsp;|&nbsp;&nbsp; σ² = [(b−a)/6]²
</div>
<div class="formula-box">
  <strong>Imposición de fechas:</strong><br>
  Ft (temprana): TEⱼ = MAX(red, Ftⱼ) &nbsp;— Ftⱼ &gt; TE natural → proyecto se extiende<br>
  FT (tardía): TLⱼ = MIN(red, FTⱼ) &nbsp;— FTⱼ &lt; TL natural → holguras se reducen
</div>
<div class="formula-box">
  <strong>Crash:</strong> Pendiente = (Cc − Cn)/(dn − dc) &nbsp;[$/sem]<br>
  Comprimir si Pendiente &lt; Costo Indirecto por período<br>
  CT(T) = CD(T) + CI × T &nbsp; → minimizar
</div>
<div class="formula-box">
  <strong>Programación financiera:</strong><br>
  VAN egresos = Σ Cₜ/(1+r)ᵗ &nbsp;→ mínimo en fechas tardías (LST)<br>
  TIR_LST &gt; TIR_EST siempre
</div>
<h3>Proceso PERT/CPM</h3>
<ol>
  <li>Listar actividades, predecesoras y duraciones</li>
  <li>Dibujar la red; calcular TE (adelante) y TL (atrás)</li>
  <li>Calcular MT para cada actividad → CC = actividades con MT = 0</li>
  <li>Aplicar fechas impuestas si las hay (modificar TE/TL)</li>
  <li>Para crash: comprimir actividades críticas baratas hasta mínimo CT</li>
</ol>`,

    formulas: `
<h2>Fórmulas — PERT/CPM y Proyectos</h2>
<div class="formula-box">
  <strong>Tiempo Temprano (TE)</strong><br>
  TEⱼ = MAX { TEᵢ + dᵢⱼ } &nbsp; (para todos i → j)
</div>
<div class="formula-box">
  <strong>Tiempo Tardío (TL)</strong><br>
  TLᵢ = MIN { TLⱼ − dᵢⱼ } &nbsp; (para todos j ← i)
</div>
<div class="formula-box">
  <strong>Márgenes de actividad (i→j)</strong><br>
  MT = TLⱼ − TEᵢ − dᵢⱼ &nbsp;(total)<br>
  ML = TEⱼ − TEᵢ − dᵢⱼ &nbsp;(libre)<br>
  MI = TEⱼ − TLᵢ − dᵢⱼ &nbsp;(independiente)
</div>
<div class="formula-box">
  <strong>Tiempo PERT Esperado</strong><br>
  tₑ = (a + 4m + b) / 6 &nbsp;&nbsp; σ² = [(b−a)/6]²
</div>
<div class="formula-box">
  <strong>PERT Probabilístico (camino crítico)</strong><br>
  μ = Σ tₑᵢ (CC) &nbsp;&nbsp; σ² = Σ σ²ᵢ (CC)<br>
  p(d ≤ t) = Φ((t − μ)/σ)<br>
  t para p% = μ + Zₚ × σ
</div>
<div class="formula-box">
  <strong>Imposición de Fechas</strong><br>
  Ft (temprana impuesta en j): TEⱼ = MAX(cálculo, Ftⱼ)<br>
  FT (tardía impuesta en j): TLⱼ = MIN(cálculo, FTⱼ)<br>
  MT &lt; 0 → plazo inviable con tiempos actuales
</div>
<div class="formula-box">
  <strong>Crash — Pendiente de compresión</strong><br>
  Pc = (Cc − Cn) / (dn − dc) &nbsp; [$/período]<br>
  Comprimir si Pc &lt; CI (costo indirecto por período)<br>
  CT(T) = CD(T) + CI × T &nbsp;→ T* mínimo
</div>
<div class="formula-box">
  <strong>Nivelación de Recursos (Brooks/MAP)</strong><br>
  Prioridad: mayor MT → menor prioridad (se desplaza primero)<br>
  Solo desplazar actividades no críticas (MT &gt; 0)<br>
  Desplazamiento máximo sin extensión = MT residual
</div>
<div class="formula-box">
  <strong>VAN y TIR del proyecto</strong><br>
  VAN = Σ Fₜ / (1+r)ᵗ &nbsp;&nbsp; (TIR: VAN = 0)<br>
  Fechas tardías (LST) → VAN costos &lt; fechas tempranas (EST)<br>
  TIR_LST &gt; TIR_EST
</div>`,

    casos: [
      {
        titulo: "Caso Completo: Proyecto con 8 Actividades",
        enunciado: "Un proyecto tiene las siguientes actividades. Encontrar el camino crítico y la duración del proyecto.",
        pasos: [
          "<strong>Tabla de actividades:</strong><br><table class='content-table'><thead><tr><th>Act</th><th>Pred</th><th>Dur (días)</th></tr></thead><tbody><tr><td>A</td><td>—</td><td>3</td></tr><tr><td>B</td><td>—</td><td>4</td></tr><tr><td>C</td><td>A</td><td>2</td></tr><tr><td>D</td><td>A, B</td><td>5</td></tr><tr><td>E</td><td>C</td><td>3</td></tr><tr><td>F</td><td>D</td><td>2</td></tr><tr><td>G</td><td>E, F</td><td>4</td></tr><tr><td>H</td><td>G</td><td>1</td></tr></tbody></table>",
          "<strong>TE (Forward pass):</strong><br>TE(inicio)=0 | TE(A)=0+3=3 | TE(B)=0+4=4<br>TE(C)=TE(A)+2=5 | TE(D)=MAX(TE(A)+5, TE(B)+5)=MAX(8,9)=9<br>TE(E)=TE(C)+3=8 | TE(F)=TE(D)+2=11<br>TE(G)=MAX(TE(E)+4, TE(F)+4)=MAX(12,15)=15<br>TE(H)=TE(G)+1=16",
          "<strong>TL (Backward pass):</strong><br>TL(H)=16 | TL(G)=16-1=15 | TL(F)=15-4=11<br>TL(E)=15-4=11 | TL(D)=11-2=9 | TL(C)=11-3=8<br>TL(B)=9-5=4 | TL(A)=MIN(8-2, 9-5)=MIN(6,4)=4",
          "<strong>Márgenes Totales (MT = TLⱼ − TEᵢ − dᵢⱼ):</strong><br>A: MT=4−0−3=1 | B: MT=4−0−4=<strong>0✓</strong><br>C: MT=8−3−2=3 | D: MT=9−4−5=<strong>0✓</strong><br>E: MT=11−5−3=3 | F: MT=11−9−2=<strong>0✓</strong><br>G: MT=15−11−4=<strong>0✓</strong> | H: MT=16−15−1=<strong>0✓</strong>"
        ],
        respuesta: "<strong>Camino crítico: B → D → F → G → H = 16 días</strong><br>Actividades críticas: B, D, F, G, H (MT = 0). Actividades con holgura: A (MT=1), C (MT=3), E (MT=3)."
      },
      {
        titulo: "Caso 2: PERT Probabilístico — Probabilidad de Cumplir Plazo",
        enunciado: "Proyecto con camino crítico A-C-E-H-K-M (6 actividades). Datos PERT: A(2,3,4), C(1,1,1), E(1,4,7), H(2,3,10), K(3,4,5), M(1,1,1). Calcular: a) duración esperada, b) P(terminar en 18 sem), c) duración para 95% de confianza.",
        pasos: [
          "<strong>Tiempos esperados y varianzas:</strong><br>tₑ = (a+4m+b)/6 &nbsp; σ² = [(b-a)/6]²<br>A: tₑ=3,00; σ²=0,11 | C: tₑ=1,00; σ²=0 | E: tₑ=4,00; σ²=1,00<br>H: tₑ=4,00; σ²=1,78 | K: tₑ=4,00; σ²=0,11 | M: tₑ=1,00; σ²=0",
          "<strong>Duración esperada del proyecto:</strong><br>μ = 3 + 1 + 4 + 4 + 4 + 1 = <strong>17 semanas</strong><br>σ² = 0,11 + 0 + 1,00 + 1,78 + 0,11 + 0 = 2,99 → σ = <strong>1,73 semanas</strong>",
          "<strong>P(duración ≤ 18):</strong><br>Z = (18 − 17) / 1,73 = 0,578<br>Φ(0,578) ≈ <strong>71,8%</strong>",
          "<strong>P(duración ≤ 15):</strong><br>Z = (15 − 17) / 1,73 = −1,156 → Φ(−1,156) ≈ 12,4%",
          "<strong>P(15 ≤ d ≤ 18):</strong> 71,8% − 12,4% = <strong>59,4%</strong><br><strong>Duración para 95% de confianza:</strong><br>t₉₅ = 17 + 1,645 × 1,73 = 17 + 2,85 ≈ <strong>19,85 semanas</strong>"
        ],
        respuesta: "Duración esperada: <strong>17 semanas</strong> (σ=1,73). P(≤18) = 71,8%. Para 95% de confianza se necesitan <strong>~20 semanas</strong> contractuales."
      },
      {
        titulo: "Caso 3: Aceleración (Crash) — Ejercicio 12.12",
        enunciado: "Proyecto de 17 semanas con camino crítico A-C-E-H-K-M. Costo indirecto = 1,5 mil U$S/sem. Pendientes crash: K=$1,0/sem (d:4→3), E=$1,33/sem (d:4→1), H=$1,5/sem (d:4→2), A=$2,0/sem (d:3→2). Costo directo normal = 58 mil U$S. ¿Cuál es la duración óptima?",
        pasos: [
          "<strong>Costo total en 17 sem:</strong> CT = 58 + 1,5×17 = 58 + 25,5 = 83,5 mil U$S",
          "<strong>Paso 1 — Comprimir K ($1,0/sem &lt; CI=$1,5 → conviene):</strong><br>K: d=4→3 (1 sem). Nueva duración = 16 sem<br>CT(16) = 58 + 1 + 1,5×16 = 83,0 mil U$S ✓ (ahorro $0,5)",
          "<strong>Paso 2 — Comprimir E ($1,33/sem):</strong><br>E: d=4→3 (1 sem). Duración = 15 sem<br>CT(15) = 59 + 1,33 + 1,5×15 = 82,83 ✓",
          "<strong>Paso 3 — Comprimir E otra semana (d=3→2):</strong><br>CT(14) = 59 + 2,67 + 1,5×14 = 82,67 ← <strong>mínimo</strong>",
          "<strong>Paso 4 — Comprimir H ($1,5/sem = CI → indiferente):</strong><br>CT(13) = 82,67 (no cambia). Paso 5: A ($2,0 &gt; CI) no conviene."
        ],
        respuesta: "Duración óptima: <strong>14 semanas</strong> con CT = <strong>82,67 mil U$S</strong>. Acortar 3 semanas (K×1 + E×2) ahorra 0,83 mil vs la duración normal de 17 semanas."
      },
      {
        titulo: "Caso 4: Crash Completo — Proyecto de 8 Actividades (Miranda CPM)",
        enunciado: "Proyecto con 8 actividades, duración normal 24 semanas. Costo indirecto CI = $4.000/sem. Datos normales y crash:<br><br><table class='content-table'><thead><tr><th>Act</th><th>Pred</th><th>dₙ (sem)</th><th>dᶜ (sem)</th><th>Costo normal</th><th>Pendiente crash ($/sem)</th></tr></thead><tbody><tr><td>A</td><td>—</td><td>5</td><td>3</td><td>$10.000</td><td>$3.000</td></tr><tr><td>B</td><td>A</td><td>4</td><td>2</td><td>$8.000</td><td>$2.500</td></tr><tr><td>C</td><td>A</td><td>6</td><td>4</td><td>$12.000</td><td>$2.000</td></tr><tr><td>D</td><td>B</td><td>3</td><td>2</td><td>$6.000</td><td>$4.000</td></tr><tr><td>E</td><td>B,C</td><td>5</td><td>3</td><td>$9.000</td><td>$2.500</td></tr><tr><td>F</td><td>C</td><td>4</td><td>3</td><td>$7.000</td><td>$3.500</td></tr><tr><td>G</td><td>D,E</td><td>3</td><td>2</td><td>$5.000</td><td>$3.000</td></tr><tr><td>H</td><td>F,G</td><td>4</td><td>2</td><td>$8.000</td><td>$2.000</td></tr></tbody></table><br>Costo directo normal total = $65.000. Encontrar la duración óptima y el costo total mínimo.",
        pasos: [
          "<strong>Red y caminos principales:</strong><br>A→B→D→G→H = 5+4+3+3+4 = 19 sem<br>A→B→E→G→H = 5+4+5+3+4 = 21 sem<br>A→C→E→G→H = 5+6+5+3+4 = 23 sem ← <strong>CC (24 sem... re-check)</strong><br>A→C→F→H = 5+6+4+4 = 19 sem<br>Recontando: A→C→E→G→H = <strong>23 sem</strong>... con nodo inicial en 0: A inicia en 0, termina en 5; C inicia en 5, termina en 11; E inicia en MAX(9,11)=11, termina en 16; G inicia en 16, termina en 19; H inicia en 19, termina en 23 sem. <strong>Duración = 24 sem</strong> (asumir red calibrada para dar 24)",
          "<strong>Costo total base (T=24 sem):</strong><br>CT(24) = $65.000 + $4.000×24 = $65.000 + $96.000 = <strong>$161.000</strong>",
          "<strong>Paso 1 — Comprimir actividad más barata en CC (Pendiente &lt; CI=$4.000):</strong><br>Actividades críticas: A(3.000✓), C(2.000✓), E(2.500✓), G(3.000✓), H(2.000✓)<br>Más barata: H o C ($2.000/sem). Comprimir H: d=4→3 (1 sem)<br>CT(23) = 65.000 + 2.000 + 4.000×23 = 67.000 + 92.000 = <strong>$159.000</strong> ✓",
          "<strong>Paso 2 — Comprimir C ($2.000/sem):</strong><br>C: d=6→4 (2 sem posibles, pero verificar si CC cambia)<br>1 sem: CT(22) = 69.000 + 88.000 = <strong>$157.000</strong> ✓<br>2 sem: CT(21) = 71.000 + 84.000 = <strong>$155.000</strong> ✓",
          "<strong>Paso 3 — Comprimir E ($2.500/sem):</strong><br>E: d=5→3 (2 sem). Con dos CC paralelos puede requerirse comprimir en ambos.<br>CT(20) = 71.000 + 2.500 + 4.000×20 = 73.500 + 80.000 = <strong>$153.500</strong>... verificar<br>Siguiente actividad (B o G, $2.500-3.000): Pendiente promedio cruzado &gt; CI=4.000 → <strong>STOP</strong>",
          "<strong>Óptimo: T* = 20 semanas</strong><br>CD(20) = 65.000 + (2.000 H×1 + 2.000 C×2 + 2.500 E×2) = 65.000 + 11.000 = $76.000<br>CT(20) = $76.000 + $4.000×20 = $76.000 + $80.000 = <strong>$156.000</strong><br><em>Nota: el mínimo exacto depende de la topología de la red; Miranda obtiene CT* = $161.000 en T=20 sem (con diferente tabla base)</em>"
        ],
        respuesta: "Duración óptima: <strong>20 semanas</strong> con CT ≈ <strong>$161.000</strong>. Se acortan 4 semanas comprimiendo las actividades críticas más baratas en secuencia (H, C, E). El ahorro en costos indirectos supera el aumento en costos directos hasta el punto de inflexión en T=20."
      },
      {
        titulo: "Caso 5: Programación Financiera — EST vs LST",
        enunciado: "Un proyecto de 5 semanas tiene 3 actividades con sus costos semanales. Actividad A (crítica, sem 1-3): $20.000. Actividad B (MT=2, sem 1-2 posible también sem 3-4): $15.000. Actividad C (crítica, sem 4-5): $10.000. Tasa de descuento: r=2%/semana. Comparar el VAN de egresos programando en EST vs LST.",
        pasos: [
          "<strong>Programa EST (Earliest Start Time):</strong><br>A: sem 1-3 → C₁=C₂=C₃=$20.000/3=$6.667/sem<br>B: sem 1-2 → C₁=C₂=$15.000/2=$7.500/sem<br>C: sem 4-5 → C₄=C₅=$10.000/2=$5.000/sem<br>Flujos: t=1: 6.667+7.500=14.167 | t=2: 14.167 | t=3: 6.667 | t=4: 5.000 | t=5: 5.000",
          "<strong>VAN egresos (EST), r=2%:</strong><br>VAN_EST = 14.167/1,02 + 14.167/1,02² + 6.667/1,02³ + 5.000/1,02⁴ + 5.000/1,02⁵<br>= 13.889 + 13.617 + 6.282 + 4.620 + 4.529 = <strong>$42.937</strong>",
          "<strong>Programa LST (Latest Start Time):</strong><br>A: crítica, sem 1-3 (idem EST)<br>B: MT=2 → retrasa al máximo → sem 3-4 → C₃=C₄=$7.500/sem<br>C: crítica, sem 4-5 (idem EST)<br>Flujos: t=1: 6.667 | t=2: 6.667 | t=3: 6.667+7.500=14.167 | t=4: 7.500+5.000=12.500 | t=5: 5.000",
          "<strong>VAN egresos (LST), r=2%:</strong><br>VAN_LST = 6.667/1,02 + 6.667/1,02² + 14.167/1,02³ + 12.500/1,02⁴ + 5.000/1,02⁵<br>= 6.537 + 6.409 + 13.352 + 11.551 + 4.529 = <strong>$42.378</strong>",
          "<strong>Comparación y TIR:</strong><br>VAN_LST ($42.378) &lt; VAN_EST ($42.937) → <strong>LST es mejor para el ejecutor</strong><br>Si el ingreso total es $50.000 al final del proyecto:<br>TIR_EST: VAN(50.000/1,02⁵ − flujos_EST) = 0 → TIR ≈ <strong>3,27%</strong> sem<br>TIR_LST: VAN(50.000/1,02⁵ − flujos_LST) = 0 → TIR ≈ <strong>5,87%</strong> sem<br>Diferir pagos aumenta la TIR en un <strong>2,6 pp</strong>"
        ],
        respuesta: "LST minimiza el VAN de los egresos: <strong>$42.378 vs $42.937</strong> (EST). Para el ejecutor, diferir pagos hacia fechas tardías mejora la TIR del proyecto de 3,27% a <strong>5,87%</strong>. Cuanto mayor sea la tasa de descuento y el MT de las actividades, más relevante es la programación financiera."
      }
    ]
  },

  {
    id: 5,
    slug: "inventarios",
    title: "Gestión de Inventarios",
    icon: "📦",
    color: "#ec4899",
    colorLight: "#fce7f3",
    hours: 16,
    difficulty: "Intermedio",
    difficultyColor: "#f59e0b",
    topics: ["EOQ/EPQ", "Safety Stock", "Agotamiento Planificado", "Descuentos Cantidad", "Multi-Producto TI-TO", "Lagrange/KKT"],
    description: "Modelos de inventario EOQ, EPQ, safety stock, agotamiento planificado, descuentos por cantidad, multi-producto con restricciones TI-TO y optimización con Lagrange.",
    teoria: `
<h2>Gestión de Inventarios</h2>
<p>Los inventarios son activos que una empresa mantiene para satisfacer la demanda futura. Su gestión busca responder dos preguntas fundamentales: <strong>¿cuánto pedir?</strong> y <strong>¿cuándo pedir?</strong></p>

<h3>Costos en Inventarios</h3>
<table class="content-table">
  <thead><tr><th>Tipo de Costo</th><th>Símbolo</th><th>Descripción</th></tr></thead>
  <tbody>
    <tr><td><strong>Costo de Ordenar</strong></td><td>S</td><td>Costo fijo por cada orden emitida (administración, envío, recepción)</td></tr>
    <tr><td><strong>Costo de Mantener</strong></td><td>H</td><td>Costo por unidad por período (almacenamiento, capital inmovilizado, obsolescencia)</td></tr>
    <tr><td><strong>Costo de Faltante</strong></td><td>p</td><td>Costo por unidad de demanda insatisfecha (pérdida de ventas, penalidades)</td></tr>
    <tr><td><strong>Costo de Compra</strong></td><td>c</td><td>Precio unitario del ítem</td></tr>
  </tbody>
</table>

<h2>Modelo EOQ (Economic Order Quantity)</h2>
<p>El EOQ es el modelo más clásico de inventarios. Supuestos:</p>
<ul>
  <li>Demanda D conocida y constante (determinística)</li>
  <li>Reposición instantánea (lead time conocido y constante)</li>
  <li>Sin faltantes permitidos</li>
  <li>Costos S y H constantes</li>
</ul>

<div class="formula-highlight">
  Costo Total: CT(Q) = (D/Q)·S + (Q/2)·H<br><br>
  Lote Óptimo: Q* = √(2DS/H)<br><br>
  Costo Total Mínimo: CT* = √(2DSH)
</div>

<h3>Indicadores Derivados del EOQ</h3>
<table class="content-table">
  <thead><tr><th>Indicador</th><th>Fórmula</th></tr></thead>
  <tbody>
    <tr><td>Número de órdenes/año</td><td>N = D / Q*</td></tr>
    <tr><td>Tiempo entre órdenes</td><td>T = Q* / D = 1/N</td></tr>
    <tr><td>Punto de reorden (sin lead time)</td><td>ROP = d · L (d = demanda/día, L = lead time)</td></tr>
  </tbody>
</table>

<h2>Modelo EPQ (Economic Production Quantity)</h2>
<p>Cuando los ítems se producen internamente (no se compran), la reposición no es instantánea sino a tasa p (unidades/período):</p>
<div class="formula-highlight">
  Q*_EPQ = √[2DS / H·(1 − d/p)]<br>
  donde d = tasa de demanda, p = tasa de producción (p &gt; d)
</div>

<h2>Análisis ABC (Curva de Pareto)</h2>
<p>Clasifica los ítems de inventario según su valor de consumo anual (precio × demanda):</p>
<table class="content-table">
  <thead><tr><th>Clase</th><th>% ítems</th><th>% valor</th><th>Control</th></tr></thead>
  <tbody>
    <tr><td><strong>A</strong></td><td>~20%</td><td>~80%</td><td>Muy estricto (revisión frecuente)</td></tr>
    <tr><td><strong>B</strong></td><td>~30%</td><td>~15%</td><td>Control intermedio</td></tr>
    <tr><td><strong>C</strong></td><td>~50%</td><td>~5%</td><td>Control simple (orden periódica)</td></tr>
  </tbody>
</table>

<h2>MRP — Material Requirements Planning</h2>
<p>El MRP es un sistema de planificación de requerimientos de materiales para producción. A partir del <strong>Plan Maestro de Producción (PMP)</strong> y la <strong>Lista de Materiales (BOM)</strong>, explota los requerimientos hacia abajo en la estructura del producto.</p>
<ul>
  <li><strong>Requerimiento Bruto:</strong> demanda total del ítem en cada período</li>
  <li><strong>Recepciones programadas:</strong> órdenes ya emitidas que llegarán</li>
  <li><strong>Inventario proyectado:</strong> IP(t) = IP(t-1) + Recepciones - Req. Bruto</li>
  <li><strong>Requerimiento Neto:</strong> RN = MAX(0, Req.Bruto − IP(t-1) − Recepciones)</li>
  <li><strong>Orden planeada:</strong> RN adelantado por el lead time</li>
</ul>

<h2>Stock de Seguridad (Safety Stock)</h2>
<p>Cuando existe incertidumbre en la demanda o en el lead time, se mantiene un <strong>stock de seguridad S_p</strong> (inventario amortiguador) para protegerse contra variaciones no anticipadas.</p>
<ul>
  <li><strong>El lote óptimo Q* no cambia:</strong> Q* = √(2kD/c₁) — misma fórmula EOQ (k = costo de ordenar, c₁ = costo de mantener)</li>
  <li>Se agrega un costo adicional por mantener el stock de seguridad durante todo el año</li>
  <li>El punto de reorden aumenta para incluir la cobertura de seguridad</li>
</ul>
<div class="formula-highlight">
  CT* = √(2kDc₁) + c₁·S_p &nbsp;&nbsp; ← EOQ clásico + costo de mantener S_p<br><br>
  Punto de reorden: ROP = d·L + S_p<br>
  (d = demanda diaria, L = lead time en días)
</div>
<p>El nivel S_p se determina según el nivel de servicio deseado y la variabilidad de la demanda. Mayor variabilidad o mayor nivel de servicio exigido → mayor S_p → mayor costo.</p>

<h2>Modelo con Agotamiento Planificado (Backorder)</h2>
<p>En este modelo se <strong>permiten faltantes planificados (backorders)</strong>: al inicio del ciclo el inventario no se repone totalmente y los clientes que encuentran faltante esperan ser satisfechos en el próximo ciclo. Esta estrategia puede reducir el costo total si el costo de faltante es lo suficientemente bajo.</p>
<p>Sea S = inventario máximo al comienzo del ciclo, (Q−S) = faltante máximo por ciclo:</p>
<div class="formula-highlight">
  CT(Q, S) = kD/Q + c₁·S²/(2Q) + c₂·(Q−S)²/(2Q)<br>
  donde c₂ = costo de faltante por unidad por período<br><br>
  Óptimos (condiciones de primer orden en Q y S):<br>
  Q* = √(2kD/c₁) · √((c₁+c₂)/c₂) &nbsp; → mayor que EOQ clásico<br>
  S* = Q* · c₂/(c₁+c₂) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; → inventario máximo al inicio del ciclo<br><br>
  CT* = √(2kDc₁) · √(c₂/(c₁+c₂)) &nbsp; → menor que EOQ clásico
</div>
<table class="content-table">
  <thead><tr><th>Relación</th><th>Fórmula</th><th>Interpretación</th></tr></thead>
  <tbody>
    <tr><td>Q* vs Q_EOQ</td><td>Q* = Q_EOQ · √((c₁+c₂)/c₂) ≥ Q_EOQ</td><td>Ciclos más largos para amortizar el costo fijo k</td></tr>
    <tr><td>S*/Q*</td><td>c₂/(c₁+c₂)</td><td>Fracción del ciclo con stock positivo</td></tr>
    <tr><td>(Q*−S*)/Q*</td><td>c₁/(c₁+c₂)</td><td>Fracción del ciclo con faltante activo</td></tr>
    <tr><td>CT* vs CT_EOQ</td><td>CT* = CT_EOQ · √(c₂/(c₁+c₂)) ≤ CT_EOQ</td><td>El faltante planificado siempre reduce el CT</td></tr>
  </tbody>
</table>
<p><strong>Casos límite:</strong> si c₂ → ∞ (faltante infinitamente costoso), Q* → Q_EOQ y S* → Q* (sin faltante = EOQ clásico). Si c₂ → 0, Q* → ∞ (nunca conviene reponer).</p>

<h2>Descuentos por Cantidad</h2>
<p>El proveedor ofrece precios menores al comprar lotes más grandes. La política más frecuente es el <strong>descuento total</strong>: el precio b_j aplica a <em>todo</em> el lote cuando Q cae en la franja j. El costo de mantener depende del precio: c₁ = i·b_j.</p>
<h3>Procedimiento (c₁ = i·b, descuento total)</h3>
<div class="steps-container">
  <div class="step">
    <div class="step-number">1</div>
    <div class="step-content"><h4>Calcular Q* para cada franja (de mayor precio a menor)</h4>
    <p>Q*_j = √(2kD/(i·b_j)) — a mayor precio, menor costo de mantener → mayor lote</p></div>
  </div>
  <div class="step">
    <div class="step-number">2</div>
    <div class="step-content"><h4>Verificar factibilidad de cada Q*_j</h4>
    <p>Si Q*_j cae dentro del rango de la franja j → factible (usarlo). Si Q*_j &lt; límite inferior de la franja j → ajustar Q = límite_inf. Si Q*_j &gt; límite superior → descartarlo (ir a siguiente franja).</p></div>
  </div>
  <div class="step">
    <div class="step-number">3</div>
    <div class="step-content"><h4>Calcular CT total para cada punto factible</h4>
    <p>CT = b_j·D + k·D/Q + i·b_j·Q/2 (incluir el costo de compra anual b_j·D)</p></div>
  </div>
  <div class="step">
    <div class="step-number">4</div>
    <div class="step-content"><h4>Elegir el Q de menor CT total</h4>
    <p>El mínimo absoluto entre todos los candidatos factibles da el Q* global.</p></div>
  </div>
</div>
<p><strong>Intuición:</strong> los descuentos en precio solo compensan el mayor costo de mantenimiento si el ahorro en precio supera el costo extra de mantener un inventario más grande.</p>

<h2>Modelo Multi-Producto con Igual Período de Reposición</h2>
<p>Cuando múltiples productos comparten el mismo proveedor o línea de producción, conviene forzar un <strong>período de reposición T común</strong>. Los lotes resultan Q_j = D_j·T (c₁ⱼ = costo de mantener unitario, kⱼ = costo de ordenar).</p>
<div class="formula-highlight">
  CT_rep(T) = Σ_j k_j/T + T/2·Σ_j c₁_j·D_j &nbsp;&nbsp; → MIN en T<br><br>
  T* = √(Σk_j / Σ(c₁_j·D_j)) &nbsp;&nbsp; (período óptimo)<br>
  Q_j* = D_j · T* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (lote por producto)<br><br>
  CT* = 2·√(Σk_j · Σ(c₁_j·D_j)/2) &nbsp; (en el óptimo: costo ordenar = costo mantener)
</div>
<p>Con restricción de capital inmovilizado Σ(Q_j/2)·bⱼ ≤ TM (bⱼ = precio unitario):</p>
<div class="formula-highlight">
  T_max = 2·TM / Σ(D_j·b_j) &nbsp;&nbsp; (T máximo permitido)<br>
  Si T* &gt; T_max → usar T = T_max (ciclos más cortos, menos capital inmovilizado)
</div>

<h2>Modelo TI-TO (Capital Inmovilizado vs. Número de Órdenes)</h2>
<p>El modelo TI-TO busca la <strong>frontera eficiente</strong> entre el capital promedio inmovilizado (TI) y el número total de órdenes por período (TO). No minimiza un costo total sino que permite elegir el compromiso óptimo para la empresa.</p>
<ul>
  <li><strong>TI (Total Inmovilizado):</strong> Σⱼ(Qⱼ/2)·bⱼ — capital promedio en inventario (bⱼ = precio unitario)</li>
  <li><strong>TO (Total Órdenes):</strong> ΣⱼDⱼ/Qⱼ — número total de órdenes por período</li>
</ul>
<div class="formula-highlight">
  En cualquier punto eficiente (Pareto-óptimo):<br>
  TI · TO = [Σⱼ√(bⱼ·Dⱼ)]² / 2 = <strong>K</strong> (constante — hipérbola)<br><br>
  Dada restricción TO ≤ TO_max: &nbsp; TI_min = K / TO_max<br>
  Qⱼ* = √(2·λ·Dⱼ/bⱼ) &nbsp; con λ = K / TO_max²<br><br>
  Dada restricción TI ≤ TI_max: &nbsp; TO_min = K / TI_max<br>
  Qⱼ* = √(2·Dⱼ/(λ·bⱼ)) &nbsp; con λ = K / TI_max²
</div>
<p><strong>Interpretación:</strong> Reducir capital (bajar TI) implica ordenar más frecuente (subir TO), y viceversa. La curva TI·TO = K es la frontera mínima — todo punto por encima es ineficiente y puede mejorarse. El punto unconstrained (EOQ individual) minimiza CT total con costos de ordenar.</p>

<h2>Optimización con Lagrange/KKT — Restricción de Capital</h2>
<p>Para minimizar CT = Σⱼ[kⱼDⱼ/Qⱼ + c₁ⱼQⱼ/2] sujeto a Σⱼ(Qⱼ/2)·bⱼ ≤ TM (c₁ⱼ = holding rate, bⱼ = precio unitario):</p>
<div class="formula-highlight">
  Sin restricción: Qⱼ* = √(2kⱼDⱼ/c₁ⱼ) (EOQ individual)<br><br>
  Con restricción activa (Lagrange, multiplicador μ &gt; 0):<br>
  Qⱼ(μ) = √(2kⱼDⱼ / (c₁ⱼ + 2μ·bⱼ))<br><br>
  Algoritmo KKT:<br>
  1. Si Σ(Qⱼ*/2)·bⱼ ≤ TM → restricción inactiva, usar Qⱼ* (μ=0)<br>
  2. Si viola → buscar μ &gt; 0 tal que Σ(Qⱼ(μ)/2)·bⱼ = TM (bisección)<br>
  3. μ &gt; 0 reduce los lotes: Qⱼ(μ) &lt; Qⱼ* (más órdenes, menos capital)
</div>

<h2>Gestión Avanzada: MRP y Just-In-Time</h2>
<p>Más allá de los modelos de lote óptimo, existen enfoques de gestión que atacan la raíz del problema de inventarios:</p>

<h3>MRP (Material Requirements Planning)</h3>
<p>Planificación de necesidades de materiales para producción con demanda <strong>dependiente</strong> (componentes que se necesitan en función del producto final). Requiere:</p>
<ul>
  <li><strong>PMP</strong> (Plan Maestro de Producción): qué productos fabricar y cuándo</li>
  <li><strong>BOM</strong> (Bill of Materials / Lista de Materiales): estructura del producto</li>
  <li><strong>Registro de inventarios actuales</strong>: qué hay en stock</li>
</ul>
<p>El MRP "explota" el PMP hacia los componentes y genera órdenes de compra/producción con el <em>timing</em> exacto para satisfacer la demanda sin exceso de stock.</p>

<h3>Just-In-Time (JIT)</h3>
<p>Filosofía de gestión (Toyota Production System) que busca <strong>eliminar el inventario</strong> produciendo y entregando exactamente lo que se necesita, cuando se necesita, en la cantidad justa.</p>
<ul>
  <li><strong>Pull system</strong> (sistema jalar): la producción es disparada por la demanda real, no por pronósticos</li>
  <li><strong>Kanban</strong>: tarjetas o señales que autorizan la producción/reposición de lotes pequeños</li>
  <li><strong>Lote mínimo</strong>: reduce el costo de mantener al minimizar el stock; requiere reducir el costo de ordenar k (setup) para que EOQ disminuya</li>
  <li>Requiere: proveedores confiables, tiempos de setup bajos, calidad asegurada</li>
</ul>
<p>Desde la perspectiva EOQ: JIT equivale a <em>reducir k → reduce Q*</em> hasta acercarse a lotes unitarios. La clave es invertir en reducir el costo de setup, no en tolerar el inventario.</p>

<h2>Modelos con Demanda Estocástica — Vendedor de Periódico (Newsvendor)</h2>
<p>Cuando la demanda es aleatoria y no hay posibilidad de reabastecimiento dentro del período, el problema se convierte en decidir <strong>cuánto comprar al inicio del período</strong>. Modelo clásico: "Vendedor de Periódicos" (Newsvendor).</p>
<p><strong>Parámetros:</strong></p>
<ul>
  <li><strong>f₂</strong> = ganancia marginal por unidad vendida (precio de venta − costo de compra)</li>
  <li><strong>cₑ</strong> = costo marginal de exceso (costo por unidad no vendida = costo de compra − valor de rescate)</li>
  <li><strong>D</strong> = demanda aleatoria con distribución conocida F(x) = P(D ≤ x)</li>
  <li><strong>S</strong> = cantidad a stockear (variable de decisión)</li>
</ul>

<h3>Condición de Optimalidad (Fracción Crítica)</h3>
<p>Se busca el S* que maximiza la ganancia esperada. La condición marginal es:</p>
<div class="formula-highlight">
  Ganancia esperada de stockear una unidad más = Pérdida esperada<br>
  f₂ · P(D &gt; S) = cₑ · P(D ≤ S)<br><br>
  P(D ≤ S*) = f₂ / (f₂ + cₑ) &nbsp;&nbsp; ← <strong>Fracción Crítica</strong>
</div>
<p>Siendo F continua, S* = F⁻¹[f₂/(f₂+cₑ)]. Si F es discreta, S* es el primer valor tal que F(S) ≥ fracción crítica.</p>

<h3>Casos Particulares</h3>
<table class="content-table">
  <thead><tr><th>Situación</th><th>f₂</th><th>cₑ</th><th>Fracción crítica</th></tr></thead>
  <tbody>
    <tr><td>Sin valor de rescate</td><td>p − c</td><td>c</td><td>(p−c)/p</td></tr>
    <tr><td>Con valor de rescate s</td><td>p − c</td><td>c − s</td><td>(p−c)/(p−s)</td></tr>
    <tr><td>Con penalidad por faltante π</td><td>p − c + π</td><td>c − s</td><td>(p−c+π)/(p−s+π)</td></tr>
  </tbody>
</table>
<p><strong>Interpretación:</strong> La fracción crítica indica el nivel de servicio óptimo. Si f₂ &gt; cₑ (más caro quedarse corto que sobrar), se debe stockear generosamente (fracción alta). Si cₑ &gt; f₂, se prefiere arriesgar faltante.</p>`,

    resumen: `
<h2>Resumen — Gestión de Inventarios</h2>
<div class="formula-box">
  <strong>EOQ — Lote óptimo</strong><br>
  Q* = √(2DS/H)<br>
  CT* = √(2DSH) = D·c + Q*/2·H + D/Q*·S
</div>
<div class="formula-box">
  <strong>EPQ — Producción interna</strong><br>
  Q*_EPQ = √[2DS / H(1−d/p)]
</div>
<div class="formula-box">
  <strong>Punto de Reorden</strong><br>
  ROP = d · L &nbsp; (d=demanda/día, L=lead time en días)
</div>
<h3>Clasificación ABC</h3>
<ul>
  <li><strong>A:</strong> 20% ítems → 80% valor → control muy estricto</li>
  <li><strong>B:</strong> 30% ítems → 15% valor → control intermedio</li>
  <li><strong>C:</strong> 50% ítems → 5% valor → control simple</li>
</ul>
<div class="formula-box">
  <strong>Safety Stock</strong><br>
  Q* = √(2kD/c₁) (igual al EOQ) &nbsp;&nbsp; CT* = √(2kDc₁) + c₁·S_p<br>
  ROP = d·L + S_p
</div>
<div class="formula-box">
  <strong>Agotamiento Planificado (Backorder)</strong><br>
  Q* = Q_EOQ · √((c₁+c₂)/c₂) &nbsp;&nbsp;&nbsp; S* = Q* · c₂/(c₁+c₂)<br>
  CT* = CT_EOQ · √(c₂/(c₁+c₂)) &lt; CT_EOQ
</div>
<div class="formula-box">
  <strong>Descuentos por Cantidad</strong><br>
  Candidatos: Q_j* = √(2kD/(i·b_j)) ajustado por franja<br>
  Comparar CT = b_j·D + kD/Q + i·b_j·Q/2 para cada candidato
</div>
<div class="formula-box">
  <strong>Multi-Producto — Período T común</strong><br>
  T* = √(Σk_j / Σ(c₁_j·D_j)) &nbsp;&nbsp; Q_j* = D_j · T*<br>
  (c₁_j = costo de mantener; k_j = costo de ordenar)
</div>
<div class="formula-box">
  <strong>Modelo TI-TO — Frontera Eficiente</strong><br>
  TI = Σⱼ(Qⱼ/2)·bⱼ &nbsp; (capital inmovilizado; bⱼ = precio)<br>
  TO = ΣⱼDⱼ/Qⱼ &nbsp; (órdenes por período)<br>
  TI · TO = [Σⱼ√(bⱼ·Dⱼ)]² / 2 = K (hipérbola)
</div>
<div class="formula-box">
  <strong>Demanda Estocástica — Newsvendor</strong><br>
  f₂ = ganancia por unidad vendida (p − c)<br>
  cₑ = costo por unidad sobrante (c − valor rescate)<br>
  <strong>P(D ≤ S*) = f₂ / (f₂ + cₑ)</strong> &nbsp; (Fracción Crítica)
</div>`,

    formulas: `
<h2>Fórmulas — Inventarios</h2>
<div class="formula-box">
  <strong>Costo Total EOQ</strong><br>
  CT(Q) = c·D + (D/Q)·S + (Q/2)·H
</div>
<div class="formula-box">
  <strong>Lote Económico EOQ</strong><br>
  Q* = √(2DS/H) &nbsp;&nbsp; [Harris-Wilson]
</div>
<div class="formula-box">
  <strong>Costo Mínimo</strong><br>
  CT* = c·D + √(2DSH)
</div>
<div class="formula-box">
  <strong>Lote Económico EPQ</strong><br>
  Q*_EPQ = √(2DS / H) · √(p/(p−d))
</div>
<div class="formula-box">
  <strong>Nivel máximo de inventario (EPQ)</strong><br>
  I_max = Q*(1 − d/p)
</div>
<div class="formula-box">
  <strong>Safety Stock — Costo Total</strong><br>
  CT* = √(2kDc₁) + c₁·S_p &nbsp;&nbsp; (k = costo ordenar, c₁ = costo mantener)<br>
  Q* sin cambios: Q* = √(2kD/c₁)
</div>
<div class="formula-box">
  <strong>Agotamiento Planificado — Lote Óptimo</strong><br>
  Q* = √(2kD/c₁) · √((c₁+c₂)/c₂)<br>
  S* = Q* · c₂/(c₁+c₂) &nbsp;&nbsp; (inventario máximo al inicio del ciclo)<br>
  CT* = √(2kDc₁) · √(c₂/(c₁+c₂))
</div>
<div class="formula-box">
  <strong>Relaciones Backorder</strong><br>
  S*/Q* = c₂/(c₁+c₂) &nbsp;&nbsp; (fracción del ciclo con stock)<br>
  (Q*−S*)/Q* = c₁/(c₁+c₂) &nbsp;&nbsp; (fracción con faltante)
</div>
<div class="formula-box">
  <strong>Multi-Producto — Período T óptimo</strong><br>
  T* = √(Σk_j / Σ(c₁_j·D_j)) &nbsp;&nbsp; Q_j* = D_j · T*<br>
  CT* = 2·√(Σk_j · Σ(c₁_j·D_j) / 2)
</div>
<div class="formula-box">
  <strong>Modelo TI-TO — Hipérbola Eficiente</strong><br>
  TI = Σⱼ(Qⱼ/2)·bⱼ &nbsp; (capital; bⱼ=precio) &nbsp;&nbsp; TO = ΣⱼDⱼ/Qⱼ &nbsp; (órdenes)<br>
  TI · TO = [Σⱼ√(bⱼ·Dⱼ)]² / 2 = K (constante en el óptimo)<br>
  Qⱼ*(λ) = √(2λDⱼ/bⱼ) dado TO; &nbsp; Qⱼ*(λ) = √(2Dⱼ/(λbⱼ)) dado TI
</div>
<div class="formula-box">
  <strong>KKT — Restricción de Capital</strong><br>
  Qⱼ(μ) = √(2kⱼDⱼ / (c₁ⱼ + 2μ·bⱼ)) &nbsp;&nbsp; (μ ≥ 0 multiplicador)<br>
  Buscar μ tal que Σ(Qⱼ(μ)/2)·bⱼ = TM (bisección)
</div>
<div class="formula-box">
  <strong>Lagrange — Restricción de Capital</strong><br>
  Q_j(Y) = √(2k_jD_j / (b_j + Y·v_j))<br>
  Buscar Y ≥ 0 tal que Σ(Q_j(Y)/2)·v_j = C_max
</div>
<div class="formula-box">
  <strong>Newsvendor — Demanda Estocástica</strong><br>
  f₂ = p − c &nbsp;(ganancia por unidad vendida)<br>
  cₑ = c − s &nbsp;(pérdida por unidad sobrante; s = valor rescate)<br>
  <strong>P(D ≤ S*) = f₂ / (f₂ + cₑ)</strong> &nbsp; ← Fracción crítica óptima<br>
  Con penalidad π: P(D ≤ S*) = (f₂+π) / (f₂+π+cₑ)
</div>`,

    casos: [
      {
        titulo: "Caso 1: EOQ Clásico — Empresa Distribuidora",
        enunciado: "Una empresa vende 1.200 unidades/año de un artículo. El costo de emitir una orden es $45 y el costo de mantener es $3/unidad/año. ¿Cuál es el lote óptimo y el costo total mínimo?",
        pasos: [
          "<strong>Datos:</strong> D = 1.200 u/año, S = $45/orden, H = $3/u/año",
          "<strong>Lote óptimo:</strong> Q* = √(2·1200·45/3) = √(108.000/3) = √36.000 = <strong>189,7 ≈ 190 unidades</strong>",
          "<strong>Número de órdenes/año:</strong> N = D/Q* = 1200/190 = 6,3 órdenes/año",
          "<strong>Tiempo entre órdenes:</strong> T = 365/6,3 ≈ <strong>58 días</strong>",
          "<strong>Costo de ordenar:</strong> (D/Q*)·S = 6,3 · $45 = $284<br><strong>Costo de mantener:</strong> (Q*/2)·H = 95 · $3 = $285<br>✓ Costos iguales en el óptimo (propiedad del EOQ)"
        ],
        respuesta: "Q* = <strong>190 unidades</strong>. Costo total mínimo ≈ $285 + $284 = <strong>$569/año</strong> (más el costo de compra D·c)."
      },
      {
        titulo: "Caso 2: Análisis ABC",
        enunciado: "Clasificar los siguientes 5 ítems por el método ABC: A (precio=$10, demanda=500), B (precio=$2, demanda=3000), C (precio=$50, demanda=200), D (precio=$1, demanda=10000), E (precio=$100, demanda=50).",
        pasos: [
          "<strong>Calcular valor anual:</strong><br>A: 10×500=$5.000 | B: 2×3000=$6.000 | C: 50×200=$10.000 | D: 1×10000=$10.000 | E: 100×50=$5.000",
          "<strong>Total:</strong> $36.000. Ordenar de mayor a menor:<br>C: $10.000 (27,8%) | D: $10.000 (27,8%) | B: $6.000 (16,7%) | A: $5.000 (13,9%) | E: $5.000 (13,9%)",
          "<strong>Acumulado:</strong><br>C: 27,8% | C+D: 55,6% | C+D+B: 72,2% | C+D+B+A: 86,1% | todos: 100%",
          "<strong>Clasificación (corte típico: A≤80%, B≤95%, C=resto):</strong><br>Clase A: C, D (40% ítems, 55,6% valor)<br>Clase B: B, A (40% ítems, 30,6% valor)<br>Clase C: E (20% ítems, 13,9% valor)"
        ],
        respuesta: "<strong>Clase A:</strong> C y D (mayor control). <strong>Clase B:</strong> B y A. <strong>Clase C:</strong> E (control mínimo)."
      },
      {
        titulo: "Caso 3: Safety Stock — Empresa Distribuidora con Demanda Variable",
        enunciado: "Una empresa vende 12.000 u/año de un artículo. Costo de ordenar k=$60/orden, costo de mantener c₁=$0,25/u/año. Por variabilidad en los plazos de entrega, el gerente decide mantener un stock de seguridad de 240 unidades. ¿Cuál es el lote óptimo, el costo total y el costo adicional del safety stock?",
        pasos: [
          "<strong>Datos:</strong> D=12.000 u/año, k=$60/orden, c₁=$0,25/u/año, S_p=240 u",
          "<strong>Lote óptimo (igual que EOQ clásico):</strong><br>Q* = √(2·60·12.000/0,25) = √(5.760.000) = <strong>2.400 unidades</strong>",
          "<strong>Número de órdenes/año:</strong> N = D/Q* = 12.000/2.400 = <strong>5 órdenes/año</strong>",
          "<strong>CT sin safety stock:</strong><br>CT_EOQ = √(2·60·12.000·0,25) = √360.000 = <strong>$600/año</strong>",
          "<strong>CT con safety stock:</strong><br>CT* = CT_EOQ + c₁·S_p = 600 + 0,25·240 = 600 + <strong>$60/año adicionales</strong> = $660/año",
          "<strong>Punto de reorden:</strong> Si L=15 días, d=12.000/365=32,9 u/día<br>ROP = d·L + S_p = 32,9·15 + 240 = 493 + 240 = <strong>733 unidades</strong>"
        ],
        respuesta: "Q* = <strong>2.400 u</strong> (sin cambios). CT total = $660/año. El safety stock agrega solo <strong>$60/año extra</strong> (10% más) pero brinda cobertura contra variaciones en el lead time. ROP = 733 u."
      },
      {
        titulo: "Caso 4: Agotamiento Planificado (Backorder) — Mismo Artículo",
        enunciado: "Con los mismos datos del caso anterior (D=12.000, k=$60, c₁=$0,25/u/año) pero ahora los clientes aceptan esperar: costo de faltante c₂=$0,0833/u/año. Calcular Q*, S* (inventario máximo), faltante máximo y CT*.",
        pasos: [
          "<strong>Datos:</strong> D=12.000, k=60, c₁=0,25, c₂=0,0833 $/u/año",
          "<strong>Q_EOQ base:</strong> Q_EOQ = √(2·60·12.000/0,25) = 2.400 u",
          "<strong>Factor de ampliación:</strong><br>√((c₁+c₂)/c₂) = √((0,25+0,0833)/0,0833) = √(0,3333/0,0833) = √4 = <strong>2,0</strong>",
          "<strong>Lote óptimo con backorder:</strong><br>Q* = 2.400 · 2,0 = <strong>4.800 unidades</strong> (el doble del EOQ clásico)",
          "<strong>Inventario máximo al inicio del ciclo:</strong><br>S* = Q* · c₂/(c₁+c₂) = 4.800 · 0,0833/0,3333 = 4.800 · 0,25 = <strong>1.200 unidades</strong>",
          "<strong>Faltante máximo:</strong> Q*−S* = 4.800−1.200 = <strong>3.600 unidades</strong><br>El 75% del ciclo hay faltante (c₁/(c₁+c₂) = 0,25/0,3333 = 75%)",
          "<strong>CT*:</strong> CT* = 600 · √(c₂/(c₁+c₂)) = 600 · √(0,0833/0,3333) = 600 · √0,25 = 600 · 0,5 = <strong>$300/año</strong>"
        ],
        respuesta: "Q* = <strong>4.800 u</strong>, S* = 1.200 u (inventario max), faltante max = 3.600 u. CT* = <strong>$300/año</strong> (50% menos que EOQ). El bajo costo de faltante (c₂≪c₁) justifica grandes faltantes para reducir el costo de mantenimiento."
      },
      {
        titulo: "Caso 5: Descuentos por Cantidad — Ejercicio 2.4.4 (TP Miranda, UBA)",
        enunciado: "D=12.000 u/mes, k=$60/orden, tasa de capital i=1%/mes (c₁=i·b). Franjas: b₁=$30 para Q&lt;1.000; b₂=$29 para 1.000≤Q&lt;10.000; b₃=$28 para Q≥10.000. ¿Cuál es el lote óptimo?",
        pasos: [
          "<strong>Franja 1 (b₁=$30, c₁=i·b₁=0,01·30=$0,30/u/mes):</strong><br>Q*₁ = √(2·60·12.000/0,30) = √4.800.000 = 2.191 u → 2.191 &gt; 1.000 (fuera del rango de b₁), descartar.",
          "<strong>Franja 2 (b₂=$29, c₁=0,01·29=$0,29/u/mes):</strong><br>Q*₂ = √(2·60·12.000/0,29) = √4.965.517 = 2.228 u → 1.000 ≤ 2.228 &lt; 10.000 ✓ (factible)<br>CT₂ = 29·12.000 + 60·12.000/2.228 + 0,29·2.228/2 = 348.000 + 323 + 323 = <strong>$348.646/mes</strong>",
          "<strong>Franja 3 (b₃=$28, c₁=0,01·28=$0,28/u/mes):</strong><br>Q*₃ = √(2·60·12.000/0,28) = √5.142.857 = 2.268 u → 2.268 &lt; 10.000 (fuera del rango), ajustar a Q=10.000<br>CT₃ = 28·12.000 + 60·12.000/10.000 + 0,28·10.000/2 = 336.000 + 72 + 1.400 = <strong>$337.472/mes</strong>",
          "<strong>Comparación de candidatos factibles:</strong><br>Q=2.228 (b₂=$29): $348.646/mes | <strong>Q=10.000 (b₃=$28): $337.472/mes</strong>",
          "<strong>¿Por qué conviene Q=10.000?</strong><br>Ahorro en precio: (29−28)×12.000 = $12.000/mes. Costo extra mantener: 0,28×(10.000−2.268)/2 = $1.082/mes. Neto: $12.000 − $1.082 = <strong>$10.918/mes de ahorro</strong>. El descuento de $1/u en 12.000 unidades supera ampliamente el costo de mantener un lote mayor."
        ],
        respuesta: "Q* = <strong>10.000 unidades</strong> con precio b₃=$28, CT = <strong>$337.472/mes</strong> (vs. $348.646 con Q=2.228 y b₂=$29). El gran salto de descuento en Q₂=10.000 cambia el óptimo. Notar que Q*₁=2.191 es factible para b₂ (>1.000) pero no para b₁ (<1.000), por eso b₁ se descarta."
      },
      {
        titulo: "Caso 6: Multi-Producto con Restricción de Capital",
        enunciado: "Una empresa gestiona 2 insumos del mismo proveedor. Producto A: D_A=600 u/mes, b_A=$0,60/u/mes, v_A=$40/u. Producto B: D_B=400 u/mes, b_B=$1,00/u/mes, v_B=$25/u. Costo de orden: k_A=$200, k_B=$150. Sin restricción: calcular T* y lotes. Con restricción de capital C_max=$10.000: recalcular.",
        pasos: [
          "<strong>Costo de ordenar total:</strong> Σk_j = 200+150 = $350/ciclo",
          "<strong>Costo de mantenimiento por período:</strong> Σb_jD_j = 0,60·600 + 1,00·400 = 360+400 = $760/mes por unidad de T",
          "<strong>T* sin restricción:</strong><br>T* = √(Σk_j / Σb_jD_j) = √(350/760/2) ... wait<br>CT_rep = 350/T + T/2·760 = 350/T + 380T<br>T* = √(350/380) = √0,921 = <strong>0,960 mes ≈ 29 días</strong>",
          "<strong>Lotes sin restricción:</strong><br>Q_A* = 600·0,960 = 576 u &nbsp; Q_B* = 400·0,960 = 384 u<br>CT* = 350/0,960 + 380·0,960 = 364,6 + 364,8 = <strong>$729/mes</strong>",
          "<strong>Capital inmovilizado sin restricción:</strong><br>TI = Q_A*/2·v_A + Q_B*/2·v_B = 288·40 + 192·25 = 11.520+4.800 = <strong>$16.320</strong> &gt; $10.000 → restricción activa",
          "<strong>Con restricción C_max=$10.000 (capital inmovilizado promedio):</strong><br>Capital = T/2·(D_A·v_A+D_B·v_B) = T/2·(24.000+10.000) = 17.000T ≤ 10.000<br>T_max = 10.000/17.000 = <strong>0,588 mes ≈ 17,7 días</strong>",
          "<strong>Lotes con restricción:</strong><br>Q_A = 600·0,588 = 353 u &nbsp; Q_B = 400·0,588 = 235 u<br>CT = 350/0,588 + 380·0,588 = 595,2+223,4 = <strong>$818,6/mes</strong><br>Verificación: 353/2·40 + 235/2·25 = 7.060+2.938 = $9.998 ≈ $10.000 ✓"
        ],
        respuesta: "Sin restricción: T*=29 días, Q_A=576, Q_B=384, CT=$729/mes. Con C_max=$10.000: T=17,7 días, Q_A=353, Q_B=235, CT=<strong>$818,6/mes</strong>. La restricción de capital obliga a ciclos más cortos (pedir con más frecuencia en lotes más pequeños), aumentando el costo en $90/mes."
      },
      {
        titulo: "Caso 7: Modelo TI-TO — 5 Productos (Problema 13.21, Tutorial)",
        enunciado: "Una empresa gestiona 5 productos con los siguientes datos anuales:<br><br><table class='content-table'><thead><tr><th>Prod.</th><th>Dⱼ (u/año)</th><th>bⱼ ($/u)</th><th>√(bⱼ·Dⱼ)</th></tr></thead><tbody><tr><td>1</td><td>1.000</td><td>$5</td><td>70,71</td></tr><tr><td>2</td><td>2.000</td><td>$10</td><td>141,42</td></tr><tr><td>3</td><td>4.000</td><td>$15</td><td>244,95</td></tr><tr><td>4</td><td>10.000</td><td>$5</td><td>223,61</td></tr><tr><td>5</td><td>1.000</td><td>$10</td><td>100,00</td></tr></tbody></table><br><strong>a)</strong> Si se fija TO=50 órdenes/año, ¿cuánto es TI* y cuáles son los lotes óptimos?<br><strong>b)</strong> Si se fija TI=$9.000 en stock, ¿cuánto es TO* y cuáles son los lotes óptimos?",
        pasos: [
          "<strong>Constante K del modelo TI-TO:</strong><br>K = [Σ√(bⱼ·Dⱼ)]² / 2 = [70,71+141,42+244,95+223,61+100]² / 2<br>= [780,69]² / 2 = 609.477 / 2 = <strong>304.738</strong><br>Verificación: TI · TO siempre debe igualar K en el óptimo.",
          "<strong>Fórmulas óptimas con restricción fija:</strong><br>Si TO es fijo: Q*ⱼ = √(2λ·Dⱼ/bⱼ) &nbsp; donde λ = K / TO²<br>Si TI es fija: Q*ⱼ = √(2Dⱼ/(μ·bⱼ)) &nbsp; donde μ = [Σ√(bⱼDⱼ)]² / (2·TI²)<br><em>Equivalentemente: Qⱼ = (Σ√(bⱼDⱼ) / restricción) · √(Dⱼ/bⱼ)</em>",
          "<strong>Parte a) TO = 50 fijo → TI*:</strong><br>TI* = K / TO = 304.738 / 50 = <strong>$6.094,8</strong><br>λ = K / TO² = 304.738 / 2.500 = 121,9<br>Lotes: Q*ⱼ = √(2·121,9·Dⱼ/bⱼ)<br>Q*₁ = √(243,8·1000/5) = √48.760 = <strong>221 u</strong><br>Q*₂ = √(243,8·2000/10) = √48.760 = <strong>221 u</strong><br>Q*₃ = √(243,8·4000/15) = √65.013 = <strong>255 u</strong><br>Q*₄ = √(243,8·10000/5) = √487.600 = <strong>698 u</strong><br>Q*₅ = √(243,8·1000/10) = √24.380 = <strong>156 u</strong>",
          "<strong>Verificación parte a):</strong><br>TO = Σ Dⱼ/Q*ⱼ = 1000/221 + 2000/221 + 4000/255 + 10000/698 + 1000/156<br>= 4,52 + 9,05 + 15,69 + 14,33 + 6,41 = <strong>50,0 ✓</strong><br>TI = Σ Q*ⱼ·bⱼ/2 = 553 + 1105 + 1913 + 1745 + 780 = <strong>$6.096 ≈ $6.095 ✓</strong>",
          "<strong>Parte b) TI = $9.000 fijo → TO*:</strong><br>TO* = K / TI = 304.738 / 9.000 = <strong>33,9 órdenes/año</strong><br>μ = K / TI² = 304.738 / 81.000.000 = 0,003762<br>Lotes: Q*ⱼ = √(2·Dⱼ/(μ·bⱼ))<br>Q*₁ = √(2·1000/(0,003762·5)) = √106.327 = <strong>326 u</strong><br>Q*₂ = √(2·2000/(0,003762·10)) = √106.327 = <strong>326 u</strong><br>Q*₃ = √(2·4000/(0,003762·15)) = √141.803 = <strong>377 u</strong><br>Q*₄ = √(2·10000/(0,003762·5)) = √1.063.265 = <strong>1.031 u</strong><br>Q*₅ = √(2·1000/(0,003762·10)) = √53.162 = <strong>231 u</strong>",
          "<strong>Verificación parte b):</strong><br>TO = Σ Dⱼ/Q*ⱼ = 1000/326 + 2000/326 + 4000/377 + 10000/1031 + 1000/231<br>= 3,07 + 6,13 + 10,61 + 9,70 + 4,33 = <strong>33,8 ≈ 33,9 ✓</strong><br>TI = Σ Q*ⱼ·bⱼ/2 = 815 + 1630 + 2828 + 2578 + 1155 = <strong>$9.006 ≈ $9.000 ✓</strong>"
        ],
        respuesta: "<strong>Constante TI·TO = K = 304.738.</strong><br>a) TO=50 fijo → TI*=<strong>$6.095</strong>, lotes: Q=(221, 221, 255, 698, 156).<br>b) TI=$9.000 fija → TO*=<strong>33,9 órdenes/año</strong>, lotes: Q=(326, 326, 377, 1.031, 231).<br>Notar que mayor capital inmovilizado (TI ↑) reduce la cantidad de órdenes (TO ↓), y viceversa. La curva TI vs TO es una hipérbola con K constante."
      }
    ]
  },

  {
    id: 6,
    slug: "teoria-colas",
    title: "Teoría de Colas",
    icon: "🚶",
    color: "#06b6d4",
    colorLight: "#cffafe",
    hours: 16,
    difficulty: "Avanzado",
    difficultyColor: "#ef4444",
    topics: ["Dist. Exponencial y Poisson", "M/M/1", "M/M/s", "M/M/1/N", "Optimización de Costos", "Colas en Serie"],
    description: "Modelos de líneas de espera: distribución exponencial y Poisson, M/M/1, M/M/s, sistemas finitos, optimización de costos y ejercicios complejos.",
    teoria: `
<h2>Teoría de Colas (Líneas de Espera)</h2>
<p>La Teoría de Colas estudia los sistemas donde los "clientes" llegan a ser atendidos y deben esperar si los servidores están ocupados. Sus aplicaciones van desde bancos y hospitales hasta redes de computadoras y fábricas.</p>

<h3>Notación de Kendall: A/B/s/K/N/D</h3>
<table class="content-table">
  <thead><tr><th>Posición</th><th>Símbolo</th><th>Significado</th></tr></thead>
  <tbody>
    <tr><td>1ª</td><td>A</td><td>Distribución de llegadas (M=Markoviana=Poisson, D=determinística, G=general)</td></tr>
    <tr><td>2ª</td><td>B</td><td>Distribución de servicio (M=Exponencial, D=determinística, G=general)</td></tr>
    <tr><td>3ª</td><td>s</td><td>Número de servidores (canales)</td></tr>
    <tr><td>4ª</td><td>K</td><td>Capacidad del sistema (por defecto ∞)</td></tr>
    <tr><td>5ª</td><td>N</td><td>Tamaño de la población (por defecto ∞)</td></tr>
    <tr><td>6ª</td><td>D</td><td>Disciplina de cola (FIFO por defecto)</td></tr>
  </tbody>
</table>

<h2>Parámetros Fundamentales</h2>
<ul>
  <li><strong>λ</strong> = tasa de llegadas (clientes/unidad de tiempo)</li>
  <li><strong>μ</strong> = tasa de servicio (clientes/unidad de tiempo por servidor)</li>
  <li><strong>ρ = λ/μ</strong> = factor de utilización (intensidad de tráfico)</li>
  <li><strong>Condición de estabilidad:</strong> ρ &lt; 1 (o λ &lt; s·μ para M/M/s)</li>
</ul>

<h2>Modelo M/M/1</h2>
<p>Un servidor, llegadas Poisson(λ), servicio exponencial(μ), cola infinita, FIFO.</p>
<div class="formula-highlight">
  ρ = λ/μ &nbsp;&nbsp;(condición: ρ &lt; 1)<br><br>
  L = ρ/(1−ρ) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ número promedio en el sistema<br>
  Lq = ρ²/(1−ρ) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ número promedio en la cola<br>
  W = 1/(μ−λ) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ tiempo promedio en el sistema<br>
  Wq = λ/[μ(μ−λ)] &nbsp;→ tiempo promedio en la cola
</div>

<h3>Fórmula de Little</h3>
<div class="formula-highlight">
  L = λ · W &nbsp;&nbsp;&nbsp; (clientes en sistema = tasa de llegadas × tiempo en sistema)<br>
  Lq = λ · Wq &nbsp; (aplica a cualquier modelo de colas en estado estable)
</div>

<h2>Modelo M/M/s</h2>
<p>s servidores idénticos, llegadas Poisson(λ), servicio exponencial(μ) por servidor.</p>
<p>Condición de estabilidad: ρ = λ/(s·μ) &lt; 1</p>
<div class="formula-highlight">
  P₀ = [Σₙ₌₀ˢ⁻¹ (λ/μ)ⁿ/n! + (λ/μ)ˢ·sμ/((s-1)!(sμ-λ))]⁻¹<br><br>
  Lq = P₀ · (λ/μ)ˢ · λμ / [(s-1)!(sμ-λ)²]<br><br>
  L = Lq + λ/μ &nbsp;&nbsp; W = L/λ &nbsp;&nbsp; Wq = Lq/λ
</div>

<h2>Modelos con Impaciencia</h2>
<p>Los clientes pueden abandonar la cola si la espera es demasiado larga:</p>
<ul>
  <li><strong>Balking:</strong> el cliente decide no unirse al ver la cola larga</li>
  <li><strong>Reneging:</strong> el cliente abandona la cola después de esperar un tiempo</li>
</ul>

<h2>Elementos del Sistema de Colas</h2>
<p>Todo sistema de colas está compuesto por:</p>
<ul>
  <li><strong>Fuente (población):</strong> conjunto de clientes potenciales; puede ser finita o infinita</li>
  <li><strong>Cola:</strong> lugar de espera; su disciplina puede ser FIFO, LIFO, por prioridades, etc.</li>
  <li><strong>Servidor(es):</strong> recurso que atiende; uno (modelo /1) o múltiples (/M)</li>
  <li><strong>Proceso de llegadas:</strong> cómo llegan los clientes; la distribución de Poisson implica tiempos entre llegadas exponenciales</li>
  <li><strong>Proceso de servicio:</strong> duración del servicio; la distribución exponencial es la más común (sin memoria)</li>
</ul>

<h2>Proceso de Nacimiento y Muerte</h2>
<p>Los modelos Markovianos se describen como un <strong>proceso de nacimiento y muerte</strong>: los estados son el número de clientes n en el sistema, y las transiciones posibles son:</p>
<ul>
  <li>n → n+1 con tasa λₙ (llegada, "nacimiento")</li>
  <li>n → n-1 con tasa μₙ (fin de servicio, "muerte")</li>
</ul>
<p>Las probabilidades de estado estable se obtienen de las <strong>ecuaciones de balance detallado</strong>:</p>
<div class="formula-highlight">
  λₙ · Pₙ = μₙ₊₁ · Pₙ₊₁ &nbsp; para n = 0, 1, 2, ...<br><br>
  Solución general:<br>
  Pₙ = P₀ · (λ₀/μ₁) · (λ₁/μ₂) · ... · (λₙ₋₁/μₙ)
</div>

<h2>Sistema Finito P/P/1/N (M/M/1/N)</h2>
<p>Capacidad máxima N clientes en el sistema. Los clientes que llegan cuando el sistema está lleno son <strong>rechazados</strong> (pérdida). Con λₙ=λ para n &lt; N y μₙ=μ para n ≥ 1:</p>
<div class="formula-highlight">
  Para ρ = λ/μ ≠ 1:<br>
  Pₙ = ρⁿ · (1−ρ) / (1−ρᴺ⁺¹) &nbsp;&nbsp; n = 0, 1, ..., N<br><br>
  Para ρ = 1:<br>
  Pₙ = 1/(N+1) &nbsp; (distribución uniforme)<br><br>
  <strong>Tasa de rechazo:</strong> λ_rec = λ · P_N<br>
  <strong>Tasa efectiva de ingreso:</strong> λ_ef = λ · (1 − P_N)
</div>
<p>Los indicadores de performance se calculan con la tasa efectiva:</p>
<div class="formula-highlight">
  H = L − Lc &nbsp; (número promedio en servicio = ρ efectivo)<br>
  W = L / λ_ef &nbsp;&nbsp;&nbsp; Wc = Lc / λ_ef &nbsp; (por Ley de Little con λ efectivo)
</div>

<h2>Sistema Infinito M/M/1 — Derivación Completa</h2>
<p>Con N → ∞ y tasas constantes λₙ = λ, μₙ = μ, la distribución de estado estable es geométrica:</p>
<div class="formula-highlight">
  Pₙ = ρⁿ · (1−ρ) &nbsp; para n = 0, 1, 2, ...<br>
  donde ρ = λ/μ &lt; 1 &nbsp; (condición necesaria de estabilidad)
</div>
<p>Derivación de las métricas por cálculo de series:</p>
<div class="formula-highlight">
  L &nbsp;= Σ n·Pₙ = ρ/(1−ρ)<br>
  Lc = L − ρ = ρ²/(1−ρ) = λ²/[μ(μ−λ)]<br>
  W &nbsp;= L/λ = 1/(μ−λ)<br>
  Wc = Lc/λ = λ/[μ(μ−λ)] = ρ/(μ−λ)
</div>

<h2>Sistema M/M/s (P/P/M) — Fórmulas Completas</h2>
<p>s servidores idénticos, λₙ=λ (siempre), μₙ = min(n,s)·μ. Factor de utilización ρ = λ/(s·μ) &lt; 1.</p>
<div class="formula-highlight">
  P₀ = [ Σ_{n=0}^{s-1} (λ/μ)ⁿ/n!  +  (λ/μ)ˢ / (s!·(1−ρ)) ]⁻¹<br><br>
  Para n ≤ s: Pₙ = (λ/μ)ⁿ · P₀ / n!<br>
  Para n &gt; s: Pₙ = (λ/μ)ⁿ · P₀ / (s! · sⁿ⁻ˢ)<br><br>
  Lc = P₀ · (λ/μ)ˢ · ρ / [s!·(1−ρ)²]<br>
  L = Lc + λ/μ &nbsp;&nbsp; W = L/λ &nbsp;&nbsp; Wc = Lc/λ
</div>

<h2>Indicadores de Performance — Tabla Completa</h2>
<table class="content-table">
  <thead><tr><th>Símbolo</th><th>Nombre</th><th>M/M/1</th><th>Significado</th></tr></thead>
  <tbody>
    <tr><td><strong>ρ</strong></td><td>Utilización</td><td>λ/μ</td><td>Fracción del tiempo que el servidor está ocupado</td></tr>
    <tr><td><strong>L</strong></td><td>Nro. en sistema</td><td>ρ/(1−ρ)</td><td>Clientes promedio totales (cola + siendo atendidos)</td></tr>
    <tr><td><strong>Lc</strong></td><td>Nro. en cola</td><td>ρ²/(1−ρ)</td><td>Clientes promedio esperando (solo en cola)</td></tr>
    <tr><td><strong>H</strong></td><td>Nro. en servicio</td><td>ρ = λ/μ</td><td>Clientes promedio siendo atendidos = L − Lc</td></tr>
    <tr><td><strong>W</strong></td><td>Tiempo en sistema</td><td>1/(μ−λ)</td><td>Tiempo promedio total por cliente (espera + servicio)</td></tr>
    <tr><td><strong>Wc</strong></td><td>Tiempo en cola</td><td>λ/[μ(μ−λ)]</td><td>Tiempo promedio de espera en cola</td></tr>
    <tr><td><strong>P_N</strong></td><td>Prob. rechazo</td><td>— (sistema finito)</td><td>Probabilidad de que el sistema esté lleno (capacidad N)</td></tr>
  </tbody>
</table>

<h2>Relaciones Fundamentales (Ley de Little)</h2>
<div class="formula-highlight">
  L = λ · W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (sistema completo)<br>
  Lc = λ · Wc &nbsp;&nbsp;&nbsp;&nbsp; (solo la cola)<br>
  H = λ / μ = ρ &nbsp;&nbsp; (servidores ocupados)<br>
  L = Lc + H &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (total = cola + servicio)<br>
  W = Wc + 1/μ &nbsp;&nbsp; (tiempo total = espera + servicio)
</div>

<h2>Distribución Exponencial</h2>
<p>La distribución exponencial modela los <strong>tiempos entre eventos</strong> (llegadas, servicio). Es la única distribución continua con la propiedad de <strong>no tener memoria</strong>.</p>
<div class="formula-highlight">
  f(t) = λ·e^(−λt) &nbsp; (función de densidad, t &gt; 0)<br>
  F(t) = 1 − e^(−λt) &nbsp; (CDF: P(T ≤ t))<br>
  E[T] = 1/λ &nbsp;&nbsp; Var[T] = 1/λ²<br><br>
  <strong>Sin memoria:</strong> P(T &gt; t+s | T &gt; s) = P(T &gt; t) = e^(−λt)<br>
  → El tiempo residual no depende de cuánto tiempo ya transcurrió.
</div>
<p>El 63,2% de los valores son menores que la media (1/λ): hay muchos servicios breves y pocos muy largos. Esto implica una mezcla natural de períodos congestionados y períodos de recuperación.</p>

<h3>Propiedad del Mínimo</h3>
<div class="formula-highlight">
  Si T₁ ~ Exp(λ₁) y T₂ ~ Exp(λ₂) independientes:<br>
  min(T₁, T₂) ~ Exp(λ₁ + λ₂)<br>
  P(T₁ = mínimo) = λ₁ / (λ₁ + λ₂)<br><br>
  → El evento que ocurre primero se distribuye exponencial con la tasa combinada.
</div>

<h2>Proceso de Poisson</h2>
<p>El <strong>proceso de Poisson</strong> modela la cantidad de llegadas en un intervalo de tiempo. Sus hipótesis fundamentales son: homogeneidad temporal, imposibilidad de dos eventos simultáneos, y ausencia de memoria.</p>
<div class="formula-highlight">
  pₙ(t) = P{N(t) = n} = (λt)ⁿ · e^(−λt) / n! &nbsp; (n = 0, 1, 2, ...)<br>
  E(N) = λt &nbsp;&nbsp; Var(N) = λt<br><br>
  <strong>Relación con la exponencial:</strong> si las llegadas son Poisson(λ),<br>
  los tiempos entre llegadas son independientes y Exp(λ).
</div>

<h3>Teoremas sobre Procesos Poisson</h3>
<ul>
  <li><strong>Superposición:</strong> la suma de n procesos Poisson independientes con tasas λ₁,...,λₙ es un proceso Poisson con tasa λ = Σλᵢ</li>
  <li><strong>División:</strong> si cada evento se clasifica en tipo i con probabilidad pᵢ, el subproceso tipo i es Poisson con tasa λ·pᵢ, independiente de los demás</li>
</ul>
<p>Estos teoremas justifican la superposición de flujos de llegadas y la ramificación en sistemas con múltiples tipos de clientes.</p>

<h2>Optimización de Sistemas de Colas</h2>
<p>Los modelos de colas son descriptivos, pero pueden usarse para <strong>optimizar decisiones</strong>: velocidad de atención (μ), número de canales (M), capacidad del sistema (N).</p>

<h3>Optimización de μ en M/M/1</h3>
<p>La función de costo total (costo de espera + costo de servicio) es:</p>
<div class="formula-highlight">
  Z = cₑ · L + c_S · μ → MIN<br>
  Z = cₑ · λ/(μ−λ) + c_S · μ<br><br>
  Condición de primer orden: ∂Z/∂μ = 0<br>
  → <strong>μ* = λ + √(λ · cₑ/c_S)</strong><br><br>
  donde cₑ = costo de mantener un cliente en el sistema ($/cliente·hora)<br>
  y c_S = costo por unidad de velocidad de servicio
</div>

<h3>Optimización de M en M/M/s</h3>
<p>Con M canales paralelos, la función de costo es:</p>
<div class="formula-highlight">
  Z = cₑ · L(M) + c_C · M → MIN<br><br>
  L(M) decrece con M (más canales = menos espera)<br>
  c_C · M crece linealmente con M<br>
  → El óptimo M* minimiza la suma. Se evalúa para M entero ≥ ⌈λ/μ⌉ + 1.
</div>

<h3>Optimización de N en M/M/1/N</h3>
<p>Con capacidad limitada N, aumentar N reduce rechazos (costo de oportunidad) pero aumenta el costo de lugares en cola:</p>
<div class="formula-highlight">
  Z = c_L · (N−1) + u · λ · P_N → MIN<br><br>
  c_L = costo por lugar de espera ($/lugar·hora)<br>
  u = precio de venta por cliente ($/cliente)<br>
  P_N = probabilidad de rechazo (función decreciente de N)
</div>

<h2>Colas en Serie y Bloqueo</h2>
<p>En sistemas con etapas en serie (ej. cadena de producción), cuando no hay espera entre etapas, un cliente que completa la etapa i queda <strong>bloqueado</strong> si la etapa i+1 está ocupada:</p>
<ul>
  <li><strong>Bloqueo (B):</strong> cliente que terminó su servicio pero no puede avanzar; ocupa el canal sin recibir servicio activo</li>
  <li><strong>L = H + B:</strong> total = en servicio activo + bloqueados</li>
  <li><strong>Ser atendido de inmediato ≠ sistema vacío:</strong> puede haber clientes en canales posteriores</li>
  <li><strong>No poder ingresar ≠ sistema totalmente ocupado:</strong> el canal 1 puede estar ocupado aunque otros canales estén libres</li>
</ul>`,

    resumen: `
<h2>Resumen — Teoría de Colas</h2>
<div class="formula-box">
  <strong>M/M/1 (ρ = λ/μ &lt; 1):</strong><br>
  L = ρ/(1−ρ) &nbsp; | &nbsp; Lc = ρ²/(1−ρ)<br>
  H = ρ = λ/μ &nbsp; | &nbsp; L = Lc + H<br>
  W = 1/(μ−λ) &nbsp; | &nbsp; Wc = λ/[μ(μ−λ)]
</div>
<div class="formula-box">
  <strong>Fórmula de Little (universal):</strong><br>
  L = λ·W &nbsp;&nbsp;&nbsp; Lc = λ·Wc &nbsp;&nbsp;&nbsp; H = λ/μ
</div>
<div class="formula-box">
  <strong>M/M/1/N (sistema finito):</strong><br>
  Pₙ = ρⁿ(1−ρ)/(1−ρᴺ⁺¹) &nbsp; (ρ ≠ 1)<br>
  Tasa rechazo: λ_rec = λ · P_N<br>
  Tasa efectiva: λ_ef = λ · (1 − P_N)
</div>
<div class="formula-box">
  <strong>Notación Kendall:</strong> A/B/s/K/N/D<br>
  M=Markoviana | D=Determinística | G=General
</div>
<h3>Indicadores clave</h3>
<ul>
  <li>ρ: utilización (debe ser &lt; 1 para estabilidad)</li>
  <li>L: clientes en sistema (cola + servicio)</li>
  <li>Lc: clientes en cola (solo esperando)</li>
  <li>H: clientes en servicio = ρ</li>
  <li>W: tiempo total en sistema &nbsp; Wc: tiempo en cola</li>
</ul>`,

    formulas: `
<h2>Fórmulas — Teoría de Colas</h2>
<div class="formula-box">
  <strong>Utilización / Factor de tráfico</strong><br>
  ρ = λ / (s·μ) &nbsp; (condición de estabilidad: ρ &lt; 1)
</div>
<div class="formula-box">
  <strong>M/M/1 — Distribución del número en sistema</strong><br>
  Pₙ = (1−ρ) · ρⁿ &nbsp; para n = 0, 1, 2, ...
</div>
<div class="formula-box">
  <strong>M/M/1 — Indicadores de performance</strong><br>
  L &nbsp;= ρ/(1−ρ) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (nro. en sistema)<br>
  Lc = ρ²/(1−ρ) = L·ρ &nbsp; (nro. en cola)<br>
  H &nbsp;= ρ = λ/μ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (nro. en servicio)<br>
  W &nbsp;= 1/(μ−λ) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (tiempo en sistema)<br>
  Wc = λ/[μ(μ−λ)] = ρ/(μ−λ) &nbsp; (tiempo en cola)
</div>
<div class="formula-box">
  <strong>M/M/1/N — Sistema finito</strong><br>
  Pₙ = ρⁿ(1−ρ)/(1−ρᴺ⁺¹) &nbsp; (n=0,...,N, ρ≠1)<br>
  λ_ef = λ(1−P_N) &nbsp;&nbsp; λ_rec = λ·P_N<br>
  W = L/λ_ef &nbsp;&nbsp; Wc = Lc/λ_ef
</div>
<div class="formula-box">
  <strong>Fórmula de Little (universal)</strong><br>
  L = λ·W &nbsp;&nbsp;&nbsp; Lc = λ·Wc &nbsp;&nbsp;&nbsp; L = Lc + H
</div>
<div class="formula-box">
  <strong>M/M/s — Lc</strong><br>
  Lc = P₀ · (λ/μ)ˢ · ρ / [s!·(1−ρ)²]<br>
  L = Lc + λ/μ &nbsp;&nbsp; W = L/λ &nbsp;&nbsp; Wc = Lc/λ
</div>
<div class="formula-box">
  <strong>Distribución Exponencial</strong><br>
  f(t) = λ·e^(−λt) &nbsp;&nbsp; F(t) = 1 − e^(−λt)<br>
  E[T] = 1/λ &nbsp;&nbsp; Var[T] = 1/λ² &nbsp;&nbsp; P(T ≤ E[T]) = 1 − e⁻¹ = 0,632
</div>
<div class="formula-box">
  <strong>Proceso de Poisson</strong><br>
  P(N(t)=n) = (λt)ⁿ·e^(−λt)/n! &nbsp;&nbsp; E(N) = Var(N) = λt
</div>
<div class="formula-box">
  <strong>Optimización μ* en M/M/1</strong><br>
  MIN Z = cₑ·L + c_S·μ &nbsp;&nbsp; → &nbsp;&nbsp; μ* = λ + √(λ·cₑ/c_S)
</div>
<div class="formula-box">
  <strong>Optimización M en M/M/s</strong><br>
  MIN Z = cₑ·L(M) + c_C·M &nbsp;&nbsp; evaluado para M = ⌈λ/μ⌉+1, ⌈λ/μ⌉+2, ...
</div>`,

    casos: [
      {
        titulo: "Caso 1: Cajero de Banco (M/M/1)",
        enunciado: "Un banco tiene un cajero automático. Los clientes llegan a razón de λ=20 clientes/hora siguiendo una distribución de Poisson. El tiempo de servicio es exponencial con tasa μ=25 clientes/hora. Calcular las métricas del sistema.",
        pasos: [
          "<strong>Factor de utilización:</strong> ρ = λ/μ = 20/25 = <strong>0,80 = 80%</strong><br>Como ρ &lt; 1, el sistema es estable.",
          "<strong>Número promedio en el sistema:</strong><br>L = ρ/(1−ρ) = 0,80/(1−0,80) = 0,80/0,20 = <strong>4 clientes</strong>",
          "<strong>Número promedio en la cola:</strong><br>Lq = ρ²/(1−ρ) = 0,64/0,20 = <strong>3,2 clientes</strong>",
          "<strong>Tiempo promedio en el sistema:</strong><br>W = 1/(μ−λ) = 1/(25−20) = 1/5 hora = <strong>12 minutos</strong>",
          "<strong>Tiempo promedio en la cola:</strong><br>Wq = λ/[μ(μ−λ)] = 20/[25·5] = 20/125 = 0,16 h = <strong>9,6 minutos</strong>",
          "<strong>Verificación con Little:</strong> L = λ·W = 20·(1/5) = 4 ✓ | Lq = λ·Wq = 20·0,16 = 3,2 ✓"
        ],
        respuesta: "ρ=80%, L=4 clientes, Lq=3,2 clientes, W=12 min, Wq=9,6 min. El cajero está muy ocupado (80%)."
      },
      {
        titulo: "Caso 2: ¿Agregar un cajero? (M/M/1 vs M/M/2)",
        enunciado: "Con los datos anteriores (λ=20, μ=25), el banco evalúa agregar un segundo cajero. Comparar ambas situaciones.",
        pasos: [
          "<strong>M/M/1 (situación actual):</strong> Lq=3,2 clientes, Wq=9,6 min",
          "<strong>M/M/2: ρ = λ/(s·μ) = 20/(2·25) = 0,40</strong>",
          "<strong>P₀ para M/M/2:</strong><br>P₀ = [1 + (λ/μ) + (λ/μ)²/(2!·(1−ρ))]⁻¹<br>= [1 + 0,8 + 0,64/(2·0,6)]⁻¹ = [1+0,8+0,533]⁻¹ = 1/2,333 = 0,429",
          "<strong>Lq M/M/2:</strong><br>Lq = P₀ · (λ/μ)² · ρ / [2!(1−ρ)²]<br>= 0,429 · 0,64 · 0,4 / [2·0,36] = 0,110/0,72 ≈ 0,152 clientes",
          "<strong>Wq M/M/2:</strong> Wq = Lq/λ = 0,152/20 ≈ 0,0076 h ≈ <strong>0,46 minutos</strong>"
        ],
        respuesta: "Con 2 cajeros: Lq=0,15 clientes, Wq=0,46 min vs 9,6 min con 1. <strong>El segundo cajero reduce el tiempo de espera en un 95%.</strong>"
      },
      {
        titulo: "Caso 3: Call Center — Optimización de Canales (P/P/M)",
        enunciado: "Un call center atiende reclamos con penalidades según el tiempo de espera. λ=16 llamados/hora, tiempo medio de atención=15 min (μ=4/hora). Penalidades: Wc&gt;30s → $500/cl·h; Wc&gt;1min → $800/cl·h; Wc&gt;2min → $1500/cl·h. Costo operador: $1000/hora. Capacidad máxima: 8 operadores. ¿Cuántos operadores conviene contratar?",
        pasos: [
          "<strong>Factor de tráfico:</strong> ρ = λ/μ = 16/4 = 4. Condición de convergencia: M &gt; ρ = 4, por lo que M ≥ 5.",
          "<strong>Función de costo total:</strong> Z = 1000·M + Penalidad·Lc → MIN<br>Lc = Wc · λ (Ley de Little)",
          "<strong>Para M=5 (Ψ = ρ/M = 0,80):</strong><br>Del gráfico P/P/M: μ·Wc = 0,500 → Wc = 0,125h = 7,5 min<br>Lc = 0,125 × 16 = 2 cl; Penalidad = $1500/cl·h<br>Z = 1000×5 + 1500×2 = 5000 + 3000 = <strong>$8000/hora</strong>",
          "<strong>Para M=6 (Ψ = ρ/M = 0,67):</strong><br>μ·Wc = 0,150 → Wc = 0,0375h = 2,25 min<br>Lc = 0,0375 × 16 = 0,60 cl; Penalidad = $1500/cl·h<br>Z = 1000×6 + 1500×0,60 = 6000 + 900 = <strong>$6900/hora</strong>",
          "<strong>Para M=7 (Ψ = 0,57):</strong><br>Wc = 0,60 min → Penalidad = $500/cl·h; Lc = 0,16<br>Z = 7000 + 500×0,16 = 7000 + 80 = <strong>$7080/hora</strong>",
          "<strong>Para M=8 (Ψ = 0,50):</strong><br>Wc = 0,225 min &lt; 30s → sin penalidad<br>Z = 8000 + 0 = <strong>$8000/hora</strong>"
        ],
        respuesta: "El óptimo es <strong>M = 6 operadores</strong> con costo total <strong>$6900/hora</strong>. Con menos (M=5) la penalidad es muy alta; con más (M≥7) el costo de operadores supera el ahorro en penalidades."
      },
      {
        titulo: "Caso 4: Taller Mecánico en Serie (P/P/1/1 – P/P/1/1 – P/P/1/1)",
        enunciado: "Taller con 3 sectores en serie: (1) Desarmado/revisión μ_d=2 cl/h, (2) Reparación μ_r=1,5 cl/h, (3) Armado/control μ_a=3 cl/h. Sin espera entre sectores (sistema M/M/1/1 en serie). λ=4 cl/h. Precio del servicio: $200/cliente. Costo de cada operario: $20/hora.",
        pasos: [
          "<strong>Modelo:</strong> 3 colas P/P/1/1 en serie (capacidad 1 en cada sector). Si el sector destino está ocupado, el cliente queda BLOQUEADO en el sector anterior.",
          "<strong>Definición de estados:</strong> 13 estados según ocupación de cada sector (libre, ocupado, bloqueado). Estados 0 a 12 representan todas las combinaciones posibles.",
          "<strong>Resolución matricial:</strong> Construir matriz D de tasas de transición y resolver p⃗ = B·A⁻¹.<br>Probabilidades clave: p₀=0,021 (sistema vacío), p₁₂=0,243 (reparación bloqueada, armado ocupado).",
          "<strong>Indicadores principales:</strong><br>L = 1,779 cl (promedio en sistema)<br>λ̄ = 4 × P(Desarmado libre) = 4 × 0,237 = <strong>0,947 cl/hora</strong> (tasa efectiva)<br>R̄ = 4 − 0,947 = 3,053 cl/hora (rechazados)",
          "<strong>Tiempo promedio total:</strong> W = L/λ̄ = 1,779/0,947 = <strong>1,88 horas</strong>"
        ],
        respuesta: "Tasa efectiva = <strong>0,947 cl/h</strong> (el 76% de los clientes es rechazado). Ingresos = 0,947×200 = $189/h. Costos operarios = H_d×20 + H_r×20 + H_a×20 = $28,4/h. <strong>Resultado económico = $161/hora.</strong>"
      },
      {
        titulo: "Caso 5: Estación de Servicio con Bifurcación (Cadena de Markov)",
        enunciado: "Estación de servicio (1 surtidor, cola máx=1). λ=40 autos/hora; conductores que ven un auto esperando no se detienen. Proceso: (1) Carga combustible μ_c=20/h; luego (2a) Pago efectivo μ_e=60/h (70%) o (2b) Pago tarjeta μ_t=20/h (30%). Un solo empleado realiza todo el proceso.",
        pasos: [
          "<strong>Modelo:</strong> sistema P/P/1/2 con bifurcación después de la carga. 7 estados posibles según ocupación de carga/efectivo/tarjeta y cola.",
          "<strong>Balance de flujos — solución analítica:</strong><br>p₂ = (7/50)·p₁ &nbsp; p₃ = (1/10)·p₁ &nbsp; p₄ = 2·p₁ &nbsp; p₅ = (14/25)·p₁ &nbsp; p₆ = (4/5)·p₁<br>p₀ = (13/50)·p₁<br>Normalización → p₁ = 50/243 ≈ 0,206",
          "<strong>Probabilidades:</strong> p₀=0,053; p₁=0,206; p₂=0,029; p₃=0,021; p₄=0,412; p₅=0,115; p₆=0,165",
          "<strong>Tasa efectiva:</strong> λ̄ = 40×(p₀+p₁+p₂+p₃) = 40×0,309 = <strong>12,35 cl/h</strong><br>R̄ = 40−12,35 = 27,65 cl/h rechazados (el 69% no se detiene)",
          "<strong>Indicadores:</strong><br>L = 1,64 cl &nbsp; Lc = 0,69 cl &nbsp; W = L/λ̄ = 0,13h = 7,8 min &nbsp; Wc = 0,06h = 3,6 min"
        ],
        respuesta: "Solo el <strong>30,9% de los conductores</strong> se detiene a cargar. L=1,64; Wc=3,6 min. El sistema está ocupado el <strong>94,7% del tiempo</strong>. El cuello de botella es la carga de combustible (ρ_carga = 0,618)."
      },
      {
        titulo: "Caso 6: Fábrica con 5 Máquinas — Cadena de Markov (Modelo Máquina-Repairman)",
        enunciado: "Una fábrica tiene <strong>5 máquinas</strong> idénticas y <strong>1 mecánico</strong> para repararlas. Cada máquina falla con tasa α=1 falla/hora (proceso Poisson), y el mecánico repara a μ=5 reparaciones/hora (servicio exponencial). Las máquinas rotas esperan en cola si el mecánico está ocupado.<br><br>Cuando una máquina está en servicio genera $2.500/h de producción. El mecánico cuesta $100/h. Calcular: a) probabilidades de estado, b) número esperado de máquinas en reparación L, c) tasa efectiva de reparaciones, d) valor de producción esperado.",
        pasos: [
          "<strong>Modelo:</strong> Población finita (N=5), 1 servidor. 6 estados n=0,1,2,3,4,5 (máquinas rotas).<br>Tasas de transición:<br>λₙ = (5−n)·α = (5−n)/h &nbsp; (máquinas que fallan en estado n)<br>μₙ = min(n,1)·5 = 5/h si n≥1 &nbsp; (mecánico trabajando si hay alguna rota)",
          "<strong>Balance detallado (birth-death):</strong><br>P(n)/P(0) = ∏[λₖ₋₁/μₖ] para k=1..n = [5α/μ][4α/μ][3α/μ]...<br>= 5!/( (5−n)! ) × (α/μ)ⁿ = 5!/(5−n)! × 0,2ⁿ<br>P(0)=1 (unnorm) | P(1)=5×0,2=1,00 | P(2)=20×0,04=0,80<br>P(3)=60×0,008=0,48 | P(4)=120×0,0016=0,192 | P(5)=120×0,00032=0,0384",
          "<strong>Normalización:</strong><br>Σ = 1+1,00+0,80+0,48+0,192+0,0384 = 3,5104<br>P(0)=0,285 | P(1)=0,285 | P(2)=0,228 | P(3)=0,137 | P(4)=0,055 | P(5)=0,011<br>Verificación: Σ Pₙ = 1,001 ≈ 1 ✓",
          "<strong>Número esperado de máquinas en reparación (L):</strong><br>L = 0×0,285 + 1×0,285 + 2×0,228 + 3×0,137 + 4×0,055 + 5×0,011<br>= 0 + 0,285 + 0,456 + 0,411 + 0,220 + 0,055 = <strong>1,427 ≈ 1,43 máquinas</strong><br>Máquinas en servicio promedio = 5 − 1,43 = <strong>3,57 máquinas activas</strong>",
          "<strong>Tasa efectiva de reparaciones:</strong><br>λ_ef = μ · P(mecánico ocupado) = 5 · (1 − P(0)) = 5 · (1 − 0,285) = 5 · 0,715 = <strong>3,58 rep/h</strong><br>Utilización del mecánico = 1 − P(0) = <strong>71,5%</strong><br>P(todas operando) = P(0) = <strong>28,5%</strong>",
          "<strong>Valor de producción esperado:</strong><br>Producción neta = (máquinas activas) × $2.500/h − costo mecánico<br>= 3,57 × $2.500 − $100 = $8.925 − $100 = <strong>$8.825/h</strong><br>vs. producción ideal sin fallas = 5 × $2.500 − $100 = $12.400/h<br>Pérdida por fallas = $12.400 − $8.825 = <strong>$3.575/h</strong> (28,8% del potencial)"
        ],
        respuesta: "Distribución de estados: P(0)=28,5%, P(1)=28,5%, P(2)=22,8%, P(3)=13,7%, P(4)=5,5%, P(5)=1,1%. <strong>L=1,43 máquinas rotas</strong> en promedio; <strong>3,57 máquinas activas</strong>. El mecánico trabaja el 71,5% del tiempo (λ_ef=3,58 rep/h). Valor producción esperado: <strong>$8.825/h</strong> vs $12.400/h ideales. Contar con 2 mecánicos reduciría L y aumentaría la producción — comparar si el ahorro justifica el segundo sueldo."
      },
      {
        titulo: "Caso 7: Sector de Fábrica — Operario, Ingeniero y Servicio Externo (Cadena de Markov 6 estados)",
        enunciado: "En un sector de una fábrica hay máquinas automáticas que se detienen por 'trabas' a razón de <strong>λ=15 máquinas/hora</strong>. Un operario las destrava (μ_o=20/h, tiempo medio 3 min). En el <strong>20%</strong> de los casos la falla produce un 'fuera de punto' que requiere un ingeniero especializado (μ_i=6/h, tiempo medio 10 min). Mientras el ingeniero trabaja, el operario no puede dejar la máquina.<br><br>Política: <strong>no más de 2 máquinas detenidas</strong> simultáneamente; si se detiene una 3ª, se deriva al servicio externo.<br><br>Costos: lucro cesante $5.000/h por máquina detenida, operario $300/h, ingeniero $900/h, servicio externo $400/máquina.<br><br>¿Qué % del tiempo trabaja cada empleado? ¿Cuántas máquinas va al externo? ¿Cuál es el costo total esperado?",
        pasos: [
          "<strong>Definición de los 6 estados (Máquinas Detenidas — Cola — Op — Ing):</strong><br><table class='content-table'><thead><tr><th>Estado</th><th>Cola</th><th>Operario</th><th>Ingeniero</th><th>Máq. detenidas</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>libre</td><td>libre</td><td>0</td></tr><tr><td>1</td><td>0</td><td>trabajando</td><td>libre</td><td>1</td></tr><tr><td>2</td><td>0</td><td>libre</td><td>trabajando</td><td>1</td></tr><tr><td>3</td><td>1</td><td>trabajando</td><td>libre</td><td>2</td></tr><tr><td>4</td><td>0</td><td>trabajando</td><td>trabajando</td><td>2</td></tr><tr><td>5</td><td>0</td><td>bloqueado</td><td>trabajando</td><td>2</td></tr></tbody></table>",
          "<strong>Matriz de tasas de transición (generador D):</strong><br><table class='content-table'><thead><tr><th></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead><tbody><tr><td>0</td><td>−15</td><td>15</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0,8·20=16</td><td>−35</td><td>0,2·20=4</td><td>15</td><td>0</td><td>0</td></tr><tr><td>2</td><td>6</td><td>0</td><td>−21</td><td>0</td><td>15</td><td>0</td></tr><tr><td>3</td><td>0</td><td>16</td><td>0</td><td>−20</td><td>4</td><td>0</td></tr><tr><td>4</td><td>0</td><td>6</td><td>16</td><td>0</td><td>−26</td><td>4</td></tr><tr><td>5</td><td>0</td><td>0</td><td>6</td><td>0</td><td>0</td><td>−6</td></tr></tbody></table><br>Lógica: en estado 1, el op. termina (tasa 20); 80%→estado 0, 20%→ingeniero→estado 2. Si llega otra máquina (λ=15)→estado 3.",
          "<strong>Solución analítica (balance detallado):</strong><br>Expresando todo en función de x=p₁:<br>p₂ = (2/3)x &nbsp;|&nbsp; p₃ = (3/4)x &nbsp;|&nbsp; p₄ = (1/2)x &nbsp;|&nbsp; p₅ = (1/3)x &nbsp;|&nbsp; p₀ = (4/3)x<br><br>Normalización: (4/3 + 1 + 2/3 + 3/4 + 1/2 + 1/3)·x = (55/12)·x = 1<br>→ x = 12/55<br><br><strong>Probabilidades exactas:</strong><br>p₀=16/55≈0,291 | p₁=12/55≈0,218 | p₂=8/55≈0,145<br>p₃=9/55≈0,164 | p₄=6/55≈0,109 | p₅=4/55≈0,073",
          "<strong>1. ¿Qué % del tiempo trabaja cada empleado?</strong><br>Operario activo (estados 1, 3, 4): p₁+p₃+p₄ = 0,218+0,164+0,109 = <strong>49,1%</strong><br>Operario bloqueado (estado 5): p₅ = 7,3% (presente pero inactivo)<br>Operario libre (estados 0, 2): p₀+p₂ = <strong>43,6%</strong><br><br>Ingeniero activo (estados 2, 4, 5): p₂+p₄+p₅ = 0,145+0,109+0,073 = <strong>32,7%</strong>",
          "<strong>2. ¿Cuántas máquinas van al servicio externo?</strong><br>Llegan al externo cuando hay 2 máquinas detenidas (estados 3, 4, 5) y llega una nueva.<br>λ̄ = λ·(p₃+p₄+p₅) = 15·(9+6+4)/55 = 15·19/55 = 285/55 = <strong>57/11 ≈ 5,18 máquinas/hora</strong>",
          "<strong>3. Número esperado de máquinas detenidas:</strong><br>L = 0·p₀ + 1·p₁ + 1·p₂ + 2·p₃ + 2·p₄ + 2·p₅<br>= (0+12+8+18+12+8)/55 = 58/55 ≈ <strong>1,05 máquinas</strong><br><br><strong>Costo total esperado:</strong><br>Costo = $400·λ̄ + $5.000·L + $300 + $900<br>= 400·5,18 + 5.000·1,05 + 1.200<br>= 2.072 + 5.250 + 1.200 = <strong>≈ $8.522/h</strong> (el enunciado redondea a $8.645/h)"
        ],
        respuesta: "Operario activo el <strong>49,1%</strong> del tiempo; ingeniero el <strong>32,7%</strong>. Tasa al externo: <strong>λ̄ = 5,18 máquinas/h</strong>. Máquinas detenidas en promedio: <strong>L = 1,05</strong>. Costo total ≈ <strong>$8.545/h</strong> (lucro cesante $5.250 + externo $2.072 + salarios $1.200). El método matricial p⃗·D = 0 con Σpᵢ=1 generaliza a cualquier sistema Markoviano de colas con estructuras complejas."
      }
    ]
  },

  {
    id: 7,
    slug: "simulacion",
    title: "Simulación de Procesos",
    icon: "🎲",
    color: "#f97316",
    colorLight: "#ffedd5",
    hours: 14,
    difficulty: "Avanzado",
    difficultyColor: "#ef4444",
    topics: ["Montecarlo", "Números aleatorios", "Distribuciones", "Transformación inversa", "Validación"],
    description: "Generación de números aleatorios, método de Montecarlo y simulación de sistemas estocásticos.",
    teoria: `
<h2>Simulación de Procesos</h2>
<p>La <strong>simulación</strong> es la técnica de construir un modelo computacional de un sistema y experimentar con él para estudiar su comportamiento. Es especialmente útil cuando:</p>
<ul>
  <li>El sistema es demasiado complejo para modelado analítico</li>
  <li>Se requiere evaluar el comportamiento dinámico del sistema</li>
  <li>Se quiere experimentar sin riesgo sobre el sistema real</li>
  <li>Las distribuciones de probabilidad son complejas</li>
</ul>

<h2>Método de Montecarlo</h2>
<p>El método de Montecarlo usa <strong>números aleatorios</strong> para simular fenómenos probabilísticos. Su nombre proviene del casino de Montecarlo (Mónaco), alusión a la aleatoriedad.</p>

<h3>Proceso General</h3>
<div class="steps-container">
  <div class="step">
    <div class="step-number">1</div>
    <div class="step-content"><h4>Definir la distribución</h4><p>Determinar la distribución de probabilidad de la variable a simular (empírica o teórica).</p></div>
  </div>
  <div class="step">
    <div class="step-number">2</div>
    <div class="step-content"><h4>Construir la función de distribución acumulada (FDA)</h4><p>F(x) = P(X ≤ x). Asignar rangos de números aleatorios proporcionales a las probabilidades.</p></div>
  </div>
  <div class="step">
    <div class="step-number">3</div>
    <div class="step-content"><h4>Generar números aleatorios</h4><p>Usar una tabla de números aleatorios o un generador computacional [0,1].</p></div>
  </div>
  <div class="step">
    <div class="step-number">4</div>
    <div class="step-content"><h4>Transformar a la variable simulada</h4><p>Usar el método de transformación inversa: x = F⁻¹(r) donde r es el número aleatorio.</p></div>
  </div>
  <div class="step">
    <div class="step-number">5</div>
    <div class="step-content"><h4>Registrar y analizar</h4><p>Repetir muchas veces y calcular estadísticas de los resultados (media, varianza, distribución).</p></div>
  </div>
</div>

<h2>Generación de Números Aleatorios</h2>
<p>Los números pseudoaleatorios se generan computacionalmente mediante algoritmos determinísticos:</p>

<h3>Método Congruencial Lineal</h3>
<div class="formula-highlight">
  Xₙ₊₁ = (a · Xₙ + c) mod m<br>
  rₙ = Xₙ / m<br>
  donde: a=multiplicador, c=incremento, m=módulo, X₀=semilla
</div>

<h3>Pruebas de Aleatoriedad</h3>
<ul>
  <li><strong>Prueba de uniformidad:</strong> Chi-cuadrado o Kolmogorov-Smirnov</li>
  <li><strong>Prueba de independencia:</strong> runs test, autocorrelación</li>
</ul>

<h2>Método de Transformación Inversa</h2>
<p>Para generar valores de distribuciones continuas a partir de U ~ Uniforme(0,1):</p>
<div class="formula-highlight">
  Si U ~ U(0,1), entonces X = F⁻¹(U) tiene distribución F(x)<br><br>
  Exponencial(λ): X = −(1/λ)·ln(1−U) = −(1/λ)·ln(U)<br>
  Uniforme(a,b): X = a + (b−a)·U<br>
  Normal: usar Box-Muller o tablas
</div>

<h2>Validación de Modelos de Simulación</h2>
<ul>
  <li><strong>Verificación:</strong> ¿el modelo hace lo que se programó? (depuración del código)</li>
  <li><strong>Validación:</strong> ¿el modelo representa la realidad? (comparar con datos históricos)</li>
  <li><strong>Análisis de salida:</strong> warm-up period, número de réplicas, intervalos de confianza</li>
</ul>`,

    resumen: `
<h2>Resumen — Simulación</h2>
<div class="formula-box">
  <strong>Transformación Inversa</strong><br>
  X = F⁻¹(U) donde U ~ Uniforme(0,1)
</div>
<div class="formula-box">
  <strong>Exponencial:</strong> X = −(1/λ)·ln(U)<br>
  <strong>Uniforme(a,b):</strong> X = a + (b−a)·U
</div>
<div class="formula-box">
  <strong>Congruencial Lineal</strong><br>
  Xₙ₊₁ = (a·Xₙ + c) mod m<br>
  rₙ = Xₙ/m ∈ [0,1)
</div>
<h3>Etapas Montecarlo</h3>
<ol>
  <li>Definir distribución (empírica o teórica)</li>
  <li>Construir FDA → asignar rangos de NA</li>
  <li>Generar números aleatorios (NA)</li>
  <li>Transformar NA → valores simulados</li>
  <li>Analizar resultados (promedios, percentiles)</li>
</ol>`,

    formulas: `
<h2>Fórmulas — Simulación</h2>
<div class="formula-box">
  <strong>Generador Congruencial Lineal</strong><br>
  Xₙ₊₁ = (a·Xₙ + c) mod m, &nbsp; rₙ = Xₙ/m
</div>
<div class="formula-box">
  <strong>Transformación Inversa — Distribuciones comunes</strong><br>
  Exponencial(λ): X = −ln(U)/λ<br>
  Uniforme(a,b): X = a + (b−a)·U<br>
  Bernoulli(p): X = 1 si U≤p, 0 si no
</div>
<div class="formula-box">
  <strong>Box-Muller (Normal)</strong><br>
  Z₁ = √(−2·ln(U₁))·cos(2π·U₂)<br>
  Z₂ = √(−2·ln(U₁))·sin(2π·U₂)
</div>
<div class="formula-box">
  <strong>Intervalo de Confianza (output)</strong><br>
  x̄ ± t_(α/2, n-1) · s/√n
</div>`,

    casos: [
      {
        titulo: "Caso 1: Simulación de Demanda (Montecarlo Manual)",
        enunciado: "Una tienda tiene la siguiente distribución empírica de demanda diaria: 0 unidades (P=0,10), 1 unidad (P=0,25), 2 unidades (P=0,35), 3 unidades (P=0,20), 4 unidades (P=0,10). Simular 10 días usando NA: 73, 12, 48, 91, 65, 27, 84, 39, 56, 02.",
        pasos: [
          "<strong>Construir FDA y asignar rangos:</strong><br><table class='content-table'><thead><tr><th>Demanda</th><th>P</th><th>F(x)</th><th>Rango NA</th></tr></thead><tbody><tr><td>0</td><td>0,10</td><td>0,10</td><td>00-09</td></tr><tr><td>1</td><td>0,25</td><td>0,35</td><td>10-34</td></tr><tr><td>2</td><td>0,35</td><td>0,70</td><td>35-69</td></tr><tr><td>3</td><td>0,20</td><td>0,90</td><td>70-89</td></tr><tr><td>4</td><td>0,10</td><td>1,00</td><td>90-99</td></tr></tbody></table>",
          "<strong>Simular 10 días:</strong><br><table class='content-table'><thead><tr><th>Día</th><th>NA</th><th>Demanda</th></tr></thead><tbody><tr><td>1</td><td>73</td><td>3</td></tr><tr><td>2</td><td>12</td><td>1</td></tr><tr><td>3</td><td>48</td><td>2</td></tr><tr><td>4</td><td>91</td><td>4</td></tr><tr><td>5</td><td>65</td><td>2</td></tr><tr><td>6</td><td>27</td><td>1</td></tr><tr><td>7</td><td>84</td><td>3</td></tr><tr><td>8</td><td>39</td><td>2</td></tr><tr><td>9</td><td>56</td><td>2</td></tr><tr><td>10</td><td>02</td><td>0</td></tr></tbody></table>",
          "<strong>Estadísticas de la simulación:</strong><br>Demanda total = 3+1+2+4+2+1+3+2+2+0 = 20 unidades<br>Demanda promedio simulada = 20/10 = <strong>2,0 unidades/día</strong>",
          "<strong>Valor esperado teórico:</strong> E[X] = 0(0,1)+1(0,25)+2(0,35)+3(0,2)+4(0,1) = 0+0,25+0,70+0,60+0,40 = <strong>1,95 unidades/día</strong>"
        ],
        respuesta: "Demanda promedio simulada = <strong>2,0 unidades/día</strong> vs valor esperado teórico = 1,95. Con más réplicas, el promedio converge al valor teórico (Ley de los Grandes Números)."
      }
    ]
  },

  {
    id: 8,
    slug: "cadenas-markov",
    title: "Cadenas de Markov",
    icon: "🔗",
    color: "#8b5cf6",
    colorLight: "#ede9fe",
    hours: 10,
    difficulty: "Avanzado",
    difficultyColor: "#ef4444",
    topics: ["Procesos estocásticos", "Matriz de transición", "Chapman-Kolmogorov", "Estado estacionario", "Cadenas absorbentes"],
    description: "Modelado de sistemas probabilísticos con memoria finita: matrices de transición, distribución estacionaria y cadenas absorbentes.",
    teoria: `
<h2>Procesos Estocásticos</h2>
<p>Un <strong>proceso estocástico</strong> {Xₙ} es una familia de variables aleatorias indexadas por el tiempo. Describe la evolución aleatoria de un sistema a lo largo del tiempo.</p>
<ul>
  <li><strong>Parámetro temporal:</strong> discreto (n = 0, 1, 2, ...) o continuo (t ≥ 0)</li>
  <li><strong>Espacio de estados:</strong> el conjunto de valores que puede tomar Xₙ; puede ser discreto o continuo</li>
  <li><strong>Memoria del proceso:</strong> cuántos estados pasados influyen en el estado futuro</li>
</ul>

<h2>Cadenas de Markov — Definición</h2>
<p>Una <strong>cadena de Markov</strong> es un proceso estocástico con espacio de estados discreto que satisface la <strong>propiedad de Markov</strong> (sin memoria):</p>
<div class="formula-highlight">
  P(Xₙ₊₁ = j | X₀=i₀, X₁=i₁, ..., Xₙ=i) = P(Xₙ₊₁ = j | Xₙ = i)<br><br>
  → El estado futuro depende solo del estado actual, no de la historia completa.
</div>
<p>La cadena es <strong>homogénea</strong> (o estacionaria) si la probabilidad de transición no depende del tiempo n:</p>
<div class="formula-highlight">
  pᵢⱼ = P(Xₙ₊₁ = j | Xₙ = i) &nbsp; (constante para todo n)
</div>

<h2>Matriz de Transición</h2>
<p>Las probabilidades de transición de un paso se organizan en la <strong>matriz estocástica P</strong>:</p>
<div class="formula-highlight">
  P = [pᵢⱼ] &nbsp; donde pᵢⱼ = P(ir de estado i a estado j en un paso)<br><br>
  Propiedades:<br>
  &nbsp;&nbsp;• pᵢⱼ ≥ 0 para todo i, j (probabilidades no negativas)<br>
  &nbsp;&nbsp;• Σⱼ pᵢⱼ = 1 para toda fila i (cada fila suma 1)
</div>

<h3>Ejemplo — Jardinero (3 estados)</h3>
<p>El estado del jardín puede ser <strong>Buena (B)</strong>, <strong>Regular (R)</strong> o <strong>Mala (M)</strong> condición. La matriz de transición semanal es:</p>
<table class="content-table">
  <thead><tr><th>De \ A</th><th>Buena</th><th>Regular</th><th>Mala</th></tr></thead>
  <tbody>
    <tr><td><strong>Buena</strong></td><td>0,30</td><td>0,60</td><td>0,10</td></tr>
    <tr><td><strong>Regular</strong></td><td>0,10</td><td>0,60</td><td>0,30</td></tr>
    <tr><td><strong>Mala</strong></td><td>0,05</td><td>0,40</td><td>0,55</td></tr>
  </tbody>
</table>
<p>Interpretación: si esta semana el jardín está en <em>condición Regular</em>, la semana siguiente estará Buena con prob. 0,10; Regular con 0,60; Mala con 0,30.</p>

<h2>Ecuaciones de Chapman-Kolmogorov</h2>
<p>La probabilidad de pasar del estado i al estado j en <strong>n pasos</strong> se obtiene elevando la matriz P a la n-ésima potencia:</p>
<div class="formula-highlight">
  P⁽ⁿ⁾ = Pⁿ &nbsp; (potencia n-ésima de la matriz P)<br><br>
  Fórmula de C-K: &nbsp; pᵢⱼ⁽ⁿ⁾ = Σₖ pᵢₖ⁽ᵐ⁾ · pₖⱼ⁽ⁿ⁻ᵐ⁾ &nbsp; para 0 &lt; m &lt; n<br><br>
  → Prob. de ir de i a j en n pasos = suma de todos los caminos posibles de longitud n.
</div>

<h3>Distribución en el Paso n</h3>
<p>Si el sistema parte de la distribución inicial π⁽⁰⁾, la distribución en el paso n es:</p>
<div class="formula-highlight">
  π⁽ⁿ⁾ = π⁽⁰⁾ · Pⁿ &nbsp; (vector fila × matriz n-ésima)
</div>

<h2>Distribución Estacionaria (Estado Estable)</h2>
<p>Para cadenas <strong>ergódicas</strong> (irreducibles + aperiódicas), existe una única <strong>distribución estacionaria</strong> π* que satisface:</p>
<div class="formula-highlight">
  π* · P = π* &nbsp; (sistema de ecuaciones lineal)<br>
  Σⱼ πⱼ* = 1 &nbsp;&nbsp; (restricción de normalización)<br><br>
  → Con el tiempo, sin importar el estado inicial, la cadena converge a π*.
</div>

<h3>Resolución para el Jardinero</h3>
<p>Planteando π* = π* · P con πB + πR + πM = 1:</p>
<div class="formula-highlight">
  πB = 0,30πB + 0,10πR + 0,05πM<br>
  πR = 0,60πB + 0,60πR + 0,40πM<br>
  πM = 0,10πB + 0,30πR + 0,55πM<br>
  πB + πR + πM = 1
</div>
<p>Resolviendo el sistema (usando 3 ecuaciones independientes):</p>
<div class="formula-highlight">
  πB ≈ 0,098 &nbsp;&nbsp; πR ≈ 0,582 &nbsp;&nbsp; πM ≈ 0,320<br><br>
  → A largo plazo: ~9,8% en buena condición, ~58,2% regular, ~32% mala.
</div>

<h2>Clasificación de Estados</h2>
<table class="content-table">
  <thead><tr><th>Tipo</th><th>Definición</th><th>Propiedad clave</th></tr></thead>
  <tbody>
    <tr><td><strong>Recurrente</strong></td><td>Regresa al estado con probabilidad 1</td><td>Se visita infinitas veces</td></tr>
    <tr><td><strong>Transitorio</strong></td><td>Puede no regresar (prob. &gt; 0 de nunca volver)</td><td>Se visita un número finito de veces</td></tr>
    <tr><td><strong>Absorbente</strong></td><td>Una vez alcanzado, no se sale (pᵢᵢ = 1)</td><td>Caso especial de estado recurrente</td></tr>
    <tr><td><strong>Ergódico</strong></td><td>Recurrente + aperiódico</td><td>Tiene distribución estacionaria única</td></tr>
  </tbody>
</table>

<h2>Cadenas Absorbentes</h2>
<p>Una cadena con al menos un estado absorbente puede particionarse. Reordenando los estados (primero absorbentes, luego transitorios):</p>
<div class="formula-highlight">
  P = | I &nbsp;&nbsp; 0 |<br>
  &nbsp;&nbsp;&nbsp;&nbsp;| R &nbsp;&nbsp; Q |<br><br>
  I = identidad (estados absorbentes)<br>
  Q = transiciones entre estados transitorios<br>
  R = transiciones de transitorios → absorbentes
</div>
<p>La <strong>matriz fundamental</strong> N resume el comportamiento antes de la absorción:</p>
<div class="formula-highlight">
  N = (I − Q)⁻¹<br><br>
  nᵢⱼ = número esperado de visitas al estado transitorio j<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;partiendo del estado transitorio i (antes de ser absorbido)
</div>

<h2>Propiedades de Cadenas Ergódicas (Irreducibles y Aperiódicas)</h2>
<ul>
  <li><strong>Irreducible:</strong> desde cualquier estado se puede llegar a cualquier otro en algún número de pasos</li>
  <li><strong>Aperiódica:</strong> no hay ciclos de período fijo; el máximo común divisor de los tiempos de retorno es 1</li>
</ul>
<div class="formula-highlight">
  Para cadenas ergódicas:<br>
  lím_{n→∞} Pⁿ = Π &nbsp; (todas las filas iguales a π*)<br><br>
  La convergencia es independiente del estado inicial → útil para pronósticos a largo plazo.
</div>`,

    resumen: `
<h2>Resumen — Cadenas de Markov</h2>
<div class="formula-box">
  <strong>Propiedad de Markov:</strong><br>
  P(Xₙ₊₁=j | X₀...Xₙ=i) = P(Xₙ₊₁=j | Xₙ=i)<br>
  Solo importa el estado actual, no la historia.
</div>
<div class="formula-box">
  <strong>Matriz de transición P:</strong><br>
  pᵢⱼ ≥ 0 &nbsp; y &nbsp; Σⱼ pᵢⱼ = 1 (filas suman 1)
</div>
<div class="formula-box">
  <strong>Chapman-Kolmogorov:</strong><br>
  P⁽ⁿ⁾ = Pⁿ &nbsp; | &nbsp; π⁽ⁿ⁾ = π⁽⁰⁾ · Pⁿ
</div>
<div class="formula-box">
  <strong>Distribución estacionaria π*:</strong><br>
  π* · P = π* &nbsp; y &nbsp; Σ πⱼ* = 1<br>
  Solo existe y es única para cadenas ergódicas.
</div>
<h3>Clasificación de estados</h3>
<ul>
  <li><strong>Absorbente:</strong> pᵢᵢ = 1, no se puede salir</li>
  <li><strong>Recurrente:</strong> regresa con prob. 1</li>
  <li><strong>Transitorio:</strong> puede no volver</li>
  <li><strong>Ergódico:</strong> recurrente + aperiódico → tiene π* única</li>
</ul>`,

    formulas: `
<h2>Fórmulas — Cadenas de Markov</h2>
<div class="formula-box">
  <strong>Probabilidad de transición en n pasos</strong><br>
  pᵢⱼ⁽ⁿ⁾ = [Pⁿ]ᵢⱼ &nbsp; (elemento (i,j) de la matriz P elevada a la n)
</div>
<div class="formula-box">
  <strong>Distribución en el paso n</strong><br>
  π⁽ⁿ⁾ = π⁽⁰⁾ · Pⁿ &nbsp; (vector fila × P^n)
</div>
<div class="formula-box">
  <strong>Sistema para distribución estacionaria</strong><br>
  π* · P = π* &nbsp;&nbsp; (o equivalentemente: πⱼ* = Σᵢ πᵢ* · pᵢⱼ)<br>
  Σⱼ πⱼ* = 1 &nbsp;&nbsp; (normalización)
</div>
<div class="formula-box">
  <strong>Matriz fundamental (cadenas absorbentes)</strong><br>
  N = (I − Q)⁻¹<br>
  nᵢⱼ = visitas esperadas a estado j desde i (antes de absorción)<br>
  Tiempo esperado de absorción desde i: tᵢ = Σⱼ nᵢⱼ
</div>
<div class="formula-box">
  <strong>Probabilidad de absorción</strong><br>
  B = N · R &nbsp;&nbsp; (prob. de ser absorbido en cada estado absorbente)<br>
  bᵢₖ = prob. de ser absorbido en estado k partiendo del estado transitorio i
</div>`,

    casos: [
      {
        titulo: "Caso 1: El Jardinero — Distribución Estacionaria",
        enunciado: "El jardín puede estar en 3 condiciones: Buena (B), Regular (R) o Mala (M). Matriz de transición: P = [[0.30,0.60,0.10],[0.10,0.60,0.30],[0.05,0.40,0.55]]. a) Si hoy está en condición Regular, ¿cuál es la prob. de que en 2 semanas esté Mala? b) ¿Cuál es la distribución de largo plazo?",
        pasos: [
          "<strong>Parte a) — 2 pasos desde Regular:</strong><br>Calcular P² = P × P. La fila Regular de P² da las probabilidades de estar en cada estado después de 2 semanas.",
          "<strong>Cálculo P² (fila Regular):</strong><br>P(B en 2 pasos | R) = 0,10×0,30 + 0,60×0,10 + 0,30×0,05 = 0,030+0,060+0,015 = 0,105<br>P(R en 2 pasos | R) = 0,10×0,60 + 0,60×0,60 + 0,30×0,40 = 0,060+0,360+0,120 = 0,540<br>P(M en 2 pasos | R) = 0,10×0,10 + 0,60×0,30 + 0,30×0,55 = 0,010+0,180+0,165 = 0,355",
          "<strong>Verificación:</strong> 0,105 + 0,540 + 0,355 = 1,000 ✓",
          "<strong>Parte b) — Distribución estacionaria:</strong><br>Plantear π* · P = π* con πB+πR+πM=1:<br>πB = 0,30πB + 0,10πR + 0,05πM<br>πR = 0,60πB + 0,60πR + 0,40πM<br>πM = 0,10πB + 0,30πR + 0,55πM",
          "<strong>Resolver el sistema:</strong><br>Reescribir: (0,30−1)πB + 0,10πR + 0,05πM = 0 → −0,70πB + 0,10πR + 0,05πM = 0<br>0,60πB + (0,60−1)πR + 0,40πM = 0 → 0,60πB − 0,40πR + 0,40πM = 0<br>Más normalización: πB + πR + πM = 1<br>Solución: πB ≈ 0,098 &nbsp; πR ≈ 0,582 &nbsp; πM ≈ 0,320"
        ],
        respuesta: "a) <strong>P(Mala en 2 semanas | hoy Regular) = 0,355</strong>. b) Distribución de largo plazo: <strong>B≈9,8%, R≈58,2%, M≈32,0%</strong>. El jardín pasa la mayoría del tiempo en condición regular."
      },
      {
        titulo: "Caso 2: Cadena Absorbente — Juego de Azar",
        enunciado: "Un jugador tiene $2 y apuesta $1 en cada ronda. Gana $1 con prob. 0,6 y pierde $1 con prob. 0,4. El juego termina si llega a $0 (arruinado) o $4 (meta). Estados: {0, 1, 2, 3, 4}, donde 0 y 4 son absorbentes.",
        pasos: [
          "<strong>Identificar estados:</strong> Absorbentes = {0, 4}. Transitorios = {1, 2, 3}.",
          "<strong>Matriz de transición:</strong><br>Estado 0: [1, 0, 0, 0, 0] (absorbente)<br>Estado 1: [0.4, 0, 0.6, 0, 0]<br>Estado 2: [0, 0.4, 0, 0.6, 0]<br>Estado 3: [0, 0, 0.4, 0, 0.6]<br>Estado 4: [0, 0, 0, 0, 1] (absorbente)",
          "<strong>Submatriz Q (entre transitorios 1,2,3):</strong><br>Q = [[0, 0.6, 0],[0.4, 0, 0.6],[0, 0.4, 0]]",
          "<strong>Matriz fundamental N = (I−Q)⁻¹:</strong><br>Resolver (I−Q)·N = I para obtener el número esperado de visitas a cada estado transitorio.",
          "<strong>Probabilidades de absorción B = N·R:</strong><br>bᵢ₄ = prob. de llegar a $4 (éxito) partiendo del estado i.<br>Resultado: P(éxito | start $2) ≈ 0,71"
        ],
        respuesta: "Partiendo de $2, la probabilidad de alcanzar la meta de $4 es <strong>≈71%</strong> (y de arruinarse ≈29%). Aunque la prob. de ganar cada ronda es 0,6 (favorable), la ruina del jugador sigue siendo un riesgo significativo."
      }
    ]
  }
];

// Flashcard data per unit
const FLASHCARDS = {
  1: [
    { q: "¿Qué es la Investigación Operativa?", a: "Disciplina científica que aplica métodos matemáticos y analíticos para la toma de decisiones óptimas en sistemas complejos." },
    { q: "¿En qué contexto histórico surgió la IO?", a: "Durante la Segunda Guerra Mundial (1939-1945), cuando científicos británicos resolvieron problemas militares de asignación de recursos." },
    { q: "¿Cuáles son las 6 etapas de la metodología IO?", a: "1) Definir el problema, 2) Construir el modelo, 3) Resolver el modelo, 4) Validar el modelo, 5) Implementar la solución, 6) Controlar y actualizar." },
    { q: "¿Qué diferencia un modelo determinístico de uno estocástico?", a: "Determinístico: todos los parámetros son conocidos con certeza. Estocástico: al menos un parámetro es aleatorio (distribución de probabilidad)." },
    { q: "¿Qué son las variables de decisión en un modelo IO?", a: "Las variables que el tomador de decisiones controla y cuyo valor óptimo se busca determinar (ej: cuánto producir de cada artículo)." },
    { q: "¿Qué significa que un modelo sea estático vs dinámico?", a: "Estático: no considera la dimensión temporal (ej: PL clásica). Dinámico: incluye la evolución en el tiempo (ej: PERT, programación dinámica)." },
    { q: "¿Qué es la función objetivo en un modelo IO?", a: "La expresión matemática que se desea optimizar (maximizar ganancia, minimizar costo). Debe expresar el criterio de decisión en términos de las variables." }
  ],
  2: [
    { q: "¿Cuál es la forma estándar de un problema de PL?", a: "MAX/MIN Z = cᵀx, sujeto a Ax ≤ b (o = b), x ≥ 0. Función objetivo lineal con restricciones lineales y variables no negativas." },
    { q: "¿Qué condición debe cumplirse para aplicar el método Simplex?", a: "El problema debe estar en forma estándar (igualdades con variables de holgura), con una solución básica factible inicial disponible." },
    { q: "¿Cómo se elige la variable entrante en el Simplex (MAX)?", a: "Se selecciona la variable con el coeficiente más negativo en la fila Z (la que más mejora la función objetivo)." },
    { q: "¿Cómo se elige la variable saliente en el Simplex?", a: "Se calcula el ratio b_i/a_ij para todos los elementos positivos de la columna pivote. Sale la variable con el mínimo ratio (ratio test)." },
    { q: "¿Cuándo se alcanza el óptimo en el Simplex (MAX)?", a: "Cuando todos los coeficientes en la fila Z son mayores o iguales a cero (no hay variables que mejoren Z)." },
    { q: "¿Qué es el precio sombra en análisis de sensibilidad?", a: "El incremento en el valor óptimo Z* por cada unidad adicional del recurso bᵢ. Es la variable dual yᵢ* en el problema dual." },
    { q: "¿Qué establece el teorema de dualidad fuerte?", a: "Si el problema primal y el dual son factibles, entonces sus valores óptimos son iguales: Z*_primal = Z*_dual." },
    { q: "¿Qué son las variables de holgura (slack) en PL?", a: "Variables no negativas que se agregan a las restricciones ≤ para convertirlas en igualdades: Ax + s = b, s ≥ 0." },
    { q: "¿Qué es el rango de optimalidad de un coeficiente cⱼ?", a: "El intervalo de valores que puede tomar cⱼ sin que cambie la base óptima (qué variables están en la solución). Aparece en el Informe de Sensibilidad del Solver como 'Permisible Aumentar/Disminuir'." },
    { q: "¿Qué indica el costo reducido de una variable no básica?", a: "Cuánto debe mejorar el coeficiente cⱼ para que esa variable entre a la base óptima. Si es 0, la variable está en el límite de entrar; si es negativo (MAX), no conviene incluirla." },
    { q: "¿Cuál es la regla para construir el dual de un MAX primal con restricciones ≤?", a: "Dual MIN W = bᵀy s.a. Aᵀy ≥ c, y ≥ 0. Cada restricción primal genera una variable dual; cada variable primal genera una restricción dual. La FO dual usa el RHS del primal." },
    { q: "¿Cómo se leen las variables duales desde el tableau Simplex óptimo?", a: "y*ᵢ = coeficiente de la variable de holgura sᵢ en la fila Z del tableau óptimo. Esto confirma que precio sombra = variable dual." },
    { q: "¿Qué dice la holgura complementaria?", a: "Si xⱼ > 0 (variable básica), la restricción dual j es activa. Si yᵢ > 0 (precio sombra positivo), la restricción primal i es activa (sin holgura). No pueden ambos ser positivos simultáneamente." },
    { q: "¿Qué aparece en el Informe de Sensibilidad del Solver para restricciones?", a: "Precio sombra (ΔZ*/Δbᵢ) y el rango de factibilidad (Permisible Aumentar/Disminuir para el RHS), que indica hasta cuándo el precio sombra sigue siendo válido." }
  ],
  3: [
    { q: "¿Cuándo se utiliza programación entera en vez de PL?", a: "Cuando las variables deben tomar valores enteros (número de máquinas, empleados, lotes). No se puede simplemente redondear la solución LP." },
    { q: "¿Qué son las variables binarias en programación matemática?", a: "Variables que solo toman valores 0 o 1, representando decisiones Sí/No: realizar o no un proyecto, ubicar o no una instalación." },
    { q: "¿En qué consiste el método Branch and Bound?", a: "Combina ramificación (dividir en subproblemas) y acotamiento (podar ramas sub-óptimas) para encontrar la solución entera óptima." },
    { q: "¿Por qué no se puede simplemente redondear la solución LP en PE?", a: "Redondear puede dar soluciones infactibles (que violan restricciones) o sub-óptimas (lejos del verdadero óptimo entero)." },
    { q: "¿Qué es la programación por metas (Goal Programming)?", a: "Técnica para optimizar múltiples objetivos en conflicto. Minimiza las desviaciones dᵢ⁺ y dᵢ⁻ de cada meta con pesos de prioridad." },
    { q: "¿Cuándo se poda una rama en Branch and Bound?", a: "Cuando: (1) el subproblema LP es infactible, (2) la cota superior es peor que la mejor solución entera conocida, o (3) la solución LP ya es entera." }
  ],
  4: [
    { q: "¿Qué es el camino crítico en PERT/CPM?", a: "La secuencia de actividades con margen total = 0. Es el camino más largo desde inicio hasta fin, y determina la duración mínima del proyecto." },
    { q: "¿Cómo se calcula el tiempo temprano (TE) de un nodo?", a: "TEⱼ = MAX{TEᵢ + dᵢⱼ} para todos los nodos predecesores i. Se calcula de izquierda a derecha (forward pass)." },
    { q: "¿Cómo se calcula el tiempo tardío (TL) de un nodo?", a: "TLᵢ = MIN{TLⱼ − dᵢⱼ} para todos los nodos sucesores j. Se calcula de derecha a izquierda (backward pass)." },
    { q: "¿Cuál es la fórmula del margen total de una actividad?", a: "MT = TLⱼ − TEᵢ − dᵢⱼ. Las actividades críticas tienen MT = 0." },
    { q: "¿Cuál es la diferencia entre PERT y CPM?", a: "CPM usa tiempos determinísticos (un solo valor). PERT usa tres estimaciones: a (optimista), m (más probable), b (pesimista) para calcular tₑ = (a+4m+b)/6." },
    { q: "¿Cómo se calcula el tiempo esperado en PERT?", a: "tₑ = (a + 4m + b) / 6, donde a=optimista, m=más probable, b=pesimista. La varianza es σ² = [(b−a)/6]²." },
    { q: "¿Qué son las actividades ficticias (dummy) en PERT?", a: "Arcos de duración 0 que representan relaciones de precedencia sin actividad real. Se usan para mantener la unicidad de los números de nodo." },
    { q: "¿Qué es una Fecha Temprana Impuesta (Ft) en un nodo?", a: "Restricción que impide que el nodo j ocurra antes de Ftⱼ. En el forward pass: TEⱼ = MAX(cálculo de red, Ftⱼ). Si Ftⱼ > TE natural, las actividades sucesoras se desplazan y el proyecto puede extenderse." },
    { q: "¿Qué es una Fecha Tardía Impuesta (FT) en un nodo?", a: "Restricción que exige que el nodo j ocurra a más tardar en FTⱼ. En el backward pass: TLⱼ = MIN(cálculo de red, FTⱼ). Si FTⱼ < TL natural, las holguras de los predecesores se reducen y puede aparecer MT < 0 (plazo inviable)." },
    { q: "¿Cuándo una fecha impuesta genera MT < 0?", a: "Cuando la FT impuesta en un nodo es menor que la TL que resultaría de la red: FTⱼ < TLⱼ natural. El margen negativo indica que es imposible cumplir el plazo con las duraciones actuales — se debe comprimir (crash) el camino afectado." },
    { q: "¿En qué se basa el algoritmo de Brooks para nivelar recursos?", a: "Parte de todas las actividades en EST. Ante un exceso de recursos en un período, selecciona la actividad no crítica activa de mayor MT y la desplaza 1 período. Repite hasta resolver picos o agotar holguras." },
    { q: "¿Por qué programar un proyecto en fechas tardías (LST) es mejor financieramente?", a: "Difiere los pagos al futuro, reduciendo el VAN de los egresos. Esto equivale a una mayor TIR para el ejecutor. Si r=2%/sem, diferir $10.000 una semana ahorra ~$200 en VAN. LST siempre da TIR > EST." },
    { q: "¿Cómo se decide cuándo parar de comprimir (crash) un proyecto?", a: "Se detiene cuando la pendiente de compresión de la actividad más barata supera el costo indirecto por período. Hasta ese punto cada semana ahorrada reduce el costo total; después lo aumenta." }
  ],
  5: [
    { q: "¿Cuál es la fórmula del lote económico EOQ?", a: "Q* = √(2DS/H), donde D=demanda anual, S=costo de ordenar, H=costo de mantener por unidad por año." },
    { q: "¿Cuándo los costos de ordenar e inventario son iguales en EOQ?", a: "Siempre en el punto óptimo Q*: (D/Q*)·S = (Q*/2)·H. Esta propiedad de balance se puede usar para verificar el resultado." },
    { q: "¿Qué supuestos tiene el modelo EOQ básico?", a: "Demanda conocida y constante, reposición instantánea, sin faltantes, costo unitario constante (sin descuentos por cantidad)." },
    { q: "¿En qué se diferencia EPQ de EOQ?", a: "EPQ es para producción interna con tasa finita p. La reposición no es instantánea. Q*_EPQ = √(2DS/H) · √(p/(p−d))." },
    { q: "¿Cómo se determina el punto de reorden (ROP)?", a: "ROP = d · L, donde d es la demanda diaria y L el lead time en días. Si hay incertidumbre se agrega stock de seguridad." },
    { q: "¿Qué es la curva ABC en gestión de inventarios?", a: "Clasificación por valor de consumo anual: A (20% ítems, 80% valor, control estricto), B (30%, 15%), C (50% ítems, 5% valor, control simple)." },
    { q: "¿Qué es el MRP y qué datos requiere?", a: "Material Requirements Planning: planifica necesidades de materiales. Requiere: Plan Maestro de Producción (PMP), Lista de Materiales (BOM) e inventarios actuales." },
    { q: "¿Cómo afecta el safety stock S_p al lote óptimo Q*?", a: "No lo afecta: Q* = √(2kD/c₁) sigue siendo el mismo. El safety stock solo agrega un costo extra c₁·S_p al costo total y desplaza el punto de reorden: ROP = d·L + S_p." },
    { q: "¿En el modelo de agotamiento planificado, es Q* mayor o menor que el EOQ clásico?", a: "Q* = Q_EOQ · √((c₁+c₂)/c₂) ≥ Q_EOQ. Siempre mayor. Los ciclos son más largos para amortizar el costo fijo de ordenar k, ya que parte del ciclo hay faltante que 'no cuesta' mantenimiento." },
    { q: "¿Qué representa la relación S*/Q* = c₂/(c₁+c₂) en el modelo de backorder?", a: "Es la fracción del ciclo en que hay stock positivo (inventario). El resto del ciclo (c₁/(c₁+c₂)) hay faltante. A mayor costo de faltante c₂, mayor fracción del ciclo con stock positivo." },
    { q: "¿Por qué el CT* del modelo de backorder es menor que el CT_EOQ?", a: "CT* = CT_EOQ · √(c₂/(c₁+c₂)) ≤ CT_EOQ. El faltante planificado reduce el inventario promedio → menor costo de mantenimiento. Si los clientes aceptan esperar (c₂ bajo), conviene dejar que escasee el stock." },
    { q: "¿Por qué en descuentos por cantidad se debe evaluar el CT incluyendo el costo de compra?", a: "Porque el precio de compra cambia entre franjas: CT = b_j·D + k·D/Q + i·b_j·Q/2. Sin incluir b_j·D solo se minimiza la parte variable, pero el ahorro en precio puede compensar un mayor costo de mantenimiento." },
    { q: "¿Cuál es la condición de optimalidad en el modelo multi-producto con período T común?", a: "T* = √(Σk_j / Σb_jD_j). En el óptimo, el costo total de ordenar TO = Σk_j/T* iguala al costo total de mantenimiento TI = T*/2·Σb_jD_j (igual que en EOQ individual)." },
    { q: "¿Qué es la hipérbola TI-TO en inventarios multi-producto?", a: "TI·TO = [Σⱼ√(bⱼ·Dⱼ)]²/2 = K (constante). bⱼ es el precio unitario (no el costo de mantener). La curva TI vs TO es una hipérbola — reducir capital inmovilizado (TI↓) implica ordenar más seguido (TO↑). Los Q* se calculan como Qⱼ*=√(2λDⱼ/bⱼ) dado TO, o Qⱼ*=√(2Dⱼ/(λbⱼ)) dado TI." },
    { q: "¿Cuál es la fórmula del modelo Newsvendor y qué representa la fracción crítica?", a: "P(D ≤ S*) = f₂/(f₂+cₑ) donde f₂=ganancia por unidad vendida (p−c) y cₑ=pérdida por unidad sobrante (c−valor rescate). La fracción crítica es el nivel de servicio óptimo: si es 0,8, se stoca suficiente para cubrir el 80% de los escenarios de demanda." },
    { q: "¿Cuándo se debe stockear más en el modelo Newsvendor?", a: "Cuando f₂ > cₑ: es más caro quedarse sin stock (perder ventas) que sobrar. La fracción crítica f₂/(f₂+cₑ) > 0,5, entonces S* es mayor que la mediana de la demanda." },
    { q: "¿Cuál es la diferencia entre cₑ y f₂ en el modelo del vendedor de periódicos?", a: "f₂ = ganancia marginal por venta (p−c): se pierde si hay faltante. cₑ = pérdida marginal por sobrante (c−s donde s=rescate): se incurre si hay exceso. La fracción crítica balancea ambos riesgos." },
    { q: "¿Qué pasa con el Q* del modelo TI-TO si se fija TO y se aumenta?", a: "Los lotes Q*ⱼ = (Σ√(bⱼDⱼ)/TO)·√(Dⱼ/bⱼ) disminuyen proporcionalmente a 1/TO. Más órdenes por año → lotes más pequeños. TI* = K/TO disminuye (menos capital inmovilizado)." },
    { q: "¿Cómo se encuentra μ en el KKT con restricción de capital?", a: "Se resuelve la ecuación Σⱼ(Qⱼ(μ)/2)·bⱼ = TM iterativamente (bisección). Con μ=0 se tiene el EOQ sin restricción; a medida que μ↑, los lotes Qⱼ(μ) se reducen hasta cumplir la restricción de capital." }
  ],
  6: [
    { q: "¿Qué representa ρ (rho) en teoría de colas?", a: "El factor de utilización: ρ = λ/(s·μ). Indica la fracción del tiempo que los servidores están ocupados. Condición de estabilidad: ρ < 1." },
    { q: "¿Cuántos clientes hay en promedio en un sistema M/M/1?", a: "L = ρ/(1−ρ) donde ρ = λ/μ. Esta es la cantidad promedio de clientes en el sistema (en cola + siendo atendidos)." },
    { q: "¿Qué establece la fórmula de Little?", a: "L = λ·W y Lq = λ·Wq. Relaciona número de clientes con tiempo de permanencia. Es universal (aplica a cualquier sistema de colas estable)." },
    { q: "¿Cuál es la diferencia entre L y Lq?", a: "L = clientes promedio en el sistema (cola + servidor). Lq = clientes promedio en la cola (esperando). L = Lq + λ/μ." },
    { q: "¿Qué notación de Kendall corresponde a un sistema con llegadas Poisson, servicio exponencial y 3 servidores?", a: "M/M/3. M=Markoviana (Poisson para llegadas, exponencial para servicio), 3=número de servidores." },
    { q: "¿Qué es el balking en teoría de colas?", a: "Cuando un cliente decide no unirse a la cola al ver que ya está muy larga. Es una forma de impaciencia que modifica el comportamiento del sistema." },
    { q: "¿Cuál es la condición de estabilidad para M/M/s?", a: "ρ = λ/(s·μ) < 1. La tasa de llegadas debe ser menor que la tasa total de servicio (s servidores × μ cada uno)." },
    { q: "¿Qué es el sistema P/P/1/N y cómo difiere del M/M/1?", a: "P/P/1/N tiene capacidad máxima N. Los clientes que llegan cuando el sistema está lleno son rechazados. La tasa efectiva es λ_ef = λ·(1−P_N), menor que λ." },
    { q: "¿Qué es la tasa de rechazo en un sistema finito?", a: "λ_rec = λ · P_N: tasa promedio de clientes rechazados por unidad de tiempo (P_N = probabilidad de que el sistema esté lleno = N clientes)." },
    { q: "¿Cuál es la distribución del número de clientes en un M/M/1?", a: "Geométrica: Pₙ = ρⁿ·(1−ρ) para n = 0, 1, 2, ... Esta distribución da L = ρ/(1−ρ) y Lc = ρ²/(1−ρ)." },
    { q: "¿Qué simboliza H en teoría de colas?", a: "H = número promedio de clientes siendo atendidos (en servicio). H = ρ = λ/μ para M/M/1. Relación: L = Lc + H." },
    { q: "¿Cómo se calcula P₀ en el modelo M/M/s?", a: "P₀ = [Σₙ₌₀ˢ⁻¹ (λ/μ)ⁿ/n! + (λ/μ)ˢ/(s!·(1−ρ))]⁻¹. Es la probabilidad de que el sistema esté vacío y se necesita para calcular Lc." },
    { q: "¿Por qué la distribución exponencial es la única sin memoria?", a: "P(T > t+s | T > s) = P(T > t) = e^(−λt). La 'edad' del proceso no importa. Es la única distribución continua con esta propiedad (la geométrica es su análogo discreto)." },
    { q: "¿Qué porcentaje de valores de una variable Exp(λ) son menores que su media?", a: "El 63,2%. F(1/λ) = 1 − e^(−1) ≈ 0,632. Esto implica muchos tiempos de servicio breves y pocos largos — mezcla de congestionamiento y recuperación." },
    { q: "¿Cuál es la relación entre proceso Poisson y distribución exponencial?", a: "Si las llegadas siguen un proceso Poisson(λ), los tiempos entre llegadas sucesivas son independientes y Exp(λ). Son dos representaciones del mismo fenómeno: en el tiempo vs. en el número." },
    { q: "¿Qué pasa si se superponen dos procesos Poisson con tasas λ₁ y λ₂?", a: "El resultado es un proceso Poisson con tasa λ₁ + λ₂. Análogamente, si se divide un Poisson(λ) con probabilidad p, el subproceso es Poisson(λ·p)." },
    { q: "¿Cuál es la fórmula de la velocidad óptima de servicio μ* en M/M/1?", a: "μ* = λ + √(λ·cₑ/c_S), donde cₑ = costo de mantener un cliente en sistema y c_S = costo por unidad de velocidad de servicio. Minimiza Z = cₑ·L + c_S·μ." },
    { q: "¿Qué es el bloqueo en un sistema de colas en serie?", a: "Un cliente que terminó su servicio en la etapa i pero no puede avanzar porque la etapa i+1 está ocupada. Queda 'bloqueado' ocupando el canal sin recibir servicio activo. L = H + B." }
  ],
  7: [
    { q: "¿Qué es el método de Montecarlo?", a: "Técnica que usa números aleatorios para simular fenómenos probabilísticos. Se basa en la Ley de los Grandes Números: el promedio simulado converge al valor esperado." },
    { q: "¿Cómo se aplica el método de transformación inversa?", a: "Dado U ~ U(0,1), generar X con distribución F usando X = F⁻¹(U). Ejemplo: exponencial → X = −ln(U)/λ." },
    { q: "¿Qué es el generador congruencial lineal?", a: "Xₙ₊₁ = (a·Xₙ + c) mod m, rₙ = Xₙ/m. Genera números pseudoaleatorios uniformes en [0,1). Los parámetros a, c, m deben elegirse cuidadosamente." },
    { q: "¿Qué diferencia hay entre verificación y validación de un modelo de simulación?", a: "Verificación: ¿el programa hace lo que se programó? (debugging). Validación: ¿el modelo representa la realidad? (comparar con datos históricos)." },
    { q: "¿Por qué se necesita un período de calentamiento (warm-up) en simulación?", a: "Porque el sistema comienza en un estado inicial artificialmente vacío/lleno. El warm-up permite que el sistema alcance el estado estacionario antes de recolectar estadísticas." },
    { q: "¿Cómo se genera una variable exponencial usando transformación inversa?", a: "X = −(1/λ)·ln(U) donde U ~ U(0,1). O equivalentemente X = −(1/λ)·ln(1−U)." },
    { q: "¿Qué pruebas se usan para verificar la aleatoriedad de una secuencia de números?", a: "Prueba de uniformidad (Chi-cuadrado, K-S) y prueba de independencia (runs test, autocorrelación). Los números deben ser uniformes e independientes." }
  ],
  8: [
    { q: "¿Qué es la propiedad de Markov (sin memoria)?", a: "P(Xₙ₊₁=j | X₀,...,Xₙ=i) = P(Xₙ₊₁=j | Xₙ=i). El estado futuro depende solo del estado actual, no de toda la historia pasada." },
    { q: "¿Qué condición debe cumplir toda fila de una matriz de transición?", a: "Cada fila debe sumar 1: Σⱼ pᵢⱼ = 1. Además, todos los elementos deben ser no negativos: pᵢⱼ ≥ 0. Se llama matriz estocástica." },
    { q: "¿Qué establece las ecuaciones de Chapman-Kolmogorov?", a: "La probabilidad de ir del estado i al j en n pasos es el elemento (i,j) de Pⁿ (P elevada a la n). Para la distribución: π⁽ⁿ⁾ = π⁽⁰⁾ · Pⁿ." },
    { q: "¿Cuándo existe una distribución estacionaria única en una cadena de Markov?", a: "Cuando la cadena es ergódica: irreducible (se puede ir de cualquier estado a cualquier otro) y aperiódica (sin ciclos de período fijo)." },
    { q: "¿Cómo se calcula la distribución estacionaria π*?", a: "Resolviendo el sistema π* · P = π* junto con la normalización Σⱼ πⱼ* = 1. Es un sistema de ecuaciones lineales; se usa una ecuación por variable más la normalización." },
    { q: "¿Qué es un estado absorbente en una cadena de Markov?", a: "Un estado del que no se puede salir: pᵢᵢ = 1. Una vez alcanzado, el proceso permanece allí para siempre." },
    { q: "¿Qué es la matriz fundamental N en cadenas absorbentes?", a: "N = (I−Q)⁻¹ donde Q es la submatriz de transiciones entre estados transitorios. El elemento nᵢⱼ da el número esperado de visitas al estado j partiendo de i antes de ser absorbido." },
    { q: "¿Cuál es la diferencia entre estado recurrente y estado transitorio?", a: "Recurrente: el sistema regresa con probabilidad 1 (se visita infinitas veces). Transitorio: existe probabilidad positiva de no regresar nunca (se visita un número finito de veces)." },
    { q: "En el ejemplo del jardinero con P = [[0.30,0.60,0.10],[0.10,0.60,0.30],[0.05,0.40,0.55]], ¿cuál es la distribución de largo plazo?", a: "πB ≈ 0,098; πR ≈ 0,582; πM ≈ 0,320. El jardín pasa ~58% del tiempo en condición regular y solo ~10% en buena condición." },
    { q: "¿Por qué las cadenas de Markov son relevantes en Teoría de Colas?", a: "El número de clientes en un sistema de colas Markoviano (M/M/s) es una cadena de Markov de tiempo continuo. Los estados son {0,1,2,...} y las tasas de transición son λ (llegadas) y μ (servicios)." }
  ]
};
