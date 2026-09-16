/* TeleVerso Educativo · De lo Humano y lo Comunitario · 3.º · PPA 1
   PPA: Un plan con mucha vida
   Los 10 retos se apoyan en los motores l2-* ya existentes para conservar
   mecánicas probadas: clasificación, sopa de letras, secuencia, Kahoot,
   memorama, emparejamiento, crucigrama, ruta narrativa y escape. */
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD='humano3';
  const FIELD_TITLE='De lo Humano y lo Comunitario · 3.º grado · PPA 1';
  const PAPER='Cuaderno De lo Humano 3.º PPA 1';
  const meta=(m,desc,paper)=>Object.assign(m,{
    field:FIELD,fieldTitle:FIELD_TITLE,grade:3,level:'3.º de Telesecundaria',
    period:1,periodTitle:'Primer periodo',ppa:1,ppaTitle:'PPA 1',
    curriculumPath:'Primer periodo · PPA 1',
    cognitiveLevel:'aplicar-analizar-evaluar-argumentar',desc,paper
  });

  Object.assign(missionCatalog, {
    h3_1: meta({
      id:'h3_1',title:'R1 · Semáforo de decisiones',type:'l2-classify',icon:'🚦',
      cats:['VERDE · decisión estratégica','AMARILLO · necesito más información','ROJO · decisión impulsiva o riesgosa'],
      items:[
        ['Antes de aceptar una actividad, comparo tiempo, recursos, consecuencias y apoyos disponibles.',0,'Una decisión estratégica considera información, alternativas y consecuencias antes de actuar.'],
        ['No conozco el costo real ni los materiales de una propuesta; primero pediré esos datos.',1,'Reconocer qué información falta evita decidir con supuestos.'],
        ['Cambio una meta importante sólo porque un amigo se burló de ella.',2,'La presión inmediata no sustituye el análisis personal de metas, valores y consecuencias.'],
        ['Divido una meta de seis meses en acciones semanales y defino cómo revisaré mi avance.',0,'Convertir una meta amplia en pasos observables permite ajustar la estrategia.'],
        ['Me ofrecen participar en algo que no comprendo bien; pregunto condiciones, límites y responsables.',1,'Pedir información antes de aceptar es una práctica de autocuidado y decisión asertiva.'],
        ['Acepto un reto peligroso para demostrar que no tengo miedo.',2,'Buscar aprobación mediante riesgo innecesario es una decisión impulsiva.'],
        ['Escucho dos alternativas, explico mis razones y elijo la que mejor coincide con mis objetivos.',0,'La elección se sustenta en criterios explícitos y no sólo en la reacción del momento.'],
        ['Una propuesta parece atractiva, pero no sé si puede realizarse con los recursos disponibles.',1,'Hace falta revisar factibilidad antes de comprometer tiempo o materiales.'],
        ['Difundo información personal de otra persona para ganar una discusión.',2,'Vulnera privacidad y convivencia; una meta no justifica dañar derechos.'],
        ['Si un plan falla, reviso qué ocurrió, modifico una acción y vuelvo a probar.',0,'El pensamiento estratégico incluye evaluación y ajuste.'],
        ['No sé si una meta es realmente mía o responde a expectativas ajenas; necesito reflexionarlo.',1,'Distinguir motivaciones propias y externas ayuda a construir un proyecto de vida autónomo.'],
        ['Tomo una decisión importante cuando estoy muy enojado y sin escuchar alternativas.',2,'Una emoción intensa puede requerir una pausa para decidir con mayor claridad.'],
        ['Pido apoyo a una persona confiable sin cederle la decisión que me corresponde.',0,'Buscar apoyo es compatible con la autonomía cuando la decisión permanece en la persona.'],
        ['Quiero iniciar una actividad, pero desconozco si el espacio es seguro para todas las personas.',1,'Antes de implementarla debe revisarse accesibilidad, seguridad y participación.'],
        ['Excluyo a alguien del equipo porque “seguro no podrá” sin preguntarle qué apoyo necesita.',2,'Supone capacidades y crea una barrera; la inclusión requiere escuchar y ajustar condiciones.']
      ]
    },'Clasifica 15 situaciones para reconocer decisiones estratégicas, decisiones que requieren más información y respuestas impulsivas o riesgosas.',`${PAPER} p. 5`),

    h3_2: meta({
      id:'h3_2',title:'R2 · Memorama de criterios que sí funcionan',type:'l2-memory',icon:'🧠',
      pairs:[
        ['Eficiencia','Usar tiempo, materiales y esfuerzo de manera adecuada para alcanzar un resultado.'],
        ['Eficacia','Lograr el objetivo que se había propuesto.'],
        ['Fiabilidad','Obtener resultados consistentes y poder confiar razonablemente en el proceso.'],
        ['Factibilidad','Que una propuesta pueda realizarse con recursos, tiempo, capacidades y condiciones disponibles.'],
        ['Meta','Resultado concreto que orienta acciones y puede revisarse.'],
        ['Estrategia','Conjunto organizado de acciones para acercarse a una meta.'],
        ['Apoyo','Persona, recurso o condición que facilita avanzar sin sustituir la autonomía.'],
        ['Obstáculo','Condición que dificulta el avance y exige ajuste o alternativa.'],
        ['Autonomía','Capacidad de decidir con información, responsabilidad y respeto a derechos.'],
        ['Asertividad','Expresar decisiones, límites y necesidades con claridad y respeto.'],
        ['Inclusión','Eliminar barreras para que todas las personas puedan participar.'],
        ['Equidad','Ajustar apoyos y condiciones para favorecer una participación justa.']
      ]
    },'Relaciona 12 conceptos con su significado y utilízalos después para revisar la experiencia lúdica y el plan de vida.',`${PAPER} p. 10`),

    h3_3: meta({
      id:'h3_3',title:'R3 · Kahoot de factibilidad',type:'l2-choice',icon:'🎯',
      qs:[
        ['Un equipo logra el objetivo del juego, pero usa el doble de materiales de lo previsto. ¿Qué criterio necesita revisar?',['Eficiencia','Identidad','Popularidad'],0,'La meta se alcanzó, pero el uso de recursos puede optimizarse.'],
        ['Una dinámica está bien planeada, pero nadie logra el propósito. ¿Qué criterio se ve más afectado?',['Eficacia','Decoración','Velocidad'],0,'La eficacia pregunta si se logró el objetivo.'],
        ['Una propuesta necesita equipo que la escuela no posee ni puede conseguir. ¿Qué criterio falla primero?',['Factibilidad','Fiabilidad','Creatividad'],0,'La propuesta no puede implementarse con las condiciones disponibles.'],
        ['La misma actividad produce resultados muy distintos porque las instrucciones cambian cada vez. ¿Qué conviene mejorar?',['Fiabilidad','Competencia','Duración del recreo'],0,'Un proceso más claro y consistente favorece resultados comparables.'],
        ['¿Qué evidencia ayuda más a evaluar una experiencia lúdica?',['Objetivo, observación de participación, recursos usados y mejora propuesta','Sólo quién ganó','Sólo cuánto duró'],0,'La evaluación debe mirar propósito, proceso y condiciones.'],
        ['Una meta dice “quiero mejorar algún día”. ¿Qué falta para poder planearla?',['Precisar qué cambio, en qué plazo y cómo reconocer avance','Hacerla más larga','Pedir que otra persona la elija'],0,'Una meta útil necesita concreción suficiente para orientar acciones.'],
        ['Si una estrategia no funciona después de probarla, ¿qué pensamiento es más estratégico?',['Revisar evidencia, ajustar y volver a intentar','Mantenerla sin cambios por orgullo','Abandonar toda la meta'],0,'La evaluación permite modificar el camino sin perder de vista el propósito.'],
        ['¿Cuál es una decisión asertiva?',['Decir “no” con respeto cuando una situación rebasa mis límites','Aceptar por miedo a desagradar','Imponer mi decisión sin escuchar'],0,'La asertividad combina claridad, respeto y límites.'],
        ['Una actividad excluye a una persona por una barrera que puede corregirse. ¿Qué corresponde?',['Ajustar las condiciones para permitir participación','Mantenerla igual porque “así son las reglas”','Cancelar toda actividad'],0,'La inclusión exige identificar y remover barreras razonables.'],
        ['¿Qué hace una meta compatible con el bienestar colectivo?',['Considera sus efectos en otras personas y respeta derechos','Sólo beneficia a quien la propone','Evita cualquier colaboración'],0,'El proyecto de vida se relaciona con la convivencia y el bienestar compartido.'],
        ['Una meta de largo plazo parece difícil. ¿Qué ayuda más?',['Dividirla en metas intermedias con fechas de revisión','Esperar a sentirse completamente seguro','Cambiarla cada semana'],0,'Los pasos intermedios hacen posible monitorear y ajustar.'],
        ['¿Qué distingue apoyo de dependencia?',['El apoyo fortalece capacidades y decisión propia; la dependencia sustituye de forma innecesaria la autonomía','Son exactamente lo mismo','Todo apoyo impide crecer'],0,'Un apoyo adecuado acompaña sin quitar agencia.']
      ]
    },'Resuelve 12 decisiones tipo Kahoot, sin cronómetro, para aplicar eficiencia, eficacia, fiabilidad y factibilidad a metas y experiencias.',`${PAPER} p. 11`),

    h3_4: meta({
      id:'h3_4',title:'R4 · Ruta de una experiencia lúdica',type:'l2-sequence',icon:'🧩',
      items:[
        'Definir qué necesidad, habilidad o aprendizaje se quiere favorecer.',
        'Establecer un objetivo claro para la experiencia lúdica.',
        'Elegir reglas, materiales, espacio y tiempo disponibles.',
        'Comprobar seguridad, inclusión y posibilidades de participación.',
        'Realizar una primera prueba con el grupo.',
        'Registrar qué funcionó y qué dificultad apareció.',
        'Valorar eficiencia, eficacia, fiabilidad y factibilidad.',
        'Modificar la experiencia y dejar una ficha final con la mejora.'
      ]
    },'Ordena ocho pasos para diseñar, probar, evaluar y mejorar una experiencia lúdica que pueda integrarse al proyecto de vida.',`${PAPER} p. 12`),

    h3_5: meta({
      id:'h3_5',title:'R5 · Empareja tu árbol de vida',type:'l2-match',icon:'🌳',
      pairs:[
        ['Raíces','Experiencias, valores, personas y aprendizajes que me sostienen.'],
        ['Suelo','Condiciones actuales y contexto desde donde comienzo.'],
        ['Tronco','Fortalezas, habilidades y recursos personales que uso hoy.'],
        ['Ramas','Metas y posibilidades que quiero desarrollar.'],
        ['Hojas','Acciones concretas y hábitos que mantienen vivo el plan.'],
        ['Frutos','Logros o cambios que espero alcanzar y compartir.'],
        ['Nudos','Obstáculos, dudas o dificultades que debo atender.'],
        ['Tutor / estaca','Apoyos que orientan sin sustituir mis decisiones.'],
        ['Poda','Ajustes necesarios cuando una estrategia ya no funciona.'],
        ['Nuevos brotes','Metas que pueden aparecer al aprender y conocerme mejor.']
      ]
    },'Relaciona las partes del árbol con su función estratégica para convertir una imagen personal en un plan revisable.',`${PAPER} p. 17`),

    h3_6: meta({
      id:'h3_6',title:'R6 · Sopa de metas y apoyos',type:'l2-wordsearch',icon:'🔤',
      grid:[
        'WBIENESTARCBVHY','JCHDMIEQUIDADOU','LFLLGVIWVUCTUFR','XHFAOMIUWRHVKYA','YBFHUBZKMICGSIW',
        'KGUAPTMUOEIECHX','RRIXCSONSMLAHEQ','PCYBDTENUFCZVNT','CMMTOQIIOIRAVXD','VRYRAIYBFMUKDJN',
        'FOAXEPXELIIQYFQ','DUJUQTOTGEEALYF','RYQATKOYPADLZJH','BHSCCXPCOYRYEEV','PRFIQTMETANGRYX'
      ],
      words:[
        {word:'AUTONOMIA',clue:'Capacidad de tomar decisiones informadas y responsables sobre la propia vida.'},
        {word:'BIENESTAR',clue:'Condición que integra cuidado personal, relaciones y vida colectiva.'},
        {word:'EFICACIA',clue:'Criterio que pregunta si se alcanzó el objetivo.'},
        {word:'FACTIBLE',clue:'Que puede realizarse con las condiciones y recursos disponibles.'},
        {word:'EQUIDAD',clue:'Ajuste de condiciones para favorecer una participación justa.'},
        {word:'APOYO',clue:'Recurso o persona que facilita avanzar sin sustituir la decisión propia.'},
        {word:'META',clue:'Resultado concreto hacia el que se orientan acciones.'},
        {word:'RETO',clue:'Dificultad que puede transformarse en un problema a resolver estratégicamente.'}
      ]
    },'Localiza ocho palabras clave y usa sus pistas para revisar metas, apoyos y criterios de tu árbol de vida.',`${PAPER} p. 18`),

    h3_7: meta({
      id:'h3_7',title:'R7 · Ruta de decisiones asertivas',type:'l2-story',icon:'🗣️',
      scenes:[
        {title:'Escena 1 · Una invitación',q:'Te invitan a una actividad que no deseas hacer. ¿Qué respuesta protege mejor tus límites?',opts:['Acepto para que nadie se enoje.','Explico con respeto que no quiero participar y propongo otra forma de convivir.'],ans:1,fb:'La asertividad permite expresar límites sin agredir ni ceder por presión.'},
        {title:'Escena 2 · Una meta',q:'Tu familia imagina un futuro distinto al que tú estás explorando. ¿Qué opción favorece el diálogo?',opts:['Oculto lo que pienso.','Explico mis intereses, escucho sus preocupaciones y busco información para conversar con argumentos.'],ans:1,fb:'La autonomía se fortalece con información y diálogo, no con silencio o imposición.'},
        {title:'Escena 3 · Una relación',q:'Una persona revisa tus mensajes sin permiso y dice que es “por cariño”. ¿Qué criterio conviene aplicar?',opts:['Aceptar porque los celos siempre demuestran amor.','Reconocer privacidad, confianza y límites como elementos de una relación respetuosa.'],ans:1,fb:'El afecto no elimina el derecho a la privacidad ni justifica el control.'},
        {title:'Escena 4 · Una emoción',q:'Estás muy molesto antes de decidir algo importante. ¿Qué estrategia ayuda?',opts:['Responder de inmediato para “ser auténtico”.','Pausar, identificar la emoción, reunir información y decidir cuando puedas valorar consecuencias.'],ans:1,fb:'Regular una emoción no significa negarla; permite incorporarla sin que controle toda la decisión.'},
        {title:'Escena 5 · Inclusión',q:'Una actividad tiene una barrera para un compañero. ¿Qué haces?',opts:['Le pides que observe porque cambiar reglas sería injusto.','Preguntas qué ajuste necesita y modifican la actividad sin perder su propósito.'],ans:1,fb:'La equidad puede requerir ajustes para lograr participación efectiva.'},
        {title:'Escena 6 · Información',q:'Circula un consejo sobre sexualidad sin fuente y con afirmaciones alarmistas. ¿Qué conviene?',opts:['Compartirlo “por si acaso”.','No difundirlo y buscar información confiable, adecuada a la edad y respetuosa de derechos.'],ans:1,fb:'Las decisiones responsables requieren información confiable y respeto a la intimidad.'},
        {title:'Escena 7 · Presión',q:'Un grupo insiste en que hagas algo para “probar” tu amistad. ¿Qué opción es más asertiva?',opts:['Hacerlo aunque no quieras.','Decir que la amistad no requiere demostrarla mediante presión y mantener tu límite.'],ans:1,fb:'El consentimiento y los límites no se negocian por presión social.'},
        {title:'Escena 8 · Consecuencia',q:'Una decisión no produjo el resultado esperado. ¿Qué paso fortalece tu proyecto de vida?',opts:['Ocultarla y fingir que salió bien.','Analizar consecuencias, aprender y reajustar la estrategia o la meta si hace falta.'],ans:1,fb:'Un proyecto de vida es revisable; aprender de resultados forma parte del proceso.'}
      ]
    },'Recorre ocho escenas de vida para practicar decisiones asertivas, límites, privacidad, regulación emocional, inclusión e información confiable.',`${PAPER} p. 24`),

    h3_8: meta({
      id:'h3_8',title:'R8 · Crucigrama del proyecto de vida',type:'l2-crossword',icon:'✍️',
      size:15,
      entries:[
        {n:1,word:'FIABILIDAD',r:7,c:2,dir:'H',clue:'Criterio relacionado con consistencia y confianza en un proceso o resultado.'},
        {n:2,word:'INCLUSION',r:4,c:7,dir:'V',clue:'Acción de eliminar barreras para que todas las personas participen.'},
        {n:3,word:'AUTONOMIA',r:5,c:3,dir:'H',clue:'Capacidad de decidir de forma informada y responsable.'},
        {n:4,word:'BIENESTAR',r:10,c:6,dir:'H',clue:'Condición personal y colectiva que orienta un proyecto de vida saludable y respetuoso.'},
        {n:5,word:'EFICACIA',r:1,c:3,dir:'V',clue:'Grado en que una acción alcanza el objetivo planteado.'},
        {n:6,word:'FACTIBLE',r:2,c:5,dir:'V',clue:'Que puede realizarse con los recursos y condiciones disponibles.'},
        {n:7,word:'ASERTIVA',r:0,c:10,dir:'V',clue:'Así es una decisión o comunicación clara, respetuosa y coherente con límites.'},
        {n:8,word:'EQUIDAD',r:3,c:0,dir:'H',clue:'Principio que considera apoyos o ajustes para alcanzar condiciones más justas.'},
        {n:9,word:'APOYO',r:10,c:13,dir:'V',clue:'Recurso o persona que acompaña el avance hacia una meta.'},
        {n:10,word:'META',r:9,c:10,dir:'V',clue:'Resultado concreto que orienta un conjunto de acciones.'}
      ]
    },'Completa un crucigrama con diez conceptos esenciales para explicar y revisar tu proyecto de vida.',`${PAPER} p. 26`),

    h3_9: meta({
      id:'h3_9',title:'R9 · Historieta desordenada: una decisión que cambia el rumbo',type:'l2-sequence',icon:'🗯️',
      items:[
        'La protagonista identifica una situación que afecta una meta importante de su proyecto de vida.',
        'Reconoce qué siente, qué necesita y qué información todavía le falta.',
        'Considera al menos dos alternativas y sus posibles consecuencias.',
        'Busca un apoyo confiable sin entregar a otra persona la decisión final.',
        'Comunica su decisión de forma asertiva y respeta derechos y límites.',
        'Observa el resultado de su decisión y reconoce qué aprendió.',
        'Ajusta una acción o meta y escribe el siguiente paso de su plan.'
      ]
    },'Ordena siete viñetas para que la historieta muestre un proceso de decisión y no sólo un final feliz.',`${PAPER} p. 27`),

    h3_10: meta({
      id:'h3_10',title:'R10 · Escape: Un plan con mucha vida',type:'l2-escape',icon:'🔐',
      locks:[
        {letter:'V',title:'Candado del criterio',q:'Una propuesta logra el objetivo, pero consume recursos innecesarios. ¿Qué criterio debes revisar?',opts:['Eficiencia','Popularidad','Azar'],ans:0,fb:'La eficiencia relaciona resultados con el uso adecuado de recursos.'},
        {letter:'I',title:'Candado del árbol',q:'¿Qué parte del árbol representa mejor los apoyos, valores y experiencias que te sostienen?',opts:['Raíces','Frutos','Poda'],ans:0,fb:'Las raíces simbolizan aquello que sostiene y da base al proyecto.'},
        {letter:'D',title:'Candado de la decisión',q:'¿Qué caracteriza una decisión asertiva?',opts:['Se toma bajo presión para evitar conflictos','Expresa límites y razones con respeto','Siempre coincide con la mayoría'],ans:1,fb:'La asertividad integra claridad, autonomía y respeto.'},
        {letter:'A',title:'Candado de la meta',q:'Una meta útil para el plan de vida debe...',opts:['ser concreta y permitir reconocer avances','permanecer idéntica aunque cambien las condiciones','depender completamente de otra persona'],ans:0,fb:'Una meta orienta acciones y puede revisarse cuando cambian las condiciones.'},
        {letter:'R',title:'Candado de la relación',q:'¿Qué fortalece una relación afectiva inclusiva y equitativa?',opts:['Control y presión','Respeto, consentimiento, diálogo y límites','Evitar expresar desacuerdos'],ans:1,fb:'Las relaciones respetuosas protegen dignidad, participación y autonomía.'},
        {letter:'U',title:'Candado del ajuste',q:'Si una estrategia no funciona, ¿qué acción es más estratégica?',opts:['Analizar evidencia y modificar el plan','Ocultar el resultado','Repetirla indefinidamente sin revisar'],ans:0,fb:'Evaluar y ajustar es parte del pensamiento estratégico.'},
        {letter:'M',title:'Candado del producto',q:'¿Qué integra el producto final de este PPA?',opts:['Sólo una historieta','Experiencia lúdica evaluada, árbol de vida, historieta y plan de acción','Sólo una lista de metas'],ans:1,fb:'El producto combina evidencias de los tres proyectos en un solo mapa de ruta de vida.'},
        {letter:'B',title:'Candado del bienestar',q:'¿Qué criterio final debe acompañar una meta personal?',opts:['Que respete derechos y considere bienestar personal y colectivo','Que impresione a otras personas','Que sea la más difícil posible'],ans:0,fb:'El proyecto de vida se construye con autonomía, responsabilidad y convivencia respetuosa.'}
      ]
    },'Abre ocho candados que integran los tres proyectos académicos. No se premia rapidez: importa justificar y revisar decisiones.',`${PAPER} p. 31`)
  });
})();
