export type ProjectCategory = 'web' | 'java' | 'database';

export type ProjectType = 'comercial' | 'academico' | 'personal';

export interface Project {
  id: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  type: ProjectType;
  tags: string[];
  highlights: string[];
  repoUrl: string;
  demoUrl?: string;
  featured: boolean;
  status: 'completado' | 'en-desarrollo';
}

export interface FilterOption {
  id: 'all' | ProjectCategory;
  label: string;
}

export const filterOptions: FilterOption[] = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Desarrollo web' },
  { id: 'database', label: 'Bases de datos' },
  { id: 'java', label: 'Java' },
];

/**
 * Información verificada de proyectos basada exclusivamente en repositorios
 * y código fuente de GitHub (oserrano12).
 */
export const projectsData: Project[] = [
  {
    id: 'deportivos-pipe-catalogo',
    title: 'Deportivos Pipe Catálogo',
    description:
      'Catálogo e-commerce mobile-first con panel administrativo CRUD, gestión de inventario y tallas, persistencia en Supabase y conversión a ventas directas por WhatsApp e Instagram.',
    categories: ['web', 'database'],
    type: 'comercial',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel'],
    highlights: [
      'Panel de administración CRUD con subida de imágenes y Server Actions',
      'Base de datos PostgreSQL en Supabase con políticas de seguridad RLS',
      'Catálogo con filtros por marca, tallas y búsqueda en tiempo real',
      'Checkout conversacional directo a WhatsApp e Instagram con pedido formateado',
    ],
    repoUrl: 'https://github.com/oserrano12/deportivos-pipe-catalogo',
    demoUrl: 'https://deportivos-pipe-catalogo.vercel.app',
    featured: true,
    status: 'completado',
  },
  {
    id: 'gestor-gastos',
    title: 'Gestor de Gastos PWA',
    description:
      'Aplicación multiplataforma (PWA) con motor financiero avanzado. Incluye cálculo automático de amortización de créditos, cuotas e intereses, y control de flujo de caja.',
    categories: ['web', 'database'],
    type: 'personal',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JavaScript', 'Tailwind CSS', 'PWA'],
    highlights: [
      'Motor financiero con cálculo automatizado de tablas de amortización de préstamos',
      'API RESTful desarrollada con FastAPI, esquemas Pydantic y SQLAlchemy',
      'Base de datos relacional PostgreSQL con modelado de transacciones',
      'Soporte PWA con Service Worker para funcionamiento sin conexión',
    ],
    repoUrl: 'https://github.com/oserrano12/gestor-gastos',
    featured: true,
    status: 'completado',
  },
  {
    id: 'tienda-barrio',
    title: 'Tienda El Barrio (POS Desktop)',
    description:
      'Sistema de punto de venta e inventario para escritorio. Desarrollado con arquitectura por capas en Java puro, conexión nativa JDBC y base de datos relacional PostgreSQL.',
    categories: ['java', 'database'],
    type: 'academico',
    tags: ['Java 21', 'JavaFX', 'PostgreSQL', 'JDBC', 'Maven', 'BCrypt'],
    highlights: [
      'Arquitectura por capas manual (View, Controller, Service, DAO) sin ORM ni Spring',
      'Gestión transaccional estricta con commit/rollback manual en reducción de stock',
      'Autenticación segura con hash BCrypt y control de acceso por roles (Admin/Vendedor)',
      'Interfaz gráfica de escritorio moderna desarrollada con JavaFX 21',
    ],
    repoUrl: 'https://github.com/oserrano12/tienda-barrio',
    featured: true,
    status: 'completado',
  },
  {
    id: 'kumbia-sound-app',
    title: 'Kumbia Sound Web',
    description:
      'Plataforma web con interfaz multimedia desarrollada para el canal de YouTube Kumbia Sound, optimizada para la exploración de producciones musicales y contenido audiovisual.',
    categories: ['web'],
    type: 'personal',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Multimedia', 'Vercel'],
    highlights: [
      'Diseño temático enfocado en la reproducción y consumo de música',
      'Estructura web semántica y maquetación adaptable para dispositivos móviles',
      'Despliegue continuo en producción en la plataforma Vercel',
    ],
    repoUrl: 'https://github.com/oserrano12/kumbia-sound-app',
    demoUrl: 'https://kumbia-sound-app.vercel.app',
    featured: false,
    status: 'completado',
  },
  {
    id: 'documentacion-platop',
    title: 'Documentación PLATOP (Reservas)',
    description:
      'Sitio web de documentación técnica y prototipo interactivo para un sistema de reservas de restaurantes, desarrollado como proyecto integrador de POO en las UTS.',
    categories: ['web'],
    type: 'academico',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'POO', 'Vercel'],
    highlights: [
      'Desglose pedagógico por bloques de código de la lógica orientada a objetos',
      'Diseño institucional alineado a la identidad visual de las UTS',
      'Flujo de navegación interactivo para la simulación de reservas',
    ],
    repoUrl: 'https://github.com/oserrano12/documentacion-platop',
    demoUrl: 'https://documentacion-platop.vercel.app',
    featured: false,
    status: 'completado',
  },
  {
    id: 'cafe-artesanal-app',
    title: 'Café Artesanal Santandereano',
    description:
      'Catálogo interactivo web para la exhibición y promoción de café artesanal de la región de Santander, creado como proyecto universitario para la asignatura de Diseño Web Avanzado.',
    categories: ['web'],
    type: 'academico',
    tags: ['Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    highlights: [
      'Maquetación responsiva con el sistema de utilidades de Tailwind CSS',
      'Presentación visual de variedades y características del café de Santander',
      'Estructura modular optimizada para carga rápida en Vercel',
    ],
    repoUrl: 'https://github.com/oserrano12/cafe-artesanal-app',
    demoUrl: 'https://cafe-artesanal-app.vercel.app',
    featured: false,
    status: 'completado',
  },
];
