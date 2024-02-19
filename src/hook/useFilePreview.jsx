import { useRef, useState } from 'react';

export const useFilePreview = () => {
  const [filePreview, setFilePreview] = useState(null);
  const [sameFile, setSameFile] = useState(null);

  const filePickerRef = useRef(null);

  function reset() {
    filePickerRef.current.value = '';
    setFilePreview(null);
  }

  function previewFile(e) {
    const reader = new FileReader();
    const selectedFile = e.target.files[0];
    setSameFile(selectedFile);
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes('image')) {
        setFilePreview(readerEvent.target.result);
      }
    };
  }

  return {
    filePreview,
    filePickerRef,
    previewFile,
    setFilePreview,
    reset,
    sameFile,
  };
};
