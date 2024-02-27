
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
  
  const navigate = useNavigate();

  useEffect(() => {
    const navigateToUserPage = () => {
      if (isAuthorized(["ROLE_USER"]) && isAuthorized(["ROLE_EMPL", "ROLE_MODERATOR", "ROLE_ADMIN"])) {
        navigate(`/loggedpage/${currentUser.id}/administracija`);
      } else if (isAuthorized(["ROLE_USER"])) {
        navigate(`/loggedpage/patientpage/${currentUser.id}`);
      } else if (isAuthorized(["ROLE_EMPL", "ROLE_MODERATOR", "ROLE_ADMIN"])) {
        navigate(`/loggedpage/${currentUser.id}/administracija`);
      } else {
        console.log("Klaida, nerasta vartotojo rolė.");
       
      }
    };

    navigateToUserPage();
  }, [currentUser, userRoles, navigate]);
  


  /*  --------------------------------    NAVIGATE   --------------------------------  */




  return (
    <div className="profile">

    <div>
    
      









    </div>






    </div>
  );
};

export default Profile;