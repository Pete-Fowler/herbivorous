import '../styles/Recipe.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Recipe({ id, image, isLiked = false, title, type = 'API', addRecipe, removeRecipe }) {
  const [ liked, setLiked ] = useState(isLiked);
  const navigate = useNavigate();

  function like(e) {
    e.stopPropagation();
    if(liked === false) {
      fetch(`https://herbivorous-json.herokuapp.com/recipes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, title: title, isLiked: true, image: image})
      })
      .then(res => res.json())
      .then(data => addRecipe(data));
    } else if(liked === true) {
      fetch(`https://herbivorous-json.herokuapp.com/recipes/${id}`, {
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
      navigate(`/details/${type}/${id}`);
  }

  return <div className='recipe' onClick={toShowDetails}> 
    <div id='image-box' style={{backgroundImage: `url(${image})`}} /> 
    <h2>{title}</h2>
    <div id='likeBtn' onClick={like}>{liked ? '❤️' : '🤍'}</div>
  </div>
}

export default Recipe;