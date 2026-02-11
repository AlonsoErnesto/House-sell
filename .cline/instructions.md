---

# Archivo 2: `.cline/instructions.md`

```markdown
# 🚀 Instrucciones de Desarrollo - Experto en Performance

## 📊 Métricas de Performance NO NEGOCIABLES
```typescript
// CÓDIGO EJEMPLO - Medición de performance
const PERFORMANCE_TARGETS = {
  FCP: '< 1s',      // First Contentful Paint
  LCP: '< 2s',      // Largest Contentful Paint
  CLS: '< 0.1',     // Cumulative Layout Shift
  TTI: '< 3.5s',    // Time to Interactive
  SIZE: '< 150KB'   // Bundle size crítico
};
---

// ✅ CORRECTO - Astro Islands con carga diferida
import InteractiveGallery from '../components/Gallery.astro';

---

<InteractiveGallery client:load /> <!-- Lazy load -->
<InteractiveGallery client:visible /> <!-- Load on viewport -->
<InteractiveGallery client:idle /> <!-- Load after page load -->

// ✅ CORRECTO - Animaciones optimizadas
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugins una sola vez
if (typeof window !== 'undefined') {
gsap.registerPlugin(ScrollTrigger);
}

// Animaciones con cleanup automático
const heroAnimation = () => {
return gsap.from('.hero-title', {
duration: 1.2,
y: 100,
opacity: 0,
ease: 'power3.out',
onComplete: () => console.log('Animation done')
});
};

// Usar en Astro components
useEffect(() => {
const ctx = gsap.context(() => {
// Todas las animaciones aquí
heroAnimation();
});

return () => ctx.revert(); // CLEANUP OBLIGATORIO
}, []);

/_ ✅ CORRECTO - Mobile-first con Tailwind _/
@layer components {
.luxury-card {
@apply bg-white rounded-2xl shadow-2xl
transition-all duration-300
hover:shadow-3xl hover:-translate-y-2
focus:outline-none focus:ring-4 focus:ring-primary/20;

    /* Touch targets para móvil */
    @apply min-h-[44px] min-w-[44px];

    /* Desktop enhancements */
    @apply lg:rounded-3xl lg:p-8;

}
}

/_ Grids responsivos _/
@property --grid-columns {
syntax: '<integer>';
initial-value: 1;
inherits: false;
}

.grid-auto-responsive {
grid-template-columns: repeat(auto-fit,
minmax(min(100%, var(--min-col, 300px)), 1fr)
);
}

// ✅ CORRECTO - A11Y completo
interface AccessibleComponent {
ariaLabel: string;
role?: string;
tabIndex: 0 | -1;
keyboardSupport: boolean;
screenReaderText?: string;
}

