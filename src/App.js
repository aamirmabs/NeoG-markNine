import React from "react";
import helper from "./helper";
import "./styles.css";

export default function App() {
  let dishes = helper.dishes();

  let dishJSXArray = [];

  let generateDishJSX = (allDishes, category) => {
    for (const dish of allDishes) {
      if (dish.category === category) {
        dishJSXArray.push(
          <div className="container">
            <div className="card">
              <div className="dish-img">
                <img src={dish.imgURL} />
              </div>
              <div className="dish-desc">
                <h4>{dish.name}</h4>
                <p>{dish.description}</p>
              </div>
            </div>
          </div>
        );
      }
    }
  };

  let test = generateDishJSX(dishes, "baked");
  console.log(test);

  return (
    <div className="App">
      <h1>Meal Suggestor</h1>
      <h2>A neoG-markNine submission</h2>
      <h2>Choose a category</h2>
      <div className="category-buttons">
        <button className="btn btn-black">All</button>
        <button className="btn btn-red">Fried</button>
        <button className="btn btn-green">Baked</button>
        <button className="btn btn-blue">Grilled</button>
      </div>

      <div className="food-cards">
        {dishJSXArray.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </div>
    </div>
  );
}
