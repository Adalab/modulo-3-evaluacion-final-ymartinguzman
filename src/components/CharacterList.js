import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import image from '../images/noresults.jpg';

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <div className="container-results">
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
    <li className="card" key={item.id}>
      <Link to={`/character-detail/${item.id}`} title="Character info">
        <div className="character">
          <CharacterCard
            id={item.id}
            picture={item.image}
            name={item.name}
            specie={item.species}
          />
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      <ul className="list-container">{html}</ul>
    </>
  );
};

export default CharacterList;
