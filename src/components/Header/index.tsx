import { Link } from '@tanstack/react-router';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

import { Image } from '@components';
import { useTheme } from '@contexts';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="backdrop-brightness-150 shadow-md">
      <div className="max-w-7xl mx-auto flex items-stretch justify-between">
        <Link
          to="/"
          className="flex justify-start items-center gap-4 text-2xl font-bold text-gray-800 dark:text-white px-4 py-4````"
        >
          <Image className="w-9 h-9" alt="bitpin" src="/placeholder.png" />
          <h2>BitPin</h2>
        </Link>

        <nav className="flex justify-start items-stretch grow">
          <Link
            to="/"
            className="px-4 py-4"
            activeProps={{
              className: 'text-green-700',
            }}
          >
            لیست بازارها
          </Link>
          <Link
            to="/orders"
            className="text-gray-600 px-4 py-4"
            activeProps={{
              className: 'text-green-700',
            }}
          >
            سفارشات
          </Link>
        </nav>

        <button
          onClick={toggleTheme}
          className="relative flex self-center items-center justify-center h-6 w-10 rounded-full bg-gray-300 dark:bg-neutral-600 transition duration-200 ease-in-out mx-2"
        >
          <span
            className={`absolute left-1 top-1 h-4 w-4 flex items-center justify-center rounded-full bg-white shadow transform transition duration-200 ease-in-out ${theme === 'light' ? 'translate-x-4' : 'translate-x-0'}`}
          >
            {theme === 'light' ? (
              <SunIcon className="h-4 w-4 text-yellow-500" />
            ) : (
              <MoonIcon className="h-4 w-4 text-gray-800" />
            )}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
