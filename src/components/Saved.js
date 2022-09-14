import '../styles/Saved.css';
import React from 'react';
import Recipe from './Recipe';

function Saved({ recipes, removeRecipe }) {

  const cards = recipes.map(item => 
    <Recipe 
      key={item.id}
      id={item.id}
      description={item.description}
      imageUrl={item.imageUrl} 
      link={item.link}
      steps={item.steps}
      title={item.title}
      isLiked={item.isLiked}
      removeRecipe={removeRecipe}
    />)

  return <div id='saved'> 
    {cards}
  </div>
}

export default Saved;