import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Submit.css";

function Submit({ addRecipe }) {
  const [formData, setFormData] = useState({
    isLiked: true,
    type: "user-created",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitRecipe(e) {
    e.preventDefault();
    fetch(`https://herbivorous-json.herokuapp.com/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        addRecipe(data);
        navigate("/saved");
      });
  }

  return (
    <div id="submit">
      <h1>Add a New Recipe</h1>
      <form onSubmit={submitRecipe}>
        <div class="text">
          <label>
            Title
            <input
              type="text"
              name="title"
              required
              minLength={5}
              maxLength={50}
              value={formData.title}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Image Url
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Link to Recipe
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Number of Servings
            <input
              type="text"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Minutes to Prepare
            <input
              type="text"
              name="readyInMinutes"
              value={formData.readyInMinutes}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div class="textarea">
          <label>
            Description
            <textarea
              name="summary"
              maxLength={300}
              value={formData.summary}
              onChange={handleChange}
              rows="5"
              cols="40"
            ></textarea>
          </label>
          <label>
            Ingredients
            <textarea
              name="ingredients"
              required
              minLength={35}
              maxLength={800}
              value={formData.ingredients}
              onChange={handleChange}
              rows="5"
              cols="40"
            ></textarea>
          </label>
          <label>
            Instructions
            <textarea
              name="instructions"
              required
              minLength={50}
              maxLength={800}
              value={formData.instructions}
              onChange={handleChange}
              rows="5"
              cols="40"
            ></textarea>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Submit;
