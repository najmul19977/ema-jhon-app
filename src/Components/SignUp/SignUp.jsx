import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const [error,setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const Confirm = form.Confirm.value;
        console.log(email,password,Confirm);
        setError('');

        if(password !== Confirm){
            setError('Your Password Not Match')
            return

        }
        else if(password.length < 6){
            setError('Password Must Be Six Character')
            return
        }
        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch (error =>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSignUp}>
            <div className='form-control'>
                <label htmlFor="">Email</label>
                <input type="email" name='email' id='' required placeholder='email'/>
                <label htmlFor="">Password</label>
                <input type="Password" name='password' id='' required placeholder='Password'/>
                <label htmlFor="">Confirm Password</label>
                <input type="Password" name='Confirm' id='' required placeholder='Password'/>
                

            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p className='text-error'>{error}</p>
        <p><small>Already Have an Account? <Link to="/login">Login</Link></small></p>
       
        
    </div>
    );
};

export default SignUp;