<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p.mb-4 La intervención psicopedagógica se ha fortalecido en el ámbito escolar gracias a las políticas de educación inclusiva, destacando la importancia de eliminar barreras al aprendizaje sin importar el contexto socioeconómico, cultural o funcional del estudiante. Esta unidad busca que los estudiantes comprendan los fundamentos y herramientas necesarias para diseñar estrategias inclusivas que aborden aspectos cognitivos, emocionales y sociales, permitiendo a los educandos superar las dificultades de su entorno.
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-rosa.p-4.mb-4
          span En el desarrollo de programas psicopedagógicos, se abordarán modelos pedagógicos adaptados a la psicopedagogía y las etapas esenciales para diseñar estrategias claras y enfocadas. Elementos como el Diseño Universal de Aprendizaje (DUA) y el Plan Individual de Ajustes Razonables (PIAR) serán centrales, destacando su importancia como paradigmas inclusivos que ayudan a eliminar barreras y promueven aprendizajes significativos para todos los estudiantes.
        span Al finalizar la unidad, los estudiantes estarán capacitados para diseñar e implementar estrategias psicopedagógicas contextualizadas, evaluando su efectividad y ajustándolas según las necesidades del educando. Este aprendizaje práctico fomentará acciones analíticas y asertivas en pro de la educación inclusiva, integrando conceptos clave como DUA y PIAR para un accionar pedagógico integral y transformador.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')

    
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
