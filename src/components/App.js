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
      console.log(data);
    });
    console.log('me monto');
  }, []);

  //eventos
  const handleSearch = (filteredText) => {
    console.log('me han cambiado', filteredText);
  };
  return (
    <>
      <header></header>
      <main>
        <Filter handleSearch={handleSearch} />
        <CharacterList characters={characters} handleSearch={handleSearch} />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
