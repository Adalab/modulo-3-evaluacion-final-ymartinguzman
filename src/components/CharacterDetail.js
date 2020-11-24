import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <>
      <button>
        <Link to="/#">Home</Link>
      </button>
      <img src={props.image} alt={props.name} title={props.name}></img>
      <h2>{props.name}</h2>
      <h3>{props.status}</h3>
      <h3>{props.species}</h3>
      <h3>{props.origin}</h3>
      <h3>{props.episodes}</h3>
    </>
  );
};

export default CharacterDetail;
