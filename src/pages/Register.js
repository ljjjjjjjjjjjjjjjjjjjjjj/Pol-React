
import '../main/custom-bootstrap.css';
import './formats/SignIn.css';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";




/* -------  PRE-start  ------- */
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const validUsername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const validPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
/* -------  PRE-end  ------- */




/* ----------------------------   COMPONENT START   ---------------------------- */
const Register = () => {
  let navigate = useNavigate();


  const [userType, setUserType] = useState('customer'); 
  const handleUserTypeChange = (type) => {
    setUserType(type);
  };


  const navigateToSignin = () => {
    navigate('/signin');
  };
  

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };





  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
  
  





  


  return (

  <div className='signin'>
    <h1>Registruotis</h1>
    <br></br>

      
      <div className='signin-box-1'>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="signin-box-1-img"
        />
                          
        <div className='signin-box-1-form-margins'>

          <div className='signin-top'>

            <h5>Pasirinkite vartotojo tipą:</h5>
            <div >
              <button type="button" onClick={setUserType} 
                className={`signin-box-1-button-larger-b ${userType === 'customer' ? 'active' : ''}`}>
                Pacientai ir lankytojai
              </button>
            
            
            
              <button type="button" onClick={setUserType}
                className={`signin-box-1-button-larger-g ${userType === 'employee' ? 'active' : ''}`}>
                Darbuotojai
              </button>
            </div>
            <br></br>
            </div>


            <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required, validUsername]}
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, validPassword]}
                    />
                  </div>
    
                  <div className="form-group">
                    <button className="signin-box-1-button-smaller-b btn-block">Registruotis</button>
                  </div>
                </div>
              )}

              {message && (
                <div className="form-group">
                  <div
                    className={ successful ? "alert alert-success" : "alert alert-danger" }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
    
            
    
              


            <div className='signin-box-1-register'>
              <h6>Jau turite paskyrą?</h6>      
              <button type="button" className="signin-box-1-button-smaller-g" onClick={navigateToSignin}>Prisijungti</button>
            </div>


          </div>
          
      
    </div>
  </div>
  );
};

export default Register;