// Ejemplo: Modal accesible
const LuxuryModal: React.FC = () => {
useEffect(() => {
// Trap focus dentro del modal
const focusableElements = modalRef.current?.querySelectorAll(
'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);

    // Gestionar focus
    return () => {
      // Restaurar focus
    };

}, []);
};

// ✅ CORRECTO - TypeScript estricto
// tsconfig.json debe incluir:
{
"compilerOptions": {
"strict": true,
"noUncheckedIndexedAccess": true,
"exactOptionalPropertyTypes": true,
"noImplicitReturns": true,
"noFallthroughCasesInSwitch": true
}
}

// Tipos específicos del proyecto
interface LuxuryProperty {
readonly id: string; // Inmutable
price: `$${number}M` | `$${number}K`;
features: Set<LuxuryFeature>;
location: {
coordinates: [number, number];
exclusivity: 'high' | 'medium' | 'low';
};
}

// Utility types personalizados
type ResponsiveImage = {
src: string;
srcSet: string;
sizes: string;
alt: string;
width: number;
height: number;
format: 'webp' | 'avif' | 'jpg';
priority?: boolean;
};

// Guards de tipo
const isLuxuryFeature = (feature: unknown): feature is LuxuryFeature => {
return typeof feature === 'string' &&
LUXURY_FEATURES.includes(feature as LuxuryFeature);
};

// Imágenes de propiedades - Optimización máxima
const PropertyImage: React.FC<ImageProps> = ({
src,
alt,
priority = false
}) => {
return (
<picture>
<source
srcSet={`           ${src}?format=avif&width=400 400w,
          ${src}?format=avif&width=800 800w,
          ${src}?format=avif&width=1200 1200w
        `}
type="image/avif"
sizes="(max-width: 768px) 100vw, 50vw"
/>
<source
srcSet={`           ${src}?format=webp&width=400 400w,
          ${src}?format=webp&width=800 800w,
          ${src}?format=webp&width=1200 1200w
        `}
type="image/webp"
sizes="(max-width: 768px) 100vw, 50vw"
/>
<img
src={`${src}?width=400`}
alt={alt}
loading={priority ? "eager" : "lazy"}
decoding="async"
className="rounded-xl object-cover"
/>
</picture>
);
};

// Tour virtual optimizado
const VirtualTour: React.FC = () => {
// Carga diferida del tour 3D
const loadTour = useCallback(async () => {
if ('IntersectionObserver' in window) {
const observer = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
import('../lib/virtual-tour').then(module => {
module.initializeTour();
});
observer.disconnect();
}
});

      observer.observe(tourRef.current!);
    }

}, []);
};

---

// Structured Data para propiedades
const propertySchema = {
"@context": "https://schema.org",
"@type": "SingleFamilyResidence",
"name": "Villa Premium Vista al Mar",
"description": "Casa de lujo con vista panorámica...",
"price": 3500000,
"priceCurrency": "USD",
"address": {
"@type": "PostalAddress",
// ...
},
"image": [
"https://.../hero.webp"
],
"amenityFeature": [
{
"@type": "LocationFeatureSpecification",
"name": "Piscina infinity",
"value": true
}
]
};

---

<script type="application/ld+json">
  {JSON.stringify(propertySchema)}
</script>

// ❌ PROHIBIDO - Carga bloqueante
import HeavyLibrary from 'heavy-library'; // No hacer esto

// ❌ PROHIBIDO - Animaciones no optimizadas
element.style.height = '500px'; // Layout thrashing

// ❌ PROHIBIDO - Tipos any
const data: any = await fetchData(); // Usar unknown + type guards

// ❌ PROHIBIDO - CSS que causa layout shift
.image {
width: auto;
height: auto;
}

// ✅ CORRECTO - CSS optimizado
.image {
aspect-ratio: 16/9;
width: 100%;
height: auto;
}

// Performance monitoring
const reportWebVitals = (metric: any) => {
if (metric.name === 'LCP' && metric.value > 2500) {
console.warn('LCP crítico:', metric);
// Enviar a analytics
}
};

// User interaction tracking
const trackLuxuryInteraction = (action: string, value: number) => {
gtag('event', 'luxury_interaction', {
action,
value,
currency: 'USD',
user_interest: 'high_value_property'
});
};

---

## 🎯 Resumen de archivos creados:

### **1. `.cline/context.md`**

- Contexto completo del proyecto
- Target audience de alto poder adquisitivo
- Estructura de carpetas y stack tecnológico
- Secciones específicas de la landing page
- Especificaciones de diseño y performance

### **2. `.cline/instructions.md`**

- Buenas prácticas específicas para desarrollo web de alto performance
- Enfoque en Astro + TypeScript
- Optimizaciones para velocidad y animaciones
- Patrones premium y anti-patrones prohibidos
- Código de ejemplo listo para usar

Estos archivos le darán al modelo de antigravity el contexto exacto y las instrucciones específicas para generar código de alta calidad, optimizado para una landing page de lujo que debe cargar rápidamente, tener animaciones fluidas y ofrecer una experiencia premium.
