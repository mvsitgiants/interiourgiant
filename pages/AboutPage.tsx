import React from 'react';

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5L14.364 9.636L22.5 12L14.364 14.364L12 22.5L9.636 14.364L1.5 12L9.636 9.636L12 1.5Z" fill="#B99863"/>
  </svg>
);

const AboutPage: React.FC = () => {
  const teamMembers = [
    { name: 'John Messiri', role: 'Founder & Lead Builder', avatar: 'https://i.pravatar.cc/150?u=john' },
    { name: 'Jane Doe', role: 'Head of Interior Design', avatar: 'https://i.pravatar.cc/150?u=jane' },
    { name: 'Mike Richards', role: 'Project Manager', avatar: 'https://i.pravatar.cc/150?u=mike' },
  ];

  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative py-32">
         <div className="absolute inset-0 bg-brand-dark/50 z-10"></div>
         <img src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Company office"/>
        <div className="relative container mx-auto px-6 text-center z-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-light">Building With Passion & Precision</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="pr-8">
            <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
            <p className="text-brand-gray mb-4">
              Founded over a decade ago, Interior Giant was born from a passion for impeccable craftsmanship and timeless design. We saw a need for a building company that not only constructed high-quality homes but also cultivated strong, collaborative relationships with its clients.
            </p>
            <p className="text-brand-gray">
              Today, we are a team of dedicated designers, builders, and project managers who share a single vision: to create extraordinary homes that enrich the lives of the families who live in them.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop" alt="Cozy living space" className="rounded-lg shadow-2xl"/>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 bg-brand-teal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-12">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-dark/50 rounded-full flex items-center justify-center mb-4"><StarIcon/></div>
              <h3 className="text-2xl font-serif font-bold mb-2">Uncompromising Quality</h3>
              <p className="text-brand-gray">We use only the finest materials and partner with the most skilled artisans to ensure every detail of your home is built to the highest standard.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-dark/50 rounded-full flex items-center justify-center mb-4"><StarIcon/></div>
              <h3 className="text-2xl font-serif font-bold mb-2">Client-Centric Approach</h3>
              <p className="text-brand-gray">Your vision is our blueprint. We believe in open communication and collaboration throughout the entire process, making you a partner in building your dream home.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-dark/50 rounded-full flex items-center justify-center mb-4"><StarIcon/></div>
              <h3 className="text-2xl font-serif font-bold mb-2">Timeless Design</h3>
              <p className="text-brand-gray">We create homes that are both modern and enduring. Our designs blend functionality with aesthetic appeal, resulting in spaces that are beautiful for years to come.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Meet the Team */}
      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <img src={member.avatar} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-brand-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
