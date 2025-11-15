
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="bg-[#FFFDF9] text-[#160578] min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Product />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;