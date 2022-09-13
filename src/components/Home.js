import '../styles/Home.css';
import React, { useState } from 'react';

function Home({ imageUrl, anotherRandomCard, recipe, addRecipe }) {
  const [ liked, setLiked ] = useState(false);

  function like() {
    setLiked(liked => !liked);
    fetch(`http://localhost:3000/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...recipe, imageUrl: recipe.image})
    })
    .then(res => res.json())
    .then(data => addRecipe(data));
  }

  return <div id='home'>
    <h1>Recipe of the Day</h1>
    <button type='button' onClick={anotherRandomCard}>Show Me Another</button>
    <div id='image-wrapper'>
      <img src={imageUrl} alt='Recipe card'></img>
      <div id='likeBtn' onClick={like}>{liked ? '❤️' : '🤍'}</div>
    </div>
  </div>
}

export default Home;