import React from "react";
import TableNavbar from "../_components/TableNavbar";

interface TableProps {
    // Define props here if needed
}

const Table: React.FC<TableProps> = () => {
    return (
        <div className="h-full w-full">
            <TableNavbar />
            <div className="   h-full p-24">
                <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Project
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Client
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Done
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Target
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sprint
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Statut
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Start Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    End Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Operation
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Project A
                                </th>
                                <td className="px-6 py-4">Client 1</td>
                                <td className="px-6 py-4">150</td>
                                <td className="px-6 py-4">1000</td>
                                <td className="px-6 py-4">2/7</td>
                                <td className="px-6 py-4">In Progress</td>
                                <td className="px-6 py-4">24/03/2024</td>
                                <td className="px-6 py-4">24/04/2024</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        View Operation
                                    </a>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Project A
                                </th>
                                <td className="px-6 py-4">Client 1</td>
                                <td className="px-6 py-4">150</td>
                                <td className="px-6 py-4">1000</td>
                                <td className="px-6 py-4">2/7</td>
                                <td className="px-6 py-4">In Progress</td>
                                <td className="px-6 py-4">24/03/2024</td>
                                <td className="px-6 py-4">24/04/2024</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        View Operation
                                    </a>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Project A
                                </th>
                                <td className="px-6 py-4">Client 1</td>
                                <td className="px-6 py-4">150</td>
                                <td className="px-6 py-4">1000</td>
                                <td className="px-6 py-4">2/7</td>
                                <td className="px-6 py-4">In Progress</td>
                                <td className="px-6 py-4">24/03/2024</td>
                                <td className="px-6 py-4">24/04/2024</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        View Operation
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Project A
                                </th>
                                <td className="px-6 py-4">Client 1</td>
                                <td className="px-6 py-4">150</td>
                                <td className="px-6 py-4">1000</td>
                                <td className="px-6 py-4">2/7</td>
                                <td className="px-6 py-4">In Progress</td>
                                <td className="px-6 py-4">24/03/2024</td>
                                <td className="px-6 py-4">24/04/2024</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        View Operation
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Project A
                                </th>
                                <td className="px-6 py-4">Client 1</td>
                                <td className="px-6 py-4">150</td>
                                <td className="px-6 py-4">1000</td>
                                <td className="px-6 py-4">2/7</td>
                                <td className="px-6 py-4">In Progress</td>
                                <td className="px-6 py-4">24/03/2024</td>
                                <td className="px-6 py-4">24/04/2024</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        View Operation
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Project A
                                </th>
                                <td className="px-6 py-4">Client 1</td>
                                <td className="px-6 py-4">150</td>
                                <td className="px-6 py-4">1000</td>
                                <td className="px-6 py-4">2/7</td>
                                <td className="px-6 py-4">In Progress</td>
                                <td className="px-6 py-4">24/03/2024</td>
                                <td className="px-6 py-4">24/04/2024</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        View Operation
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Project A
                                </th>
                                <td className="px-6 py-4">Client 1</td>
                                <td className="px-6 py-4">150</td>
                                <td className="px-6 py-4">1000</td>
                                <td className="px-6 py-4">2/7</td>
                                <td className="px-6 py-4">In Progress</td>
                                <td className="px-6 py-4">24/03/2024</td>
                                <td className="px-6 py-4">24/04/2024</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        View Operation
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Project A
                                </th>
                                <td className="px-6 py-4">Client 1</td>
                                <td className="px-6 py-4">150</td>
                                <td className="px-6 py-4">1000</td>
                                <td className="px-6 py-4">2/7</td>
                                <td className="px-6 py-4">In Progress</td>
                                <td className="px-6 py-4">24/03/2024</td>
                                <td className="px-6 py-4">24/04/2024</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        View Operation
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
