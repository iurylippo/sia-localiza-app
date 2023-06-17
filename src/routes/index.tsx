import { Layout } from '@/components/layout';
import ErrorPage from '@/pages/error';
import { Home } from '@/pages/home';
import { Login } from '@/pages/login';
import { createBrowserRouter } from 'react-router-dom';
import { Main } from '@/pages/main';
import { Router } from './router';

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
