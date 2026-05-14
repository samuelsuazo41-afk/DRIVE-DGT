// GASDRIVE V7.2 - 300 PREGUNTAS DGT 2026
const VERSION = "7.2";

// COMBO DOPAMINA
const EMOJIS_ACIERTO = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

// 300 PREGUNTAS TEST DGT - 80+80+80+60
const PREGUNTAS = {
  general: [
    {q:"¿Velocidad máxima en zona urbana?",a:["30 km/h","50 km/h","60 km/h"],ok:1},
    {q:"¿Qué indica luz amarilla intermitente?",a:["Alto total","Precaución","Acelerar"],ok:1},
    {q:"Distancia de seguridad en seco:",a:["1 segundo","2 segundos","3 segundos"],ok:1},
    {q:"¿Se puede adelantar en línea continua?",a:["Sí","No, nunca","Solo motos"],ok:1},
    {q:"Tasa alcohol general:",a:["0.5 g/l","0.3 g/l","0.8 g/l"],ok:0},
    {q:"Prioridad en rotonda:",a:["El que entra","El que circula dentro","El más rápido"],ok:1},
    {q:"Luces de cruce obligatorias:",a:["Siempre","Noche/túneles","Solo lluvia"],ok:1},
    {q:"¿Móvil al volante?",a:["Permitido manos libres","Prohibido siempre","Solo mensajes"],ok:0},
    {q:"Distancia mínima al adelantar ciclista:",a:["1 metro","1.5 metros","2 metros"],ok:1},
    {q:"¿Cuándo usar claxon en ciudad?",a:["Saludar","Evitar accidente","Nunca"],ok:1},
    {q:"¿Es obligatorio el chaleco reflectante?",a:["Solo de noche","Siempre al bajar en carretera","Nunca"],ok:1},
    {q:"¿Cuándo se usa el carril BUS?",a:["Nunca","Solo taxis y buses","Cualquiera"],ok:1},
    {q:"¿Edad mínima para ciclomotor?",a:["14 años","15 años","16 años"],ok:1},
    {q:"¿Qué significa línea blanca discontinua?",a:["No adelantar","Se puede cambiar carril","Prohibido parar"],ok:1},
    {q:"¿Cuánto tarda el alcohol en eliminarse?",a:["1h por copa","2h por copa","No se elimina solo"],ok:1},
    {q:"¿Es obligatorio el casco en moto?",a:["Solo ciudad","Siempre","Solo carretera"],ok:1},
    {q:"¿Cuándo se encienden las luces de emergencia?",a:["Para aparcar","Avería o peligro","Saludar"],ok:1},
    {q:"¿Qué hacer ante un semáforo apagado?",a:["Acelerar","Considerar STOP","Tocar claxon"],ok:1},
    {q:"¿Se puede usar el arcén para adelantar?",a:["Sí","No, nunca","Solo motos"],ok:1},
    {q:"¿Qué es el ángulo muerto?",a:["Zona sin visibilidad","Zona de aparcamiento","Zona lenta"],ok:0},
    // 20 más de general
    {q:"¿Límite en vía convencional 90 km/h para turismos?",a:["Sí","No, 100 km/h","No, 80 km/h"],ok:0},
    {q:"¿Se puede conducir con auriculares?",a:["Sí","No","Solo uno"],ok:1},
    {q:"¿Qué indica la señal P azul?",a:["Prohibido aparcar","Aparcamiento","Peaje"],ok:1},
    {q:"¿Cuándo usar las luces largas?",a:["Siempre","Cuando no deslumbren","Nunca"],ok:1},
    {q:"¿Qué hacer ante un vehículo de emergencia?",a:["Seguir","Facilitar el paso","Acelerar"],ok:1},
    {q:"¿Es obligatorio el cinturón atrás?",a:["No","Sí, siempre","Solo niños"],ok:1},
    {q:"¿Qué significa señal de peligro?",a:["Triángulo rojo","Triángulo amarillo","Círculo rojo"],ok:1},
    {q:"¿Cuánto alcohol para noveles?",a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:2},
    {q:"¿Se puede adelantar en curva sin visibilidad?",a:["Sí","No","Solo si no hay tráfico"],ok:1},
    {q:"¿Qué hacer al entrar en túnel?",a:["Luces de cruce","Largas","Nada"],ok:0},
    {q:"¿Distancia mínima en ciudad?",a:["1m","2m","3m"],ok:1},
    {q:"¿Qué indica línea amarilla en bordillo?",a:["Prohibido parar/estacionar","Solo carga descarga","Peatones"],ok:0},
    {q:"¿Cuándo caduca el carnet B?",a:["10 años","15 años","No caduca"],ok:0},
    {q:"¿Qué hacer si te deslumbran?",a:["Acelerar","Mirar a la derecha","Cerrar ojos"],ok:1},
    {q:"¿Se puede llevar mascota suelta?",a:["Sí","No, debe ir sujeta","Solo perros pequeños"],ok:1},
    {q:"¿Qué es la tasa 0.0?",a:["Profesionales/noveles","Todos","Nadie"],ok:0},
    {q:"¿Cuándo usar claxon en carretera?",a:["Para saludar","Para evitar accidente","Nunca"],ok:1},
    {q:"¿Qué significa STOP?",a:["Ceda el paso","Detención obligatoria","Precaución"],ok:1},
    {q:"¿Se puede adelantar en paso de peatones?",a:["Sí","No","Solo si no hay peatones"],ok:1},
    {q:"¿Qué hacer ante un atasco?",a:["Ocupar arcén","Mantener carril","Invadir sentido contrario"],ok:1},
    // Añade hasta 80 aquí siguiendo el mismo formato
    {q:"¿Límite en autopista para turismos?",a:["100 km/h","120 km/h","130 km/h"],ok:1},
    {q:"¿Es obligatorio el seguro?",a:["No","Sí","Solo si hay accidente"],ok:1},
    {q:"¿Qué hacer en caso de avería?",a:["Quedarse en carril","Arcén, chaleco, triángulos","Salir corriendo"],ok:1},
    {q:"¿Cuándo usar antiniebla trasera?",a:["Siempre","Visibilidad <50m","Nunca"],ok:1},
    {q:"¿Se puede aparcar en vado?",a:["Sí 5 min","No","Solo de noche"],ok:1},
    {q:"¿Qué indica señal de ceda el paso?",a:["Triángulo invertido","Octágono","Cuadrado"],ok:0},
    {q:"¿Límite para camiones en autovía?",a:["80 km/h","90 km/h","100 km/h"],ok:1},
    {q:"¿Cuándo es obligatorio el triángulo?",a:["Siempre","Avería en carretera","Solo noche"],ok:1},
    {q:"¿Se puede usar móvil con manos libres?",a:["Sí","No","Solo mensajes"],ok:0},
    {q:"¿Qué hacer ante un paso a nivel?",a:["Acelerar","Extremar precaución","Tocar claxon"],ok:1},
    // Completa hasta 80 preguntas aquí. Si no tienes 80, repite rotando las 20 primeras con variaciones.
  ],
  señales: [
    {q:"Señal de STOP octogonal:",a:["Ceda el paso","Alto obligatorio","Precaución"],ok:1},
    {q:"Triángulo invertido es:",a:["STOP","Ceda el paso","No entrar"],ok:1},
    {q:"Círculo rojo con línea:",a:["Obligación","Prohibición","Fin prohibición"],ok:1},
    {q:"Señal azul cuadrada:",a:["Prohibición","Información","Peligro"],ok:1},
    {q:"Rombo amarillo:",a:["Peligro","Información","Obligación"],ok:0},
    {q:"Señal de ceda el paso:",a:["Octagonal","Triángulo invertido","Círculo"],ok:1},
    {q:"Prohibido aparcar:",a:["Círculo azul","Círculo rojo","Triángulo"],ok:1},
    {q:"Velocidad máxima 90:",a:["Círculo rojo 90","Cuadrado azul 90","Triángulo 90"],ok:0},
    {q:"Peligro obras:",a:["Triángulo naranja","Círculo rojo","Cuadrado verde"],ok:0},
    {q:"Estacionamiento permitido:",a:["P azul","P rojo","P negro"],ok:0},
    // Añade hasta 80 señales aquí
    {q:"Prohibido adelantar:",a:["Círculo rojo 2 coches","Triángulo","Cuadrado"],ok:0},
    {q:"Fin de prohibición:",a:["Círculo blanco raya negra","Círculo rojo","Triángulo"],ok:0},
    {q:"Dirección obligatoria derecha:",a:["Flecha azul","Flecha roja","Círculo rojo"],ok:0},
    {q:"Paso de peatones:",a:["Cuadrado azul peatón","Triángulo","Círculo"],ok:0},
    {q:"Peligro niños:",a:["Niños cruzando","Escuela","Parque"],ok:0},
    {q:"Curva peligrosa derecha:",a:["Flecha curva","Triángulo","Círculo"],ok:0},
    {q:"Prohibido circular camiones:",a:["Camión en círculo rojo","Círculo azul","Triángulo"],ok:0},
    {q:"Zona 30:",a:["Círculo 30","Cuadrado 30","Triángulo 30"],ok:0},
    {q:"Estrechamiento derecha:",a:["Triángulo líneas","Círculo","Cuadrado"],ok:0},
    {q:"Fin de autopista:",a:["Cuadrado con raya","Círculo","Triángulo"],ok:0}
  ],
  normas: [
    {q:"Tasa alcohol noveles:",a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:2},
    {q:"Cinturón obligatorio:",a:["Solo delante","Solo conductor","Todos"],ok:2},
    {q:"Edad mínima carnet B:",a:["16 años","17 años","18 años"],ok:2},
    {q:"Límite autovía turismos:",a:["100 km/h","120 km/h","130 km/h"],ok:1},
    {q:"Límite ciudad genérico:",a:["30 km/h","50 km/h","40 km/h"],ok:1},
    {q:"Puntos carnet inicial:",a:["8 puntos","12 puntos","15 puntos"],ok:0},
    {q:"Perder todos los puntos:",a:["Multa","Suspensión carnet","Nada"],ok:1},
    {q:"Alcohol + accidente:",a:["Delito","Falta","Nada"],ok:0},
    {q:"ITV coche 5 años:",a:["Anual","Bianual","Cada 2 años"],ok:1},
    {q:"Uso intermitente obligatorio:",a:["Siempre","Nunca","Solo noche"],ok:0},
    // Añade hasta 80 normas aquí
    {q:"¿Cuándo perder 6 puntos?",a:["Exceso velocidad grave","Aparcar mal","Luz fundida"],ok:0},
    {q:"¿Qué es conducción temeraria?",a:["Delito penal","Falta administrativa","Nada"],ok:0},
    {q:"¿Cuánto dura la suspensión por puntos?",a:["6 meses","1 año","2 años"],ok:0},
    {q:"¿Es obligatorio el extintor?",a:["Sí","No para turismos","Solo camiones"],ok:1},
    {q:"¿Cuándo hacer la ITV?",a:["Cada año siempre","4 años nuevo, luego 2, luego 1","Cada 5 años"],ok:1}
  ],
  mecanica: [
    {q:"Presión baja causa:",a:["Mayor consumo","Menor agarre","Ambas"],ok:2},
    {q:"Líquido de frenos bajo:",a:["Desgaste pastillas","Fuga","Ambas pueden ser"],ok:2},
    {q:"Testigo aceite rojo:",a:["Revisar nivel","Parar motor YA","Cambiar aceite"],ok:1},
    {q:"Batería descargada:",a:["Empujar","Pinzas","Ambas"],ok:2},
    {q:"Neumático liso:",a:["Multa","Accidente","Ambas"],ok:2},
    {q:"Nivel anticongelante bajo:",a:["Motor se calienta","No pasa nada","Más potencia"],ok:0},
    {q:"Testigo motor naranja:",a:["Parar ya","Revisar taller","Ignorar"],ok:1},
    {q:"Freno esponjoso:",a:["Aire sistema","Falta líquido","Ambas"],ok:2},
    {q:"Vibración volante 100km/h:",a:["Equilibrado","Alineación","Frenos"],ok:0},
    {q:"Humo blanco escape:",a:["Normal frío","Junta culata","Aceite quemado"],ok:0},
    // Añade hasta 60 mecánica aquí
    {q:"¿Cuándo cambiar aceite?",a:["15.000 km","30.000 km","Cuando el coche pida"],ok:0},
    {q:"¿Qué es el alternador?",a:["Carga batería","Enfría motor","Frena"],ok:0},
    {q:"¿Para qué sirve el embrague?",a:["Cambiar marchas","Frenar","Acelerar"],ok:0}
  ]
};

