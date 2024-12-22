<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Plan Individual de Ajustes Razonables (PIAR)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4  El Plan Individual de Ajustes Razonables (PIAR) es una herramienta diseñada para garantizar los procesos de enseñanza y aprendizaje de estudiantes con barreras transitorias o permanentes en el acceso al aprendizaje. Según el Decreto 1421 de 2017, el PIAR incluye los apoyos necesarios para asegurar la participación, permanencia y promoción educativa, siendo un complemento al Diseño Universal del Aprendizaje (DUA). A continuación, se describen los elementos fundamentales del PIAR:
    h2 Componentes del PIAR
    p.mb-4 Los componentes del PIAR incluyen la valoración pedagógica, que analiza el contexto del estudiante; la identificación de barreras, centrada en eliminar obstáculos en el entorno; el planteamiento de objetivos claros y ajustados al currículo; los ajustes razonables, diseñados para fomentar la inclusión; el acta de acuerdo, que formaliza compromisos entre actores educativos; y la evaluación y seguimiento, que asegura la eficacia de las estrategias implementadas.
    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4
      
        .row.mb-4
          .col-12.col-md-10.mx-auto
        
            SlyderF(columnas="col-12 col-lg-6 col-xl-4 py-4 px-3").mb-4
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-36.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Valoración pedagógica
                p.px-1.text-small.mb-0.d-flex.text-center Conocer el contexto del estudiante, incluyendo aspectos familiares, escolares, sociales, características individuales e intereses.
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-37.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Identificación de barreras
                p.px-1.text-small.mb-0.d-flex.text-center Analizar barreras en el entorno, evitando atribuir las dificultades al estudiante como problema.
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-38.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Planteamiento de objetivos
                p.px-1.text-small.mb-0.d-flex.text-center Definir metas claras en áreas de dificultad, considerando ajustes necesarios para alcanzar competencias del currículo.
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-39.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Ajustes razonables
                p.px-1.text-small.mb-0.d-flex.text-center Diseñar materiales, estrategias y modificaciones para eliminar barreras, promover autonomía e inclusión.
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-40.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Acta de acuerdo
                p.px-1.text-small.mb-0.d-flex.text-center Formalizar compromisos entre docentes, familias y directivos para implementar el PIAR.
              custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-41.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Evaluación y seguimiento
                p.px-1.text-small.mb-0.d-flex.text-center Verificar la eficacia de los ajustes y realizar cambios necesarios para mejorar su aplicación.

    .bg-rosa.p-4
      span Con estos pasos, el PIAR se constituye en una herramienta clave para la inclusión educativa, garantizando que cada estudiante reciba los apoyos necesarios para superar las barreras que enfrenta en su proceso de aprendizaje.
    h2 Parámetros para el diseño de programa psicopedagógico
    p.mb-4 El diseño de un programa psicopedagógico debe considerar elementos fundamentales que permitan su implementación tanto grupal como individual. Este enfoque no busca ser terapéutico, sino más bien escolar e inclusivo, garantizando que el docente pueda estructurar su programa de manera adecuada y teniendo en cuenta el contexto integral del estudiante. Aunque se abordó previamente la estructura de estrategias psicopedagógicas, en este apartado se delimitan  los parámetros esenciales que deberían formar parte de un programa organizado.
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-4.text-bold 
        AcordionA(tipo="b")
          .div(titulo="Análisis")
            p.mb-3 ▪  Datos generales y anamnesis. 
            p ▪  Herramientas de análisis, como la matriz DOFA, valoración pedagógica, análisis de contextos y barreras.
          .div(titulo="Objetivos")
            p.mb-3 ▪  General: Definir el objetivo global del programa.

            p ▪  Específicos: Establecer metas específicas según las áreas académicas y/o socioemocionales.
          .div(titulo="Logros/Competencias")
            p Determinar las competencias de aprendizaje a alcanzar.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        h3 Implementación
        p.mb-4 <b>Clases de intervención:</b> Diseñar acciones concretas para el desarrollo del programa.
        .bg-rosa.p-4
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Modelo de intervención psicopedagógica seleccionado.

          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Materias o áreas vinculadas, junto con sus metas o competencias específicas.
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Cronograma que permita una planificación secuencial y dosificada.

          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Actividades adaptadas a las características y ritmos de aprendizaje del estudiante.
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Materiales y recursos necesarios para estimular el aprendizaje.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        h3 Evaluación
        .bg-rosa.p-4.mb-4
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <b>Informe:</b> Realizar una síntesis de los resultados alcanzados. 

          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <b>Logro de objetivos:</b> Evaluar el grado de cumplimiento de los objetivos planteados.
        span Se invita los estudiantes a profundizar en estrategias educativas que le permitan construir mejores programas psicopedagógicos a través de Bravo Benítez, M. (2006). Estrategias educativas en el aula, que brinda en un lenguaje claro y concreto herramientas pedagógicas y didácticas en la aplicación de estrategias de intervención.
        a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://elibro.net/es/ereader/tecnologicadeloriente/60493?page=4" target="_blank")
          img.h-100(style="width: 48px" src='@/assets/componentes/link-icon-square.svg', alt='Texto que describa la imagen')
          p.text-small.fs-14px.my-auto.px-2 <strong>Libro.</strong> Estrategias educativas en el aula
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Lecturas recomendadas
          p.mb-5 Se invita a explorar el documento sobre la evaluación psicopedagógica, donde se aborda este proceso como una herramienta esencial para identificar necesidades educativas y diseñar estrategias de intervención. A través de enfoques como el psicométrico, conductual y de potencial de aprendizaje, se destacan métodos para valorar el desarrollo individual del estudiante en su contexto. Este enfoque busca no solo superar barreras de aprendizaje, sino también fomentar la autonomía, confianza y motivación del aprendiz. Una lectura clave para quienes deseen profundizar en prácticas inclusivas y efectivas en la enseñanza.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://elibro.net/es/ereader/tecnologicadeloriente/231716?page=1" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Evaluación psicopedagógica
             

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/153536") Galve Manzano, J. L. (2014). Evaluación psicopedagógica de las dificultades de aprendizaje. Editorial CEPE.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/45972") Salvador Alcaide, A. (2016). Evaluación y tratamiento psicopedagógicos. Narcea Ediciones.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=z6IecgzGRWo") Mental Test Lab (2024). La Evaluación Psicopedagógica en el Contexto Actual [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=3caGLuBzqY0") ILCEtv (2024). Entre dos visiones de la evaluación para la atención educativa [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


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
