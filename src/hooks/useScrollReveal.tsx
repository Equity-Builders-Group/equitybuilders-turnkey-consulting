import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(options: UseScrollRevealOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasBeenVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          // Add delay if specified
          if (options.delay) {
            setTimeout(() => {
              setIsVisible(true);
              setHasBeenVisible(true);
            }, options.delay);
          } else {
            setIsVisible(true);
            setHasBeenVisible(true);
          }
          // Disconnect after first trigger to prevent re-firing
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold || 0.05, // Reduced threshold for mobile
        rootMargin: options.rootMargin || '0px 0px -50px 0px', // Less aggressive margin
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.delay, options.rootMargin, hasBeenVisible]);

  return { elementRef, isVisible };
};

// Multiple elements with staggered animations
export const useStaggeredScrollReveal = <T extends HTMLElement = HTMLDivElement>(count: number, staggerDelay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered animations
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]));
            }, i * staggerDelay);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [count, staggerDelay]);

  return { elementRef, visibleItems };
};

export default useScrollReveal;