import { loginUser } from 'config/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    loginUser(email, password)
      .then(() => {
        alert('User signed in');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch((error) => {
        alert('Something went wrong!');
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3 className='text-3xl font-bold'>Login</h3>
      </div>
      <div>
        <input
          value={email}
          onChange={handleEmail}
          name='email'
          id='email'
          type='email'
          autoComplete='email'
          placeholder='Type your e-mail'
          className='w-56 border border-black px-4 py-2 my-4'
        />
      </div>
      <div>
        <input
          type='password'
          value={password}
          onChange={handlePassword}
          name='password'
          id='password'
          autoComplete='password'
          placeholder='Type your password'
          className='w-56 border border-black px-4 py-2 my-4'
        />
      </div>
      <button
        className='py-2 px-5 bg-black text-white text-xl border-none'
        onClick={handleSubmit}
      >
        Submit
      </button>
      <div className='text-lg'>
        Dont`t have an account? Register{' '}
        <span
          onClick={() => navigate('/register')}
          style={{ color: '#293462', fontWeight: 'bold', cursor: 'pointer' }}
        >
          here
        </span>
      </div>
    </div>
  );
};

export default Login;
