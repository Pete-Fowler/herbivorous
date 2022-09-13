import React from 'react';
import '../styles/Submit.css';

function Submit() {

  const cuisines = [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese"
];

const cuisineOptions = cuisines.map(string => <option>{string}</option>);

  return <div id='submit'>
    <h1>Add a New Recipe</h1>
    <form>
      <label for="cuisine">Cuisine: 
        <select id='cuisine'>
          {cuisineOptions}
        </select>
      </label>
    </form>
  </div>
}

export default Submit;