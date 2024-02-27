import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import '../formats/ElementsButtons.css';
import NavigateToPatient from '../../methods_and_other/NavigateToPatient.js';
import authHeader from "../../services/auth-header";
import API_ROOT_PATH from '../../main/configLogged.js';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';





function EditPatientFROMLIST() {
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
        const response = await axios.get(`${API_ROOT_PATH}/patients/get/${idI}`,  {headers: authHeader()});
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
  
  
  }, [] ); // Patient array - to run once 
  
  


  const handlePatientEditSubmit = async (event) => {
    event.preventDefault();

  try {
    const response = await axios.put(`${API_ROOT_PATH}/patients/edit/${idI}`, 
    {
      patientID, 
      patientName, 
      patientSurname, 
      patientNO,
      patientAddress, 
      patientPhone, 
      patientEmail, 
      patientCategory
    },  
    {headers: authHeader()}
    );

      console.log('Response:', response.data);
      handleReset();

      setSuccessMessage('Pacientas sėkmingai atnaujintas');
      setErrorMessage('');
      
          
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Pacientas NEBUVO atnaujintas');
    
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
        <h4>3. Keisti esamo darbuotojo duomenis</h4>
                         
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


            <label> No.: 
              <input 
              type='text' 
              value={patientNO} 
              onChange={(p) => setPatientNO(p.target.value)}                 
              />
              <p className='administracija-box-1-comment'> <small>(Numerį gali sudaryti tik skaičiai)</small></p>
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
            <input type='submit' className="btn btn-primary button-1-blue" 
            value="Išsaugoti" />
                          
            <input type='reset' className="btn btn-secondary button-1-grey" 
            value="Išvalyti" onClick={handleReset}/>
            </div>
                     
            <div className='administracija-box-1'>
              <div className='administracija-box-1'>
                < NavigateToPatient idE={idE} />
              </div>
            </div>
                   
          </form>
        </div>
      </div>
    </div>
  
  </div>
  
  
  
  
  )
};

  
  export default EditPatientFROMLIST;





