import React from 'react';
import MealItem from './MealItem';
import './MealList.css';

const DUMMY_MEALS = [
  { id: 'm1', name: 'Pav Bhaji', description: 'Creamy spiced curry', price: 250 },
  { id: 'm2', name: 'Paneer Tikka', description: 'Grilled cottage cheese cubes', price: 200 },
  { id: 'm3', name: 'Masala Dosa', description: 'South Indian crispy treat', price: 120 },
  { id: 'm4', name: 'Veg Biryani', description: 'Aromatic rice with spices', price: 180 }
];

const MealList = () => {
  return (
    <section className="meals">
      <ul>
        {DUMMY_MEALS.map(meal => (
          <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default MealList;
