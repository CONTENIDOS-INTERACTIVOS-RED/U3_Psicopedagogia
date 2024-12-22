<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p.mb-4 Bienvenidos a la asignatura Psicopedagogía y contextos sociales, diseñada para proporcionar herramientas teóricas que les permitan desarrollar acciones pedagógicas y didácticas efectivas. Este curso busca impactar positivamente en sus futuros estudiantes y potenciar sus propias habilidades mediante estrategias psicopedagógicas.
    .row
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-rosa.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") En la unidad 1, exploraremos temas como la definición de psicopedagogía, el desarrollo cognitivo y la influencia del contexto socioemocional. También abordaremos teorías del aprendizaje y su relación con el desarrollo psicopedagógico, resaltando la importancia de entender los contextos sociales en el aprendizaje.
        p Al finalizar, se espera que diseñen estrategias inclusivas que eliminen barreras y promuevan la accesibilidad en el aprendizaje, formando profesionales críticos y reflexivos capaces de responder a las demandas educativas actuales.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  
    
    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
