import { Card, Col, Button } from "antd";
import { useState } from "react";

export default function FoodBox(props) {

const [food, setFood] = useState(props)

  return (
    <Col>
      <Card title={food.FoodBox.name} style={{ width: 230, height: 300, margin: 10 }} >
        <img src={props.FoodBox.image} height={60} alt="food" />
        <p>Calories: {props.FoodBox.calories}</p>
        <p>Servings: {props.FoodBox.servings}</p>
        <p>
          <b>Total Calories: {props.FoodBox.calories * props.FoodBox.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}