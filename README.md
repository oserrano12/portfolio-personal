# Portafolio Personal Profesional

Portafolio web personal y profesional diseñado para exhibir trayectoria, proyectos de desarrollo de software, experimentos técnicos y habilidades de programación con altos estándares de calidad visual, accesibilidad y rendimiento.

---

## 🎯 Objetivo del Proyecto

Construir una plataforma web moderna, rápida, accesible y responsive que presente de manera equilibrada:
* **Perfil Profesional**: Trayectoria formal, experiencia, competencias técnicas y proyectos destacados.
* **The Lab / Experimentos**: Proyectos personales, scripts, herramientas de afición y curiosidades técnicas.
* **Calidad Técnica**: Interfaces creadas bajo directrices de diseño intencional, accesibilidad WCAG 2.2 y Core Web Vitals.

---

## 🧠 Agent Skills Instaladas (Ámbito Local)

El proyecto cuenta con 5 Agent Skills integradas en `.agents/skills/` para asistir en cada etapa del desarrollo:

1. **`ui-ux-pro-max`** (`nextlevelbuilder`): Inteligencia de diseño con catálogos de 79 estilos visuales, 192 paletas de color, 74 combinaciones tipográficas y script de búsqueda local sin llamadas externas (`scripts/search.py`).
2. **`frontend-design`** (`anthropics`): Directrices de diseño distintivo, estética deliberada, tipografía y prevención de patrones genéricos generados por IA.
3. **`web-design-guidelines`** (`vercel-labs`): Buenas prácticas de interfaz web, ergonomía de interacción, touch targets y espaciado adaptativo.
4. **`accessibility`** (`addyosmani`): Auditoría y aplicación de directrices de accesibilidad WCAG 2.2 (Niveles A, AA, AAA), navegación por teclado y contraste de color.
5. **`performance`** (`addyosmani`): Optimización de rendimiento web orientada a métricas Core Web Vitals (LCP, INP, CLS), presupuestos de peso y ruta crítica de renderizado.

---

## 📋 Requisitos del Entorno

* **Git**: `2.55+`
* **Node.js**: `v20+` (actualmente `v24.21.0`)
* **GitHub CLI (`gh`)**: `2.102+` autenticado
* **Python**: `3.10+` (para búsquedas locales con `ui-ux-pro-max`)

---

## 🌳 Flujo de Trabajo y Ramas

El repositorio utiliza una estrategia de ramas estructurada:
* **`main`**: Versión estable y lista para producción.
* **`develop`**: Rama base para la integración de funcionalidades.
* **`feature/*`**: Ramas para nuevas características o componentes.
* **`fix/*`**: Corrección de bugs o problemas visuales.
* **`docs/*`**: Documentación y guías.
* **`chore/*`**: Mantenimiento, dependencias o configuración.

Para más detalles sobre cómo colaborar y la convención de commits, consulta:
* [Guía de Contribución](CONTRIBUTING.md)
* [Flujo de Trabajo y Comandos Git](docs/WORKFLOW.md)
* [Hoja de Ruta del Proyecto](docs/ROADMAP.md)

---

## 💻 Comandos Útiles

```bash
# Ver estado del repositorio
git status

# Cambiar a la rama de desarrollo e integrarla
git checkout develop
git pull origin develop

# Crear una nueva rama para una característica
git checkout -b feature/nombre-caracteristica

# Consultar el motor de diseño UI/UX Pro Max (búsqueda local)
python .agents/skills/ui-ux-pro-max/scripts/search.py "minimal portfolio clean"
```
