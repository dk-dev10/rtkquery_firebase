import DropdownOptions from 'components/dropdown/dropdownOptions';
import GoBack from 'components/goback';
import { useAuth } from 'hook/useAuth';
import { useFilePreview } from 'hook/useFilePreview';
import { Edit, Save } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useUploadFileMutation } from 'redux/service/storage/uploadFileApi';
import { useUpdateUserMutation } from 'redux/service/user/userApi';
import { role } from 'services/categories';
import { toast } from 'sonner';

const User = () => {
  const [isRead, setIsRead] = useState(true);
  const [userData, setUserData] = useState({
    avatar: null,
    email: '',
    name: '',
    about: '',
    id: null,
    role: 'user',
  });

  const { avatar, email, name, about } = userData;
  const { currentUser } = useAuth();

  const [uploadFile] = useUploadFileMutation();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  function onChangeValue(e) {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function onCancel() {
    setUserData((prev) => ({
      ...prev,
      ...currentUser.user,
      id: currentUser.id,
    }));
    setIsRead(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await updateUser(userData);
    setIsRead(true);
  }

  useEffect(() => {
    if (currentUser) {
      setUserData((prev) => ({
        ...prev,
        ...currentUser.user,
        id: currentUser.id,
      }));
    }
  }, [currentUser]);

  const { filePreview, filePickerRef, previewFile, sameFile } =
    useFilePreview();

  const handleChangeRole = (item) => {
    setUserData((prev) => ({ ...prev, role: item }));
  };

  useEffect(() => {
    const changeAvatar = async () => {
      try {
        const { data: imgUrl } = await uploadFile(sameFile);
        const updateData = { ...userData, avatar: imgUrl };

        await updateUser(updateData);
        toast.success('Avatar updated', {
          position: 'top-right',
        });
      } catch (error) {
        return { error };
      }
    };

    sameFile && changeAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sameFile]);

  return (
    <div>
      <GoBack>Profile</GoBack>
      <div className='w-full flex'>
        <div className='w-1/4 p-12 pt-0'>
          <div
            className='w-[250px] h-[250px] bg-slate-700 rounded-full group relative overflow-hidden z-20'
            onClick={() => filePickerRef.current.click()}
          >
            <img
              src={filePreview ? filePreview : avatar}
              alt='user avatar'
              className='w-full h-full rounded-full object-cover'
            />
            <div className='w-full h-full bg-[rgba(0,0,0, .8)] bg-[#00000032] flex justify-center items-center group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-opacity cursor-pointer'>
              <span className='border border-white text-white py-3 px-6 text-xs'>
                Select picture
              </span>
            </div>
          </div>
          <input
            ref={filePickerRef}
            onChange={previewFile}
            multiple={false}
            accept='image/*'
            type='file'
            hidden
          />
          <hr className='divide-x my-6  border-slate-400' />
        </div>

        <div className='w-3/4 pl-12 border-l border-slate-400'>
          <form onSubmit={handleSubmit} className='w-full'>
            <div className='w-full flex flex-col mb-6'>
              <label htmlFor='input' className='text-slate-700'>
                User Name
              </label>
              <input
                type='text'
                value={name}
                readOnly={isRead}
                placeholder='Name'
                id='input'
                className='border p-2 w-2/4  border-slate-400'
                name='name'
                onChange={onChangeValue}
              />
            </div>
            <div className='w-full flex flex-col mb-6'>
              <label htmlFor='mail' className='text-slate-700'>
                Email
              </label>
              <input
                type='text'
                value={email}
                readOnly={true}
                placeholder='Email'
                id='mail'
                className='border p-2 w-2/4  border-slate-400'
              />
            </div>
            <div className='w-full flex flex-col  mb-6'>
              <label htmlFor='about' className='text-slate-700'>
                About me
              </label>
              <textarea
                type='text'
                value={about}
                readOnly={isRead}
                placeholder='About'
                id='about'
                className='border p-2 w-2/4 min-h-60 max-h-80 resize-none  border-slate-400'
                name='about'
                onChange={onChangeValue}
              />
            </div>
            <div className='mb-6'>
              <DropdownOptions
                categorie={role}
                setCategoria={handleChangeRole}
                activeCategoria={userData.role}
                disabled={isRead}
              />
            </div>
            <div className='flex gap-4'>
              {isRead ? (
                <button
                  type='button'
                  onClick={() => setIsRead(false)}
                  className='w-28 justify-center px-4 py-2 flex items-center gap-2 text-lg border bg-slate-700 text-white'
                >
                  Edit <Edit className='h-5' />
                </button>
              ) : (
                <button
                  type='button'
                  onClick={onCancel}
                  className='w-28 justify-center px-4 py-2 flex items-center gap-2 border text-lg bg-slate-700 text-white'
                >
                  Cancel
                </button>
              )}
              {isRead ? null : (
                <button
                  type='submit'
                  className='w-28 justify-center items-center px-4 py-2 flex text-lg border text-slate-700 border-slate-700'
                  disabled={isLoading}
                >
                  Save
                  {!isLoading ? (
                    <Save className='h-5' />
                  ) : (
                    <span className='size-5 border-2 animate-spin border-l-[#c22322] rounded-full border-slate-700 ml-2'></span>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
