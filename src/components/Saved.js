import '../styles/Saved.css';
import React from 'react';
import Recipe from './Recipe';

function Saved({ recipes, removeRecipe }) {

  const cards = recipes.map(item => 
    <Recipe 
      key={item.id}
      id={item.id}
      image={item.image} 
      title={item.title}
      isLiked={item.isLiked}
      type={item.type}
      removeRecipe={removeRecipe}
    />)

  return <div id='saved'> 
    {cards}
  </div>
}

export default Saved;