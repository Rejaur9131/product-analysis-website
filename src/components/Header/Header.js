import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="link-container bg-indigo-600 p-3 font-semibold text-xl">
        <NavLink className={({ isActive }) => (isActive ? 'text-red-600 mr-4' : 'text-white mr-4')} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-red-600 mr-4' : 'text-white mr-4')} to="/reviews">
          Reviews
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-red-600 mr-4' : 'text-white mr-4')} to="/dashboard">
          Dashaboard
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-red-600 mr-4' : 'text-white mr-4')} to="/blogs">
          Blogs
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-red-600 mr-4' : 'text-white mr-4')} to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
