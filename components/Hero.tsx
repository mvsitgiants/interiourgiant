import React, { useState } from 'react';
import StarRating from './StarRating';
import ReviewModal from './ReviewModal';
import { ReviewFormData } from '../types';

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5L14.364 9.636L22.5 12L14.364 14.364L12 22.5L9.636 14.364L1.5 12L9.636 9.636L12 1.5Z" fill="#F0EFEA"/>
  </svg>
);

const Hero: React.FC = () => {
  // Added By Bhushan on 19_12_2024
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReviewSubmit = (reviewData: ReviewFormData) => {
    // Here you would typically send the review to your backend
    console.log('Review submitted:', reviewData);
    // For now, we'll just show an alert
    alert('Thank you for your review! We appreciate your feedback.');
  };

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
      {/* Review Section - Added By Bhushan on 19_12_2024 */}
      <div className="container mx-auto px-4 sm:px-6 mt-0 sm:mt-12">
        <div className="bg-brand-light/5 backdrop-blur-sm border border-brand-light/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex-1 w-full sm:w-auto">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-brand-light mb-2 sm:mb-3">
                Share Your Experience
              </h3>
              <p className="text-brand-gray text-sm sm:text-base leading-relaxed mb-4 sm:mb-0">
                Help others discover our quality work by leaving a review about your experience with us.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-brand-gold hover:bg-brand-gold/90 active:bg-brand-gold/80 text-brand-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto min-h-[48px] touch-manipulation"
            >
              <StarRating rating={0} size="sm" />
              <span className="text-sm sm:text-base">Write Review</span>
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleReviewSubmit}
      />
    </section>
  );
};

export default Hero;