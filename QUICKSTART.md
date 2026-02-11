# 🚀 Inicio Rápido

## Instalación y Desarrollo

```bash
# Ya está instalado, pero si necesitas reinstalar:
npm install

# Iniciar servidor de desarrollo
npm run dev
# Abre http://localhost:4321 en tu navegador
```

## 📝 Primeros Pasos

1. **Personaliza el contenido**: Edita `src/pages/index.astro`
2. **Cambia los colores**: Modifica las variables CSS en `src/layouts/BaseLayout.astro`
3. **Agrega tu logo**: Reemplaza `public/favicon.svg`
4. **Configura SEO**: Actualiza meta tags en `BaseLayout.astro`

## 🎨 Personalización Rápida

### Cambiar Colores del Tema

En `src/layouts/BaseLayout.astro`, línea 52-58:

```css
:root {
  --color-primary: #3b82f6;    /* Azul principal */
  --color-secondary: #8b5cf6;  /* Morado */
  --color-accent: #ec4899;     /* Rosa */
  --color-background: #ffffff; /* Fondo */
  --color-text: #1f2937;       /* Texto */
}
```

### Modificar Secciones

El archivo `src/pages/index.astro` contiene 3 secciones principales:

1. **Hero** (líneas 11-24): Título principal y CTAs
2. **Features** (líneas 26-67): Tarjetas de características
3. **Contact** (líneas 69-77): Sección de contacto

### Agregar Nuevas Páginas

```bash
# Crear nueva página
# Archivo: src/pages/about.astro
```

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Acerca de" description="Tu descripción">
  <main>
    <!-- Tu contenido aquí -->
  </main>
</BaseLayout>
```

## 🛠️ Comandos Útiles

```bash
# Verificar errores de TypeScript
npm run check

# Ejecutar linting
npm run lint

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📦 Build y Deploy

### Build Local

```bash
npm run build
# Los archivos estarán en dist/
```

### Deploy en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy en Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

## 🎯 Mejoras Sugeridas

1. **Imágenes**: Agrega tus imágenes en `public/` y úsalas con `OptimizedImage`
2. **Formularios**: Integra servicios como Formspree o Web3Forms
3. **Analytics**: Agrega Google Analytics o Plausible
4. **CMS**: Conecta con Contentful, Sanity o Strapi si necesitas gestión de contenido

## 🐛 Troubleshooting

### Puerto ocupado
```bash
# Usa otro puerto
npm run dev -- --port 3000
```

### Errores de caché
```bash
# Limpia caché de Astro
rm -rf .astro node_modules/.vite
npm install
```

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Astro Themes](https://astro.build/themes/)
- [Astro Integrations](https://astro.build/integrations/)
