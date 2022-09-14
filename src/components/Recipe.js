import '../styles/Recipe.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Recipe({ id, imageUrl, isLiked = false, title, addRecipe, removeRecipe, showDetails }) {
  const [ liked, setLiked ] = useState(isLiked);
  const navigate = useNavigate();

  function like() {
    if(liked === false) {
      fetch(`http://localhost:3000/recipes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, title: title, isLiked: true, imageUrl: imageUrl})
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

  function toShowDetails() {
    showDetails(id);
    navigate(`/details/${id}`);
  }

  return <div className='recipe' onClick={toShowDetails}> 
    <div id='image-box' style={{backgroundImage: `url(${imageUrl})`}} /> 
    <h2>{title}</h2>
    <div id='likeBtn' onClick={like}>{liked ? '❤️' : '🤍'}</div>
  </div>
}

export default Recipe;