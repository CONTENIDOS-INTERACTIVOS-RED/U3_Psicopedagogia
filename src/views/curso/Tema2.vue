<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Desarrollo cognitivo y socioemocional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 El ser humano evoluciona constantemente, no solo en términos biológicos, sino también en sus dimensiones cognitivas y socioemocionales. Este crecimiento intelectual involucra procesos como el razonamiento y la conceptualización, que son fundamentales para la capacidad de aprender. ¿Cómo aprendemos? Para abordar esta cuestión, las teorías educativas han emergido como herramientas para explicar y mejorar los procesos de enseñanza-aprendizaje, destacando la interacción entre desarrollo cognitivo y socioemocional.
        span La enseñanza se fundamenta en la comprensión de que los seres humanos, gracias al neocórtex del cerebro, poseen una inteligencia avanzada que les permite superar barreras cognitivas y maximizar su potencial de aprendizaje (Seijo, 2012).
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4

        h2 Principios de la teoría cognitiva
        p.mb-4 La teoría cognitiva, liderada por Jean Piaget y Jerome Bruner, se centra en los procesos internos que intervienen en el aprendizaje, como la percepción, la memoria y el razonamiento. Este enfoque contrasta con el conductismo, que priorizaba estímulos externos y respuestas estandarizadas. A continuación, se presenta un resumen de las principales ideas de la teoría cognitiva:

        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Jean Piaget
                p.text-small.px-4.text-center.pb-2 Planteó que el desarrollo cognitivo es un proceso continúo influido por la interacción entre el entorno y la biología. 
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Jerome Bruner
                p.text-small.px-4.text-center.pb-2 Introdujo los modos de representación: enactivo (acciones), icónico (imágenes) y simbólico (lenguaje). Destacó que el aprendizaje es activo y constructivo.
  
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

      .tarjeta.bg-amarillo.p-4(x="21.9%" y="71.8%" numero="+")
        .h5.mb-2 Sensoriomotor 
        p 0 a 2 años: desarrollo de habilidades motoras básicas; aprendizaje a través de reacciones circulares y representaciones mentales.
      .tarjeta.bg-amarillo.p-4(x="40.5%" y="46.8%" numero="+")
        .h5.mb-2 Preoperacional
        p 2 a 7 años: desarrollo del pensamiento simbólico y preconceptual; uso del lenguaje para representar objetos.
      .tarjeta.bg-amarillo.p-4(x="59.2%" y="75.8%" numero="+")
        .h5.mb-2  Operaciones concretas
        p 7 a 11 años: capacidad de realizar operaciones mentales concretas, como clasificar y ordenar objetos según características específicas.
      .tarjeta.bg-amarillo.p-4(x="77.9%" y="43.8%" numero="+")
        .h5.mb-2 Operaciones formales
        p 12 años en adelante: desarrollo del pensamiento abstracto y capacidad de razonar con hipótesis.
    p.mb-4 Modos de representación según Bruner:

    .row.mb-5.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Enactivo
          p.px-1.text-small.mb-0.d-flex.text-center Aprendizaje basado en acciones y manipulaciones físicas.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Icónico
          p.px-1.text-small.mb-0.d-flex.text-center Uso de imágenes y representaciones visuales para facilitar el aprendizaje. 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Simbólico
          p.px-1.text-small.mb-0.d-flex.text-center Representación mediante símbolos y lenguaje, permitiendo un pensamiento más abstracto y conceptual. 

  
    .row.bg-amarillo.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Conexión entre desarrollo cognitivo y socioemocional: invitación al documento
          p.mb-5 ¿Cómo se vinculan las emociones con el aprendizaje? En el documento Conexión entre Desarrollo Cognitivo y Socioemocional , se explora cómo las competencias socioemocionales, como la regulación emocional y la empatía, influyen en la capacidad de aprender. Además, se analizan las implicaciones educativas de Bruner, incluyendo el aprendizaje por descubrimiento y el currículo en espiral, como estrategias para integrar el desarrollo cognitivo y socioemocional en el aula. Se invita a leer el documento para descubrir cómo aplicar estos principios en contextos educativos actuales.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Conexión entre Desarrollo Cognitivo y Socioemocional
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

    h2 Teoría cognitiva: génesis y contraste con la teoría conductual
    p.mb-4 La teoría cognitiva, también conocida como psicología cognitiva, analiza los procesos mentales internos que ocurren durante el aprendizaje, equiparando metafóricamente la mente con un ordenador (Rodríguez, 2008). Este enfoque contrasta con la teoría conductual, que se limita al estudio de estímulos y respuestas observables. Mientras que el conductismo prioriza el condicionamiento y la repetición, la teoría cognitiva pone énfasis en cómo las representaciones mentales son procesadas y transformadas en conocimiento.
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4.text-bold Orígenes y principales exponentes
        p.mb-4 Jerome Bruner, considerado el padre de la teoría cognitiva (Justo Chávez, 2007), la definió como "el proceso de aprender, los distintos modos de representación y las características de una teoría de instrucción" (Guilar, 2009). Bruner desafió el conductismo, postulando un modelo centrado en la actividad mental del aprendiz.
        span Otro avance significativo fue la teoría del aprendizaje significativo de David Ausubel, quien planteó que el aprendizaje ocurre cuando el conocimiento nuevo se relaciona con la estructura cognitiva previa, generando una transformación de ideas base. Este enfoque va más allá de la memorización, integrando significado y evaluación.

    p.mb-4.text-bold Desarrollo cognitivo e inteligencia
    p.mb-4 El desarrollo cognitivo inicia en la infancia, manifestándose a través de la adquisición de habilidades para interactuar y resolver problemas en el entorno. Este aprendizaje no solo implica adquirir conocimientos, sino también aplicarlos de manera adaptativa.

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-4 Por décadas, la inteligencia fue medida con pruebas estandarizadas. Sin embargo, Howard Gardner revolucionó este paradigma con su teoría de las inteligencias múltiples, identificando ocho tipos de inteligencia que abarcan diversas capacidades humanas:
        AcordionA(tipo="b")
          .div(titulo="Lingüística")
            p Habilidad para usar el lenguaje de manera efectiva.
          .div(titulo="Lógico-matemática")
            p Capacidad para razonar, resolver problemas y usar números con fluidez.
          .div(titulo="Espacial")
            p Habilidad para pensar en tres dimensiones, percibir imágenes y transformarlas.
          .div(titulo="Musical")
            p Sensibilidad para percibir, discriminar y expresar ideas mediante formas musicales.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Corporal")
            p Habilidad para usar el cuerpo en actividades físicas o expresiones artísticas.
          .div(titulo="Interpersonal")
            p Capacidad para entender y relacionarse eficazmente con los demás.
          .div(titulo="Intrapersonal")
            p Habilidad para conocerse a sí mismo y manejar emociones y pensamientos.
          .div(titulo="Naturalista")
            p Capacidad para identificar, clasificar y usar elementos del entorno natural.
        span Este modelo abrió las puertas a un enfoque educativo más inclusivo, reconociendo talentos en múltiples áreas y valorando la diversidad.

    p.mb-4.text-bold Principios del aprendizaje significativo
    
    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-4 El aprendizaje significativo, propuesto por Ausubel, se basa en integrar nuevos conocimientos con esquemas previos. Para ello, es necesario:
        .row
          .col-12
            ol.lista-ol--cuadro
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 <strong>Conexión con conocimientos previos:</strong> Relacionar la nueva información con lo que el estudiante ya conoce.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <strong>Experiencias mediadas:</strong> Diseñar actividades que generen significados relevantes.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 <strong>Reestructuración cognitiva:</strong> Adaptar y reorganizar ideas previas en respuesta a la nueva información.
        span Como afirmaba Piaget (1980): "La meta principal de la educación es crear hombres que sean capaces de hacer cosas nuevas...". Este enfoque promueve la creatividad y el pensamiento crítico, superando la mera repetición.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')


    h2.mb-4 Aplicaciones de la teoría cognitiva en la educación
    p.mb-4 La teoría cognitiva enfatiza cómo la mente procesa y controla estímulos, influenciando el comportamiento y resolviendo problemas. Los métodos empleados incluyen:

    .row.mb-5.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Introspección
          p.px-1.text-small.mb-0.d-flex.text-center Infieren procesos psíquicos observados en el aprendizaje.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-27.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Experimentación
          p.px-1.text-small.mb-0.d-flex.text-center Manipulan estímulos para analizar su efecto en el aprendizaje.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-28.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Simulación
          p.px-1.text-small.mb-0.d-flex.text-center Aplican conocimientos a situaciones reales para consolidar el aprendizaje. 

    .row.mb-5
      .col-10.mx-auto(data-aos="fade-up")
        .bg-rosa.p-4
          span La teoría cognitiva resignifica la enseñanza, enfocándose no solo en transmitir conocimiento, sino en desarrollar en los estudiantes habilidades para aprender activamente, resolver problemas y adaptarse a nuevas realidades. Este enfoque fomenta un modelo educativo dinámico, inclusivo y orientado al pensamiento crítico, donde el docente actúa como facilitador y el estudiante como constructor activo de su conocimiento.

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Roles en la teoría cognitiva
    p.mb-4 La teoría cognitiva redefine los roles tradicionales de docente y estudiante, estableciendo una interacción activa y colaborativa que favorece el aprendizaje significativo.

    .row.bg-amarillo.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Roles de la teoría cognitiva 
          p.mb-5 Los roles de la teoría cognitiva resaltan la importancia de comprender cómo las emociones influyen directamente en el aprendizaje, ofreciendo una perspectiva integral que considera tanto el papel del docente como el del estudiante. Este enfoque promueve la integración del desarrollo cognitivo y socioemocional, subrayando la necesidad de diseñar experiencias educativas que estimulen el pensamiento crítico, la empatía y la autorregulación emocional. Para explorar en profundidad cómo estas dinámicas pueden transformar los procesos educativos y potenciar el aprendizaje significativo, lo invitamos a consultar el documento Roles de la teoría cognitiva
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Roles de la teoría cognitiva
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 La enseñanza y evaluación cognitiva 

    p.mb-4 Abordaremos en un cuadro comparativo, una serie de elementos de gran relevancia de esta teoría en su aporte pedagógico. Comprender que el espectro teórico entre aportes de diferentes exponentes y la articulación con otras corrientes, podrían ampliar este ejercicio a conceptos más amplios y teóricos, pero se busca realizar una síntesis justa de aquellos que resultan más representativos en la teoría cognitiva.
    p.mb-4 <strong>Tabla 1.</strong> Enseñanza y evaluación cognitiva

    .tabla-a.mb-5
      table
        thead
          tr
            th.bg-rosa-oscuro.text-center APORTES A LA ENSEÑANZA
            th.bg-rosa-oscuro.text-center APORTES EN LA EVALUACIÓN
        tbody
          tr
          tr
            td Propone procesos mediante los cuales simplifiquemos la interacción con la realidad a partir de la agrupación de objetos, sucesos o conceptos 
            td El alumno deberá desarrollar una reflexión crítica de modo que descubra, aprenda, cosas relativas al lenguaje, la fabricación y uso de instrumentos, la organización social y la visión del mundo que tenían distintos grupos culturales.
          tr
            td Aporta la metáfora del andamiaje, que propone que, a menor competencia, mayor será la ayuda que le proporcionará el maestro. A medida que el estudiante va siendo más competente el monitor retira su ayuda y concede más responsabilidad y control.
            td La evaluación formativa asegura la articulación entre las características de los alumnos y las características del sistema de formación.
          tr
            td El aprendizaje es un proceso activo, de asociación, construcción y representación.
            td El interés se centra en los procesos de aprendizaje, no en los resultados obtenidos, ya que lo que se pretende es comprender el funcionamiento mental del alumno ante la tarea a través del conocimiento de sus representaciones y de las estrategias que utiliza.
          tr
            td La educación debe inculcar habilidades y fomentar la representación de la propia experiencia y del conocimiento buscando el equilibrio entre la riqueza de lo particular y la economía de lo general
            td Los datos recogidos son cualitativos: se utilizan cuestionarios, observación del comportamiento, observación de sus reflexiones y de las interacciones…
          tr
            td La información o contenidos de aprendizaje se deben presentar de una forma adecuada a la estructura cognitiva (el modo de representación) del aprendiz.
            td Se da mayor importancia a las estrategias que utiliza el alumno para alcanzar un objetivo, que no al grado en que éste se alcanza.
          tr
            td Aprendizaje por descubrimiento. El instructor debe motivar a los estudiantes para que sean ellos mismos los que descubran relaciones entre conceptos y construyan conocimientos. La influencia de Piaget al respecto es evidente.
            td El aprendiz construye conocimiento (genera proposiciones, verifica hipótesis, realiza inferencias) según sus propias categorías que se van modificando a partir de su interacción con el ambiente.
          tr
            td El currículo, en consecuencia, debe organizarse de forma espiral, es decir, se deben trabajar los mismos contenidos, ideas o conceptos, cada vez con mayor profundidad. Los niños irán modificando sus representaciones mentales a medida que se desarrolla su cognición o capacidad de categorizar, conceptualizar y representar el mundo.
            td Los alumnos desarrollan un sano escepticismo respecto de las soluciones simplistas a los problemas, y finalmente, los estudiantes son responsables de su propio aprendizaje y evaluación.

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Desarrollo socioemocional

    p.mb-5 El desarrollo socioemocional se refiere a la capacidad de experimentar, identificar y gestionar emociones para relacionarse de manera saludable con los demás y consigo mismo. Este proceso incluye competencias como la autoestima, la empatía y la autorregulación, elementos esenciales para el aprendizaje significativo y el crecimiento personal.

    h2 Aportes de Lev Vygotsky al desarrollo socioemocional
    p.mb-4 Vygotsky subrayó la importancia del entorno sociocultural en el desarrollo emocional. Destacó que las habilidades emocionales y sociales se forman inicialmente a través de la interacción social y, posteriormente, se internalizan. Un concepto clave de su teoría es la Zona de Desarrollo Próximo (ZDP), que define el espacio entre lo que un niño puede hacer por sí mismo y lo que puede lograr con ayuda.

    p.mb-4 Aspectos clave de la teoría de Vygotsky: 

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Zona de Desarrollo Próximo (ZDP)")
            p Espacio donde se desarrolla el potencial del niño mediante la ayuda de otros más capacitados.
          .div(titulo="Papel del entorno social")
            p El entorno sociocultural influye directamente en el desarrollo de competencias emocionales y cognitivas.
          .div(titulo="Competencias destacadas")
            p Autoestima, empatía y comunicación asertiva, fomentadas por relaciones positivas y apoyo emocional.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

    .row.bg-amarillo.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Aportes de Erik Erikson al desarrollo socioemocional
          p.mb-5 El concepto de paz puede parecer sencillo, pero encierra una complejidad profunda que ha sido objeto de estudio durante siglos. En el PDF Concepto de paz, exploramos las ideas de Johan Galtung (1996), quien distingue entre la paz negativa y la paz positiva, dos enfoques que van más allá de la mera ausencia de violencia. A través de ejemplos concretos, veremos cómo estas definiciones nos ayudan a comprender y mejorar las dinámicas cotidianas en nuestras comunidades y lugares de trabajo, y descubriremos por qué la construcción de una paz genuina exige mucho más que evitar conflictos abiertos.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Nombre del documento
             
    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.text-small
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=6tISfTktlkQ") TANV España Asociación. (1 abr 2020). Desarrollo socioemocional en el TANV.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=yYFhPO5pArc&t=6s") Sprouts Español. (8 oct 2020). La Teoría del Desarrollo Cognitivo de Piaget
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}") 
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/61891") Rodríguez Palmero, M. L. (2013). La teoría del aprendizaje significativo en la perspectiva de la psicología cognitiva: ( ed.). Ediciones Octaedro, S.L. 
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/49190 ") González Seijas, R. M. & López Larrosa, S. (2017). Programa Mupo. Mentes Únicas: programas para la mejora socioemocional de las dificultades de aprendizaje: ( ed.). Difusora Larousse - Ediciones Pirámide. 
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')
    
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
