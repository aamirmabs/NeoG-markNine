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
      name: "Baked banana porridge",
      description:
        "Start the day right with this healthy baked banana porridge containing walnuts, banana and cinnamon. It's a filling breakfast that will keep you going until lunch",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2018/02/breakfast-baked-banana-porridge.jpg"
    },
    {
      category: "fried",
      name: "Vegan bean chilli fries",
      description:
        "Treat family and friends to Mexican-inspired loaded fries. This plant-based dish is great for entertaining, whether for a movie night or party",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2020/01/vegan-bean-chilli-fries.jpg"
    },
    {
      category: "grilled",
      name: "Sticky barbecue chicken",
      description:
        "Nothing beats sticky chicken with barbecue sauce. Start in the oven to make sure it's cooked properly, then grill over hot coals for that lovely BBQ flavour",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2018/07/sticky-barbecue-chicken.jpg"
    }
  ],
  baked: [
    {
      category: "baked",
      name: "Baked banana porridge",
      description:
        "Start the day right with this healthy baked banana porridge containing walnuts, banana and cinnamon. It's a filling breakfast that will keep you going until lunch",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2018/02/breakfast-baked-banana-porridge.jpg"
    },
    {
      category: "baked",
      name: "Baked ginger & spinach sweet potato",
      description:
        "Bake a spiced sweet potato with spinach for lunch, or as a budget supper for one. It's low-calorie, packed with vitamin C and packs big flavour",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2018/01/baked-ginger-spinach-sweet-potato.jpg"
    },
    {
      category: "baked",
      name: "Baked chilli & jacket potatoes",
      description:
        "Jacket potatoes and chilli are great comfort food when the nights draw in. Make ours in the week when you're short on time for a nutritious family dinner",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2017/10/baked-chilli-jacket-potatoes.jpg"
    }
  ],
  fried: [
    {
      category: "fried",
      name: "Vegan bean chilli fries",
      description:
        "Treat family and friends to Mexican-inspired loaded fries. This plant-based dish is great for entertaining, whether for a movie night or party",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2020/01/vegan-bean-chilli-fries.jpg"
    },
    {
      category: "fried",
      name: "Stir-fried greens with fish sauce",
      description:
        "Cook these salty-sweet stir-fried greens with cabbage and broccoli. It's a quick and easy Asian-style side dish where the fish sauce lends depth of flavour",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2018/01/stir-fried-greens-with-fish-sauce.jpg"
    },
    {
      category: "fried",
      name: "Egg fried rice",
      description:
        "Don't call the Chinese takeaway – make your own egg fried rice. Use leftover rice, or cook and dry it on a plate before using so it doesn't stick to the wok",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2017/10/egg-fried-rice.jpg"
    }
  ],
  grilled: [
    {
      category: "grilled",
      name: "Sticky barbecue chicken",
      description:
        "Nothing beats sticky chicken with barbecue sauce. Start in the oven to make sure it's cooked properly, then grill over hot coals for that lovely BBQ flavour",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2018/07/sticky-barbecue-chicken.jpg"
    },
    {
      category: "grilled",
      name: "Hoisin hot dogs",
      description:
        "Grill some sausages brushed with hoisin sauce, then top with cucumber and spring onion for a different take on a classic hot dog",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2019/09/hoisin-hot-dogs.jpg"
    },
    {
      category: "grilled",
      name: "BBQ sausages with smoky tomato sauce",
      description:
        "Light a barbie and grill these sausages with a smoky tomato sauce, perfect for kids and adults alike. They're great for a family barbecue or a camping holiday",
      imgURL:
        "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2018/07/bbq-sausages-with-smoky-tomato-sauce.jpg"
    }
  ]
};

export default helper;
