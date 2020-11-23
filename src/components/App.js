import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import api from '../services/api';

api.getDataFromApi();

const App = () => {
  return (
    <>
      <div>Hola</div>
      {/* <header></header>
      <main>
        <CharacterList />
      </main>
      <footer></footer> */}
    </>
  );
};

export default App;
