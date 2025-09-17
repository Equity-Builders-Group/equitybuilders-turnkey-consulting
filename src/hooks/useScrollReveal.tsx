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
  const isRevealedRef = useRef<boolean>(false);

  const triggerReveal = () => {
    if (!isRevealedRef.current) {
      isRevealedRef.current = true;
      revealedElements.add(elementId.current);
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const element = elementRef.current;
    const id = elementId.current;
    
    console.log(`[ScrollReveal ${id}] Effect started, element:`, !!element, 'already revealed:', revealedElements.has(id));
    
    if (!element) return;
    
    if (revealedElements.has(id)) {
      console.log(`[ScrollReveal ${id}] Already revealed, setting visible`);
      triggerReveal();
      return;
    }

    // Simple one-time check on mount if already in view
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    console.log(`[ScrollReveal ${id}] Initial check - isInView:`, isInView, 'rect:', rect);
    
    if (isInView) {
      console.log(`[ScrollReveal ${id}] Initially in view, revealing immediately`);
      triggerReveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(`[ScrollReveal ${id}] Observer callback - isIntersecting:`, entry.isIntersecting, 'already revealed:', isRevealedRef.current);
        if (entry.isIntersecting && !isRevealedRef.current) {
          console.log(`[ScrollReveal ${id}] Triggering reveal via observer`);
          observer.disconnect();
          triggerReveal();
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px',
      }
    );

    console.log(`[ScrollReveal ${id}] Starting observer`);
    observer.observe(element);

    return () => {
      console.log(`[ScrollReveal ${id}] Cleanup - disconnecting observer`);
      observer.disconnect();
    };
  }, []);

  return { elementRef, isVisible };
};

// Simplified staggered version - no delays, immediate trigger
export const useStaggeredScrollReveal = <T extends HTMLElement = HTMLDivElement>(count: number) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementRef = useRef<T>(null);
  const elementId = useRef<string>(`stagger-${Date.now()}-${Math.floor(Math.random() * 1000)}`);
  const isRevealedRef = useRef<boolean>(false);

  const triggerReveal = () => {
    if (!isRevealedRef.current) {
      isRevealedRef.current = true;
      revealedElements.add(elementId.current);
      setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
    }
  };

  useEffect(() => {
    const element = elementRef.current;
    const id = elementId.current;
    
    console.log(`[StaggeredReveal ${id}] Effect started, element:`, !!element, 'count:', count, 'already revealed:', revealedElements.has(id));
    
    if (!element) return;
    
    if (revealedElements.has(id)) {
      console.log(`[StaggeredReveal ${id}] Already revealed, setting all visible`);
      triggerReveal();
      return;
    }

    // Check if already in view on mount
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    console.log(`[StaggeredReveal ${id}] Initial check - isInView:`, isInView, 'rect:', rect);
    
    if (isInView) {
      console.log(`[StaggeredReveal ${id}] Initially in view, revealing all items`);
      triggerReveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(`[StaggeredReveal ${id}] Observer callback - isIntersecting:`, entry.isIntersecting, 'already revealed:', isRevealedRef.current);
        if (entry.isIntersecting && !isRevealedRef.current) {
          console.log(`[StaggeredReveal ${id}] Triggering staggered reveal via observer`);
          observer.disconnect();
          triggerReveal();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    console.log(`[StaggeredReveal ${id}] Starting observer`);
    observer.observe(element);

    return () => {
      console.log(`[StaggeredReveal ${id}] Cleanup - disconnecting observer`);
      observer.disconnect();
    };
  }, [count]);

  return { elementRef, visibleItems };
};

export default useScrollReveal;