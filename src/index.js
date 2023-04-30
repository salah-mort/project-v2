import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLogin from './componets/mainLogin';
import Categories from './pages/categories';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import Sign from './pages/sign';
import SingleNews from './pages/singleNews';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/categories",
    element:<Categories/>,
  },
  {
    path: "/singleNews",
    element:<SingleNews/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
  {
    path: "/login",
    element:<Login/>,
  },
  {
    path: "/sign",
    element:<Sign/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
