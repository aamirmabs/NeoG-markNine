import React, { useState } from "react";
import helper from "./helper";
import "./reset.css";
import "./styles.css";

export default function App() {
  const [dishOfType, setDishOfType] = useState("all");

  function dishTypeBtnClickHandler(dishType) {
    setDishOfType(dishType);
  }

  let dishDB = helper.dishDB();
  let allDishes = helper.allDishes();
  let bakedDishes = helper.bakedDishes();
  let grilledDishes = helper.grilledDishes();
  let friedDishes = helper.friedDishes();

  // ===============
  let dishJSXArray = [];

  let generateDishJSX = (allDishes, category) => {
    console.log("Entered generateDishJSX", category);
    // dishJSXArray = [];
    // console.log(dishJSXArray);
    // JSX for dish of particular category
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

    // JSX for "all" dishes
    if (category === "all") {
      for (const dish of allDishes) {
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
    console.log("Exiting generateDishJSX");
    // console.log(dishJSXArray);
    // return dishJSXArray;
  };

  function printCards(cardArray) {
    cardArray.map((card, index) => {
      return <li key={index}>{card}</li>;
    });
  }
  // ==============

  return (
    <div className="App">
      <h1>Meal Suggestor</h1>
      <h2>A neoG-markNine submission</h2>
      <h3>Choose a category</h3>
      <div className="category-buttons">
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
