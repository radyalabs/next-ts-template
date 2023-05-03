import Typography from '@/components/base/Typography';
import { useLayoutContext } from '@/contexts/LayoutContext';

const Layout = () => {
  const { isCollapsed } = useLayoutContext();
  return (
    <div className={`relative inset-x-0 bottom-0 mb-5 mt-12 ${!isCollapsed ? 'ml-64' : 'ml-24'}`}>
      <Typography className="text-center">{`Copyright \u00A9 ${new Date().getFullYear()} Digital`}</Typography>
    </div>
  );
};

export default Layout;
