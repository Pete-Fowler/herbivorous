import '../styles/Home.css';
import React, { useState } from 'react';
import Spinner from './Spinner';

function Home({ imageUrl, anotherRandomCard, recipe, addRecipe }) {
  const [ liked, setLiked ] = useState(false);
  const [ imageLoaded, setImageLoaded ] = useState(false);

  function like() {
    setLiked(liked => !liked);
    fetch(`https://herbivorous-json.herokuapp.com/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...recipe, isLiked: true, imageUrl: recipe.image})
    })
    .then(res => res.json())
    .then(data => addRecipe(data));
  }

  function handleShowAnother() {
    setImageLoaded(false);
    anotherRandomCard();
  }

  return <>
  <div style={imageLoaded ? {display:'none'} : {} }>
    {Spinner()}
  </div>
  <div id='home' >
      <h1>Recipe of the Day</h1>
      <button id='show-another' type='button' onClick={handleShowAnother}>Show Me Another</button>
      <div id='image-wrapper' style={imageLoaded ? {} : {display:'none'}}>
      <img src={imageUrl} alt='Recipe card' onLoad={() => setImageLoaded(true)}></img>
        <div id='likeBtn' onClick={like}>{liked ? '❤️' : '🤍'}</div>
      </div>
  </div> 
  </>
}

export default Home;