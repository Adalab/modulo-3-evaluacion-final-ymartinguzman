import '../stylesheets/App.scss';
import api from '../services/api';
import CharacterList from './CharacterList';
import Filter from './Filters';
import Header from './Header';
import CharacterDetail from './CharacterDetail';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

const App = (props) => {
  //states
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [isChecked, setIsChecked] = useState(false);

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
  const handleCheck = (checked) => {
    setIsChecked(checked);
  };

  //filter characters
  const filterCharacters = characters.filter((character) => {
    const characterSearch = character.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return characterSearch;

    // if (isChecked === true) {
    //   characterSearch.sort((a, b) => {
    //     if (a.name > b.name) {
    //       return 1;
    //     }
    //     if (a.name < b.name) {
    //       return -1;
    //     }
    //     return 0;
    //   });
    // } else {
    //   return characterSearch;
    // }
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
          episodes={foundCharacter.episode.length}
        />
      );
    } else {
      return <p>Character not found</p>;
    }
  };

  return (
    <>
      <Header />
      <main className="main-container">
        <Filter handleSearch={handleSearch} handleCheck={handleCheck} />
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
      <footer className="footer"></footer>
    </>
  );
};

export default App;
