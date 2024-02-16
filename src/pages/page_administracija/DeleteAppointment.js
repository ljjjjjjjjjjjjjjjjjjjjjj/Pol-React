
import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import NavigateToAppointment from '../../methods_and_other/NavigateToAppointment.js';
import API_ROOT_PATH from '../../main/configLogged.js';
import authHeader from "../../services/auth-header";
import { useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';







const DeleteAppointment = () => {
  const { idE } = useParams();



  const [selectedAppID, setSelectedAppID] = useState("");
  
  const [appID, setAppID] = useState("");
  const [appCategory, setAppCategory] = useState("");
  const [appReason, setAppReason] = useState("");
  const [appDate, setAppDate] = useState("");


  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [conditionalFieldInfo, setConditionalFieldInfo] = useState(false);
  const [conditionalFieldMessage, setConditionalFieldMessage] = useState(false);
  const [conditionalFieldButtons, setConditionalFieldButtons] = useState(false);

  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`${API_ROOT_PATH}/appointments/get/${selectedAppID}`,  {headers: authHeader()});
      const appData = response.data;

      setAppID(appData.appID);
      setAppCategory(appData.appCategory);
      setAppReason(appData.appReason);
      setAppDate(appData.appDate);
     
         
      setSuccessMessage('');
      setErrorMessage('');

      setConditionalFieldInfo(true);
      setConditionalFieldMessage(true);
      setConditionalFieldButtons(true);
     

    } catch (error) {
      console.error('Error:', error);
      handlePartReset();

      setSuccessMessage('');
      setErrorMessage('Rezervacija su tokiu ID nerasta');
      setConditionalFieldMessage(true);
      setConditionalFieldButtons(false);
      
    }
  };
  

  const handleAppointmentDeleteSubmit = async (event) => {
    event.preventDefault();

  try {
  
    const response = await axios.delete(`${API_ROOT_PATH}/appointments/delete/${selectedAppID}`,  {headers: authHeader()});

      console.log('Response:', response.data);
      setSuccessMessage('Rezervacija sėkmingai ištrinta');
      setErrorMessage('');

      handlePartReset();

      setConditionalFieldMessage(true);
      setConditionalFieldInfo(false);
      setConditionalFieldButtons(false);
      
      
      
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Rezervacija NEBUVO ištrinta');

      setConditionalFieldMessage(true);
      setConditionalFieldInfo(true);
      setConditionalFieldButtons(false);
    
  }
};

const handleReset = () => {
  setSelectedAppID('');
  
  setAppID('');
  setAppCategory('');
  setAppReason('');
  setAppDate(''); 
  
  setConditionalFieldInfo(false);
  setConditionalFieldButtons(false);
   
};


const handlePartReset = () => {
  setAppID('');
  setAppCategory('');
  setAppReason('');
  setAppDate(''); 
   
};



  
 


  return (

  <div className='administracija'>

    <div className='administracija-box-container'>
  
      <div>
      <h1>Administracija</h1>
      </div>
  
        <div className='administracija-box-1'>
            <h3>Rezervacijų sąrašo valdymas</h3>
            
            <div>
  
              <h4>4.Ištrinti esamą rezervaciją</h4>
  
              <div className='administracija-box-1-plus'>
                <form  onSubmit={handleSearchSubmit}>
                  <label>Įveskite rezervacijos ID numerį:
                    <input style={{ width: '50px', }}
                      type="text" 
                      value={selectedAppID}
                      onChange={(e) => setSelectedAppID(e.target.value)}
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
                  <p className='administracija-box-1-product-infolist'>ID: <strong>{appID}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Kategorija: <strong>{appCategory}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Priežastis <strong>{appReason}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Data: <strong>{appDate}</strong> </p>
                </div>
            
              </div>
              )}


              {conditionalFieldButtons && (  
              <div className='administracija-box-1-cond'>
              
            
                <div className='administracija-box-1-button-box'>
                  {/* BUTTONS */}
    
                  <p>Ar tikrai norite ištrinti šią rezervaciją? </p>
    
                  <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
                  value="Taip" onClick={handleAppointmentDeleteSubmit}/>
      
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


              <div className='administracija-box-main'>
                <div className='administracija-box-1'>
                  < NavigateToAppointment idE={idE} />
                </div>
              </div>
            
             
            </div>
        </div>
    </div>
  </div>
  
  
  
  
  
  );
};

  
  export default DeleteAppointment;

  