import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reporter from './pages/Reporter';
import Worklist from './pages/Worklist';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worklist" element={<Worklist />} />
          <Route path="/reporter" element={<Reporter />} /> 
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
