import { useEffect, useState } from 'react';

const useExitIntent = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let blurTimeout: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      console.log('Mouse leave detected:', e.clientY);
      // Only trigger if mouse leaves from the top of the page and hasn't been shown yet
      if (e.clientY <= 0 && !hasShownExitIntent) {
        console.log('Exit intent triggered! Starting timeout...');
        // Add a small delay to prevent accidental triggers
        timeout = setTimeout(() => {
          console.log('Exit intent modal opening!');
          setShowExitIntent(true);
          setHasShownExitIntent(true);
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      // Clear timeout if mouse re-enters quickly
      if (timeout) {
        console.log('Mouse re-entered, canceling exit intent');
        clearTimeout(timeout);
      }
    };

    // Mobile exit intent detection
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShownExitIntent) {
        console.log('Back button/navigation detected on mobile');
        // Prevent default navigation
        e.preventDefault();
        e.returnValue = '';
        
        // Show exit intent modal
        setShowExitIntent(true);
        setHasShownExitIntent(true);
        
        return '';
      }
    };

    const handleWindowBlur = () => {
      if (!hasShownExitIntent) {
        console.log('Window blur detected (address bar interaction)');
        // Add delay to avoid false positives
        blurTimeout = setTimeout(() => {
          console.log('Address bar exit intent triggered');
          setShowExitIntent(true);
          setHasShownExitIntent(true);
        }, 1000);
      }
    };

    const handleWindowFocus = () => {
      // Clear blur timeout if user comes back quickly
      if (blurTimeout) {
        console.log('Window focused, canceling address bar exit intent');
        clearTimeout(blurTimeout);
      }
    };

    console.log('Exit intent listeners attached');
    // Add event listeners for desktop
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Add event listeners for mobile
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      console.log('Exit intent listeners removed');
      // Clean up desktop listeners
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      // Clean up mobile listeners
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      
      // Clean up timeouts
      if (timeout) {
        clearTimeout(timeout);
      }
      if (blurTimeout) {
        clearTimeout(blurTimeout);
      }
    };
  }, [hasShownExitIntent]);

  const closeExitIntent = () => {
    setShowExitIntent(false);
  };

  const resetExitIntent = () => {
    setHasShownExitIntent(false);
    setShowExitIntent(false);
  };

  return {
    showExitIntent,
    closeExitIntent,
    resetExitIntent,
    hasShownExitIntent
  };
};

export default useExitIntent;