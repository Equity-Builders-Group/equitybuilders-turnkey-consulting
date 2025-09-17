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
  const hasTriggeredRef = useRef<boolean>(false);

  useEffect(() => {
    const element = elementRef.current;
    const id = elementId.current;
    
    if (!element || hasTriggeredRef.current || revealedElements.has(id)) {
      if (revealedElements.has(id) && !hasTriggeredRef.current) {
        hasTriggeredRef.current = true;
        setIsVisible(true);
      }
      return;
    }

    // Check if already in view on mount
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      hasTriggeredRef.current = true;
      revealedElements.add(id);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          revealedElements.add(id);
          observer.disconnect();
          setIsVisible(true);
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
    };
  }, [options.threshold, options.rootMargin]);

  return { elementRef, isVisible };
};

export const useStaggeredScrollReveal = <T extends HTMLElement = HTMLDivElement>(count: number) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementRef = useRef<T>(null);
  const elementId = useRef<string>(`stagger-${Date.now()}-${Math.floor(Math.random() * 1000)}`);
  const hasTriggeredRef = useRef<boolean>(false);

  useEffect(() => {
    const element = elementRef.current;
    const id = elementId.current;
    
    if (!element || hasTriggeredRef.current || revealedElements.has(id)) {
      if (revealedElements.has(id) && !hasTriggeredRef.current) {
        hasTriggeredRef.current = true;
        setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
      }
      return;
    }

    // Check if already in view on mount
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      hasTriggeredRef.current = true;
      revealedElements.add(id);
      setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          revealedElements.add(id);
          observer.disconnect();
          setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [count]);

  return { elementRef, visibleItems };
};

export default useScrollReveal;