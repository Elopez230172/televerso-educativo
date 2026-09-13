/* TeleVerso Educativo · Lenguajes PPA 1 · Banco ampliado de nivel avanzado
   Extiende las 10 misiones de "Voces que cuentan" para 3° de Telesecundaria. */
(() => {
  const addItems = (id, items) => {
    const m = missionCatalog[id];
    if (m && Array.isArray(m.items)) m.items.push(...items);
  };
  const addQs = (id, qs) => {
    const m = missionCatalog[id];
    if (m && Array.isArray(m.qs)) m.qs.push(...qs);
  };
  const addPairs = (id, pairs) => {
    const m = missionCatalog[id];
    if (m && Array.isArray(m.pairs)) m.pairs.push(...pairs);
  };

  addItems('len1', [
    ['En tres entrevistas realizadas por el equipo, dos personas jóvenes dijeron usar menos la lengua de sus abuelos que las personas mayores.',0,'Es un dato verificable dentro de ese conjunto de entrevistas; no autoriza por sí solo a generalizar a toda la comunidad.'],
    ['Si una lengua tiene pocos hablantes, necesariamente desaparecerá en pocos años.',2,'Presenta como inevitable un proceso que depende de múltiples factores sociales, familiares, escolares y comunitarios.'],
    ['Abrir espacios escolares donde una lengua se use en situaciones reales puede favorecer su transmisión entre generaciones.',1,'Es una afirmación defendible, pero requiere explicar condiciones y aportar evidencia pertinente.'],
    ['El folleto del equipo cita autor, fecha y procedencia de dos fuentes consultadas.',0,'La afirmación describe elementos rastreables del producto.'],
    ['Las personas jóvenes ya no se interesan por las tradiciones de su comunidad.',2,'Generaliza a un grupo completo sin evidencia suficiente y convierte una tendencia posible en rasgo universal.'],
    ['Una exposición que sólo muestra objetos sin contexto puede reforzar miradas superficiales sobre una cultura.',1,'Es una interpretación razonada que debe justificarse con el propósito de la exposición y ejemplos.'],
    ['La entrevista fue realizada el 12 de septiembre y la persona participante autorizó que se usara su testimonio sin publicar su nombre.',0,'Son datos de procedimiento que pueden registrarse y comprobarse.'],
    ['Una variante lingüística es una forma incorrecta de hablar una lengua.',2,'Confunde variación con error y establece una jerarquía lingüística injustificada.'],
    ['Una traducción literal puede ser insuficiente cuando una palabra concentra significados culturales específicos.',1,'Es una postura lingüística que puede sostenerse mediante ejemplos y explicación contextual.'],
    ['El equipo comparó dos fuentes y encontró que coinciden en una idea, pero difieren en las causas que proponen.',0,'Describe un resultado concreto de comparación de fuentes.'],
    ['Si una costumbre se practica de manera distinta a como se hacía hace cincuenta años, dejó de pertenecer a la comunidad.',2,'Supone que la cultura es estática e ignora procesos de transformación y continuidad.'],
    ['Dar crédito a quien aporta una traducción o testimonio fortalece la ética del trabajo de divulgación.',1,'Es una valoración argumentable basada en reconocimiento de autoría, colaboración y responsabilidad.']
  ]);

  addQs('len2', [
    ['Tesis: “La escuela debe abrir más espacios para el uso de lenguas de la comunidad”. ¿Qué evidencia la respalda de manera más directa?',['Una encuesta local sobre en qué espacios usan la lengua distintas generaciones.','Una fotografía del edificio escolar.','Una opinión anónima que dice “sería bonito”.'],0,'La evidencia pertinente se relaciona directamente con usos lingüísticos y permite analizar una necesidad concreta.'],
    ['¿Cuál razonamiento conecta mejor la evidencia con la tesis?',['“La encuesta muestra menor uso entre jóvenes; por eso, crear espacios escolares de uso puede aumentar oportunidades de práctica y transmisión”.','“La encuesta existe, así que la tesis es verdadera”.','“La lengua es importante porque sí”.'],0,'El razonamiento explica el vínculo entre el dato observado y la acción defendida, sin presentar la evidencia como prueba automática.'],
    ['Una fuente afirma que “muchas lenguas están en riesgo”, pero no presenta autor, fecha ni procedencia. ¿Cómo usarla?',['Como evidencia definitiva.','Como punto de partida que debe verificarse y contrastarse antes de sostener un argumento.','Como prueba suficiente porque suena razonable.'],1,'La rastreabilidad es necesaria para evaluar autoridad, actualidad y contexto de una afirmación.'],
    ['¿Cuál enunciado funciona como contraargumento serio a “todo contenido cultural debe publicarse para conservarlo”?',['“No me gusta publicar”.','Algunos saberes o ceremonias tienen restricciones comunitarias; conservar no significa difundir sin consentimiento.','Internet es aburrido.'],1,'Un contraargumento pertinente cuestiona la idea con una razón vinculada con derechos, consentimiento y contexto.'],
    ['¿Qué respuesta fortalece mejor una tesis después de recibir un contraargumento válido?',['Ignorarlo.','Reconocer el límite, precisar la tesis y explicar bajo qué condiciones sigue siendo defendible.','Repetir la tesis con palabras más fuertes.'],1,'La argumentación madura puede matizar una postura cuando la objeción revela condiciones o excepciones relevantes.'],
    ['¿En cuál caso hay una generalización apresurada?',['“Entrevistamos a cuatro personas; tres prefieren recibir información bilingüe, así que toda la comunidad lo prefiere”.','“Tres de cuatro personas entrevistadas expresaron esa preferencia; necesitamos ampliar la muestra antes de generalizar”.','“Los resultados orientan nuevas preguntas”.'],0,'Se extrapola una muestra pequeña a toda la comunidad sin justificar representatividad.'],
    ['¿Cuál evidencia es más suficiente para afirmar que una práctica lingüística está cambiando?',['Un comentario aislado.','Datos de distintas edades, observación de contextos de uso y más de una fuente que puedan compararse.','Una publicación sin fecha.'],1,'La suficiencia aumenta cuando hay diversidad de evidencias y posibilidad de contraste.'],
    ['¿Qué conclusión es más sólida?',['“Por todo lo anterior, nuestra propuesta es perfecta”.','“La evidencia sugiere que ampliar espacios de uso puede ayudar; proponemos una acción piloto y evaluar sus resultados”.','“Ya demostramos todo”.'],1,'Una conclusión rigurosa recupera la postura sin exagerar el alcance de la evidencia y puede proponer evaluación.'],
    ['Si dos fuentes confiables ofrecen interpretaciones distintas, ¿qué debe hacer el equipo?',['Elegir la que coincide con su opinión.','Comparar sus evidencias, contextos y criterios, y explicar la diferencia.','Descartar ambas.'],1,'Contrastar fuentes implica analizar por qué divergen, no ocultar la discrepancia.'],
    ['¿Qué pregunta evalúa mejor la calidad de una evidencia?',['¿Se ve bonita?','¿Quién la produjo, con qué propósito, cuándo, con qué datos y qué relación tiene con la tesis?','¿Es la primera que encontramos?'],1,'Estas preguntas permiten valorar procedencia, intención, actualidad, método y pertinencia.']
  ]);

  addQs('len3', [
    ['Durante el debate alguien dice: “Si no estás de acuerdo conmigo, no valoras la cultura”. ¿Qué problema argumentativo hay?',['Plantea una falsa disyuntiva y descalifica la postura contraria.','Presenta una evidencia estadística.','Formula una pregunta abierta.'],0,'Reduce el debate a dos opciones extremas e impide analizar matices o razones alternativas.'],
    ['Una compañera cita una entrevista, pero otra persona señala que fue realizada a un solo informante. ¿Qué respuesta es más rigurosa?',['“Una persona basta para representar a todos”.','“Es un testimonio valioso, pero no debemos generalizarlo; lo usaremos como una perspectiva y buscaremos contraste”.','“Entonces la entrevista no sirve para nada”.'],1,'Un testimonio puede aportar profundidad sin representar necesariamente a toda una comunidad.'],
    ['¿Cuál réplica demuestra escucha activa?',['“Eso no tiene sentido”.','“Entiendo que tu argumento se centra en el riesgo de exponer información sensible; nuestra propuesta puede limitarse a contenidos autorizados”.','“Yo ya había pensado eso”.'],1,'La réplica recupera la objeción y modifica la propuesta para responderla.'],
    ['¿Qué intervención usa lenguaje académico sin perder claridad?',['“Eso está súper mal”.','“La evidencia disponible no es suficiente para establecer una relación causal; sólo muestra una coincidencia”.','“Todos saben que pasa”.'],1,'Distinguir correlación y causalidad mejora la precisión del argumento.'],
    ['Dos equipos tienen evidencias válidas pero proponen acciones distintas. ¿Qué puede hacer el moderador?',['Declarar ganador al que hable primero.','Pedir que comparen criterios de viabilidad, impacto, respeto y recursos antes de formular un acuerdo.','Cancelar el debate.'],1,'Los criterios compartidos permiten comparar propuestas y construir acuerdos razonados.'],
    ['¿Cuál pregunta profundiza una objeción?',['“¿Por qué dices eso?”','“¿Qué evidencia te haría cambiar o matizar tu postura y qué límite reconoces en tu propuesta?”','“¿Quién está de mi lado?”'],1,'Invita a explicitar criterios, apertura a revisión y límites del argumento.'],
    ['Si detectas que tu propia evidencia contradice parte de tu tesis, ¿qué conviene?',['Ocultarla.','Modificar la tesis para que represente mejor lo que realmente muestran los datos.','Cambiar la evidencia.'],1,'La evidencia debe orientar la conclusión; una tesis revisable es más rigurosa que una postura rígida.'],
    ['¿Qué ejemplo es una concesión argumentativa?',['“Aunque la difusión digital amplía el alcance, debemos prever alternativas para quienes no tienen conectividad”.','“Internet resuelve todo”.','“No hay problema”.'],0,'Conceder reconoce un aspecto válido de otra postura antes de sostener una precisión o límite.'],
    ['En un debate sobre revitalización lingüística, ¿qué criterio es más pertinente para evaluar una propuesta?',['Qué tan llamativo es el cartel.','Si genera oportunidades reales de uso, participación de hablantes y continuidad en el tiempo.','Cuántos colores usa.'],1,'Una propuesta de revitalización se valora por su relación con uso, transmisión, participación y sostenibilidad.'],
    ['Al cerrar el debate, ¿qué producto muestra mayor aprendizaje?',['Una lista de ganadores.','Una síntesis de acuerdos, desacuerdos argumentados, evidencias fuertes y preguntas pendientes.','Sólo repetir la tesis inicial.'],1,'La síntesis evidencia comprensión del intercambio y permite reconocer lo que todavía debe investigarse.']
  ]);

  addPairs('len4', [
    ['Variante lingüística','Forma de una lengua asociada con regiones, grupos, generaciones o situaciones de uso; no es inferior por ser diferente.'],
    ['Registro lingüístico','Manera de usar la lengua según contexto, propósito, relación entre participantes y grado de formalidad.'],
    ['Prejuicio lingüístico','Valoración negativa de una persona o grupo por su lengua, variante, acento o forma de expresarse.'],
    ['Transmisión intergeneracional','Proceso mediante el cual una lengua, saber o práctica pasa de una generación a otra.'],
    ['Rastreabilidad de fuente','Posibilidad de identificar procedencia, autoría, fecha, contexto y evidencia de una información.'],
    ['Consentimiento informado','Acuerdo dado con conocimiento suficiente sobre qué información se usará, para qué y cómo se difundirá.']
  ]);

  addQs('len5', [
    ['Una pieza utiliza una fotografía antigua de una familia de la comunidad. ¿Qué debe verificar el equipo antes de exhibirla?',['Sólo que tenga buena resolución.','Procedencia, autorización de uso, nombres o datos sensibles y contexto de la imagen.','Que combine con los colores del salón.'],1,'La curaduría responsable considera derechos, consentimiento, información sensible y contexto.'],
    ['Dos testimonios ofrecen versiones distintas sobre una misma tradición. ¿Qué decisión curatorial es más rica?',['Elegir uno y ocultar el otro.','Mostrar ambas perspectivas con contexto y explicar que las prácticas pueden vivirse de manera diversa.','Declarar que una es falsa sin investigar.'],1,'La pluralidad de voces evita presentar una cultura como uniforme.'],
    ['¿Qué cédula ayuda más al pensamiento crítico del visitante?',['“Objeto típico de la región”.','“Pieza elaborada por…, usada en…, documentada mediante…, con este significado según…; otras personas la interpretan de…”.','“Muy antigua y bonita”.'],1,'Una buena cédula contextualiza, acredita y distingue información de interpretación.'],
    ['Una instalación artística representa discriminación lingüística. ¿Qué recurso puede aumentar su potencia sin revictimizar?',['Reproducir insultos sin contexto.','Usar testimonios autorizados, datos contextualizados y una salida propositiva o de reflexión.','Exagerar casos para impactar.'],1,'El impacto educativo no requiere reproducir violencia de forma innecesaria; puede informar, contextualizar y abrir acción.'],
    ['¿Qué decisión evita la apropiación superficial de símbolos?',['Usarlos porque se ven atractivos.','Investigar su significado, preguntar a personas conocedoras y justificar su relación con el mensaje.','Mezclar símbolos de distintas culturas sin explicación.'],1,'El contexto y la consulta ayudan a representar con respeto y propósito.'],
    ['Si una pieza requiere lectura extensa, ¿cómo mejorar accesibilidad?',['Reducir la letra para que quepa todo.','Crear una versión breve, tipografía legible y alternativas orales o visuales.','Eliminar toda explicación.'],1,'La accesibilidad combina claridad, legibilidad y múltiples vías de comprensión.'],
    ['¿Qué organización de recorrido favorece una lectura comparativa?',['Piezas sin relación colocadas al azar.','Agrupar por preguntas o ejes y señalar relaciones y contrastes entre piezas.','Ordenar sólo por tamaño.'],1,'Los ejes curatoriales ayudan al visitante a construir conexiones.'],
    ['Una pieza fue creada por el equipo a partir de un relato comunitario. ¿Cómo debe acreditarse?',['Sólo con el nombre del equipo.','Distinguiendo autoría artística, fuente del relato y colaboración o autorización correspondiente.','Sin créditos para evitar problemas.'],1,'Separar las distintas contribuciones reconoce autorías y responsabilidades.'],
    ['¿Cuál pregunta de mediación invita a interpretar sin imponer?',['“¿Entendiste lo correcto?”','“¿Qué elementos de la pieza apoyan tu interpretación y qué otra lectura sería posible?”','“¿Te gustó sí o no?”'],1,'Solicita evidencia visual o textual y abre la posibilidad de múltiples interpretaciones justificadas.'],
    ['¿Qué indicador permite evaluar si la exposición logró su propósito?',['Sólo contar cuántas personas asistieron.','Combinar asistencia con comentarios, preguntas, aprendizajes expresados y propuestas de mejora.','Medir cuántas fotos tomaron.'],1,'La evaluación debe relacionarse con comprensión, participación y propósito educativo, no sólo con cantidad de visitantes.']
  ]);

  if (missionCatalog.len6) {
    missionCatalog.len6.items = [
      'Definir la pregunta curatorial y el propósito de la exposición.',
      'Identificar qué voces, prácticas o expresiones necesitan investigarse y quiénes pueden aportar contexto.',
      'Recolectar fuentes, testimonios o registros y documentar su procedencia y condiciones de uso.',
      'Contrastar información y detectar estereotipos, vacíos o datos sensibles que no deben difundirse.',
      'Seleccionar las piezas o experimentaciones artísticas que mejor respondan al propósito.',
      'Redactar cédulas que distingan datos, interpretaciones, créditos y fuentes.',
      'Organizar las piezas por ejes o preguntas para construir un recorrido comprensible.',
      'Planear circulación, tiempos, responsabilidades, materiales y condiciones de seguridad.',
      'Revisar accesibilidad: legibilidad, alternativas visuales/orales y participación de distintas personas.',
      'Realizar una revisión ética de consentimiento, representación cultural y datos personales.',
      'Ensayar la mediación con público de prueba y ajustar explicaciones, recorrido y montaje.',
      'Presentar, recoger evidencias de recepción y registrar mejoras para una siguiente versión.'
    ];
    missionCatalog.len6.desc = 'Nivel avanzado: ordena 12 decisiones de investigación, curaduría, ética, accesibilidad, montaje y evaluación.';
  }

  addQs('len7', [
    ['El equipo encuentra una imagen en redes sociales sin autor visible. ¿Qué decisión es más responsable?',['Usarla porque es pública.','No publicarla hasta identificar procedencia, condiciones de uso y contexto.','Quitarle el nombre de la cuenta.'],1,'Que algo sea visible en internet no significa que pueda reutilizarse sin verificar autoría, permisos y contexto.'],
    ['Una persona autoriza una entrevista, pero pide que no se publique su nombre. ¿Cómo se clasifica publicar el audio con su voz identificable?',['Verde.','Amarillo/rojo: la voz también puede identificar; deben revisar el acuerdo y proteger su identidad.','No importa porque no aparece su nombre.'],1,'El consentimiento debe cubrir la forma concreta de difusión y los datos que permiten reconocer a una persona.'],
    ['El folleto incluye una cifra de 2010 para describir una situación actual. ¿Qué color merece antes de publicarse?',['Verde automático.','Amarillo: verificar si sigue vigente o aclarar la fecha y sus límites.','Rojo porque toda fuente antigua es falsa.'],1,'La actualidad de los datos depende del propósito; una cifra antigua puede servir si se contextualiza y no se presenta como actual.'],
    ['Una traducción fue verificada por dos hablantes, pero existen variantes regionales. ¿Qué práctica es mejor?',['Presentarla como única forma correcta.','Indicar la variante o procedencia y reconocer que puede haber otras formas.','Eliminar cualquier variante.'],1,'La variación lingüística debe contextualizarse sin jerarquizarla.'],
    ['Un video muestra una práctica cultural abierta al público y tiene permiso de grabación. ¿Qué falta revisar antes de difundirlo?',['Nada.','Propósito, datos personales visibles, contexto, créditos y si la edición altera el sentido.','Sólo la duración.'],1,'La responsabilidad no termina con el permiso de grabar; también incluye tratamiento y contexto de difusión.'],
    ['Se quiere publicar un relato comunitario considerado de circulación restringida por quienes lo compartieron. ¿Qué semáforo corresponde?',['Verde.','Rojo: no debe difundirse sin autorización explícita, aunque sea valioso para el proyecto.','Amarillo porque siempre puede resumirse.'],1,'El derecho a decidir qué conocimientos se comparten debe respetarse.'],
    ['Una infografía cita una institución reconocida, pero recorta una gráfica de modo que exagera una diferencia. ¿Cómo valorar la fuente?',['Verde porque la institución es confiable.','Rojo/amarillo para ese uso: la representación puede distorsionar aunque la fuente original sea válida.','Verde porque tiene gráfica.'],1,'También debe evaluarse cómo se representa la información, no sólo quién la produjo.'],
    ['Un texto usa “dialecto” como sinónimo de “lengua inferior”. ¿Qué hacer?',['Publicarlo.','Revisar el concepto y evitar una jerarquización lingüística sin fundamento.','Cambiar sólo el color.'],1,'La divulgación debe cuidar el significado de términos y evitar prejuicios lingüísticos.'],
    ['El equipo usa una herramienta de IA para resumir una fuente. ¿Qué práctica es adecuada?',['Copiar el resumen sin revisar.','Compararlo con la fuente original, verificar datos y asumir responsabilidad sobre el texto final.','Citar sólo a la IA y no leer la fuente.'],1,'Las herramientas pueden apoyar el proceso, pero no sustituyen la verificación de la fuente original.'],
    ['¿Qué situación merece “verde” con mayor claridad?',['Testimonio autorizado, contextualizado, con crédito acordado y revisión de datos sensibles.','Captura anónima sin fecha.','Traducción no verificada porque “suena correcta”.'],0,'La combinación de consentimiento, contexto, crédito y verificación fortalece la difusión responsable.']
  ]);

  if (missionCatalog.len8) {
    missionCatalog.len8.items = [
      'Definir propósito comunicativo, público y situación de circulación del folleto.',
      'Delimitar el tema y formular una pregunta guía que evite información dispersa.',
      'Reunir fuentes y testimonios, registrando autoría, fecha, procedencia y permisos.',
      'Contrastar la información y seleccionar lo más pertinente para el público.',
      'Diseñar una jerarquía de secciones: portada, problema o contexto, desarrollo, ejemplos y cierre.',
      'Redactar un primer borrador con títulos informativos, párrafos breves y vocabulario preciso.',
      'Integrar palabras o fragmentos en otra lengua sólo después de verificar forma, variante, sentido y crédito.',
      'Seleccionar recursos visuales que aporten información y escribir pies de imagen con procedencia.',
      'Revisar argumentos para distinguir datos, interpretaciones, recomendaciones y posibles sesgos.',
      'Comprobar legibilidad, contraste, tamaño de letra y alternativas de acceso cuando sean necesarias.',
      'Hacer una prueba con lectores del público objetivo y registrar qué entienden, qué dudan y qué sugieren.',
      'Corregir, acreditar fuentes y colaboraciones, y preparar la versión final para su difusión responsable.'
    ];
    missionCatalog.len8.desc = 'Nivel avanzado: organiza 12 decisiones para diseñar, verificar, probar y publicar un folleto de divulgación lingüística.';
  }

  addQs('len9', [
    ['Dos hablantes proponen traducciones distintas de una misma expresión. ¿Qué conviene hacer?',['Elegir la más corta.','Preguntar por contexto, variante y situación de uso; documentar por qué se selecciona una forma o presentar ambas.','Decidir por votación sin explicación.'],1,'Las diferencias pueden responder a variantes, registros o sentidos contextuales; deben investigarse, no borrarse.'],
    ['Una expresión tiene sentido humorístico sólo en su lengua original. ¿Cuál estrategia es más responsable?',['Traducir palabra por palabra aunque pierda el humor.','Mantener la expresión y explicar su función o buscar una equivalencia funcional señalando que no es literal.','Inventar un significado.'],1,'La traducción puede priorizar función y contexto cuando no existe equivalencia literal.'],
    ['¿Qué debe registrarse al trabajar con una palabra aportada por una persona de la comunidad?',['Sólo la palabra.','Quién la aportó o cómo desea ser acreditada, variante, significado, contexto de uso y permiso de difusión.','Nada para que se vea más limpio.'],1,'Documentar procedencia y condiciones de uso permite una divulgación responsable.'],
    ['Una palabra cambia de significado según el contexto. ¿Qué error debe evitarse?',['Explicar ejemplos.','Presentar una sola equivalencia como válida para todos los contextos.','Consultar a hablantes.'],1,'Las palabras pueden ser polisémicas; el contexto determina qué sentido es pertinente.'],
    ['¿Qué diferencia hay entre traducir y transcribir?',['Ninguna.','Traducir busca expresar significado en otra lengua; transcribir representa por escrito una forma oral según convenciones.','Transcribir siempre cambia de idioma.'],1,'Son procesos distintos y requieren criterios diferentes.'],
    ['Si la escritura de una lengua tiene una norma comunitaria o alfabeto acordado, ¿qué debe hacer el equipo?',['Ignorarlo y escribir como suena en español.','Consultar esa convención y, si hay variantes, indicar cuál se usa.','Cambiar letras para que se vea familiar.'],1,'Respetar convenciones de escritura evita deformar la lengua y mejora la rastreabilidad.'],
    ['Una traducción “suena más elegante” si elimina una referencia cultural específica. ¿Qué criterio debe prevalecer?',['La elegancia siempre.','La fidelidad al sentido y propósito, explicando la referencia si es necesaria.','Quitar todo lo difícil.'],1,'La claridad no debe lograrse borrando significados culturales relevantes.'],
    ['¿Qué riesgo hay en usar traducción automática para una lengua con pocos recursos digitales?',['Ninguno.','Puede producir errores graves o inventar equivalencias; se necesita revisión de hablantes o fuentes especializadas.','Sólo tarda más.'],1,'La calidad de herramientas automáticas varía mucho y puede ser especialmente limitada en lenguas con menor presencia digital.'],
    ['¿Qué opción reconoce mejor una autoría lingüística colectiva?',['“Traducción: internet”.','“Versión revisada con hablantes de la variante X; agradecemos a… según el acuerdo de crédito”.','No poner créditos.'],1,'El crédito puede reconocer colaboración individual o colectiva según lo acordado.'],
    ['Cuando un término está ligado a una práctica que no existe de la misma manera en español, ¿qué estrategia es más útil?',['Sustituirlo por una palabra aproximada sin explicación.','Conservar el término, describir la práctica y aclarar que la equivalencia es parcial.','Eliminar el término.'],1,'Una explicación contextual puede preservar significados que no caben en una equivalencia de una sola palabra.']
  ]);

  addQs('len10', [
    ['El equipo encuentra un dato que apoya su tesis, pero proviene de una fuente sin autor ni fecha. ¿Qué decisión integra mejor lo aprendido?',['Usarlo porque coincide con la postura.','Buscar una fuente rastreable o presentar el dato sólo como no verificado, sin usarlo como evidencia central.','Inventar una fecha aproximada.'],1,'La solidez del argumento depende de poder examinar la procedencia de la evidencia.'],
    ['Una exposición recibe el comentario: “parece que todas las personas de esa cultura viven igual”. ¿Qué revisión es prioritaria?',['Agregar más decoración.','Incluir diversidad interna, voces distintas y contexto sobre cambios, generaciones o variantes.','Quitar los créditos.'],1,'La representación pluricultural debe evitar homogeneizar a las comunidades.'],
    ['El folleto tiene información correcta, pero el público no entiende varios conceptos. ¿Qué indica esto?',['Que el público no estudió.','Que la adecuación al destinatario también es criterio de calidad y debe revisarse vocabulario, ejemplos y organización.','Que hay que poner más texto.'],1,'Comunicar exige adaptar forma y explicación al público sin sacrificar rigor.'],
    ['Un testimonio contradice una cifra estadística. ¿Qué debe hacer el equipo?',['Eliminar el testimonio.','Analizar qué mide cada evidencia, su escala y contexto; pueden describir dimensiones distintas del mismo fenómeno.','Elegir la que tenga números.'],1,'Las evidencias cualitativas y cuantitativas pueden complementarse o mostrar tensiones que deben explicarse.'],
    ['¿Cuál producto muestra mejor pensamiento crítico?',['El que acumula más información.','El que selecciona, contrasta, argumenta, reconoce límites y explica sus decisiones.','El que copia más fuentes.'],1,'El pensamiento crítico implica evaluar y justificar, no sólo reunir datos.'],
    ['Para valorar una propuesta de revitalización, ¿qué conjunto de criterios es más completo?',['Popularidad y diseño.','Participación de hablantes, oportunidades de uso, continuidad, viabilidad y respeto a decisiones comunitarias.','Cantidad de palabras traducidas.'],1,'Estos criterios relacionan impacto lingüístico, sostenibilidad y participación.'],
    ['Si un visitante interpreta una pieza de forma diferente a lo previsto, ¿qué respuesta del equipo es más educativa?',['Decirle que está equivocado.','Preguntar qué elementos sustentan su lectura y explicar después la intención original para comparar interpretaciones.','Retirar la pieza.'],1,'La mediación puede convertir interpretaciones distintas en una oportunidad de análisis con evidencia.'],
    ['¿Qué hace que una fuente sea pertinente aunque no sea la más reciente?',['Que sea famosa.','Que responda a una pregunta histórica o contextual y se use aclarando su fecha y alcance.','Que coincida con el equipo.'],1,'La pertinencia depende del propósito; la fecha debe interpretarse según la pregunta de investigación.'],
    ['Un equipo quiere “preservar” una tradición publicando todos sus detalles. ¿Qué principio debe considerar primero?',['Que más información siempre es mejor.','Que las comunidades tienen derecho a decidir qué conocimientos pueden circular y en qué condiciones.','Que internet conserva todo.'],1,'La conservación no justifica ignorar consentimiento, privacidad o restricciones culturales.'],
    ['¿Qué evidencia de aprendizaje sería más valiosa al terminar el PPA?',['Sólo el puntaje digital.','Una revisión de productos donde el equipo explique qué cambió en sus ideas, qué evidencia fue decisiva y qué decisiones éticas tomó.','La cantidad de páginas impresas.'],1,'La metacognición permite reconocer cambios de comprensión y justificar decisiones.'],
    ['¿Cuál afirmación distingue mejor diversidad de desigualdad lingüística?',['Si hay varias lenguas, todas tienen el mismo poder social.','La diversidad describe coexistencia; la desigualdad aparece cuando algunas lenguas o hablantes tienen menos acceso, prestigio o posibilidades de uso.','Son exactamente lo mismo.'],1,'Puede existir diversidad junto con relaciones desiguales; reconocerlo es clave para un enfoque intercultural crítico.'],
    ['¿Qué muestra una buena triangulación de información?',['Repetir tres veces la misma página.','Comparar diferentes tipos de fuentes o testimonios para identificar coincidencias, diferencias y límites.','Usar sólo la fuente más extensa.'],1,'Triangular ayuda a construir una comprensión más robusta y a detectar discrepancias.'],
    ['Una propuesta escolar incluye mensajes bilingües, pero nadie de la comunidad participó en su diseño. ¿Qué mejora es más importante?',['Cambiar colores.','Incorporar participación de hablantes para revisar pertinencia, variante, significado y forma de uso.','Publicarla cuanto antes.'],1,'La participación de hablantes evita decisiones externas que pueden ser lingüística o culturalmente inadecuadas.'],
    ['¿Qué pregunta integra mejor ética, lengua y comunicación?',['¿Cómo hacemos que se vea más llamativo?','¿Qué podemos comunicar, con qué evidencias, quién debe participar y qué información no deberíamos difundir?','¿Cómo terminamos más rápido?'],1,'Integra criterios de contenido, evidencia, participación, consentimiento y límites de difusión.'],
    ['Al comparar la primera versión y la versión final del proyecto, ¿qué cambio sería señal de mayor rigor?',['Más adjetivos.','Más fuentes rastreables, argumentos matizados, mejores créditos y decisiones explícitas sobre consentimiento y accesibilidad.','Más páginas sin revisión.'],1,'El rigor se observa en calidad de evidencia, precisión argumentativa y responsabilidad comunicativa.']
  ]);

  ['len1','len2','len3','len4','len5','len6','len7','len8','len9','len10'].forEach(id => {
    const m = missionCatalog[id];
    if (m && !m.desc.startsWith('Nivel avanzado:')) m.desc = 'Nivel avanzado · ' + m.desc;
  });
})();
