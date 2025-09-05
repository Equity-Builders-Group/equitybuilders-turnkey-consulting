import { useEffect, useState } from 'react';

const useExitIntent = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page and hasn't been shown yet
      if (e.clientY <= 0 && !hasShownExitIntent) {
        // Add a small delay to prevent accidental triggers
        timeout = setTimeout(() => {
          setShowExitIntent(true);
          setHasShownExitIntent(true);
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      // Clear timeout if mouse re-enters quickly
      if (timeout) {
        clearTimeout(timeout);
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
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