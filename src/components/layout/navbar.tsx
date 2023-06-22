import { AlignJustifyIcon } from 'lucide-react';
import classNames from 'classnames';
import { siaLocalizaLogo } from '@/assets';
interface Props {
  onMenuButtonClick: () => void;
}
const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        'bg-white text-zinc-500': true, // colors
        'flex items-center': true, // layout
        'w-full fixed z-10 px-4 shadow-sm h-16': true, // positioning & styling
      })}
    >
      <div className="w-12 h-12 text-lg font-bold rounded">
        <img
          className="overflow-hidden rounded"
          src={siaLocalizaLogo}
          alt="logo"
        />
      </div>
      <div className="flex-grow"></div> {/** spacer */}
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <AlignJustifyIcon className="w-6 h-6" />
      </button>
    </nav>
  );
};
export default Navbar;
