import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617104679262-334d6b63c75a?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <section id="portfolio" className="py-20 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex space-x-8 -mx-6 px-6" style={{ scrollbarWidth: 'none' }}>
          {projects.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-80 h-96">
              <img src={src} alt={`Project ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;