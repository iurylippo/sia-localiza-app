import { useEffect, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

interface PrivateRouteProps extends PropsWithChildren {}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const navigate = useNavigate();
  const isAuthorized = true;

  useEffect(() => {
    if (!isAuthorized) {
      console.log(isAuthorized, 'login');
      navigate('/login');
    }
  }, []);

  return <>{children}</>;
}
