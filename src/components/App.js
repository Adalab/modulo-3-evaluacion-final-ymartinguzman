import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import api from '../services/api';
import { useEffect, useState } from 'react';
import Filter from './Filters';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

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
      return <h1>Hola</h1>;
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
