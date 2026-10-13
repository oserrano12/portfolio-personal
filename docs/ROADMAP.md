# Hoja de Ruta del Proyecto (Roadmap)

Este documento traza las fases secuenciales para la concepción, desarrollo, auditoría y despliegue del portafolio personal.

---

## 📌 Estado de Fases

| Fase | Descripción | Estado |
| :--- | :--- | :--- |
| **Fase 1** | Entorno de trabajo, repositorio GitHub, ramas y Agent Skills | **Completado** ✅ |
| **Fase 2** | Definición de Stack tecnológico y Arquitectura de Información | **En revisión** ⏳ |
| **Fase 3** | Sistema de diseño, tokens, tipografía, paletas y wireframes | **Pendiente** ⏹️ |
| **Fase 4** | Desarrollo frontend modular (Hero, Proyectos, The Lab, Sobre mí, Contacto) | **Pendiente** ⏹️ |
| **Fase 5** | Auditorías técnicas de calidad (Accesibilidad WCAG 2.2, Performance y SEO) | **Pendiente** ⏹️ |
| **Fase 6** | Automatización CI/CD con GitHub Actions y despliegue a producción | **Pendiente** ⏹️ |

---

## 🎯 Detalle de Cada Fase

### Fase 1: Preparación del Entorno (Completada)
- [x] Verificación y configuración de Git y GitHub CLI.
- [x] Repositorio remoto `oserrano12/portfolio-personal` vinculado.
- [x] Estructura de ramas: `main`, `develop` y ramas de soporte.
- [x] Instalación de Agent Skills en `.agents/skills/` (UI/UX Pro Max, Frontend Design, Web Design Guidelines, Accessibility y Performance).
- [x] Documentación base y plantillas de trabajo.

### Fase 2: Definición de Stack y Arquitectura (Próximo paso)
- [ ] Evaluación objetiva de frameworks (Vite + React vs. Astro vs. Next.js).
- [ ] Selección de librerías de estilos y utilidades (Tailwind CSS, iconos, utilidades accesibles).
- [ ] Mapeo de contenidos: proyectos formales vs. proyectos experimentales ("The Lab").
- [ ] Definición del tono de comunicación y copywriting.

### Fase 3: Sistema de Diseño e Identidad Visual
- [ ] Ejecución de la skill `ui-ux-pro-max` y `frontend-design` para generar una identidad distintiva.
- [ ] Definición de paleta accesible (contraste mínimo WCAG AA 4.5:1).
- [ ] Escala tipográfica intencional y jerarquía visual.
- [ ] Especificación de componentes interactivos (tarjetas, botones, navegación, modales).

### Fase 4: Desarrollo Modular
- [ ] Maquetación del layout global accesible (landmarks: `<header>`, `<main>`, `<nav>`, `<footer>`).
- [ ] Implementación de la sección Hero con impacto y presentación clara.
- [ ] Implementación del catálogo de proyectos con filtrado interactivo.
- [ ] Sección "The Lab / Playground" para experimentos personales.
- [ ] Sección "Sobre mí" con trayectoria y habilidades reales.
- [ ] Canal de contacto accesible y enlaces sociales.

### Fase 5: Auditorías y Optimización
- [ ] Auditoría de accesibilidad con `accessibility` skill (soporte de teclado, ARIA, screen readers).
- [ ] Auditoría de rendimiento con `performance` skill (Core Web Vitals: LCP, INP, CLS).
- [ ] Verificación de responsive en múltiples resoluciones (mobile 360px a desktop 1920px).

### Fase 6: Despliegue y Mantenimiento
- [ ] Configuración de GitHub Actions para linter y validación de tipos.
- [ ] Despliegue continuo en Vercel, Netlify o Cloudflare Pages.
- [ ] Configuración de dominio y metadatos Open Graph para redes sociales.
