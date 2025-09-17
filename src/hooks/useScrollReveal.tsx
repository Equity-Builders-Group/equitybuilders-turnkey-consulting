import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
}

// Global set to track which elements have been revealed
const revealedElements = new Set<string>();

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(options: UseScrollRevealOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);
  const elementId = useRef<string>(Math.random().toString(36).substr(2, 9));

  useEffect(() => {
    const element = elementRef.current;
    const id = elementId.current;
    
    if (!element || revealedElements.has(id)) {
      if (revealedElements.has(id)) {
        setIsVisible(true);
      }
      return;
    }

    // Simple one-time check on mount if already in view
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      revealedElements.add(id);
      if (options.delay) {
        setTimeout(() => setIsVisible(true), options.delay);
      } else {
        setIsVisible(true);
      }
      return;
    }

    let timeoutId: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealedElements.has(id)) {
          revealedElements.add(id);
          observer.disconnect();
          
          if (options.delay) {
            timeoutId = setTimeout(() => setIsVisible(true), options.delay);
          } else {
            setIsVisible(true);
          }
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return { elementRef, isVisible };
};

// Simplified staggered version
export const useStaggeredScrollReveal = <T extends HTMLElement = HTMLDivElement>(count: number, staggerDelay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementRef = useRef<T>(null);
  const elementId = useRef<string>(Math.random().toString(36).substr(2, 9));

  useEffect(() => {
    const element = elementRef.current;
    const id = elementId.current;
    
    if (!element || revealedElements.has(id)) {
      if (revealedElements.has(id)) {
        setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
      }
      return;
    }

    // Check if already in view on mount
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      revealedElements.add(id);
      setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealedElements.has(id)) {
          revealedElements.add(id);
          observer.disconnect();
          
          // Reveal all items at once, let CSS handle staggering
          setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [count]);

  return { elementRef, visibleItems };
};

export default useScrollReveal;