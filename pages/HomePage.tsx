import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Reviews />
      <Portfolio />
    </>
  );
};

export default HomePage;
