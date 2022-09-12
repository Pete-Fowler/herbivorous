import '../styles/Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

  return <div id='nav'>
    <span>Herbivorous</span>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='search'>Search</NavLink>
    <NavLink to='submit'>New Recipe</NavLink>
  </div>
}

export default Nav;