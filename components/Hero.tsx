
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#160578] leading-tight mb-6">
            10x Faster AI-Powered Credit Automation for Microfinance Institutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Transform your lending process from days to under 10 minutes. Credtics empowers MFIs to lend faster, cheaper, and smarter.
          </p>
          <a
            href="#contact"
            className="bg-[#ff8600] text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
