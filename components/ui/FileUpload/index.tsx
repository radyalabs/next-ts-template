import Image from 'next/image';

import FormHelperText from '@mui/material/FormHelperText';

import Button from '@/components/base/Button';
import Label from '@/components/base/Label';
import Spinner from '@/components/base/Spinner';
import Typography from '@/components/base/Typography';
import { IcNote } from '@/components/icons';
import Droppable from '@/components/ui/Droppable';

import useFileUpload from './index.hooks';
import type { FileUploadProps } from './index.types';

const FileUpload = (props: FileUploadProps) => {
  const {
    accept = [],
    className = '',
    classes,
    description = 'Drag and Drop a file in your browser',
    error = false,
    label = '',
    required = false,
    message = '',
    title = 'Upload File',
  } = props;

  const {
    isUploading,
    previewFile,
    uploadRef,
    handleDrop,
    handleUpload,
    handleUploadChange,
    handleDeleteFile,
  } = useFileUpload(props);

  const {
    label: labelClass = '',
    input: inputClass = '',
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
      <Droppable className="w-full" onDrop={handleDrop}>
        <div
          className={`${inputClass} border-2 border-dashed border-n-7 p-10
            rounded-xl flex flex-col justify-center items-center gap-2.5 mb-2`}
        >
          {isUploading && <Spinner width={80} height={80} className="p-6" />}
          {!isUploading && (
            <>
              {!previewFile ? (
                <>
                  <Typography variant="title">
                    {title}
                  </Typography>
                  <Typography variant="body" align="center">
                    {description}
                    <br />
                    or
                  </Typography>
                  <Button color="primary" onClick={handleUpload}>
                    Choose a file to upload
                  </Button>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center gap-2">
                    {(previewFile.name.includes('.jpg') || previewFile.name.includes('.png') || previewFile.name.includes('.jpeg')) ? (
                      <Image
                        className="bg-n-5"
                        draggable={false}
                        src={previewFile.url}
                        alt="File image preview"
                        width={160}
                        height={60}
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    ) : (
                      <IcNote width={64} height={64} />
                    )}
                    <Typography className="flex items-center gap-2">
                      {previewFile.name}
                    </Typography>
                  </div>
                  <div className="flex justify-end gap-4 mt-2 *:shadow">
                    <Button color="primary" onClick={handleUpload}>
                      Change file
                    </Button>
                    <Button
                      color="primary"
                      className="ml-4 bg-n-2"
                      variant="outline"
                      onClick={handleDeleteFile}
                    >
                      Delete File
                    </Button>
                  </div>
                </div>
              )}
              <input
                type="file"
                accept={accept.join(', ')}
                hidden
                ref={uploadRef}
                onChange={handleUploadChange}
              />
            </>
          )}
        </div>
        {message && (
          <FormHelperText error={error}>
            {message}
          </FormHelperText>
        )}
      </Droppable>
    </div>
  );
};

export default FileUpload;
