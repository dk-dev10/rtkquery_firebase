import { useAuth } from 'hook/useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddUserMutation } from 'redux/service/blog/blogApi';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addUser] = useAddUserMutation();

  const { registerUser } = useAuth();

  const navigate = useNavigate();

  const handleRegister = () => {
    registerUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        addUser({
          id: user.uid,
          email: email,
        });
        alert('User created successfully!');
      })
      .catch((error) => {
        alert('Something went wrong!');
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3 className='text-3xl font-bold'>Register</h3>
      </div>
      <div>
        <input
          value={email}
          onChange={handleEmail}
          placeholder='Type your e-mail'
          className='w-56 border border-black px-4 py-2 my-4'
        />
      </div>
      <div>
        <input
          type='password'
          value={password}
          onChange={handlePassword}
          placeholder='Type your password'
          className='w-56 border border-black px-4 py-2 my-4'
        />
      </div>
      <button
        className='py-2 px-5 bg-black text-white text-xl border-none'
        onClick={handleRegister}
      >
        Submit
      </button>
      <div className='text-lg'>
        Already have an account? Please{' '}
        <span
          onClick={() => navigate('/login')}
          style={{ color: '#293462', fontWeight: 'bold', cursor: 'pointer' }}
        >
          sign in
        </span>
      </div>
    </div>
  );
};

export default Register;
