import React from 'react';
import './Event.css'
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ title, description, imageUrl }) => {
  const navigate = useNavigate();

  const eventDetails = {
    title,
    description,
    imageUrl,
  };

  const handleRegisterClick = () => {
    // Navigate to the "/details" route and pass the "title" as a prop
    navigate('/details',);
  };

  return (
    <div className="card m-3">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-details">
        <h5 className="card-title text-warning">{title}</h5>
        <p className="card-text text-light">{description}</p>
        <button className='btn btn-warning' onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Card;
