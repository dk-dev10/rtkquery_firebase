import { useFilePreview } from 'hook/useFilePreview';

export default function FilePreviewer() {
  const { filePreview, filePickerRef, previewFile, reset } = useFilePreview();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(filePickerRef.current.value);
    console.log(filePreview);
  }

  function handleReset(e) {
    e.preventDefault();
    e.target.reset();
    reset();
  }

  return (
    <div>
      <h1>Preview Image</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className='btn-container'>
          <input
            ref={filePickerRef}
            accept='image/*'
            multiple={false}
            onChange={previewFile}
            type='file'
            hidden
          />
          <button
            className='p-3 border px-6 border-black'
            onClick={() => filePickerRef.current.click()}
            type='button'
          >
            Choose
          </button>
          <button className='p-3 border px-6 border-black' type='reset'>
            reset
          </button>
          <button className='p-3 border px-6 border-black' type='submit'>
            submit
          </button>
        </div>
      </form>
      <button className='p-3' type='button'>
        x
      </button>
      <div className='my-5 overflow-hidden rounded-full h-96 w-96'>
        {filePreview != null && (
          <img
            src={filePreview}
            alt=''
            className='object-cover w-full h-full'
          />
        )}
      </div>
    </div>
  );
}
