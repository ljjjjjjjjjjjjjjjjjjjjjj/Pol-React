

import '../main/custom-bootstrap.css';
import './formats/SignIn.css';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

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
  let navigate = useNavigate();

  const [userType, setUserType] = useState('customer'); 
  const handleUserTypeChange = (type) => {
    setUserType(type);
  };


  const navigateToRegister = () => {
    navigate('/register');
  };
  


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

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

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
                <button className="signin-box-1-button-smaller-b" disabled={loading}>
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
              <button type="button" className="signin-box-1-button-smaller-g" onClick={navigateToRegister}>Registruotis</button>
            </div>


          </div>
          
      
    </div>
  </div>
  );
};

export default SignIn;