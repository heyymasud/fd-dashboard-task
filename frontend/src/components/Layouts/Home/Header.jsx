import { useState } from "react";
import { GoBell } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
    console.log(dropDown);
  };

  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <div className="flex justify-between items-center py-4 px-5">
      <div>
        <h1 className="text-xs">Welcome Back!</h1>
        <p className="text-xl font-semibold">Masud</p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="flex items-center space-x-5">
          <button className="relative text-2xl text-gray-600">
            <GoBell size={28} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
              9
            </span>
          </button>
          <img
            className="w-9 rounded-full cursor-pointer border-4 border-indigo-400 relative "
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="profile"
            onClick={handleDropDown}
          />
          <ul
            className={`${dropDown ? "absolute" : "hidden"} top-16 text-slate-600 text-sm xl:text-base right-3 bg-slate-100 rounded-b-lg xl:shadow-2xl xl:py-1 xl:w-52 cursor-pointer z-10`}
          >
            <li
              className={` font-medium px-3 py-4 hover:text-indigo-500 hover:bg-indigo-100 border-b`}
            >
              My Profile
            </li>
            <li
              className={` font-medium px-3 py-4 hover:text-indigo-500 hover:bg-indigo-100 border-b flex gap-2 items-center`}
              onClick={handleLogout}
            >
              Log Out <LuLogOut size={20} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
