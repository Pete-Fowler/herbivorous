import '../styles/Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

  return <div id='nav'>
    <span>Herbivorous</span>
    <NavLink exact to='/'>Home</NavLink>
    <NavLink to='/search'>Search</NavLink>
    <NavLink to='/saved'>Saved Recipes</NavLink>
    <NavLink to='/submit'>New Recipe</NavLink>
  </div>
}

export default Nav;