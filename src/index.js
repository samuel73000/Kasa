import React from 'react';
import { createRoot } from 'react-dom';
import { RouterProvider } from 'react-router-dom'
import "./styles/index.css"
import router from './router';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
