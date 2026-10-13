# Oscar Serrano — Portafolio Personal (`oscar.dev`)

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-14.2-FF0055?logo=framer&logoColor=white)](https://motion.dev/)
[![Desplegado en Vercel](https://img.shields.io/badge/Vercel-Producción-black?logo=vercel&logoColor=white)](https://portfolio-personal-oscar-serranos-projects-6943007d.vercel.app)

Portafolio web personal y profesional de **Oscar Serrano**, estudiante de Ingeniería de Sistemas en las **Unidades Tecnológicas de Santander (UTS)** en Bucaramanga, Colombia. Diseñado con una estética técnica contemporánea, código limpio, accesibilidad estricta y rendimiento de 60 FPS.

🌐 **Demo en producción:** [https://portfolio-personal-oscar-serranos-projects-6943007d.vercel.app](https://portfolio-personal-oscar-serranos-projects-6943007d.vercel.app)  
📁 **Código abierto:** [https://github.com/oserrano12/portfolio-personal](https://github.com/oserrano12/portfolio-personal)

---

## ✨ Características Principales

- **Fondo interactivo Dark Veil (React Bits + WebGL2):**
  - Implementación nativa con shaders GLSL (CPPN neural field + composite lighting), sin librerías 3D pesadas.
  - Movimiento autónomo acelerado con oleaje fluido orgánico, arrastre inercial y reflejos especulares de luz en verde lima (`#C6FF4A`).
  - Capa no intrusiva con `pointer-events: none` que cubre toda la aplicación sin entorpecer la interacción del usuario.
  - Respeto nativo de `prefers-reduced-motion` y adaptación automática a la GPU/DPR del dispositivo.

- **Hero con Dev Inspector Card:**
  - Tarjeta de editor de código reactiva con efecto de foco spotlight dinámico (`mousemove`).
  - Botón de copia al portapapeles con confirmación visual.
  - Canales de contacto directos accesibles desde el primer vistazo.

- **Catálogo de Proyectos con Filtros:**
  - Proyectos verificados en GitHub con código fuente abierto y despliegues en producción en Vercel:
    - **Deportivos Pipe Catálogo:** E-commerce fullstack con Next.js, Supabase, PostgreSQL y Server Actions.
    - **Sabores de Bucaramanga:** Portal web responsivo multipágina para panaderías y reposterías artesanales.
    - **Café Artesanal Santandereano:** Catálogo de variedades y notas de cata con Tailwind CSS.
  - Filtros interactivos por categoría (*Todos*, *E-commerce & Fullstack*, *Académicos UTS*, *Tailwind CSS*) con animaciones de entrada y salida (`AnimatePresence`).

- **Sección «Sobre mí» en Bento Grid:**
  - Visión integral de la ingeniería: desarrollo de software y algoritmia en JavaScript y Java, diseño avanzado de bases de datos relacionales (SQL), ensamble y mantenimiento de hardware de PC, y redes con Cisco Packet Tracer y VLSM.

- **Stack Tecnológico Clasificado:**
  - Matriz de competencias estructurada por grado real de dominio (*Principal*, *Avanzado*, *Intermedio*, *Básico*), destacando conocimientos centrales en JS, Java, HTML5/CSS3, SQL, hardware y soporte técnico.

- **Canales de Contacto Directos:**
  - Tarjetas interactivas con copia en 1 clic para Correo Electrónico (`serranojaimesoscarsteven@hotmail.com`), Discord (`deadly04`) y GitHub (`oserrano12`).
  - Formulario de contacto directo con generación de `mailto:` preformateado.

- **Navegación Móvil de Precisión:**
  - Menú hamburguesa desplegable en formato overlay con backdrop táctil y resaltado de sección activa.
  - Scroll suave con compensación exacta de 64px para el navbar fijo (evita solapamientos).

- **Accesibilidad y Buenas Prácticas (WCAG 2.2 AA):**
  - Enlace accesible de salto al contenido principal (`.skip-to-content`).
  - Touch targets mínimos garantizados de 44×44px (`.touch-target`).
  - Anillo de enfoque accesible de alto contraste (`.focus-ring`).
  - Estructura semántica completa (`header`, `nav`, `main`, `section`, `footer`).

---

## 🎨 Sistema de Diseño

El diseño sigue una paleta oscura y minimalista con acento de alta energía:

| Token | Valor HEX | Uso |
| :--- | :--- | :--- |
| **Fondo Base** | `#101114` | Fondo principal de la aplicación |
| **Superficie** | `#1C1E23` | Tarjetas, contenedores y barra de navegación |
| **Superficie Hover** | `#24272E` | Estados interactivos hover |
| **Acento Verde Lima** | `#C6FF4A` | Botones principales, enlaces activos y realces de shader |
| **Texto Primario** | `#E9EAF0` | Títulos y texto de alto contraste |
| **Texto Secundario** | `#94A3B8` | Descripciones y subtítulos |
| **Texto Terciario** | `#64748B` | Metadatos y notas al pie |

**Tipografías:**
- **Display:** *Space Grotesk* (títulos e identidad)
- **Cuerpo:** *Inter* (lectura fluida y párrafos)
- **Monoespaciada:** *JetBrains Mono* (código, badges y detalles técnicos)

---

## 🛠️ Stack Tecnológico

- **Core:** [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- **Bundler:** [Vite 8](https://vite.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones:** [Motion 14](https://motion.dev/) (Framer Motion)
- **Gráficos & Shaders:** WebGL2 (GLSL Shaders nativos)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Linter & Formato:** [oxlint](https://oxc.rs/)
- **Despliegue & Hosting:** [Vercel](https://vercel.com/)

---

## 🚀 Instalación y Desarrollo Local

### Requisitos previos
- **Node.js** `v20+` (recomendado Node 22+)
- **npm** o **pnpm**
- **Git**

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/oserrano12/portfolio-personal.git
   cd portfolio-personal
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173/](http://localhost:5173/) en tu navegador.

4. **Ejecutar comprobación de lint:**
   ```bash
   npm run lint
   ```

5. **Compilar para producción:**
   ```bash
   npm run build
   ```

6. **Previsualizar la compilación de producción:**
   ```bash
   npm run preview
   ```

---

## 📁 Estructura del Proyecto

```text
portfolio-personal/
├── public/
│   └── favicon.svg              # Favicon SVG temático
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx      # Sección Sobre mí (Bento Grid)
│   │   ├── AmbientBackground.tsx # Contenedor del fondo global Dark Veil
│   │   ├── ContactSection.tsx    # Sección de Contacto, canales y formulario
│   │   ├── DarkVeil.tsx          # Componente WebGL2 con shader GLSL (React Bits)
│   │   ├── DevInspectorCard.tsx  # Tarjeta de código con spotlight en el Hero
│   │   ├── GithubIcon.tsx        # Icono SVG optimizado de GitHub
│   │   ├── Hero.tsx              # Sección principal Hero
│   │   ├── Navbar.tsx            # Navegación con drawer móvil y scroll suave
│   │   ├── ProjectCard.tsx       # Tarjeta interactiva de proyecto
│   │   ├── ProjectsSection.tsx   # Catálogo con filtros de categorías
│   │   ├── ScrollProgress.tsx    # Barra superior de progreso de lectura
│   │   ├── ScrollToTop.tsx       # Botón flotante para volver arriba
│   │   └── TechStackSection.tsx  # Rejilla de tecnologías y habilidades
│   ├── data/
│   │   └── projects.ts           # Información verificada de proyectos de GitHub
│   ├── App.tsx                   # Composición principal de la página
│   ├── index.css                 # Tokens CSS, Tailwind v4 y utilidades a11y
│   └── main.tsx                  # Punto de entrada de la aplicación
├── vercel.json                   # Configuración de rutas SPA para Vercel
├── vite.config.ts                # Configuración de Vite con React y Tailwind
└── package.json                  # Dependencias y scripts del proyecto
```

---

## 🌳 Flujo de Trabajo en Git

El proyecto sigue una estrategia de ramas ordenada:

- `main`: Código listo para producción. Cada push a esta rama despliega automáticamente en Vercel.
- `develop`: Rama de integración de nuevas características.
- `feature/*`: Ramas temáticas de trabajo (ej. `feature/hero-dark-veil`, `feature/projects-catalog`).

---

## 👤 Autor

**Oscar Steven Serrano Jaimes**  
Estudiante de Ingeniería de Sistemas — Unidades Tecnológicas de Santander (UTS)  
Bucaramanga, Santander, Colombia

- **GitHub:** [@oserrano12](https://github.com/oserrano12)
- **Discord:** `deadly04`
- **Correo Electrónico:** [serranojaimesoscarsteven@hotmail.com](mailto:serranojaimesoscarsteven@hotmail.com)
- **Portafolio en vivo:** [oscar.dev](https://portfolio-personal-oscar-serranos-projects-6943007d.vercel.app)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Eres libre de utilizar el código como inspiración o base para tus propios proyectos citando la autoría.
