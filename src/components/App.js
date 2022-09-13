import '../styles/App.css';
import React, { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Search from './Search';
import Submit from './Submit';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [ recipeIndex, setRecipeIndex ] = useState(0);
  const [ recipes, setRecipes ] = useState(false);
  const [ card, setCard ] = useState('');
  const key = '7c9862ec65e5475e978e284fa042e7df';
 
  // useEffect(() => {
  //   fetch1();
  // }, []);

  // useEffect(() => {
  //   if(recipes !== false) fetch2();
  // }, [recipes, recipeIndex])

  // function fetch1() {
  //   fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=random&number=100&diet=vegan&type=main_course`)
  //   .then(res => res.json())
  //   .then(data => setRecipes(data.results));
  // }

  // function fetch2() {
  //   fetch(`https://api.spoonacular.com/recipes/${recipes[recipeIndex].id}/card?apiKey=${key}`)
  //     .then(res => res.json())
  //     .then(data => setCard(data.url));
  // }

  // function anotherRandomCard() {
  //   setRecipeIndex(recipeIndex => recipeIndex + 1);
  // }

  return (
    <div id='app'>
      <Nav />
      <Routes>
        <Route exact path='/' element={
          <Home 
          imageUrl={card} 
          // anotherRandomCard={anotherRandomCard} 
        />} />
        <Route path='/search' element={<Search />} />
        <Route path='/submit' element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
