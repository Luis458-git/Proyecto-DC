Crea el diseño para una aplicación web responsive llamada "DC Multiverse Explorer", pensada para implementarse con React y consumir la API pública SuperHero API.

ESTILO VISUAL & PALETA:
- Modo oscuro premium: Fondo negro obsidiana profundo (#07090e, #0c1017) con sutiles acentos radiales.
- Acentos: Cian eléctrico brillante (#00e5ff, #0284c7) para elementos hero y tecnológicos, toques en amarillo oro (#facc15), y carmesí para villanos.
- Estética: Fusión cinematográfica moderna inspirada en WayneTech y cómics futuristas, con sutiles detalles glassmorphism, bordes translúcidos ultra finos y tipografía display audaz (estilo Space Grotesk / Sora).

ESTRUCTURA & COMPONENTES:

1. NAVBAR:
- Logotipo de escudo poligonal futurista con monograma "DC Multiverse".
- Enlaces de navegación: "Characters" (activo), "Heroes", "Villains", "Favorites (3)".
- Controles a la derecha: Botón de audio/telemetría, acceso rápido a "Dossier #001", y avatar con visor holográfico de archivero WayneTech.

2. HERO SECTION & BÚSQUEDA:
- Tag superior: "MULTIVERSE REPOSITORY // 734 CLASSIFIED METAHUMANS".
- Título principal: "Explore the DC Multiverse" con degradado de color en "DC Multiverse".
- Subtítulo descriptivo sobre los archivos WayneTech.
- Barra de búsqueda prominente con icono, atajo de teclado "[⌘K]" y botón "CLEAR".
- Tags de archivos en tendencia: Batman, Superman, Wonder Woman, The Flash, The Joker.

3. BARRA DE FILTROS Y ORDENACIÓN:
- Chips de filtro interactivos con indicador LED: "All Continua", "Heroes (482)", "Villains (252)", "Male", "Female".
- Menú selector "Order: Power Rating" y controles de vista (cuadrícula/lista).

4. GRID DE TARJETAS DE PERSONAJES (4 columnas en desktop):
- Tarjetas verticales estilizadas para: Batman, Superman, Wonder Woman, The Flash, Green Lantern, Aquaman, The Joker y Harley Quinn.
- Cada tarjeta incluye:
  - Imagen cinematográfica vertical a sangre con degradado inferior.
  - Badges flotantes de rol ("Hero" / "Villain") y continuidad ("Earth-0", "Themyscira", "Arkham").
  - Botón de corazón para favoritos en la esquina superior derecha.
  - Identidad secreta y procedencia (ej. "Bruce Wayne", "Gotham City • Human").
  - Métrica de combate destacada y barra de poder/habilidad en cian o amarillo.
  - Botón de acción: "VIEW DOSSIER →".

5. PAGINACIÓN:
- Indicador: "Showing 1-8 of 734 Metahumans across Codex 52".
- Botones de navegación: "< PREV", páginas activas ("1", "2", "3", "...", "92") y "NEXT >".

6. CAJA DE ESTADOS ASÍNCRONOS (REACT STATE SANDBOX):
- Contenedor inferior para previsualizar estados desacoplados: pestañas "LOADING STATE", "ERROR STATE", "NO RESULTS".
- Estado visible actual: Loader circular con icono de multiverso giratorio y texto "Synchronizing Multiverse Codex... Polling Earth-0 through Earth-51 quantum relay frequencies".

7. FOOTER:
- Barra inferior oscura y minimalista con créditos: "DC MULTIVERSE EXPLORER", "Powered by SuperHero API", "WayneTech Archives & Telemetry Project", e indicador de estado "52 Continua Synchronized // Online".