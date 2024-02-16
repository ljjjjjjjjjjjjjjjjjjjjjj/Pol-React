
import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import NavigateToPatient from '../../methods_and_other/NavigateToPatient.js';
import API_ROOT_PATH from '../../main/configLogged.js';
import authHeader from "../../services/auth-header";
import { useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';













const DeletePatient = () => {
  const { idE } = useParams();
  


  const [selectedPatientID, setSelectedPatientID] = useState("");
  
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

  const [conditionalFieldInfo, setConditionalFieldInfo] = useState(false);
  const [conditionalFieldMessage, setConditionalFieldMessage] = useState(false);
  const [conditionalFieldButtons, setConditionalFieldButtons] = useState(false);

  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`${API_ROOT_PATH}/patients/get/${selectedPatientID}`,  {headers: authHeader()});
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

      setConditionalFieldInfo(true);
      setConditionalFieldMessage(true);
      setConditionalFieldButtons(true);
     

    } catch (error) {
      console.error('Error:', error);
      setPatientID('');
      setPatientName('');
      setPatientSurname('');
      setPatientNO('');
      setPatientAddress(''); 
      setPatientPhone(''); 
      setPatientEmail(''); 
      setPatientCategory('');

      setSuccessMessage('');
      setErrorMessage('Pacientas su tokiu ID nerastas');
      setConditionalFieldMessage(true);
      setConditionalFieldButtons(false);
      
    }
  };
  

  const handlePatientDeleteSubmit = async (event) => {
    event.preventDefault();

  try {
  
    const response = await axios.delete(`${API_ROOT_PATH}/patients/delete/${selectedPatientID}`,  {headers: authHeader()});

      console.log('Response:', response.data);
      setSuccessMessage('Pacientas sėkmingai ištrintas');
      setErrorMessage('');
      
      handlePartialReset();

      setConditionalFieldMessage(true);
      setConditionalFieldInfo(false);
      setConditionalFieldButtons(false);
      
      
      
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Pacientas NEBUVO ištrintas');

      setConditionalFieldMessage(true);
      setConditionalFieldInfo(true);
      setConditionalFieldButtons(false);
    
  }
};

const handleReset = () => {
  setSelectedPatientID('');
  
  setPatientID('');
  setPatientName('');
  setPatientSurname('');
  setPatientNO('');
  setPatientAddress(''); 
  setPatientPhone(''); 
  setPatientEmail(''); 
  setPatientCategory('');

  
  setConditionalFieldInfo(false);
  setConditionalFieldButtons(false);
   
};

const handlePartialReset = () => {
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
            
            <div>
  
              <h4>4.Ištrinti esamą pacientą</h4>
  
              <div className='administracija-box-1-plus'>
                <form  onSubmit={handleSearchSubmit}>
                  <label>Įveskite paciento ID numerį:
                    <input style={{ width: '50px', }}
                      type="text" 
                      value={selectedPatientID}
                      onChange={(e) => setSelectedPatientID(e.target.value)}
                    />
                  </label>
  
                  <div className='administracija-box-1-button-box'>
                  <p></p>
                  <input type="submit" className="btn btn-primary administracija-box-1-button-b" />
                  <p>&nbsp;</p>
                  </div>
  
  
              </form>
            </div>
                     
                           
                          
              
            {conditionalFieldInfo && (  
            <div className='administracija-box-1-cond'>
              
                <div>
                  {/* P */}
                  <p className='administracija-box-1-product-infolist'>ID: <strong>{patientID}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Vardas: <strong>{patientName}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Pavarde: <strong>{patientSurname}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>No.: <strong>{patientNO}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Adresas: <strong>{patientAddress}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Tel nr.: <strong>{patientPhone}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>E-pastas: <strong>{patientEmail}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Kategorija: <strong>{patientCategory}</strong> </p>
                </div>
            
              </div>
              )}


              {conditionalFieldButtons && (  
              <div className='administracija-box-1-cond'>
              
            
                <div className='administracija-box-1-button-box'>
                  {/* BUTTONS */}
    
                  <p>Ar tikrai norite ištrinti šį pacientą? </p>
    
                  <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
                  value="Taip" onClick={handlePatientDeleteSubmit}/>
      
                  <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
                  value="Ne" onClick={handleReset}/>
                </div>

              </div>
              )}


              {conditionalFieldMessage && (   
              <div  className='administracija-box-1-cond'>
              {/* MESSAGES */}
              <br></br>
              {successMessage && <div className="success-message">{successMessage}</div>}
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <br></br>
              </div>
              )}


              <div className='administracija-box-1'>
                <div className='administracija-box-1'>
                  < NavigateToPatient idE={idE} />
                </div>
              </div>
            
             
            </div>
        </div>
    </div>
  </div>
  
  
  
  
  
  );
};

  
  export default DeletePatient;

  /*
  const [patientID, setPatientID] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientSurname, setPatientSurname] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientCategory, setPatientCategory] = useState("");


  setPatientID('');
  setPatientName('');
  setPatientSurname('');
  setPatientAddress(''); 
  setPatientPhone(''); 
  setPatientEmail(''); 
  setPatientCategory('');
  */
