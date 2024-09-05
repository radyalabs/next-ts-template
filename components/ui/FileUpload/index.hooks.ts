import {
  type ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { usePostData } from '@/hooks/useMutateData';
import useToaster from '@/hooks/useToaster';
import type { FileRepositoryResponse } from '@/types/responses';

import type { FileUploadProps, StorageFile } from './index.types';

const useFileUpload = (props: FileUploadProps) => {
  const {
    accept = [],
    size = 0,
    uploadEndpoint = '',
    value,
    onChange,
  } = props;

  const toaster = useToaster();
  const [previewFile, setPreviewFile] = useState<StorageFile>();
  const [isInit, setIsInit] = useState(true);
  const uploadRef = useRef<HTMLInputElement>(null);
  const sizeInMB = size * 1024 * 1024;
  const arrayAcceptedFile = accept.map((mimeType) => mimeType.split('/')[1]);

  const {
    mutateAsync: mutateUpload,
    isLoading: isUploading,
  } = usePostData<FileRepositoryResponse>(
    ['uploadFile'],
    uploadEndpoint,
    {
      options: {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onError: (error) => {
          const { response } = error || {};
          const { data: errorData } = response || {};
          const { message } = errorData || {};
          toaster.error(message || 'Terjadi kesalahan pada server');
        },
      },
    },
  );

  useEffect(() => {
    if (value && isInit) {
      setPreviewFile(
        value instanceof File ? {
          name: value.name,
          url: URL.createObjectURL(value),
        } : {
          name: value.name,
          url: value.url,
        },
      );
      setIsInit(false);
    }
  }, [value, isInit]);

  const handleChange = (file: File) => {
    const formData = new FormData();
    formData.append('File', file, file.name);
    formData.append('FileType', file.type);
    mutateUpload(formData).then((response) => {
      setPreviewFile({
        name: file.name,
        url: URL.createObjectURL(file),
      });
      onChange({
        name: response.newFileName,
        url: response.fileUrl || URL.createObjectURL(file),
      });
    }).catch(() => {
      setPreviewFile(undefined);
      onChange(undefined);
    });
    if (uploadRef.current) {
      uploadRef.current.value = '';
    }
  };

  const handleDrop = (files: File[]) => {
    setPreviewFile(undefined);
    const file = files[0];
    if (size && file && file.size > sizeInMB) {
      toaster.error(`File size cannot be more than ${size}MB`);
      onChange(undefined);
      return;
    }
    if (file && accept.includes(file.type)) {
      handleChange(file);
    } else {
      const acceptedTypes = arrayAcceptedFile.join(', .');
      toaster.error(`Sorry, upload file only for ${acceptedTypes}.`);
    }
  };

  const handleUpload = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  const handleUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    setPreviewFile(undefined);
    if (files) {
      const file = files[0];
      if (size && file && file.size > sizeInMB) {
        toaster.error(`File size cannot be more than ${size}MB`);
        onChange(undefined);
        return;
      }
      if (file && accept.includes(file.type)) {
        handleChange(file);
      } else {
        const acceptedTypes = arrayAcceptedFile.join(', .');
        toaster.error(`Sorry, upload file only for ${acceptedTypes}.`);
      }
    }
  };

  const handleDeleteFile = () => {
    onChange(undefined);
    setPreviewFile(undefined);
  };

  return {
    isUploading,
    previewFile,
    uploadRef,
    handleDrop,
    handleUpload,
    handleUploadChange,
    handleDeleteFile,
  };
};

export default useFileUpload;
