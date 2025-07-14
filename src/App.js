
import './App.css';
import Header from './components/Header'
import RestaurantSummary from './components/RestaurantSummary';
import MealList from './components/MealList';
import CartModal from './components/CartModal';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <RestaurantSummary></RestaurantSummary>
      <CartModal></CartModal>
      <MealList></MealList>
    </div>
  );
}

export default App;
