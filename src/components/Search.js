import React, { useState, useEffect, useRef }from 'react';
import '../styles/Search.css';
import RecipeList from './RecipeList';
import Spinner from './Spinner';

function Search({ addRecipe, removeRecipe, results, setResults }) {
  const key = '7c9862ec65e5475e978e284fa042e7df';
  const [ string, setString ] = useState('');
  const [ loaded, setLoaded ] = useState('done');
  const [ offset, setOffset ] = useState(0);
  const firstRender = useRef(true);

  function handleChange(e) {
    setString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoaded('start');
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=popularity&number=10&diet=vegan&query=${string}`)
    .then(res => res.json())
    .then(data => {
      setResults(data);
      setLoaded('done');
      setOffset(0);
    });
  }

  function back() {
    setOffset(offset => offset - 10);
    setLoaded('start');
  }

  function forward() {
    setOffset(offset => offset + 10);
    setLoaded('start');
  }

  useEffect(() => {
    if(firstRender.current === true) {
      firstRender.current = false;
    } else {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&offset=${offset}&sort=popularity&number=10&diet=vegan&query=${string}`)
    .then(res => res.json())
    .then(data => {
      setResults(data);
      setLoaded('done');
      console.log(data);
    });
    }
  }, [offset])

  return (
        <div id='search'>
          <div id='search-box'>
            <form onSubmit={handleSubmit}>
              <input type='text' value={string} onChange={handleChange}></input>
              <button type='submit' id='search-btn'>🔍</button>
            </form>
          </div>
          {loaded === 'start' ? Spinner()  
            : loaded === 'done' && results !== false ? 
            (<>
              <RecipeList 
                list={results} 
                addRecipe={addRecipe} 
                removeRecipe={removeRecipe} 
              />
              <div>
                <span className='arrow' onClick={back}>{'<'}</span>
                <span className='arrow' onClick={forward}>{'>'}</span>
              </div>
            </>
            )
            : null}
        </div>
   )
}

export default Search;