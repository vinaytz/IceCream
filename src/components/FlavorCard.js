
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

const FlavorCard = ({ name, description, imageName }) => {
  const [quantity, setQuantity] = useState(0);
  const [cardRef, cardIsVisible] = useFadeIn();

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className={`card flavor-card ${cardIsVisible ? 'fade-in' : ''}`} ref={cardRef}>
        <img src={imageName} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
              <span className="mx-2">{quantity}</span>
              <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
            </div>
            <Link to="/buy" className="btn btn-primary">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavorCard;
