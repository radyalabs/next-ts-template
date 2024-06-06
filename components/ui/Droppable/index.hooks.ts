import { type DragEvent, useState } from 'react';

import { noop } from '@/utils';

import type { DroppableProps } from './index.types';

const useDroppable = (props: DroppableProps) => {
  const [isOver, setIsOver] = useState(false);

  const {
    onDrop = noop,
  } = props;

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    onDrop(droppedFiles);
  };

  return {
    isOver,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  };
};

export default useDroppable;
