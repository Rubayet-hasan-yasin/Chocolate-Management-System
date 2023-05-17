import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext);
    // console.log(createUser);

    

    const handleRegister = event =>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card w-3/6 shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className='text-black text-center text-4xl font-bold mb-9'>Please Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <p className='text-xs mb-4 text-gray-800 font-bold'>Already Have An Account ? <Link to={'/login'} className='text-blue-500 underline'>Login</Link></p>
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;