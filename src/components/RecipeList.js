import "../styles/RecipeList.css";
import React from "react";
import Recipe from "./Recipe";

function RecipeList({ list, addRecipe, removeRecipe, showDetails }) {
  const empty = list.results.length === 0 ? true : false;

  const cards = list.results.map((item) => (
    <Recipe
      key={item.id}
      id={item.id}
      description={item.description}
      image={item.image}
      link={item.link}
      steps={item.steps}
      title={item.title}
      isLiked={item.isLiked}
      type={item.type}
      addRecipe={addRecipe}
      removeRecipe={removeRecipe}
      showDetails={showDetails}
    />
  ));

  return <div id="recipe-list">{empty ? <h1>No results ...</h1> : cards}</div>;
}

export default RecipeList;
