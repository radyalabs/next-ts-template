export interface DroppableFileUploadProps {
  label: string;
  name: string;
  accept: string;
  mimeTypes: string[];
  uploadedFile?: {
    uploadedFileName?: string;
    uploadedFileLink?: string | undefined;
  }
  onDelete: () => void;
  onChange: (file: File) => void;
  loading?: boolean;
  classes?: {
    label?: string;
    container?: string;
    input?: string;
  }
  size?: number;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  dragAndDropText?: string;
}
