/* TeleVerso Educativo · Ética, Naturaleza y Sociedades · nivel 3.º de Telesecundaria
   Completa y eleva el banco de 10 misiones del campo formativo.
   Ejes del tablero existente: pasado y fuentes, agua y territorio, igualdad y participación. */
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD = 'ens';
  const TITLE = 'Ética, Naturaleza y Sociedades';
  const meta = (m, desc) => Object.assign(m, {
    field: FIELD,
    fieldTitle: TITLE,
    level: '3.º de Telesecundaria',
    cognitiveLevel: 'aplicar-analizar-evaluar',
    desc
  });

  // ---------------------------------------------------------------------------
  // M1 · Evidencia, interpretación y propuesta
  // ---------------------------------------------------------------------------
  missionCatalog.m1 ||= {id:'m1',type:'classify',icon:'🔎'};
  meta(missionCatalog.m1, 'Analiza afirmaciones sobre fuentes históricas, agua, territorio e igualdad; distingue evidencia observable, interpretación razonada y propuesta de acción.');
  missionCatalog.m1.title = 'R1 · Detectives de evidencia y argumentos';
  missionCatalog.m1.statements = [
    {text:'En el acta municipal de 1985 se registra la apertura de un pozo para abastecer a tres barrios.',cat:'E',exp:'Es evidencia documental: la afirmación describe información que puede localizarse y verificarse en una fuente.'},
    {text:'La apertura del pozo resolvió para siempre todos los problemas de agua de la localidad.',cat:'I',exp:'Es una interpretación excesiva: una sola obra no demuestra que el problema quedara resuelto de manera permanente.'},
    {text:'Comparemos actas, testimonios y datos de consumo antes de concluir por qué cambió el acceso al agua.',cat:'P',exp:'Es una propuesta metodológica para contrastar fuentes antes de formular una conclusión.'},
    {text:'En la fotografía aparecen recipientes alineados junto a una toma comunitaria.',cat:'E',exp:'Describe un rasgo observable de la imagen sin atribuir todavía una causa.'},
    {text:'Las personas de la fotografía esperaban porque el servicio era insuficiente.',cat:'I',exp:'Es una inferencia posible, pero debe justificarse con contexto, fecha y otras fuentes.'},
    {text:'Registremos quién administra el servicio, cuánto cuesta y qué zonas reciben agua con menor frecuencia.',cat:'P',exp:'Propone reunir información pertinente para analizar desigualdades de acceso.'},
    {text:'Dos testimonios coinciden en que durante una sequía se redujo el suministro semanal.',cat:'E',exp:'La coincidencia entre testimonios es un dato de la investigación; aún debe valorarse su alcance y corroboración.'},
    {text:'Si dos testimonios coinciden, la versión es necesariamente verdadera en todos sus detalles.',cat:'I',exp:'La coincidencia fortalece una hipótesis, pero no elimina la necesidad de contrastar otras evidencias.'},
    {text:'El mapa escolar muestra que dos colonias están más lejos del depósito principal que las demás.',cat:'E',exp:'Es información espacial observable en el mapa, si la escala y ubicación son confiables.'},
    {text:'La distancia al depósito es la única causa posible de un servicio desigual.',cat:'I',exp:'Es una explicación monocausal; también pueden intervenir infraestructura, presión, gestión, costos o disponibilidad.'},
    {text:'Organicemos una mesa de diálogo con criterios de derecho al agua, viabilidad y equidad para comparar soluciones.',cat:'P',exp:'Es una propuesta de deliberación con criterios explícitos.'},
    {text:'El reglamento escolar prohíbe excluir a una persona de una actividad por su origen o condición.',cat:'E',exp:'Describe una norma verificable en un documento.'},
    {text:'Como existe una regla contra la discriminación, ya no puede haber prácticas discriminatorias.',cat:'I',exp:'Confunde la existencia de una norma con su cumplimiento efectivo.'},
    {text:'Revisemos participación, trato y resultados para identificar barreras que una regla escrita no haya eliminado.',cat:'P',exp:'Propone analizar la igualdad real, no sólo la formal.'},
    {text:'En una encuesta, 8 de 30 estudiantes reportaron haber observado burlas por forma de hablar.',cat:'E',exp:'Es un dato de esa muestra; debe conservarse el tamaño y contexto al interpretarlo.'},
    {text:'Ese resultado demuestra que exactamente la misma proporción se presenta en todas las escuelas.',cat:'I',exp:'Generaliza una muestra limitada a una población más amplia sin evidencia suficiente.'},
    {text:'Antes de publicar conclusiones, distingamos qué datos son de nuestra escuela y cuáles provienen de fuentes externas.',cat:'P',exp:'Es una propuesta de trazabilidad y delimitación del alcance de la evidencia.'},
    {text:'Una fuente fue escrita décadas después del hecho que describe y cita documentos de la época.',cat:'E',exp:'Es una característica verificable de la fuente; después debe evaluarse cómo influye en su valor y límites.'}
  ];

  // ---------------------------------------------------------------------------
  // M2 · Memorama conceptual con vocabulario de tercer grado
  // ---------------------------------------------------------------------------
  missionCatalog.m2 ||= {id:'m2',type:'memory',icon:'🧠'};
  meta(missionCatalog.m2, 'Relaciona conceptos clave para analizar fuentes, cambio histórico, territorio, agua, desigualdad, derechos, equidad y participación social.');
  missionCatalog.m2.title = 'R2 · Memorama de conceptos que dejan huella';
  missionCatalog.m2.pairs = [
    {c:'Fuente primaria',d:'Testimonio, objeto o documento producido en el periodo o proceso que se estudia.'},
    {c:'Fuente secundaria',d:'Interpretación elaborada posteriormente a partir de fuentes y estudios previos.'},
    {c:'Corroboración',d:'Contraste entre evidencias independientes para valorar coincidencias, diferencias y confiabilidad.'},
    {c:'Contexto histórico',d:'Condiciones sociales, políticas, económicas y culturales necesarias para interpretar un hecho.'},
    {c:'Cambio y continuidad',d:'Análisis de lo que se transforma y lo que permanece a lo largo del tiempo.'},
    {c:'Causalidad histórica',d:'Explicación que considera varias causas, condiciones y consecuencias, no una sola razón automática.'},
    {c:'Cuenca',d:'Territorio en el que el agua escurre hacia un mismo cauce o punto de salida.'},
    {c:'Acuífero',d:'Formación subterránea capaz de almacenar y transmitir agua.'},
    {c:'Disponibilidad de agua',d:'Cantidad de agua existente y accesible bajo determinadas condiciones naturales y sociales.'},
    {c:'Derecho al agua',d:'Derecho a disponer de agua suficiente, salubre, aceptable, accesible y asequible.'},
    {c:'Igualdad',d:'Principio de igual dignidad y derechos para todas las personas.'},
    {c:'Equidad',d:'Medidas diferenciadas para reducir barreras y alcanzar condiciones más justas.'},
    {c:'Discriminación',d:'Trato desfavorable o exclusión basada en características o condiciones que vulnera derechos.'},
    {c:'Participación ciudadana',d:'Intervención informada en asuntos colectivos mediante diálogo, organización, vigilancia y propuestas.'}
  ];

  // ---------------------------------------------------------------------------
  // M3-M10 · Retos de análisis y toma de decisiones
  // ---------------------------------------------------------------------------
  Object.assign(missionCatalog, {
    m3:{id:'m3',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'analizar-evaluar',title:'R3 · Fuente bajo la lupa',type:'ens-quiz',icon:'📜',desc:'Evalúa autoría, propósito, contexto, sesgo, corroboración y alcance antes de usar una fuente como evidencia.',qs:[
      ['Una carta escrita en 1915 describe escasez de alimentos en una localidad. ¿Qué pregunta ayuda más a evaluar su alcance?',['Quién la escribió, a quién, con qué propósito y qué otras fuentes describen la situación','Si la letra es bonita','Cuántas páginas tiene','Si fue encontrada primero'],0,'Autoría, destinatario, propósito y contraste permiten valorar qué puede sostener la fuente.'],
      ['Dos periódicos del mismo día describen una protesta de manera opuesta. ¿Qué procedimiento es más riguroso?',['Comparar lenguaje, propietarios, fuentes citadas y otros registros del hecho','Elegir el que coincida con tu opinión','Promediar los titulares','Descartar ambos automáticamente'],0,'Las diferencias pueden revelar perspectivas, intereses y selección distinta de evidencias.'],
      ['Un testimonio oral fue registrado 50 años después de un acontecimiento. ¿Cómo debe usarse?',['Como memoria valiosa que debe contextualizarse y contrastarse','Como copia exacta e infalible del pasado','Como fuente sin ningún valor','Sólo si coincide con un libro'],0,'La memoria aporta experiencia y sentido, pero puede cambiar con el tiempo y requiere contexto.'],
      ['Una fotografía muestra a veinte trabajadores, todos hombres. ¿Qué conclusión NO es válida por sí sola?',['Que en esa imagen aparecen veinte hombres','Que ninguna mujer participó jamás en ese tipo de trabajo','Que la escena debe fecharse y contextualizarse','Que conviene buscar otras fuentes'],1,'La ausencia en una imagen no prueba ausencia total en el proceso histórico.'],
      ['Una fuente oficial reporta que una obra benefició a toda la población. ¿Qué evidencia complementaria conviene buscar?',['Datos por zona, costos, testimonios y registros de acceso','Sólo otra fuente oficial idéntica','Una imagen decorativa','El logotipo institucional'],0,'Desagregar y contrastar permite comprobar si el beneficio fue uniforme o desigual.'],
      ['¿Qué diferencia hay entre hecho e interpretación histórica?',['El hecho se apoya en evidencia verificable; la interpretación propone significado o explicación a partir de evidencias','No existe diferencia','La interpretación siempre es falsa','El hecho no requiere fuentes'],0,'La historia trabaja con evidencias y también con explicaciones argumentadas sobre ellas.'],
      ['Si una fuente omite a un grupo social, ¿qué debes concluir?',['Que el grupo no existía','Que la omisión es un dato a investigar y puede reflejar límites o intereses de la fuente','Que la fuente debe destruirse','Que toda omisión es intencional'],1,'Las ausencias también pueden orientar preguntas sobre representación y poder.'],
      ['Un libro escolar resume un proceso de veinte años en un párrafo. ¿Qué riesgo debes considerar?',['Que simplifique conflictos, cambios internos o diferencias regionales','Que todo resumen sea falso','Que el proceso duró un día','Que las fechas no importan'],0,'Los resúmenes son útiles, pero pueden ocultar complejidad y diversidad.'],
      ['Tres fuentes coinciden en una fecha pero discrepan en las causas. ¿Qué significa?',['La fecha puede estar bien corroborada y las causas siguen siendo objeto de interpretación','Todas las fuentes son falsas','Las causas no pueden estudiarse','Debe elegirse la explicación más corta'],0,'Distintos aspectos de un proceso pueden tener grados diferentes de certeza.'],
      ['¿Cuál es una inferencia histórica razonable?',['Una explicación compatible con varias evidencias y que reconoce sus límites','Una afirmación que ignora evidencia contraria','Una opinión sin fuente','Una conclusión universal a partir de un caso'],0,'La inferencia debe poder justificarse y permanecer abierta a revisión.'],
      ['Una tabla de población no indica cómo se levantaron los datos. ¿Qué falta para valorar su confiabilidad?',['Método, fecha, cobertura y definiciones usadas','Más colores','Una foto del autor','Un título llamativo'],0,'La calidad de los datos depende de cómo se produjeron y qué población cubren.'],
      ['¿Qué práctica evita el anacronismo?',['Interpretar decisiones considerando las ideas y condiciones de su época, sin imponer automáticamente categorías actuales','Juzgar todo el pasado con una sola regla actual','Eliminar las comparaciones temporales','Ignorar consecuencias'],0,'Contextualizar no significa justificar, sino comprender condiciones históricas antes de evaluar.']
    ]},
    m4:{id:'m4',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'aplicar-analizar',title:'R4 · Ruta de investigación histórica',type:'ens-sequence',icon:'🧭',desc:'Ordena un proceso de investigación: pregunta, búsqueda, crítica de fuentes, contraste, explicación y comunicación responsable.',items:[
      'Delimitar una pregunta histórica concreta y explicar por qué es relevante.',
      'Identificar qué tipos de fuentes podrían aportar evidencias sobre la pregunta.',
      'Registrar procedencia, autoría, fecha y condiciones de cada fuente localizada.',
      'Analizar qué afirma cada fuente y distinguir datos, silencios e interpretaciones.',
      'Valorar propósito, contexto, posibles sesgos y límites de cada evidencia.',
      'Contrastar fuentes para encontrar coincidencias, contradicciones y vacíos.',
      'Organizar cambios, continuidades, causas, condiciones y consecuencias relevantes.',
      'Formular una explicación provisional que no exceda el alcance de la evidencia.',
      'Revisar la explicación frente a evidencia que la contradiga o matice.',
      'Comunicar resultados citando fuentes y señalando qué preguntas quedan abiertas.'
    ]},
    m5:{id:'m5',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'aplicar-analizar-evaluar',title:'R5 · Agua: territorio y datos',type:'ens-quiz',icon:'💧',desc:'Analiza disponibilidad, infraestructura, distribución y uso del agua sin confundir existencia física con acceso equitativo.',qs:[
      ['Una región recibe lluvias abundantes, pero varios barrios tienen servicio irregular. ¿Qué conclusión es más adecuada?',['La disponibilidad natural no garantiza por sí sola acceso suficiente; también influyen infraestructura y gestión','Si llueve, todos tienen agua siempre','La lluvia no tiene relación alguna','El único factor es la distancia'],0,'Acceso y disponibilidad son conceptos relacionados pero distintos.'],
      ['Un acuífero extrae 130 unidades por año y se recarga con 95. ¿Qué tendencia preocupa?',['Existe un déficit de 35 unidades anuales si esas cifras se mantienen','Hay un excedente de 225','La recarga supera la extracción','No se puede comparar'],0,'Extraer más de lo que se recarga puede indicar sobreexplotación.'],
      ['Dos colonias consumen 5000 L diarios. A tiene 50 hogares y B 100. ¿Qué dato permite comparar mejor?',['Consumo por hogar','Sólo el total de litros','El nombre de la colonia','El color del tinaco'],0,'Normalizar por número de hogares evita comparar de forma engañosa poblaciones de distinto tamaño.'],
      ['Una fuga pierde 12 L por minuto durante 3 horas. ¿Cuántos litros se pierden?',['2160 L','36 L','720 L','4320 L'],0,'12 × 60 × 3 = 2160 litros.'],
      ['¿Qué información es más útil para priorizar reparación de fugas?',['Caudal perdido, duración, población afectada, costo y viabilidad de reparación','Sólo una fotografía','El tamaño del letrero','La antigüedad del barrio por sí sola'],0,'La priorización requiere impacto, magnitud y viabilidad.'],
      ['Una comunidad propone captar lluvia. ¿Qué condición debe evaluarse antes de afirmar cuánto aportará?',['Precipitación, superficie de captación, almacenamiento y demanda','Sólo el color del techo','Número de calles','Altura de los árboles'],0,'La captación depende de variables físicas y de la demanda que se busca cubrir.'],
      ['Si el servicio llega menos horas a una zona periférica, ¿qué enfoque ayuda a analizar justicia hídrica?',['Comparar acceso, calidad, costo y necesidades entre zonas','Decir que todos reciben agua porque existe una red','Promediar toda la ciudad sin desagregar','Ignorar diferencias territoriales'],0,'La equidad requiere observar cómo se distribuyen beneficios y cargas.'],
      ['Una planta industrial reduce 20% su consumo, pero aumenta 50% su producción. ¿Qué dato adicional necesitas para valorar eficiencia?',['Consumo por unidad producida','Sólo el consumo total anterior','El nombre del producto','El tamaño del edificio'],0,'La intensidad de uso permite comparar consumo respecto al nivel de producción.'],
      ['¿Qué es una cuenca en el análisis territorial del agua?',['El territorio donde los escurrimientos convergen hacia un mismo sistema de drenaje','Un depósito doméstico','Un tubo de distribución','Una tarifa de servicio'],0,'La cuenca conecta procesos aguas arriba y aguas abajo.'],
      ['Una medida ahorra agua pero encarece el servicio para hogares de bajos ingresos. ¿Qué criterio debe incorporarse?',['Equidad y asequibilidad, además del ahorro físico','Sólo litros ahorrados','Sólo velocidad de implementación','Sólo publicidad'],0,'Una política sustentable debe considerar impactos sociales además de eficiencia.'],
      ['Una gráfica municipal reporta consumo promedio. ¿Qué puede ocultar el promedio?',['Desigualdades entre zonas o grupos','Las unidades','El año del reporte','El nombre del municipio'],0,'Un promedio puede esconder distribuciones muy desiguales.'],
      ['¿Qué relación es más razonable investigar antes de afirmar causalidad entre sequía y cortes de agua?',['Lluvia, niveles de fuentes, demanda, infraestructura y decisiones de operación','Sólo el calendario','El color del cielo','Una sola opinión'],0,'Los cortes pueden depender de múltiples factores además de la precipitación.']
    ]},
    m6:{id:'m6',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'analizar-evaluar',title:'R6 · Causas, efectos y respuestas del agua',type:'ens-classify',icon:'🧩',desc:'Clasifica situaciones como causa o condición, consecuencia observable o respuesta de gestión, justificando relaciones sin simplificar procesos complejos.',cats:['Causa / condición','Consecuencia / indicador','Respuesta / gestión'],items:[
      ['Extracción anual superior a la recarga de un acuífero.',0,'Es una condición que puede contribuir al descenso de niveles subterráneos.'],
      ['Descenso sostenido del nivel de un pozo medido durante varios años.',1,'Es un indicador observable de cambio en la disponibilidad subterránea.'],
      ['Programa para detectar fugas y priorizar reparaciones por volumen perdido.',2,'Es una respuesta de gestión orientada a reducir pérdidas.'],
      ['Expansión urbana sobre zonas de recarga sin medidas de infiltración.',0,'Puede reducir infiltración y modificar el balance hídrico.'],
      ['Aumento del costo de bombeo por mayor profundidad del nivel de agua.',1,'Es una consecuencia posible del descenso del nivel de extracción.'],
      ['Tarifa escalonada con protección para consumo básico y cobro mayor a usos excesivos.',2,'Es una medida de gestión que combina señal de ahorro con criterio de equidad.'],
      ['Sequía prolongada junto con demanda creciente.',0,'Ambos factores pueden presionar la disponibilidad y el servicio.'],
      ['Mayor frecuencia de tandeos en determinadas zonas.',1,'Es un resultado observable de cómo se está distribuyendo el servicio.'],
      ['Captación de lluvia con mantenimiento y control de calidad según el uso.',2,'Es una estrategia de gestión que requiere condiciones técnicas.'],
      ['Contaminación de una fuente superficial por descargas sin tratamiento.',0,'Reduce la cantidad de agua utilizable y puede generar riesgos sanitarios.'],
      ['Incremento de enfermedades relacionadas con agua contaminada.',1,'Puede funcionar como consecuencia o indicador de problemas de calidad.'],
      ['Monitoreo público de calidad, caudales y continuidad del servicio.',2,'Es una respuesta que mejora información y rendición de cuentas.']
    ]},
    m7:{id:'m7',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'evaluar-argumentar',title:'R7 · Consejo comunitario del agua',type:'ens-quiz',icon:'🏛️',desc:'Toma decisiones públicas considerando evidencia, derechos, actores, costos, impactos y mecanismos de seguimiento.',qs:[
      ['Hay presupuesto para una sola acción: reparar una fuga que pierde 30% del caudal de una zona o pintar una campaña informativa. ¿Qué criterio debe pesar más?',['Magnitud del problema, beneficio esperado y evidencia de impacto','Qué opción se ve mejor','Qué acción tiene el nombre más corto','Elegir al azar'],0,'La decisión pública debe priorizar impacto verificable y necesidades.'],
      ['Una obra beneficia principalmente al centro y deja sin mejora a zonas con peor servicio. ¿Qué pregunta de equidad corresponde?',['Quién recibe el beneficio y quién sigue cargando con la desventaja','Cuántas fotos tendrá la inauguración','Qué color tendrá la tubería','Qué zona tiene más anuncios'],0,'La distribución de beneficios y cargas es central para evaluar equidad.'],
      ['Dos propuestas ahorran la misma cantidad de agua, pero una cuesta cuatro veces más. ¿Qué falta comparar?',['Costo, mantenimiento, vida útil, efectos secundarios y a quién beneficia','Sólo el ahorro físico','Sólo la fecha','Sólo la popularidad'],0,'La eficiencia debe evaluarse junto con viabilidad y distribución de impactos.'],
      ['Un vecino propone prohibir totalmente cierto uso sin datos sobre cuánto representa del consumo. ¿Qué respuesta es más rigurosa?',['Pedir datos antes de atribuirle el problema principal','Aceptar porque suena contundente','Rechazar cualquier regulación','Cambiar de tema'],0,'Una medida restrictiva necesita diagnóstico y proporcionalidad.'],
      ['¿Qué mecanismo mejora rendición de cuentas en un acuerdo comunitario?',['Metas medibles, responsables, fechas y publicación de resultados','Sólo una promesa verbal','Un cartel sin indicadores','No revisar después'],0,'Los acuerdos pueden evaluarse cuando definen qué se hará, quién y cómo se medirá.'],
      ['Si una medida reduce consumo pero afecta el mínimo necesario para higiene en hogares vulnerables, ¿qué derecho debe considerarse?',['Acceso suficiente y asequible al agua para necesidades básicas','Derecho a publicidad','Derecho a consumir sin límite','Ninguno'],0,'El ahorro no debe desconocer necesidades básicas y derechos.'],
      ['Una decisión fue tomada sin escuchar a la comunidad afectada. ¿Qué mejora el proceso?',['Incluir participación informada y explicar cómo se incorporaron o rechazaron propuestas','Mantener la decisión en secreto','Escuchar sólo a un actor','Evitar datos técnicos'],0,'La participación fortalece legitimidad y puede revelar impactos no previstos.'],
      ['¿Qué evidencia sería más útil para evaluar después una política de ahorro?',['Datos antes y después, ajustados por población o actividad, más indicadores de continuidad y calidad','Una opinión aislada','El diseño del folleto','Sólo el presupuesto inicial'],0,'Evaluar exige comparar resultados y posibles efectos colaterales.'],
      ['Un indicador mejora en promedio, pero empeora en el barrio con menor ingreso. ¿Qué conclusión corresponde?',['La política puede haber mejorado el promedio y a la vez aumentado una desigualdad','La política fue igualmente exitosa para todos','El promedio invalida los datos del barrio','No importa la distribución'],0,'Los promedios pueden ocultar efectos distributivos distintos.'],
      ['¿Qué postura muestra mejor deliberación democrática?',['Defender una propuesta con evidencia y estar dispuesto a revisarla ante mejores razones','Ganar la discusión a cualquier costo','Descalificar a quien discrepa','Ocultar incertidumbres'],0,'Deliberar implica argumentar, escuchar y revisar posiciones.']
    ]},
    m8:{id:'m8',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'analizar-evaluar',title:'R8 · Igualdad, equidad y discriminación',type:'ens-classify',icon:'⚖️',desc:'Distingue igualdad formal, medidas de equidad y situaciones discriminatorias en casos escolares y comunitarios.',cats:['Igualdad / derecho','Equidad / ajuste razonable','Discriminación / barrera'],items:[
      ['Permitir que todo el alumnado participe en una actividad bajo las mismas reglas compatibles con sus derechos.',0,'Expresa trato igual y reconocimiento de derechos comunes.'],
      ['Proporcionar material accesible a una persona con discapacidad visual para que pueda realizar la misma actividad.',1,'Es un ajuste que busca remover una barrera, no un privilegio arbitrario.'],
      ['Excluir a una estudiante de una tarea técnica porque “las mujeres no son buenas para eso”.',2,'La exclusión se basa en un estereotipo de género y limita oportunidades.'],
      ['Aplicar el mismo criterio de evaluación previamente anunciado a todo el grupo.',0,'La regla común puede expresar igualdad si no produce una barrera injustificada.'],
      ['Dar más tiempo cuando una necesidad documentada lo requiere para evaluar el mismo aprendizaje.',1,'Es una medida de equidad orientada a condiciones reales de participación.'],
      ['Burlarse de una persona por su acento y evitar que exponga por “hablar raro”.',2,'El prejuicio lingüístico se convierte en una barrera discriminatoria.'],
      ['Reconocer el derecho de todas las personas a expresar sus ideas sin violencia ni exclusión.',0,'Es un principio de igualdad de dignidad y participación.'],
      ['Instalar una rampa donde antes sólo había escaleras.',1,'La modificación elimina una barrera física para acceder al espacio.'],
      ['Negar un servicio por origen étnico aun cuando se cumplen los mismos requisitos.',2,'Es un trato desigual basado en una característica protegida.'],
      ['Ofrecer traducción o mediación lingüística cuando es necesaria para comprender un procedimiento.',1,'La medida busca acceso efectivo a la información y al derecho.'},
      ['Establecer que ninguna persona puede ser humillada o excluida por su identidad.',0,'Expresa una garantía general de no discriminación.'],
      ['Suponer que un estudiante con discapacidad no puede participar sin preguntarle qué apoyos necesita.',2,'El prejuicio puede excluir incluso cuando se presenta como “protección”.']
    ]},
    m9:{id:'m9',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'analizar-evaluar-argumentar',title:'R9 · Dilemas de derechos y convivencia',type:'ens-quiz',icon:'🤝',desc:'Resuelve dilemas donde entran en tensión reglas, derechos, igualdad, libertad, seguridad y participación; exige justificar y matizar decisiones.',qs:[
      ['Una regla escolar se aplica igual a todos, pero impide participar a una persona por una barrera física evitable. ¿Qué análisis es correcto?',['La igualdad formal no basta si una barrera impide el acceso efectivo; debe buscarse un ajuste razonable','La regla es justa sólo porque es igual','Toda regla común es discriminatoria','La accesibilidad no corresponde a la escuela'],0,'La igualdad sustantiva considera si las personas pueden ejercer realmente el derecho.'],
      ['En un debate, un estudiante difunde datos personales de otra persona para “demostrar” su punto. ¿Qué derecho debe protegerse?',['Privacidad y dignidad, además del derecho a expresarse','Sólo libertad de expresión sin límites','Derecho a ganar el debate','Ninguno'],0,'La expresión no justifica exponer información personal sin necesidad o consentimiento.'],
      ['Una mayoría vota excluir a un grupo de una actividad. ¿Por qué la votación no basta para legitimar la decisión?',['Los derechos no dependen únicamente de la voluntad de la mayoría','Toda votación es inválida','Las minorías siempre deciden','La democracia no usa reglas'],0,'La democracia incluye límites basados en derechos y protección de minorías.'],
      ['Dos derechos parecen entrar en tensión. ¿Qué procedimiento es más razonable?',['Identificar qué protege cada derecho, el daño posible y buscar una medida necesaria y proporcional','Elegir siempre el derecho mencionado primero','Ignorar uno de ellos','Decidir por popularidad'],0,'La resolución de conflictos de derechos exige razones y proporcionalidad.'],
      ['Una medida busca seguridad, pero restringe más de lo necesario la participación de todo el grupo. ¿Qué debe revisarse?',['Si existe una alternativa menos restrictiva que logre la misma protección','Sólo si es popular','Sólo si cuesta menos','Nada, porque seguridad elimina otros derechos'],0,'Las restricciones deben ser necesarias y proporcionales al objetivo.'],
      ['¿Qué diferencia hay entre igualdad y equidad?',['Igualdad reconoce derechos y dignidad comunes; equidad puede requerir apoyos diferenciados para superar barreras','Equidad significa favorecer sin criterio','Son conceptos opuestos','Igualdad exige ignorar diferencias siempre'],0,'La equidad busca condiciones efectivas de justicia, no privilegios arbitrarios.'],
      ['Una persona no participa por temor a burlas. ¿Qué dimensión de la inclusión falta?',['Un entorno seguro y respetuoso, no sólo acceso físico','Sólo un asiento disponible','Sólo una regla escrita','Ninguna'],0,'Las barreras pueden ser sociales, culturales y emocionales además de físicas.'],
      ['Una campaña contra la discriminación usa estereotipos para llamar la atención. ¿Qué problema tiene?',['Puede reproducir el mismo prejuicio que pretende combatir','Siempre funciona mejor','No importa el mensaje visual','Los estereotipos son neutrales'],0,'La forma de comunicar también puede reforzar desigualdades.'],
      ['¿Qué evidencia ayuda a saber si una política de inclusión funciona?',['Participación, experiencias de trato, acceso y resultados desagregados, no sólo existencia de la norma','Sólo el nombre del programa','Un cartel institucional','Una opinión del organizador'],0,'La implementación debe evaluarse con datos sobre efectos reales.'],
      ['Una propuesta beneficia a un grupo históricamente excluido. ¿Qué pregunta evita juzgarla como “privilegio” sin analizarla?',['Qué barrera busca corregir, con qué evidencia y durante cuánto tiempo','Por qué no se da lo mismo a todos sin contexto','Si el nombre es atractivo','Quién la propuso primero'],0,'Las medidas de equidad se valoran por la barrera que corrigen y su proporcionalidad.'],
      ['¿Qué actitud fortalece la convivencia democrática?',['Criticar ideas con razones sin deshumanizar a las personas','Silenciar todo desacuerdo','Confundir respeto con aceptar cualquier afirmación','Difundir rumores'],0,'La convivencia democrática permite desacuerdo con dignidad y argumentos.'],
      ['¿Qué caracteriza una decisión colectiva responsable?',['Explicita criterios, escucha a afectados, usa evidencia y puede revisarse','Se mantiene aunque aparezcan mejores datos','Evita registrar razones','Favorece al grupo más ruidoso'],0,'La legitimidad aumenta con transparencia, participación y posibilidad de evaluación.']
    ]},
    m10:{id:'m10',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'integrar-analizar-evaluar',title:'R10 · Reto integrador: huellas, agua e igualdad',type:'ens-quiz',icon:'🌎',desc:'Integra análisis histórico, territorio, datos, derechos, equidad y participación para resolver situaciones complejas con evidencia.',qs:[
      ['Un equipo afirma que una comunidad “siempre” tuvo acceso suficiente al agua porque encontró una fotografía de una fuente pública. ¿Qué crítica es más sólida?',['Una fotografía prueba existencia de una infraestructura, no continuidad, suficiencia ni acceso equitativo','Toda fotografía es falsa','Las fuentes públicas nunca sirven','La palabra siempre es correcta'],0,'La evidencia debe ser proporcional al alcance de la afirmación.'],
      ['Dos barrios reciben 8 y 12 horas de servicio. El segundo tiene además menor presión y mayor población. ¿Qué hace falta para comparar acceso?',['Indicadores combinados: continuidad, presión, población, calidad y costo','Sólo las horas','Sólo la población','Sólo una encuesta de satisfacción'],0,'El acceso es multidimensional y requiere más de un indicador.'],
      ['Una fuente histórica y un testimonio actual discrepan sobre el inicio de una obra. ¿Qué procede?',['Revisar fechas, propósito y procedencia de ambas, y buscar una tercera evidencia','Elegir el documento por ser escrito','Elegir el testimonio por ser oral','Promediar fechas'],0,'La discrepancia debe investigarse, no resolverse por jerarquía automática del tipo de fuente.'],
      ['Una política reduce 15% el consumo total, pero los cortes aumentan en zonas vulnerables. ¿Qué evaluación corresponde?',['Logró un ahorro global, pero puede haber empeorado la equidad del acceso','Fue totalmente exitosa','Fue totalmente inútil sin más análisis','Los cortes no importan'],0,'Una política puede mejorar un indicador y empeorar otro; la evaluación debe ser multidimensional.'],
      ['En una encuesta escolar, 12 de 40 estudiantes reportan una barrera de participación. ¿Qué porcentaje es?',['30%','12%','40%','52%'],0,'12/40 = 0.30, es decir, 30% de la muestra.'],
      ['¿Qué afirmación respeta mejor el alcance del dato anterior?',['En esta muestra, 30% reportó la barrera; necesitamos más evidencia para generalizar','30% de todos los adolescentes del país vive lo mismo','La barrera afecta exactamente a tres de cada diez personas en cualquier escuela','La encuesta demuestra la causa'],0,'La conclusión debe limitarse a la población observada.'],
      ['Una regla neutral produce sistemáticamente peores resultados para un grupo. ¿Qué concepto ayuda a revisar el caso?',['Igualdad sustantiva y posibles barreras indirectas','Sólo igualdad formal','Causalidad histórica exclusivamente','Disponibilidad hídrica'],0,'La igualdad sustantiva observa efectos reales, no sólo redacción neutral.'],
      ['Una explicación histórica atribuye un conflicto únicamente a “malas decisiones individuales”. ¿Qué debe mejorar?',['Incorporar condiciones sociales, económicas, políticas y distintos actores','Eliminar toda responsabilidad individual','Usar una sola fuente','Evitar causas'],0,'Los procesos históricos complejos suelen ser multicausales.'],
      ['Un proyecto comunitario propone ahorrar agua con una medida que requiere inversión inicial. ¿Qué análisis es más completo?',['Ahorro esperado, costo, recuperación, mantenimiento, accesibilidad y distribución de beneficios','Sólo costo inicial','Sólo litros ahorrados','Sólo popularidad'],0,'Las decisiones sustentables y justas combinan eficacia, viabilidad y equidad.'],
      ['¿Qué diferencia una evidencia de una interpretación?',['La evidencia es un registro verificable; la interpretación explica su significado mediante argumentos','La evidencia siempre es una opinión','La interpretación no usa fuentes','No existe diferencia'],0,'La interpretación debe apoyarse en evidencias y explicitar su razonamiento.'],
      ['¿Qué fortalece una propuesta sobre agua y territorio?',['Diagnóstico con datos, actores identificados, metas medibles y mecanismo de seguimiento','Un eslogan sin indicadores','Una sola opinión','Una promesa sin responsables'],0,'Una propuesta puede evaluarse si vincula problema, acción, responsables e indicadores.'],
      ['¿Qué fortalece una propuesta de inclusión?',['Identificar la barrera concreta, consultar a personas afectadas y evaluar si el ajuste mejora participación','Suponer necesidades sin preguntar','Aplicar la misma solución a todos los casos','Medir sólo asistencia'],0,'La inclusión requiere comprender barreras reales y verificar resultados.'],
      ['Si dos fuentes confiables ofrecen explicaciones distintas, ¿qué demuestra mayor pensamiento histórico?',['Comparar evidencias y criterios de cada explicación y reconocer incertidumbres','Declarar que una debe ser falsa','Elegir la más reciente automáticamente','Evitar discutir diferencias'],0,'Las interpretaciones pueden diferir aun con fuentes confiables; deben compararse argumentativamente.'],
      ['¿Qué principio conecta los tres ejes del campo en estas misiones?',['Tomar decisiones colectivas informadas mediante evidencia, análisis de contexto, derechos y responsabilidad social','Memorizar definiciones sin aplicarlas','Evitar todo conflicto de ideas','Usar una sola fuente'],0,'El propósito integrador es comprender procesos y actuar con juicio informado y ético.'],
      ['Después de completar el reto, ¿qué evidencia muestra mayor aprendizaje?',['Poder justificar una decisión, reconocer límites y explicar qué dato adicional podría cambiarla','Responder más rápido','Recordar el color de los botones','Repetir una definición'],0,'El aprendizaje de tercer grado implica transferir conceptos, argumentar y revisar decisiones.']
    ]}
  });

  // ---------------------------------------------------------------------------
  // Motores de los nuevos tipos ENS. Se encadenan con los motores de otros campos.
  // ---------------------------------------------------------------------------
  const previousLaunchMission = window.launchMission || launchMission;
  const ensHead = (m, progress='') => `<div class="flex flex-wrap justify-between gap-2 text-xs font-bold text-emerald-300"><span>${progress}</span><span class="text-slate-400">3.º de Telesecundaria</span></div><h3 class="text-xl font-black text-white">${m.icon} ${m.title}</h3><p class="text-slate-300 text-xs">${m.desc}</p>`;

  window.launchMission = launchMission = function(id) {
    const m = missionCatalog[id];
    if (!m?.type?.startsWith('ens-')) return previousLaunchMission(id);
    activeMissionKey = id;
    missionGameState = {};
    document.getElementById('modal-mission').classList.remove('hidden');
    if (m.type === 'ens-quiz') ensQuiz(m);
    else if (m.type === 'ens-sequence') ensSequence(m);
    else if (m.type === 'ens-classify') ensClassify(m);
  };

  function ensQuiz(m) {
    missionGameState = {idx:0,hits:0,errors:0,details:[]};
    ensQuizRender();
  }
  function ensQuizRender() {
    const m = missionCatalog[activeMissionKey], s = missionGameState, a = document.getElementById('mission-content-area');
    if (s.idx >= m.qs.length) {
      saveMissionResults('¡Reto completado! Explica qué evidencia o criterio cambió tu decisión en el reactivo más difícil.');
      return;
    }
    const [q, opts] = m.qs[s.idx];
    a.innerHTML = `<div class="space-y-4 animate-pop">${ensHead(m,`Reactivo ${s.idx+1} de ${m.qs.length} · Aciertos: ${s.hits}`)}<div class="glass-card p-5 sm:p-6 rounded-2xl"><p class="text-base sm:text-lg font-semibold mb-4">${q}</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${opts.map((o,i)=>`<button onclick="ensQuizAnswer(${i})" class="p-4 text-left bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500/20 text-white rounded-xl font-bold text-xs sm:text-sm">${String.fromCharCode(65+i)} · ${o}</button>`).join('')}</div></div><p class="text-[11px] text-slate-400 italic">Se evalúa razonamiento y uso de evidencia, no rapidez.</p></div>`;
  }
  window.ensQuizAnswer = function(i) {
    const m = missionCatalog[activeMissionKey], s = missionGameState, [q,opts,ans,fb] = m.qs[s.idx], ok = i === ans;
    ok ? s.hits++ : s.errors++;
    s.details.push({statement:q,selected:opts[i],expected:opts[ans],isCorrect:ok,explanation:fb});
    Swal.fire({icon:ok?'success':'info',title:ok?'¡Argumento sólido!':'Revisa la evidencia',text:fb,confirmButtonText:'Continuar'}).then(()=>{s.idx++;ensQuizRender();});
  };

  function ensSequence(m) {
    missionGameState = {items:[...m.items].sort(()=>Math.random()-.5),hits:0,errors:0,details:[]};
    ensSequenceRender();
  }
  function ensSequenceRender() {
    const m = missionCatalog[activeMissionKey], s = missionGameState, a = document.getElementById('mission-content-area');
    a.innerHTML = `<div class="space-y-4 animate-pop">${ensHead(m,`Ordena ${m.items.length} decisiones de investigación`)}<div class="space-y-2">${s.items.map((x,i)=>`<div class="glass-card p-3 rounded-xl flex items-center gap-3"><span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-xs">${i+1}</span><span class="flex-1 text-xs sm:text-sm font-semibold">${x}</span><button onclick="ensSeqMove(${i},-1)" class="px-2.5 py-2 bg-slate-800 rounded-lg">▲</button><button onclick="ensSeqMove(${i},1)" class="px-2.5 py-2 bg-slate-800 rounded-lg">▼</button></div>`).join('')}</div><button onclick="ensSeqCheck()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl">Comprobar orden</button></div>`;
  }
  window.ensSeqMove = function(i,d) {
    const s = missionGameState, j = i+d;
    if (j < 0 || j >= s.items.length) return;
    [s.items[i],s.items[j]]=[s.items[j],s.items[i]];
    ensSequenceRender();
  };
  window.ensSeqCheck = function() {
    const m = missionCatalog[activeMissionKey], s = missionGameState;
    let n=0;
    s.items.forEach((x,i)=>{if(x===m.items[i])n++;});
    if(n===m.items.length){
      s.hits=n;
      s.details=m.items.map((x,i)=>({statement:`Paso ${i+1}`,selected:x,expected:x,isCorrect:true,explanation:'Secuencia metodológica correcta.'}));
      saveMissionResults('¡Ruta completa! Una investigación sólida revisa sus conclusiones cuando aparece evidencia nueva.');
    } else {
      s.errors += m.items.length-n;
      Swal.fire({icon:'info',title:'Aún hay pasos por ajustar',text:`Tienes ${n} de ${m.items.length} en la posición esperada.`,confirmButtonText:'Seguir ordenando'});
    }
  };

  function ensClassify(m) {
    missionGameState = {list:[...m.items].sort(()=>Math.random()-.5),idx:0,hits:0,errors:0,details:[]};
    ensClassRender();
  }
  function ensClassRender() {
    const m=missionCatalog[activeMissionKey], s=missionGameState, a=document.getElementById('mission-content-area');
    if(s.idx>=s.list.length){
      saveMissionResults('¡Clasificación completada! Elige un caso y explica por qué podría cambiar de categoría si cambia el contexto.');
      return;
    }
    const [text,ans,fb]=s.list[s.idx];
    a.innerHTML=`<div class="space-y-4 animate-pop">${ensHead(m,`Caso ${s.idx+1} de ${s.list.length} · Aciertos: ${s.hits}`)}<div class="glass-card p-6 rounded-2xl text-center"><p class="text-base sm:text-lg font-semibold">${text}</p></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3">${m.cats.map((x,i)=>`<button onclick="ensClassAnswer(${i})" class="p-3.5 bg-slate-800 hover:bg-emerald-600 border border-white/10 rounded-xl font-bold text-xs sm:text-sm text-white">${x}</button>`).join('')}</div></div>`;
    window._ensClass={ans,fb,text};
  }
  window.ensClassAnswer=function(i){
    const m=missionCatalog[activeMissionKey],s=missionGameState,ok=i===window._ensClass.ans;
    ok?s.hits++:s.errors++;
    s.details.push({statement:window._ensClass.text,selected:m.cats[i],expected:m.cats[window._ensClass.ans],isCorrect:ok,explanation:window._ensClass.fb});
    Swal.fire({icon:ok?'success':'info',title:ok?'¡Bien clasificado!':'Revisa el criterio',text:window._ensClass.fb,confirmButtonText:'Continuar'}).then(()=>{s.idx++;ensClassRender();});
  };
})();
