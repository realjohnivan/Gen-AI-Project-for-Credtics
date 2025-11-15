
import React from 'react';

const features = [
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5V4H4zm0 0l7 7m-7 0h5v5H4v-5zm0 0l7-7m7 0v5h5V4h-5zm0 0l-7 7m7 0h5v5h-5v-5zm0 0l-7-7" /></svg>
    ),
    title: 'End-to-End Automation',
    description: 'We automate the entire credit lifecycle, from application and borrower vetting to decision-making and disbursement.'
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m16-10v10M9 3h6l-4 8h4l-4 8h6" /></svg>
    ),
    title: 'Instantaneous Decision Engine',
    description: 'Leveraging advanced AI models, we provide rapid, data-driven loan recommendations, cutting manual review time.'
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417V21h18v-5.591A12.02 12.02 0 0017.618 7.984z" /></svg>
    ),
    title: 'Superior Risk Assessment',
    description: 'Our AI processes diverse data points for more accurate credit scoring and fraud detection, improving portfolio quality.'
  }
];

const Product: React.FC = () => {
  return (
    <section id="product" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#160578] mb-4">
            The Solution: The AI-Powered Credit Platform
          </h2>
          <p className="text-lg text-gray-600">
            Credtics transforms the cumbersome loan process into a seamless, intelligent, and near-instantaneous digital workflow.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#ff8600] text-white p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#160578] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
         <div className="mt-16 text-center">
             <img src="https://i.imgur.com/uGg0O91.png" alt="Credtics Dashboard" className="max-w-4xl mx-auto rounded-lg shadow-2xl border-4 border-white"/>
         </div>
      </div>
    </section>
  );
};

export default Product;
