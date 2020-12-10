const helper = {
  dishDB: function () {
    return foodDishesDB;
  },
  allDishes: function () {
    return foodDishesDB.all;
  },
  bakedDishes: function () {
    return foodDishesDB.baked;
  },
  friedDishes: function () {
    return foodDishesDB.fried;
  },
  grilledDishes: function () {
    return foodDishesDB.grilled;
  }
};

let foodDishesDB = {
  all: [
    {
      category: "baked",
      name: "Bake 1",
      description: "It's packed with vegetables and oven-baked",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe_images/recipe-image-legacy-id--1201575_11.jpg"
    },
    {
      category: "fried",
      name: "Fry 1",
      description: "It's packed with vegetables and oven-baked",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe_images/recipe-image-legacy-id--1201575_11.jpg"
    },
    {
      category: "grilled",
      name: "Grill 1",
      description: "It's packed with vegetables and oven-baked",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe_images/recipe-image-legacy-id--1201575_11.jpg"
    }
  ],
  baked: [
    {
      category: "baked",
      name: "Bake 1",
      description: "It's packed with vegetables and oven-baked",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe_images/recipe-image-legacy-id--1201575_11.jpg"
    },
    {
      category: "baked",
      name: "Baked 2",
      description:
        "Sumac-spiced baked eggs, lemony tahini and broccoli make a delicious weekend brunch or speedy midweek meal.",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/var/app/current/collections/657/original/overnight-oats.jpg"
    }
  ],
  fried: [
    {
      category: "fried",
      name: "Fry 2",
      description:
        "Sumac-spiced baked eggs, lemony tahini and broccoli make a delicious weekend brunch or speedy midweek meal.",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/var/app/current/collections/657/original/overnight-oats.jpg"
    }
  ],
  grilled: [
    {
      category: "grilled",
      name: "Frill 2",
      description:
        "Sumac-spiced baked eggs, lemony tahini and broccoli make a delicious weekend brunch or speedy midweek meal.",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/var/app/current/collections/657/original/overnight-oats.jpg"
    }
  ]
};

export default helper;
