import React, { useContext } from 'react';
import './Header.css';
import CartContext from './CartContext';
const Header = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const cartItemsCount = cartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  return (
    <>
      <div className="orange-bar"></div>

      <header className="header">
        <div className="header-container">
          <div className="logo">ReactMeals</div>

          {/* Cart Button */}
          <button className="cta-button" onClick={onShowCart}>
            🛒 Your Cart({cartItemsCount})
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
