import '../styles/Saved.css';
import React from 'react';
import Recipe from './Recipe';

function Saved({ recipes, removeRecipe, showDetails }) {

  const cards = recipes.map(item => 
    <Recipe 
      key={item.id}
      id={item.id}
      imageUrl={item.imageUrl} 
      title={item.title}
      isLiked={item.isLiked}
      removeRecipe={removeRecipe}
      showDetails={showDetails}
    />)

  return <div id='saved'> 
    {cards}
  </div>
}

export default Saved;