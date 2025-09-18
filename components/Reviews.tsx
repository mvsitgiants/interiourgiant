import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl font-serif font-bold mb-8">Testimonials</h2>
        <div className="max-w-3xl">
          <p className="text-2xl md:text-3xl font-serif italic text-brand-light/90 leading-relaxed mb-8">
            "I would like to thank Interior Giant and all of the effort behind limited representatives, for helping our youtube trip come true. From the sales experience to the moments, everyone on the team was helpful and supportive. The quality of the workmanship of the house is excellent, best I great all-around experience."
          </p>
          <img src="https://i.pravatar.cc/80?u=jennifer" alt="Jennifer L." className="w-20 h-20 rounded-full mx-auto mb-4" />
          <p className="font-bold text-lg">Jennifer L.</p>
          <p className="text-brand-gray">Home Owner</p>
        </div>
        <div className="flex space-x-2 mt-8">
            <span className="block w-2 h-2 bg-brand-gray rounded-full"></span>
            <span className="block w-2 h-2 bg-brand-light rounded-full"></span>
            <span className="block w-2 h-2 bg-brand-gray rounded-full"></span>
            <span className="block w-2 h-2 bg-brand-gray rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;