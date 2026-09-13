/* TeleVerso Educativo · Saberes y Pensamiento Científico · PPA 1
   Revisión de nivel cognitivo para 3.º de Telesecundaria.
   Eleva los retos hacia análisis de datos, argumentación con evidencia,
   modelación de variación y toma de decisiones sustentables. */
(() => {
  if (typeof missionCatalog === 'undefined') return;
  const FIELD = 'saberes';
  const TITLE = 'Saberes y Pensamiento Científico · PPA 1';

  const setMeta = (m, desc) => Object.assign(m, {
    field: FIELD,
    fieldTitle: TITLE,
    level: '3.º de Telesecundaria',
    cognitiveLevel: 'aplicar-analizar-evaluar',
    desc
  });

  if (missionCatalog.spc1) {
    const m = missionCatalog.spc1;
    setMeta(m, 'Analiza gráficas como evidencia: elige representaciones, detecta escalas engañosas, calcula proporciones y limita conclusiones según muestra y contexto.');
    m.qs = [
      ['Un registro semanal de consumo de agua es 118, 120, 119, 121, 122, 123, 124 y 126 L. Dos gráficas usan los mismos datos: una inicia el eje y en 0 y otra en 117. ¿Cuál interpretación es más rigurosa?',['La segunda prueba un aumento enorme','Ambas contienen los mismos datos, pero la escala de la segunda magnifica visualmente el cambio','La primera oculta los datos','Ninguna gráfica puede usarse'],1,'La escala modifica la impresión visual; el cambio real debe juzgarse con los valores y unidades.'],
      ['En una muestra de 120 residuos se contaron 36 de plástico. ¿Qué porcentaje representa el plástico?',['18%','30%','36%','43.2%'],1,'36/120 = 0.30, es decir, 30% de la muestra.'],
      ['Un equipo quiere comparar la cantidad de residuos orgánicos, vidrio, papel y plástico recolectados en un día. ¿Qué representación es más directa?',['Barras con categorías y la misma unidad','Histograma de intervalos de masa sin separar material','Gráfica circular sin indicar total','Línea temporal sin fechas'],0,'Las barras permiten comparar cantidades de categorías discretas usando una escala común.'],
      ['Se midió la masa de 80 envases y se agrupó en intervalos de 0-20 g, 20-40 g, 40-60 g y 60-80 g. ¿Qué gráfica corresponde mejor?',['Histograma','Circular por nombres de envase','Línea del tiempo','Pictograma sin escala'],0,'Una variable cuantitativa continua agrupada en intervalos se representa adecuadamente con un histograma.'],
      ['Una gráfica afirma que “el consumo bajó 50%”, pero no muestra valores iniciales ni finales. ¿Qué dato es indispensable pedir?',['Los valores y unidades que permiten verificar el porcentaje','El color usado','La tipografía','El nombre del programa de diseño'],0,'Sin valores de referencia no puede verificarse el porcentaje anunciado.'],
      ['Dos grupos reportan 24 y 30 botellas desechables, pero el primero observó 40 estudiantes y el segundo 100. ¿Qué comparación es más justa?',['Comparar sólo 24 contra 30','Calcular una razón o porcentaje respecto al tamaño de cada grupo','Sumar 24+30 y dividir entre dos','Elegir el grupo con más estudiantes'],1,'Cuando los tamaños son distintos conviene normalizar mediante una tasa, razón o porcentaje.'],
      ['Una encuesta escolar a 28 estudiantes concluye: “En todo el municipio, 70% usa botella reutilizable”. ¿Cuál es el principal problema?',['La conclusión generaliza más allá de la muestra observada','Falta una gráfica circular','28 es un número par','Los porcentajes no se pueden usar en encuestas'],0,'Una muestra escolar no representa automáticamente a todo un municipio.'],
      ['En una gráfica de líneas, el eje horizontal tiene semanas 1, 2, 4, 8 colocadas a la misma distancia. ¿Qué riesgo existe?',['Puede distorsionar la percepción de la razón de cambio','Convierte la variable en cualitativa','Hace que todos los datos sean incorrectos','Elimina las unidades del eje vertical automáticamente'],0,'Si los intervalos numéricos son desiguales pero se dibujan iguales, la pendiente visual puede ser engañosa.'],
      ['Un mural compara consumo de agua en litros con consumo eléctrico en kWh usando la misma altura de barras y un solo eje sin unidades. ¿Qué corrección es necesaria?',['Indicar unidades y usar una representación que no mezcle magnitudes incompatibles sin explicación','Cambiar el color de una serie','Agregar imágenes decorativas','Ordenar alfabéticamente las barras'],0,'Magnitudes con unidades distintas requieren escalas y etiquetas claras para evitar comparaciones falsas.'],
      ['Una gráfica circular muestra 45% orgánicos, 35% reciclables y 30% “otros”. ¿Qué debes detectar primero?',['Los porcentajes suman 110%, por lo que hay un error o categorías superpuestas no explicadas','La gráfica necesita más colores','45% siempre debe ser el sector mayor','Los datos cualitativos no aceptan porcentajes'],0,'Si las categorías son excluyentes, los porcentajes deben sumar 100%; si se superponen, debe explicarse.'],
      ['¿Qué evidencia permite sostener mejor que una reducción de residuos ocurrió de forma consistente durante seis semanas?',['Una serie temporal con datos de cada semana y unidades comparables','Una fotografía de un solo día','Una opinión sin registro','Un porcentaje sin indicar el total'],0,'Una serie temporal permite observar continuidad, tendencia y posibles variaciones.'],
      ['Una gráfica muestra correlación entre temperatura y consumo eléctrico. ¿Qué afirmación es válida sólo con esa gráfica?',['Existe una asociación en esos datos, pero no se demuestra por sí sola causalidad','La temperatura causa todo el consumo','El consumo eléctrico determina la temperatura','No existe relación porque son variables distintas'],0,'La asociación observada no basta para establecer causalidad; se requieren más evidencias y control de factores.'],
      ['Un equipo cambia la escala vertical entre dos gráficas para que cada una “se vea mejor”. ¿Qué práctica mejora la comparación?',['Mantener escalas comparables o advertir claramente cualquier cambio','Ocultar las etiquetas','Usar sólo el valor máximo','Eliminar el cero siempre'],0,'La comparabilidad depende de escalas transparentes y consistentes.'],
      ['¿Cuál es una variable cuantitativa adecuada para estudiar consumo responsable en el aula?',['Litros de agua usados por día','Tipo de residuo','Marca preferida','Material del envase'],0,'Los litros producen valores numéricos medibles que pueden analizarse estadísticamente.'],
      ['¿Cuál conclusión está mejor delimitada?',['En los cinco días medidos, el grupo redujo en promedio 3 L diarios respecto a su línea base','Toda la escuela ahorrará siempre 3 L','El programa funciona en cualquier comunidad','La reducción prueba que una sola acción causó todo el cambio'],0,'La primera conclusión respeta el periodo y alcance de los datos disponibles.']
    ];
  }

  if (missionCatalog.spc2) {
    const m = missionCatalog.spc2;
    setMeta(m, 'Resuelve un crucigrama de estadística mediante pistas aplicadas; después usa los conceptos para comparar datos y justificar una decisión.');
    m.words = [
      {n:1,dir:'V',word:'MEDIA',clue:'Si los consumos son 6, 8, 10 y 12 L, esta medida se obtiene al dividir 36 entre 4.',r:1,c:8},
      {n:2,dir:'H',word:'MODA',clue:'En 2, 2, 3, 4, 4, 4 y 5, esta medida toma el valor 4 por ser el dato más frecuente.',r:3,c:6},
      {n:3,dir:'H',word:'VARIABLE',clue:'Característica registrada en cada observación, como litros por día o tipo de residuo.',r:5,c:7},
      {n:3,dir:'V',word:'VARIACION',clue:'Cambio de una magnitud que analizas al comparar consumo entre días o semanas.',r:5,c:7},
      {n:4,dir:'H',word:'DISPERSION',clue:'Propiedad que distingue dos conjuntos con la misma media cuando uno está mucho más separado de su centro.',r:7,c:2},
      {n:4,dir:'V',word:'DECISION',clue:'Elección que en este proyecto debe justificarse con datos, contexto y consecuencias.',r:7,c:2},
      {n:5,dir:'H',word:'GRAFICA',clue:'Representación que necesita título, escala, unidades y fuente para funcionar como evidencia.',r:9,c:5},
      {n:6,dir:'H',word:'MEDIANA',clue:'En los datos ordenados 1, 3, 4, 7 y 9, esta medida vale 4.',r:11,c:4}
    ];
  }

  if (missionCatalog.spc3) {
    const m = missionCatalog.spc3;
    setMeta(m, 'Calcula y compara media, mediana, moda, rango y desviación media; decide qué medida describe mejor conjuntos con valores atípicos o distinta dispersión.');
    m.qs = [
      ['Datos A: 4,4,5,5,5,6,6. ¿Cuál es la media aproximada?',['4.0','5.0','5.5','6.0'],1,'La suma es 35 y 35/7 = 5.'],
      ['Datos B: 1,3,5,5,5,7,9. ¿Cuál es la mediana?',['3','5','6','7'],1,'Al ordenar siete datos, el cuarto valor es 5.'],
      ['A y B tienen media 5. A va de 4 a 6 y B de 1 a 9. ¿Qué conclusión es más sólida?',['B presenta mayor dispersión','A presenta mayor dispersión','Tener la misma media implica igual comportamiento','No se pueden comparar rangos'],0,'El rango de B es 8 y el de A es 2; B está más disperso.'],
      ['Datos: 3,3,3,3,9. ¿Qué medida representa mejor el valor típico si quieres reducir el efecto del 9?',['Mediana','Media únicamente','Rango','Suma'],0,'La mediana es menos sensible a un valor extremo que la media.'],
      ['Cinco mediciones tienen media 12. Cuatro de ellas son 9, 11, 13 y 14. ¿Cuál falta?',['10','12','13','15'],2,'El total debe ser 60; 9+11+13+14=47, así que falta 13.'],
      ['Datos: 2,4,6. La media es 4. ¿Cuál es la desviación media respecto a 4?',['1','1.33 aproximadamente','2','4'],1,'Las desviaciones absolutas son 2,0,2; su promedio es 4/3 ≈ 1.33.'],
      ['Datos: 2,2,4,6,6. ¿Cuál combinación es correcta?',['Media 4 y mediana 4','Media 5 y mediana 4','Media 4 y moda única 4','Media 6 y rango 2'],0,'La suma es 20, media 4; el dato central es 4. Hay dos modas: 2 y 6.'],
      ['Conjunto C: 2,2,2,6,6,6,11. ¿Qué efecto tiene el 11 sobre la media comparada con la mediana?',['Eleva más la media que la mediana','Reduce ambas a cero','Hace que la mediana sea 11','No cambia ninguna medida'],0,'El valor alto desplaza la media, mientras la mediana sigue determinada por la posición central.'],
      ['Dos procesos tienen la misma media. ¿Qué dato adicional es más útil para decidir cuál es más consistente?',['Una medida de dispersión','El color de la tabla','El número de letras de su nombre','La moda siempre'],0,'La consistencia se evalúa observando qué tan separados están los valores respecto al centro.'],
      ['En 10,10,10,15,15, ¿cuál es la moda?',['10','15','12','No existe'],0,'10 aparece tres veces y 15 dos veces.'],
      ['Un conjunto cambia de 4,5,6,7 a 4,5,6,17. ¿Qué medida cambia más?',['La media','La mediana','La moda, que antes era 6','Ninguna'],0,'El valor 17 eleva considerablemente la media; la mediana cambia mucho menos.'],
      ['Para comparar consumo entre dos grupos de tamaños distintos, ¿qué procedimiento mejora la interpretación?',['Usar promedios o tasas con la misma unidad y revisar dispersión','Comparar sólo los totales','Eliminar los valores pequeños','Usar siempre la moda'],0,'Los totales dependen del tamaño del grupo; tasas/promedios y dispersión permiten una comparación más justa.'],
      ['Si todos los valores de un conjunto aumentan exactamente 3 unidades, ¿qué ocurre con la media y el rango?',['La media aumenta 3 y el rango no cambia','Ambos aumentan 3','La media no cambia y el rango aumenta 3','Ambos se duplican'],0,'Trasladar todos los datos por la misma cantidad desplaza el centro, pero conserva las distancias entre máximo y mínimo.'],
      ['Dos conjuntos tienen mediana 8. Uno tiene rango 2 y otro rango 14. ¿Qué puedes afirmar?',['Tienen centro similar, pero el segundo es mucho más variable','Son idénticos','El primero tiene necesariamente mayor media','La mediana permite conocer todos los datos'],0,'Una medida central similar no implica igual dispersión.'],
      ['¿Cuál redacción usa la estadística con mayor rigor?',['La media fue 6.2 L y los datos variaron entre 4.8 y 8.1 L; por eso reportamos también dispersión','La media demuestra que todos consumieron 6.2 L','El promedio elimina la necesidad de mirar los datos','Un solo valor describe cualquier conjunto perfectamente'],0,'Interpretar una medida requiere acompañarla de variación y contexto.']
    ];
  }

  if (missionCatalog.spc4) {
    const m = missionCatalog.spc4;
    setMeta(m, 'Ordena procesos y aportaciones con criterio histórico; distingue saber acumulado, fecha documentada y cambio metodológico en el desarrollo de la ciencia.');
    m.items = [
      'Uso sistemático del fuego y transformación de materiales en sociedades antiguas.',
      'Filósofos griegos discuten la composición de la materia y Demócrito propone el atomismo.',
      'El Códice De la Cruz-Badiano registra saberes medicinales nahuas (1552).',
      'Robert Boyle impulsa una química experimental y una definición operativa de elemento (siglo XVII).',
      'Lavoisier usa mediciones cuantitativas y sistemas cerrados para estudiar la combustión (siglo XVIII).',
      'Mendeléiev organiza elementos y deja huecos para otros aún no descubiertos (1869).',
      'Marie Curie y colaboradores investigan fenómenos de radioactividad (finales del siglo XIX).',
      'Luis Miramontes sintetiza 19-noretisterona, aporte relevante a los anticonceptivos orales (siglo XX).',
      'Mario Molina y colaboradores explican el daño de los CFC a la capa de ozono (1974).',
      'Francisco Bolívar y un equipo producen proteínas humanas en bacterias mediante ingeniería genética (1977).'
    ];
  }

  if (missionCatalog.spc5) {
    const m = missionCatalog.spc5;
    setMeta(m, 'Memorama conceptual: relaciona personas, métodos y aportes; cada pareja debe poder explicarse con una consecuencia o evidencia, no sólo memorizarse.');
    m.pairs = [
      ['Robert Boyle','Química experimental, teoría corpuscular y criterio para definir elemento'],
      ['Lavoisier','Sistema cerrado, medición cuantitativa y conservación de la masa'],
      ['Marie-Anne Paulze','Participación en el trabajo de Lavoisier con reconocimiento público limitado en su época'],
      ['Marie Curie','Investigaciones sobre radioactividad y elementos radiactivos'],
      ['Mendeléiev','Tabla periódica organizada por regularidades y huecos para elementos aún no descubiertos'],
      ['Gilbert N. Lewis','Electrones de valencia, enlace covalente y estructuras de Lewis'],
      ['Luis Miramontes','Síntesis de 19-noretisterona vinculada con anticonceptivos orales'],
      ['Evangelina Villegas','Variedades de maíz con proteína de alta calidad y propósito nutricional'],
      ['Mario Molina','Efecto de los CFC sobre la capa de ozono y repercusión ambiental internacional'],
      ['Francisco Bolívar','Producción de proteínas humanas en bacterias mediante ingeniería genética'],
      ['Demócrito','Atomismo: propuesta antigua de partículas mínimas de la materia'],
      ['De la Cruz-Badiano','Registro de saberes medicinales nahuas en 1552']
    ];
  }

  if (missionCatalog.spc6) {
    const m = missionCatalog.spc6;
    setMeta(m, 'Evalúa afirmaciones sobre historia de la ciencia: distingue dato, inferencia, colaboración, evidencia experimental y límites de una fuente.');
    m.qs = [
      ['Lavoisier pesó un sistema cerrado antes y después de una combustión y obtuvo la misma masa total. ¿Qué conclusión está mejor sustentada?',['En ese sistema la masa total se conservó durante la reacción','Toda sustancia pierde masa al quemarse','El flogisto explica el resultado','La masa depende del color del recipiente'],0,'La comparación antes-después en un sistema cerrado respalda la conservación de la masa.'],
      ['Una teoría predice que un metal debe perder masa al quemarse, pero mediciones repetidas muestran que gana masa al reaccionar con el aire. ¿Qué actitud científica es adecuada?',['Revisar la teoría a la luz de la evidencia','Ocultar las mediciones','Conservar la teoría sin cambios por tradición','Eliminar los datos que contradicen'],0,'La evidencia reproducible puede obligar a revisar explicaciones previas.'],
      ['Decir “Lavoisier hizo todo solo” es problemático porque…',['simplifica procesos colectivos y omite colaboraciones como la de Marie-Anne Paulze','la química no usa personas','la conservación de la masa fue inventada por internet','ninguna ciencia usa instrumentos'],0,'La historia de la ciencia incluye colaboración, instrumentos, contextos y reconocimiento desigual.'],
      ['Mendeléiev dejó huecos en su organización de los elementos. ¿Qué muestra esa decisión?',['Que una clasificación puede generar predicciones comprobables','Que conocía todos los elementos','Que la tabla no dependía de propiedades','Que los huecos eran sólo decorativos'],0,'Los huecos expresaban la expectativa de elementos aún no conocidos a partir de regularidades observadas.'],
      ['¿Qué relación está mejor documentada en el material?',['Mario Molina: CFC y deterioro de la capa de ozono','Mario Molina: invención de la tabla periódica','Marie Curie: síntesis de 19-noretisterona','Miramontes: teoría del flogisto'],0,'El libro vincula a Molina con el estudio del efecto de los CFC sobre la capa de ozono.'],
      ['Una biografía afirma que “un científico cambió al mundo”. ¿Qué pregunta vuelve esa frase investigable?',['¿Qué aportación específica, evidencia y consecuencia documentada se le atribuyen?','¿Era famoso?','¿Cuántas fotografías existen?','¿Qué color usaba en el laboratorio?'],0,'Convertir una frase general en una afirmación verificable exige precisar aporte, evidencia y efectos.'],
      ['Los datos simulados de una actividad escolar…',['sirven para practicar análisis, pero no deben presentarse como cifras históricas reales','demuestran por sí solos una tendencia nacional','pueden reemplazar cualquier fuente','son más confiables que una medición real sólo por estar ordenados'],0,'El origen y propósito de los datos determinan qué conclusiones pueden sostenerse.'],
      ['Una muestra de 12 recursos escolares menciona más hombres que mujeres. ¿Qué conclusión es más rigurosa?',['Describe esos 12 recursos; para hablar de reconocimiento histórico general se necesita una investigación más amplia','Prueba definitivamente que ninguna mujer aportó a la ciencia','Demuestra igualdad total','Permite generalizar a todos los libros del mundo'],0,'El alcance de la conclusión debe corresponder al alcance de la muestra.'],
      ['¿Qué evidencia fortalece un sociodrama sobre conservación de la masa?',['Mostrar el problema, el procedimiento de medición y la interpretación del resultado','Decir sólo “Lavoisier fue importante”','Inventar cifras sin fuente','Evitar explicar el experimento'],0,'Una representación científica debe conectar pregunta, procedimiento, dato e interpretación.'],
      ['¿Qué afirmación distingue mejor aporte científico de reconocimiento social?',['Una contribución puede ser relevante aunque la persona no recibiera reconocimiento equivalente en su época','Sólo cuenta un aporte si recibió un premio','El género determina la capacidad científica','La fama es una medida de validez experimental'],0,'El reconocimiento histórico y la calidad de una contribución no son la misma variable.'],
      ['El descubrimiento de una asociación entre CFC y deterioro de ozono influyó en regulaciones. ¿Qué cadena es más razonable?',['Investigación → evidencia publicada → discusión científica/social → decisiones y acuerdos','Opinión → ley inmediata sin evidencia','Premio → fenómeno natural','Publicidad → verdad científica'],0,'Las decisiones públicas pueden apoyarse en evidencia acumulada y discusión institucional.'],
      ['Una fuente secundaria resume un experimento, pero no cita de dónde obtuvo los datos. ¿Qué conviene hacer?',['Buscar una fuente trazable y contrastar la información','Aceptar el resumen sin revisión','Copiarlo como evidencia primaria','Eliminar cualquier dato numérico'],0,'La trazabilidad permite verificar de dónde provienen afirmaciones y datos.'],
      ['¿Qué diferencia hay entre dato e interpretación?',['El dato registra una observación o medición; la interpretación explica qué significa dentro de un contexto','Son exactamente lo mismo','La interpretación siempre es más objetiva que el dato','Un dato no necesita unidad ni fuente'],0,'Separar observación de explicación ayuda a evaluar argumentos científicos.'],
      ['Una correlación histórica entre dos cambios tecnológicos…',['no demuestra por sí sola que uno causó al otro','demuestra causalidad automáticamente','hace innecesarias las fuentes','elimina cualquier influencia social'],0,'Establecer causalidad requiere mecanismos, temporalidad y evidencia adicional.'],
      ['¿Cuál cierre es más apropiado para un sociodrama científico?',['“Con la evidencia disponible sostenemos esta explicación y reconocemos sus límites”','“Esta historia demuestra todo para siempre”','“No importa la fuente”','“Gana quien hable más fuerte”'],0,'El lenguaje científico responsable expresa el alcance y los límites de la evidencia.']
    ];
  }

  if (missionCatalog.spc7) {
    const m = missionCatalog.spc7;
    setMeta(m, 'Búsqueda conceptual de sustentabilidad: localiza términos, interpreta sus definiciones y usa al menos tres para construir relaciones causa-efecto o problema-acción.');
    m.words = ['RECURSO','CONSUMO','RESIDUO','AGUA','SUELO','ENERGIA','RECICLAJE','SUSTENTABLE','EROSION','BIODIVERSIDAD','INDUSTRIA','AGRICULTURA'];
  }

  if (missionCatalog.spc8) {
    const m = missionCatalog.spc8;
    setMeta(m, 'Modela covariación con tablas, expresiones y razones de cambio; interpreta pendiente e intercepto, detecta no linealidad y limita extrapolaciones.');
    m.qs = [
      ['Si y=5x representa botellas desechables evitadas y x son semanas, ¿qué expresa el 5?',['Razón de cambio: 5 botellas por semana','Valor inicial de 5 semanas','Número total de botellas','Porcentaje de reciclaje'],0,'El coeficiente de x indica cuánto cambia y por cada unidad que aumenta x.'],
      ['Un consumo se modela con y=2.5x+18, donde x son días y y litros acumulados. ¿Qué representa 18?',['El valor de y cuando x=0','La razón de cambio','El número de días','La media de todos los consumos'],0,'En un modelo lineal y=mx+b, b es el valor inicial cuando x=0.'],
      ['Tabla: x=1,2,3,4; y=4,6,8,10. ¿Qué modelo corresponde?',['y=2x+2','y=x+4','y=4x','y=x²'],0,'Las primeras diferencias de y son 2 y el par (1,4) cumple 4=2(1)+2.'],
      ['Dos planes tienen modelos A: y=3x+20 y B: y=5x+4. ¿Para qué valor de x producen el mismo y?',['4','6','8','12'],2,'3x+20=5x+4; 16=2x; x=8.'],
      ['En los datos x=0,1,2,3 y y=2,5,10,17, las diferencias de y son 3,5,7. ¿Qué indica esto?',['La razón de cambio no es constante','Es una proporcionalidad directa','La pendiente siempre es 3','y no depende de x'],0,'Las diferencias cambian, por lo que no es un modelo lineal de razón constante.'],
      ['Si una gráfica de consumo de agua tiene pendiente -4 L/día, ¿qué significa el signo negativo?',['El consumo disminuye 4 L por cada día, en el intervalo modelado','El consumo es imposible','Se consumen -4 días','La gráfica no tiene unidades'],0,'El signo indica dirección del cambio; la unidad completa es litros por día.'],
      ['Una tabla muestra temperatura y consumo eléctrico aumentando juntos. ¿Qué puedes afirmar directamente?',['Hay covariación en esos datos; la causalidad requiere más evidencia','La temperatura causa todo el consumo','El consumo causa la temperatura','No existe relación'],0,'Covariación describe cambio conjunto, no prueba causalidad.'],
      ['Modelo y=0.75x. Si x=48, ¿cuánto vale y?',['36','48.75','64','0.75'],0,'0.75×48 = 36.'],
      ['Una relación proporcional directa debe cumplir, además de razón constante, que…',['pase por el origen: cuando x=0, y=0','tenga intercepto distinto de cero','sea siempre decreciente','use porcentajes'],0,'Una proporcionalidad directa se modela como y=kx.'],
      ['Un equipo usa y=6x para semanas 1 a 6 y predice x=200. ¿Qué precaución es necesaria?',['Una extrapolación tan lejana puede fallar si las condiciones cambian','Toda relación lineal es válida para cualquier x','Sólo debe cambiar el color de la gráfica','La predicción es exacta por definición'],0,'Los modelos se validan en un dominio y contexto; extrapolar mucho más allá puede ser injustificado.'],
      ['Una llave pierde 1.5 L cada 10 minutos. ¿Cuál es la razón de pérdida por minuto?',['0.15 L/min','1.5 L/min','15 L/min','10 L/min'],0,'1.5/10 = 0.15 litros por minuto.'],
      ['Si una variable y cambia +12 cuando x cambia +3, ¿cuál es la razón de cambio promedio?',['3','4','9','15'],1,'Δy/Δx = 12/3 = 4 unidades de y por cada unidad de x.'],
      ['Dos gráficas lineales tienen pendientes 2 y 5 con la misma unidad. ¿Cuál cambia más rápidamente?',['La de pendiente 5','La de pendiente 2','Cambian igual','No se pueden comparar pendientes'],0,'La magnitud de la pendiente indica la rapidez de cambio por unidad de x.'],
      ['Para pasar de una tabla a una gráfica de covariación correctamente debes…',['representar cada par (x,y) respetando escala y unidades','sumar todas las x y todas las y','ordenar por color','usar siempre una gráfica circular'],0,'Cada fila de la tabla corresponde a un par ordenado del plano.'],
      ['Si el modelo de residuos y=4x+12 usa x=semanas y y=kg acumulados, ¿qué afirmación es correcta?',['Hay 12 kg iniciales y el modelo aumenta 4 kg por semana','El valor inicial es 4 kg','La razón de cambio es 12 kg/semana','A las 3 semanas siempre hay 12 kg'],0,'El intercepto es 12 kg y la pendiente es 4 kg por semana.']
    ];
  }

  if (missionCatalog.spc9) {
    const m = missionCatalog.spc9;
    setMeta(m, 'Evalúa prácticas de consumo con criterios de ciclo de vida, seguridad, infraestructura local, uso de recursos y evidencia; varias decisiones dependen del contexto.');
    m.cats = ['Responsable / favorable','Depende / requiere evidencia','Insustentable / problemática'];
    m.items = [
      ['Reparar un aparato seguro y funcional antes de reemplazarlo sólo por una versión nueva.',0,'Alargar la vida útil puede evitar extracción de materiales, fabricación y residuos innecesarios.'],
      ['Reemplazar de inmediato un refrigerador antiguo por uno eficiente sin comparar consumo, vida útil restante ni impacto de fabricación.',1,'Puede convenir o no; se necesita comparar ahorro energético, durabilidad y costo ambiental del reemplazo.'],
      ['Comprar tres productos “porque estaban en oferta” aunque no se necesitaban.',2,'El consumo innecesario incrementa uso de materiales, energía y generación potencial de residuos.'],
      ['Reutilizar agua de lavado para riego sin considerar detergentes, salinidad, plantas ni condiciones sanitarias.',1,'La reutilización depende de la calidad del agua y del uso previsto; no toda agua residual es segura para cualquier fin.'],
      ['Separar materiales reciclables de acuerdo con lo que realmente acepta el sistema local y mantenerlos limpios cuando se requiere.',0,'La separación es más efectiva cuando corresponde con la infraestructura de recuperación y reciclaje disponible.'],
      ['Quemar residuos al aire libre para reducir el volumen de basura.',2,'La combustión abierta puede liberar contaminantes y traslada el problema al aire y a las cenizas.'],
      ['Usar una botella reutilizable durante mucho tiempo y evitar comprar envases de un solo uso.',0,'La reutilización prolongada distribuye el impacto de fabricación entre muchos usos y puede reducir residuos.'],
      ['Comprar cada mes una nueva botella reutilizable sólo por cambiar de diseño.',1,'El beneficio depende del número de usos; reemplazarla frecuentemente puede anular parte de la ventaja.'],
      ['Elegir un fertilizante únicamente porque dice “natural”, sin revisar efectos sobre suelo, agua y dosis.',1,'La etiqueta no basta; la decisión requiere evidencia sobre impacto y manejo.'],
      ['Aplicar rotación de cultivos y uso eficiente del agua para conservar suelo y reducir presión sobre recursos.',0,'El libro presenta estas prácticas como estrategias de sustentabilidad agrícola.'],
      ['Mantener luces encendidas sin necesidad porque los focos son eficientes.',2,'La eficiencia reduce consumo por unidad de servicio, pero no justifica usar energía innecesariamente.'],
      ['Instalar una fuente renovable sin evaluar ubicación, mantenimiento, materiales ni demanda energética.',1,'Las energías renovables también requieren evaluación de contexto e impactos; no son “impacto cero” por definición.'],
      ['Planear compras, priorizar necesidades reales y comparar durabilidad antes de adquirir un producto.',0,'La prevención del consumo innecesario actúa antes de que se generen residuos.'],
      ['Desperdiciar alimentos porque “son biodegradables”.',2,'Que un residuo sea biodegradable no elimina los recursos, energía, suelo y agua usados para producirlo.'],
      ['Compostar residuos orgánicos en condiciones adecuadas y usar el material resultante en suelo cuando es pertinente.',0,'El aprovechamiento de residuos orgánicos puede reducir desechos y devolver materia al suelo si se maneja correctamente.']
    ];
  }

  if (missionCatalog.spc10) {
    const m = missionCatalog.spc10;
    setMeta(m, 'Reto integrador de tercer grado: combina estadística, lectura crítica de gráficas, historia de la ciencia, modelación de variación y sustentabilidad para justificar decisiones.');
    m.qs = [
      ['Grupo A registra 8,9,10,11,12 L y grupo B 2,6,10,14,18 L. Ambos tienen media 10. ¿Qué afirmación es correcta?',['B tiene mayor dispersión aunque la media sea igual','A y B son equivalentes','A tiene mayor rango','La dispersión no aporta información'],0,'A tiene rango 4 y B rango 16; una misma media puede ocultar comportamientos muy distintos.'],
      ['Cinco días tienen media de 24 kg de residuos. Cuatro valores son 20, 22, 25 y 27. ¿Cuál es el quinto?',['24','26','28','30'],1,'El total debe ser 120; los cuatro conocidos suman 94, así que falta 26.'],
      ['Un mural afirma “bajamos 40% el consumo” sin indicar consumo inicial, final ni periodo. ¿Qué debes pedir primero?',['Valores, unidades y periodo para verificar el porcentaje','Más colores','Una fotografía','El nombre de quien imprimió el mural'],0,'Un porcentaje necesita una base y un periodo de comparación.'],
      ['Una encuesta de un grupo escolar encuentra 65% de uso de recipientes reutilizables. ¿Cuál conclusión es válida?',['Describe al grupo encuestado; generalizar a toda la comunidad requiere una muestra adecuada','Prueba el comportamiento de todo el municipio','Demuestra causalidad','No permite calcular porcentajes'],0,'La inferencia debe respetar población y muestra.'],
      ['Una gráfica temporal usa semanas 1, 2, 4 y 8 con espacios idénticos. ¿Qué error puede introducir?',['Distorsiona visualmente la razón de cambio porque los intervalos de tiempo no son iguales','Convierte litros en porcentajes','Hace imposible usar líneas','Elimina el valor máximo'],0,'El eje numérico debe respetar intervalos para interpretar pendientes.'],
      ['En un sistema cerrado, la masa antes y después de una reacción es 250.0 g dentro de la precisión del instrumento. ¿Qué principio apoya el resultado?',['Conservación de la masa','Teoría del flogisto','Desaparición de la materia','Ley de la moda'],0,'La igualdad de masa total antes y después concuerda con la conservación de la masa.'],
      ['¿Qué formulación histórica es más rigurosa?',['La química moderna se construyó con aportes acumulados, debates, instrumentos y trabajo de distintas personas y culturas','Una sola persona inventó toda la química','La alquimia y la química moderna usan exactamente el mismo método','Los premios determinan qué conocimiento es verdadero'],0,'El material presenta el desarrollo científico como un proceso histórico y colectivo.'],
      ['Mendeléiev dejó huecos en su tabla. ¿Qué valor científico tuvo esa decisión?',['Permitió anticipar la existencia de elementos no conocidos a partir de regularidades','Demostró que faltaban datos sin utilidad','Eliminó la necesidad de experimentar','Probó que la masa atómica no importaba'],0,'Una clasificación puede generar predicciones que después se contrastan con evidencia.'],
      ['Modelo de residuos: y=4x+12, con x semanas y y kg. ¿Cuántos kg modela para x=7?',['28','36','40','52'],2,'4(7)+12=40 kg.'],
      ['En y=4x+12, ¿qué interpretación conjunta es correcta?',['Hay 12 kg iniciales y el aumento modelado es 4 kg por semana','Hay 4 kg iniciales y 12 kg por semana','El modelo es proporcional directo','La pendiente no tiene unidades'],0,'El intercepto es el valor inicial y la pendiente expresa kg/semana.'],
      ['Dos acciones siguen A: y=2x+30 y B: y=5x+6. ¿Cuándo tienen el mismo valor?',['x=4','x=6','x=8','x=12'],2,'2x+30=5x+6; 24=3x; x=8.'],
      ['Una tabla tiene aumentos sucesivos de 2, 4, 6 y 8. ¿Qué puedes concluir?',['La razón de cambio no es constante; no debe modelarse automáticamente con una recta','Es proporcional directa','La pendiente es siempre 2','Los datos no pueden graficarse'],0,'Las primeras diferencias variables indican cambio no constante.'],
      ['Temperatura y consumo eléctrico aumentan juntos en cuatro observaciones. ¿Qué conclusión es responsable?',['Hay asociación en esos datos, pero se necesita más evidencia para afirmar causalidad','La temperatura causa todo el consumo','El consumo causa la temperatura','La correlación es imposible'],0,'Correlación y causalidad no son equivalentes.'],
      ['¿Qué decisión de consumo exige más información antes de clasificarla como sustentable?',['Cambiar un aparato funcional por otro eficiente sin analizar ciclo de vida','Apagar luces innecesarias','Evitar una compra impulsiva','Reparar cuando es seguro y viable'],0,'El reemplazo puede ahorrar energía en uso, pero también implica fabricación, materiales y residuos.'],
      ['Una práctica se llama “sustentable” en publicidad. ¿Qué evidencia la respalda mejor?',['Datos sobre uso de recursos, emisiones/residuos, duración y contexto comparados con alternativas','El color verde del empaque','La palabra “eco”','La popularidad del producto'],0,'La sustentabilidad se evalúa con impactos y condiciones, no con etiquetas.'],
      ['Un equipo encuentra una innovación tradicional descrita por varias generaciones de una comunidad. ¿Cómo conviene representarla en la línea del tiempo?',['Como saber colectivo contextualizado, con fuentes y sin adjudicarlo a una sola persona sin evidencia','Como invento de la primera persona entrevistada','Sin indicar fuente','Como dato exacto aunque no haya fecha documentada'],0,'Los saberes comunitarios pueden ser acumulativos y requieren cuidado al atribuir autoría y fecha.'],
      ['¿Qué combinación fortalece más un periódico mural científico sobre residuos?',['Dato con fuente + gráfica con unidades + interpretación limitada + propuesta viable','Eslogan + imágenes decorativas','Porcentaje sin denominador + conclusión absoluta','Una opinión sin medición'],0,'La evidencia, su representación y una propuesta razonada forman una comunicación científica más sólida.'],
      ['Tras equivocarte en un reactivo, ¿qué evidencia mejor aprendizaje de tercer grado?',['Explicar el supuesto incorrecto, corregir el procedimiento y transferir la regla a un caso nuevo','Memorizar la letra de la opción','Repetir hasta acertar al azar','Ocultar el error'],0,'La metacognición implica identificar por qué falló el razonamiento y aplicar la corrección a otra situación.']
    ];
  }

  Object.entries(missionCatalog).forEach(([key, mission]) => {
    if (/^spc\d+$/i.test(key) || /^spc\d+$/i.test(String(mission?.id || ''))) {
      mission.field = FIELD;
      mission.fieldTitle = TITLE;
      mission.level = mission.level || '3.º de Telesecundaria';
    }
  });
})();
