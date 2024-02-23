
import React from "react";
import AuthService from "../services/auth.service";
import './formats/Profile.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';







const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  const [patientID, setPatientID] = useState(1);
  const [empID, setEmpID] = useState(1);
  


  const navigate = useNavigate();

  const navigateToAdministracija = () => {
    navigate(`/loggedpage/${empID}/administracija`);
  };

  const navigateToPatientPage = () => {
    navigate(`/loggedpage/patientpage/${patientID}`);
  };


  /*  --------------------------------  USER ROLES  --------------------------------  */
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    const fetchUserRoles = async () => {
      try {
        
        const user = AuthService.getCurrentUser();
        if (user) {
          setUserRoles(user.roles); 
          console.log("User roles:", user.roles)
        }
      } catch (error) {
        console.error("Error fetching user roles:", error);
      }
    };

    fetchUserRoles();
  }, []);

  const isAuthorized = (requiredRoles) => {
    return requiredRoles.some(role => userRoles.includes(role));
  };
  /*  --------------------------------  USER ROLES  --------------------------------  */




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

            {isAuthorized(["ROLE_USER", "ROLE_EMPL", "ROLE_MODERATOR", "ROLE_ADMIN"]) && ( 
              <div className='administracija-box-1'>                  
                <label>Įveskite paciento ID numerį (nuo 1 iki 12; ir 52 ):
                      <input style={{ width: '50px', }}
                        type="text" 
                        value={patientID}
                        onChange={(e) => setPatientID(e.target.value)}
                      />                 
                </label>

                
                <div className='administracija-box-1'>
                  <div className='administracija-box-1-button-box'>                  
                    <input type='button' className="btn btn-primary administracija-box-1-button-b" 
                     value=" Pacientų sąrašas " onClick={navigateToPatientPage}/>                                              
                  </div>
                </div>

              </div>
            )}


            {isAuthorized(["ROLE_EMPL", "ROLE_MODERATOR", "ROLE_ADMIN"]) && ( 
              <div className='administracija-box-1'> 
                <label>Įveskite darbuotojo ID numerį (1, nuo 3 iki 12, ir 52):
                      <input style={{ width: '50px', }}
                        type="text" 
                        value={empID}
                        onChange={(e) => setEmpID(e.target.value)}
                      />
                </label>
    
                <div className='administracija-box-1'>
                  <br></br>
                  <div className='administracija-box-1-button-box'>                                   
                    <input type='button' className="btn btn-primary administracija-box-1-button-b" 
                     value="  Administracija " onClick={navigateToAdministracija}/>                                     
                  </div>
                </div>

            </div>
            )}

            
            
        <br></br>
      </div>






    </div>
  );
};

export default Profile;