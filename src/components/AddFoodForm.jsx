import { useState } from "react";
import { Divider, Input } from "antd";

export default function AddFoodForm(props) {

    const [newFood, setNewFood] = useState({
        name: "",
        image: "",
        calories: null,
        servings: null
    })

    function handleDataChange(event) {
        const inputName = event.target.name
        let value = event.target.value

        setNewFood({...newFood, [inputName]: value})
    }

    function handleSubmit(event) {
        event.preventDefault()

        props.addFood(newFood)

        setNewFood({
            name: "",
            image: "",
            calories: null,
            servings: null
        })
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        
        <label>Name</label>
        <Input value={undefined} type="text" onChange={handleDataChange} />
  
        <label>Image</label>
        <Input value={undefined} type="text" onChange={handleDataChange}/ >

  
        <label>Calories</label>
        <Input value={undefined} type="number" onChange={handleDataChange}/ >
   
  
        <label>Servings</label>
        <Input value={undefined} type="number" onChange={handleDataChange}/ >
  
  
        <button type="submit">Create</button>
      </form>
    );
  }