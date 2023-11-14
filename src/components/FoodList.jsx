import { useState } from "react"
import foodsJson from "../foods.json"
import FoodBox from "./FoodBox/"
import AddFoodForm from "./AddFoodForm"

function Foodlist() {
  const [foods, setFoods] = useState(foodsJson)

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id)
    setFoods(updatedFoods)
  }
  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood]

    setFoods(updatedFoods)
  }

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      {foods.map((item) => (
        <FoodBox
          key={item.id}
          food={{
            name: item.name,
            calories: item.calories,
            image: item.image,
            servings: item.servings,
          }}
          handleDelete={() => deleteFood(item.id)}
        />
      ))}
      <AddFoodForm addFood={addNewFood}></AddFoodForm>
    </div>
  )
}

export default Foodlist
