import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.password.value) 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const passowrd = event.target.passowrd.value;
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
        </div>
    );
};

export default Register;