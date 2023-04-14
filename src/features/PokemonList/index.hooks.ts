import useGetData from '@/hooks/useGetData';

import type { Pokemon } from './index.types';

const usePokemonList = () => {
  const { data } = useGetData<Pokemon>(['pokemonList'], 'auth/me');
  return { data };
};

export default usePokemonList;
