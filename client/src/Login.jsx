import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassWord] = useState()
    const navigate = useNavigate()

    const handelSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/login", {email, password})
        .then(result => {            
            if(result.data === "Success"){
                navigate('/home')
            }
                        
          })
          .catch(err => console.log(err))
    }



  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        
    <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handelSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input type="email" 
                    placeholder='email' autoComplete='off' 
                    name='email' className='form-control rounded-0'
                    onChange={(e)=> setEmail(e.target.value)}
                    />
            </div>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Password</strong>                        
                </label>
                <input type="password" 
                placeholder='Enter Password' name='password' 
                className='form-control roundeed-0' 
                onChange={(e)=> setPassWord(e.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
            </form>
            <p>New to Here?</p>
            <Link to={'/register'} className='btn btn-default border w-100 bg-light rounded-0 text-decoration-non'>Register </Link>
            
            
    </div>      
</div>
  )
}

export default Login
