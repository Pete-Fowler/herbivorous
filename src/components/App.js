import '../styles/App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Search from './Search';
import Submit from './Submit';
import Saved from './Saved';
import Details from './Details';

function App() {
  const key = '7c9862ec65e5475e978e284fa042e7df';
  const [ recipeIndex, setRecipeIndex ] = useState(0);  // Used to iterate another recipe of day
  const [ recipes, setRecipes ] = useState(false); // List for recipe of day
  const [ recipe, setRecipe ] = useState(false); // Currently shown recipe of day
  const [ card, setCard ] = useState(''); // Card for current recipe of day
  const [ savedRecipes, setSavedRecipes ] = useState([]);
  const [ searchResults, setSearchResults ] = useState(false);

 
  // Gets saved recipes from JSON-server
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(data => setSavedRecipes(data));
  }, [])

  // Gets list of recipes, sets recipes and recipe state - fetch1
  useEffect(() => {
    fetch1();
  }, []);

  // Gets recipe card image url - fetch2, which is dependent on first fetch results
  useEffect(() => {
    if(recipes !== false) fetch2();
  }, [recipes, recipeIndex])

  function fetch1() {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=random&number=100&diet=vegan&type=main_course`)
    .then(res => res.json())
    .then(data => {
      setRecipes(data.results);
      setRecipe(data.results[recipeIndex]);
    });
  }

  function fetch2() {
    fetch(`https://api.spoonacular.com/recipes/${recipes[recipeIndex].id}/card?apiKey=${key}`)
      .then(res => res.json())
      .then(data => setCard(data.url));
  }

  function anotherRandomCard() {
    setRecipeIndex(recipeIndex => recipeIndex + 1);
  }

  function addRecipe(recipeToAdd) {
    setSavedRecipes([...savedRecipes, recipeToAdd]);
  }

  function removeRecipe(id) {
    setSavedRecipes(savedRecipes => savedRecipes.filter(item => {
      if(item.id !== id) return true;
      return false;
    }))
  }

  function updateSearchResults(data) {
    setSearchResults(data);
  }

  return (
    <div id='app'>
      <Nav />
      <Routes>
        <Route path='/' element={
          <Home 
          imageUrl={card} 
          anotherRandomCard={anotherRandomCard} 
          recipe={recipe}
          addRecipe={addRecipe}
        />} />
        <Route path='/search' element={<Search addRecipe={addRecipe} 
          removeRecipe={removeRecipe} results={searchResults} 
          setResults={updateSearchResults} />} />
        <Route path='/saved' element={<Saved recipes={savedRecipes} 
          removeRecipe={removeRecipe} />} />
        <Route path='/submit' element={<Submit addRecipe={addRecipe}/>} />
        <Route path='/details/:type/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
