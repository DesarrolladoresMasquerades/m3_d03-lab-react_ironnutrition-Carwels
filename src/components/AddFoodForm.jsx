import { useState } from "react";
import { Divider, Input, Button } from "antd";

export default function AddFoodForm(props) {

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        calories: 1,
        servings: 1
    })


    function handleDataChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setFormData(formData=> ({...formData, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault();

        props.addFood(formData);

        setFormData({
            name: "",
            image: "",
            calories: 1,
            servings: 1
        });
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <Input value={formData.name} type="text" name="name" onChange={handleDataChange} />

        <label>Image:</label>
        <Input value={formData.image} type="url" name="image" onChange={handleDataChange} />

        <label>Calories:</label>
        <Input value={formData.calories} type="number" name="calories" onChange={handleDataChange} />

        <label>Servings:</label>
        <Input value={formData.servings} type="number" name="servings" onChange={handleDataChange} />
        
        <Button htmlType="submit">Create</Button>
    </form>
    );
  }