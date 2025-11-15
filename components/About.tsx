
import React from 'react';

const problems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#ff8600]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m0 0c-1.11 0-2.08-.402-2.599-1M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Exorbitant Operating Costs',
    description: 'MFIs spend 31% of total loan value on operational costs, more than double traditional banks, straining profitability.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#ff8600]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Inefficient Manual Processes',
    description: 'Loan approvals drag on for 3-7 days. Tedious manual work consumes over 52% of total operating costs.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#ff8600]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Increased Risk Profiles',
    description: 'Manual assessments lead to less accurate risk profiling, higher default rates, and stifled scalability.'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#160578] mb-4">
            A Crisis for MFIs & The Underbanked
          </h2>
          <p className="text-lg text-gray-600">
            Microfinance Institutions struggle with high operational costs and inefficiency, limiting their sustainability and preventing millions from accessing affordable credit.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-[#ff8600]">
              <div className="flex justify-center mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-[#160578] mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
