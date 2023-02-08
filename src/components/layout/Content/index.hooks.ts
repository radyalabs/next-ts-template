import { useLayoutContext } from '@/contexts/LayoutContext';

const useContent = () => {
  const { isCollapsed } = useLayoutContext();
  return { isCollapsed };
};
export default useContent;
