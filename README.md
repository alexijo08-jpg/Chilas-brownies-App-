# Chila's Brownies — app para Netlify

Esta es la versión de la app que funciona fuera de Claude, con su propio
guardado de datos (usando Netlify Blobs). Una vez publicada, tendrá un
enlace fijo que nunca cambia y no depende de Claude para nada.

## Cómo publicarla (sin usar la terminal)

**1. Sube el código a GitHub**

1. Entra a [github.com](https://github.com) y crea una cuenta gratis si no
   tienes una.
2. Toca el botón verde **"New"** (o el **+** arriba a la derecha →
   "New repository").
3. Ponle un nombre, por ejemplo `chilas-brownies-app`, y toca
   **"Create repository"**.
4. En la página del repositorio nuevo, busca el enlace que dice
   **"uploading an existing file"** y tócalo.
5. Arrastra ahí **todos los archivos y carpetas de este proyecto**
   (menos las carpetas `node_modules` y `dist` si las ves — no hacen falta).
6. Baja y toca **"Commit changes"**.

**2. Conecta el repositorio con Netlify**

1. Entra a [netlify.com](https://netlify.com) y crea una cuenta gratis
   (puedes usar tu cuenta de GitHub para entrar, es más rápido).
2. Toca **"Add new site" → "Import an existing project"**.
3. Elige **GitHub** y autoriza el acceso.
4. Selecciona el repositorio que acabas de crear (`chilas-brownies-app`).
5. Netlify va a detectar solo la configuración (gracias al archivo
   `netlify.toml` que ya está incluido). No cambies nada, solo toca
   **"Deploy site"**.
6. Espera 1-2 minutos mientras se construye. Cuando termine, te va a dar
   un enlace como `https://algo-al-azar-123.netlify.app` — esa es tu app,
   ya funcionando de forma permanente.

**3. (Opcional) Ponle un nombre más bonito al enlace**

En Netlify, ve a **"Site settings" → "Change site name"** y pon algo como
`chilas-brownies` — el enlace quedaría `https://chilas-brownies.netlify.app`.

**4. Genera el código QR**

Abre tu app ya publicada (el enlace de Netlify), toca el ícono de QR
arriba a la derecha, pega ese mismo enlace de Netlify, y toca "Guardar".
Ahora sí debería guardar sin problema — el guardado ya no depende de
Claude, usa la base de datos de Netlify (Blobs), que viene incluida
gratis y no requiere configuración extra.

## Notas

- Todos los datos (catálogo, categorías, puntos de los clientes, y el
  enlace del QR) ahora se guardan en Netlify Blobs, un almacenamiento
  incluido gratis con cualquier sitio de Netlify — no se necesita
  configurar ni crear cuenta en ningún otro servicio.
- La clave de administrador para dar/quitar puntos sigue siendo `1027`
  (está en el código, en la constante `ADMIN_PIN`, por si la quieres
  cambiar más adelante — solo pide que alguien te ayude a editar ese
  archivo).
- Si en el futuro quieres seguir mejorando la app, puedes volver a pegar
  el contenido de `src/App.jsx` en una conversación con Claude y pedir
  los cambios ahí; luego solo copias el resultado de vuelta a este
  archivo y subes los cambios a GitHub (Netlify la vuelve a publicar
  sola en cuanto detecta el cambio).
