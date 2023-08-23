import React, { useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" flex justify-between bg-gray-100 px-4 py-5 mx-auto">
      {/* Logo section */}

      <div>
        <Link to="/" className="flex items-center">
          <BoltIcon className="w-6 h-6 text-blue-700" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            NextPage
          </span>
        </Link>
      </div>

      {/* nav Items  */}
      <div>
            <ul className="items-center  md:flex font-semibold text-gray-800">
                 <div onClick={() => setOpen(!open)}>
                    <span>
                        {
                            open === true ?
                            <XMarkIcon className="w-6 h-6 text-blue-700 md:hidden"/> 
                            : <Bars3BottomRightIcon className="w-6 h-6 text-blue-700 md:hidden"/>
                           
                        }
                    </span>
                 </div>
                <li className="md:ml-6">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "text-blue-800" : "")}
                >
                    Home
                </NavLink>
                </li>
                <li className="md:ml-6">
                <NavLink
                    to="/books"
                    className={({ isActive }) => (isActive ? "text-blue-800" : "")}
                >
                    Books
                </NavLink>
                </li>
                <li className="md:ml-6">
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "text-blue-800" : "")}
                >
                    About Us
                </NavLink>
                </li>
            </ul>
      </div>

      
    </nav>
  );
};

export default Header;
