import React from 'react';

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5L14.364 9.636L22.5 12L14.364 14.364L12 22.5L9.636 14.364L1.5 12L9.636 9.636L12 1.5Z" fill="#F0EFEA"/>
  </svg>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Custom Home Builds',
      description: 'From initial concept to final touches, we build bespoke homes that are a true reflection of you. Our process ensures quality, transparency, and a home built to last generations.',
      imgSrc: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Interior Design & Styling',
      description: 'Our design team works with you to create spaces that are both beautiful and functional. We handle everything from material selection to furniture placement, ensuring a cohesive and inspiring interior.',
      imgSrc: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Renovations & Extensions',
      description: 'Transform your existing space. Whether it\'s a kitchen remodel, a second-story addition, or a full home renovation, we bring the same level of craftsmanship and attention to detail.',
      imgSrc: 'https://images.unsplash.com/photo-1560185893-a55de8537e49?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Project Management',
      description: 'We provide end-to-end project management, coordinating with architects, engineers, and trades to ensure your project is completed on time, on budget, and to the highest standards.',
       imgSrc: 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1558913599-ca7354406182?q=80&w=1200&auto=format&fit=crop')"}}
      >
        <div className="absolute inset-0 bg-brand-dark/70"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-light">Our Expertise</h1>
          <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">Comprehensive building and design services tailored to your vision.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-teal">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                 <div className="flex justify-center mb-4">
                    <StarIcon />
                </div>
                <h2 className="text-4xl font-serif font-bold">What We Do</h2>
                <p className="text-brand-gray mt-4">We are a full-service design-build company, offering a wide range of services to meet your needs. We pride ourselves on our ability to deliver high-quality projects that exceed expectations.</p>
            </div>
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-brand-dark/30 rounded-lg overflow-hidden group">
                <div className="h-64 overflow-hidden">
                    <img src={service.imgSrc} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                  <p className="text-brand-gray">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
