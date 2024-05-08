import React from "react";

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L12 14.414V20a1 1 0 01-1.707.707L7 18.414V6H3V4z" />
    </svg>
);

const RefreshIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M5.293 7.293l1.414 1.414A6.5 6.5 0 1112 19.5a6.5 6.5 0 01-6.5-6.5h3M19 10a6.5 6.5 0 100 5h3" />
    </svg>
);

const TableNavbar: React.FC = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-4 px-10">

                {/* Left Section with smaller font for "Projects" */}
                <div className="flex items-center">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Projects
                        </span>
                    </a>
                </div>

                {/* Center Section for List/Grid View */}
                <div className="flex-grow flex items-center justify-center">
                    <ul className="flex space-x-4 rtl:space-x-reverse">
                        <li>
                            <a href="#" className="text-blue-700 hover:text-blue-800 dark:text-white dark:hover:text-gray-200">
                                List View
                            </a>
                        </li>
                        <li>
                            <span className="text-gray-400">|</span>
                        </li>
                        <li>
                            <a href="#" className="text-blue-700 hover:text-blue-800 dark:text-white dark:hover:text-gray-200">
                                Grid View
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Section for Icons and Button with smaller font for "+ ADD NEW PROJECT" */}
                <div className="flex items-center">
                    <button className="p-2 rounded-md hover:bg-gray-200">
                        <SearchIcon />
                    </button>
                    <button className="p-2 rounded-md hover:bg-gray-200">
                        <FilterIcon />
                    </button>
                    <button className="p-2 rounded-md hover:bg-gray-200">
                        <RefreshIcon />
                    </button>
                    <button className="ml-3 bg-blue-500 border-2 border-transparent text-white hover:bg-blue-700 hover:border-blue-900 py-2 px-4 rounded-md transition duration-150 ease-in-out">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            + ADD NEW PROJECT
                        </span>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default TableNavbar;
