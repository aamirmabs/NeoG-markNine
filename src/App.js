import React, { useState } from "react";
import helper from "./helper";
import "./reset.css";
import "./styles.css";

export default function App() {
  // set up hook
  const [dishOfType, setDishOfType] = useState("all");

  // event handler to be triggered on dish type button click
  function dishTypeBtnClickHandler(dishType) {
    setDishOfType(dishType);
  }

  // copying database object
  let dishDB = helper.dishDB();

  return (
    <div className="App">
      <h1>Meal Suggestor</h1>
      <h2>A neoG-markNine submission</h2>
      <h3>Choose a category</h3>
      <div className="category-buttons">
        {/* setting event handler to all buttons */}
        <button
          className="btn btn-black"
          onClick={() => dishTypeBtnClickHandler("all")}
        >
          All
        </button>
        <button
          className="btn btn-red"
          onClick={() => dishTypeBtnClickHandler("fried")}
        >
          Fried
        </button>
        <button
          className="btn btn-green"
          onClick={() => dishTypeBtnClickHandler("baked")}
        >
          Baked
        </button>
        <button
          className="btn btn-blue"
          onClick={() => dishTypeBtnClickHandler("grilled")}
        >
          Grilled
        </button>
      </div>

      <div className="food-cards">
        {/* looping over database and printing cards */}
        {dishDB[dishOfType].map((dish, index) => {
          return (
            <li key={index}>
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
            </li>
          );
        })}
      </div>
    </div>
  );
}
