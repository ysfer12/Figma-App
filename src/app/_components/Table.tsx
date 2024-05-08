import React from "react";
import TableNavbar from "../_components/TableNavbar";

// Props interface declaration for Table component (currently empty as no props are used)
interface TableProps { }

const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
        <path d="M15 8a3 3 0 11-6 0 3 3 0 016 0zm-3-7a3 3 0 100 6 3 3 0 000-6zm3 14a3 3 0 100 6 3 3 0 000-6zM7 9a3 3 0 100 6 3 3 0 000-6z" />
        <path fillRule="evenodd" d="M7.293 9.293a1 1 0 011.414 0L12 12.586l3.293-3.293a1 1 0 111.414 1.414L12.414 14l3.293 3.293a1 1 0 11-1.414 1.414L12 15.414l-3.293 3.293a1 1 0 01-1.414-1.414L10.586 14 7.293 10.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const Table: React.FC<TableProps> = () => {
    return (
        <div className="h-full w-full">
            <TableNavbar />
            <div className="h-full p-24">
                <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Project</th>
                                <th scope="col" className="px-6 py-3">Client</th>
                                <th scope="col" className="px-6 py-3">Done</th>
                                <th scope="col" className="px-6 py-3">Target</th>
                                <th scope="col" className="px-6 py-3">Sprint</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Start Date</th>
                                <th scope="col" className="px-6 py-3">End Date</th>
                                <th scope="col" className="px-6 py-3">Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <tr key={index} className={`border-b dark:border-gray-700 ${index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}`}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Project A</th>
                                    <td className="px-6 py-4">Client 1</td>
                                    <td className="px-6 py-4">150</td>
                                    <td className="px-6 py-4">1000</td>
                                    <td className="px-6 py-4">2/7</td>
                                    <td className="px-6 py-4">In Progress</td>
                                    <td className="px-6 py-4">24/03/2024</td>
                                    <td className="px-6 py-4">24/04/2024</td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="inline-flex items-center px-2 py-1 border border-gray-400 text-black hover:text-gray-600 rounded hover:underline">
                                            <ShareIcon />
                                            View Operation
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
