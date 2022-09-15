import '../styles/Home.css';
import React, { useState } from 'react';
import Spinner from './Spinner';

function Home({ imageUrl, anotherRandomCard, recipe, addRecipe }) {
  const [ liked, setLiked ] = useState(false);

  function like() {
    setLiked(liked => !liked);
    fetch(`http://localhost:3000/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...recipe, isLiked: true, imageUrl: recipe.image})
    })
    .then(res => res.json())
    .then(data => addRecipe(data));
  }

  return recipe === false ? Spinner() 
  : <div id='home'>
      <h1>Recipe of the Day</h1>
      <button id='show-another' type='button' onClick={anotherRandomCard}>Show Me Another</button>
      <div id='image-wrapper'>
        <img src={imageUrl} alt='Recipe card'></img>
        <div id='likeBtn' onClick={like}>{liked ? '❤️' : '🤍'}</div>
      </div>
  </div>
}

export default Home;