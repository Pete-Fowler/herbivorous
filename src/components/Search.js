import React, { useState }from 'react';
import '../styles/Search.css';
import RecipeList from './RecipeList';
import Spinner from './Spinner';

function Search({ addRecipe, removeRecipe, results, setResults }) {
  const key = '7c9862ec65e5475e978e284fa042e7df';
  const [ data, setData ] = useState({string: '', sort: 'popularity'});
  const [ loaded, setLoaded ] = useState('done');
  const [ offset, setOffset ] = useState(0);

  function handleChange(e) {
    setData({...data, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoaded('start');
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&sort=${data.sort}&number=10&diet=vegan&query=${data.string}`)
    .then(res => res.json())
    .then(data => {
      setResults(data);
      setLoaded('done');
      setOffset(0);
    });
  }

  // Pages forward
  function back() {
    if(offset >= 10) {
      const newOffset = offset - 10;
      getResults(newOffset);
      setOffset(prev => prev - 10);
    }
  }

  // Pages back
  function forward() {
    if((offset / 10) + 1 <= Math.floor(results.totalResults / 10)) {
      const newOffset = offset + 10;
      getResults(newOffset);
      setOffset(prev => prev + 10);
    }
  }

  // Calls fetches for pagination fwd/back
 function getResults(newOffset) {
    setLoaded('start'); 
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&offset=${newOffset}&sort=${data.sort}&number=10&diet=vegan&query=${data.string}`)
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
              <div id='search-bar'>
                <input type='text' name='string' value={data.string} onChange={handleChange}></input>
                <button type='submit' id='search-btn'>🔍</button>
              </div>
              <label htmlFor="sort-by">Sort by: 
                <select id='sort-by' name='sort' value={data.sort} onChange={handleChange}>
                  <option value='popularity'>Popularity</option>
                  <option value='healthiness'>Healthiness</option>
                  <option value='time'>Prep time</option>
                  <option value='random'>Random</option>
                </select>
              </label>
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
              <div id='arrows-box'>
                <span className='arrow' onClick={back}>{'<'}</span>
                <span className='arrow' onClick={forward}>{'>'}</span>
              </div>
              {`Page ${(offset / 10) + 1} of ${Math.floor((results.totalResults / 10) + 1)}`}
            </>
            )
            : null}
        </div>
   )
}

export default Search;