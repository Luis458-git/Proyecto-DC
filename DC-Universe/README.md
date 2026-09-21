# DC Multiverse Explorer

Explorador de DC Comics con React y CSS, conectado a SuperHero API sin clave de acceso.

## Ejecutar

```sh
npm install
npm run dev
```

En PowerShell, si la política de scripts bloquea npm, utiliza npm.cmd.

## Requisitos cubiertos

- [x] React con useState, useEffect y componentes reutilizables.
- [x] API pública mediante fetch, async/await y promesas.
- [x] Tarjetas con imágenes y estadísticas provenientes de la API.
- [x] Búsqueda por nombre, identidad y alias; atajo Ctrl/Cmd + K.
- [x] Modal con detalle, estadísticas, cierre con Escape y restauración del foco.
- [x] Paginación de ocho personajes; vuelve al inicio al cambiar filtros.
- [x] Loading, errores con reintento y estado sin resultados.
- [x] Cancelación de peticiones y tiempo límite de veinte segundos.
- [x] Organización: src/Components, src/Pages, src/services y src/styles.
- [x] Responsive: cuatro columnas en escritorio, dos en tablet y una en móvil.
- [x] Favoritos persistentes mediante localStorage y vista dedicada.
- [x] Filtros por alineación y género, orden por nombre o estadísticas.
- [x] Vista de cuadrícula/lista y animaciones que respetan movimiento reducido.
- [x] Alternativa visual cuando una imagen no está disponible.

El botón de telemetría de la barra superior permite mostrar ejemplos de carga, error y resultados vacíos. Están ocultos inicialmente y son independientes de la petición real.

## Verificación

```sh
npm run lint
npm run build
```

Revisión manual: buscar Batman o Bruce Wayne, combinar filtros, cambiar de página, abrir y cerrar un dossier, guardar favoritos y recargar. Para revisar errores, bloquear la petición de la API desde las herramientas del navegador y pulsar TRY AGAIN tras desbloquearla.

Los datos e imágenes requieren conexión a Internet; los favoritos se conservan cuando el navegador permite almacenamiento local.
