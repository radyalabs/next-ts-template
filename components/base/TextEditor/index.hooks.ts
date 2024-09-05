import { usePostData } from '@/hooks/useMutateData';
import type { FileRepositoryResponse } from '@/types/responses';

import type { TextEditorProps, UploadHandler } from './index.types';

const useTextEditor = (props: TextEditorProps) => {
  const { showImagePicker, imageUploadEndpoint } = props;

  if (showImagePicker && !imageUploadEndpoint) {
    throw new Error('imageUploadEndpoint must be defined when showImagePicker is true');
  }

  const {
    mutateAsync: mutateUpload,
  } = usePostData<FileRepositoryResponse>(
    ['uploadImage'],
    imageUploadEndpoint || '',
    {
      options: {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    },
  );

  const imageUploadHandler: UploadHandler = async (blobInfo): Promise<string> => {
    const formData = new FormData();
    formData.append('File', blobInfo.blob(), blobInfo.filename());
    const { fileUrl = '' } = await mutateUpload(formData);
    return fileUrl;
  };

  return {
    imageUploadHandler,
  };
};

export default useTextEditor;
