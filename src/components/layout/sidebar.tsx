import type React from 'react';
import { useRef } from 'react';
import classNames from 'classnames';
import { defaultNavItems } from './nav-Items';
import { useOnClickOutside } from 'usehooks-ts';
import { Link } from 'react-router-dom';
// define a NavItem prop
export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}
// add NavItem prop to component prop
interface Props {
  open: boolean;
  navItems?: NavItem[];
  setOpen: (open: boolean) => void;
}
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });
  return (
    <div
      className={classNames({
        'flex flex-col justify-between': true, // layout
        'bg-primary-500 text-zinc-50': true, // colors
        'md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed': true, // positioning
        'md:h-[calc(100vh_-_64px)] h-full w-[300px]': true, // for height and width
        'transition-transform .3s ease-in-out md:-translate-x-0': true, // animations
        '-translate-x-full ': !open, // hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="top-0 md:sticky md:top-16">
        {/* nav items */}
        <ul className="flex flex-col gap-2 py-2">
          {navItems.map((item, index) => {
            return (
              <Link key={index} to={item.href}>
                <li
                  className={classNames({
                    'text-indigo-100 hover:bg-title': true, // colors
                    'flex gap-4 items-center ': true, // layout
                    'transition-colors duration-300': true, // animation
                    'rounded-md p-2 mx-2': true, // self style
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      {/* account  */}
      <div className="p-4 border-t border-t-secondary-500">
        <div className="flex items-center gap-4">
          <img
            src={'https://www.w3schools.com/howto/img_avatar.png'}
            height={36}
            width={36}
            alt="profile image"
            className="rounded-full"
          />
          <div className="flex flex-col ">
            <span className="my-0 text-indigo-50">Usuario Test</span>
            <Link to="#" className="text-sm font-bold text-title">
              Ver perfil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
