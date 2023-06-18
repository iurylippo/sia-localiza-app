import { SideBarWrapper } from '@/components/sidebar-wrapper';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <SideBarWrapper>
      <Outlet />
    </SideBarWrapper>
  );
}
