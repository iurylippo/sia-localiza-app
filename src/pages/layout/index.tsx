import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <div>This is a layout for all components</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
