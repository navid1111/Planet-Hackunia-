import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './layout.scss';
import HomePage from './routes/homepage/HomePage';
import ListPage from './routes/homepage/listPage/ListPage';
import LogInPage from './routes/logInPage/LogInPage';
import RegisterPage from './routes/registerPage/RegisterPage';
import SinglePage from './routes/singlePage/SinglePage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/news',
      element: ListPage,
    },
    {
      path: '/logIn',
      element: <LogInPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/news/:id',
      element: <SinglePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