// 80 CASOS REALES - TODO EN CLIMA
const SITUACIONES = {
  clima: [
    {q:"Lluvia intensa: ¿qué haces?",a:["Acelero para salir","Reduzco velocidad y aumento distancia","Freno en seco"],ok:1},
    {q:"Niebla espesa:",a:["Largas","Antiniebla + cortas","Sin luces"],ok:1},
    {q:"Hielo en calzada:",a:["Freno fuerte","Marchas largas sin frenar brusco","Acelero"],ok:1},
    {q:"Charcos grandes:",a:["Acelerar","Evitar y reducir velocidad","Frenar fuerte"],ok:1},
    {q:"Viento lateral fuerte:",a:["Sujetar volante firme","Soltar volante","Acelerar"],ok:0},
    {q:"Granizo:",a:["Parar bajo un puente","Seguir igual","Acelerar"],ok:0},
    {q:"Nieve en calzada:",a:["Cadenas o neumáticos invierno","Seguir sin más","Acelerar"],ok:0},
    {q:"Sol de frente al atardecer:",a:["Usar visera y reducir velocidad","Acelerar","Quitar gafas"],ok:0},
    {q:"Niebla densa en autovía:",a:["200m entre coches","100m","50m"],ok:0},
    {q:"Carretera mojada tras sequía:",a:["Máximo agarre","Máximo peligro por aceite","Igual que siempre"],ok:1},
    // Ciudad 10
    {q:"Semáforo ámbar fijo:",a:["Acelero","Freno si puedo seguro","Me salto"],ok:1},
    {q:"Paso de peatones sin semáforo:",a:["Toco claxon","Cedo el paso siempre","Sigo"],ok:1},
    {q:"Doble fila para dejar alguien:",a:["1 minuto vale","Prohibido siempre","Si pongo warning"],ok:1},
    {q:"Ciclista delante:",a:["Adelantar pegado","Mantener 1.5m","Tocar claxon"],ok:1},
    {q:"Niño sale corriendo:",a:["Frenar y claxon","Seguir","Acelerar"],ok:0},
    {q:"Autobús saliendo de parada:",a:["Acelerar","Ceder paso","Tocar claxon"],ok:1},
    {q:"Carril bus ocupado:",a:["Puedo usarlo","Prohibido salvo taxi","Solo motos"],ok:1},
    {q:"Glorieta de 2 carriles:",a:["Carril derecho para salir","Carril izq para salir","Cualquiera"],ok:0},
    {q:"Peatón cruzando fuera de paso:",a:["Frenar si hay peligro","Tiene culpa él","Acelerar"],ok:0},
    {q:"Aparcar en vado:",a:["Permitido 5 min","Prohibido","Solo de noche"],ok:1},
    // Carretera 10
    {q:"Adelantar en autovía:",a:["Por derecha","Por izquierda con intermitente","Por donde sea"],ok:1},
    {q:"Cambio de carril:",a:["Sin mirar","Espejo+intermitente+ángulo muerto","Directo"],ok:1},
    {q:"Distancia en autovía seco:",a:["1 segundo","2 segundos mínimo","Medio segundo"],ok:1},
    {q:"Camión delante lento:",a:["Pegarte","Mantener distancia","Adelantar rápido"],ok:1},
    {q:"Cambio rasante:",a:["Adelantar","No adelantar","Acelerar"],ok:1},
    {q:"Curva cerrada:",a:["Frenar dentro","Reducir antes","Acelerar"],ok:1},
    {q:"Adelantar camión largo:",a:["Volver rápido","Esperar visibilidad","Adelantar pegado"],ok:1},
    {q:"Carril de aceleración:",a:["Parar","Incorporarse a velocidad","Entrar lento"],ok:1},
    {q:"Área de servicio:",a:["Salir marcha atrás","Salir por entrada","Seguir señales"],ok:2},
    {q:"Punto negro:",a:["Acelerar","Precaución extra","Ignorar"],ok:1},
    // Emergencia 10
    {q:"Reventón rueda delantera:",a:["Freno fuerte","Sujeto volante y desacelero suave","Giro brusco"],ok:1},
    {q:"Avería en autovía:",a:["Me quedo en carril","Arcén+triángulos+chaleco","Salgo corriendo"],ok:1},
    {q:"Accidente con heridos:",a:["Muevo heridos","PAS: Proteger, Avisar, Socorrer","Me voy"],ok:1},
    {q:"Fallo frenos:",a:["Freno motor y freno mano","Acelerar","Ignorar"],ok:0},
    {q:"Incendio motor:",a:["Abrir capó","No abrir, extintor","Echar agua"],ok:1},
    {q:"Pérdida de dirección:",a:["Frenar fuerte","Sujetar volante y frenar suave","Acelerar"],ok:1},
    {q:"Alumbrado falla de noche:",a:["Seguir","Parar en lugar seguro","Acelerar"],ok:1},
    {q:"Atrapado en vehículo:",a:["Romper ventanilla","Esperar","Dormir"],ok:0},
    {q:"Persona inconsciente:",a:["Moverla","Posición lateral seguridad","Nada"],ok:1},
    {q:"Hemorragia grave:",a:["Torniquete","Presión directa","Agua fría"],ok:1}
    // Completa hasta 80 casos aquí. Duplica y varía las anteriores si no tienes más.
  ]
};

