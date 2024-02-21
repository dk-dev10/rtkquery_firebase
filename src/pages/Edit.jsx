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
import { readingTime } from 'services/readingTime';
import { X } from 'lucide-react';
import { useAuth } from 'hook/useAuth';

const initState = {
  title: '',
  description: '',
  img: null,
  categories: 'art',
  content: [
    {
      type: 'text',
      text: '',
    },
  ],
  duration: 2,
  author: {
    name: '',
    id: '',
  },
  comment: null,
  data: null,
};

const Edit = () => {
  const { currentUser } = useAuth();
  const [data, setData] = useState(initState);
  const { title, description } = data;

  const [file, setFile] = useState(null);
  const [maxCount, setMaxCount] = useState(0);

  const [uploadFiles] = useUploadFileMutation();

  const [addBlog] = useAddBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();
  const navigate = useNavigate();

  const { id } = useParams();
  const { data: blog } = useGetBlogQuery(id ? id : skipToken);

  const { filePreview, filePickerRef, previewFile, sameFile } =
    useFilePreview();

  const contentText = { text: '', type: 'text' };
  const contentQuote = { text: '', type: 'quote', author: '' };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...data.content];
    list[index] = { ...list[index], [name]: value };

    setData((prev) => ({
      ...prev,
      content: list,
    }));
  };

  const handleRemoveClick = (index) => {
    const list = [...data.content];
    list.splice(index, 1);
    setData((prev) => ({ ...prev, content: list }));
  };

  const handleAddClick = (type) => {
    setData((prev) => ({ ...prev, content: [...prev.content, type] }));
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const strs = data.description + data.content.map((item) => item.text);
    const blogData = {
      ...data,
      duration: readingTime(strs),
      author: {
        name: currentUser.user.name,
        id: currentUser.user.id,
      },
    };

    if (id) {
      const { data: imgUrl } = await uploadFiles(file);
      await updateBlog({ id, blogData, imgUrl });
      toast.success('Article updated', {
        position: 'top-right',
      });
      navigate('/');
    } else {
      const { data: imgUrl } = await uploadFiles(file);
      await addBlog({ blogData, imgUrl });
      navigate('/');
    }
  };

  useEffect(() => {
    if (id && blog)
      setData((prev) => ({
        ...prev,
        ...blog,
      }));
  }, [id, blog, currentUser]);

  useEffect(() => {
    if (sameFile) setFile(sameFile);
  }, [file, sameFile]);

  useEffect(() => {
    setMaxCount(data.description.length);
  }, [data, maxCount]);

  return (
    <div className='m-auto p-[15px] mt-10 border w-[50vw]'>
      <h2 className='text-center text-3xl'>Create blog</h2>
      <form onSubmit={handleSubmit} className='mt-4 flex flex-col gap-8'>
        <div className='flex flex-col'>
          <label htmlFor='titleArticle'>Title</label>
          <input
            onChange={handleChange}
            className='border p-2'
            placeholder='Title'
            id='titleArticle'
            value={title}
            name='title'
            type='text'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='description' className='flex'>
            Description <span className='ml-auto'>{maxCount}/250</span>
          </label>
          <textarea
            placeholder='Description'
            onChange={handleChange}
            className='border p-2'
            value={description}
            name='description'
            id='description'
            maxLength={250}
            cols='30'
            rows='5'
          ></textarea>
        </div>
        <input
          ref={filePickerRef}
          onChange={previewFile}
          multiple={false}
          accept='image/*'
          type='file'
          hidden
        />
        <button
          className='p-3 border px-6 border-black'
          onClick={() => filePickerRef.current.click()}
          type='button'
        >
          Select picture
        </button>
        <div className='w-full aspect-video overflow-hidden border'>
          {(filePreview || data?.img) && (
            <img
              src={filePreview ? filePreview : data.img}
              className='w-full h-full object-cover'
              alt='preview image'
            />
          )}
        </div>

        {data.content.map((inp, i) => {
          return inp.type === 'text' ? (
            <div className='flex flex-col' key={i + inp.type}>
              <div className='flex'>
                Content Text
                {data.content.length !== 1 && (
                  <button
                    className='ml-auto p-1 border-slate-800 border bg-red-400'
                    onClick={() => handleRemoveClick(i)}
                    type='button'
                  >
                    <X />
                  </button>
                )}
              </div>
              <textarea
                onChange={(e) => handleInputChange(e, i)}
                placeholder='Content text'
                className='border p-2'
                value={inp.text}
                name='text'
                cols='30'
                rows='5'
              ></textarea>
            </div>
          ) : (
            <div className='flex flex-col gap-y-3' key={i + inp.type}>
              <div className='flex'>
                Content Text
                {data.content.length !== 1 && (
                  <button
                    className='ml-auto p-1 border-slate-800 border bg-red-400'
                    onClick={() => handleRemoveClick(i)}
                    type='button'
                  >
                    <X />
                  </button>
                )}
              </div>
              <input
                onChange={(e) => handleInputChange(e, i)}
                className='border p-2'
                placeholder='Author'
                value={inp.author}
                name='author'
                type='text'
              />
              <textarea
                onChange={(e) => handleInputChange(e, i)}
                placeholder='Description'
                className='border p-2'
                value={inp.text}
                name='text'
                cols='30'
                rows='5'
              ></textarea>
            </div>
          );
        })}
        <div className='w-full flex gap-3'>
          <button
            className='w-full p-2 border border-slate-800'
            onClick={() => handleAddClick(contentText)}
            type='button'
          >
            Content Text
          </button>
          <button
            className='w-full p-2 border border-slate-800'
            onClick={() => handleAddClick(contentQuote)}
            type='button'
          >
            Content Quote
          </button>
        </div>
        <input
          className='border p-2 cursor-pointer bg-slate-500 text-white disabled:bg-slate-800 disabled:text-slate-400 disabled:cursor-not-allowed'
          disabled={!title | !description}
          type='submit'
          value='send'
        />
      </form>
    </div>
  );
};

export default Edit;
