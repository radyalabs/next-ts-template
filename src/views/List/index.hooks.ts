import type { BaseResponse } from '@/constants/response';
import useGetData from '@/hooks/useGetData';

import type { Profile } from './index.types';

const useList = () => {
  const { data } = useGetData<BaseResponse<Profile>>(['profile'], 'auth/me');
  return { data };
};

export default useList;
