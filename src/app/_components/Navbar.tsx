import React from "react";

// Settings Icon
const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
    <path d="M17.414 9H19a1 1 0 011 1v1a1 1 0 01-1 1h-1.586l-.707.707A1 1 0 0115 13V12.586l-.707.707a1 1 0 01-1.414 0L12 12.586V13a1 1 0 01-1 1h-1a1 1 0 01-1-1v-.414l-.707.707a1 1 0 01-1.414 0L5 12.586V13a1 1 0 01-1 1H2.586A2.486 2.486 0 012 12V11c0-.365.097-.706.268-1H2a1 1 0 01-1-1V9a1 1 0 011-1h.268A2.486 2.486 0 012 7V6c0-.365.097-.706.268-1H2a1 1 0 011-1h1.414l.707-.707A1 1 0 016 3h1v.414l.707-.707a1 1 0 011.414 0L10 3.414V3a1 1 0 011-1h1a1 1 0 011 1v.414l.707-.707a1 1 0 011.414 0L15 3.414V3a1 1 0 011 1h1.414A2.486 2.486 0 0118 6v1c0 .365-.097.706-.268 1H19a1 1 0 011 1v1a1 1 0 01-1 1h-.268c.171.294.268.635.268 1v1a2.486 2.486 0 01-.268 1H17a1 1 0 01-1 1h-1v-.414l-.707.707a1 1 0 01-1.414 0L12 17.414V17a1 1 0 01-1-1h-1a1 1 0 01-1 1v.414l-.707-.707a1 1 0 01-1.414 0L5 16.586V17a1 1 0 01-1 1H2.586A2.486 2.486 0 012 16v-1c0-.365.097-.706.268-1H2a1 1 0 01-1-1V11a1 1 0 011-1h.268A2.486 2.486 0 012 10V9c0-.365.097-.706.268-1H2a1 1 0 01-1-1V7a1 1 0 011-1h.268A2.486 2.486 0 012 6V5a2.486 2.486 0 01.268-1H3a1 1 0 011-1V2.586A2.486 2.486 0 016 2h1c.365 0 .706.097 1 .268V2a1 1 0 011-1h1a1 1 0 011 1v.268c.294-.171.635-.268 1-.268h1a2.486 2.486 0 011 1V3a1 1 0 011 1h1.414A2.486 2.486 0 0118 5v1c0 .365-.097.706-.268 1H19a1 1 0 011 1v1z" />
  </svg>
);

// Notifications Icon
const NotificationsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
    <path d="M10 2a6 6 0 00-6 6v3.586l-.293.293A1 1 0 003 13v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-.293-.707L16 11.586V8a6 6 0 00-6-6zM8 18a2 2 0 004 0H8z" />
  </svg>
);

// Navbar Component
const Navbar: React.FC = () => {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="public/images/FMC2E.svg" alt="FMC2E LOGO" />
        </a>

        <div className="hidden md:flex w-full md:w-auto" id="navbar-default">
          <ul className="flex flex-col md:flex-row space-x-0 md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border-gray-100 rounded-lg text-white dark:bg-gray-800 md:dark:bg-transparent">
            <li><a href="#" className="py-2 px-3 rounded hover:text-orange-500">Dashboard</a></li>
            <li><a href="#" className="py-2 px-3 rounded hover:text-orange-500">Projects</a></li>
            <li><a href="#" className="py-2 px-3 rounded hover:text-orange-500">Commands</a></li>
            <li><a href="#" className="py-2 px-3 rounded hover:text-orange-500">Sprints</a></li>
            <li><a href="#" className="py-2 px-3 rounded hover:text-orange-500">Mapping</a></li>
            <li><a href="#" className="py-2 px-3 rounded hover:text-orange-500">Operators</a></li>
            <li><a href="#" className="py-2 px-3 rounded hover:text-orange-500">Expertise</a></li>
          </ul>
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-white hover:bg-gray-700 p-2 rounded-full">
            <NotificationsIcon />
          </button>
          <button className="text-white hover:bg-gray-700 p-2 rounded-full">
            <SettingsIcon />
          </button>
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
