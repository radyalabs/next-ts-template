import Image from 'next/image';

import Button from '@/components/base/Button';
import Label from '@/components/base/Label';
import Spinner from '@/components/base/Spinner';
import Typography from '@/components/base/Typography';
import { IcAlert, IcNote } from '@/components/icons';
import Droppable from '@/components/ui/Droppable';

import useFileUpload from './index.hooks';
import type {
  DroppableFileUploadProps,
} from './index.types';

const DroppableFileUpload = (props: DroppableFileUploadProps) => {
  const {
    label = '',
    classes,
    uploadedFile,
    accept = '',
    loading,
    required = false,
    error = false,
    errorMessage = '',
    dragAndDropText = '',
  } = props;

  const {
    error: errorUpload,
    importedFile,
    uploadRef,
    handleDrop,
    handleUpload,
    handleUploadChange,
    handleDeleteFile,
  } = useFileUpload(props);

  const {
    uploadedFileName = '',
    uploadedFileLink = '',
  } = uploadedFile || {};

  const {
    label: labelClass = '',
    input: inputClass = '',
    container: containerClass = '',
  } = classes || {};

  const fileTypes = accept.split(', ').map((type) => type.trim()).join(' or ');
  return (
    <div
      className={`${containerClass}`}
    >
      <Label
        value={label}
        className={`${labelClass}`}
        required={required}
      />
      <Droppable className="w-full" onDrop={handleDrop}>
        <div
          className={`${inputClass} h-96 border-2 border-dashed border-n-7
            rounded-xl flex flex-col justify-center items-center gap-2.5`}
        >
          {loading && (
            <div className="flex justify-center items-center w-full min-h-[300px]">
              <Spinner width={80} height={80} />
            </div>
          )}
          {!loading && (
            <>
              {!uploadedFileName ? (
                <>
                  <Typography variant="title">
                    Upload
                    {' '}
                    {label}
                  </Typography>
                  {dragAndDropText ? (
                    <Typography variant="body" align="center">
                      {dragAndDropText}
                      <br />
                      or
                    </Typography>
                  ) : (
                    <Typography variant="body" align="center">
                      Drag and Drop a file
                      {' '}
                      {fileTypes}
                      {' '}
                      anywhere or browser your file
                      <br />
                      or
                    </Typography>
                  )}
                  <Button color="primary" onClick={handleUpload}>
                    Choose a file to upload
                  </Button>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center gap-2">
                    {(uploadedFileName.includes('.pdf') || uploadedFileName.includes('.docx')) ? (
                      <IcNote width={64} height={64} />
                    ) : (
                      <Image
                        className="rounded-xl"
                        src={!importedFile
                          ? uploadedFileLink
                          : String(URL.createObjectURL(importedFile))}
                        alt="File image preview"
                        width={320}
                        height={120}
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    )}

                    <Typography className="flex items-center gap-2">
                      {uploadedFileName}
                    </Typography>
                  </div>
                  <div className="flex justify-end gap-4 mt-2">
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
                accept={accept}
                hidden
                ref={uploadRef}
                onChange={handleUploadChange}
              />
              {error && (
                <div className="flex gap-2 mt-5 items-center">
                  <div
                    className="h-4 w-4 bg-danger-500 rounded-full flex justify-center items-center"
                  >
                    <IcAlert width={12} height={12} className="fill-n-1" />
                  </div>
                  <Typography className="text-danger-500">
                    {errorMessage}
                  </Typography>
                </div>
              )}
              {errorUpload && (
                <div className="flex gap-2 mt-5 items-center">
                  <div
                    className="h-4 w-4 bg-danger-500 rounded-full flex justify-center items-center"
                  >
                    <IcAlert width={12} height={12} className="fill-n-1" />
                  </div>
                  <Typography className="text-danger-500">
                    {errorUpload}
                  </Typography>
                </div>
              )}
            </>
          )}
        </div>
      </Droppable>
    </div>
  );
};

export default DroppableFileUpload;
