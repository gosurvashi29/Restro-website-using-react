import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <>
     
      <div className="orange-bar"></div>

     
      <header className="header">
        <div className="header-container">
          <div className="logo">ReactMeals</div>

          {/* <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav> */}

          <a href="#reservation" className="cta-button">
            Your Cart
          </a>
        </div>
      </header>

    
      <div className="meals-image-container">
        <img src="/meals.jpg" alt="Delicious meals" className="meals-image" />

      </div>
    </>
  );
};

export default Header;
