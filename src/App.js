import { useState } from 'react';
import './App.css';
import foods from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foodList, setFoodList] = useState(foods)
  const [food, setFood] = useState(foods)

  const [filteredWord, setFilteredWord] = useState("")

  const addNewFood = newFood =>{
    const updatedFoodList = [...foodList, newFood];
    const updatedFood = [...food, newFood]

    setFoodList(updatedFoodList);
    setFood(updatedFood)
  }

  console.log(filteredWord)
  const searchFood=()=>{
    const filteredFoodList = foodList.filter(foods=> (foods.name.toLowerCase().includes(filteredWord.toLowerCase())))

    if(filteredWord === " "){
      setFoodList(food)
    }

    setFoodList(filteredFoodList)
  }
  
  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />
      <Search setFilteredWord = {setFilteredWord} searchFood={searchFood}/>

      <Row style={{ width: "100%", justifyContent: "center" }}>
     {foodList.map((food, index)=>{
         return( <FoodBox foodList={food} key={index} />
     )})}
        </Row>
    </div>
  );
}

export default App;
