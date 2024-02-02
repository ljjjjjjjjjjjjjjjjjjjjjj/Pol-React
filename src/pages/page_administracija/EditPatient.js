import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState} from 'react';
import axios from 'axios';



const EditPatient = () => {


  const [selectedPatientID, setSelectedPatientID] = useState("");

  const [patientID, setPatientID] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientSurname, setPatientSurname] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientCategory, setPatientCategory] = useState("");

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/patients/get/${selectedPatientID}`);
      const patientData = response.data;

      setPatientID(patientData.patientID);
      setPatientName(patientData.patientName);
      setPatientSurname(patientData.patientSurname);
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
  

  const handlePatientEditSubmit = async (event) => {
    event.preventDefault();

  try {
    const response = await axios.put(`http://localhost:8080/patients/edit/${selectedPatientID}`, {
      patientID,
      patientName, 
      patientSurname, 
      patientAddress, 
      patientPhone, 
      patientEmail, 
      patientCategory
      });

      console.log('Response:', response.data);
      setSuccessMessage('Pacientas sėkmingai atnaujintas');
      setErrorMessage('');
      handleReset();
      
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Pacientas NEBUVO atnaujintas');
    
  }
};

const handleReset = () => {
  setSelectedPatientID('');
  setPatientID('');
  setPatientName('');
  setPatientSurname('');
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

            <h4>3. Keisti esamo paciento duomenis</h4>

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



            <div>
            <form onSubmit={handlePatientEditSubmit}>

              <p>&ensp;ID:&emsp;&emsp;&emsp; <strong style={{color:'#3883b5'}}>{patientID}</strong> </p>
            
               
               
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

              <label> Adresas: 
              <input 
              type='text' 
              value={patientAddress} 
              onChange={(p) => setPatientAddress(p.target.value)} 
              
              />
              </label>

              <label> Tel. nr: 
              <input 
              type='text' 
              value={patientPhone} 
              onChange={(p) => setPatientPhone(p.target.value)} 
              
              />
              </label>

              <label> E-paštas: 
              <input 
              type='text' 
              value={patientEmail} 
              onChange={(p) => setPatientEmail(p.target.value)} 
              
              />
              </label>

              <label> Kategorija: 
              <input 
              type='text' 
              value={patientCategory} 
              onChange={(p) => setPatientCategory(p.target.value)} 
              
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
              value="Save" />

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

  
  export default EditPatient;





