import useList from './index.hooks';

const List = () => {
  const { data } = useList();
  const { fullName } = data || {};
  return (
    <p>{`welcome, ${fullName}`}</p>
  );
};

export default List;
