# Proxies de proyectos en crafterje.com

Este portafolio actúa como dominio principal (`crafterje.com`).
Los proyectos externos desplegados en Vercel se exponen bajo rutas del tipo `/NombreProyecto`
usando rewrites en `vercel.json`.

---

## Cómo funciona

```
Usuario visita crafterje.com/QRCraft
        ↓
vercel.json hace rewrite
        ↓
Vercel sirve qrcraft.vercel.app internamente
        ↓
El usuario ve crafterje.com/QRCraft en su barra de URL
```

El rewrite es transparente: el usuario nunca sale de `crafterje.com`.

---

## Configuración en este portafolio (vercel.json)

### Si el proyecto usa `base: '/NombreProyecto/'` (Vite con ruta absoluta)

Dos reglas simples:

```json
{ "source": "/MiProyecto",        "destination": "https://mi-proyecto.vercel.app/" },
{ "source": "/MiProyecto/:path*", "destination": "https://mi-proyecto.vercel.app/:path*" }
```

### Si el proyecto usa `base: './'` (Vite con rutas relativas)

Necesita un redirect primero para forzar el trailing slash, de lo contrario el browser
resuelve `./assets/` desde la raíz del dominio en vez de desde `/NombreProyecto/`:

```json
// En "redirects":
{ "source": "/MiProyecto", "destination": "/MiProyecto/", "permanent": false },

// En "rewrites":
{ "source": "/MiProyecto/",       "destination": "https://mi-proyecto.vercel.app/" },
{ "source": "/MiProyecto/:path*", "destination": "https://mi-proyecto.vercel.app/:path*" }
```

> La `destination` apunta siempre a la **raíz** del proyecto (`/`), no a `/MiProyecto`.
> El portafolio es quien expone la ruta `/MiProyecto`.

---

## Mayúsculas / minúsculas (case-insensitive)

Por defecto Vercel trata las rutas de `rewrites`/`redirects` como **case-sensitive**
(lo hace a propósito para no generar contenido duplicado). Sin configurarlo, `/calendario`
daría 404 y solo funcionaría `/Calendario`.

Para que funcione **escribas como escribas** y la barra siempre muestre la versión canónica
(`/Calendario`), se usan dos piezas:

1. **Rewrite con clases de caracteres** → matchea cualquier combinación de mayús/minús.
   El flag inline `(?i)` NO es confiable en Vercel (path-to-regexp compila a RegExp de JS
   sin ese flag), por eso se usa `[Cc][Aa]...`:

   ```json
   { "source": "/:p([Cc][Aa][Ll][Ee][Nn][Dd][Aa][Rr][Ii][Oo])",        "destination": "https://mi-proyecto.vercel.app/" },
   { "source": "/:p([Cc][Aa][Ll][Ee][Nn][Dd][Aa][Rr][Ii][Oo])/:path*", "destination": "https://mi-proyecto.vercel.app/:path*" }
   ```

2. **Redirect de la versión en minúsculas** → normaliza la URL a la forma canónica.
   Se usa solo la minúscula (no la canónica) para evitar un bucle de redirección:

   ```json
   { "source": "/calendario",        "destination": "/Calendario",        "permanent": false },
   { "source": "/calendario/:path*", "destination": "/Calendario/:path*", "permanent": false }
   ```

Resultado:
- `/Calendario` → sirve directo, barra muestra `/Calendario`.
- `/calendario` → redirige y la barra queda en `/Calendario`.
- `/CALENDARIO`, `/CaLeNdArIo` → sirven igual (sin 404); la barra conserva ese texto.

---

## Configuración requerida en el proyecto proxeado

El proyecto necesita saber que sus assets viven bajo `/NombreProyecto/`.
La forma de configurarlo depende del framework:

### Vite (React, Vue, Svelte...)

```ts
// vite.config.ts
export default defineConfig({
  base: '/NombreProyecto/',
})
```

```tsx
// Si usa React Router
<BrowserRouter basename="/NombreProyecto">
```

### Create React App

```json
// package.json
{
  "homepage": "/NombreProyecto"
}
```

```tsx
// Si usa React Router
<BrowserRouter basename="/NombreProyecto">
```

### Next.js

```js
// next.config.js
const nextConfig = {
  basePath: '/NombreProyecto',
  assetPrefix: '/NombreProyecto/',
}
```

