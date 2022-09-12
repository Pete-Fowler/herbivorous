import React from 'react';

function Recipe({ title, image }) {

  return <div className='recipe'>
    <h1>{title}</h1>
    <img src={image} alt={title}></img>
  </div>
}

export default Recipe;