import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="sticky bg-['rgba(209, 213, 218, 0.5)'] z-50 top-0 drop-shadow-xl py-3 md:py-8">
        <nav className="relative flex justify-between items-center py-1 px-6 md:px-10 lg:px-28">
          <h1 className="text-[32px] md:text-[42px]">
            <FaGithub />
          </h1>

          {/* Mobile Menu Hamburger */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer bg-white hover:bg-primary hover:rounded-lg"
          >
            {!menuOpen ? (
              <AiOutlineMenu
                size={35}
                className="text-primary hover:text-white "
              />
            ) : (
              <AiOutlineClose
                className="text-primary hover:text-white hover:rounded-lg p-1"
                size={35}
              />
            )}
          </div>

          {/* Medium and Large screen menu */}
          <ul className="hidden md:flex items-center text-base font-medium gap-10">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              <li className="hover:text-primary hover:underline cursor-pointer">
                Restaurants
              </li>
            </NavLink>
            <NavLink
              to="/recipes"
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              <li className="hover:text-primary hover:underline cursor-pointer">
                Recipes
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              <li className="hover:text-primary hover:underline cursor-pointer">
                About
              </li>
            </NavLink>
            <NavLink
              to="/pages"
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              <li className="hover:text-primary hover:underline cursor-pointer">
                Pages
              </li>
            </NavLink>
          </ul>
          <div className="hidden md:flex gap-4 items-center">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              <button className="btn btn-light">Login</button>
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              <button className="btn btn-primary">Sign Up</button>
            </NavLink>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <ul
              className={
                menuOpen
                  ? `md:hidden absolute flex flex-col text-center w-full top-[4.2rem] right-0 bg-white shadow-xl px-8 py-12 space-y-6 ease-in duration-500`
                  : `top-[-100%] ease-out duration-700`
              }
            >
              <NavLink
                onClick={() => setMenuOpen(false)}
                to="/"
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
              >
                <li className="hover:text-primary hover:underline cursor-pointer">
                  Restaurants
                </li>
              </NavLink>
              <NavLink
                onClick={() => setMenuOpen(false)}
                to="/recipes"
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
              >
                <li className="hover:text-primary hover:underline cursor-pointer">
                  Recipes
                </li>
              </NavLink>
              <NavLink
                onClick={() => setMenuOpen(false)}
                to="/about"
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
              >
                <li className="hover:text-primary hover:underline cursor-pointer">
                  About
                </li>
              </NavLink>
              <NavLink
                onClick={() => setMenuOpen(false)}
                to="/pages"
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
              >
                <li className="hover:text-primary hover:underline cursor-pointer">
                  Pages
                </li>
              </NavLink>
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
              >
                <li className="btn btn-light">Login</li>
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
              >
                <li
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary"
                >
                  Sign Up
                </li>
              </NavLink>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
