
import './App.css';
import Header from './components/Header'
import RestaurantSummary from './components/RestaurantSummary';
import MealList from './components/MealList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RestaurantSummary></RestaurantSummary>
      <MealList></MealList>
    </div>
  );
}

export default App;
