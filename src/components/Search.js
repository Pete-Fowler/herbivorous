import React, { useState }from 'react';
import '../styles/Search.css';
import RecipeList from './RecipeList';

function Search({ addRecipe, removeRecipe }) {
  const key = '7c9862ec65e5475e978e284fa042e7df';
  const [ string, setString ] = useState('');
  const [ results, setResults ] = useState(false);
  
  function handleChange(e) {
    setString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=random&number=10&diet=vegan&query=${string}`)
    .then(res => res.json())
    .then(data => setResults(data));
  }

  return (
        <div id='search'>
          <div id='search-box'>
            <form onSubmit={handleSubmit}>
              <input type='text' value={string} onChange={handleChange}></input>
              <button type='submit' id='search-btn'>🔍</button>
            </form>
          </div>
          {results === false ? null 
            : <RecipeList 
              list={results} 
              addRecipe={addRecipe} 
              removeRecipe={removeRecipe} 
            />}
        </div>
   )
}

export default Search;