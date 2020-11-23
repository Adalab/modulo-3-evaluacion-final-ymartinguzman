import React, { useState } from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const html = props.characters.map((item) => (
    <li key={item.id}>
      <CharacterCard
        picture={item.image}
        name={item.name}
        specie={item.species}
      />
    </li>
  ));
  return (
    <>
      <ul>{html}</ul>
    </>
  );
};

export default CharacterList;
