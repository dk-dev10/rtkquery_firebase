import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import {
  useAddBlogMutation,
  useGetBlogQuery,
  useUpdateBlogMutation,
} from 'redux/service/blog/blogApi';
import { useFilePreview } from 'hook/useFilePreview';
import { useUploadFileMutation } from 'redux/service/storage/uploadFileApi';
import { toast } from 'sonner';

const initState = {
  title: '',
  description: '',
  img: null,
  categories: 'art',
  content: [
    {
      type: 'text',
      text: `Porttitor rhoncus dolor purus non enim praesent elementum. 
      Eget dolor morbi non arcu risus quis varius.
       Posuere ac ut consequat semper viverra nam libero.`,
    },
    {
      type: 'quote',
      text: 'Porttitor rhoncus dolor purus non enim praesent elementum.',
      author: 'Mr. Albin',
    },
  ],
  duration: 2,
  author: {
    name: '',
    id: '',
  },
  comment: null,
};

const Edit = () => {
  const [data, setData] = useState(initState);
  const [file, setFile] = useState(null);
  const { title, description } = data;

  const [uploadFiles] = useUploadFileMutation();

  const [addBlog] = useAddBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();
  const navigate = useNavigate();

  const { id } = useParams();
  const { data: blog } = useGetBlogQuery(id ? id : skipToken);

  const { filePreview, filePickerRef, previewFile, sameFile } =
    useFilePreview();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && description) {
      if (id) {
        const { data: imgUrl } = await uploadFiles(file);
        await updateBlog({ id, data, imgUrl });
        toast.success('Article updated', {
          position: 'top-right',
        });
        navigate('/');
      } else {
        await addBlog(data);
        navigate('/');
      }
    }
  };
  useEffect(() => {
    if (id && blog) setData((prev) => ({ ...prev, ...blog }));
  }, [id, blog]);

  useEffect(() => {
    if (sameFile) setFile(sameFile);
  }, [file, sameFile]);

  return (
    <div className='m-auto p-[15px] mt-10 border w-[50vw]'>
      <h2 className='text-center text-3xl'>Create blog</h2>
      <form onSubmit={handleSubmit} className='mt-4 flex flex-col gap-4'>
        <input
          type='text'
          placeholder='title'
          className='border p-2'
          name='title'
          onChange={handleChange}
          value={title}
        />
        <textarea
          name='description'
          id='description'
          cols='30'
          rows='5'
          className='border p-2'
          onChange={handleChange}
          value={description}
        ></textarea>
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
        <div className='w-full aspect-video overflow-hidden'>
          <img
            src={filePreview ? filePreview : data.img}
            alt='preview image'
            className='w-full h-full object-cover'
          />
        </div>
        <input
          type='submit'
          value='send'
          className='border p-2 cursor-pointer bg-slate-500 text-white disabled:bg-slate-800 disabled:text-slate-400 disabled:cursor-not-allowed'
          disabled={!title | !description}
        />
      </form>
    </div>
  );
};

export default Edit;
