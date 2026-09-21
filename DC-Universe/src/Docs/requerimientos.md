FUNCIONALIDADES E INTERACCIONES:

La interfaz debe estar diseñada pensando en una implementación posterior
con React, utilizando componentes reutilizables, useState, useEffect,
fetch y datos provenientes de SuperHero API.

1. CARGA DE PERSONAJES DESDE API:
- Los personajes mostrados en las tarjetas deben representar datos dinámicos
  provenientes de SuperHero API.
- La aplicación debe estar preparada para filtrar únicamente personajes
  cuyo publisher sea "DC Comics".
- No hardcodear personajes como parte permanente de la interfaz.
- Las tarjetas deben poder generarse dinámicamente mediante .map() en React.

2. BÚSQUEDA:
- La barra "Search character..." debe permitir buscar personajes por nombre.
- Los resultados deben actualizarse según el texto ingresado.
- El botón "CLEAR" debe limpiar completamente la búsqueda.
- Si no existen coincidencias, mostrar el estado "NO RESULTS".
- Los tags Batman, Superman, Wonder Woman, The Flash y The Joker deben
  funcionar visualmente como búsquedas rápidas.

3. FILTROS:
Los botones deben estar preparados para filtrar los personajes:

- All Continua → mostrar todos.
- Heroes → mostrar personajes con alignment "good".
- Villains → mostrar personajes con alignment "bad".
- Male → mostrar personajes masculinos.
- Female → mostrar personajes femeninos.

Los filtros activos deben tener un estado visual diferente.

4. ORDENAMIENTO:
El selector "Order" debe permitir preparar las siguientes opciones:

- Name A-Z
- Name Z-A
- Intelligence
- Strength
- Speed
- Power
- Combat

El cambio de opción debe reorganizar visualmente las tarjetas.

5. GRID / LIST VIEW:
- El botón Grid debe mostrar los personajes como tarjetas.
- El botón List debe cambiar a una presentación horizontal compacta.
- Ambos botones deben mostrar claramente cuál vista está activa.

6. CHARACTER CARD:
Cada CharacterCard debe representar información dinámica:

- Imagen
- Nombre
- Nombre real
- Género
- Raza/especie
- Alignment (Hero/Villain)
- Power rating
- Lugar/origen cuando esté disponible
- Botón favorito
- Botón "VIEW DOSSIER"

La tarjeta completa puede tener efectos hover y transiciones suaves.

7. CHARACTER DETAIL / DOSSIER:
Al presionar "VIEW DOSSIER" se debe abrir un modal grande o panel overlay
sin abandonar la página.

Debe mostrar:

- Imagen grande
- Nombre
- Nombre completo / identidad
- Publisher
- Alignment
- Género
- Raza
- Lugar de nacimiento
- Primera aparición
- Ocupación
- Base
- Familia/conexiones

POWER STATS:
Mostrar visualmente:

- Intelligence
- Strength
- Speed
- Durability
- Power
- Combat

Utilizar barras de progreso animadas.

Debe incluir:
- Botón cerrar
- Botón favorito

El modal debe poder cerrarse mediante el botón X y estar preparado para
cerrarse al hacer clic fuera del contenido.

8. FAVORITOS:
- El corazón de cada personaje debe permitir agregarlo o eliminarlo
  visualmente de favoritos.
- El corazón debe cambiar de estado cuando el personaje sea favorito.
- El contador "Favorites (X)" del Navbar debe actualizarse.
- Preparar una vista/sección Favorites donde solamente aparezcan
  personajes guardados.
- Si no existen favoritos, mostrar un estado vacío:
  "No classified metahumans saved yet."

9. PAGINACIÓN:
- Mostrar solamente una cantidad limitada de personajes por página.
- Utilizar 8 personajes por página en desktop.
- Los botones PREV y NEXT deben permitir navegar entre páginas.
- Mostrar números de página.
- Deshabilitar PREV cuando se esté en la primera página.
- Deshabilitar NEXT cuando se esté en la última.
- Cuando una búsqueda o filtro cambie, volver automáticamente a página 1.

IMPORTANTE:
La cantidad total mostrada debe provenir de los personajes realmente
obtenidos desde la API. No utilizar permanentemente valores ficticios
como "734" o "482".

10. LOADING STATE:
Mientras React espera la respuesta de la API mostrar:

"Synchronizing Multiverse Codex..."

Mostrar loader/animación temática.

Las tarjetas no deben mostrarse hasta finalizar correctamente la petición.

11. ERROR STATE:
Si la petición HTTP falla mostrar:

"Multiverse connection failed."

Agregar:
- Breve explicación
- Botón "TRY AGAIN"

El botón debe estar diseñado para volver a intentar cargar los datos.

12. NO RESULTS STATE:
Si una búsqueda o combinación de filtros no devuelve resultados mostrar:

"No metahumans found in this continuum."

Agregar botón:
"CLEAR FILTERS"

13. RESPONSIVE DESIGN:
Desktop:
- 4 tarjetas por fila.

Tablet:
- 2 tarjetas por fila.

Mobile:
- 1 tarjeta por fila.

En dispositivos pequeños:
- Navbar adaptable.
- Filtros reorganizados.
- Modal adaptado al ancho disponible.
- Barra de búsqueda completamente responsive.
- Paginación simplificada cuando sea necesario.

14. ACCESIBILIDAD:
- Botones con estados hover y focus.
- Contraste adecuado entre fondo y texto.
- Indicadores visuales claros para elementos activos.
- Botones de iconos preparados para aria-label.
- Imágenes preparadas para atributos alt.
- Inputs con labels accesibles.

15. ARQUITECTURA PENSADA PARA REACT:
El diseño debe poder separarse fácilmente en:

Navbar
Hero
SearchBar
Filters
CharacterGrid
CharacterCard
CharacterModal
PowerStats
Pagination
Loader
ErrorMessage
NoResults
Footer

Pages:
Home
Favorites

Services:
superheroApi

16. ESTADOS PRINCIPALES DE REACT:
El diseño debe contemplar visualmente estados equivalentes a:

characters
filteredCharacters
selectedCharacter
search
alignmentFilter
genderFilter
sortOrder
currentPage
loading
error
favorites
viewMode

17. FLUJO GENERAL:

Inicio
↓
Cargar aplicación
↓
Mostrar Loading
↓
Consultar SuperHero API
↓
¿Petición correcta?

NO
↓
Mostrar Error
↓
TRY AGAIN

SÍ
↓
Filtrar personajes DC Comics
↓
Mostrar CharacterGrid
↓
Usuario puede:
Buscar
Filtrar
Ordenar
Cambiar página
Agregar favoritos
Abrir dossier
↓
Actualizar interfaz dinámicamente

18. IMPORTANTE PARA LA GENERACIÓN:
Generar únicamente la interfaz frontend y sus diferentes estados visuales.

No crear backend.
No crear base de datos.
No implementar autenticación.
No inventar endpoints.
No agregar dependencias innecesarias.

Mantener el diseño preparado para que posteriormente pueda implementarse
manualmente con React, CSS y fetch.