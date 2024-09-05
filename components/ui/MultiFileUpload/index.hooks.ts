import {
  type ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { usePostData } from '@/hooks/useMutateData';
import useToaster from '@/hooks/useToaster';
import type { FileRepositoryResponse } from '@/types/responses';
import { noop } from '@/utils';

import type { FileUploadProps, StorageFile } from './index.types';

const useFileUpload = (props: FileUploadProps) => {
  const {
    accept = [],
    uploadEndpoint = '',
    value = [],
    onChange = noop,
    size = 0,
  } = props;

  const toaster = useToaster();
  const [previewFile, setPreviewFile] = useState<StorageFile[]>([]);
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
    if (value && value.length > 0) {
      const newPreviewFile = value.map((el) => ({ name: el, newName: el }));
      setPreviewFile(newPreviewFile);
    }
  }, [value]);

  const handleChange = (file: File) => {
    const formData = new FormData();
    formData.append('File', file, file.name);
    formData.append('FileType', file.type);
    mutateUpload(formData).then((response) => {
      setPreviewFile([
        ...previewFile,
        {
          name: file.name,
          newName: response.newFileName,
        }]);
      onChange([
        ...(value || []),
        response.newFileName,
      ]);
    }).catch(() => {
      setPreviewFile(previewFile);
      onChange(value);
    });
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
    const {
      target: { files },
    } = e;
    if (files) {
      const file = files[0];
      if (file && sizeInMB > 0 && file.size > sizeInMB) {
        toaster.error(`File size cannot be more than ${size}MB`);
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

  const handleDelete = (i: number) => {
    const newFiles = previewFile.filter((el) => el.name !== previewFile[i].name);
    setPreviewFile(newFiles);
    onChange(newFiles.map((el) => el.newName));
  };

  return {
    isUploading,
    previewFile,
    uploadRef,
    handleDelete,
    handleUpload,
    handleUploadChange,
  };
};

export default useFileUpload;
