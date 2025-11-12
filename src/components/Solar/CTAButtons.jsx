import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CTAButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollWithOffset = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return false;
    }

    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition >= 0 ? offsetPosition : 0,
      behavior: 'smooth'
    });
    return true;
  }, []);

  const attemptScroll = useCallback((sectionId, tries = 0) => {
    if (scrollWithOffset(sectionId)) {
      return;
    }

    if (tries >= 5) {
      return;
    }

    window.setTimeout(() => attemptScroll(sectionId, tries + 1), 120);
  }, [scrollWithOffset]);

  const handleNavigation = useCallback((sectionId) => {
    if (location.pathname === '/solar-installation') {
      attemptScroll(sectionId);
      return;
    }

    navigate('/solar-installation', { state: { scrollTo: sectionId } });
  }, [attemptScroll, location.pathname, navigate]);

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => handleNavigation('subsidy-structure')}
            className="w-full sm:w-80 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
          >
            AVAIL SUBSIDY
          </button>
          
          <button 
            onClick={() => handleNavigation('our-finance-options')}
            className="w-full sm:w-80 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
          >
            VIEW FINANCE OPTIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAButtons;

