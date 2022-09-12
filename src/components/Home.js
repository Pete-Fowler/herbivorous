import '../styles/Home.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

function Home() {
const [ recipe, setRecipe ] = useState({id: '', title: '', image: ''});

useEffect(() => {
  const key = '7c9862ec65e5475e978e284fa042e7df';

  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=random&diet=vegan`)
  .then(res => res.json())
  .then(data => {
    setRecipe(data.results[0]);
    console.log(data.results[0]);
  }); 
}, []);

  return <div id='home'>
    <Recipe id={recipe.id} title={recipe.title} image={recipe.image}/>
  </div>
}

export default Home;