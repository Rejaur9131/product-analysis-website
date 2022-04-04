import React from 'react';

const Review = ({ review }) => {
  const { name, img, ratings, comment } = review;
  return (
    <div className=" bg-indigo-400 rounded mx-2 p-2">
      <img className="rounded-full border-4 border-emerald-500 mx-auto" src={img} alt="" />
      <div className="mb-4">
        <h2 className="text-xl font-bold whitespace-nowrap">{name}</h2>
        <p>
          <small>Rating: {ratings}</small>
        </p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Review;
