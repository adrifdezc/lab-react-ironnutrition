import { Divider, Input } from "antd";
import { useState } from "react";

// Iteration 4
function AddFoodForm(props) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = (e) => setName(e.target.value);
    const handleUrlInput = (e) => setUrl(e.target.value);
    const handleCaloriesInput = (e) => setCalories(e.target.value);
    const handleServingsInput = (e) => setServings(e.target.value);


    //This prevents reloading the page after submit
    const handleSubmit = (e) => {        // <==  ADD
        e.preventDefault();
        const newFood = { name, url, calories, servings };
     
        console.log("Submitted: ", newFood);
        props.addFood(newFood);

        // Reset the state
            setName("");
            setUrl("");
            setCalories(0);
            setServings(0);
      }

    

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      
      <label>Name</label>
      <Input value={undefined} placeholder="Name" type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={undefined} placeholder="URL" type="text" onChange={handleUrlInput} />

      <label>Calories</label>
      <Input value={undefined} placeholder="Calories" type="text" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={undefined} placeholder="Servings" type="text" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;