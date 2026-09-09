# Nieves Art Portfolio

Prompt para Lovable — Web de Nieves (artista venezolana)

Crea la web oficial de Nieves, una artista plástica venezolana contemporánea. El objetivo de la web es doble: funcionar como portafolio profesional de su obra y como canal para recibir consultas de coleccionistas, galerías y compradores interesados (sin e-commerce, sin carrito).

Estilo visual

Estética minimalista tipo galería de arte contemporáneo: mucho espacio en blanco, la obra siempre como protagonista absoluta.

Tipografía serif editorial para titulares (tipo Playfair Display, Cormorant o similar) y sans-serif limpia para cuerpo (Inter, Söhne o similar).

Paleta neutra: blanco hueso, negro, grises cálidos. Que el color venga exclusivamente de las obras.

Toggle de modo claro/oscuro en el header. En modo oscuro usar negro profundo (#0a0a0a) con textos en blanco roto.

Animaciones sutiles al hacer scroll (fade-in, parallax muy ligero). Cursor personalizado opcional en la galería.

Diseño totalmente responsive, mobile-first.

Idioma: español únicamente.

Estructura y secciones

1. Inicio (Home)

Hero a pantalla completa con una obra destacada de Nieves y su nombre en tipografía grande serif.

Tagline corta tipo "Artista visual venezolana" (editable).

Scroll indicator elegante.

2. Obra / Galería

Grid tipo masonry o columnas con las piezas.

Al hacer click en una obra: modal/lightbox con imagen grande, título, año, técnica, dimensiones y botón "Consultar esta obra" (que abre el formulario con la obra preseleccionada).

Posibilidad de filtrar por serie o año.

Usar placeholders de obras por ahora (mínimo 8-12 slots).

3. Sobre Nieves

Retrato de la artista (placeholder) a un lado, biografía al otro.

Dejar la biografía como texto placeholder ("Lorem ipsum..." o breve texto de ejemplo indicando que se rellenará después).

Mencionar origen: Venezuela.

4. Exposiciones / CV

Timeline vertical minimalista con exposiciones individuales, colectivas, premios y formación.

Todo con contenido placeholder editable.

5. Proceso creativo

Sección editorial con imágenes del estudio (placeholders) intercaladas con texto sobre su proceso, influencias y técnica.

Layout tipo revista.

6. Contacto

Formulario limpio: nombre, email, asunto (con desplegable: consulta general / interés en obra / prensa / galería), mensaje.

Botón flotante de WhatsApp visible en todas las páginas (esquina inferior derecha).

Enlaces a Instagram y TikTok en el footer con iconos minimalistas.

Marca

Logo tipográfico: la palabra "Nieves" en serif elegante acompañada de un símbolo/detalle discreto (puede ser un punto, una línea fina debajo, un pequeño ornamento geométrico o un acento estilizado). Diséñalo tú con criterio.

Usar el logo en header y footer.

Detalles técnicos

Header fijo translúcido con blur al hacer scroll.

Footer minimalista con logo, redes sociales, email de contacto y copyright.

SEO básico: meta títulos y descripciones optimizadas para "Nieves artista venezolana", "arte contemporáneo Venezuela".

Optimizar carga de imágenes (lazy loading).

Transiciones suaves entre páginas.

El tono general debe sentirse como la web de una galería de arte de Chelsea o el MALBA: sobrio, sofisticado, silencioso, dejando que la obra hable.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3ee0202b-e19a-44dd-bd6b-225cb08ffad1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