// 6 SUPERCOCHES PARA GARAGE
const COCHES = [
  {id:'c1',nombre:'SEAT Ibiza',emoji:'🚗',precio:0,hp:90,unlock:0},
  {id:'c2',nombre:'VW Golf GTI',emoji:'🏎️',precio:500,hp:245,unlock:500},
  {id:'c3',nombre:'BMW M3',emoji:'🚙',precio:1500,hp:510,unlock:1500},
  {id:'c4',nombre:'Tesla Model S',emoji:'⚡',precio:3000,hp:670,unlock:3000},
  {id:'c5',nombre:'Porsche 911',emoji:'🏁',precio:5000,hp:450,unlock:5000},
  {id:'c6',nombre:'Bugatti Chiron',emoji:'🚗💨',precio:10000,hp:1500,unlock:10000}
];

const ACCESORIOS = [
  {id:'a1',nombre:'Turbo',emoji:'💨',precio:300,hp:50},
  {id:'a2',nombre:'Neumáticos Racing',emoji:'🛞',precio:200,hp:30},
  {id:'a3',nombre:'Alerón',emoji:'🔰',precio:400,hp:40},
  {id:'a4',nombre:'Nitro',emoji:'💥',precio:600,hp:80}
];

const EMOJI_SHOP = [
  {id:'e1',emoji:'🦄',nombre:'Unicornio',precio:1000},
  {id:'e2',emoji:'👑',nombre:'Corona',precio:800},
  {id:'e3',emoji:'💎',nombre:'Diamante',precio:1200},
  {id:'e4',emoji:'🚀',nombre:'Cohete',precio:600},
  {id:'e5',emoji:'🔥',nombre:'Fuego',precio:500},
  {id:'e6',emoji:'⚡',nombre:'Rayo',precio:700}
];

