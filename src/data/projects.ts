export type ProjectCategory = 'ecommerce' | 'tailwind' | 'academico';

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
  { id: 'ecommerce', label: 'E-commerce & Fullstack' },
  { id: 'academico', label: 'Académicos • UTS' },
  { id: 'tailwind', label: 'Tailwind CSS' },
];

/**
 * Información verificada de proyectos basada exclusivamente en los repositorios
 * principales pineados en GitHub (oserrano12), con demos públicas en producción.
 */
export const projectsData: Project[] = [
  {
    id: 'deportivos-pipe-catalogo',
    title: 'Deportivos Pipe Catálogo',
    description:
      'Catálogo e-commerce mobile-first con panel administrativo CRUD, gestión de inventario y tallas, persistencia en Supabase y conversión a ventas directas por WhatsApp e Instagram.',
    categories: ['ecommerce', 'tailwind'],
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
    id: 'proyecto-final',
    title: 'Sabores de Bucaramanga',
    description:
      'Portal web interactivo para la promoción y visibilización de cafeterías y panaderías artesanales de Bucaramanga, estructurado con diseño multipágina responsive y navegación fluida.',
    categories: ['academico', 'tailwind'],
    type: 'academico',
    tags: ['Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    highlights: [
      'Estructura multipágina con módulos de catálogo, productos destacados, galería y contacto',
      'Diseño responsive con sistema de utilidades Tailwind CSS adaptado a dispositivos móviles',
      'Despliegue y entrega continua en producción a través de la plataforma Vercel',
    ],
    repoUrl: 'https://github.com/oserrano12/proyecto-final',
    demoUrl: 'https://proyecto-final-one-snowy.vercel.app',
    featured: true,
    status: 'completado',
  },
  {
    id: 'cafe-artesanal-app',
    title: 'Café Artesanal Santandereano',
    description:
      'Catálogo interactivo web para la exhibición y promoción del café artesanal de la región de Santander, enfocado en experiencia de usuario visual y navegación mobile-friendly.',
    categories: ['academico', 'tailwind'],
    type: 'academico',
    tags: ['Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    highlights: [
      'Maquetación responsive con utilidades de Tailwind CSS y tipografía editorial',
      'Presentación visual interactiva de variedades, perfiles de tostión y notas de cata',
      'Optimización de activos estáticos y entrega rápida en producción en Vercel',
    ],
    repoUrl: 'https://github.com/oserrano12/cafe-artesanal-app',
    demoUrl: 'https://cafe-artesanal-app.vercel.app',
    featured: true,
    status: 'completado',
  },
];
