import { ENDPOINT } from '@/constants/apiURL';
import useGetData from '@/hooks/useGetData';

import type { Profile } from './index.types';

const useList = () => {
  const { data } = useGetData<Profile>(['profile'], ENDPOINT.IDENTITY.PROFILE);
  return { data };
};

export default useList;
