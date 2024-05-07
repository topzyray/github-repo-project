import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center text-primary ">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-3xl font-semibold">Page not found</p>
        <NavLink to="/" className="underline">
          Go back home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
