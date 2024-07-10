import React from 'react';

const Card = ({ title, imgSrc, description }) => {
  return (
    <div className="card glass w-96 sm:w-96 shadow-lg">
      <figure>
        <img src={imgSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn more!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
