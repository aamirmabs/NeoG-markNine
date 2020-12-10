const helper = {
  dishes: function () {
    return foodDishesDB;
  }
};

let foodDishesDB = [
  {
    category: "baked",
    name: "Veggie Breakfast Bakes",
    description: "It's packed with vegetables and oven-baked",
    imgURL:
      "https://www.bbcgoodfoodme.com/assets/legacy/recipe_images/recipe-image-legacy-id--1201575_11.jpg"
  },
  {
    category: "baked",
    name: "Baked eggs with sumac",
    description:
      "Sumac-spiced baked eggs, lemony tahini and broccoli make a delicious weekend brunch or speedy midweek meal.",
    imgURL:
      "https://www.bbcgoodfoodme.com/assets/var/app/current/collections/657/original/overnight-oats.jpg"
  }
];

export default helper;
