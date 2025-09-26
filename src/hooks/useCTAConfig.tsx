import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export interface CTAConfig {
  buttonText: string;
  eventName: string;
}

export const useCTAConfig = () => {
  const location = useLocation();
  
  const config = useMemo(() => {
    const urlParams = new URLSearchParams(location.search);
    const ctaParam = urlParams.get('cta');
    
    switch (ctaParam) {
      case 'reg':
        return {
          buttonText: 'Register for Webinar',
          eventName: 'openWebinarRegistration'
        };
      case 'bac':
      default:
        return {
          buttonText: 'Book A Call Today',
          eventName: 'openConsultation'
        };
    }
  }, [location.search]);
  
  return config;
};