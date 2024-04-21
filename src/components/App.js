import Header from './Header';
import Title from './Title';
import Search from './Search';
import Pokemons from './Pokemons';
import Types from './Types';
import Pokedex from './Pokedex';
import { QueryClientProvider, QueryClient } from "react-query"
import { usePokemonState } from '../atom';

const queryClient = new QueryClient()


function App() {

  const [pokemonsSelected, setPokemonsSelected] = usePokemonState();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Title />
        <Pokedex pokedex={pokemonsSelected} />
        <Search />
        <Types />
        <Pokemons />
      </QueryClientProvider>
    </div>
  );
}

export default App;
