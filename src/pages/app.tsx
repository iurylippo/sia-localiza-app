import { router } from '@/routes';
import '@/styles/global.css';
import { RouterProvider } from 'react-router-dom';

export function App() {
  return <RouterProvider router={router} />;
}
