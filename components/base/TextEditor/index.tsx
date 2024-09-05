import {
  type ForwardedRef,
  forwardRef,
  useRef,
} from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Editor } from '@tinymce/tinymce-react';
import { type Editor as TinyMCEEditor } from 'tinymce';

import Label from '@/components/base/Label';
import { noop } from '@/utils';

import type { TextEditorProps } from './index.types';

import styles from './index.module.scss';

const TextEditor = forwardRef((
  props: TextEditorProps,
  forwardedRef: ForwardedRef<HTMLInputElement>,
) => {
  const {
    id,
    className,
    classes,
    error,
    label,
    labelLayout = 'vertical',
    message,
    name,
    required,
    showImagePicker,
    value,
    onChange = noop,
  } = props;
  const editorRef = useRef<TinyMCEEditor>();
  const {
    label: labelClass = '',
    container: containerClass = '',
    input: inputClass = '',
  } = classes || {};

  return (
    <FormControl className={`${className} ${containerClass}`}>
      <input
        id={id}
        name={name}
        style={{ display: 'none' }}
        ref={forwardedRef}
        value={value}
        required={required}
      />
      {!!label && (
        <Label
          id={id}
          labelLayout={labelLayout}
          className={`mb-2 ${labelClass}`}
          required={required}
          value={label}
        />
      )}
      <div className={`${inputClass} ${error ? styles.error : ''}`}>
        <Editor
          tinymceScriptSrc="/tinymce/tinymce.min.js"
          licenseKey="gpl"
          onInit={(_evt, editor) => {
            editorRef.current = editor;
          }}
          onEditorChange={onChange}
          value={value}
          init={{
            height: 275,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
              showImagePicker ? 'image' : '',
            ],
            toolbar: `undo redo | blocks | \
              bold italic forecolor | alignleft aligncenter | \
              alignright alignjustify | bullist numlist outdent indent | \
              removeformat | link ${showImagePicker ? 'image' : ''} | help`,
            image_advtab: true,
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            quickbars_selection_toolbar: `bold italic | quicklink h2 h3 blockquote \
              ${showImagePicker ? 'quickimage' : ''} quicktable`,
            contextmenu: 'link image table',
            image_title: true,
            automatic_uploads: true,
            file_picker_types: 'image',
            file_picker_callback(cb) {
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              // eslint-disable-next-line func-names
              input.onchange = function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line react/no-this-in-sfc
                const file = (this.files as File[])[0];

                const reader = new FileReader();
                reader.onload = () => {
                  const blobId = `blobid${(new Date()).getTime()}`;
                  if (editorRef.current) {
                    const { blobCache } = editorRef.current.editorUpload;
                    const base64 = String(reader.result || '').split(',')[1];
                    const blobInfo = blobCache.create(blobId, file, base64);
                    blobCache.add(blobInfo);

                    /* call the callback and populate the Title field with the file name */
                    cb(blobInfo.blobUri(), { title: file.name });
                  }
                };
                reader.readAsDataURL(file);
              };
              input.click();
            },
          }}
        />
      </div>
      {message && <FormHelperText error={error}>{message}</FormHelperText>}
    </FormControl>
  );
});

export default TextEditor;
