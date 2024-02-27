import '../main/custom-bootstrap.css';
import './formats/Administracija.css';
import './formats/ElementsButtons.css';
import EmployeeProfile from '../methods_and_other/EmployeeProfile.js';
import API_ROOT_PATH from '../main/configLogged.js';

import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";

import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const Administracija = () => {
  const currentUser = AuthService.getCurrentUser();

  const navigate = useNavigate();
  
  const navigateToAddPatient = () => { navigate(`/loggedpage/${empID}/addpatient`); };
  const navigateToEditPatient = () => { navigate(`/loggedpage/${empID}/editpatient`); };
  const navigateToDeletePatient = () => { navigate(`/loggedpage/${empID}/deletepatient`); };
  const navigateToReadPatient = () => { navigate(`/loggedpage/${empID}/readpatient`); };

  const navigateToAddEmployee = () => { navigate(`/loggedpage/${empID}/addemployee`); };
  const navigateToEditEmployee = () => { navigate(`/loggedpage/${empID}/editemployee`); };
  const navigateToDeleteEmployee = () => { navigate(`/loggedpage/${empID}/deleteemployee`); };
  const navigateToReadEmployee = () => { navigate(`/loggedpage/${empID}/reademployee`); };

  const navigateToAddProduct = () => { navigate(`/loggedpage/${empID}/addproduct`); };
  const navigateToEditProduct = () => { navigate(`/loggedpage/${empID}/editproduct`); };
  const navigateToDeleteProduct = () => { navigate(`/loggedpage/${empID}/deleteproduct`); };
  const navigateToReadProduct = () => { navigate(`/loggedpage/${empID}/readproduct`); };

  const navigateToAddAppointment = () => { navigate(`/loggedpage/${empID}/addappointment`); };
  const navigateToEditAppointment = () => { navigate(`/loggedpage/${empID}/editappointment`); };
  const navigateToDeleteAppointment = () => { navigate(`/loggedpage/${empID}/deleteappointment`); };
  const navigateToReadAppointment = () => { navigate(`/loggedpage/${empID}/readappointment`); };



   /* ----------------------------   User Individual   ---------------------------- */
   const currentUserEmail = currentUser.email; 
   const [showUserInfo, setShowUserInfo] = useState(false);
   const [showNoUserFound, setShowNoUserFound] = useState(false);
   const [empID, setEmpID] =useState();   
   
   useEffect(() => {
     const handleEmailSearch = async () => {
       try {
         const response = await axios.get(`${API_ROOT_PATH}/employees/get-email/${currentUser.email}`, { headers: authHeader() });
         const employeeData = response.data;
 
         if (employeeData != null) {
           setEmpID(employeeData.empID);
           setShowUserInfo(true);
         } else {
           setShowNoUserFound(true);
         }
       } catch (error) {
         console.error('Error:', error);
       }
     };
 
     handleEmailSearch();
   }, [currentUser.email]);
 
   /* ----------------------------   User Individual   ---------------------------- */
 



  
  /*  --------------------------------  USER ROLES  --------------------------------  */
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    const fetchUserRoles = async () => {
      try {
        const user = AuthService.getCurrentUser();
        if (user) {
          setUserRoles(user.roles);
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

    {showUserInfo && (
    <EmployeeProfile idE={empID}/>
    )}



    {showNoUserFound && (
      <div className='patientPage-box-2-without-bottom-line'>
        
            
        <p> <strong> Jūsų duomenys dar nėra įvesti į sistemą. </strong>  </p>       
        <p> Dėl savo duomenų įvedimo arba koregavimo kreipkitės į registratūrą. </p>  
        <p> Peržiūrėti ir koreguoti duomenis galėsite tik atnaujinus jūsų profilio informaciją. </p>           
        <br></br>
         
        
      </div>     
    )} 


    {showUserInfo && (
    <div className='administracija-box-container'> 
    {/* -----------------------------      ALL BOXES     -------------------------------    START */}







            
    {isAuthorized(["ROLE_ADMIN", "ROLE_MODERATOR"]) && (        
      <div className='administracija-box-main'> 
      { /* -------------------------    1. PACIENTAI    -------------------------------    START */}

      
      <h3>Pacienų sąrašo valdymas</h3>
                     
      <div className='administracija-box-4items-container'>                
        
 
        <div className='administracija-box-4items-items'                      /* READ - P */>                                                                      
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToReadPatient}>
              Rodyti ir koreguoti <br></br> pacientų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToAddPatient}>
              Įvesti naują pacientą <br></br> </button>                                     
        </div>
                     
        <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToEditPatient}>
              Koreguoti duomenis <br></br> (pagal ID)</button>                           
        </div>

        <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToDeletePatient}>
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
              <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToReadEmployee}>
                Rodyti ir koreguoti <br></br> darbuotojų sąrašą</button>                          
          </div>
  
          <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
              <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToAddEmployee}>
                Įvesti naują darbuotoją <br></br></button>                                     
          </div>
                       
          <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
              <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToEditEmployee}>
                Koreguoti duomenis <br></br> (pagal ID)</button>                           
          </div>
  
          <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
              <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToDeleteEmployee}>
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
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToReadProduct}>
              Rodyti ir koreguoti <br></br> paslaugų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToAddProduct}>
              Įvesti naują paslaugą <br></br> </button>                                     
        </div>
                     
        <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToEditProduct}>
              Koreguoti duomenis <br></br> (pagal ID)</button>                           
        </div>

        <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToDeleteProduct}>
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
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToReadAppointment}>
              Rodyti ir koreguoti <br></br> rezervacijų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToAddAppointment}>
              Įvesti naują rezervaciją <br></br> </button>                                     
        </div>
                     
        <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToEditAppointment}>
              Koreguoti duomenis <br></br> (pagal ID)</button>                           
        </div>

        <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
            <button type="button" className="btn btn-primary block-button-4items-items" onClick={navigateToDeleteAppointment}>
              Ištrinti rezervaciją <br></br> (pagal ID)</button>                      
        </div>

                   
                   
        <p /* -------------------------    4. REZERVACIJOS    ------------------------ END */> </p>
      </div>
      </div> 

    
    </div>
     )}

  </div>)

  };
  
  export default Administracija;



