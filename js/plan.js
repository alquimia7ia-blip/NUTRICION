/* Contenido fiel al plan de la nutricionista. No editar cantidades ni alimentos. */
const PLAN = {
  paciente:"Salomón Guarín",
  nutricionista:"Ana Espinosa",
  fechaPlan:"26/Agosto/2025",
  intro:"Este plan está enfocado en mejorar tu composición corporal a través de la pérdida de masa grasa (definición), preservando la masa muscular, por medio de un plan de alimentación con un déficit calórico no muy agresivo. Siendo lo anterior el principal objetivo, el plan enviado y la suplementación recomendada te ayudarán a mejorar tu estado físico, resistencia y recuperación, además de mejorar tu salud y sistema digestivo. Esta alimentación está basada en el consumo de alimentos lo más naturales posibles e antinflamatorios, evitando los ultra-procesados, azúcares, aceites refinados y el alcohol, que no favorecen el logro del objetivo ni de la salud en general.",
  objetivo:"Pérdida de peso a partir de la disminución de la masa grasa, mejorar rendimiento deportivo, mejora de la salud y bienestar (mejorar energía, sensación de evacuación incompleta, gases frecuentes, distensión abdominal).",
  recomendacionPasos:"Realizar mín. 8000 pasos/día.",
  composicion:{fecha:"30/07/25",peso:"108.2 kg",imc:"33",grasa:"34.82 %",masaMagra:"71 kg"},
  seguimiento:"En mes y medio (6 semanas) — 2da semana de Octubre",
  hidratacion:{
    metaLitros:3.5,
    formula:"35 ml x 100 Kg Aprox. = 3500 ml = 3,5 Lt",
    estrategia:"Lleva o mantén contigo un termo de 1 Litro, y consume aproximadamente 3 termos al día (1 termo para tomar AM, otro al medio día y otro PM).",
    ideas:[
      "Si deseas pasar con algo diferente al agua, opta por una bebida vegetal (almendras o coco, incluso casera) sin azúcar añadida, con cacao en polvo (que sea el único ingrediente del empaque), café o té chai. Endulza con Stevia líquida.",
      "Puedes hacer una jarra de infusión de flor de jamaica (con las flores) con canela, stevia líquida y zumo de limón (opcional). Te dura para varias tomas y sabe muy rico. (Es un diurético natural).",
      "Infusiones de frutas (frutos rojos, maracuyá, sandía con hojas de yerbabuena o menta), y si deseas, endulza con Stevia líquida.",
      "Agua o soda con limón y opcional Stevia líquida."
    ]
  },
  suplementos:[
    {id:"proteina",nombre:"Proteína ISO",detalle:"1 Scoop al día."},
    {id:"creatina",nombre:"Creatina Monohidratada",detalle:"Consumir diariamente 1 Scoop colmado (Aprox. 8 gr) disuelto en un vaso de agua, entrenes o no."}
  ],
  aguacateDiario:{
    gramos:60,
    texto:"60 gr al día (1/4 de un Aguacate Grande o 1/2 Aguacate Hass). Puedes comerlos en el almuerzo o en la cena, o repartir 30 g en el almuerzo y 30 g en el desayuno o la cena."
  },
  comidas:{
    desayuno:{
      label:"Desayuno", hora:"08:00", horario:"8:00 – 9:00 am",
      grupos:[
        {tipo:"Proteína",nota:"(escoge solo UNA opción)",key:"proteina",opciones:[
          "4 huevos enteros",
          "3 huevos enteros + 1 loncha de Queso mozzarella o 1 tajada semigruesa de Cuajada (40 gr)",
          "3 huevos enteros + 2 tajadas de Jamón Serrano o de Jamón asado al horno (D1 empaque azul)",
          "3 huevos enteros + 2 Cdas soperas colmadas de yogurt griego sin azúcar (80 gr)",
          "1 Scoop de proteína en polvo (ocasional, cuando no tengas tiempo para desayunar)"
        ]},
        {tipo:"Carbohidrato",nota:"(escoge solo UNA opción)",key:"carbohidrato",opciones:[
          "Arepa de maíz – 1 grande o 2 medianas",
          "Avena en hojuelas o granola sin azúcar – 6 cucharadas soperas colmadas (60 gr)",
          "Pan de arroz, o de sagú, o de quinoa – 4 tajadas (pan Mauka)",
          "Plátano maduro – 1/2 unidad mediana (140 gr)",
          "Yuca – 2 trozos medianos (160 gr)",
          "Papa – 2 papas medianas (200 gr)"
        ]},
        {tipo:"Grasas",nota:"(escoge solo UNA opción)",key:"grasas",opciones:[
          "Aceite de oliva – 2 Cdas postreras",
          "Ghee o Mantequilla de vaca – 2 Cdas postreras",
          "Aguacate – Hass 1/2 de unidad o Común 1/6 (40 g)",
          "Maní, Almendras o Nueces – 1 puñado grande (15 gr)",
          "Mantequilla de frutos secos (maní, almendras) – 1 Cda postrera colmada (15 gr)"
        ]}
      ],
      extras:[
        {tipo:"Verduras",texto:"Añadir con frecuencia las verduras de tu preferencia a tu desayuno como tomate, cebolla, champiñones, espinaca, zanahoria, etc. En preparaciones como huevo revuelto, omelettes, huevos napolitanos, pancakes con zanahoria, etc., y así añadir más fibra y micronutrientes en tu día."},
        {tipo:"Fruta",texto:"Escoge UNA fruta de tu preferencia. Si son frutas enteras: 1 unidad (manzana, mandarina, pera, granadilla, 1 banano mediano o 1/2 grande). Si son frutas para picar: 1 rodaja mediana (piña, melón, papaya, mango, sandía), o 1 kiwi, o un puñado grande de arándanos, u 8 fresas, etc. Consúmela como postre luego del desayuno o con las preparaciones que hagas."},
        {tipo:"Bebida",texto:"Puedes consumir agua, té, aromáticas, tinto, chocolate sin azúcar en agua. (Endulzar con Stevia líquida)."}
      ]
    },
    almuerzo:{
      label:"Almuerzo", hora:"13:00", horario:"1:00 pm",
      grupos:[
        {tipo:"Proteína",nota:"(escoge solo UNA opción)",key:"proteina",opciones:[
          "Pollo – 170 gr cocido o 200 gr crudo (una porción grande y gruesa, o 5 puñados de pollo desmechado, o 2 muslos o contramuslos grandes)",
          "Carne de res magra o cerdo magra – 170 gr cocido o 200 gr crudo (una porción grande y gruesa, o 6-7 Cdas soperas si es carne molida o desmechada)",
          "Pescado (salmón, tilapia, trucha, atún fresco, etc) – 170 gr cocido o 200 gr crudo (1 filete grande o 2 medianos)"
        ]},
        {tipo:"Carbohidrato",nota:"(escoge UNA opción; si quieres 2, toma la mitad de cada una)",key:"carbohidrato",opciones:[
          "Arroz o Quinoa – 8 Cdas soperas (160 gr cocido)",
          "Plátano maduro – 1/2 und grande (140 gr)",
          "Plátano verde – 2/3 und grande (160 gr)",
          "Papa – 2 medianas (200 gr)",
          "Papa criolla – 6 und medianas (200 gr)",
          "Yuca – 2 trozos medianos (160 gr)",
          "Pasta de arroz (El Dorado, Doria, Mauka), o pasta convencional de trigo – 2 tazas de pasta cocida (160 gr cocidos)",
          "Frijoles, lentejas, garbanzos – 2 cucharones medianos, sin el líquido (200 gr cocido)"
        ]},
        {tipo:"Grasas",nota:"(escoge solo UNA opción)",key:"grasas",opciones:[
          "Aceite de oliva/aguacate – 3 Cdas postreras",
          "Ghee o Mantequilla clarificada – 3 Cdas postreras"
        ]}
      ],
      extras:[
        {tipo:"Aguacate diario",texto:"DIARIO: 60 gr (1/4 de un Aguacate Grande o 1/2 Aguacate Hass). Puedes comerte los 60 g en el almuerzo o en la cena, o 30 g en el almuerzo y 30 g en el desayuno o cena."},
        {tipo:"Vegetales",texto:"Consumo ilimitado (que ocupe la mitad de tu plato): hojas verdes (lechuga, mezclum, kale, espinaca, rúgula, acelga), tomate, cebolla, zuccini, pepino, apio, zanahoria, espárragos, brócoli, coliflor, champiñones, rábano, remolacha, arvejas, habichuelas, ahuyama, etc. También puedes hacer cremas, sopas o caldos de verdura. Entre más colorido tu plato, más nutrientes."},
        {tipo:"Bebida",texto:"Puedes tomar agua o soda con limón (endulzar con Stevia líquida), infusión de flor de jamaica o infusiones de fruta (como sandía, maracuyá, etc)."}
      ]
    },
    snack:{
      label:"Snack", hora:"15:00", horario:"am o pm",
      grupos:[
        {tipo:"Proteína",nota:"(escoge solo UNA opción)",key:"proteina",opciones:[
          "1 Scoop de proteína (en agua) – puedes licuarla con la fruta si deseas"
        ]}
      ],
      extras:[
        {tipo:"Fruta",texto:"Una porción de fruta a tu elección (1 manzana, 1 mandarina, 1 banano pequeño, 1 pera, 1 granadilla, un manotado grande de arándanos, 8-10 fresas, una taza de uvas, 1 kiwi grande, 1 tajada mediana de papaya, piña, melón o sandía, 1/2 mango grande, etc)."}
      ]
    },
    cena:{
      label:"Cena", hora:"18:00", horario:"6:00 pm",
      grupos:[
        {tipo:"Proteína",nota:"(escoge solo UNA opción)",key:"proteina",opciones:[
          "3 huevos enteros",
          "2 huevos enteros + 2 tajadas de Jamón Serrano o de Jamón asado al horno (D1 empaque azul) o un puñado de pollo desmechado (30 gr cocido)",
          "2 huevos enteros + 1 loncha de Queso mozzarella o 1 tajada semigruesa de Cuajada (40 gr)",
          "Pollo – 120 gr cocido o 150 gr crudo (una porción mediana, o 3 puñados de pollo desmechado, o 1 muslo o contramuslo grande)",
          "Carne de res o cerdo magra – 120 gr cocido o 150 gr crudo (una porción mediana, o 4-5 Cdas soperas si es carne molida o desmechada)",
          "Pescado (salmón, tilapia, trucha, atún fresco, etc) – 120 gr cocido o 150 gr crudo (1 filete mediano)"
        ]},
        {tipo:"Carbohidrato",nota:"(escoge solo UNA opción)",key:"carbohidrato",opciones:[
          "Arepa de maíz – 1 grande o 2 medianas",
          "Pan de arroz, o de sagú – 4 tajadas (pan Mauka)",
          "Arroz o Quinoa – 8 Cdas soperas (160 gr cocido)",
          "Plátano maduro – 1/2 und grande (140 gr)",
          "Plátano verde – 2/3 und grande (160 gr)",
          "Papa – 2 medianas (200 gr)",
          "Papa criolla – 6 und medianas (200 gr)",
          "Yuca – 2 trozos medianos (160 gr)",
          "Crispetas caseras – 6 pocillos chocolateros de crispetas hechas (60 gr cocidas) (hacerlas sin azúcar)"
        ]},
        {tipo:"Grasas",nota:"(escoge solo UNA opción)",key:"grasas",opciones:[
          "Aceite de oliva/aguacate – 2 Cdas postreras",
          "Ghee o Mantequilla clarificada – 2 Cdas postreras"
        ]}
      ],
      extras:[
        {tipo:"Vegetales",texto:"Libertad para escoger, pero inclúyelas diario en la cena: tomate y cebolla para un guiso (hogao), verduras salteadas, hojas verdes para ensaladas frescas, un omelette con vegetales, o simplemente rodajas de tomate y/o pepino. Las cremas/sopas/caldos de verduras también cuentan."},
        {tipo:"Bebida",texto:"Agua, té, aromáticas, agua o soda con limón (más Stevia líquida opcional), infusión de flor de Jamaica o infusión de alguna fruta (sandía, maracuyá, frutos rojos, etc)."}
      ]
    }
  },
  recetas:{
    desayuno:[
      {t:"Omelette",d:"con los huevos + el jamón serrano o de pavo o con el queso + vegetales (champiñones, tomates cherry, espinaca, etc)."},
      {t:"Huevos napolitanos",d:"pon en una sartén rodajas delgadas de tomate y cebolla hasta que se doren, luego adiciona los huevos y la porción de queso. Agrégale albahaca u orégano seco."},
      {t:"Guacamole",d:"con el aguacate y ponérselo a la arepa, pan tostado, o a los waffles de yuca/plátano."},
      {t:"Waffles/patacones de plátano maduro o yuca",d:"cocínalos hasta que estén blandos, estrípalos con algo plano y ponlos en una wafflera o sartén tipo “patacón” a que se doren + aguacate + huevos."},
      {t:"Arepas de plátano o de yuca",d:"cocínalos hasta que estén blandos, estrípalos y haz puré con un tenedor, añade sal y aceite de oliva para amasar y hacer las arepas. Puedes hacer varias y guardarlas en el congelador. Luego las doras en una sartén."},
      {t:"Bowl de yogurt griego",d:"con la porción de yogurt griego + avena o granola sin azúcar + fruta + frutos secos o mantequilla de frutos secos."},
      {t:"Pancakes o waffles",d:"licúa la porción de huevos + la porción de avena en hojuelas y 1/2 banano (puedes añadir canela, stevia, esencia de vainilla, cacao, chía o linaza). Hazlos en cantidad y guárdalos en la nevera. Acompaña con yogurt griego + frutas + frutos secos o crema de frutos secos."},
      {t:"Tortillas saludables",d:"licúa la porción de avena en hojuelas + huevo + especias al gusto (sal, ajo en polvo, orégano, canela, stevia) + 1 cda de semillas de chía/linaza (opcional). La mezcla debe quedar líquida para esparcirla bien en la sartén. Puedes preparar para varios días y guardar en la nevera (reemplaza la porción de carbohidrato). Ármalas tipo burritos, wraps, tacos o pizza con proteína + vegetales + aguacate."},
      {t:"Tostadas francesas",d:"mezcla 1-2 huevos + un chorrito de leche vegetal sin azúcar + canela (opcional stevia y esencia de vainilla) y sumerge la porción de pan. Dora en el sartén. Sirve con yogurt griego, frutas, frutos secos y el resto de huevos."},
      {t:"Mermelada natural de arándanos",d:"con un chorrito de agua, semillas de chía y Stevia; espera a que se reduzca. Guarda en un recipiente de vidrio en la nevera. Úsala en el pan, tostadas de arroz o pancakes."},
      {t:"Avena cocinada",d:"en una ollita pon la porción de avena en hojuelas y cubre con agua o bebida vegetal sin azúcar, añade canela y stevia (opcional cacao, esencia de vainilla, chía o linaza). Espera a que espese y añade fruta, frutos secos o mantequilla de frutos secos. Acompaña con la porción de proteína."},
      {t:"Smoothie (días sin tiempo)",d:"licúa la porción de yogurt griego o 1 scoop de proteína + la porción de avena en hojuelas + 1/2 banano, fresas o arándanos + la porción de mantequilla de frutos secos + 1 vaso de agua o bebida vegetal sin azúcar."}
    ],
    almuerzo:[
      {t:"Tip general",d:"Haz las papas (criolla) o “a la francesa”, en “moneditas” o “cascos” en el airfryer: da impresión de mayor cantidad y más saciedad."},
      {t:"Moneditas de plátano maduro/verde en el airfryer",d:"corta el plátano en monedas y masajea con aceite de oliva + especias al gusto."},
      {t:"Papas, yuca, plátano o batata en el airfryer",d:"con aceite de oliva y especias a tu gusto."},
      {t:"Puré de papa o de plátano.",d:""},
      {t:"Guacamole casero",d:"con la porción de aguacate."},
      {t:"Patacón",d:"con el plátano maduro cocinado, aplástalo y haz un “patacón” grande; encima adiciona la proteína + guacamole casero."},
      {t:"Lasaña de plátano maduro",d:"haz puré el plátano y arma capas: plátano + proteína (pollo desmechado o carne molida) + salsa napolitana casera + queso bajo en grasa."},
      {t:"Pastas a la napolitana",d:"pastas de arroz + pollo o carne + champiñones + salsa napolitana casera."},
      {t:"Salsa napolitana casera",d:"lleva al airfryer 2 tomates maduros partidos, 1/4 de cebolla cabezona partida, 1 ajo, 1 pedazo de pimentón rojo y aceite de oliva, hasta que doren bien. Licúa todo con sal, un poquito de stevia y albahaca seca. Guarda en la nevera y úsala en pastas, lasaña de plátano, pollo, carne, pizza, huevos, etc."},
      {t:"Arroz o quinoa de cilantro, pimentón o zanahoria",d:"licúa el agua que usarás para el arroz o quinoa con un manotado grande de cilantro, 1/2 pimentón rojo, o zanahoria rallada."},
      {t:"Carne o pollo desmechado con hogao",d:"puedes preparar bastante hogao una vez a la semana y usarlo en distintas preparaciones."},
      {t:"Pollo o pescado miel-mostaza",d:"mezcla 2 cdas de yogurt griego, mostaza y syrup sin azúcar o miel. Marina y lleva al sartén."},
      {t:"Pollo o pescado al cilantro",d:"licúa aceite de oliva, zumo de limón, cilantro, ajo, sal y pimienta. Marina y lleva al sartén."},
      {t:"Pollo o pescado a la toscana",d:"saltea con aceite de oliva cebolla, tomates cherry y espinaca; agrega 2 cdas de yogurt griego, parmesano, sal y pimienta. Mezcla con la proteína ya cocinada."},
      {t:"Ceviche de pescado o camarones",d:"mezcla cebolla en plumas, pimentón en tiritas, limón, cilantro, pimienta y sal al gusto (opcional mango pintón y/o aguacate en cuadritos). Revuelve con el pescado en cubos o camarones."},
      {t:"Salsa pesto casera",d:"licúa 150 gr de albahaca fresca, 1/2 taza de aceite de oliva, 1/2 taza de queso parmesano, 1 puñado de almendras o nueces y 2 dientes de ajo. Guarda refrigerada. Úsala para pollo, pescado, pastas, huevo, etc."},
      {t:"Nota",d:"Las recetas de almuerzo y cena se pueden usar indistintamente en almuerzo o cena, si aplica."}
    ],
    snack:[
      {t:"Idea 1",d:"Yogurt griego o kéfir + granola/avena/quinoa pops + frutos secos o mantequilla de frutos secos + fruta a tu elección."},
      {t:"Idea 2",d:"Queso pera + fruta a elección + tostadas de arroz o Salmas + mantequilla de algún fruto seco."},
      {t:"Idea 3",d:"Fresas + chocolate derretido + yogurt griego/kéfir + crispetas aparte."},
      {t:"Idea 4",d:"Pancakes/waffles con la porción de claras, avena y 1/4 de banano + crema de fruto seco + fruta por encima."},
      {t:"Idea 5 — Bowl en capas",d:"yogurt griego, tostadas de arroz, mermelada casera de arándanos (o sin azúcar), otra capa de yogurt y tostada, y encima frutos secos o mantequilla de fruto seco."},
      {t:"Idea 6",d:"Derrite queso pera y ponlo a las Salmas + aparte una fruta (ej. manzana) con mantequilla de un fruto seco."},
      {t:"Smoothie",d:"licúa 1/2 scoop de proteína o yogurt griego/kéfir + avena en hojuelas + banano/fresas/arándanos + crema de fruto seco + 1 vaso de agua y hielo (opcional)."},
      {t:"Lecherita de proteína",d:"1/2 scoop de proteína con un chorrito de agua hasta consistencia de “lecherita”; añádela a la fruta elegida. Aparte, tostadas de arroz o Salmas con mantequilla de fruto seco."},
      {t:"Yogurt griego con cereal de chocolate",d:"tritura tostadas de arroz o usa quinua inflada (30 gr); derrite 30 gr de chocolate al 70% sin azúcar o crema de frutos secos, mezcla y enfría. Acompaña con yogurt griego y fruta (arándanos, fresa, kiwi, banano)."}
    ],
    cena:[
      {t:"Sánduche o hamburguesa",d:"pan (o tipo hamburguesa) + proteína elegida (pollo, res o atún, o sánduche de huevo) + queso o aguacate (grasa) + vegetales."},
      {t:"Pizza",d:"base de tortillas saludables o claras de huevo + salsa napolitana casera + queso bajo en grasa + pollo o jamón de pavo + vegetales (espinaca, tomates cherry, champiñones, albahaca). Hazla en sartén con tapa para derretir el queso."},
      {t:"Tacos",d:"con tortillas de MAÍZ, rellenas con la proteína + queso o aguacate + vegetales a elección."},
      {t:"Sopa mexicana",d:"la salsa napolitana sirve como base de sopa; añade pollo desmechado + plátano maduro en cuadritos + aguacate."},
      {t:"Arepa + proteína + aguacate + tomate.",d:""},
      {t:"Crispetas",d:"en una bolsa de papel kraft, un puñado pequeño de maíz pira; dobla bien el borde y lleva al microondas ~3 min, sal al gusto (porción de carbohidrato). Acompaña con proteína como pollo + ensalada, u omelette de claras + vegetales. (Perfecto para noches de película)."},
      {t:"Vegetales salteados",d:"saltea en aceite de oliva brócoli, zanahoria, zuccini, champiñones, etc. (puedes hacer bastante cantidad para varios días)."},
      {t:"Ensalada de zanahoria y pepino",d:"con un pelapapas, saca tiras de zanahoria y pepino; mezcla con 1 cda de yogurt griego, salsa de soya, un poco de stevia y semillas de ajonjolí."},
      {t:"Vinagretas (reemplazan la porción de grasa)",d:"1) Mezcla 1 cda de yogurt griego, ajo, queso parmesano y 1 cdita de aceite de oliva. 2) Licúa 1 cda de yogurt griego, la porción de aguacate, bastante cilantro, sal y pimienta."}
    ]
  },
  recomendaciones:[
    "Disfrutar el proceso y entender que no solo los resultados físicos son el fin, sino también tener una buena relación con los alimentos y con tu cuerpo, mayor voluntad y consciencia al elegir tus alimentos, disminuir la inflamación, aprender a escuchar las señales de saciedad, tener menos ansiedad al comer, reconocer antojo vs hambre real, y mejorar tu digestión y energía, entre otros beneficios.",
    "Es posible que durante el proceso te desvíes, te saltes un poco el plan o te encuentres desanimado; estas “recaídas” son inherentes al proceso de cambio. No te castigues por eso, sino velo como una oportunidad de aprendizaje, y retoma recordando por qué empezaste y cuál es tu objetivo.",
    "Evita alimentos ultra-procesados (paquetes de mecato, gaseosas, embutidos como jamones y salchichas), grasas trans y aceites vegetales hidrogenados (aceite de soya, margarinas), harinas refinadas (harina de trigo), azúcares añadidos, salsas comerciales, alcohol.",
    "Entre mayor variedad de alimentos, sobre todo en frutas y verduras, tendrás mayor contenido de vitaminas, minerales y antioxidantes; procura experimentar nuevos alimentos y que tu plato se vea colorido.",
    "Prioriza los alimentos naturales al comprar (proteínas de alta calidad, carbohidratos como arroz, papa, yuca, plátano, y variedad de frutas y verduras). Vuelve a la tierra, a lo natural.",
    "Cuando compres un alimento empacado o comercial revisa los ingredientes, que son incluso más importantes que las calorías. Están listados en orden de cantidad (de mayor a menor); entre menos ingredientes tenga, mejor.",
    "Procura cumplir con todas las porciones recomendadas del día, ya que esto será en gran parte lo que te dará los resultados. Puedes mover alguna porción de un alimento para consumirla en otro momento (ej: pasar el snack de la tarde a la mañana).",
    "Al comenzar, puedes apoyarte en una gramera digital para medir con mayor exactitud, especialmente proteínas, carbohidratos y grasas. Con el tiempo desarrollarás la habilidad de identificar tus porciones sin pesar los alimentos. Si prefieres medidas caseras, también está completamente bien.",
    "El ejercicio físico es fundamental en este proceso: aumenta tu gasto calórico diario y fortalece/gana masa muscular. Procura entrenar mín. 4 veces por semana, exigiéndote un poco más cada vez y priorizando ejercicios de fuerza.",
    "Los métodos de cocción deben ser principalmente al vapor, cocinados, salteados, al horno, en el airfryer, asados. Utiliza para cocinar aceite de oliva, ghee, aceite de coco o de aguacate.",
    "En momentos de ansiedad o antojo, primero revisa si realmente tienes hambre real o es un antojo: toma un café o agua y espera unos minutos para ver si la sensación pasa. Si persiste, puedes consumir uno o dos cuadros de chocolate al 70% con stevia, un puñado de frutos secos, fruta con mantequilla de maní, galletas de arroz inflado o gelatina sin azúcar.",
    "En fines de semana procura no salirte de tu plan; sin embargo, la idea no es restringir nada y puedes permitirte un gusto.",
    "Si sales a comer por fuera o estás de viaje, procura escoger opciones más saludables y priorizar la proteína y los vegetales... sin embargo, date el gusto y disfruta.",
    "Si deseas endulzar alguno de tus alimentos o bebidas, prefiere Stevia líquida.",
    "Para condimentar tus alimentos utiliza condimentos naturales (sal, pimienta, orégano, cúrcuma, paprika, cilantro, tomillo, albahaca, ajo, entre otros). Evita utilizar caldos de sabor (ej. Maggi).",
    "En momentos de estrés, busca otras alternativas (escribir, meditar, respiración consciente), antes de canalizar ese estrés con “ansiedad por comer”.",
    "Procura comer en presencia y sin distracciones, agradeciendo tus alimentos. Come despacio y masticando muy bien: esto ayuda a liberar enzimas digestivas y le da tiempo a tu cuerpo de enviar la señal de saciedad.",
    "El “meal prep” es una muy buena estrategia para garantizar que cumplas tu plan y no tengas excusas por falta de tiempo o cansancio. Procura hacer 1 a 2 veces por semana preparaciones abundantes de proteínas, carbohidratos y vegetales que te duren varios días.",
    "El descanso es muy importante para ver resultados; procura dormir mínimo 7-8 horas diariamente y tener una buena higiene del sueño.",
    "No hay peor “alimento”, por más sano o saludable que sea, que aquel al que le pones una mala intención (comer con culpa, con miedo, o con remordimiento). Agradece que puedes comer, saborea, disfruta. Ser saludable también es poder comer alimentos “no tan sanos” sin sentir culpa y disfrutando.",
    "Si un día te sales del plan por cualquier motivo, retómalo con normalidad, sin sentir culpa, sin comer menos, ni hacer más ejercicio para “compensar”. No te tienes que castigar, mereces alimentarte buscando tu bienestar."
  ],
  fraseFinal:"“NUTRE TU INTERIOR PARA TRANSFORMAR TU EXTERIOR”",
  fraseFinalAutor:"Ana Espinosa — Nutricionista"
};

const MEAL_ORDER = ["desayuno","almuerzo","snack","cena"];
