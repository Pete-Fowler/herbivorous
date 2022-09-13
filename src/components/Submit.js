import React, { useState } from 'react';
import '../styles/Submit.css';

function Submit() {
  const [formData, setFormData ] = useState({});

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return <div id='submit'>
    <h1>Add a New Recipe</h1>
    <form>
      <input type='text' name='title' placeholder='Enter recipe title ...' 
        value={formData.title} onChange={handleChange}></input>
      <input type='url' name='link' placeholder='Enter image url' 
        value={formData.link} onChange={handleChange}></input>
      <textarea name='description' placeholder='Enter description' 
        value={formData.description} onChange={handleChange} rows='10' cols='40'></textarea>
      <textarea name='steps' placeholder='Enter ingredients/steps' 
        value={formData.steps} onChange={handleChange} rows='10' cols='40'></textarea>
    </form>
  </div>
}

export default Submit;