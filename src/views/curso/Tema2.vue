<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Diseño Universal del Aprendizaje'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 En los últimos años, el <b>Diseño Universal del Aprendizaje (DUA)</b> ha ganado relevancia en el sistema educativo colombiano, especialmente a partir del <b>Decreto 1421 de 2017</b>, que establece políticas de educación inclusiva. Este enfoque es indispensable al diseñar programas psicopedagógicos inclusivos, ya sea como estrategia central o como base para enriquecer las propuestas pedagógicas.
        .bg-rosa.p-4
          span <b>El DUA se inspira en el Diseño Universal en arquitectura</b>, que busca eliminar barreras en el acceso a espacios públicos, incorporando elementos como rampas y ascensores para personas con discapacidad motriz. La educación adapta este concepto, integrando disciplinas como las TIC, las neurociencias y la psicología cognitiva. Así, se propone una filosofía educativa que reconoce la diversidad en el aprendizaje, eliminando barreras para acceder al conocimiento.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')  
    
    h2 Principios del DUA

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        p.mb-4 El DUA se basa en tres principios fundamentales:
        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-31.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Proporcionar múltiples  formas de compromiso
              p.px-1.text-small.mb-0.d-flex.text-center Aborda el “<b>por qué</b>” del aprendizaje, fomentando la motivación y el interés de los estudiantes.
          
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-31.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Proporcionar múltiples medios de representación
              p.px-1.text-small.mb-0.d-flex.text-center Se centra en el “<b>qué</b>” del aprendizaje, diversificando la presentación de la información.
          
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-31.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Proporcionar múltiples medios de expresión
              p.px-1.text-small.mb-0.d-flex.text-center Enfoca el “<b>cómo</b>” del aprendizaje, permitiendo que los estudiantes demuestren lo que saben de diversas maneras. 
          
    p.mb-4 Estos principios se fundamentan en las neurociencias, que explican que cada persona aprende de forma única. Según este enfoque, el aprendizaje activa tres redes neuronales principales:
    p.mb-3 <strong>Tabla 1.</strong> Principios fundamentales  en las neurociencias

    .tabla-a.mb-4
      table
        thead
          tr
            th.text-center.borde-right-gris.bg-amarillo Red neuronal
            th.text-center.borde-right-gris.bg-amarillo Descripción
            th.text-center.bg-amarillo Principio relacionado
        tbody
          tr
            td.borde-right-gris.text-bold.text-center Redes afectivas 
            td.borde-right-gris Determinan el <b>por qué</b> del aprendizaje, involucrando emociones y motivación.
            td Proporcionar múltiples formas de compromiso.
          tr
            td.borde-right-gris.text-bold.text-center Redes de reconocimiento 
            td.borde-right-gris  Procesan el <b>qué</b> del aprendizaje, vinculadas al acceso y comprensión de la información.
            td Proporcionar múltiples medios de representación
          tr
            td.borde-right-gris.text-bold.text-center Redes estratégicas  
            td.borde-right-gris Relacionadas con el <b>cómo</b> del aprendizaje, enfocadas en la expresión y ejecución.
            td  Proporcionar múltiples medios de expresión.

    h2 Integración del DUA con las TIC
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 El DUA utiliza las TIC para diversificar el acceso al aprendizaje, facilitando que cada estudiante elija herramientas adaptadas a sus necesidades y capacidades. Esto incluye:
        .bg-rosa.p-4
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Facilitar el aprendizaje para estudiantes con discapacidades sensoriales (visuales o auditivas) mediante tecnologías accesibles.

          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Fomentar la diversidad de habilidades y estilos de aprendizaje, en línea con la teoría de las inteligencias múltiples.

          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Promover la autonomía y la motivación de los estudiantes.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

    h2 Implementación del DUA en programas psicopedagógicos
    p.mb-4 Para generar transformaciones significativas en las escuelas, el DUA debe integrarse en las estrategias psicopedagógicas y articularse con los modelos pedagógicos institucionales. Algunos aspectos clave para su implementación incluyen:
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Flexibilidad curricular")
            p Diseñar contenidos, materiales y evaluaciones que se ajusten a las necesidades de los estudiantes.
          .div(titulo="Planificación adaptable")
            p Garantizar que la enseñanza y los recursos puedan modificarse según las características de los estudiantes.
          .div(titulo="Identificación de barreras")
            p Detectar y superar obstáculos que interfieran con el aprendizaje.
          .div(titulo="Promoción de la autonomía")
            p Fomentar aprendices expertos que participen activamente en su proceso educativo.
          .div(titulo="Accesibilidad desde el inicio")
            p Garantizar que el currículo y las acciones en el aula sean inclusivos desde su concepción.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rojo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-34.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 El DUA no solo facilita un aprendizaje significativo y accesible para todos los estudiantes, sino que también elimina barreras para aquellos con discapacidades o trastornos. Este enfoque, al ser flexible y universal, transforma el aula en un espacio inclusivo y dinámico, donde todos los estudiantes tienen la oportunidad de alcanzar su máximo potencial.

    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Lecturas recomendadas
          p.mb-5 Se invita los estudiantes a profundizar en este enfoque pedagógico llamado DUA en el texto de Sánchez Fuentes, S. (2023. El diseño universal para el aprendizaje: guía práctica para el profesorado. Que permitirá pensarse la planeación y ejecución de las clases desde un enfoque incluyente donde la diversidad sea un flujo natural en las dinámicas de clase.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://elibro.net/es/ereader/tecnologicadeloriente/231716?page=1" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/link-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Libro.</strong>
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/231716") Sánchez Fuentes, S. (2023). El diseño universal para el aprendizaje: guía práctica para el profesorado. Narcea Ediciones.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/60493") Bravo Benítez, M. (2006). Estrategias educativas en el aula. Ediciones Aljibe.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.saldarriagaconcha.org/wp-content/uploads/2019/01/Narrativa-PIAR.pdf") Fundación Saldarriaga Concha (2019). Plan Individual de Ajustes Razonables.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/Oyf-AL-qTuw") Accesibilidad, diseño universal y ajustes razonables [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=X0Y9rn6BRvM") Diego Neurociencias (2021). Dificultades y Trastornos del Aprendizaje [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=CFDwtj8rsKw") DescLAB (2019). LAB Webinar - PIAR 02 [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



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
