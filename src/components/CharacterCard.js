import React from 'react';

const CharacterCard = (props) => {
  return (
    <>
      <img src={props.picture} alt={props.name} title={props.name}></img>
      <h3 className="card-paragraph">{props.name}</h3>
      <p className="card-paragraph">{props.specie}</p>
    </>
  );
};

export default CharacterCard;
