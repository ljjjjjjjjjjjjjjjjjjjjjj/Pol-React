
import React from "react";
import AuthService from "../services/auth.service";
import './formats/Profile.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';







const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  const [patientID, setPatientID] = useState('');
  const [empID, setEmpID] = useState('');
  const [tokenManual, setTokenManual] = useState('');

  useEffect(() => {
    console.log("1. TOKEN:", currentUser.accessToken);
    if(currentUser.accessToken != null)
    setTokenManual(currentUser.accessToken)
  }, [currentUser]);




  const navigate = useNavigate();

  const navigateToAdministracija = () => {
    navigate('/loggedpage/administracija');
  };

  const navigateToPatientPage = () => {
    navigate(`/loggedpage/patientpage/${patientID}`);
  };



  return (
    <div className="profile">

    <div>
    <br></br>
        <p> <strong>Functionality is still to be implemented.</strong> <br></br><br></br>
            This page should be directing customers and employees to their individual pages: <br></br><br></br>
            1. User (Customer) - to PatientPage, &ensp; by their individual ID number.<br></br>
            2. Employee, moderator, admin (employee) - to Administration page, &ensp; by their individual ID number.
        </p>
    <br></br>
    </div>


    <div className="profile-box-1-content">   
      
      <h3>Profile info</h3>

      <br></br>

      <p>
        <strong>User name: </strong> {currentUser.username} 
      </p>
      
      <p>
        
        <strong>Token: </strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id: </strong> {currentUser.id}
      </p>
      <p>
        <strong>Email: </strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>

    </div>    

      <div>
        <br></br>
            <p> <strong>Pasirinkite kategoriją ir ID numerį (šio pasirinkimo nebus įgyvendinus 'signin' funkcionalumą) </strong> <br></br><br></br> </p>
                
            <label>Įveskite paciento ID numerį (nuo 1 iki 12; ir nuo 52 iki 54):
                  <input style={{ width: '50px', }}
                    type="text" 
                    value={patientID}
                    onChange={(e) => setPatientID(e.target.value)}
                  />
                  
            </label>

            <div>
              <br></br>
            </div>

            <label>Įveskite darbuotojo ID numerį (nuo 1 iki 12):
                  <input style={{ width: '50px', }}
                    type="text" 
                    value={empID}
                    onChange={(e) => setEmpID(e.target.value)}
                  />
            </label>

            <div>
              <p>&ensp;</p>
            </div>

            <div className='administracija-box-1'>
              <br></br>
              <div className='administracija-box-1-button-box'>                  
                <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                 value=" Pacientų sąrašas " onClick={navigateToPatientPage}/>
                 <br></br>
                 <br></br>
                <input type='button' className="btn btn-secondary administracija-box-1-button-g" 
                 value="  Administracija " onClick={navigateToAdministracija}/>                                     
              </div>
            </div>




            
        <br></br>
      </div>






    </div>
  );
};

export default Profile;