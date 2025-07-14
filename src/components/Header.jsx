import React from 'react';
import './Header.css';

const Header = ({ onShowCart }) => {
  return (
    <>
      <div className="orange-bar"></div>

      <header className="header">
        <div className="header-container">
          <div className="logo">ReactMeals</div>

          {/* Cart Button */}
          <button className="cta-button" onClick={onShowCart}>
            🛒 Your Cart
          </button>
        </div>
      </header>

      <div className="meals-image-container">
        <img src="/meals.jpg" alt="Delicious meals" className="meals-image" />
      </div>
    </>
  );
};

export default Header;
