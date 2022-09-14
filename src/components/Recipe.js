import '../styles/Recipe.css';
import React, { useState } from 'react';

function Recipe({ description, id, imageUrl, isLiked = false, link, steps, title, addRecipe, removeRecipe }) {
  const [ liked, setLiked ] = useState(isLiked);
console.log(isLiked);

  function like() {
    if(liked === false) {
      fetch(`http://localhost:3000/recipes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title, isLiked: true, imageUrl: imageUrl})
      })
      .then(res => res.json())
      .then(data => addRecipe(data));
    } else if(liked === true) {
      fetch(`http://localhost:3000/recipes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(removeRecipe(id));  
    }
    setLiked(liked => !liked);
  }

  return <div className='recipe'> 
    <div id='image-box' style={{backgroundImage: `url(${imageUrl})`}} /> 
    <h2>{title}</h2>
    <div id='likeBtn' onClick={like}>{liked ? '❤️' : '🤍'}</div>
  </div>
}

export default Recipe;