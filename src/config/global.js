export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Intervención psicopedagógica en contextos diversos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Intervención psicopedagógica en contextos diversos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Diseño de programas psicopedagógicos inclusivos',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño Universal del Aprendizaje',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan Individual de Ajustes Razonables (PIAR)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Asociación Americana de Psiquiatría. (2014). Guía de consulta de los criterios diagnósticos del DSM-5.',
      link:
        'https://www.eafit.edu.co/ninos/reddelaspreguntas/Documents/dsm-v-guia-consulta-manual-diagnostico-estadistico-trastornos-mentales.pdf',
    },
    {
      referencia:
        'Barreno, Z., Astudillo, A., & Barreno, M. (2018). Hacia una estrategia de intervención en la comunidad: referentes teóricos metodológicos. Revista pedagógica de la universidad de Cienfuegos, 14, 258-265.',
      link: 'http://scielo.sld.cu/pdf/rc/v14n62/rc396218.pdf',
    },
    {
      referencia:
        'Cabrera, A., & David, O. (2017). Estrategias psicopedagógicas dirigidas a docentes y alumnos que excluyen a niños y niñas con problemas de atención. [Tesis doctoral, Universidad técnica de Machala].',
      link:
        'https://repositorio.utmachala.edu.ec/bitstream/48000/11388/1/E-6355_ARMIJOS%20CABRERA%20ORLANDO%20DAVID.pdf',
    },
    {
      referencia:
        'Contreras Sierra, ER. (2013). El concepto de estrategia como fundamento de la planeación estratégica. Pensamiento & Gestión, (35), 152-181.',
      link: 'http://www.scielo.org.co/pdf/pege/n35/n35a07.pdf',
    },
    {
      referencia:
        'de la Torre González, B. (2012). Una mirada a la evaluación psicopedagógica desde la labor profesional de un EOEP. Padres Y Maestros, (347), 27-31.',
      link:
        'https://revistas.comillas.edu/index.php/padresymaestros/article/view/573',
    },
    {
      referencia:
        'Decreto 1421 del 2017. Por el cual se reglamenta en el marco de la educación inclusiva la atención educativa a la población con discapacidad. 29 de agosto de 2017.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30033428',
    },
    {
      referencia:
        'Diccionario Etimológico Castellano. (2024). Etimología estrategia. DECEL.',
      link: 'https://etimologias.dechile.net/?estrategia',
    },
    {
      referencia:
        'Flores, D., & Contreras, M. (2022). La evaluación psicopedagógica: una revisión del tema (2007-2022). Revista Senderos Pedagógicos, 13, 49-95.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8544875',
    },
    {
      referencia:
        'Mosquera, I. (2020). Análisis FODA en Educación: Claves para transformar la institución. Unir.',
      link:
        'https://ecuador.unir.net/actualidad-unir/analisis-dafo-en-educacion/',
    },
    {
      referencia:
        'Muñoz, C., Muñoz, S., & Virán, A. (2024). Estrategias e investigaciones desde las didácticas. RiL editores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/268338',
    },
    {
      referencia:
        'Osoria Barcelay, M., & Pemberton Beltrán, FV. (2014). Herramientas psicopedagógicas en el trabajo independiente. EduSol, 14(47), 1-10.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5678374',
    },
    {
      referencia:
        'Real Academia Española. (2014). Diccionario de la lengua española. RAE.',
      link: 'https://dle.rae.es/estrategia',
    },
    {
      referencia:
        'Toala, L., Cedeño, L., Rodríguez, M., & Cusme, K. (2024). Estrategias para la Intervención Psicopedagógica en el Aula. Dialnet, 10, 439-455.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9502303',
    },
  ],
  glosario: [
    {
      termino: 'Construcción',
      significado:
        'Proceso de crear algo, ya sea físico o conceptual. Implica la unión de partes para formar un todo.',
    },
    {
      termino: 'Diseño',
      significado:
        'Creación de un plan o esquema para la realización de algo. Se enfoca en la forma, estructura y funcionalidad.',
    },
    {
      termino: 'DUA',
      significado:
        'Diseño universal para el aprendizaje. Es un enfoque que busca hacer los entornos de aprendizaje más accesibles e inclusivos para todos los estudiantes, independientemente de sus habilidades o discapacidades.',
    },
    {
      termino: 'Enfoques',
      significado:
        'Perspectivas o puntos de vista desde los cuales se aborda un tema o problema. Son las diferentes maneras de entender y analizar una situación.',
    },
    {
      termino: 'Estrategias',
      significado:
        'Planes o acciones diseñadas para alcanzar un objetivo específico. Son los métodos que se utilizan para lograr un resultado deseado.',
    },
    {
      termino: 'Etapas',
      significado:
        'Fases o pasos sucesivos de un proceso. Cada etapa contribuye al avance hacia un objetivo final.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso de valorar o juzgar algo. En educación, se utiliza para medir el progreso de los estudiantes y la efectividad de las intervenciones.',
    },
    {
      termino: 'Intervención',
      significado:
        'Acción realizada para modificar o mejorar una situación. En el ámbito educativo, puede referirse a acciones para apoyar a estudiantes con dificultades de aprendizaje.',
    },
    {
      termino: 'Modelos',
      significado:
        'Representaciones simplificadas de la realidad. Se utilizan para explicar fenómenos complejos y predecir resultados.',
    },
    {
      termino: 'PIAR',
      significado:
        'Herramienta educativa que busca la inclusión de estudiantes con barreras en el aprendizaje en aulas regulares.',
    },
    {
      termino: 'Programa',
      significado:
        'Conjunto de actividades planificadas y coordinadas para alcanzar un objetivo. Es un plan de acción detallado.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Susceptibilidad a sufrir daños o perjuicios. En el contexto educativo, puede referirse a la vulnerabilidad de ciertos estudiantes a experimentar dificultades de aprendizaje o exclusión.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
