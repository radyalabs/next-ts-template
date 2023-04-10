import usePokemonList from '@/features/PokemonList/index.hooks';

const PokemonList = () => {
  const { data } = usePokemonList();
  const {
    results = [],
  } = data || {};
  return (
    <p>{results[0]?.name}</p>
  );
};

export default PokemonList;
