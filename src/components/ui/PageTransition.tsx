import React, { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
  type?: 'slide' | 'scale' | 'fade';
  className?: string;
}

export function PageTransition({ children, type = 'slide', className = '' }: PageTransitionProps) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Trigger enter animation
    setIsVisible(true);
    setIsExiting(false);

    return () => {
      // Cleanup
      setIsVisible(false);
      setIsExiting(false);
    };
  }, [location.pathname]);

  const getTransitionClass = () => {
    if (isExiting) {
      return 'page-transition-exit';
    }

    if (isVisible) {
      switch (type) {
        case 'scale':
          return 'page-scale-enter';
        case 'fade':
          return 'animate-fadeIn';
        default:
          return 'page-transition-enter';
      }
    }

    return 'opacity-0';
  };

  return (
    <div className={`${getTransitionClass()} ${className}`}>
      {children}
    </div>
  );
}
