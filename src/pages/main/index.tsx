import { routeNames } from '@/routes/route-names';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(routeNames.PT.map.url);
  }, []);
  return <></>;
}
