import '../stylesheets/App.scss';
import api from '../services/api';
import CharacterList from './CharacterList';
import Filter from './Filters';
import CharacterDetail from './CharacterDetail';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

const App = (props) => {
  //states
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  //api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data.results);
    });
  }, []);

  //eventos
  const handleSearch = (filteredText, event) => {
    if (filteredText) {
      setSearch(filteredText);
    } else if (setSearch('')) {
      event.preventDefault();
    }
  };

  //filter characters
  const filterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  });
  //find characters
  const renderDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const foundCharacter = characters.find((character) => {
      return routeCharacterId === character.id;
    });
    console.log(foundCharacter);

    if (foundCharacter) {
      return (
        <CharacterDetail
          image={foundCharacter.image}
          name={foundCharacter.name}
          status={foundCharacter.status}
          species={foundCharacter.species}
          origin={foundCharacter.origin.name}
          episodes={foundCharacter.episode.id}
        />
      );
    } else if (routeCharacterId !== props.id) {
      <p>Character not found</p>;
    }
    console.log(routeCharacterId);
  };

  return (
    <>
      <header></header>
      <main>
        <Filter handleSearch={handleSearch} />
        <Switch>
          <Route exact path="/">
            <CharacterList
              characters={filterCharacters}
              handleSearch={handleSearch}
            />
          </Route>
          <Route path="/character-detail/:characterId" render={renderDetail} />
        </Switch>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
