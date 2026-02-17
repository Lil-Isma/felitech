import React from 'react';

export interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(maxRating)].map((_, i) => (
        <span
          key={i}
          className={`material-icons text-xl ${
            i < rating ? 'text-yellow-400' : 'text-gray-200'
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
}
