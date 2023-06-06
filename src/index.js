import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import { ROUTES } from './components/routes';
import "./App.css"

const router = createBrowserRouter(ROUTES)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
);