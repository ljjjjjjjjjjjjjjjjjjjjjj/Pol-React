

import '../main/custom-bootstrap.css';
import './formats/SignIn.css';
import React, { useState } from 'react';





const SignIn = () => {
    const [userType, setUserType] = useState('customer'); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUserTypeChange = (type) => {
      setUserType(type);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };


  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your authentication logic here
      console.log('User Type:', userType);
      console.log('Email:', email);
      console.log('Password:', password);
      // Add logic to authenticate user with email and password
    };
  
    return (
      <div>
        <div>Sign in text </div>
        <div>Sign in text </div>
        <div>Sign in text </div>
        <div>Sign in text </div>


        <br></br>
        <h2>Sign In</h2>
        <br></br>


        <div>
          <label>Select User Type:</label>
          <div >
            <button type="button" onClick={() => handleUserTypeChange('customer')} className={`btn btn-primary ${userType === 'customer' ? 'active' : ''}`}>
              Customer
            </button>

            <button type="button" onClick={() => handleUserTypeChange('employee')} className={`btn btn-primary ${userType === 'customer' ? 'active' : ''}`}>
              Employee
            </button>
          </div>
          <br></br>
        </div>


        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>

          <div>
            <br></br>
            <button  className="btn btn-primary" type="submit">Sign In</button>
          </div>     
        </form>

        
      </div>
    );
  };
  
  export default SignIn;



