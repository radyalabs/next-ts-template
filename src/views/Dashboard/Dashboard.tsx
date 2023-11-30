import useDashboard from './Dashboard.hooks';

const Dashboard = () => {
  const { profile } = useDashboard();
  const { fullName } = profile || {};
  return <p>{`welcome, ${fullName}`}</p>;
};

export default Dashboard;
