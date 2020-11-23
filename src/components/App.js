import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import api from '../services/api';
import { useEffect, useState } from 'react';
import Filter from './Filters';

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

  return (
    <>
      <header></header>
      <main>
        <Filter handleSearch={handleSearch} />
        <CharacterList
          characters={filterCharacters}
          handleSearch={handleSearch}
        />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
