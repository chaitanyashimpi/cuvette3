import fs from 'fs';

const foodData = JSON.parse(fs.readFileSync('./food.json', 'utf-8')); // Adjust the path as needed

// Rest of your code using foodData


  let allFoodItems = (data) => {
    return data.map((food) => food.foodname);
  };

  let categoryVegetables = (data) => {
    return data
      .filter((food) => food.category === "Vegetable")
      .map((food) => food.foodname);
  };

  let categoryFruit = (data) => {
    return data
      .filter((food) => food.category === "Fruit")
      .map((food) => food.foodname);
  };

  let categoryProtien = (data) => {
    return data
      .filter((food) => food.category === "Protein")
      .map((food) => food.foodname);
  };

  let categoryNuts = (data) => {
    return data
      .filter((food) => food.category === "Nuts")
      .map((food) => food.foodname);
  };

  let categoryGrains = (data) => {
    return data
      .filter((food) => food.category === "Grain")
      .map((food) => food.foodname);
  };

  let categoryDairy = (data) => {
    return data
      .filter((food) => food.category === "Dairy")
      .map((food) => food.foodname);
  };

  let caloriesAbove100 = (data) => {
    return data
      .filter((food) => food.calorie > 100)
      .map((food) => food.foodname);
  };

  let caloriesBelow100 = (data) => {
    return data
      .filter((food) => food.calorie < 100)
      .map((food) => food.foodname);
  };

  // list all the food items with highest protien content to lowest
  let highestProtien = (data) => {
    return data
      .sort((a, b) => b.protien - a.protien)
      .map((food) => food.foodname);
  };

  // list all the food items with lowest cab content to highest
  let lowestCab = (data) => {
    return data.sort((a, b) => a.cab - b.cab).map((food) => food.foodname);
  };

  console.log("All Food Items: ", allFoodItems(foodData));
  console.log("Vegetables: ", categoryVegetables(foodData));
  console.log("Fruits: ", categoryFruit(foodData));
  console.log("Protien: ", categoryProtien(foodData));
  console.log("Nuts: ", categoryNuts(foodData));
  console.log("Grains: ", categoryGrains(foodData));
  console.log("Dairy: ", categoryDairy(foodData));
  console.log("Calories Above 100: ", caloriesAbove100(foodData));
  console.log("Calories Below 100: ", caloriesBelow100(foodData));
  console.log("Sorted by Protein (Highest to Lowest): ", highestProtien(foodData));
  console.log("Sorted by Carb (Lowest to Highest): ", lowestCab(foodData));
