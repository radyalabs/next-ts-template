import useList from './index.hooks';

const List = () => {
  const { data } = useList();
  const { payload } = data || {};
  const { wellcomePage, name } = payload || {};
  return (
    <p>{`${wellcomePage} ${name}`}</p>
  );
};

export default List;