### Angular

```json
// angular.json → projects → architect → build → options
{
  "baseHref": "/NombreProyecto/"
}
```

O directamente en el build:
```bash
ng build --base-href /NombreProyecto/
```

### HTML/CSS/JS estático (sin framework)

Usar rutas relativas (`./`) en lugar de absolutas (`/`) para assets,
o ajustar manualmente los `href` y `src`.

---

## ¿El proyecto proxeado necesita su propio vercel.json?

Depende. Si es una SPA (React, Vue, etc.) desplegada en un subpath, **sí necesita su propio vercel.json**
para que Vercel sirva `index.html` en todas las rutas internas y redirija los assets correctamente.

Ejemplo (Vite con `base: '/NombreProyecto/'`):

```json
{
  "rewrites": [
    { "source": "/NombreProyecto/assets/:path*", "destination": "/assets/:path*" },
    { "source": "/NombreProyecto",               "destination": "/index.html" },
    { "source": "/NombreProyecto/:path*",         "destination": "/index.html" }
  ]
}
```

Si el proyecto no usa rutas internas (HTML estático, backend puro), no necesita nada.

---

## Checklist para agregar un nuevo proyecto

- [ ] Identificar el framework y aplicar la config de `base` correspondiente
- [ ] Redesplegar el proyecto en Vercel con esa config
- [ ] Dos entradas en `vercel.json` de este portafolio
- [ ] Proyecto agregado en `app/lib/data.ts` con `live: "https://crafterje.com/NombreProyecto"`
- [ ] Color de placeholder en `app/components/sections/Projects.tsx` (si no tiene imagen)
- [ ] Verificar con los comandos de la sección siguiente

---

## Verificación

Una vez desplegado, correr estos comandos reemplazando la URL y el nombre del proyecto:

```powershell
# 1. La raíz responde con HTML (no 404)
(Invoke-WebRequest -Uri "https://crafterje.com/NombreProyecto" -UseBasicParsing).StatusCode

# 2. Una subruta también responde (importante para SPAs con React Router)
(Invoke-WebRequest -Uri "https://crafterje.com/NombreProyecto/cualquier-ruta" -UseBasicParsing).StatusCode

# 3. Los assets JS/CSS cargan (si da 404, falta el base en el framework)
(Invoke-WebRequest -Uri "https://crafterje.com/NombreProyecto/assets/index.js" -UseBasicParsing).StatusCode
```

Los tres deben devolver `200`. Si el tercero devuelve `404`, el `base` del framework no está configurado.

---

## Prompt para verificar el vercel.json con Claude

Pegar esto en Claude Code cuando se agregue o modifique un proxy, reemplazando `[NOMBRE]` y `[URL]`:

```
Lee el vercel.json de este proyecto y verifica que el proxy para [NOMBRE] está correcto.

Comprueba punto por punto:
1. Existe una regla con source "/[NOMBRE]" exacto.
2. Existe una regla con source "/[NOMBRE]/:path*".
3. Ambos destination apuntan a la raíz del proyecto destino: "https://[URL].vercel.app/"
   y "https://[URL].vercel.app/:path*" — sin "/[NOMBRE]" al final (eso causaría doble ruta).
4. Ninguna de las dos destination contiene un placeholder como "TU-URL".
5. Ninguna otra regla del archivo entra en conflicto con /[NOMBRE] o /[NOMBRE]/:path*.
6. En app/lib/data.ts el campo live del proyecto usa "https://crafterje.com/[NOMBRE]".

Si algo falla dime exactamente qué está mal y corrígelo.
```

---

## Proyectos actuales

| Ruta          | Framework | Destino                         | Visible en portafolio |
|---------------|-----------|---------------------------------|-----------------------|
| `/QRCraft`    | Vite (`base: '/QRCraft/'`) | `qr-craft-omega.vercel.app` | Sí (tarjeta en `data.ts`) |
| `/Calendario` | Vite (`base: '/Calendario/'`) | `asistente-gestion-hogar.vercel.app` | No (ruta oculta, solo link directo) |

> **Ruta oculta:** para exponer un proyecto solo por link directo (sin que aparezca como tarjeta),
> se agregan las reglas en `vercel.json` pero **no** se agrega a `app/lib/data.ts`. Eso es lo único
> que controla la visibilidad en el portafolio.
