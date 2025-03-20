<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Intervención psicopedagógica en contextos diversos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 Para abordar la intervención psicopedagógica en contextos diversos, se hace necesario comprender la amplitud y profundidad del concepto de estrategia y su aplicación en el ámbito educativo. La estrategia, un término cuya etimología remite a contextos bélicos, ha evolucionado hasta convertirse en un elemento clave en diferentes disciplinas, incluyendo la educación. Aunque se originó en el campo militar, su uso actual se ha expandido a ámbitos como la política, la economía y, especialmente, la educación, donde desempeña un papel fundamental en la planeación y ejecución de acciones que buscan superar barreras y fomentar el aprendizaje.
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        span La definición etimológica de estrategia, que proviene del griego stratēgía, implica dirección y liderazgo en la ejecución de acciones hacia objetivos específicos. Este término evolucionó para incluir no solo la planificación en conflictos, sino también la negociación y el diálogo, como en el caso del imperio Inca, que utilizó estrategias de conciliación para expandirse territorialmente. A lo largo de la historia, el concepto de estrategia se ha asociado a figuras destacadas, como Alejandro Magno y Federico II de Prusia, quienes combinaban habilidades militares y filosóficas para lograr objetivos complejos. Esta doble perspectiva, bélica y conciliadora, resalta la importancia de adaptar estrategias a contextos específicos y objetivos a largo plazo.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 En el ámbito educativo, la estrategia adquiere un significado técnico y pedagógico. Contreras (2013) recoge definiciones que permiten entender la estrategia desde un enfoque organizacional y su adaptación al contexto escolar:
        .bg-rosa.p-4
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <b>Steiner y Miner (1977):</b> destacan la importancia de los objetivos, las fuerzas internas y externas, y las políticas para alcanzar metas.
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <b>Schendel y Hofer (1978):</b> introducen el concepto de recursos presentes y futuros, así como las interacciones con el entorno para el logro de objetivos.
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <b>Argyris (1985):</b> resaltan la identificación de oportunidades y amenazas, junto con la evaluación de fortalezas y debilidades, la estructura organizacional y la motivación a través de recompensas.
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 En el contexto educativo, estas definiciones permiten visualizar cómo una estrategia debe abordar tanto el entorno interno de la institución educativa como los factores externos que influyen en el aprendizaje del estudiante. Por ejemplo, los objetivos de una estrategia escolar deben considerar no solo el rendimiento académico, sino también aspectos emocionales y sociales del estudiante.
        .bg-amarillo.p-4
          span Para trasladar estos conceptos al aula, Muñoz Sánchez (2024) define la estrategia escolar como "un conjunto de pasos y procedimientos de apoyo que aplica el docente-profesor al interior del aula para la mejora de los aprendizajes". Cabrera y David (2017) amplían esta definición al considerar las estrategias psicopedagógicas como "el camino utilizado por el docente para promover las condiciones propicias para las diferentes situaciones de aprendizaje, identificar e intervenir en las dificultades de aprendizaje, y fomentar los procesos motivacionales para alcanzar las metas establecidas".
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
    h2 Elementos esenciales de una estrategia psicopedagógica
    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4
        p.mb-4 La construcción de una estrategia psicopedagógica implica:      
        .row.mb-4
          .col-12.col-md-10.mx-auto
        
            SlyderF(columnas="col-12 col-lg-6 col-xl-4 py-4 px-3").mb-4
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-5.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Contextualización
                p.px-1.text-small.mb-0.d-flex.text-center Considerar factores internos y externos que influyen en el aprendizaje, como el hogar, la comunidad y la institución educativa.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-6.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Objetivos claros
                p.px-1.text-small.mb-0.d-flex.text-center Establecer metas específicas, medibles y alineadas con las necesidades del estudiante y el contexto educativo.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-7.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Recursos humanos y materiales
                p.px-1.text-small.mb-0.d-flex.text-center Contar con docentes capacitados y materiales adecuados para implementar la estrategia de manera eficiente.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-8.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Evaluación constante
                p.px-1.text-small.mb-0.d-flex.text-center Realizar un seguimiento continuo para identificar áreas de mejora y ajustar la estrategia cuando sea necesario.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-9.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Proyección a futuro
                p.px-1.text-small.mb-0.d-flex.text-center Diseñar estrategias sostenibles que generen un impacto duradero en el aprendizaje y desarrollo del estudiante.

    .row.mb-4
      .col-12.col-md-10.mx-auto
        p.mb-4 A continuación, se incluye una tabla que resume las definiciones clave y los elementos esenciales para la construcción de estrategias psicopedagógicas:
    .row
      .col-5.col-md-4.mx.py-3.ms-auto.bg-rosa.d-flex.flex-column(data-aos="fade-up")(style="border-left: 1px solid #AB4991; border-top: 1px solid #AB4991; border-bottom: 1px solid #AB4991;")
        p.mb-1.text-bold.text-center.mx-auto Estrategia <br>(Steiner y Miner)
      .col-7.col-md-6.py-3.me-auto.bg-amarillo.d-flex.flex-column(data-aos="fade-up")(style="border: 1px solid #8A5A07")
        span Declaración de misiones, objetivos claros y consideración de fuerzas internas y externas.
    .row
      .col-5.col-md-4.mx.py-3.ms-auto.bg-rosa.d-flex.flex-column(data-aos="fade-up")(style="border-left: 1px solid #AB4991; border-top: 1px solid #AB4991; border-bottom: 1px solid #AB4991;")
        p.mb-1.text-bold.text-center.mx-auto Estrategia <br>(Schendel y Hofer)
      .col-7.col-md-6.py-3.me-auto.bg-amarillo.d-flex.flex-column(data-aos="fade-up")(style="border: 1px solid #8A5A07")
        span Enfoque en recursos presentes y futuros, proyección a largo plazo e interacción con el entorno.
    .row
      .col-5.col-md-4.mx.py-3.ms-auto.bg-rosa.d-flex.flex-column(data-aos="fade-up")(style="border-left: 1px solid #AB4991; border-top: 1px solid #AB4991; border-bottom: 1px solid #AB4991;")
        p.mb-1.text-bold.text-center.mx-auto Estrategia <br>(Argyris) 
      .col-7.col-md-6.py-3.me-auto.bg-amarillo.d-flex.flex-column(data-aos="fade-up")(style="border: 1px solid #8A5A07")
        span Identificación de oportunidades y amenazas, estructura organizacional y motivación del personal.
    .row
      .col-5.col-md-4.mx.py-3.ms-auto.bg-rosa.d-flex.flex-column(data-aos="fade-up")(style="border-left: 1px solid #AB4991; border-top: 1px solid #AB4991; border-bottom: 1px solid #AB4991;")
        p.mb-1.text-bold.text-center.mx-auto Estrategia escolar <br>(Muñoz Sánchez)
      .col-7.col-md-6.py-3.me-auto.bg-amarillo.d-flex.flex-column(data-aos="fade-up")(style="border: 1px solid #8A5A07")
        span Pasos y procedimientos aplicados en el aula para mejorar los aprendizajes.
    .row.mb-4
      .col-5.col-md-4.mx.py-3.ms-auto.bg-rosa.d-flex.flex-column(data-aos="fade-up")(style="border-left: 1px solid #AB4991; border-top: 1px solid #AB4991; border-bottom: 1px solid #AB4991;")
        p.mb-1.text-bold.text-center.mx-auto Estrategia <br>psicopedagógica
      .col-7.col-md-6.py-3.me-auto.bg-amarillo.d-flex.flex-column(data-aos="fade-up")(style="border: 1px solid #8A5A07")
        span Promueve condiciones de aprendizaje, identifica dificultades y fomenta motivación.

    .row.mb-4
      .col-12.col-md-10.mx-auto
        .d-flex.align-items-center
          div.d-flex.align-items-center.bg-rojo.px-3.py-4
            img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-10.svg', alt='Texto que describa la imagen')
            p.pe-xl-5.mb-0 La implementación de estas estrategias en el aula debe estar orientada a generar aprendizajes significativos que no solo atiendan las necesidades académicas, sino que también consideren los aspectos emocionales, sociales y culturales de los estudiantes. Se continuará explorando cómo llevar estas estrategias al aula y diseñar intervenciones que respondan a la diversidad de contextos educativos.

    h2 Modelos de intervención psicopedagógica
    p.mb-4 En esta asignatura se ha explorado detalladamente los conceptos teóricos esenciales de las teorías de aprendizaje y modelos de desarrollo, proporcionando al docente un panorama amplio para realizar intervenciones fundamentadas. A continuación, se presenta un recordatorio de los modelos y teorías que sustentan la psicopedagogía, según Toala, L., Cedeño, L., Rodríguez, M. y Cusme, K. (2024):

    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4
      
        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-11.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Conductual
              p.px-1.text-small.mb-0.d-flex.text-center Se enfoca en el desarrollo de conductas, promoviendo cambios en patrones que dificultan el aprendizaje. La Teoría del Condicionamiento Operante de Skinner aporta herramientas útiles para construir estrategias de aprendizaje.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Sistémico
              p.px-1.text-small.mb-0.d-flex.text-center Considera al estudiante como parte de un sistema compuesto por familia, entorno sociocultural y económico. Trabaja con los contextos y actores cercanos al estudiante para identificar dinámicas que obstaculizan su aprendizaje.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Humanista
              p.px-1.text-small.mb-0.d-flex.text-center Enfocado en el ser humano, prioriza el crecimiento emocional y cognitivo, fomentando la autonomía, autorrealización y autoestima del estudiante, lo que lo impulsa a asumir responsabilidad sobre su aprendizaje.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-14.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Psicoanalítico
              p.px-1.text-small.mb-0.d-flex.text-center Indaga en los aspectos conscientes, preconscientes e inconscientes del estudiante, permitiendo identificar factores psíquicos y emocionales que dificultan el aprendizaje.

    p.mb-4 Las intervenciones psicopedagógicas fundamentadas en estos modelos deben orientarse hacia:

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Trabajo en equipo")
            p Involucrar a actores educativos como docentes orientadores, psicólogos escolares, docentes de apoyo pedagógico y otros profesionales relevantes.
          .div(titulo="Impacto sistémico")
            p Diseñar estrategias que beneficien no solo a estudiantes individuales, sino que también generen un impacto positivo en la comunidad educativa.
          .div(titulo="Enfoque integral")
            p Considerar aspectos psicológicos individuales del estudiante y factores contextuales para superar barreras en el aprendizaje.
          .div(titulo="Sostenibilidad")
            p Asegurar que las estrategias sean aplicables y eficaces en el tiempo, fomentando aprendizajes significativos desde factores socioculturales y educativos.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rojo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-16.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Este enfoque busca no solo mejorar los procesos de enseñanza-aprendizaje, sino también potenciar el desarrollo integral de los estudiantes en sus contextos específicos.

    h2 Etapas en la construcción de una estrategia
    p.mb-4 Las etapas en la construcción de una estrategia incluyen la explicación de la situación, donde se analiza y comunica el diagnóstico inicial; la definición de dificultades, delimitando barreras específicas de aprendizaje; la identificación de posibilidades, proponiendo acciones concretas y flexibles; la determinación de objetivos pedagógicos claros y medibles; la planificación de la intervención con roles, materiales y tiempos definidos; y la socialización y aprobación, asegurando la comprensión y validación por parte de las familias y actores educativos involucrados.
    
    h3 Etapa de diagnóstico
    p.mb-4 La primera etapa en la construcción de una estrategia psicopedagógica inicia con un proceso de sensibilización y concientización de todos los actores implicados, ya sea que la intervención se realice de forma individual o grupal. Su objetivo es diagnosticar al estudiante o estudiantes, así como la situación y/o barrera que afecta el aprendizaje, mediante la participación de docentes, familias y el mismo educando. Esto se aborda como un trabajo en equipo.

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-amarillo.p-4.mb-4
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Convocar a todos los actores escolares y concientizarlos sobre la necesidad del proceso de intervención. Esta acción debe incluir un análisis y reflexión detallados, con el fin de unificar perspectivas que enriquezcan la estrategia, ampliando la visión sociocultural y pedagógica.

          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Realizar un diagnóstico integral y participativo con los actores de la comunidad educativa implicados en la estrategia. Este diagnóstico debe identificar tanto las dificultades escolares como las posibilidades, para ofrecer una perspectiva amplia y objetiva. Una herramienta útil para ello es la matriz DOFA. 
        span Antes de presentar la matriz DOFA, es importante contextualizar su uso en este diagnóstico. La matriz DOFA es una herramienta estratégica que permite evaluar factores internos y externos que pueden influir en la situación objeto de intervención. Según Mosquera, I. (2020), esta herramienta práctica facilita un diagnóstico rápido y efectivo, proporcionando una base sólida para la construcción y aplicación de la estrategia psicopedagógica.
    
    p.mb-4 A continuación, se presenta una descripción de cada componente de la matriz DOFA, adaptada al contexto psicopedagógico:
    
    img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen').mb-4

    h2 Etapa de proyección de la estrategia
    p.mb-4 En esta etapa se busca consolidar y aprobar los objetivos que guiarán la intervención psicopedagógica. Ya sea que el docente trabaje de manera individual o con un equipo de apoyo, debe definir un plan claro que sirva como norte para las acciones a implementar. A continuación, se detallan las acciones fundamentales en esta etapa:

    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4
      
        .row.mb-4
          .col-12.col-md-10.mx-auto
        
            SlyderF(columnas="col-12 col-lg-6 col-xl-4 py-4 px-3").mb-4
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Explicación de la situación
                p.px-1.text-small.mb-0.d-flex.text-center Presentar un informe general y específico sobre las dificultades de aprendizaje, basado en el diagnóstico previo, a todos los actores involucrados.
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Definición de las dificultades
                p.px-1.text-small.mb-0.d-flex.text-center Delimitar claramente, en conjunto con otros profesionales, las barreras de aprendizaje identificadas.
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Identificación de posibilidades
                p.px-1.text-small.mb-0.d-flex.text-center Precisar acciones concretas como guía inicial, manteniendo flexibilidad para ajustes según sea necesario.
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-22.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Determinación de objetivos pedagógicos
                p.px-1.text-small.mb-0.d-flex.text-center   Establecer objetivos claros y medibles para la intervención, especificando lo que se espera alcanzar con el o los estudiantes.
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-23.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Planificación de la intervención
                p.px-1.text-small.mb-0.d-flex.text-center Definir planes específicos, incluyendo roles de los participantes, materiales a utilizar y tiempos estimados.
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-24.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Socialización y aprobación
                p.px-1.text-small.mb-0.d-flex.text-center Presentar la estrategia a responsables institucionales y familias, asegurando su aprobación y comprensión clara de la intervención.

    h2 Etapa de aplicación
    p.mb-4 El objetivo de esta etapa es llevar la estrategia a la práctica de manera organizada y efectiva. Para lograrlo, se proponen dos acciones clave:

    .row.mb-4
      .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Organización del trabajo
            p.text-small.px-4.text-center.pb-2 Se preparan los tiempos, los materiales y las acciones específicas de intervención, asegurando una implementación ordenada y eficiente.
      .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Trabajo en equipo
            p.text-small.px-4.text-center.pb-2 Se fomenta el apoyo y la colaboración entre los profesionales involucrados, garantizando que todas las acciones planteadas se lleven a cabo de manera adecuada.

    h2 Etapa de evaluación y monitoreo
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 En esta etapa se evalúa el impacto y los resultados de la intervención, con el fin de determinar si se lograron los objetivos planteados. Las acciones principales incluyen:
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 <b>Establecimiento de indicadores: </b> se definen los criterios para evaluar la eliminación de las barreras de aprendizaje y los logros alcanzados por los estudiantes.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 <b>Registros continuos:</b> se documentan los avances y procesos durante la intervención, lo que permite una evaluación constante y un mayor control de los resultados.

        .bg-amarillo.p-4
          span Estas etapas permiten una planificación, ejecución y evaluación coherentes de estrategias psicopedagógicas, asegurando que se adapten al contexto y las necesidades específicas de los estudiantes, y que ofrezcan rutas claras para superar las barreras de aprendizaje.

      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      
    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Diseño de programas psicopedagógicos inclusivos
    p.mb-4 El diseño de programas psicopedagógicos inclusivos implica una alta cualificación por parte del docente, ya que demanda un conocimiento integral de las condiciones del estudiante, su contexto y las dinámicas cognitivas y emocionales que afectan su aprendizaje. Este enfoque debe considerar tanto el entorno familiar y escolar como los aspectos culturales y socioeconómicos, especialmente cuando las intervenciones son grupales. A continuación, se detallan las <b>categorías y condiciones más comunes en el aula</b>, las cuales requieren atención psicopedagógica específica.
    p.mb-4 Las categorías y condiciones más comunes en el aula son: 

    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

      .tarjeta.bg-rosa.p-4(x="18.8%" y="29%" numero="+")
        .h5.mb-2 Bajo rendimiento académico
        p Relacionado con falta de motivación (interno) o metodologías docentes poco efectivas (externo). Recomendación: Adaptar métodos pedagógicos y fomentar un ambiente motivador y comprensivo.
      .tarjeta.bg-rosa.p-4(x="83%" y="29%" numero="+")
        .h5.mb-2 Déficit de atención con o sin hiperactividad (TDA-H)
        p Afecta la percepción y memoria, dificultando la atención. Los estudiantes pueden distraerse fácilmente o no concentrarse, con posibles causas emocionales o ambientales. Recomendación: Analizar el contexto e investigar el diagnóstico.
      .tarjeta.bg-rosa.p-4(x="88%" y="55%" numero="+")
        .h5.mb-2 Trastorno del espectro autista (TEA)
        p Dificultades en comunicación, interacción social y adaptación a cambios, con sensibilidad sensorial y altas capacidades en áreas específicas. Recomendación: Usar apoyos visuales y estrategias específicas para facilitar comunicación y desarrollo.
      .tarjeta.bg-rosa.p-4(x="79.5%" y="80%" numero="+")
        .h5.mb-2 Trastornos del aprendizaje escolar
        p Incluye dislexia (dificultades en lectura), disgrafía (problemas en escritura) y discalculia (dificultades en cálculo), persistentes pese a estrategias diferenciadas. Recomendación: Identificar estas dificultades y diseñar estrategias oportunas.
      .tarjeta.bg-rosa.p-4(x="18.8%" y="80%" numero="+")
        .h5.mb-2 Discapacidad intelectual
        p Limitaciones en razonamiento, aprendizaje e interacción social según el DSM-5. Recomendación: Diseñar estrategias adaptadas que promuevan independencia y aprendizaje significativo.
      .tarjeta.bg-rosa.p-4(x="12%" y="55%" numero="+")
        .h5.mb-2 Dificultades socioemocionales
        p Emociones mal gestionadas que afectan aprendizaje y convivencia, como ansiedad, depresión o baja autoestima. Recomendación: Implementar estrategias con apoyo familiar y promover un clima escolar positivo.

    h2 Iniciativas para el diseño psicopedagógico
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 El diseño de programas psicopedagógicos debe basarse en principios que promuevan la equidad y la personalización del aprendizaje:
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto="Construyendo entornos educativos inclusivos"
          tiempo
          :audio="require('../../assets/componentes/audios/Entornos educativos_mezcla.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
        .bg-rojo.p-4
          span Con estas estrategias, el docente puede crear un entorno inclusivo que permita a los estudiantes superar las barreras de aprendizaje y alcanzar su máximo potencial académico y personal.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/268338") Muñoz Sánchez, C. (2024). Estrategias e investigaciones desde las didácticas. RIL editores.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://dialnet.unirioja.es/servlet/articulo?codigo=9502303") Toala, L., Cedeño, L., Rodríguez, M., & Cusme, K. (2024). Estrategias para la Intervención Psicopedagógica en el Aula.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/pdf/646/64629832007.pdf") Contreras Sierra, ER. (2013). El concepto de estrategia como fundamento de la planeación estratégica. Pensamiento & Gestión.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/fNIhof2gKQI") Héctor Cáceres (2023). INTERVENCIÓN PSICOPEDAGÓGICA, IRRENUNCIABLES [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=sWUndk_GXhg") Programas Telemedellín (2018). Estrategias de aprendizaje [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
