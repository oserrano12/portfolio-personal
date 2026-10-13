# Flujo de Trabajo Profesional con Git y GitHub

Esta guía explica en detalle el flujo de trabajo utilizado en este proyecto, detallando cada comando y la razón técnica detrás de su uso para facilitar el aprendizaje y la operación.

---

## 1. Fundamentos del Flujo

El ciclo de desarrollo está diseñado para que cada cambio sea seguro, verificable y reversible:

```
[main] ───────────────────────────┬───────────────────────► (Producción / Estable)
                                  │
[develop] ───────────┬────────────┴─────────────▲────────► (Integración)
                     │                          │
[feature/xxx]        └────► [commits] ──────────┘ (Pull Request / Merge)
```

---

## 2. Comandos Esenciales y su Explicación

### A. Preparación y Sincronización
* **`git status`**:
  * *Qué hace*: Muestra el estado del árbol de trabajo (archivos modificados, staged o untracked).
  * *Por qué se usa*: Es el primer comando que debe ejecutarse siempre para evitar cometer errores o incluir archivos no deseados.
* **`git checkout develop` && `git pull origin develop`**:
  * *Qué hace*: Cambia a la rama de integración y descarga los últimos cambios del servidor remoto.
  * *Por qué se usa*: Garantiza que cualquier trabajo nuevo comience sobre la base más reciente.

### B. Creación de Ramas
* **`git checkout -b <nombre-de-rama>`**:
  * *Qué hace*: Crea una nueva rama y se posiciona en ella en un solo paso.
  * *Por qué se usa*: Aísla las modificaciones para no romper el código estable mientras se experimenta o programa.

### C. Registro de Cambios (Commits)
* **`git add <archivo>`**:
  * *Qué hace*: Agrega archivos específicos al área de preparación (*staging area*).
  * *Por qué se usa*: Se recomienda agregar archivos deliberadamente en lugar de un `git add .` indiscriminado, para tener control total de lo que entra en cada commit.
* **`git commit -m "<tipo>: <mensaje>"`**:
  * *Qué hace*: Registra una instantánea (*snapshot*) de los cambios preparados con un mensaje descriptivo.
  * *Por qué se usa*: Permite revisar el historial de cambios de forma cronológica y comprensible mediante *Conventional Commits*.

### D. Publicación y Trabajo con Remoto
* **`git push -u origin <nombre-de-rama>`**:
  * *Qué hace*: Sube la rama al repositorio de GitHub y establece el seguimiento (*upstream*).
  * *Por qué se usa*: La bandera `-u` permite que en los siguientes envíos baste con escribir simplemente `git push`.

---

## 3. Integración mediante Pull Requests (GitHub CLI y Web)

Cuando una rama está terminada:

### Opción 1: Crear el Pull Request desde la terminal con `gh`
```bash
gh pr create --base develop --head feature/mi-seccion --title "feat(hero): agregar diseño responsive del hero" --body "Implementa la maquetación inicial del hero..."
```
* **Ventajas**: Rápido, automatizado y crea el enlace directo a la discusión sin salir de la consola.

### Opción 2: Crear el Pull Request en la interfaz web
Al hacer `git push`, la terminal devuelve un enlace directo (ej. `https://github.com/oserrano12/portfolio-personal/pull/new/feature/...`). Al abrirlo en el navegador, se puede completar la plantilla de PR.

---

## 4. Fusión (Merging) sin Pérdida de Historial

Para integrar ramas en `develop` o `develop` en `main`, utilizamos fusiones con `--no-ff` (*no fast-forward*):

```bash
git checkout develop
git merge feature/mi-seccion --no-ff -m "feat: merge feature/mi-seccion into develop"
git push origin develop
```

* **¿Por qué `--no-ff`?** Porque crea un commit explícito de unión que preserva el contexto de qué commits pertenecieron a esa funcionalidad, facilitando revertir la característica completa si fuera necesario.
