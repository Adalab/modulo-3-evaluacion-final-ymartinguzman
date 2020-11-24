import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
  const html = props.characters.map((item) => (
    <li key={item.id}>
      <Link to={`/character-detail/${item.id}`} title="Character info">
        More info
      </Link>
      <CharacterCard
        id={item.id}
        picture={item.image}
        name={item.name}
        specie={item.species}
      />
    </li>
  ));
  return (
    <>
      <ul>
        <a href>{html}</a>
      </ul>
    </>
  );
};

export default CharacterList;
