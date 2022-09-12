import '../styles/App.css';
import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Search from './Search';
import Submit from './Submit';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div id='app'>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/submit' element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
