
import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import '../formats/ElementsButtons.css';
import authHeader from "../../services/auth-header";
import API_ROOT_PATH from '../../main/configLogged.js';
import NavigateToPatient from '../../methods_and_other/NavigateToPatient.js';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';







function DeletePatientFROMLIST() {
  const { idI } = useParams();
  const { idE } = useParams();


  
  const [patientID, setPatientID] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientSurname, setPatientSurname] = useState("");
  const [patientNO, setPatientNO] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientCategory, setPatientCategory] = useState("");


  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  

  
  
  useEffect(() => {
    const handleSearchSubmit = async () => {
      try {
        const response = await axios.get(`${API_ROOT_PATH}/patients/get-id/${idI}`,  {headers: authHeader()});
        const patientData = response.data;
              
        setPatientID(patientData.patientID);
        setPatientName(patientData.patientName);
        setPatientSurname(patientData.patientSurname);
        setPatientNO(patientData.patientNO);
        setPatientAddress(patientData.patientAddress);
        setPatientPhone(patientData.patientPhone);
        setPatientEmail(patientData.patientEmail);
        setPatientCategory(patientData.patientCategory);
                      
        setSuccessMessage('');
        setErrorMessage('');
                   
      } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Pacientas su tokiu ID nerastas');
      }
  };
  
  handleSearchSubmit(); 
  
  
  }, [] ); // Empty array - to run once 
  
  

  const handlePatientDeleteSubmit = async (event) => {
    event.preventDefault();

  try {
  
    const response = await axios.delete(`${API_ROOT_PATH}/patients/delete/${idI}`,  {headers: authHeader()});

      console.log('Response:', response.data);
    
      handleReset();

      setSuccessMessage('Pacientas sėkmingai ištrintas');
      setErrorMessage('');
     
   
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Pacientas NEBUVO ištrintas');
                   
  }
};

const handleReset = () => {
  setPatientID('');
  setPatientName('');
  setPatientSurname('');
  setPatientNO('');
  setPatientAddress(''); 
  setPatientPhone(''); 
  setPatientEmail(''); 
  setPatientCategory('');

   
};



  
 


  return (

  <div className='administracija'>

    <div className='administracija-box-container'>
  
      <div>
      <h1>Administracija</h1>
      </div>
  
        <div className='administracija-box-1'>
          <h3>Pacienų sąrašo valdymas</h3>                        
          <h4>4.Ištrinti esamą pacientą</h4>
                                                            
          <div className='administracija-box-1-cond'>
              
            <div>
              {/* P */}
              <p className='administracija-box-1-product-infolist'>ID: <strong>{patientID}</strong> </p>
              <p className='administracija-box-1-product-infolist'>Vardas: <strong>{patientName}</strong> </p>
              <p className='administracija-box-1-product-infolist'>Pavarde <strong>{patientSurname}</strong> </p>
              <p className='administracija-box-1-product-infolist'>No.: <strong>{patientNO}</strong> </p>
              <p className='administracija-box-1-product-infolist'>Adresas: <strong>{patientAddress}</strong> </p>
              <p className='administracija-box-1-product-infolist'>Tel nr.: <strong>{patientPhone}</strong> </p>
              <p className='administracija-box-1-product-infolist'>E-pastas: <strong>{patientEmail}</strong> </p>
              <p className='administracija-box-1-product-infolist'>Kategorija: <strong>{patientCategory}</strong> </p>
              {/* P */}
            </div>
            
        </div>
            

              
        <div className='administracija-box-1-cond'>
                          
          <div className='administracija-box-1-button-box'>
            {/* BUTTONS */}
             
            <p>Ar tikrai norite ištrinti šį pacientą? </p>                      
            <input type='submit' className="btn btn-primary button-1-blue" 
            value="Taip" onClick={handlePatientDeleteSubmit}/>                     
            <input type='reset' className="btn btn-secondary button-1-grey" 
            value="Ne" onClick={handleReset}/>

            {/* BUTTONS */}
          </div>

        </div>
              


             
        <div  className='administracija-box-1-cond'>
          {/* MESSAGES */}
          <br></br>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <br></br>
          {/* MESSAGES */}
        </div>


        <div className='administracija-box-1'>
          < NavigateToPatient idE={idE} />
        </div>
              
            
             
      </div>
        
    </div>
  </div>
  
  
  
  
  
  );
};

  
  export default DeletePatientFROMLIST;

  