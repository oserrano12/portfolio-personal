export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'destacado' | 'lab' | 'fullstack' | 'desktop';
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  featured: boolean;
  status: 'completado' | 'en-desarrollo' | 'mantenimiento';
}

/**
 * Propuesta de proyectos reales basada exclusivamente en los repositorios de GitHub (oserrano12).
 * Sin información inventada ni enlaces ficticios.
 */
export const projectsData: Project[] = [
  {
    id: 'deportivos-pipe-catalogo',
    title: 'Deportivos Pipe Catálogo',
    description:
      'Catálogo e-commerce mobile-first para calzado deportivo y streetwear con panel de administración CRUD, Supabase y conversión a ventas vía WhatsApp e Instagram.',
    category: 'destacado',
    tags: ['TypeScript', 'Supabase', 'CSS', 'Vercel', 'E-commerce'],
    repoUrl: 'https://github.com/oserrano12/deportivos-pipe-catalogo',
    demoUrl: 'https://deportivos-pipe-catalogo.vercel.app',
    featured: true,
    status: 'completado',
  },
  {
    id: 'gestor-gastos',
    title: 'Gestor de Gastos PWA & Motor Financiero',
    description:
      'Gestor de gastos full-stack multiplataforma (PWA) con motor financiero. Incluye cálculo automático de amortización de créditos, cuotas e intereses.',
    category: 'destacado',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'JavaScript', 'PWA'],
    repoUrl: 'https://github.com/oserrano12/gestor-gastos',
    featured: true,
    status: 'completado',
  },
  {
    id: 'tienda-barrio',
    title: 'Tienda de Barrio (Punto de Venta Desktop)',
    description:
      'Aplicación de escritorio para la gestión de ventas e inventario de una tienda de barrio. Desarrollada con arquitectura POO en Java, interfaz JavaFX y persistencia en PostgreSQL.',
    category: 'desktop',
    tags: ['Java', 'JavaFX', 'PostgreSQL', 'POO', 'Desktop'],
    repoUrl: 'https://github.com/oserrano12/tienda-barrio',
    featured: true,
    status: 'completado',
  },
  {
    id: 'kumbia-sound-app',
    title: 'Kumbia Sound Web',
    description:
      'Plataforma web para canal de YouTube de cumbia peruana (Kumbia Sound), con diseño enfocado en la experiencia auditiva y navegación multimedia.',
    category: 'lab',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Multimedia'],
    repoUrl: 'https://github.com/oserrano12/kumbia-sound-app',
    demoUrl: 'https://kumbia-sound-app.vercel.app',
    featured: false,
    status: 'completado',
  },
  {
    id: 'documentacion-platop',
    title: 'Documentación Técnica PLATOP',
    description:
      'Portal web con desglose pedagógico por bloques de código del proyecto integrador de POO para reservas de restaurantes (PLATOP).',
    category: 'lab',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Documentación Técnica'],
    repoUrl: 'https://github.com/oserrano12/documentacion-platop',
    demoUrl: 'https://documentacion-platop.vercel.app',
    featured: false,
    status: 'completado',
  },
  {
    id: 'cafe-artesanal-app',
    title: 'Café Artesanal Santandereano',
    description:
      'Catálogo web interactivo para promoción y exhibición de café artesanal de la región de Santander, maquetado con utilidades modernas en Tailwind CSS.',
    category: 'lab',
    tags: ['Tailwind CSS', 'JavaScript', 'HTML5', 'UI/UX'],
    repoUrl: 'https://github.com/oserrano12/cafe-artesanal-app',
    demoUrl: 'https://cafe-artesanal-app.vercel.app',
    featured: false,
    status: 'completado',
  },
];
