import React, { useState } from 'react';

const CharacterCard = (props) => {
  return (
    <>
      <img src={props.picture} alt={props.name} title={props.name}></img>
      <h3>{props.name}</h3>
      <p>{props.species}</p>
    </>
  );
};

export default CharacterCard;
