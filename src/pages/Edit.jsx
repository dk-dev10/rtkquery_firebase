import { useEffect, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';
import {
  useAddBlogMutation,
  useGetBlogQuery,
  useUpdateBlogMutation,
} from '../redux/blogsapi';
import { useNavigate, useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';

const initState = {
  title: '',
  description: '',
};

const Edit = () => {
  const [data, setData] = useState(initState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const { title, description } = data;

  const [addBlog] = useAddBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();
  const navigate = useNavigate();

  const { id } = useParams();
  const { data: blog } = useGetBlogQuery(id ? id : skipToken);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && description) {
      if (id) {
        await updateBlog({ id, data });
        navigate('/');
      } else {
        await addBlog(data);
        navigate('/');
      }
    }
  };

  useEffect(() => {
    if (id && blog) setData({ ...blog });
  }, [id, blog]);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);

          switch (snapshot.state) {
            case 'paused':
              console.log('Paused');
              break;
            case 'running':
              console.log('Running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            console.log('img upload successfully');
            setData((prev) => ({ ...prev, img: downloadUrl }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

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
          type='file'
          name='photo'
          id='photo'
          className='border p-2'
          onChange={(e) => setFile(e.target.files[0])}
        />

        <input
          type='submit'
          value='send'
          className='border p-2 cursor-pointer bg-slate-500 text-white disabled:bg-slate-800 disabled:text-slate-400 disabled:cursor-not-allowed'
          // disabled={progress !== null && progress < 100}
          disabled={!title | !description | (id || !progress)}
        />
      </form>
    </div>
  );
};

export default Edit;
