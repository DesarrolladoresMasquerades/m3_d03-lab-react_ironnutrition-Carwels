import logo from "./logo.svg";
import "./App.css";
import foodsList from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodsData, setFoodsData] = useState(foodsList)
  const [foods, setFood] = useState(foodsList);

  const addNewFood = (newFood) => {
    setFoodsData([...foodsData, newFood]);
    setFood([...foods, newFood]);
  }

  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood}/>
      {foods.map((food, inx) => {
        return (
          <div key={food.name + `${inx}`}>
            <FoodBox FoodBox={food}/>
           
          </div>
        );
      })}
    </div>
  );
}

export default App;