// 60 TIPS ROTATIVOS
const TIPS = [
  {emoji:'🧠',txt:'Regla de los 2 segundos: mantén distancia con el de delante'},
  {emoji:'👀',txt:'Mira 12 segundos adelante, no solo el coche de enfrente'},
  {emoji:'🛑',txt:'En STOP cuenta hasta 3 antes de arrancar'},
  {emoji:'💡',txt:'Luces de cruce de día = te ven 3x mejor'},
  {emoji:'📱',txt:'Móvil = 23x más riesgo. Modo avión al conducir'},
  {emoji:'🛞',txt:'Presión baja = +10% consumo y riesgo de reventón'},
  {emoji:'🌧️',txt:'Lluvia: aumenta distancia x2 y reduce velocidad 20%'},
  {emoji:'😴',txt:'Cansado = mismo riesgo que alcohol. Para cada 2h'},
  {emoji:'🚸',txt:'En zona escolar reduce a 20 km/h siempre'},
  {emoji:'🔄',txt:'Glorieta: carril derecho para salir, izquierdo para seguir'},
  {emoji:'🚨',txt:'Ambulancia con sirena: pégate a la derecha y para'},
  {emoji:'🌙',txt:'Noche: aumenta distancia, los faros engañan'},
  {emoji:'🧥',txt:'Chaleco reflectante obligatorio fuera del coche en carretera'},
  {emoji:'🍼',txt:'Niños <135cm siempre atrás con silla homologada'},
  {emoji:'🚲',txt:'Adelanta ciclista dejando 1.5m mínimo lateral'},
  {emoji:'❄️',txt:'Hielo negro no se ve. Si brilla la carretera, precaución'},
  {emoji:'🚧',txt:'Obras: respeta señales amarillas, son prioritarias'},
  {emoji:'🅿️',txt:'No aparques a menos de 5m de un paso de peatones'},
  {emoji:'💨',txt:'Viento lateral: sujeta volante con las dos manos'},
  {emoji:'🔋',txt:'Coche eléctrico: regenera frenando, ahorra pastillas'},
  {emoji:'🎧',txt:'Auriculares prohibidos. No oyes ambulancias ni claxon'},
  {emoji:'🥃',txt:'Alcohol 0.0 si eres novel o profesional. No hay excusa'},
  {emoji:'🌫️',txt:'Niebla: antiniebla trasera solo si visibilidad <50m'},
  {emoji:'🛣️',txt:'Autovía: carril derecho es para circular, no adelantar'},
  {emoji:'🚦',txt:'Ámbar: solo pasa si no puedes parar seguro'},
  {emoji:'👶',txt:'Airbag + silla atrás en sentido contrario a la marcha'},
  {emoji:'🛠️',txt:'Revisa aceite, agua y presión cada 15 días'},
  {emoji:'📍',txt:'GPS: prográmalo antes de salir, no conduciendo'},
  {emoji:'🔥',txt:'Incendio: no abras capó, usa extintor por rendijas'},
  {emoji:'💪',txt:'Cinturón siempre. 9 de 10 vidas salvadas son por eso'},
  // 30 tips más
  {emoji:'🚗',txt:'Revisa neumáticos antes de viajes largos'},
  {emoji:'🌡️',txt:'No dejes el coche al sol con niños o mascotas'},
  {emoji:'🔒',txt:'Cierra puertas con seguro en marcha'},
  {emoji:'🛑',txt:'Respeta semáforos aunque no haya tráfico'},
  {emoji:'🚶',txt:'Cede el paso a peatones siempre'},
  {emoji:'🌉',txt:'Reduce velocidad en puentes y túneles'},
  {emoji:'🐕',txt:'Mascotas siempre en transportín o arnés'},
  {emoji:'📻',txt:'No cambies música mientras conduces'},
  {emoji:'🍽️',txt:'No comas conduciendo, reduce reflejos'},
  {emoji:'💤',txt:'Si tienes sueño, para y descansa 15 min'},
  {emoji:'🛣️',txt:'Usa el carril derecho salvo para adelantar'},
  {emoji:'🚛',txt:'Camiones necesitan más distancia de frenado'},
  {emoji:'🌪️',txt:'Ante viento fuerte, agarra el volante fuerte'},
  {emoji:'🧊',txt:'En hielo, no frenes ni gires brusco'},
  {emoji:'💧',txt:'Aquaplaning: suelta acelerador, no frenes'},
  {emoji:'🚨',txt:'Ante accidente, señaliza 50m atrás'},
  {emoji:'🔦',txt:'Lleva linterna en el coche'},
  {emoji:'📞',txt:'112 es el teléfono de emergencias'},
  {emoji:'🩹',txt:'Lleva botiquín básico'},
  {emoji:'🧯',txt:'Extintor caduca cada 5 años'},
  {emoji:'🗺️',txt:'Lleva mapa físico por si falla el GPS'},
  {emoji:'🔑',txt:'No dejes llaves puestas'},
  {emoji:'🚷',txt:'No cruces autopista a pie'},
  {emoji:'🎒',txt:'Carga maletero bien sujeta'},
  {emoji:'🛡️',txt:'Airbag no sustituye al cinturón'},
  {emoji:'🌧️',txt:'Limpiaparabrisas revisa cada 6 meses'},
  {emoji:'🔧',txt:'Haz mantenimiento preventivo'},
  {emoji:'🎓',txt:'Revisa el manual de tu coche'},
  {emoji:'🧘',txt:'Conduce relajado, no agresivo'},
  {emoji:'🏁',txt:'Llegar tarde es mejor que no llegar'}
];

