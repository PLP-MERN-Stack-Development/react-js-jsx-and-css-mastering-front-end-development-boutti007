import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <header className="shadow-sm border-b bg-white dark:bg-[#07102a] dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold">Task+API</h1>
          <nav className="hidden md:flex space-x-3 text-sm">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'opacity-80')}>Home</NavLink>
            <NavLink to="/posts" className={({ isActive }) => (isActive ? 'text-blue-600' : 'opacity-80')}>Posts</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-600' : 'opacity-80')}>About</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={toggle}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </Button>
        </div>
      </div>
    </header>
  );
}
