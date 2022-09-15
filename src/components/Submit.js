import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Submit.css';

function Submit({ addRecipe }) {
  const [formData, setFormData ] = useState({isLiked: true, type: 'user-created'});
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function submitRecipe(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      addRecipe(data);
      navigate('/saved');
    });

  }

  return <div id='submit'>
    <h1>Add a New Recipe</h1>
    <form onSubmit={submitRecipe}>
      <input type='text' 
        name='title' 
        placeholder='Enter recipe title ...' 
        value={formData.title} 
        onChange={handleChange}>
      </input>
      <input type='url' 
        name='imageUrl' 
        placeholder='Enter image url' 
        value={formData.image} 
        onChange={handleChange}>
      </input>
        <input type='url' 
        name='link' 
        placeholder='Enter link to recipe (if applicable)' 
        value={formData.link} 
        onChange={handleChange}>
      </input>
      <input type='servings' 
        name='title' 
        placeholder='Enter number of servings ...' 
        value={formData.title} 
        onChange={handleChange}>
      </input>
      <input type='text' 
        name='readyInMinutes' 
        placeholder='Enter minutes it is ready in ...' 
        value={formData.title} 
        onChange={handleChange}>
      </input>
      <textarea name='summary' 
        placeholder='Enter description' 
        value={formData.description} 
        onChange={handleChange} 
        rows='10' cols='40'>
      </textarea>
      <textarea name='ingredients' 
        placeholder='Enter ingredients' 
        value={formData.steps} 
        onChange={handleChange} 
        rows='10' 
        cols='40'>
      </textarea>
      <textarea name='instructions' 
        placeholder='Enter instructions' 
        value={formData.steps} 
        onChange={handleChange} 
        rows='10' 
        cols='40'>
      </textarea>
      <button type='submit'>Submit</button>
    </form>
  </div>
}

export default Submit;