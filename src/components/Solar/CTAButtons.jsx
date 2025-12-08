import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CTAButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFinanceOptions = () => {
    if (location.pathname === '/solar-installation') {
      scrollToSection('our-finance-options');
    } else {
      navigate('/solar-installation');
      setTimeout(() => {
        scrollToSection('our-finance-options');
      }, 100);
    }
  };

  const handleSubsidy = () => {
    if (location.pathname === '/solar-installation') {
      scrollToSection('subsidy-structure');
    } else {
      navigate('/solar-installation');
      setTimeout(() => {
        scrollToSection('subsidy-structure');
      }, 100);
    }
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <button 
            onClick={handleSubsidy}
            className="bg-[#3A954F] hover:bg-[#2d7a3d] text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ borderRadius: '25px' }}
          >
            AVAIL SUBSIDY
          </button>
          
          <button 
            onClick={handleFinanceOptions}
            className="bg-[#3A954F] hover:bg-[#2d7a3d] text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ borderRadius: '25px' }}
          >
            VIEW FINANCE OPTIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAButtons;

