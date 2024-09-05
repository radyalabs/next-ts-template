export interface TextEditorProps {
  id?: string;
  name?: string;
  className?: string;
  classes?: {
    label?: string;
    container?: string;
    input?: string;
  };
  imageUploadEndpoint?: string;
  label?: string;
  labelLayout?: 'vertical' | 'horizontal';
  error?: boolean;
  message?: string;
  required?: boolean;
  showImagePicker?: boolean;
  value?: string;
  onChange?: (value: string) => void
}

interface BlobInfo {
  id: () => string;
  name: () => string;
  filename: () => string;
  blob: () => Blob;
  base64: () => string;
  blobUri: () => string;
  uri: () => string | undefined;
}

export type ProgressFn = (percent: number) => void;
export type UploadHandler = (blobInfo: BlobInfo, progress: ProgressFn) => Promise<string>;
