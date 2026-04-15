

## Problema identificado

El texto "Artista visual venezolana" en el Hero usa `text-muted-foreground` (línea 30 de `Hero.tsx`), que tiene estos valores:
- Modo claro: `0 0% 35%` (gris medio oscuro)
- Modo oscuro: `0 0% 65%` (gris medio claro)

Este texto aparece sobre una imagen de fondo con un overlay translúcido (`bg-background/30` en claro, `bg-background/50` en oscuro), lo que crea un contraste insuficiente y dificulta la lectura.

## Solución propuesta

Cambiar la clase del tagline en `Hero.tsx` de `text-muted-foreground` a una clase con mejor contraste. Opciones:

1. **`text-foreground`** - Contraste máximo (negro en claro, blanco hueso en oscuro)
2. **`text-foreground/90`** - Contraste alto pero ligeramente suavizado (recomendado)
3. **`text-foreground/80`** - Similar al menú principal

Recomiendo `text-foreground/90` porque mantiene algo de jerarquía visual respecto al título "Nieves" pero garantiza legibilidad sobre la imagen.

## Cambios técnicos

**Archivo:** `src/components/Hero.tsx`  
**Línea:** 30  
**Cambio:** Reemplazar `text-muted-foreground` por `text-foreground/90`

Esto asegura contraste WCAG AA en ambos modos (claro y oscuro) sin necesidad de modificar las variables CSS globales.

