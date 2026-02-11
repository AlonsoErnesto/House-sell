# Landing Page - Astro + TypeScript

Landing page ultra-optimizada construida con Astro y TypeScript, priorizando velocidad, animaciones fluidas y eficiencia de memoria.

## 🚀 Características

- **Performance Extrema**: Optimizado con Lightning CSS y Terser
- **TypeScript Strict**: Type-safety completo para código robusto
- **Zero JS por defecto**: Astro envía 0KB de JavaScript inicialmente
- **Animaciones Optimizadas**: Intersection Observer con requestIdleCallback
- **SEO Ready**: Meta tags completos y sitemap
- **Responsive**: Mobile-first design
- **Accesibilidad**: Respeta prefers-reduced-motion

## 📦 Stack Tecnológico

- **Framework**: Astro 5.x
- **Lenguaje**: TypeScript (strict mode)
- **CSS**: Lightning CSS para minificación ultra-rápida
- **Minificación**: Terser con 2 pases de compresión
- **Linting**: ESLint con plugin de Astro
- **Build**: Vite optimizado

## 🏗️ Estructura del Proyecto

```
landing-page/
├── src/
│   ├── components/
│   │   └── OptimizedImage.astro    # Componente de imagen optimizada
│   ├── layouts/
│   │   └── BaseLayout.astro         # Layout base con SEO
│   ├── pages/
│   │   └── index.astro              # Página principal
│   └── utils/
│       └── animations.ts            # Utilidades de animación
├── public/
├── astro.config.mjs                 # Configuración de Astro
├── package.json
├── tsconfig.json                    # TypeScript strict
└── eslint.config.js
```

## 🎨 Optimizaciones Implementadas

### Performance
- ✅ Compresión HTML automática
- ✅ CSS minificado con Lightning CSS
- ✅ JavaScript minificado con Terser (2 pases)
- ✅ Inlining automático de CSS crítico
- ✅ Lazy loading de imágenes
- ✅ Preconnect a recursos externos

### Animaciones
- ✅ Intersection Observer para scroll animations
- ✅ requestIdleCallback para optimizar render
- ✅ CSS animations con GPU acceleration
- ✅ Debounce y throttle para eventos
- ✅ Soporte para prefers-reduced-motion

### Memoria
- ✅ Componentes estáticos por defecto
- ✅ Carga diferida de recursos no críticos
- ✅ Limpieza automática de observers
- ✅ Sin librerías pesadas innecesarias

## 🛠️ Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo (localhost:4321)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Type checking
npm run check

# Linting
npm run lint
```

## 📊 Métricas Esperadas

Con esta configuración, deberías obtener:

- **Lighthouse Performance**: 95-100
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Total Bundle Size**: < 50KB (comprimido)
- **CLS (Cumulative Layout Shift)**: 0

## 🎯 Mejores Prácticas Implementadas

1. **Arquitectura Islands**: Solo hidratas lo necesario
2. **Critical CSS Inline**: Estilos críticos en el `<head>`
3. **Font Loading**: System fonts por defecto (sin FOUT)
4. **Image Optimization**: Lazy loading + async decoding
5. **Semantic HTML**: Estructura accesible y SEO-friendly
6. **Mobile First**: Diseño responsive desde el inicio
7. **Progressive Enhancement**: Funciona sin JavaScript

## 🔧 Personalización

### Colores
Edita las variables CSS en `src/layouts/BaseLayout.astro`:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-accent: #ec4899;
  --color-background: #ffffff;
  --color-text: #1f2937;
}
```

### Contenido
Modifica `src/pages/index.astro` para cambiar el contenido de las secciones.

### Componentes
Crea nuevos componentes en `src/components/` siguiendo el patrón de `OptimizedImage.astro`.

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Vitals](https://web.dev/vitals/)
- [MDN Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)

## 📄 Licencia

MIT

---

**Nota**: Este proyecto está configurado para máxima performance. Algunos trade-offs incluyen:
- No se incluyen frameworks de UI pesados por defecto
- Las animaciones son CSS-first
- Se prioriza velocidad sobre funcionalidad compleja
