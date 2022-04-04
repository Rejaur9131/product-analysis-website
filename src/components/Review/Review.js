import React from 'react';

const Review = ({ review }) => {
  const { name, img, ratings, comment } = review;
  return (
    <div className="grid grid-cols-3 bg-indigo-400 rounded mx-2 p-2">
      <img className="rounded-full border-2 p-2" src={img} alt="" />
      <div className="">
        <h2 className="text-xl">{name}</h2>
        <p>
          <small>Rating: {ratings}</small>
        </p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Review;
