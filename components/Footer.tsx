
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#160578] text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Credtics.com. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Empowering Microfinance, Intelligently.</p>
      </div>
    </footer>
  );
};

export default Footer;
