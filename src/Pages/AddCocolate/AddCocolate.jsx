import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


const AddCocolate = () => {
    const [selectValue, setSelectValue] = useState('white')
// console.log(selectValue);

    const handleSubmit=event=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const country = form.country.value;

        console.log(email,country,selectValue);
    }


    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Link to={'/'}>
                <button className='flex items-center gap-3 border py-3 px-5 rounded-lg'><FaArrowLeft /> All Chocolates</button>
            </Link>

            <div className='mx-auto my-10 bg-orange-100 rounded-lg p-20'>
                <div>
                    <h1 className='text-3xl font-bold text-center'>New Chocolates</h1>
                    <p className='text-center text-gray-400'>Use the below form to create a new product</p>
                </div>


                <form onSubmit={handleSubmit} className='w-1/2 mx-auto'>
                    <div className='relative z-0 w-full mb-6'>
                        <input type="text" name="email" id="floating_email" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' />
                        <label htmlFor="floating_email" className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Name</label>
                    </div>
                    <div className='relative z-0 w-full mb-6'>
                        <input type="text" name="country" id="floating_email" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' />
                        <label htmlFor="floating_email" className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Country</label>
                    </div>
                    <div>
                        <label htmlFor="underline_select" className="sr-only">Underline select</label>
                        <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(e)=>setSelectValue(e.target.value)} >
                            <option value="white">White chocolate</option>
                            <option value="milk">Milk chocolate</option>
                            <option value="dark">Dark chocolate</option>
                        </select>
                    </div>
                    <input type="submit" value="Save" className='btn w-full mt-10' />
                </form>
            </div>
        </div>
    );
};

export default AddCocolate;