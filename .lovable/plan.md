
Perdón: revisé el componente y sí entiendo por qué sentiste que “no cambió nada”.

## Qué pasó realmente

En `src/components/Exhibitions.tsx` el bloque derecho ya tiene `md:pl-16`, pero ese mismo contenedor también arrastra `md:pl-0` desde la clase base:

```text
relative pl-12 md:pl-0 md:w-1/2 ...
```

y luego, solo para los items derechos, se añade:

```text
md:ml-auto md:pl-16
```

Ese enfoque mezcla utilidades de padding que compiten entre sí y, además, el salto de `12` a `16` era demasiado pequeño para que el cambio se viera claramente.

## Plan corregido

1. En `src/components/Exhibitions.tsx`, separar las clases de desktop por lado en vez de compartir `md:pl-0`.
   - Izquierda: mantener el texto pegado a su lado con `md:pl-0 md:pr-16 md:text-right`
   - Derecha: darle espacio real con `md:ml-auto md:pl-20` o `md:pl-24`

2. Dejar de depender del “mismo contenedor para ambos lados” con padding condicional ambiguo.
   - Así el lado derecho tendrá un desplazamiento claro y visible.
   - El lado izquierdo seguirá equilibrado visualmente.

3. Si al aplicar eso el bullet aún queda demasiado cerca visualmente, mover el dot 1–2 px más hacia el centro para rematar el ajuste fino, sin tocar la estructura general.

## Resultado esperado

- El texto del lado derecho se verá claramente separado del bullet.
- El cambio será visible de verdad, no un microajuste casi imperceptible.
- La timeline conservará la estética actual, pero con mejor legibilidad.
