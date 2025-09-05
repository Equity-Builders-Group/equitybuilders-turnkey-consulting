import { useEffect, useState } from 'react';

const useExitIntent = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

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

    console.log('Exit intent listeners attached');
    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      console.log('Exit intent listeners removed');
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (timeout) {
        clearTimeout(timeout);
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