// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { Toaster } from 'sonner';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Provider store={store}>
      <AuthProvider>
        <App />
        <Toaster richColors />
      </AuthProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
