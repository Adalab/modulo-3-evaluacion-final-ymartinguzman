import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <>
      <div className="card-container">
        <img src={props.image} alt={props.name} title={props.name}></img>
        <div className="card-details">
          <h2> {props.name}</h2>
          <p>
            <strong>Status: </strong>Status: {props.status}
          </p>
          <p>
            <strong>SPECIES: </strong> {props.species}
          </p>
          <p>
            <strong>ORIGIN: </strong> {props.origin}
          </p>
          <p>
            <strong>EPISODES: </strong> {props.episodes}
          </p>
        </div>
      </div>
      <Link to="/" className="link-home">
        Back
      </Link>
    </>
  );
};

export default CharacterDetail;
