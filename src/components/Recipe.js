import React from 'react';

function Recipe({ description, imageUrl, link, steps, title }) {
  


  return <div className='recipe'>
    <h1>{title}</h1>
    <img src={imageUrl} alt={title}></img>
  </div>
}

export default Recipe;