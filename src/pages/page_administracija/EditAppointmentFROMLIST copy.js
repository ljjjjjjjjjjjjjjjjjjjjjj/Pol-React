import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import lt from 'date-fns/locale/lt'; // Import Lithuanian locale




function EditAppointmentFROMLIST() {

  const { id } = useParams();

  const navigate = useNavigate();
  const navigateToReadAppointment = () => {
    navigate(`/readappointment`);
  };
  
  
  const [appID, setAppID] = useState("");
  const [ppCategory, setAppCategory] = useState("");
  const [appReason, setAppReason] = useState("");
  const [appDate, setAppDate] = useState("");



  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  
  
  useEffect(() => {
    const handleSearchSubmit = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/appointments/get/${id}`);
        const appointmentData = response.data;
              
        setAppID(appointmentData.appID);
        setAppCategory(appointmentData.ppCategory);
        setAppReason(appointmentData.appReason);
        setAppDate(appointmentData.appDate);
                      
        setSuccessMessage('');
        setErrorMessage('');
                   
      } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Rezervacija su tokiu ID nerasta');
      }
  };
  
  handleSearchSubmit(); 
  
  
  }, [] ); // Appointment array - to run once 
  
  


  const handleAppointmentEditSubmit = async (event) => {
    event.preventDefault();

  try {
    const response = await axios.put(`http://localhost:8080/appointments/edit/${id}`, {
      appID, 
      ppCategory, 
      appReason,
      appDate
      });

      console.log('Response:', response.data);
      handleReset();

      setSuccessMessage('Rezervacija sėkmingai atnaujinta');
      setErrorMessage('');
      
          
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Rezervacija NEBUVO atnaujinta');
    
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
        <h4>3. Keisti esamos rezervacijos duomenis</h4>
                         
        <div>
          <form onSubmit={handleAppointmentEditSubmit}>
               
            <p>&ensp;ID:&emsp;&emsp;&emsp; <strong style={{color:'#3883b5'}}>{appID}</strong> </p>
                  
             
            <label> Kategorija: 
                <input 
                type='text' 
                value={ppCategory} 
                onChange={(p) => setAppCategory(p.target.value)} 
                />
                </label>
                 
                 

                <label> Priežastis: 
                <input 
                type='text' 
                value={appReason} 
                onChange={(p) => setAppReason(p.target.value)} 
                />
                </label>
           

                <label> Data: 
                <input 
                type='text' 
                value={appDate} 
                onChange={(p) => setAppDate(p.target.value)} 
                
                />
                </label>


                         
                    
                         
            <div>
            <br></br>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <br></br>
            </div>
             
             
             
            <div className='administracija-box-1-button-box'>
            <br></br>
            <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
            value="Išsaugoti" />
                          
            <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
            value="Išvalyti" onClick={handleReset}/>
            </div>
                     
            <div className='administracija-box-1'>
              <div className='administracija-box-1-button-box'>                  
                <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                 value="Grįžti į sąrašą" onClick={navigateToReadAppointment}/>                              
              </div>
            </div>
                   
          </form>
        </div>
      </div>
    </div>
  
  </div>
  
  
  
  
  )
};

  
  export default EditAppointmentFROMLIST;





