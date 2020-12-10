import React from "react";
import helper from "./helper";
import "./styles.css";

export default function App() {
  let dishes = helper.dishes();

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

  let allDishCards = () => generateDishJSX(dishes, "all");
  let friedDishCards = () => generateDishJSX(dishes, "fried");
  let bakedDishCards = () => {
    generateDishJSX(dishes, "baked");
    console.log("In baked dish cards");
    return dishJSXArray;
  };
  let grilledDishCards = () => generateDishJSX(dishes, "grilled");

  function printCards(cardArray) {
    cardArray.map((card, index) => {
      return <li key={index}>{card}</li>;
    });
  }

  return (
    <div className="App">
      <h1>Meal Suggestor</h1>
      <h2>A neoG-markNine submission</h2>
      <h2>Choose a category</h2>
      <div className="category-buttons">
        <button className="btn btn-black">All</button>
        <button
          className="btn btn-red"
          onClick={() => printCards(friedDishCards())}
        >
          Fried
        </button>
        <button
          className="btn btn-green"
          onClick={() => printCards(bakedDishCards())}
        >
          Baked
        </button>
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
