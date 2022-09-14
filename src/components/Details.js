import '../styles/Details.css';
import React from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();

  return <h1>details for {id}</h1>
}

export default Details;