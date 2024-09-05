import { type ChangeEvent, useRef, useState } from 'react';

import type {
  DroppableFileUploadProps,
} from './index.types';

const useFileUpload = (props: DroppableFileUploadProps) => {
  const {
    mimeTypes = [],
    accept,
    onDelete,
    onChange,
    size = 1,
  } = props;
  const [error, setError] = useState('');
  const [importedFile, setImportedFile] = useState<File>();
  const uploadRef = useRef<HTMLInputElement>(null);

  const maxFileSize = size * 1024 * 1024;
  const handleDrop = (files: File[]) => {
    setImportedFile(undefined);
    const file = files[0];
    if (file && mimeTypes.includes(file.type) && file.size <= maxFileSize) {
      setError('');
      setImportedFile(file);
      onChange(file);
      return;
    }
    if (file && !mimeTypes.includes(file.type)) {
      setError(`Invalid file type. Please upload a file with one of the following types: ${accept}`);
    } else if (file && file.size > 5242880) {
      setError(`The uploaded document is more than ${size}MB.`);
    }
    if (uploadRef.current) {
      uploadRef.current.value = '';
    }
  };

  const handleUpload = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  const handleUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file && mimeTypes.includes(file.type) && file.size <= 5242880) {
      setError('');
      setImportedFile(file);
      onChange(file);
    } else if (file && !mimeTypes.includes(file.type)) {
      setError(`Invalid file type. Please upload a file with one of the following types: ${accept}`);
    } else if (file && file.size > 5242880) {
      setError(`The uploaded document is more than ${size}MB.`);
    }
  };
  const handleDeleteFile = () => {
    setImportedFile(undefined);
    onDelete();
  };

  return {
    error,
    importedFile,
    uploadRef,
    handleDrop,
    handleUpload,
    handleUploadChange,
    handleDeleteFile,
  };
};

export default useFileUpload;
