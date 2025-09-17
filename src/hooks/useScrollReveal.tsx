import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(options: UseScrollRevealOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);
  const hasTriggered = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize the callback to prevent re-renders
  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting && !hasTriggered.current && !isVisible) {
      hasTriggered.current = true;
      
      // Immediately disconnect to prevent any re-firing
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      
      const delay = options.delay || 0;
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          if (!isVisible) {
            setIsVisible(true);
          }
        }, delay);
      } else {
        setIsVisible(true);
      }
    }
  }, [isVisible, options.delay]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTriggered.current || isVisible) return;

    // Create observer with memoized callback
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: options.threshold || 0.05,
      rootMargin: options.rootMargin || '100px 0px 0px 0px',
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [handleIntersection, options.threshold, options.rootMargin, isVisible]);

  return { elementRef, isVisible };
};

// Simplified staggered scroll reveal
export const useStaggeredScrollReveal = <T extends HTMLElement = HTMLDivElement>(count: number, staggerDelay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementRef = useRef<T>(null);
  const hasTriggered = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting && !hasTriggered.current && visibleItems.size === 0) {
      hasTriggered.current = true;
      
      // Immediately disconnect
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      
      // Clear existing timeouts
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
      
      // Set all items visible at once with CSS delays instead of JS delays
      const allItems = new Set(Array.from({ length: count }, (_, i) => i));
      setVisibleItems(allItems);
    }
  }, [count, visibleItems.size]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTriggered.current || visibleItems.size > 0) return;

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.05,
      rootMargin: '100px 0px 0px 0px',
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [handleIntersection, visibleItems.size]);

  return { elementRef, visibleItems };
};

export default useScrollReveal;