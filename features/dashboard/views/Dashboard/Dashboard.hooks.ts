import { useAuthContext } from '@/contexts/AuthContext';

const useDashboard = () => {
  const { profile } = useAuthContext();

  return { profile };
};

export default useDashboard;
