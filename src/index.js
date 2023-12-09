import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import { ApiContextProvider } from './context/ApiContext';
import Loader from './components/Loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiContextProvider>
      <BrowserRouter>
        <Loader />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ApiContextProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
