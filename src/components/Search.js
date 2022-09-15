import React, { useState }from 'react';
import '../styles/Search.css';
import RecipeList from './RecipeList';
import Spinner from './Spinner';

function Search({ addRecipe, removeRecipe }) {
  const key = '7c9862ec65e5475e978e284fa042e7df';
  const [ string, setString ] = useState('');
  const [ results, setResults ] = useState(false);
  const [ loaded, setLoaded ] = useState('no');
  
  function handleChange(e) {
    setString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoaded('start');
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=random&number=10&diet=vegan&query=${string}`)
    .then(res => res.json())
    .then(data => {
      setResults(data);
      setLoaded('done');
    });
  }

  return (
        <div id='search'>
          <div id='search-box'>
            <form onSubmit={handleSubmit}>
              <input type='text' value={string} onChange={handleChange}></input>
              <button type='submit' id='search-btn'>🔍</button>
            </form>
          </div>
          {loaded === 'start' ? Spinner()  
            : loaded === 'done' ? 
            <RecipeList 
              list={results} 
              addRecipe={addRecipe} 
              removeRecipe={removeRecipe} 
            />
            : null}
        </div>
   )
}

export default Search;