

import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState} from 'react';
import axios from 'axios';




const AddPatient = () => {
 
    const [patientName, setPatientName] = useState("");
    const [patientSurname, setPatientSurname] = useState("");
 
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePatientEditSubmit = async (event) => {
      event.preventDefault();


    try {
      const response = await axios.post('http://localhost:8080/patients/add', {
      
        patientName,
        patientSurname,
        });

        console.log('Response:', response.data);
        setSuccessMessage('Pacientas sėkmingai įvestas');
        setErrorMessage('');
        handleSubmit();
        
      
    } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Pacientas NEBUVO įvestas');
      
    }
  };

  const handleReset = () => {
    
    setPatientName('');
    setPatientSurname('');
    
  };

  const handleSubmit = () => {
    
    setPatientName('');
    setPatientSurname('');
    
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

              <h4>1. Įvesti naują pacientą</h4>

              <div>
              <form onSubmit={handlePatientEditSubmit}>
                 
              
                 
                 
                 
                <label> Vardas: 
                <input 
                type='text' 
                value={patientName} 
                onChange={(p) => setPatientName(p.target.value)} 
                />
                </label>
                 
                 
                 
                <label> Pavarde: 
                <input 
                type='text' 
                value={patientSurname} 
                onChange={(p) => setPatientSurname(p.target.value)} 
                
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
                value="Save"/>

                <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
                value="Reset" onClick={handleReset}/>
                </div>
  
              </form>
              </div>
            </div>
        </div>
    </div>
    </div>
    
    
    
    
    )
  };

  
  export default AddPatient;





