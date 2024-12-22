<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'NOMBRE TEMA 3'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 Los modelos pedagógicos no solo reflejan las teorías y prácticas educativas, sino que también evidencian cómo estas se adaptan a las necesidades y características de los estudiantes en distintos contextos. La psicopedagogía, al centrarse en el aprendizaje individual y colectivo, encuentra afinidades y contrastes con los diversos modelos pedagógicos. En la siguiente tabla se presentan las principales características de los modelos pedagógicos y su relación con los enfoques psicopedagógicos.
    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Modelo tradicional")
            p.mb-1 - Centrado en el docente como autoridad. 
            p.mb-1 - Aprendizaje pasivo basado en memorización. 
            p.mb-1 - Evaluación cuantitativa.
            p.mb-1 - Limitada adaptación a las necesidades individuales. Contrasta con el énfasis psicopedagógico en la personalización del aprendizaje.
          .div(titulo="Modelo conductista")
            p.mb-1  - Basado en estímulo-respuesta. 
            p.mb-1 - Cambios de conducta observables como indicador de aprendizaje. 
            p.mb-1 - Evaluación cuantitativa centrada en resultados. 
            p.mb-1 - Útil para establecer hábitos, pero no aborda aspectos emocionales y cognitivos complejos.
          .div(titulo="Modelo constructivista")
            p.mb-1 - Fomenta la autonomía del estudiante. 
            p.mb-1 - Centraliza el aprendizaje significativo. 
            p.mb-1 - El error es parte del proceso. 
            p.mb-1 - Evaluación cualitativa enfocada en el progreso individual. Compatible con la psicopedagogía al priorizar el aprendizaje contextualizado.
          .div(titulo="Modelo humanista")
            p.mb-1 - Centrado en el desarrollo integral del estudiante.  
            p.mb-1  - Promueve creatividad, autorrealización y autonomía. 
            p.mb-1  - Evaluación cualitativa basada en la autoevaluación. Alta afinidad con la psicopedagogía por su atención a la diversidad y desarrollo integral.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

    h2 Definiciones clave: enfoques, teorías y modelos pedagógicos
    p.mb-4 En el ámbito educativo, es esencial distinguir entre enfoques pedagógicos, teorías del aprendizaje y modelos pedagógicos, ya que cada uno tiene un papel específico en la construcción de estrategias de enseñanza. La siguiente tabla presenta estas definiciones, proporcionando ejemplos para aclarar sus diferencias.
    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Enfoque pedagógico")
            p.mb-1 - Guía ideológica y práctica que orienta la enseñanza hacia un propósito específico. 
            p.mb-1 - Ejemplo: Enfoque liberador (fomenta pensamiento crítico y desarrollo ético) y enfoque ejecutivo (docente como facilitador de aprendizajes predefinidos). 
          .div(titulo="Teoría del aprendizaje")
            p.mb-1 - Sistema lógico que explica cómo se adquiere y desarrolla el conocimiento. 
            p.mb-1 - Ejemplo: Conductismo (aprendizaje estímulo-respuesta) y constructivismo (aprendizaje significativo mediante interacción con el entorno).
          .div(titulo="Modelo pedagógico")
            p.mb-1 - Construcción teórica que ajusta la realidad pedagógica a necesidades contextuales. 
            p.mb-1 - Ejemplo: Modelo tradicional (centrado en el docente) y modelo humanista (prioriza el desarrollo integral, incluyendo aspectos emocionales y sociales).

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.text-small
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=Q6Xf9Z4WUEU") Ed Knows & Suss Draws. (14 Diciembre 2021). Teorías del aprendizaje
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/228354?page=136.") Vargas Silva, F. A. (2019). Tendencias, corrientes y modelos pedagógicos: relaciones, semejanzas y diferencias
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/221583") López Díaz, R. A. (2019). Modelos pedagógicos y formación docente: apuntes de clase para su comprensión y resignificaciones en el aula y en las instituciones educativas: (1 ed.). Universidad de La Salle - Ediciones Unisalle. 
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
