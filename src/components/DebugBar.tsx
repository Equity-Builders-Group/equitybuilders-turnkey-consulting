import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Video, Calendar } from 'lucide-react';

const DebugBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if we're in development environment
    const isDev = 
      window.location.hostname === 'localhost' || 
      window.location.hostname.includes('lovable.app') ||
      window.location.hostname.includes('lovable.dev') ||
      import.meta.env.DEV;
    
    setIsVisible(isDev);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] bg-yellow-400 border-b-2 border-yellow-600 px-4 py-2 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-800 uppercase">Debug Mode</span>
          <span className="text-xs text-gray-600">Current: {location.pathname}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-1 px-3 py-1 bg-white hover:bg-gray-100 text-gray-800 text-sm font-semibold rounded shadow transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          
          <Link
            to="/class-replay"
            className="flex items-center gap-1 px-3 py-1 bg-white hover:bg-gray-100 text-gray-800 text-sm font-semibold rounded shadow transition-colors"
          >
            <Video className="w-4 h-4" />
            Class Replay
          </Link>
          
          <button
            onClick={() => {
              const event = new CustomEvent('openWebinarRegistration');
              window.dispatchEvent(event);
            }}
            className="flex items-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded shadow transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Webinar (?cta=reg)
          </button>
        </div>
      </div>
    </div>
  );
};

export default DebugBar;
