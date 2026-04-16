
## Problema

En la sección "Exposiciones & CV", los items del lado derecho (impares) usan `md:pl-12` (padding-left de 3rem). El bullet point está en `md:left-[-5px]` respecto al contenedor, así que el texto queda muy cerca / encima del dot, dificultando la lectura.

## Solución

En `src/components/Exhibitions.tsx` (línea 48), aumentar el padding izquierdo de los items del lado derecho de `md:pl-12` a `md:pl-16` (o `md:pl-20`) para separar el texto del bullet vertical.

Por simetría, también aumentar `md:pr-12` a `md:pr-16` en los items del lado izquierdo, manteniendo el balance visual respecto a la línea central.

## Cambio

- Línea 48: `md:pr-12 md:text-right` → `md:pr-16 md:text-right`
- Línea 48: `md:ml-auto md:pl-12` → `md:ml-auto md:pl-16`

Resultado: el texto se aleja unos píxeles más de la línea central y los bullets, mejorando la legibilidad sin romper la estética de timeline.
