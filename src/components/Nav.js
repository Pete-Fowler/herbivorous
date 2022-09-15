import '../styles/Nav.css';
import leaf from '../images/leafG.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

  return <div id='nav'>
    <div id='logo'>Herbivorous   
    </div>
    <div id='links'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/search'>Search</NavLink>
      <NavLink to='/saved'>Saved</NavLink>
      <NavLink to='/submit'>Create</NavLink>
    </div>
  </div>
}

export default Nav;