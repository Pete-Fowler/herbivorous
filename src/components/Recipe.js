import '../styles/Recipe.css';
import React from 'react';

function Recipe({ description, imageUrl, link, steps, title }) {
  


  return <div className='recipe'> 
    <div id='image-box' style={{backgroundImage: `url(${imageUrl})`}} /> 
    <h2>{title}</h2>
  </div>
}

export default Recipe;