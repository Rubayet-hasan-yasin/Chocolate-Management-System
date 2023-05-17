import React from 'react';
import { GiChocolateBar } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />

            <Link to={'/newCocolate'}>
                <button className='flex items-center gap-3 border py-3 px-5 rounded-lg'><FaPlus /> New Chocolate <GiChocolateBar /></button>
            </Link>


            {/* table */}
            <div className="overflow-x-auto w-10/12 mx-auto my-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Home;