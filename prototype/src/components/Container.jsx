import React, { useState } from "react";
import Pancakes from "./models/Pancakes";
import Ramen from "./models/Ramen";
import Hotdog from "./models/Hotdog";
import Resto from "./models/Resto";
import Cookie from "./models/Cookie";
import book from "../images/vitagebook.png";

const Container = () => {
  const [selectedItem, setSelectedItem] = useState("Pancakes"); // Set "Pancakes" as the default selected item
  const [showGroup, setShowGroup] = useState(true); // Define the showGroup state
  const [buttonClicked, setButtonClicked] = useState(false); // Track if the button has been clicked

  const onItemClick = (item) => {
    setSelectedItem(item);
  };

  const itemComponentMap = {
    Pancakes: Pancakes,
    Ramen: Ramen,
    Hotdog: Hotdog,
    Cookie: Cookie,
  };

  const recipes = {
    Pancakes: {
      title: "Pancakes",
      ingredients: [
        "1 cup all-purpose flour",
        "2 tablespoons sugar",
        "1 teaspoon baking powder",
        "1/2 teaspoon baking soda",
        "1/4 teaspoon salt",
        "1 cup buttermilk",
        "1 large egg",
        "2 tablespoons melted butter",
      ],
      instructions: [
        "In a mixing bowl, combine the flour, sugar, baking powder, baking soda, and salt.",
        "In another bowl, whisk together the buttermilk, egg, and melted butter.",
        "Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix; it's okay if there are lumps.",
        "Heat a griddle or non-stick pan over medium-high heat and lightly grease it with butter or cooking spray.",
        "Pour 1/4 cup of pancake batter onto the griddle for each pancake.",
        "Cook until bubbles form on the surface, then flip and cook until golden brown on both sides.",
        "Serve hot with your favorite toppings, such as syrup, butter, fruit, or chocolate chips.",
      ],
    },
    Ramen: {
      title: "Ramen",
      ingredients: [
        "2 packs of ramen noodles",
        "4 cups chicken or vegetable broth",
        "1/4 cup soy sauce",
        "2 cloves garlic, minced",
        "1 teaspoon ginger, minced",
        "Sliced pork or tofu (for protein)",
        "Sliced green onions, seaweed, and a soft-boiled egg (for garnish)",
      ],
      instructions: [
        "In a pot, bring the broth to a simmer and add soy sauce, garlic, and ginger.",
        "Cook the ramen noodles according to the package instructions, then drain and set aside.",
        "In a separate pan, cook the sliced pork or tofu until browned and cooked through.",
        "Divide the cooked noodles into serving bowls and pour the hot broth over them.",
        "Top with your choice of protein, sliced green onions, seaweed, and a soft-boiled egg.",
        "Serve hot and enjoy your homemade ramen!",
      ],
    },

    Hotdog: {
      title: "Hotdog",
      ingredients: [
        "2 hotdog buns",
        "2 hotdogs",
        "1/4 cup of diced onions",
        "1/4 cup of diced tomatoes",
        "1/4 cup of shredded cheddar cheese",
        "Mustard and ketchup for garnish",
      ],
      instructions: [
        "Preheat a grill or stovetop pan to medium-high heat.",
        "Place the hotdogs on the grill or pan and cook until they are heated through and have grill marks (usually 5-7 minutes).",
        "Toast the buns on the grill or in a toaster until they are lightly browned.",
        "Place a hotdog in each bun and top with diced onions, diced tomatoes, and shredded cheddar cheese.",
        "Drizzle with mustard and ketchup, or your favorite condiments.",
        "Serve hot and enjoy your delicious hotdogs!",
      ],
    },
    Cookie: {
      title: "Cookies",
      ingredients: [
        "2 hotdog buns",
        "2 hotdogs",
        "1/4 cup of diced onions",
        "1/4 cup of diced tomatoes",
        "1/4 cup of shredded cheddar cheese",
        "Mustard and ketchup for garnish",
      ],
      instructions: [
        "Preheat a grill or stovetop pan to medium-high heat.",
        "Place the hotdogs on the grill or pan and cook until they are heated through and have grill marks (usually 5-7 minutes).",
        "Toast the buns on the grill or in a toaster until they are lightly browned.",
        "Place a hotdog in each bun and top with diced onions, diced tomatoes, and shredded cheddar cheese.",
        "Drizzle with mustard and ketchup, or your favorite condiments.",
        "Serve hot and enjoy your delicious hotdogs!",
      ],
    },
  };

  const closePreview = () => {
    setSelectedItem(null);
  };

  const selectedComponent = itemComponentMap[selectedItem];

  const handleButtonClick = () => {
    if (!buttonClicked) {
      setShowGroup(false); // Hide the group
      setButtonClicked(true); // Mark the button as clicked
    }
  };

  return (
    <div className="">
      <h2 style={{ textAlign: "center" }}>Recipes</h2>

      {/* book */}
      <div className="recepy-div">
        <div className="cookbook">
          <img src={book} alt="" />
        </div>
      </div>

      <div className="container-flex">
        <div className="container-item">
          {selectedItem && (
            <div className="recepy-title">
              <h2>{recipes[selectedItem].title}</h2>
            </div>
          )}
        </div>

        {/* object */}
        <div id="object" className="container-item">
          {selectedComponent && (
            <div className="preview">
              {React.createElement(selectedComponent)}
            </div>
          )}
        </div>

        {/* recipe */}
        <div className="container-item">
          {selectedItem && (
            <div>
              <div className="ingredients">
                {/* <h2>{recipes[selectedItem].title}</h2> */}
                <h4>Ingredients:</h4>
                <ul>
                  {recipes[selectedItem].ingredients.map(
                    (ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    )
                  )}
                </ul>
              </div>
              <div className="instructions">
                <h4>Instructions:</h4>
                <ol>
                  {recipes[selectedItem].instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* filter */}
      <div className="container-item">
        <div style={{ zIndex: 5 }} className="div-flex">
          <div
            className={`div ${
              selectedItem === "Pancakes" ? "active-title" : "inactive-title"
            }`}
            onClick={() => onItemClick("Pancakes")}
          >
            <h3>Pancakes</h3>
          </div>

          <div
            className={`div ${
              selectedItem === "Ramen" ? "active-title" : "inactive-title"
            }`}
            onClick={() => onItemClick("Ramen")}
          >
            <h3>Ramen</h3>
          </div>

          <div
            className={`div  ${
              selectedItem === "Hotdog" ? "active-title" : "inactive-title"
            }`}
            onClick={() => onItemClick("Hotdog")}
          >
            <h3>Hotdog</h3>
          </div>

          <div
            className={`div  ${
              selectedItem === "Cookie" ? "active-title" : "inactive-title"
            }`}
            onClick={() => onItemClick("Cookie")}
          >
            <h3>Cookies</h3>
          </div>
        </div>
      </div>

      {/* grandma */}
      <div style={{ height: "100vh", marginTop: "100vh" }}>
        <h2>Help Grandma</h2>
        <p>
          Oh no, grandma is feeling tired! Let's lend a hand and help her clean
          up the restaurant.
        </p>

        {!buttonClicked ? (
          <div>
            <button onClick={handleButtonClick}>
              {showGroup ? "lent out a hand" : "Show Group"}
            </button>
          </div>
        ) : (
          <p>Thank you for the help</p>
        )}
        <Resto hideGroup={showGroup} />
      </div>
    </div>
  );
};

export default Container;
