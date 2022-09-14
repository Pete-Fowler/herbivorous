import '../styles/Recipe.css';
import React, { useState } from 'react';

function Recipe({ description, imageUrl, isLiked, link, steps, title, addRecipe }) {
  const [ liked, setLiked ] = useState(isLiked);

  function like() {
    setLiked(liked => !liked);
    fetch(`http://localhost:3000/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: title, isLiked: true, imageUrl: imageUrl})
    })
    .then(res => res.json())
    .then(data => addRecipe(data));
  }

  return <div className='recipe'> 
    <div id='image-box' style={{backgroundImage: `url(${imageUrl})`}} /> 
    <h2>{title}</h2>
    <div id='likeBtn' onClick={like}>{liked ? '❤️' : '🤍'}</div>
  </div>
}

export default Recipe;