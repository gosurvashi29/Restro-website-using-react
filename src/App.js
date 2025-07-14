import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RestaurantSummary from './components/RestaurantSummary';
import MealList from './components/MealList';
import CartModal from './components/CartModal';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <Header onShowCart={showCartHandler} />
      <RestaurantSummary />
      {cartIsShown && <CartModal onClose={hideCartHandler} />}
      <MealList />
    </div>
  );
}

export default App;
