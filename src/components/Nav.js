import '../styles/Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

  return <div id='nav'>
    <span id='logo'>Herbivorous</span>
    <span id='links'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/search'>Search</NavLink>
      <NavLink to='/saved'>Saved</NavLink>
      <NavLink to='/submit'>Create</NavLink>
    </span>
  </div>
}

export default Nav;