import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleForgetPassword = () => {
        Swal.fire({
            title: 'Relax and remember your password 😊',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Thanks',
        })
    }

    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })

    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card w-3/6 shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className='text-black text-center text-4xl font-bold mb-9'>Please Login</h2>
                    <form onSubmit={handleLogIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <button onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <p className='text-xs mb-4 text-gray-800 font-bold'>Dont't Have An Account ? <Link to={'/register'} className='text-blue-500 underline'>Register</Link></p>
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;