import React from 'react';
import Review from '../Review/Review';
import useReviews from './../../hooks/useReviews';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="">
      <h1 className="text-3xl font-bold my-4">Customers Reviews: {reviews.length}</h1>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
