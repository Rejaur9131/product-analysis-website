import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../../images/instant-pot.jpg';
import Review from '../Review/Review';
import useReviews from './../../hooks/useReviews';

const Home = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useReviews();
  const threeReviews = reviews.slice(0, 3);

  return (
    <div className="home-container">
      <div className="product-container flex justify-between align-middle p-8">
        <div className="mx-8">
          <h1 className="text-6xl font-extrabold font-mono text-indigo-500 text-left">Cooker of Your Choice</h1>
          <h2 className="text-4xl font-extrabold font-mono text-indigo-400 text-left mb-4">Ensures Reliablity and Durablility</h2>
          <p className="text-xl text-left">Pressure cook, slow cook, sous vide, sauté pan, sterilizer, yogurt maker, food warmer, cake baker and steamer. Cook for up to 6 people - perfect for growing families, or meal prepping and batch cooking for singles. Overheat Protection, safe locking lid, upgraded gentle steam release switch with diffusing cover to reduce noise and prevent splashing on the counter, and more. Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.</p>
        </div>
        <img className="w-96" src={pic} alt="" />
      </div>
      <div className="review-container py-8">
        <h1 className="text-3xl font-bold mb-4">Customers Reviews: {threeReviews.length}</h1>
        <div className="grid grid-cols-3 mb-4">
          {threeReviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <button
          className="bg-indigo-600 p-2 text-white font-bold rounded mb-4"
          onClick={() => {
            navigate('/reviews');
          }}
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
