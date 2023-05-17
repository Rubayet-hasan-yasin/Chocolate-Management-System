import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Chocolate Management System</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <button onClick={handleLogOut} className='btn btn-primary'>Log Out</button>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;