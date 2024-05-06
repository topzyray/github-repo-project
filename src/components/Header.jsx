import React from 'react';
import logo from '../assets/images/Logo-Header.svg';

const Header = () => {
  return (
    <header className="py-[64px] flex justify-between items-center">
      <div className="flex gap-1 items-center">
        <div className="w-8 h-8 bg-yellow rounded-full flex justify-center items-center">
          <span className="w-1.5 h-4 bg-white block rotate-45"></span>
        </div>
        <h2 className="text-lg md:text-2xl font-semibold text-white">TeamFlow</h2>
      </div>

      <nav>
        <ul className="hidden md:flex gap-8 text-white text-lg font-semibold">
          <li>Product</li>
          <li>Solution</li>
          <li>Enterprise</li>
          <li>Pricing</li>
        </ul>
      </nav>

      <div className="hidden lg:flex items-center gap-6 text-lg font-semibold">
        <p className='btn te'>Login</p>
        <button className="btn btn-yellow">Sign Up</button>
      </div>

      {/* Hamburger menu */}
      <button className=''>Menu</button>
    </header>
  );
};

export default Header;
