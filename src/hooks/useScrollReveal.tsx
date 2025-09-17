import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(options: UseScrollRevealOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);
  const hasTriggered = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTriggered.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Extra protection against multiple triggers
        if (entry.isIntersecting && !hasTriggered.current && !isVisible) {
          hasTriggered.current = true;
          
          // Clear any existing timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          
          // Add delay if specified, with mobile-friendly handling
          const delay = options.delay || 0;
          timeoutRef.current = setTimeout(() => {
            // Double-check we haven't already triggered
            if (!isVisible) {
              setIsVisible(true);
            }
          }, delay);
          
          // Disconnect immediately to prevent any re-firing
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold || 0.05,
        rootMargin: options.rootMargin || '100px 0px 0px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [options.threshold, options.delay, options.rootMargin, isVisible]);

  return { elementRef, isVisible };
};

// Multiple elements with staggered animations
export const useStaggeredScrollReveal = <T extends HTMLElement = HTMLDivElement>(count: number, staggerDelay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementRef = useRef<T>(null);
  const hasTriggered = useRef(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTriggered.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current && visibleItems.size === 0) {
          hasTriggered.current = true;
          
          // Clear any existing timeouts
          timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
          timeoutsRef.current = [];
          
          // Trigger staggered animations
          for (let i = 0; i < count; i++) {
            const timeout = setTimeout(() => {
              setVisibleItems(prev => {
                if (!prev.has(i)) {
                  return new Set([...prev, i]);
                }
                return prev;
              });
            }, i * staggerDelay);
            timeoutsRef.current.push(timeout);
          }
          
          // Disconnect to prevent re-firing
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: '100px 0px 0px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, [count, staggerDelay, visibleItems.size]);

  return { elementRef, visibleItems };
};

export default useScrollReveal;