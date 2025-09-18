import React from 'react';

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5L14.364 9.636L22.5 12L14.364 14.364L12 22.5L9.636 14.364L1.5 12L9.636 9.636L12 1.5Z" fill="#F0EFEA"/>
  </svg>
);


const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-brand-dark text-brand-light py-8 md:py-12"
      style={{
        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(240, 239, 234, 0.05) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
            <div className="w-20 h-20 border border-brand-light/30 rounded-full flex items-center justify-center">
                <StarIcon />
            </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            Building Houses That Feel Like Home - By Design.
          </h1>
          <p className="text-lg max-w-md text-brand-gray">
            We understand what it takes to build a home and what you need from the absolute beginning of the process all the way to moving into your dream home and beyond.
          </p>
        </div>

        <div className="flex justify-center items-start">
            <div className="w-full max-w-md h-[500px] overflow-hidden rounded-t-full">
                 <img src="/homehero.png"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;