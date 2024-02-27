

import '../main/custom-bootstrap.css';
import './formats/SignIn.css';
import './formats/ElementsButtons.css';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import API_ROOT_PATH from '../main/configLogged.js';
import axios from 'axios';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Šį lauką užpildyti būtina!
      </div>
    );
  }
};








const SignIn = () => {

  /* ----------------------------   Navigate   ---------------------------- */
  let navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };
  /* ----------------------------   Navigate   ---------------------------- */
  





  /* ----------------------------   User Type   ---------------------------- */
  const [activeButton, setActiveButton] = useState('customer');
  const [userType, setUserType] = useState('customer'); 

  const handleUserTypeChange = (userType) => {
    setActiveButton(userType);
    setUserType(userType);
  };
  /* ----------------------------   User Type   ---------------------------- */





  

  /* ----------------------------   onChange   ---------------------------- */
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  /* ----------------------------   onChange   ---------------------------- */






  /* ----------------------------   Handle Sign-in   ---------------------------- */
  
  
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
           
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {

      AuthService.login(username, password).then(
        () => {
          const user = AuthService.getCurrentUser(); 
          const currentUser = AuthService.getCurrentUser();

          
          if (user && user.roles) {
            console.log("User roles:", user.roles);
           
            const canAccessAsEmployee = user.roles.includes("ROLE_EMPL") || user.roles.includes("ROLE_MODERATOR") || user.roles.includes("ROLE_ADMIN");
            const canAccessAsCustomer = user.roles.includes("ROLE_USER") || canAccessAsEmployee; 


            if (activeButton === 'employee' && canAccessAsEmployee) {
              navigate(`/loggedpage/${currentUser.id}/administracija`); 
            } else if (activeButton === 'customer' && canAccessAsCustomer) {
              navigate(`/loggedpage/patientpage/${currentUser.id}`); 
            } else {
              if (activeButton === 'employee') {
              setMessage("Neteisingi prisijungimo duomenys. Jeigu esate naujas darbuotojas, įsitikinkite, jog jūsų prisijungimas aktyvuotas.");
              setLoading(false);
              } else{
                  setMessage("Neteisingi prisijungimo duomenys.");
                  setLoading(false);
              }
              
            }
          } else {
            setMessage("Neteisingi prisijungimo duomenys.");
            setLoading(false);
          }
        },
        (error) => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString();
          setLoading(false);
          setMessage(`Neteisingi prisijungimo duomenys.`);
        }
      );
    } else {
      setLoading(false);
    }
  };
  /* ----------------------------   Handle Sign-in   ---------------------------- */





  return (

  <div className='signin'>
    <h1>Prisijungti</h1>
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
              <button type="button" onClick={() => handleUserTypeChange('customer')} 
                className={`signin-register-button-larger-blue ${activeButton === 'customer' ? 'active' : ''}`}>
                Pacientai ir lankytojai
              </button>
            
            
            
              <button type="button" onClick={() => handleUserTypeChange('employee')}
                className={`signin-register-button-larger-grey ${activeButton === 'employee' ? 'active' : ''}`}>
                Darbuotojai
              </button>
            </div>
            <br></br>
            </div>
    
            <Form onSubmit={handleLogin} ref={form}>
              <div className="form-group">
                <label htmlFor="username">Vartotojo vardas</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="password">Slaptažodis</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>
    
              <div className="form-group">
                <button className="signin-register-button-smaller-blue" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Prisijungti</span>
                </button>
              </div>
    
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>


            <div className='signin-box-1-register'>
              <h6>Dar neturite paskyros?</h6>      
              <button type="button" className="signin-register-button-smaller-grey" onClick={navigateToRegister}>Registruotis</button>
            </div>


          </div>
          
      
    </div>
  </div>
  );
};

export default SignIn;