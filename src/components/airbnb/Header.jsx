import { FaSearch, FaGlobe } from 'react-icons/fa';
import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi';
import { BsPersonCircle as ProfileIcon } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-3 p-5 bg-white sticky top-0 border shadow items-center justify-between z-50">
        {/* First */}
        <div className=" ">
          <img
            className="h-10 w-10 rounded-full"
            src="./src/assets/images/phoenix.jpg"
            alt=""
          />
        </div>
        {/* Middle */}
        <div className="flex border rounded-full p-1">
          <input
            type="text"
            placeholder="Start your search..."
            className="placeholder:text-gray-400 outline-none px-5 text-sm flex-grow bg-transparent md:shadow-sm"
          />
          <div className="hidden sm:inline bg-orange-600 rounded-full">
            <FaSearch className="text-white text-sm m-1 cursor-pointer" />
          </div>
        </div>
        {/* Last */}
        <div className="flex items-center justify-end space-x-4 text-gray-500">
          <p className="hidden sm:inline cursor-pointer text-sm">
            Become a host
          </p>
          <FaGlobe className="h-6 cursor-pointer" />
          <div className="flex space-x-2 border rounded-full p-1">
            <MenuIcon className="h-6 cursor-pointer" />
            <ProfileIcon className="h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
