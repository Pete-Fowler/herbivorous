import '../styles/Home.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

function Home() {
  const [ recipe, setRecipe ] = useState({id: '', title: '', image: ''});
  const [ card, setCard ] = useState('');

  function fetch1() {
    const key = '7c9862ec65e5475e978e284fa042e7df';

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=random&diet=vegan`)
    .then(res => res.json())
    .then(data => setRecipe(data.results[0]))
    .then(fetch2());
  }

  function fetch2() {
    const key = '7c9862ec65e5475e978e284fa042e7df';

    fetch(`https://api.spoonacular.com/recipes/${recipe.id}/card?apiKey=${key}`)
    .then(res => res.json())
    .then(data => setCard(data.url));
  }

  useEffect(() => {
    fetch1();
  }, []);

  // useEffect(() => {
  //   fetch2();
  // }, [recipe])

  return <div id='home'>
    <h1>Recipe of the Day</h1>
    <button type='button' onClick={fetch1}>Show Me Another</button>
    <img src={card} alt={recipe.title}></img>
  </div>
}

export default Home;