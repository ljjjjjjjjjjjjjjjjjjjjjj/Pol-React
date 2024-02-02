

import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





const AddAppointment = () => {

  const navigate = useNavigate();
  const navigateToReadAppointment = () => {
    navigate(`/readappointment`);
  };
  
  const navigateToAdministracija = () => {
    navigate(`/administracija`);
  };
 
    const [appCategory, setAppCategory] = useState("");
    const [appReason, setAppReason] = useState("");
    const [appDate, setAppDate] = useState("");
 
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAppointmentEditSubmit = async (event) => {
      event.preventDefault();


    try {
      const response = await axios.post('http://localhost:8080/appointments/add', {
        appCategory, 
        appReason,
        appDate
        });

        console.log('Response:', response.data);
        setSuccessMessage('Rezervacija sėkmingai įvesta');
        setErrorMessage('');
        handleSubmit();
        
      
    } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Rezervacija NEBUVO įvesta');
      
    }
  };

  const handleReset = () => {
    
    setAppCategory('');
    setAppReason(''); 
    setAppDate('');
    
  };

  const handleSubmit = () => {
    
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

              <h4>1. Įvesti naują Rezervaciją</h4>

              <div>
              <form onSubmit={handleAppointmentEditSubmit}>
                 
              
                 
                 
                 
                <label> Kategorija: 
                <input 
                type='text' 
                value={appCategory} 
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
                value="Išsaugoti"/>

                <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
                value="Išvalyti" onClick={handleReset}/>
                </div>
  
              </form>

                <div className='administracija-box-1'>
                  <div className='administracija-box-1-button-box-center'>                  
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value="&#9665; Rezervacijų sąrašas" onClick={navigateToReadAppointment}/>
                     <br></br>
                     <br></br>
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value=" &#9665; Administracija " onClick={navigateToAdministracija}/>                                     
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
    
    
    
    
    )
  };

  
  export default AddAppointment;





