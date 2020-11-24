import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
  console.log(props.characters.id);

  if (props.characters.id === undefined) {
    return <p>Character not found</p>;
  }
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
      <ul>{html}</ul>
    </>
  );
};

export default CharacterList;
