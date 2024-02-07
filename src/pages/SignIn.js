

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
    <div className='administracija'>
        
      <h1>Sign In</h1>
      <br></br>
      <div>


      <div className='administracija-signin-box-1'>


       <div className='administracija-drop-down'>

          <h1>Pasirinkti vartotojo tipą:</h1>
          <div >
            <button type="button" onClick={() => handleUserTypeChange('customer')} 
              className={`administracija-signin-box-1-button-larger-b ${userType === 'customer' ? 'active' : ''}`}>
              Pacientai ir lankytojai
            </button>

        

            <button type="button" onClick={() => handleUserTypeChange('employee')} 
              className={`administracija-signin-box-1-button-g ${userType === 'employee' ? 'active' : ''}`}>
              Darbuotojai
            </button>
          </div>
          <br></br>
        </div>


        <form onSubmit={handleSubmit}>
          <div administracija-box-1-plus>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>

          <div>
            <br></br>
            <button   type="submit" className={`administracija-signin-box-1-button-smaller-b`}>Sign In</button>
          </div>     
        </form>
        </div>

      </div>  
    </div>
  );
  };
  
  export default SignIn;



