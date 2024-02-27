
import '../main/custom-bootstrap.css';
import './formats/PatientPage.css';
import API_ROOT_PATH from '../main/configLogged.js';

import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";

import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';







const PatientPage = () => {
  const currentUser = AuthService.getCurrentUser();

  

  /* ----------------------------   Navigate   ---------------------------- */
  const navigate = useNavigate();

  const navigateToReadAppointment = () => {
    navigate(`readappointmentpatient`);
  };

  const navigateToAddAppointment = () => {
    navigate(`addappointmentpatient`);
  };

  const navigateToHomePage = () => {
    navigate(`/`);
  };
  /* ----------------------------   Navigate   ---------------------------- */

 


  
  /* ----------------------------   Messages   ---------------------------- */
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  /* ----------------------------   Messages   ---------------------------- */




  /* ----------------------------   User Individual   ---------------------------- */
  const currentUserEmail = currentUser.email; 
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showNoUserFound, setShowNoUserFound] = useState(false);
  
  
  useEffect(() => {
    const handleEmailSearch = async () => {
      try {
        const response = await axios.get(`${API_ROOT_PATH}/patients/get-email/${currentUser.email}`, { headers: authHeader() });
        const patientData = response.data;

        if (patientData != null) {
          setPatientID(patientData.patientID);
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




  /*  ------------------   Patient info    -------------------*/
  const [patientID, setPatientID] = useState('');
  
  const [existingPatientName, setExistingPatientName] = useState('');
  const [existingPatientSurname, setExistingPatientSurname] = useState('');
  const [existingPatientNO, setExistingPatientNO] = useState('');
  const [existingPatientAddress, setExistingPatientAddress] = useState('');
  const [existingPatientPhone, setExistingPatientPhone] = useState('');
  const [existingPatientEmail, setExistingPatientEmail] = useState('');





  


  useEffect(() => {
    const handleSearchSubmit = async () => {
      try {
        const response = await axios.get(`${API_ROOT_PATH}/patients/get-id/${patientID}`, { headers: authHeader() });
        const patientData = response.data;

        setExistingPatientName(patientData.patientName);
        setExistingPatientSurname(patientData.patientSurname);
        setExistingPatientNO(patientData.patientNO);
        setExistingPatientAddress(patientData.patientAddress);
        setExistingPatientPhone(patientData.patientPhone);
        setExistingPatientEmail(patientData.patientEmail);

        setSuccessMessage('');
        setErrorMessage('');
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Pacientas su tokiu ID nerastas');
      }
    };

    if (patientID) {
      handleSearchSubmit();
    }
  }, [patientID]);
  




  /*  ------------------   Patient info    -------------------*/
  
  
  
  
  
  return (

  <div className='patientPage'>
   <h1>Paciento puslapis ({currentUser.username})</h1>

    <div className='patientPage-box-container'>
      

      <div className='patientPage-box-main'>
        <h1>Mano profilis</h1>

       


        {showUserInfo && (
        <div> 
          <div className='patientPage-box-2-without-bottom-line'>
                
      
            <p> <strong> Vardas: </strong>       &ensp; {existingPatientName   } </p>       
            <p> <strong> Pavardė: </strong>      &ensp; {existingPatientSurname} </p>            
            <p> <strong> Asmens kodas: </strong> &ensp; {existingPatientNO     } </p>     
            <p> <strong> Adresas: </strong>      &ensp; {existingPatientAddress} </p>         
            <p> <strong> Tel. nr.: </strong>     &ensp; {existingPatientPhone  } </p>      
            <p> <strong> E-mail: </strong>       &ensp; {existingPatientEmail  } </p> 
    
  
            <div>
              <br></br>
              <p className='patientPage-box-1-comment'> (Dėl savo duomenų koregavimo galite kreiptis į registratūrą) </p>   
            </div>
            
          </div>  
  
  
          <div className='patientPage-box-2-without-bottom-line'> 
            <p /* ------------------------    4. REZERVACIJOS    ----------------------------    START */> </p>
            <h3>Rezervacijų sąrašo valdymas</h3>
                       
                       
            <div className='patientPage-box-2items-container'>                
          
   
              <div className='patientPage-box-2items-items'                      /* READ - P */>                                                                      
                  <button type="button" className="btn btn-primary" onClick={navigateToReadAppointment}>
                    Mano rezervacijų <br></br> sąrašas</button>                          
              </div>
      
              <div className='patientPage-box-2items-items'                      /* ADD - P */>                                                            
                  <button type="button" className="btn btn-primary" onClick={navigateToAddAppointment}>
                    Įvesti naują rezervaciją <br></br> </button>                                     
              </div>
                           
              
     
              <p /* -------------------------    4. REZERVACIJOS    ------------------------ END */> </p>
            </div>
          </div> 
        </div> 
        )} 


        {showNoUserFound && (
                <div className='patientPage-box-2-without-bottom-line'>
                
      
                <p> <strong> Jūsų duomenys dar nėra įvesti į sistemą. </strong>  </p>       
                <p> Dėl savo duomenų įvedimo arba koregavimo kreipkitės į registratūrą. </p>  
                <p> Peržiūrėti savo duomenis ir registruotis naujoms rezervacijoms galėsite tik atnaujinus duomenis. </p>           
                <br></br>
                 
                
              </div>  
        
        )} 


  


          <div className='patientPage-box-1-button-box-center'>
            <button className="btn btn-secondary patientPage-box-1-button-b" 
            onClick={navigateToHomePage}>Go to Homepage</button>
          </div>

         </div>
    
    
    

  
  
    </div>

  </div>




  )
};
  
  export default PatientPage;