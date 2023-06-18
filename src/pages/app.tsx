import { router } from '@/routes';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '@/components/layout/toaster';
import '@/styles/global.css';
import '@/styles/modal.css';
import 'kalend/dist/styles/index.css';
import 'react-responsive-modal/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';

const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
