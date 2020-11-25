import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <>
      <div className="card-container">
        <Link to="/" className="link-home">
          Back
        </Link>
        <img src={props.image} alt={props.name} title={props.name}></img>
        <div className="card-details">
          <h2> {props.name}</h2>
          <p>Status: {props.status}</p>
          <p>Species: {props.species}</p>
          <p>Origin: {props.origin}</p>
          <p>Episodes: {props.episodes}</p>
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
