import '../styles/Home.css';
import React from 'react';

function Home({ imageUrl, anotherRandomCard }) {
  
  return <div id='home'>
    <h1>Recipe of the Day</h1>
    <button type='button' onClick={anotherRandomCard}>Show Me Another</button>
    <img src={imageUrl} alt='Recipe card'></img>
  </div>
}

export default Home;