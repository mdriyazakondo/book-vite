import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState("Home");
  const navLinks = (
    <>
      <li onClick={() => setIsActive("Home")}>
        <NavLink
          className={`${
            isActive === "Home"
              ? "text-green-500 border border-green-500"
              : "text-gray-600"
          } ml-3`}
          to={"/"}
        >
          Home
        </NavLink>
      </li>

      <li onClick={() => setIsActive("Listed Books")}>
        <NavLink
          className={`${
            isActive === "Listed Books"
              ? "text-green-500 border border-green-500"
              : "text-gray-600"
          } ml-3`}
          to="/listedBook"
        >
          Listed Books
        </NavLink>
      </li>
      <li onClick={() => setIsActive("Pages to Read")}>
        <NavLink
          className={`${
            isActive === "Pages to Read"
              ? "text-green-500 border border-green-500"
              : "text-gray-600"
          } ml-3`}
          to="/readBook"
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1600px] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-6">
            <button className="bg-green-400 text-white py-1.5 px-3 md:px-6 cursor-pointer rounded-md text-sm md:text-xl font-medium">Sign In</button>
            <button className="bg-blue-400 text-white py-1.5 px-3 md:px-6 cursor-pointer rounded-md text-sm md:text-xl font-medium">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
