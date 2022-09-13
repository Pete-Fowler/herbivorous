import '../styles/Recipe.css';
import React from 'react';

function Recipe({ description, imageUrl, link, steps, title }) {
  


  return <div className='recipe'>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title}></img>
  </div>
}

export default Recipe;