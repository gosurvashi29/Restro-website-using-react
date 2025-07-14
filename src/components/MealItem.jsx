import React, { useState } from 'react';
import './MealItem.css';

const MealItem = ({ name, description, price }) => {
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const addToCartHandler = (event) => {
    event.preventDefault();
    // Logic will go here later
    console.log(`Selected: ${amount} x ${name}`);
  };

  return (
    <li className="meal-item">
      <div>
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">₹{price.toFixed(2)}</p>
      </div>
      <form className="meal-form" onSubmit={addToCartHandler}>
        <input
          type="number"
          min="1"
          max="10"
          step="1"
          value={amount}
          onChange={amountChangeHandler}
        />
        <button type="submit">+ Add</button>
      </form>
    </li>
  );
};

export default MealItem;
