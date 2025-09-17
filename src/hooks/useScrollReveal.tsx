import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

// Global set to track which elements have been revealed
const revealedElements = new Set<string>();

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(options: UseScrollRevealOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);
  const elementId = useRef<string>(`reveal-${Date.now()}-${Math.floor(Math.random() * 1000)}`);

  useEffect(() => {
    const element = elementRef.current;
    const id = elementId.current;
    
    if (!element) return;
    
    // If already revealed globally, just set visible immediately
    if (revealedElements.has(id)) {
      setIsVisible(true);
      return;
    }

    // Check if already in view on mount
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      revealedElements.add(id);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealedElements.add(id);
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
};

export const useStaggeredScrollReveal = <T extends HTMLElement = HTMLDivElement>(count: number) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementRef = useRef<T>(null);
  const elementId = useRef<string>(`stagger-${Date.now()}-${Math.floor(Math.random() * 1000)}`);

  useEffect(() => {
    const element = elementRef.current;
    const id = elementId.current;
    
    if (!element) return;
    
    // If already revealed globally, set all items visible immediately
    if (revealedElements.has(id)) {
      setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
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
        if (entry.isIntersecting) {
          revealedElements.add(id);
          setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
          observer.disconnect();
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