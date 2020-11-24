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
  const handleSearch = (filteredText) => {
    setSearch(filteredText);
  };

  const filterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  });

  const renderDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const foundCharacter = characters.find((character) => {
      return routeCharacterId === character.id;
    });
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
    } else {
      return <p>Personaje no encontrado</p>;
    }
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
          <Route
            path="/character-detail/:characterId"
            component={renderDetail}
          />
        </Switch>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
