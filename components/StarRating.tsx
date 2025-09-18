import React from 'react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  onRatingChange, 
  interactive = false, 
  size = 'md' 
}) => {
  // Added By Bhushan on 19_12_2024
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  const StarIcon = ({ filled, onClick }: { filled: boolean; onClick?: () => void }) => (
    <svg 
      className={`${sizeClasses[size]} ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path 
        d="M12 1.5L14.364 9.636L22.5 12L14.364 14.364L12 22.5L9.636 14.364L1.5 12L9.636 9.636L12 1.5Z" 
        fill={filled ? "#F0EFEA" : "none"}
        stroke="#F0EFEA"
        strokeWidth="1"
      />
    </svg>
  );

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          filled={star <= rating}
          onClick={interactive ? () => handleStarClick(star) : undefined}
        />
      ))}
    </div>
  );
};

export default StarRating;
