import '../main/custom-bootstrap.css';
import './formats/Administracija.css';
import EmployeeProfile from '../methods_and_other/EmployeeProfile.js';
import API_ROOT_PATH from '../main/configLogged.js';
import authHeader from "../services/auth-header";
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AuthService from "../services/auth.service";



const Administracija = () => {
  const { idE } = useParams();
  const [currentEmployeeID] = idE;

  const navigate = useNavigate();
  
  const navigateToAddPatient = () => { navigate(`/loggedpage/${currentEmployeeID}/addpatient`); };
  const navigateToEditPatient = () => { navigate(`/loggedpage/${currentEmployeeID}/editpatient`); };
  const navigateToDeletePatient = () => { navigate(`/loggedpage/${currentEmployeeID}/deletepatient`); };
  const navigateToReadPatient = () => { navigate(`/loggedpage/${currentEmployeeID}/readpatient`); };

  const navigateToAddEmployee = () => { navigate(`/loggedpage/${currentEmployeeID}/addemployee`); };
  const navigateToEditEmployee = () => { navigate(`/loggedpage/${currentEmployeeID}/editemployee`); };
  const navigateToDeleteEmployee = () => { navigate(`/loggedpage/${currentEmployeeID}/deleteemployee`); };
  const navigateToReadEmployee = () => { navigate(`/loggedpage/${currentEmployeeID}/reademployee`); };

  const navigateToAddProduct = () => { navigate(`/loggedpage/${currentEmployeeID}/addproduct`); };
  const navigateToEditProduct = () => { navigate(`/loggedpage/${currentEmployeeID}/editproduct`); };
  const navigateToDeleteProduct = () => { navigate(`/loggedpage/${currentEmployeeID}/deleteproduct`); };
  const navigateToReadProduct = () => { navigate(`/loggedpage/${currentEmployeeID}/readproduct`); };

  const navigateToAddAppointment = () => { navigate(`/loggedpage/${currentEmployeeID}/addappointment`); };
  const navigateToEditAppointment = () => { navigate(`/loggedpage/${currentEmployeeID}/editappointment`); };
  const navigateToDeleteAppointment = () => { navigate(`/loggedpage/${currentEmployeeID}/deleteappointment`); };
  const navigateToReadAppointment = () => { navigate(`/loggedpage/${currentEmployeeID}/readappointment`); };



  
  /*  --------------------------------  USER ROLES  --------------------------------  */
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    const fetchUserRoles = async () => {
      try {
        const user = AuthService.getCurrentUser();
        if (user) {
          setUserRoles(user.roles); // Assuming the roles are stored in the user object
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

   

  <div className='administracija'>
   {/* ---------------------------------      PSL     ----------------------------------    START */}
   <h1>Administracija</h1>

    <EmployeeProfile idE={idE}/>


    
    <div className='administracija-box-container'> 
    {/* -----------------------------      ALL BOXES     -------------------------------    START */}







            
    {isAuthorized(["ROLE_ADMIN", "ROLE_MODERATOR"]) && (        
      <div className='administracija-box-main'> 
      { /* -------------------------    1. PACIENTAI    -------------------------------    START */}

      
      <h3>Pacienų sąrašo valdymas</h3>
                     
      <div className='administracija-box-4items-container'>                
        
 
        <div className='administracija-box-4items-items'                      /* READ - P */>                                                                      
            <button type="button" className="btn btn-primary" onClick={navigateToReadPatient}>
              Rodyti ir koreguoti <br></br> pacientų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary" onClick={navigateToAddPatient}>
              Įvesti naują pacientą <br></br> </button>                                     
        </div>
                     
        <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToEditPatient}>
              Koreguoti duomenis <br></br> (pagal ID)</button>                           
        </div>

        <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToDeletePatient}>
              Ištrinti pacientą <br></br> (pagal ID)</button>                      
        </div>
             
                        
        <p /* -------------------------   1.PACIENTAI   ----------------------------------- END */> </p>
      </div> 
      </div> 
      )}












      {isAuthorized(["ROLE_ADMIN", "ROLE_MODERATOR"]) && ( 
      <div className='administracija-box-main'>
        <p /* ------------------------    2. DARBUOTOJAI   ---------------------------   START */> </p>
        <h3>Darbuotojų sąrašo valdymas</h3>

                        
        <div className='administracija-box-4items-container'>                
             
          <div className='administracija-box-4items-items'                      /* READ - P */>                                                                      
              <button type="button" className="btn btn-primary" onClick={navigateToReadEmployee}>
                Rodyti ir koreguoti <br></br> darbuotojų sąrašą</button>                          
          </div>
  
          <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
              <button type="button" className="btn btn-primary" onClick={navigateToAddEmployee}>
                Įvesti naują darbuotoją <br></br></button>                                     
          </div>
                       
          <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
              <button type="button" className="btn btn-primary" onClick={navigateToEditEmployee}>
                Koreguoti duomenis <br></br> (pagal ID)</button>                           
          </div>
  
          <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
              <button type="button" className="btn btn-primary" onClick={navigateToDeleteEmployee}>
                Ištrinti darbuotoją <br></br> (pagal ID)</button>                      
          </div>
                                  
          <p /* -------------------------   2. DARBUOTOJAI   --------------------------------- END */> </p>
           
        </div>
      </div>
      )}









             
      <div className='administracija-box-main'> 
       <p /* -------------------------    3. M PASLAUGOS    -------------------------------    START */> </p>
       <h3>Paslaugų sąrašo valdymas</h3>
                        
      <div className='administracija-box-4items-container'>                
        
 
        <div className='administracija-box-4items-items'                      /* READ - P */>                                                                      
            <button type="button" className="btn btn-primary" onClick={navigateToReadProduct}>
              Rodyti ir koreguoti <br></br> paslaugų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary" onClick={navigateToAddProduct}>
              Įvesti naują paslaugą <br></br> </button>                                     
        </div>
                     
        <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToEditProduct}>
              Koreguoti duomenis <br></br> (pagal ID)</button>                           
        </div>

        <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToDeleteProduct}>
              Ištrinti paslaugą <br></br> (pagal ID)</button>                      
        </div>
             

                   
        <p /* -------------------------   3. M PASLAUGOS   ------------------------------ END */> </p>
      </div> 
      </div> 








                
      <div className='administracija-box-main'> 
       <p /* ------------------------    4. REZERVACIJOS    ----------------------------    START */> </p>
       <h3>Rezervacijų sąrašo valdymas</h3>
                     
                     
       <div className='administracija-box-4items-container'>                
        
 
        <div className='administracija-box-4items-items'                      /* READ - P */>                                                                      
            <button type="button" className="btn btn-primary" onClick={navigateToReadAppointment}>
              Rodyti ir koreguoti <br></br> rezervacijų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary" onClick={navigateToAddAppointment}>
              Įvesti naują rezervaciją <br></br> </button>                                     
        </div>
                     
        <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToEditAppointment}>
              Koreguoti duomenis <br></br> (pagal ID)</button>                           
        </div>

        <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToDeleteAppointment}>
              Ištrinti rezervaciją <br></br> (pagal ID)</button>                      
        </div>

                   
                   
        <p /* -------------------------    4. REZERVACIJOS    ------------------------ END */> </p>
      </div>
      </div> 

    
    </div>

  </div>)

  };
  
  export default Administracija;



