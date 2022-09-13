import '../styles/App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Search from './Search';
import Submit from './Submit';
import Saved from './Saved';

function App() {
  const key = '7c9862ec65e5475e978e284fa042e7df';
  const [ recipeIndex, setRecipeIndex ] = useState(0);
  const [ recipes, setRecipes ] = useState(false);
  const [ card, setCard ] = useState('');
  const [ savedRecipes, setSavedRecipes ] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(data => setSavedRecipes(data));
  }, [])

  useEffect(() => {
    fetch1();
  }, []);

  useEffect(() => {
    if(recipes !== false) fetch2();
  }, [recipes, recipeIndex])

  function fetch1() {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=random&number=100&diet=vegan&type=main_course`)
    .then(res => res.json())
    .then(data => setRecipes(data.results));
  }

  function fetch2() {
    fetch(`https://api.spoonacular.com/recipes/${recipes[recipeIndex].id}/card?apiKey=${key}`)
      .then(res => res.json())
      .then(data => setCard(data.url));
  }

  function anotherRandomCard() {
    setRecipeIndex(recipeIndex => recipeIndex + 1);
  }

  function saveRecipe(recipe) {
    setSavedRecipes([...savedRecipes, recipe]);
  }

  return (
    <div id='app'>
      <Nav />
      <Routes>
        <Route exact path='/' element={
          <Home 
          imageUrl={card} 
          anotherRandomCard={anotherRandomCard} 
        />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/saved' element={<Saved recipes={savedRecipes}/>} />
        <Route exact path='/submit' element={<Submit saveRecipe={saveRecipe}/>} />
      </Routes>
    </div>
  );
}

export default App;
