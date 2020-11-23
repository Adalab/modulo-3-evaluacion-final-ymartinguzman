import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import api from '../services/api';
import { useEffect, useState } from 'react';
import Filter from './Filters';

const App = (props) => {
  // const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]);

  //api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data.results);
      console.log(data);
    });
    console.log('me monto');
  }, []);

  return (
    <>
      <header></header>
      <main>
        <Filter />
        <CharacterList characters={characters} />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