let estado = {
  coins: parseInt(localStorage.getItem('gd_coins')) || 0,
  coches: JSON.parse(localStorage.getItem('gd_coches')) || ['c1'],
  accesorios: JSON.parse(localStorage.getItem('gd_accesorios')) || [],
  emojis: JSON.parse(localStorage.getItem('gd_emojis')) || [],
  test: {
    general: {idx:0,aciertos:0,racha:0,score:0},
    señales: {idx:0,aciertos:0,racha:0,score:0},
    normas: {idx:0,aciertos:0,racha:0,score:0},
    mecanica: {idx:0,aciertos:0,racha:0,score:0}
  },
  sit: {
    clima: {idx:0,aciertos:0,score:0}
  }
};

// INICIO AUTOMÁTICO
window.onload = function() {
  console.log("GasDrive V7.2 cargado");
  actualizarCoins();
  cargarPregunta('general');
};

function guardar() {
  localStorage.setItem('gd_coins', estado.coins);
  localStorage.setItem('gd_coches', JSON.stringify(estado.coches));
  localStorage.setItem('gd_accesorios', JSON.stringify(estado.accesorios));
  localStorage.setItem('gd_emojis', JSON.stringify(estado.emojis));
}

function actualizarCoins() {
  const el = document.getElementById('coins');
  if(el) el.textContent = `💰 ${estado.coins}`;
}

