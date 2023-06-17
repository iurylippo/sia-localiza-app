import { createBrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { Layout } from '@/pages/layout';
import ErrorPage from '@/pages/error';
import { Home } from '@/pages/home';
import { Login } from '@/pages/login';
import { Main } from '@/pages/main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Router isPrivate={false} page={Main} />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Router isPrivate={false} page={Login} />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Router page={Home} />,
      },
    ],
  },
]);
