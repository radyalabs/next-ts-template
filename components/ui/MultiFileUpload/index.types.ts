export interface FileUploadProps {
  accept?: string[];
  className?: string;
  classes?: {
    label?: string;
    input?: string;
  };
  description?: string;
  error?: boolean;
  label?: string;
  loading?: boolean;
  message?: string;
  name?: string;
  onChange?: (value: string[] | undefined) => void;
  onDelete?: () => void;
  required?: boolean;
  // file size in MB
  size?: number;
  title?: string
  uploadEndpoint?: string;
  value?: string[];
}

export interface StorageFile {
  name: string;
  newName: string;
}
