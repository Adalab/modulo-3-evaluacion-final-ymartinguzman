import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <>
      <div className="card-container">
        <img
          className="image-card"
          src={props.image}
          alt={props.name}
          title={props.name}
        ></img>
        <div className="card-details">
          <h2 className="card-text"> {props.name}</h2>
          <p className="card-text">
            <strong>Status: </strong>Status: {props.status}
          </p>
          <p className="card-text">
            <strong>SPECIES: </strong> {props.species}
          </p>
          <p className="card-text">
            <strong>ORIGIN: </strong> {props.origin}
          </p>
          <p className="card-text">
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
