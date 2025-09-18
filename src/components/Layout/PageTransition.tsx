import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // Fade out current page
      setIsVisible(false);
      
      // After fade out completes, update the displayed location and fade in
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsVisible(true);
      }, 150); // Half of the transition duration

      return () => clearTimeout(timer);
    } else {
      // Initial load or same page - just fade in
      setIsVisible(true);
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      key={displayLocation.pathname}
    >
      {children}
    </div>
  );
};

export default PageTransition;