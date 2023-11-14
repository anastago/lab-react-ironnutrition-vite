import React, { useState } from "react"

function AddFoodForm(props) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFood = { name, image, calories, servings }
    props.addFood(newFood)
    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
  }

  const handleNameInput = (e) => setName(e.target.value)

  const handleImageInput = (e) => setImage(e.target.value)

  const handleCaloriesInput = (e) => setCalories(e.target.value)
  const handleServingsInput = (e) => setServings(e.target.value)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameInput}
        ></input>
        <input
          name="image"
          type="text"
          value={image}
          placeholder="image"
          onChange={handleImageInput}
        ></input>
        <input
          name="calories"
          type="number"
          placeholder="calories"
          value={calories}
          onChange={handleCaloriesInput}
        ></input>
        <input
          name="servings"
          type="number"
          placeholder="servings"
          value={servings}
          onChange={handleServingsInput}
        ></input>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default AddFoodForm
