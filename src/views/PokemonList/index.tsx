import TextField from '@/components/base/Textfield';
import { Book, Spinner } from '@/components/icons';

import usePokemonList from './index.hooks';

const PokemonList = () => {
  const { data } = usePokemonList();
  const {
    results = [],
  } = data || {};
  return (
    <>
      <p>{results[0]?.name}</p>
      <TextField id="pokemon" appendObject={<Spinner />} prependObject={<Book />} />
    </>
  );
};

export default PokemonList;
