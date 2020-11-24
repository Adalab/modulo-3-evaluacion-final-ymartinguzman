import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import image from '../images/noresults.jpg';

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <div>
        <p>No results found!</p>
        <img
          src={image}
          alt="No results founded"
          title="No results founded"
        ></img>
      </div>
    );
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