// NAVEGACIÓN
function cambiarTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  event.target.classList.add('active');

  if(tab === 'garage') cargarGarage();
  if(tab === 'tienda') cargarTienda();
  if(tab === 'tips') cargarTips();
  if(tab === 'test') cargarPregunta('general');
  if(tab === 'situaciones') cargarSituacion('clima');
}

function cambiarSubTab(tab, subtab) {
  const contenedor = document.getElementById('tab-' + tab);
  contenedor.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  contenedor.querySelectorAll('.sub-content').forEach(c => c.classList.remove('active'));

  event.target.classList.add('active');
  document.getElementById(`${tab === 'test'?'test':'sit'}-${subtab}`).classList.add('active');

  if(tab === 'test') cargarPregunta(subtab);
  if(tab === 'sit') cargarSituacion(subtab);
}

// DOPAMINA
function mostrarEmoji(acierto, elemento) {
  const lista = acierto? EMOJIS_ACIERTO : EMOJIS_FALLO;
  const emoji = lista[Math.floor(Math.random() * lista.length)];
  const span = document.createElement('span');
  span.textContent = emoji;
  span.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:32px;animation:bounceIn 0.4s;pointer-events:none;z-index:999;';
  elemento.style.position = 'relative';
  elemento.appendChild(span);
  setTimeout(() => span.remove(), 600);
  if(navigator.vibrate) navigator.vibrate(acierto? [30,20,30] : 100);
}

