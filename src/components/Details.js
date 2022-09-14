import '../styles/Details.css';
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [ details, setDetails ] = useState(null);
  const key = '7c9862ec65e5475e978e284fa042e7df';

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
    .then(res => res.json())
    .then(data => {
      setDetails(data);
      console.log(data);
    })
    .catch(err => console.log(err.message));
  }, [])

  const ingredients = details.extendedIngredients.map(obj => 
    <li key={obj.name}>{obj.original}</li>);

  return (
    details !== null ? (<div id='details'>
      <img src={details.image} alt={details.title}/>
        <div id='text'>
          <h1>{details.title}</h1>
          <h3 id='meta-data'>
            <span id='servings'>Serves: {details.servings}  |  </span>
            <span id='time'>Ready in: {details.readyInMinutes} min.</span>
          </h3>
          <p id='summary'>{parse(details.summary)}</p>
          <h3>Ingredients</h3>
          <ul id='ingredients'>{ingredients}</ul>
          <h3>Instructions</h3>
          <div id='instructions'>{parse(details.instructions)}</div>
        </div>
    </div>) 
    : <h1> Loading ... </h1>
  )
}

export default Details;