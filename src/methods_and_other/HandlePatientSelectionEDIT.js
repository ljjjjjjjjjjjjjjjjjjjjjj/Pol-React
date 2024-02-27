
import '../main/custom-bootstrap.css';
import './PatientList.css';
import '../pages/formats/Administracija.css';
import '../pages/formats/ElementsButtons.css';
import authHeader from "../services/auth-header";
import API_ROOT_PATH from '../main/configLogged.js';
import PatientSelectionRow from './PatientSelectionRow.js';
import { useState, useEffect} from 'react';
import axios from 'axios';



function HandlePatientSelectionEDIT( props ) {
  const [existingPatientID, setExistingPatientID] = useState("");
  const [existingPatientName, setExistingPatientName] = useState("");
  const [existingPatientSurname, setExistingPatientSurname] = useState("");
  const [existingPatientNO, setExistingPatientNO] = useState("");

  const [newPatientID, setNewPatientID] = useState("");
  const [newPatientName, setNewPatientName] = useState("");
  const [newPatientSurname, setNewPatientSurname] = useState("");
  const [newPatientNO, setNewPatientNO] = useState("");

  const [appSelectedPatients, setAppSelectedPatients] = useState( [] );
  const [patientNameButtonClicked, setPatientNameButtonClicked] = useState(false);
  

  
  useEffect(() => {
    if (props.idInfoPatient) {
      setExistingPatientID(props.idInfoPatient);
    }
  }, [props.idInfoPatient]);


  useEffect(() => {
    if (props.nameInfoPatient) {
      setExistingPatientName(props.nameInfoPatient);
    }
  }, [props.nameInfoPatient]);
  
 
  useEffect(() => {
    if (props.surnameInfoPatient) {
      setExistingPatientSurname(props.surnameInfoPatient);
    }
  }, [props.surnameInfoPatient]);

  useEffect(() => {
    if (props.noInfoPatient) {
      setExistingPatientNO(props.noInfoPatient);
    }
  }, [props.noInfoPatient]);

  console.log('3. HANDLE - pirminiai duomenys (props...): ', props.idInfoPatient, '(props.name):', props.nameInfoPatient);






  const fetchPatientByNameData = async () => {
    try {
      const myUrl = `${API_ROOT_PATH}/patients/get/name/${newPatientName}`;
      console.log('3. Handle - Fetch - (newPatientName):',newPatientName);

      const response = await axios.get(myUrl,  {headers: authHeader()});

      const patientData = response.data;
      setAppSelectedPatients(patientData);

      console.log('3. Handle - Fetch - patient data (response.data):', response.data);
    } catch (error) {
      console.error('Error:', error);  
    }
  };




  useEffect(() => {
    console.log("3. Handle - useEffect-Name (newPatientName):", newPatientName);
    if (newPatientName.length > 0)
    {fetchPatientByNameData();}
  }, [newPatientName]);
  

  useEffect(() => {
    console.log("3. Handle - useEffect (newPatientID):", newPatientID);
    if (newPatientID == null)
    {handlePatientNameChange();}
  }, [newPatientID]);


  




  const  handlePatientSearchByName = (event) => {
    
    console.log("3. handlePatientSearchByName (appPatientName) AA:", newPatientName);
    setPatientNameButtonClicked(true);
      

  };

  


  const handlePatientNameChange = (event) => {
    const selectedPatient = event.target.value;
    setNewPatientID(selectedPatient);

    console.log("3. handlePatientNameChange (event.target.value):", event.target.value);
    



    console.log("3. HANDOVER TO 1. (selectedPatient):", selectedPatient);
   

    props.onPatientSelect(selectedPatient); // Send selected employee to parent
    
  
  }
  


  
  return (
    <div >
      
      <div className='administracija-box-3-PATIENTS'>


      <form className='administracija-box-3-PATIENTS-flex-container'>
      <label htmlFor="patientNameInput">Paciento vardas:
        
        <input 
          type="text" 
          id="patientNameInput" 
          onChange={(n) => setNewPatientName(n.target.value)}
          
        />
      </label>
      <div className='administracija-box-3-PATIENTS-with-button'>
      <input type='button' 
            className="btn btn-primary button-1-blue" 
            value="Ieškoti"  
            onClick={() => handlePatientSearchByName()}/>
      </div>
      </form>

      </div>
    




      <div className='administracija-box-4-PATIENTS'>

        <form >
        <label>Pasirinkite pacientą: </label>
        <select
          value={newPatientID}
          onChange={(p) => handlePatientNameChange(p)}
        >
          {!patientNameButtonClicked && (
            <option style={{ color: 'blue' }} value={props.idInfoPatient}>
              {`${props.nameInfoPatient} ${props.surnameInfoPatient} (${props.noInfoPatient})`} 
            </option>
          )}

          {patientNameButtonClicked && (
            <option value=''>
              ... 
            </option>
          )}
      
        {(appSelectedPatients ?? []).map((patient) => (
          <PatientSelectionRow key={patient.patientID} patient={patient}/>
        ))}
        </select>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        </form>
        
      
      
    </div>




    </div>

    
  );

}

export default HandlePatientSelectionEDIT;
  
  
  