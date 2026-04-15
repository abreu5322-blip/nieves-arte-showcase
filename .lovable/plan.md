
Objetivo

- Mejorar la legibilidad del menú sin perder la estética sobria de galería.

Lo que está pasando

- En `src/components/Header.tsx`, los links del menú usan `text-muted-foreground`.
- El header arranca transparente sobre la imagen del hero, así que ese gris queda sobre un fondo variable y pierde contraste.
- Cambiar solo el gris global en `src/index.css` no es la mejor primera solución, porque también afecta footer, filtros, labels y otros textos secundarios.

Plan propuesto

1. Reforzar el menú principal
- Cambiar los links del header a un color más fuerte que `muted`, por ejemplo `text-foreground` o una variante cercana (`text-foreground/80`).
- Mantener hover/focus con contraste alto para que siempre se sienta interactivo.

2. Darle una base visual al header desde el inicio
- Añadir una capa translúcida muy sutil al header incluso antes del scroll (`bg-background/...` + `backdrop-blur` o un pequeño scrim/gradiente superior).
- Cuando el usuario haga scroll, mantener el estado actual pero un poco más sólido si hace falta.

3. Revisar los otros grises realmente importantes
- Hacer una pasada corta por los textos secundarios más visibles o interactivos:
  - tagline del hero,
  - filtros de galería,
  - labels del formulario,
  - footer.
- Subir contraste solo donde afecte usabilidad; dejar los textos puramente secundarios más suaves para conservar jerarquía visual.

4. Validación visual
- Probar desktop y mobile.
- Revisar modo claro y oscuro.
- Comprobar el menú arriba del hero y también después de hacer scroll.
- Objetivo: que el menú se lea claramente en todo momento, idealmente con contraste tipo WCAG AA para texto normal.

Detalles técnicos

- Archivo principal: `src/components/Header.tsx`
- Ajustes puntuales posibles: `src/index.css` y, si aún hiciera falta, el overlay de `src/components/Hero.tsx`
- Recomendación: no depender solo de subir `--muted-foreground`; la causa real es la combinación de texto tenue + header transparente sobre una imagen.

Resultado esperado

- El menú será visible desde el primer momento.
- El sitio mantendrá el look minimalista, pero con mejor accesibilidad y menos riesgo de que los usuarios “pierdan” la navegación.
- Para futuros retoques pequeños de color o texto, Visual Edits puede servir; en este caso concreto conviene tocar código porque el problema mezcla tema, estado del header y fondo del hero.
