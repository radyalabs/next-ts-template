import FormHelperText from '@mui/material/FormHelperText';

import Button from '@/components/base/Button';
import Label from '@/components/base/Label';
import Typography from '@/components/base/Typography';
import { IcAttach, IcTrash, IcUpload } from '@/components/icons';

import useFileUpload from './index.hooks';
import type { FileUploadProps } from './index.types';

const FileUpload = (props: FileUploadProps) => {
  const {
    accept = [],
    className = '',
    classes,
    error = false,
    label = '',
    required = false,
    message = '',
  } = props;

  const {
    isUploading,
    previewFile,
    uploadRef,
    handleDelete,
    handleUpload,
    handleUploadChange,
  } = useFileUpload(props);

  const {
    label: labelClass = '',
  } = classes || {};

  return (
    <div
      className={`${className}`}
    >
      <Label
        value={label}
        className={`${labelClass} mb-2`}
        required={required}
      />
      <Button
        className="w-full"
        color="primary"
        onClick={handleUpload}
        loading={isUploading}
      >
        Upload File
        <span><IcUpload className="fill-n-1" /></span>
      </Button>
      <input
        type="file"
        accept={accept.join(', ')}
        hidden
        ref={uploadRef}
        onChange={handleUploadChange}
      />
      {previewFile.length > 0 && (
        <div className="mt-2 w-full">
          {previewFile.map(({ name, newName }, i) => (
            <div key={newName} className="flex gap-2 hover:bg-n-3 p-2">
              <IcAttach />
              <Typography className="grow">
                {name}
              </Typography>
              <Button variant="text" className="p-0" onClick={() => handleDelete(i)}>
                <IcTrash className="[&>*]:fill-danger-500" />
              </Button>
            </div>
          ))}
        </div>
      )}
      {message && <FormHelperText error={error}>{message}</FormHelperText>}
    </div>
  );
};

export default FileUpload;
