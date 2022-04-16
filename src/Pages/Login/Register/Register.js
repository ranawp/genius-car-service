import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    if (user) {
        navigate('/home')
    }


    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="text" placeholder='Your Name' id="" /> <br />
                <input type="email" name="email" id="" placeholder='email Address' required />
                <br />
                <input type="password" name="password" placeholder='password' id="" />
                <input type="submit" value="Register" />

            </form>
            <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none' >Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;