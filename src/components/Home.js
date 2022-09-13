import '../styles/Home.css';
import React, { useState } from 'react';

function Home({ imageUrl, anotherRandomCard }) {
  const [ liked, setLiked ] = useState(false);
  
  function like(e) {
    setLiked(liked => !liked);

  }

  return <div id='home'>
    <h1>Recipe of the Day</h1>
    <button type='button' onClick={anotherRandomCard}>Show Me Another</button>
    <div id='image-wrapper'>
      <div id='likeBtn' onClick={like}>{liked ? '❤️' : '🤍'}</div>
      <img src={imageUrl} alt='Recipe card'></img>
    </div>
  </div>
}

export default Home;