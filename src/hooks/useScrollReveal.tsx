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
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    const id = elementId.current;
    
    // If already triggered, never do anything again
    if (hasTriggeredRef.current) {
      return;
    }
    
    // If globally tracked as revealed, trigger once and mark as done
    if (revealedElements.has(id)) {
      hasTriggeredRef.current = true;
      setIsVisible(true);
      return;
    }
    
    if (!element) return;

    // Check if already in view on mount
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      hasTriggeredRef.current = true;
      revealedElements.add(id);
      setIsVisible(true);
      return;
    }

    // Clean up any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          revealedElements.add(id);
          if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
          setIsVisible(true);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px',
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []); // Empty dependency array to prevent re-execution

  return { elementRef, isVisible };
};

export const useStaggeredScrollReveal = <T extends HTMLElement = HTMLDivElement>(count: number) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementRef = useRef<T>(null);
  const elementId = useRef<string>(`stagger-${Date.now()}-${Math.floor(Math.random() * 1000)}`);
  const hasTriggeredRef = useRef<boolean>(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    const id = elementId.current;
    
    // If already triggered, never do anything again
    if (hasTriggeredRef.current) {
      return;
    }
    
    // If globally tracked as revealed, trigger once and mark as done
    if (revealedElements.has(id)) {
      hasTriggeredRef.current = true;
      setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
      return;
    }
    
    if (!element) return;

    // Check if already in view on mount
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      hasTriggeredRef.current = true;
      revealedElements.add(id);
      setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
      return;
    }

    // Clean up any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          revealedElements.add(id);
          if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
          setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []); // Empty dependency array to prevent re-execution

  return { elementRef, visibleItems };
};

export default useScrollReveal;