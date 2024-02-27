
import React from "react";
import AuthService from "../services/auth.service";
import './formats/Profile.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';







const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

   
  

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






  /*  --------------------------------    NAVIGATE   --------------------------------  */
  const [showNavigationButtons, setShowNavigationButtons] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized(["ROLE_USER"]) && !isAuthorized(["ROLE_EMPL", "ROLE_MODERATOR", "ROLE_ADMIN"])) {
      navigate(`/loggedpage/patientpage/${currentUser.id}`);
    } else if (isAuthorized(["ROLE_EMPL", "ROLE_MODERATOR", "ROLE_ADMIN"]) && !isAuthorized(["ROLE_USER"])) {
      navigate(`/loggedpage/${currentUser.id}/administracija`);
    } else if (isAuthorized(["ROLE_USER", "ROLE_EMPL", "ROLE_MODERATOR", "ROLE_ADMIN"])) {
      setShowNavigationButtons(true);
    }
  }, [currentUser, userRoles, navigate]);

  const handlePatientPage = () => {
    navigate(`/loggedpage/patientpage/${currentUser.id}`);
  };

  const handleAdminPage = () => {
    navigate(`/loggedpage/${currentUser.id}/administracija`);
  };



  /*  --------------------------------    NAVIGATE   --------------------------------  */




  return (
    <div className="profile">
      <h1>Mano Profilis</h1>
      <br></br>

      

      <div className='signin-top'>
        <h5>Pasirinkite vartotojo tipą:</h5>
        <div >
          <button type="button" onClick={handlePatientPage} 
            className={`signin-register-button-larger-blue`}>
            Pacientai ir lankytojai
          </button>
           
           
           
          <button type="button" onClick={handleAdminPage}
            className={`signin-register-button-larger-grey`}>
            Darbuotojai
          </button>
        </div>
        <br></br>
      </div>

      
    </div>

  );
};

export default Profile;