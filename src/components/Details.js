import '../styles/Details.css';
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

function Details() {
  const { type, id } = useParams();
  const [ details, setDetails ] = useState({});
  const [ loaded, setLoaded ] = useState(false);
  const key = '7c9862ec65e5475e978e284fa042e7df';

  useEffect(() => {
    if(type === 'API') {
      fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
      .then(res => res.json())
      .then(data => {
        setDetails(data);
        setLoaded(loaded => 'API');
      })
      .catch(err => console.log(err.message));
   } else if(type === 'user-created') {
    fetch(`http://localhost:3000/recipes/${id}`)
    .then(res => res.json())
    .then(data => {
      setDetails(data);
      setLoaded(loaded => 'user-created');
    });
   }
  }, [])

  return (
    loaded === 'API' ? 
      (<div id='details'>
        <div id='text'>
          <img src={details.image} alt={details.title}/>
          <h1>{details.title}</h1>
          <h3 id='meta-data'>
            <span id='servings'>Serves: {details.servings}  |  </span>
            <span id='time'>Ready in: {details.readyInMinutes} min.</span>
          </h3>
          <p id='summary'>{parse(details.summary)}</p>
          <h2>Ingredients</h2>
          <ul id='ingredients'>{details.extendedIngredients.map(obj => 
            <li key={obj.name}>{obj.original}</li>)}
          </ul>
          <h2>Instructions</h2>
          <div id='instructions'>{parse(details.instructions)}</div>
          <p><a href={details.spoonacularSourceUrl}>Link to recipe source on spoonacular.com</a></p>
        </div>
    </div>) 
    : loaded === 'user-created' ?  
    (<div id='details'>
      <div id='text'>
        <img src={details.image} alt={details.title}/>
        <h1>{details.title}</h1>
        <h3 id='meta-data'>
          <span id='servings'>Serves: {details.servings}  |  </span>
          <span id='time'>Ready in: {details.readyInMinutes} min.</span>
        </h3>
        <p id='summary'>{details.summary}</p>
        <h3>Ingredients</h3>
        <p id='ingredients'>{details.ingredients}
        </p>
        <h3>Instructions</h3>
        <div id='instructions'>{details.instructions}</div>
        <p><a href={details.link}>Link to recipe source</a></p>
      </div>
    </div>) 
    : Spinner()
  )
}

export default Details;