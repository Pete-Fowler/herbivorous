import '../styles/Home.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

function Home() {
const [ recipe, setRecipe ] = useState({id: '', title: '', image: ''});
const [ card, setCard ] = useState('');

useEffect(() => {
  const key = '7c9862ec65e5475e978e284fa042e7df';

  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=random&diet=vegan`)
  .then(res => res.json())
  .then(data => {
    setRecipe(data.results[0]);
  });
}, []);

useEffect(() => {
  const key = '7c9862ec65e5475e978e284fa042e7df';

  fetch(`https://api.spoonacular.com/recipes/${recipe.id}/card?apiKey=${key}`)
  .then(res => res.json())
  .then(data => setCard(data.url));
}, [recipe])

  return <div id='home'>
    {/* <Recipe id={recipe.id} title={recipe.title} image={recipe.image}/> */}
    <img src={card} alt={recipe.title}></img>
  </div>
}

export default Home;