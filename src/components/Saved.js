import '../styles/Saved.css';
import React from 'react';
import Recipe from './Recipe';

function Saved({ recipes }) {

  const cards = recipes.map(item => 
    <Recipe 
      key={item.id}
      description={item.description}
      imageUrl={item.imageUrl} 
      link={item.link}
      steps={item.steps}
      title={item.title} 
    />)

  return <div id='saved'> 
    {cards}
  </div>
}

export default Saved;