import useDroppable from './index.hooks';
import type { DroppableProps } from './index.types';

const Droppable = (props: DroppableProps) => {
  const {
    className,
    children,
  } = props;

  const {
    isOver,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = useDroppable(props);

  return (
    <div
      className={`${className} ${isOver ? 'bg-n-4' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Droppable;
