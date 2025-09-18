import React, { useState } from 'react';
import StarRating from './StarRating';
import { ReviewFormData } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reviewData: ReviewFormData) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmit }) => {
  // Added By Bhushan on 19_12_2024
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    email: '',
    rating: 0,
    review: ''
  });

  const [errors, setErrors] = useState<Partial<ReviewFormData>>({});

  const handleInputChange = (field: keyof ReviewFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ReviewFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }

    if (!formData.review.trim()) {
      newErrors.review = 'Review is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      // Reset form
      setFormData({ name: '', email: '', rating: 0, review: '' });
      setErrors({});
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-brand-dark border border-brand-light/20 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-serif font-bold text-brand-light">Leave a Review</h3>
          <button
            onClick={onClose}
            className="text-brand-gray hover:text-brand-light transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-brand-light mb-2">Your Rating</label>
            <StarRating
              rating={formData.rating}
              onRatingChange={(rating) => handleInputChange('rating', rating)}
              interactive={true}
              size="lg"
            />
            {errors.rating && <p className="text-red-400 text-sm mt-1">{errors.rating}</p>}
          </div>

          <div>
            <label className="block text-brand-light mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-3 py-2 bg-brand-dark border border-brand-light/30 rounded text-brand-light placeholder-brand-gray focus:border-brand-light focus:outline-none"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-brand-light mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 bg-brand-dark border border-brand-light/30 rounded text-brand-light placeholder-brand-gray focus:border-brand-light focus:outline-none"
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-brand-light mb-2">Your Review</label>
            <textarea
              value={formData.review}
              onChange={(e) => handleInputChange('review', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 bg-brand-dark border border-brand-light/30 rounded text-brand-light placeholder-brand-gray focus:border-brand-light focus:outline-none resize-none"
              placeholder="Tell us about your experience..."
            />
            {errors.review && <p className="text-red-400 text-sm mt-1">{errors.review}</p>}
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-brand-light/30 text-brand-light rounded hover:bg-brand-light/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-brand-light text-brand-dark rounded hover:bg-brand-light/90 transition-colors font-medium"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
