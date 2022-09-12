import '../styles/App.css';
import React, { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Search from './Search';
import Submit from './Submit';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  const [ recipe, setRecipe ] = useState({id: '', title: '', image: ''});
  const [ card, setCard ] = useState('');
  const key = '7c9862ec65e5475e978e284fa042e7df';
 


  function fetch1() {
    const key = '7c9862ec65e5475e978e284fa042e7df';

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=random&diet=vegan`)
    .then(res => res.json())
    .then(data => fetch(`https://api.spoonacular.com/recipes/${data.results[0].id}/card?apiKey=${key}`)
      .then(res => res.json())
      .then(data => setCard(data.url)));
  }

  useEffect(() => {
    fetch1();
  }, []);

  return (
    <div id='app'>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home imageUrl={card} />} />
        <Route path='/search' element={<Search />} />
        <Route path='/submit' element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
