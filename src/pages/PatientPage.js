import '../main/custom-bootstrap.css';
import './formats/PatientPage.css';
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const PatientPage = () => {

  const { id } = useParams();
   

  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate(`/`);
  };
  const navigateToEditPatient = () => {
    navigate(`editpatient/${id}`);
  };
 
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');




  /*  ------------------   Patient info    -------------------*/
  const [appPatientID, setAppPatientID] = useState(id);
  

  const [existingPatientID, setExistingPatientID] = useState('');
  const [existingPatientName, setExistingPatientName] = useState('');
  const [existingPatientSurname, setExistingPatientSurname] = useState('');
  const [existingPatientNO, setExistingPatientNO] = useState('');
  const [existingPatientAddress, setExistingPatientAddress] = useState('');
  const [existingPatientPhone, setExistingPatientPhone] = useState('');
  const [existingPatientEmail, setExistingPatientEmail] = useState('');

  useEffect(() => {
    const handleSearchSubmit = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/patients/get/${id}`);
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
        setSuccessMessage('');
        setErrorMessage('Pacientas su tokiu ID nerastas');
      }
  };
  
  handleSearchSubmit(); 
  
  
  }, [] ); // Patient array - to run once 
  




  /*  ------------------   Patient info    -------------------*/
  
  
  
  
  
  return (

  <div className='patientPage'>
   <h1>Patient page ({appPatientID})</h1>

    <div className='patientPage-box-container'>
      

      <div className='patientPage-box-main'>
        <h1>Mano profilis</h1>



        <div className='patientPage-box-2-without-bottom-line'>
              
    
          <p> <strong> Vardas: </strong> &nbsp; {existingPatientName   } </p>       
          <p> <strong> Pavardė: </strong>&nbsp; {existingPatientSurname} </p>            
          <p> <strong> Asmens kodas: </strong> &nbsp; {existingPatientNO     } </p>     
          <p> <strong> Adresas: </strong> &nbsp; {existingPatientAddress} </p>         
          <p> <strong> Tel. nr.: </strong> &nbsp; {existingPatientPhone  } </p>      
          <p> <strong> E-mail: </strong> &nbsp; {existingPatientEmail  } </p> 
  

          <div className='patientPage-box-1-button-box-left'>
            <input type='button' className="btn btn-secondary patientPage-box-1-button-b" 
                   value="Koreguoti duomenis" onClick={navigateToEditPatient}/>       
          </div>
          
        </div>        
  
  
  
  
      




        <div>

        </div>






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