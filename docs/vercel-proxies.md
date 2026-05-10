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

Por cada proyecto nuevo agregar dos entradas — una para la raíz y otra para subrutas:

```json
{ "source": "/MiProyecto",        "destination": "https://mi-proyecto.vercel.app/" },
{ "source": "/MiProyecto/:path*", "destination": "https://mi-proyecto.vercel.app/:path*" }
```

> La `destination` apunta a la **raíz** del proyecto (`/`), no a `/MiProyecto`.
> El portafolio es quien expone la ruta `/MiProyecto`.

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

## El proyecto proxeado NO necesita su propio vercel.json

No hace falta ningún rewrite del lado del proyecto hijo.
Solo necesita el `base` correcto según su framework.

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

| Ruta        | Framework | Destino                         |
|-------------|-----------|---------------------------------|
| `/QRCraft`  | Vite      | `TU-URL.vercel.app` (pendiente) |
