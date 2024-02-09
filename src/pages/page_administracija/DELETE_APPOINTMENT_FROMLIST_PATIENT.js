
import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate,  useParams } from 'react-router-dom';


function DELETE_APPOINTMENT_FROMLIST_PATIENT() {

  const { id } = useParams();

  const navigate = useNavigate();
  const navigateToReadAppointment = () => {
    navigate(`/readappointment`);
  };
  
  
  const [appID, setAppID] = useState("");
  const [appCategory, setAppCategory] = useState("");
  const [appReason, setAppReason] = useState("");
  const [appDate, setAppDate] = useState("");


  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  

  
  
  useEffect(() => {
    const handleSearchSubmit = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/appointments/get/${id}`);
        const appData = response.data;
              
        setAppID(appData.appID);
        setAppCategory(appData.appCategory);
        setAppReason(appData.appReason);
        setAppDate(appData.appDate);
                      
        setSuccessMessage('');
        setErrorMessage('');
                   
      } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Rezervacija su tokiu ID nerasta');
      }
  };
  
  handleSearchSubmit(); 
  
  
  }, [] ); // Empty array - to run once 
  
  

  const handleAppointmentDeleteSubmit = async (event) => {
    event.preventDefault();

  try {
  
    const response = await axios.delete(`http://localhost:8080/appointments/delete/${id}`);

      console.log('Response:', response.data);
    
      handleReset();

      setSuccessMessage('Rezervacija sėkmingai ištrinta');
      setErrorMessage('');
     
   
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Rezervacija NEBUVO ištrinta');
                   
  }
};

const handleReset = () => {
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
          <h4>4.Ištrinti esamą rezervaciją</h4>
                                                            
          <div className='administracija-box-1-cond'>
              
            <div>
              {/* P */}
              <p className='administracija-box-1-product-infolist'>ID: <strong>{appID}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Kategorija: <strong>{appCategory}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Priežastisa <strong>{appReason}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Data: <strong>{appDate}</strong> </p>
              {/* P */}
            </div>
            
        </div>
            

              
        <div className='administracija-box-1-cond'>
                          
          <div className='administracija-box-1-button-box'>
            {/* BUTTONS */}
             
            <p>Ar tikrai norite ištrinti šią rezervaciją? </p>                      
            <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
            value="Taip" onClick={handleAppointmentDeleteSubmit}/>                     
            <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
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
          <div className='administracija-box-1-button-box-center'>                  
            <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
             value="&#9665; Grįžti į sąrašą" onClick={navigateToReadAppointment}/>                                
          </div>
        </div>
              
            
             
      </div>
        
    </div>
  </div>
  
  
  
  
  
  );
};

  
  export default DELETE_APPOINTMENT_FROMLIST_PATIENT;

  