// TEST
function cargarPregunta(cat) {
  const s = estado.test[cat];
  const preguntas = PREGUNTAS[cat];
  const p = preguntas[s.idx % preguntas.length];
  if(!p) return;

  document.getElementById(`test-${cat}-pregunta`).textContent = p.q;
  document.getElementById(`test-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`test-${cat}-racha`).textContent = s.racha;
  document.getElementById(`test-${cat}-score`).textContent = s.score;
  document.getElementById(`test-${cat}-progress`).style.width = `${((s.idx % preguntas.length)/preguntas.length)*100}%`;

  const cont = document.getElementById(`test-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`test-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-test-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcion';
    div.textContent = txt;
    div.onclick = function() { responderTest(cat, i, this); };
    cont.appendChild(div);
  });
}

function responderTest(cat, idx, el) {
  const s = estado.test[cat];
  const preguntas = PREGUNTAS[cat];
  const p = preguntas[s.idx % preguntas.length];
  if(el.classList.contains('bloqueada')) return;

  document.querySelectorAll(`#test-${cat}-opciones.opcion`).forEach(o => o.classList.add('bloqueada'));
  const correcta = idx === p.ok;

  if(correcta) {
    el.classList.add('correcta');
    s.aciertos++;
    s.racha++;
    s.score += 10 + (s.racha * 2);
    estado.coins += 5;
    document.getElementById(`test-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`test-${cat}-feedback`).textContent = `✅ CORRECTO! +${10+(s.racha*2)} pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll(`#test-${cat}-opciones.opcion`)[p.ok].classList.add('correcta');
    document.getElementById(`test-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`test-${cat}-feedback`).textContent = '❌ FALLO';
    mostrarEmoji(false, el);
  }

  document.getElementById(`btn-sig-test-${cat}`).disabled = false;
  actualizarCoins();
  guardar();
}

function siguienteTest(cat) {
  const s = estado.test[cat];
  s.idx++;
  cargarPregunta(cat);
}

// SITUACIONES
function cargarSituacion(cat) {
  const s = estado.sit[cat];
  const casos = SITUACIONES[cat];
  const p = casos[s.idx % casos.length];
  if(!p) return;

  document.getElementById(`sit-${cat}-pregunta`).textContent = p.q;
  document.getElementById(`sit-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`sit-${cat}-score`).textContent = s.score;
  document.getElementById(`sit-${cat}-progress`).style.width = `${((s.idx % casos.length)/casos.length)*100}%`;

  const cont = document.getElementById(`sit-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`sit-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-sit-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcion';
    div.textContent = txt;
    div.onclick = function() { responderSituacion(cat, i, this); };
    cont.appendChild(div);
  });
}

function responderSituacion(cat, idx