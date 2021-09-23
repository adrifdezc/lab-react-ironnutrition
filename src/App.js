import { useEffect, useState } from 'react';
import './App.css';
import foods from "./foods.json";
import { Row } from "antd";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foodList, setFoodList] = useState(foods)
  const [food, setFood] = useState(foods)

  const [filteredWord, setFilteredWord] = useState("")

  // useEffect(() => {
  //   searchFood()
  // },[filteredWord])

  const addNewFood = newFood =>{
    const updatedFoodList = [...foodList, newFood];
    const updatedFood = [...food, newFood]

    setFoodList(updatedFoodList);
    setFood(updatedFood)
  };
  console.log('1',filteredWord)
  console.log('this is food: ', food)
  

  let newArray = [...foods]
  const searchFood=(text)=>{
    if(text===""){
      // filteredWord.substr(0,1)
      setFoodList(food)
      console.log("I'm here!")
    }else{
      const filteredFoodList = newArray.filter(foods=> (foods.name.toLowerCase().includes(text.toLowerCase())))
      setFoodList(filteredFoodList)
      console.log('2',filteredWord)
      console.log('This is filtered list: ', filteredFoodList)
    }
  };

  const deleteFood= (foodName) =>{
    const deletedFood = foodList.filter((food)=>{
      return food.name !== foodName;
    });
    setFoodList(deletedFood)
  };
  
  
  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />
      <Search filteredWord ={filteredWord} searchFood={searchFood}/>
      
      <Row style={{ width: "100%", justifyContent: "center" }}>
     {foodList.map((food, index)=>{
         return( <FoodBox deleteFood={deleteFood} foodList={food} key={index} />
     )})}
        </Row>
    </div>
  );
}

export default App;
