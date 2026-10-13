# Guía de Contribución y Buenas Prácticas

¡Bienvenido al repositorio de **Portafolio Personal**! Para mantener un historial limpio, trazable y profesional, todo el desarrollo sigue un conjunto de reglas estándar para ramas, commits y revisiones.

---

## 🌳 Estrategia de Ramas (Git Flow Simplificado)

Trabajamos con un modelo estructurado donde la rama principal nunca recibe cambios directos sin revisión:

* **`main`**: Rama de producción y versiones estables. Contiene únicamente código probado y listo para despliegue público.
* **`develop`**: Rama principal de integración y desarrollo activo. Aquí convergen todas las ramas de características.
* **`feature/<nombre>`**: Ramas para nuevas funcionalidades o secciones visuales (ej. `feature/hero-section`, `feature/project-grid`).
* **`fix/<nombre>`**: Ramas para correcciones de bugs (ej. `fix/mobile-nav-contrast`, `fix/broken-external-links`).
* **`docs/<nombre>`**: Ramas para documentación, guías y especificaciones (ej. `docs/architecture-proposal`).
* **`chore/<nombre>`**: Ramas para mantenimiento, dependencias, configuraciones o skills (ej. `chore/agent-skills`).

---

## 📝 Convención de Mensajes de Commit (Conventional Commits)

Cada commit debe representar un cambio pequeño, atómico y coherente. El mensaje debe seguir el estándar:

```text
<tipo>(<alcance opcional>): <descripción corta y clara en presente>
```

### Tipos permitidos:
* **`feat:`** Una nueva funcionalidad para el usuario (ej. `feat(projects): add interactive filter by technology tag`).
* **`fix:`** Corrección de un error o problema de renderizado (ej. `fix(a11y): correct focus trap on modal dialog`).
* **`style:`** Ajustes estéticos, formato de código o CSS sin alteración de lógica (ej. `style(hero): refine typography scale and line height`).
* **`refactor:`** Reorganización interna del código sin cambiar comportamiento visual o lógico (ej. `refactor(components): extract card markup to reusable component`).
* **`docs:`** Cambios exclusivamente en documentación (ej. `docs(roadmap): update milestone 2 deliverables`).
* **`chore:`** Mantenimiento de configuración, dependencias o herramientas (ej. `chore(skills): update performance guidelines`).
* **`test:`** Adición o corrección de pruebas unitarias o de accesibilidad (ej. `test(a11y): add axe automated accessibility tests`).

---

## 🚀 Ciclo de Trabajo para una Tarea

1. **Partir siempre desde la última versión de `develop`**:
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. **Crear una rama descriptiva**:
   ```bash
   git checkout -b feature/mi-nueva-seccion
   ```
3. **Hacer commits frecuentes y atómicos**:
   ```bash
   git status
   git add <archivos-especificos>
   git commit -m "feat(hero): add responsive typography and layout"
   ```
4. **Publicar la rama en GitHub**:
   ```bash
   git push -u origin feature/mi-nueva-seccion
   ```
5. **Crear Pull Request hacia `develop`** y verificar que no existan conflictos antes de la integración.

---

## 🛡️ Reglas de Seguridad y Control

* **Nunca hacer `git push --force`** sobre ramas compartidas (`main` o `develop`).
* **Nunca versionar secretos o credenciales** (`.env`, llaves privadas, tokens personales).
* **Verificar el estado con `git status`** antes de cada commit para evitar agregar archivos accidentales.
