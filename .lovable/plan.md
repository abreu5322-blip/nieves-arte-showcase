

## Plan: Header siempre con fondo sólido

Cambio único en `src/components/Header.tsx`:

- Eliminar la lógica condicional que alterna entre fondo transparente y fondo con blur según el scroll.
- Aplicar siempre el estilo sólido: `bg-background/90 backdrop-blur-md border-b border-border/50`.
- Se puede eliminar el estado `scrolled` y el `useEffect` del scroll, ya que no se necesitan.

Resultado: el header tendrá siempre el fondo blanco translúcido con blur, sin importar la posición de scroll.

