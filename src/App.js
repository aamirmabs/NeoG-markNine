import React from "react";
import helper from "./helper";
import "./styles.css";

export default function App() {
  let dishes = helper.dishes();
  let dish = {
    category: "baked",
    name: "Veggie Breakfast Bakes",
    description: "It's packed with vegetables and oven-baked",
    imgURL:
      "https://www.bbcgoodfoodme.com/assets/legacy/recipe_images/recipe-image-legacy-id--1201575_11.jpg"
  };

  return (
    <div className="App">
      <h1>Meal Suggestor</h1>
      <h2>A neoG-markNine submission</h2>
      <h2>Choose a category</h2>
      <div class="category-buttons">
        <button class="btn btn-red">Fried</button>
        <button class="btn btn-green">Baked</button>
        <button class="btn btn-blue">Baked</button>
      </div>
      <div class="food-cards">
        <div class="card">
          <div class="dish-img">
            <img src={dish.imgURL} />
          </div>
          <div class="dish-desc">
            <h4>{dish.name}</h4>
            <p>{dish.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
