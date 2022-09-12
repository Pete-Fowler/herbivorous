import '../styles/App.css';
import React, { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Search from './Search';
import Submit from './Submit';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  const randomRecipe = useRef({}) 
  const [ randomCard, setRandomCard ] = useState('');
  const key = '7c9862ec65e5475e978e284fa042e7df';

  function getRandomRecipe() {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=random&diet=vegan`)
    .then(res => res.json())
    .then(data => {
      randomRecipe.current = data.results[0].id;
    });
  }

  useEffect(() => {
    getRandomRecipe();
  }, []);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${randomRecipe.current}/card?apiKey=${key}`)
    .then(res => res.json())
    .then(data => setRandomCard(data.url));
  }, [randomRecipe])
  
  return (
    <div id='app'>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home imageUrl={randomCard} />} />
        <Route path='/search' element={<Search />} />
        <Route path='/submit' element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
