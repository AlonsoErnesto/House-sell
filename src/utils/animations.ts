/**
 * Intersection Observer para animaciones al hacer scroll
 * Optimizado para performance usando requestIdleCallback
 */
export const observeElements = (
  selector: string,
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null => {
  if (typeof window === 'undefined') return null;

  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => callback(entry));
        } else {
          callback(entry);
        }
      }
    });
  }, defaultOptions);

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));

  return observer;
};

/**
 * Lazy load de imágenes con loading="lazy" nativo y fallback
 */
export const setupLazyImages = (): void => {
  if (typeof window === 'undefined') return;

  if ('loading' in HTMLImageElement.prototype) {
    // El navegador soporta lazy loading nativo
    return;
  }

  // Fallback para navegadores antiguos
  const images = document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
};

/**
 * Prefetch de recursos críticos
 */
export const prefetchResource = (url: string, type: 'style' | 'script' | 'font' = 'script'): void => {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = type;
  link.href = url;
  
  if (type === 'font') {
    link.crossOrigin = 'anonymous';
  }
  
  document.head.appendChild(link);
};

/**
 * Debounce para optimizar eventos
 */
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle para scroll y resize
 */
export const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
