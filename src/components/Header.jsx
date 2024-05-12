import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="sticky bg-[#2c2727] text-white z-50 top-0 drop-shadow-xl py-3 md:py-8">
        <nav className="relative flex justify-between items-center py-1 px-6 md:px-10 lg:px-28">
          <h1 className="text-[32px] md:text-[42px]">
            <FaGithub />
          </h1>

          {/* Mobile Menu Hamburger */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer hover:bg-white hover:text-black hover:rounded-lg"
          >
            {!menuOpen ? (
              <AiOutlineMenu size={35} className="text-primary" />
            ) : (
              <AiOutlineClose
                className="text-primary hover:rounded-lg p-1"
                size={35}
              />
            )}
          </div>

          {/* Medium and Large screen menu */}
          <div className="hidden md:flex gap-16 items-center text-lg">
            <NavLink
              to="https://github.com/topzyray"
              target="_blank"
              className={({ isActive }) => (isActive ? "" : "hover:underline")}
            >
              <p className="">Github</p>
            </NavLink>
            <NavLink
              to="https://linkedin.com/in/taiwotopesunday"
              target="_blank"
              className={({ isActive }) => (isActive ? "" : "hover:underline")}
            >
              <p className="">Linkedin</p>
            </NavLink>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <ul
              className={
                menuOpen
                  ? `md:hidden absolute flex flex-col text-center text-[#2c2727] w-full top-[3.4rem] right-0 bg-white shadow-xl px-8 py-12 space-y-6 ease-in duration-500`
                  : `top-[-100%] ease-out duration-700`
              }
            >
              <NavLink
                to="https://github.com/topzyray"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:underline"
                }
              >
                <li className="">Github</li>
              </NavLink>
              <NavLink
                to="https://linkedin.com/in/taiwotopesunday"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:underline"
                }
              >
                <li onClick={() => setMenuOpen(false)} className="">
                  Linkedin
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
