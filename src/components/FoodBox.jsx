function FoodBox(props) {
  const food = props.food
  const handleDelete = props.handleDelete
  return (
    <div>
      <p>{food.name}</p>

      <img src={food.image} style={{ height: "5rem", width: "auto" }} />

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>
          Total Calories: {food.servings} * {food.calories}{" "}
        </b>{" "}
        kcal
      </p>

      <button onClick={() => handleDelete(food.id)}>Delete</button>
    </div>
  )
}

export default FoodBox
