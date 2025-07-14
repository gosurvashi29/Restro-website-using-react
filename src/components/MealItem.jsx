import React from 'react';
import './MealItem.css';

const MealItem = ({ name, description, price }) => {
  return (
    <li className="meal-item">
      <div>
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">₹{price.toFixed(2)}</p>
      </div>
    </li>
  );
};

export default MealItem;
