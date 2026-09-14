/* TeleVerso Educativo · Ajuste de nivel · Ética, naturaleza y sociedades · 2.º
   Eleva la exigencia cognitiva de PPA 1 sin añadir explicaciones al tablero.
   Mantiene las mismas mecánicas y sólo redefine el contenido de los 10 retos.
*/
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const patch=(id,data)=>{
    if(!missionCatalog[id]) return;
    Object.assign(missionCatalog[id],data,{cognitiveLevel:'aplicar-analizar-evaluar',difficulty:'2.º secundaria'});
  };

  patch('et2_1',{
    title:'R1 · Hecho, inferencia o prejuicio',
    cats:['HECHO DOCUMENTABLE','INFERENCIA RAZONABLE','PREJUICIO / GENERALIZACIÓN'],
    items:[
      ['El libro de Ética registra que la expedición financiada por Castilla llegó a las Antillas en 1492.',0],
      ['Si una crónica sólo presenta la versión de los expedicionarios, es razonable pensar que faltan otras perspectivas para comprender el encuentro.',1],
      ['Quien pertenece a una identidad juvenil diferente seguramente comparte las mismas ideas que todo su grupo.',2],
      ['Las Antillas estaban habitadas por pueblos originarios antes de la llegada de expediciones europeas.',0],
      ['Una fuente que justifica la dominación mediante diferencias culturales puede reflejar relaciones de poder de su época.',1],
      ['Las personas que hablan o visten distinto tienen menos capacidad para tomar buenas decisiones.',2],
      ['Una persona adolescente puede identificarse con más de un grupo y cambiar sus pertenencias con el tiempo.',0],
      ['Si dos fuentes describen de manera distinta un mismo acontecimiento, conviene investigar quién las produjo y con qué propósito.',1],
      ['Todos los europeos del siglo XV pensaban exactamente igual sobre los pueblos de América.',2],
      ['La identidad incluye dimensiones personales, sociales y culturales que se construyen en relación con otras personas.',0],
      ['El uso repetido de términos despectivos en una fuente puede indicar una mirada discriminatoria, aunque todavía deba analizarse su contexto.',1],
      ['Un grupo cultural es superior cuando logra imponer sus costumbres a otros.',2]
    ]
  });

  patch('et2_2',{
    title:'R2 · Línea del tiempo transatlántica',
    items:[
      'Portugal amplía rutas comerciales y marítimas por la costa africana durante el siglo XV.',
      'Colón propone llegar a Asia navegando hacia occidente.',
      'La Corona de Castilla autoriza y financia la expedición.',
      'La expedición desembarca en el Caribe en 1492.',
      'Se consolidan asentamientos y enclaves españoles en las Antillas.',
      'La extracción de recursos, los trabajos forzados y las enfermedades transforman profundamente la vida de las poblaciones originarias.',
      'La dominación colonial contribuye a establecer jerarquías raciales que tendrán efectos duraderos.'
    ]
  });

  patch('et2_3',{
    title:'R3 · Fuentes bajo lupa',
    cats:['EVIDENCIA ÚTIL Y VERIFICABLE','ÚTIL, PERO REQUIERE CONTEXTO O CONTRASTE','NO BASTA COMO EVIDENCIA'],
    items:[
      ['Libro de texto SEP con edición, páginas y contenido identificables sobre la invasión de las Antillas.',0],
      ['Mapa histórico con fecha, autor o institución y explicación de qué representa.',0],
      ['Carta escrita en el siglo XVI: aporta una voz de época, pero debe analizarse quién la escribió, para quién y con qué intereses.',1],
      ['Testimonio actual sobre discriminación: permite conocer una experiencia, pero no representa por sí solo a todo un grupo.',1],
      ['Video que da cifras históricas sin indicar fuente ni fecha.',2],
      ['Artículo de una institución de derechos humanos que enlaza documentos y legislación consultable.',0],
      ['Publicación viral con una imagen recortada y la frase “esto demuestra toda la verdad”.',2],
      ['Nota periodística que resume una investigación y enlaza al documento original.',1],
      ['Collage escolar sin créditos de las imágenes: sirve como expresión, pero no prueba un hecho histórico.',1],
      ['Captura de pantalla sin autor, fecha, enlace ni contexto.',2]
    ]
  });

  patch('et2_4',{
    title:'R4 · Red de causas y consecuencias',
    pairs:[
      ['Búsqueda europea de nuevas rutas comerciales hacia Asia','Impulso de exploraciones marítimas por el Atlántico'],
      ['Apoyo político y económico de la Corona de Castilla','Realización de la expedición de 1492'],
      ['Interés por controlar territorios y recursos','Establecimiento de enclaves y formas de dominación colonial'],
      ['Trabajos forzados, violencia y enfermedades introducidas','Disminución drástica de poblaciones originarias en las Antillas'],
      ['Imposición de jerarquías basadas en origen y condición','Desigualdad y discriminación institucionalizadas'],
      ['Resistencia y defensa de territorios, culturas e identidades','Conflictos y respuestas diversas frente a la invasión']
    ]
  });

  patch('et2_5',{
    title:'R5 · Carta histórica con evidencia',
    qs:[
      ['Tu equipo escribe una carta imaginaria desde la perspectiva de una persona originaria de las Antillas. ¿Qué encabezado es metodológicamente más correcto?',[
        '“Esta es la carta exacta que una persona escribió en 1492”.',
        '“Recreación histórica construida con datos de las fuentes consultadas; no reproduce palabras textuales de una persona específica”.',
        '“Relato libre: los datos históricos no importan porque buscamos empatía”.',
        '“Versión definitiva de lo que todos los pueblos originarios pensaban”.'
      ],1],
      ['Dos fuentes coinciden en la existencia de trabajos forzados, pero difieren en la manera de describir sus efectos. ¿Qué conviene hacer en la carta?',[
        'Elegir la versión más dramática.',
        'Combinar ambas como si fueran idénticas.',
        'Usar el hecho coincidente y reconocer que las interpretaciones o alcances pueden variar entre fuentes.',
        'Eliminar el tema para evitar contradicciones.'
      ],2],
      ['¿Cuál oración usa mejor evidencia sin convertir una inferencia en certeza?',[
        '“Todas las personas sintieron exactamente el mismo miedo”.',
        '“Las fuentes registran violencia y pérdida de control sobre el territorio; es razonable inferir que estas condiciones afectaron la seguridad y la vida cotidiana”.',
        '“Como hubo conflicto, nadie intentó negociar”.',
        '“Sabemos lo que pensaba cada habitante aunque no haya testimonios directos”.'
      ],1],
      ['Para formular una demanda ética desde la carta, ¿qué opción conecta mejor pasado, derechos y argumento?',[
        '“Merecemos respeto porque nuestra cultura es mejor”.',
        '“Exigimos respeto a nuestra identidad y libertad porque la dignidad no depende del origen cultural ni del poder militar”.',
        '“Queremos que nadie vuelva a tener una cultura distinta”.',
        '“Pedimos respeto únicamente si los demás están de acuerdo con nuestras costumbres”.'
      ],1],
      ['Una compañera propone poner entre comillas una frase inventada porque “suena histórica”. ¿Qué decisión es más rigurosa?',[
        'Usarla si parece creíble.',
        'Usarla, pero sin autor.',
        'Transformarla en una paráfrasis o recreación claramente identificada y respaldarla con información verificable.',
        'Conservar las comillas y agregar una imagen antigua.'
      ],2],
      ['¿Qué cierre demuestra mayor conciencia histórica?',[
        '“Lo ocurrido en 1492 explica por sí solo cualquier discriminación actual”.',
        '“El pasado y el presente son idénticos”.',
        '“Estudiar relaciones de dominación del pasado ayuda a reconocer continuidades y diferencias, sin suponer que los contextos son iguales”.',
        '“Los problemas actuales no tienen ninguna relación posible con procesos históricos”.'
      ],2]
    ]
  });

  patch('et2_6',{
    title:'R6 · Dilemas de derechos',
    qs:[
      ['En una exposición, el equipo quiere representar una identidad juvenil sólo con una fotografía encontrada en redes. ¿Qué decisión protege mejor el derecho a la identidad?',[
        'Usar la foto y afirmar que representa a todo el grupo.',
        'Buscar varias fuentes, evitar estereotipos y explicar que dentro de un mismo grupo existen diferencias.',
        'No hablar de identidades para evitar equivocarse.',
        'Elegir la imagen más llamativa aunque no tenga contexto.'
      ],1],
      ['Un reglamento escolar aplica la misma actividad a todos, pero una barrera física impide que una estudiante participe. ¿Cuál análisis es más adecuado?',[
        'Como la regla es igual para todos, ya es justa.',
        'La igualdad formal no basta si las condiciones producen exclusión; se requieren ajustes que permitan participar en condiciones dignas.',
        'La estudiante debe adaptarse sin cambios.',
        'Es mejor excluirla de la actividad para evitar problemas.'
      ],1],
      ['Un compañero defiende una opinión distinta a la tuya sobre una práctica cultural. ¿Qué respuesta combina libertad y respeto?',[
        'Aceptar su opinión como verdadera para no discutir.',
        'Cuestionar sus argumentos con razones y evidencia sin descalificar su identidad ni su derecho a expresarse.',
        'Evitar que hable porque podría generar conflicto.',
        'Responder con una generalización sobre su grupo.'
      ],1],
      ['Una fuente histórica presenta a una población dominada como “inferior”. ¿Qué lectura crítica corresponde?',[
        'Repetir esa descripción porque aparece en una fuente antigua.',
        'Analizar quién produjo la fuente, sus intereses y el contexto de poder, y contrastarla con otras evidencias.',
        'Descartar toda fuente antigua automáticamente.',
        'Sustituirla por una opinión personal sin investigar.'
      ],1],
      ['Un estudiante dice: “Si respetamos todas las diferencias, entonces no podemos criticar ninguna práctica”. ¿Qué respuesta es más sólida?',[
        'Es correcto: respetar significa aceptar cualquier conducta.',
        'El respeto a la diversidad no obliga a aceptar prácticas que vulneran derechos; pueden cuestionarse con criterios de dignidad, igualdad y libertad.',
        'Sólo la mayoría decide qué prácticas son válidas.',
        'Cada grupo puede negar derechos si forma parte de su tradición.'
      ],1],
      ['¿Cuál criterio permite distinguir inclusión de simple tolerancia?',[
        'Que las personas diferentes puedan estar presentes aunque no participen.',
        'Que existan condiciones reales para participar, expresarse y ejercer derechos sin discriminación.',
        'Que todos actúen y piensen de la misma manera.',
        'Que no se hable de diferencias.'
      ],1]
    ]
  });

  patch('et2_7',{
    title:'R7 · Memorama de identidad y derechos',
    pairs:[
      ['Identidad','Construcción personal, social y cultural formada por experiencias, valores, pertenencias y formas de reconocerse.'],
      ['Pertenencia','Vínculo con uno o varios grupos que puede cambiar con el tiempo y no elimina la autonomía personal.'],
      ['Dignidad','Valor inherente de toda persona que no depende de su origen, cultura, apariencia o condición.'],
      ['Inclusión','Condiciones que permiten participar y ejercer derechos, no sólo estar presente.'],
      ['Discriminación','Trato desigual que limita derechos por características reales o atribuidas a una persona o grupo.'],
      ['Prejuicio','Juicio previo sostenido sin evidencia suficiente que puede alimentar prácticas discriminatorias.'],
      ['Racismo','Jerarquización de personas o grupos a partir de rasgos racializados, con efectos de desigualdad y exclusión.'],
      ['Xenofobia','Rechazo u hostilidad hacia personas consideradas extranjeras o ajenas a una comunidad.'],
      ['Libertad','Capacidad de decidir y expresarse dentro del marco de los derechos propios y de otras personas.'],
      ['Respeto','Reconocimiento de diferencias y derechos sin imponer inferioridad, burla o exclusión.']
    ]
  });

  patch('et2_8',{
    title:'R8 · Crucigrama del respeto',
    entries:[
      {word:'RESPETO',r:8,c:5,dir:'H',clue:'Principio que exige reconocer diferencias sin negar la dignidad ni los derechos de otras personas.'},
      {word:'DERECHO',r:7,c:6,dir:'V',clue:'Garantía que protege libertades y condiciones necesarias para una vida digna.'},
      {word:'LIBERTAD',r:5,c:9,dir:'V',clue:'Capacidad de decidir y expresarse responsablemente sin vulnerar derechos ajenos.'},
      {word:'PERTENENCIA',r:6,c:5,dir:'V',clue:'Vínculo por el que una persona se reconoce como parte de uno o varios grupos.'},
      {word:'TOLERANCIA',r:7,c:11,dir:'V',clue:'Disposición a convivir con diferencias; es insuficiente si no se acompaña de igualdad de derechos.'},
      {word:'DIGNIDAD',r:6,c:8,dir:'H',clue:'Valor inherente que poseen todas las personas sin depender de su origen o condición.'},
      {word:'INCLUSION',r:15,c:5,dir:'H',clue:'Creación de condiciones reales para participar sin barreras ni exclusiones injustificadas.'}
    ]
  });

  patch('et2_9',{
    title:'R9 · Decisiones contra la discriminación',
    scenes:[
      {q:'Durante una exposición alguien afirma: “Ese grupo juvenil siempre es conflictivo”. ¿Cuál es la mejor intervención?',opts:[
        'Responder que ningún integrante de ese grupo comete errores.',
        'Pedir evidencia, señalar que una generalización no describe a todas las personas y volver al caso concreto.',
        'Cambiar de tema para evitar tensión.'
      ],ans:1},
      {q:'Una publicación denuncia discriminación, pero sólo muestra una captura sin fecha ni contexto. ¿Qué haces antes de compartirla?',opts:[
        'La comparto porque el tema es importante.',
        'Busco la publicación original, fecha, contexto y otras fuentes; si no puedo verificarla, no la uso como evidencia principal.',
        'La rechazo porque todas las redes sociales son falsas.'
      ],ans:1},
      {q:'Dos estudiantes defienden prácticas culturales distintas y ambas invocan “el respeto”. ¿Qué criterio ayuda a evaluar el desacuerdo?',opts:[
        'La práctica de la mayoría debe imponerse.',
        'Revisar si alguna práctica vulnera dignidad, igualdad, libertad u otros derechos, además de escuchar sus razones.',
        'Todas las prácticas son igualmente correctas sólo por ser culturales.'
      ],ans:1},
      {q:'En una actividad, una barrera de acceso deja fuera a un compañero. El equipo tiene poco tiempo. ¿Qué decisión es más justa?',opts:[
        'Continuar y compensarlo después con una calificación.',
        'Ajustar la dinámica para que pueda participar de manera significativa, aunque implique reorganizar tareas.',
        'Pedirle que observe porque modificar la actividad sería dar ventaja.'
      ],ans:1},
      {q:'Comparas una jerarquía racial del periodo colonial con un caso actual de discriminación. ¿Cómo evitas una comparación simplista?',opts:[
        'Afirmando que ambos casos son exactamente iguales.',
        'Identificando semejanzas en mecanismos de exclusión y diferencias en contexto, leyes, actores y formas de resistencia.',
        'Evitando cualquier vínculo entre pasado y presente.'
      ],ans:1},
      {q:'Tu grupo prepara el mensaje final del “Día de las identidades”. ¿Cuál expresa mejor pensamiento crítico?',opts:[
        '“Todas las diferencias deben celebrarse sin cuestionarlas”.',
        '“Defender la diversidad implica respetar identidades y, al mismo tiempo, cuestionar prácticas que vulneren derechos”.',
        '“Para convivir mejor, todos debemos pensar igual”.'
      ],ans:1}
    ]
  });

  patch('et2_10',{
    title:'R10 · Escape DIGNIDAD',
    locks:[
      {letter:'D',q:'Una noticia del periódico mural afirma que una expedición “descubrió tierras vacías”. ¿Qué revisión abre el primer candado?',opts:[
        'Conservar la frase porque es breve.',
        'Contrastar con evidencia sobre las poblaciones que ya habitaban las Antillas y corregir el enfoque.',
        'Cambiar “descubrió” por una palabra más llamativa.'
      ],ans:1},
      {letter:'I',q:'Una imagen del collage muestra una identidad juvenil sin crédito ni contexto. ¿Qué mejora es más rigurosa?',opts:[
        'Agregar procedencia, contexto y una nota que evite presentar esa imagen como representación de todo el grupo.',
        'Aumentar su tamaño para que se entienda mejor.',
        'Añadir una etiqueta general sobre cómo “son” esas personas.'
      ],ans:0},
      {letter:'G',q:'Dos fuentes coinciden en un hecho pero difieren en su interpretación. ¿Qué debes hacer?',opts:[
        'Elegir la que confirme tu opinión inicial.',
        'Distinguir el hecho compartido de las interpretaciones y explicar por qué pueden diferir.',
        'Promediar ambas versiones.'
      ],ans:1},
      {letter:'N',q:'La carta imaginaria incluye una frase que nadie dijo literalmente. ¿Cómo debe presentarse?',opts:[
        'Entre comillas para que parezca auténtica.',
        'Como recreación o paráfrasis sustentada en fuentes, sin atribuirla como cita textual.',
        'Sin aclaración porque pertenece a un producto creativo.'
      ],ans:1},
      {letter:'I',q:'Una regla trata igual a todo el grupo, pero produce exclusión para una persona. ¿Qué principio orienta mejor la corrección?',opts:[
        'Mantener la regla porque igualdad siempre significa aplicar exactamente lo mismo.',
        'Buscar condiciones equitativas que permitan ejercer el mismo derecho a participar.',
        'Eliminar la actividad para todos.'
      ],ans:1},
      {letter:'D',q:'¿Cuál afirmación diferencia respeto de aprobación automática?',opts:[
        'Respetar a una persona exige aceptar cualquier práctica que realice.',
        'Puedo cuestionar una práctica con argumentos y derechos sin negar la dignidad de quienes la realizan.',
        'Si no comparto una práctica, debo evitar a quienes la realizan.'
      ],ans:1},
      {letter:'A',q:'Al relacionar discriminación colonial y actual, ¿qué análisis es más sólido?',opts:[
        'Buscar continuidades y diferencias de contexto, actores, normas y mecanismos de exclusión.',
        'Afirmar que todos los casos de discriminación tienen la misma causa.',
        'Evitar el pasado porque no aporta al presente.'
      ],ans:0},
      {letter:'D',q:'¿Qué conclusión integra mejor el PPA “Tenemos derecho a ser diferentes”?',opts:[
        'Las identidades merecen respeto cuando coinciden con la mayoría.',
        'La diversidad puede convivir con desacuerdos, pero ninguna diferencia justifica negar dignidad, libertad o igualdad de derechos.',
        'La mejor convivencia ocurre cuando las diferencias dejan de expresarse.'
      ],ans:1}
    ]
  });
})();
