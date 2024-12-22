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
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la psicopedagogía',
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
        titulo: 'Fundamentos de la psicopedagogía',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollo cognitivo y socioemocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Roles en la teoría cognitiva',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La enseñanza y evaluación cognitiva',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Desarrollo socioemocional',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Teorías del aprendizaje y su relación con el desarrollo psicopedagógico',
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
        'Alanís, P., Gutiérrez, D. (2011). Los estilos de aprendizaje en estudiantes de telesecundaria.',
      link:
        'file:///C:/Users/smd/Downloads/DialnetLosEstilosDeAprendizajeEnEstudiantesDeTelesecundar-4034711.pdf',
    },
    {
      referencia:
        'Caro, E., Monroy, M. (2008). Relación de los Ambientes Hipertextuales de Aprendizaje Gráfico y Sonoro, con los Estilos de Aprendizaje Verbal y Visual.',
      link: 'http://www.redalyc.org/html/1331/133115027013/index.html',
    },
    {
      referencia:
        'Chávez Rodríguez, J., Deler Ferrera, G., Permuy Gonzalez, L. D., & Suarez Lorenzo, A. (2007). Principales corrientes y tendencias a inicios del siglo XXI de la pedagogía y la didáctica. INSTITUTO CENTRAL DE CIENCIAS PEDAGÓGICAS.',
      link:
        'https://books.google.com.co/books?id=-xcaEAAAQBAJ&printsec=frontcover&hl=es',
    },
    {
      referencia:
        'Cristina Ricci. (2021). Investigación psicopedagógica e investigación en Psicopedagogía: diferenciación necesaria desde una perspectiva epocal, de la complejidad, disciplinar, profesional, inter y transdisciplinar. Revista Perspectivas metodológicas, 21, 1-22.',
      link: 'https://revistas.unla.edu.ar/epistemologia/article/view/3442/1726',
    },
    {
      referencia:
        'Guilar, M. E. (2009). Las ideas de Bruner: De la revolución cognitiva a la revolución cultural. Educere, 13(44), 235-241.',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1316-49102009000100028',
    },
    {
      referencia:
        'Hilda Fingermann. (2015). ¿Qué son los enfoques pedagógicos? La Guía.',
      link:
        'https://educacion.laguia2000.com/ensenanza/que-son-los-enfoques-pedagogicos',
    },
    {
      referencia:
        'Juan Antonio López, A. F. (2007). La sociedad y economía del conocimiento: el reto para la no exclusión de los adultos. Granada, España.',
      link:
        'https://revistaseug.ugr.es/index.php/publicaciones/article/view/2275/2394',
    },
    {
      referencia:
        'Ortiz, A. (2013). Modelos pedagógicos y teorías del aprendizaje. Magdalena, Colombia.',
      link:
        'https://www.researchgate.net/publication/315835198_Modelos_Pedagogicos_y_Teorias_del_Aprendizaje',
    },
    {
      referencia:
        'Penã Rodriguez, F., & Acevedo Zapata, S. (2011). El campo de la psicopedagogía: Discusiones, procesos de formación, identidad y prácticas. Revista Brasileira de Orientação Profissional, 12(1), 127-132.',
      link: 'https://www.redalyc.org/pdf/2030/203018660014.pdf',
    },
    {
      referencia:
        'Rafael Bisquerra. (1996). Orígenes y desarrollo de la orientación psicopedagógica. Narcea S.A de Ediciones.',
      link:
        'http://www.uvirtual.net/sites/default/files/2016-11/bXVdos-Unidad01_LC_01_BISQUERRA.pdf',
    },
    {
      referencia:
        'Rafel Bisquerra. (2014). Los orígenes de la psicopedagogía: El concepto y el término. Revista Española de Orientación y Psicopedagogía, 13, 17-29.',
      link: 'https://doi.org/10.5944/reop.vol.13.num.1.2002.11583',
    },
    {
      referencia:
        'Seijo, C. B. (2012). El cerebro triuno y la inteligencia ética: matriz fundamental de la inteligencia multifocal. Revista Praxis, 8, 147-165.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5907276',
    },
    {
      referencia:
        'Tutaya, S. G. (2019). Funciones de la psicopedagogía: como una disciplina importante para el aprendizaje. Chincha, Perú.',
      link:
        'https://repositorio.untumbes.edu.pe/handle/20.500.12874/1431?show=full',
    },
    {
      referencia:
        'Vargas Silva, F. A. (2019). Tendencias, corrientes y modelos pedagógicos: relaciones, semejanzas y diferencias. (Una mirada desde Occidente) (1 ed.). Tolima, Sello Editorial Universidad del Tolima.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/228354?page=136',
    },
  ],
  glosario: [
    {
      termino: 'Cognitivo',
      significado: 'Perteneciente o relativo al conocimiento',
    },
    {
      termino: 'Didáctica',
      significado:
        'Propio, adecuado o con buenas condiciones para enseñar o instruir',
    },
    {
      termino: 'Diversidad',
      significado: 'Variedad, desemejanza, diferencia',
    },
    {
      termino: 'Emociones',
      significado:
        'Alteraciones del ánimo intensa y pasajera, agradable o penosa, que va acompañada de cierta conmoción somática',
    },
    {
      termino: 'Estadios',
      significado: 'Período o fase de un proceso',
    },
    {
      termino: 'Inteligencia',
      significado:
        'Capacidad de entender o comprender. Capacidad de resolver problemas',
    },
    {
      termino: 'Interdisciplinariedad',
      significado:
        'Dicho de un estudio o de otra actividad: que se realiza con la cooperación de varias disciplinas',
    },
    {
      termino: 'Memoria',
      significado:
        'Facultad psíquica por medio de la cual se retiene y recuerda el pasado',
    },
    {
      termino: 'Modelo',
      significado:
        'Arquetipo o punto de referencia para imitarlo o reproducirlo',
    },
    {
      termino: 'Pensamiento',
      significado:
        'Conjunto de ideas propias de una persona, de una colectividad o de una época',
    },
    {
      termino: 'Psicología',
      significado:
        'Ciencia o estudio de la mente y de la conducta en personas o animales',
    },
    {
      termino: 'Psicopedagogía',
      significado:
        'Rama de la psicología que se ocupa de los fenómenos de orden psicológico para llegar a una formulación más adecuada de los métodos didácticos y pedagógicos',
    },
    {
      termino: 'Socioemocional',
      significado:
        'Conductas aprendidas que llevamos a cabo cuando interactuamos con otras personas y que nos son útiles para expresar nuestros sentimientos, actitudes, opiniones y defender nuestros derechos',
    },
    {
      termino: 'Teoría',
      significado:
        'Conocimiento especulativo considerado con independencia de toda aplicación',
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
