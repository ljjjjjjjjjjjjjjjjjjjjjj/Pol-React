
import '../main/custom-bootstrap.css';
import './PatientList.css';
import '../pages/formats/Administracija.css';
import authHeader from "../services/auth-header";
import API_ROOT_PATH from '../main/configLogged.js';
import PatientSelectionRow from './PatientSelectionRow.js';
import { useState, useEffect} from 'react';
import axios from 'axios';



function HandlePatientSelectionEDIT( props ) {

  const [appPatientID, setAppPatientID] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientSurname, setPatientSurname] = useState("");
  const [patientNO, setPatientNO] = useState("");

  const [appSelectedPatients, setAppSelectedPatients] = useState( [] );
  

  
  useEffect(() => {
    if (props.idInfoPatient) {
      setAppPatientID(props.idInfoPatient);
    }
  }, [props.idInfoPatient]);


  useEffect(() => {
    if (props.nameInfoPatient) {
      setPatientName(props.nameInfoPatient);
    }
  }, [props.nameInfoPatient]);
  
 
  useEffect(() => {
    if (props.surnameInfoPatient) {
      setPatientSurname(props.surnameInfoPatient);
    }
  }, [props.surnameInfoPatient]);

  useEffect(() => {
    if (props.noInfoPatient) {
      setPatientNO(props.noInfoPatient);
    }
  }, [props.noInfoPatient]);

  console.log('3. HANDLE - pirminiai duomenys (props...): ', props.idInfoPatient, '(props.name):', props.nameInfoPatient);






  const fetchPatientByNameData = async () => {
    try {
      const myUrl = `${API_ROOT_PATH}/patients/get/name/${patientName}`;
      console.log('3. Handle - Fetch - (patientName):', patientName);

      const response = await axios.get(myUrl,  {headers: authHeader()});

      const patientData = response.data;
      setAppSelectedPatients(patientData);

      console.log('3. Handle - Fetch - patient data (response.data):', response.data);
    } catch (error) {
      console.error('Error:', error);  
    }
  };




  useEffect(() => {
    console.log("3. Handle - useEffect-Name (patientName):", patientName);
    if (patientName.length > 0)
    {fetchPatientByNameData();}
  }, [patientName]);
  

  useEffect(() => {
    console.log("3. Handle - useEffect (appPatientID):", appPatientID);
    if (appPatientID == null)
    {handlePatientNameChange();}
  }, [appPatientID]);


  




  const  handlePatientSearchByName = (event) => {
    
    console.log("3. handlePatientSearchByName (appPatientName) AA:", patientName);
      

  };

  


  const handlePatientNameChange = (event) => {
    const selectedPatient = event.target.value;
    setAppPatientID(selectedPatient);

    console.log("3. handlePatientNameChange (event.target.value):", event.target.value);
    

    const patientInfo = {
      empName: patientName,
      empSurname: patientSurname,
      empJobTitle: patientNO
    };

    console.log("3. HANDOVER TO 1. (selectedPatient):", selectedPatient);
    console.log("3. HANDOVER TO 1. (patientInfo):", patientInfo);


    props.onPatientSelect(selectedPatient, patientInfo); // Send selected employee to parent
    
  
  }
  


  
  return (
    <div >
      
      <div className='administracija-box-3-PATIENTS'>


      <form className='administracija-box-3-PATIENTS-flex-container'>
      <label>Ieškoti paciento pagal vardą:
        
        <input 
          type="text" 
          defaultValue={patientName}
          onChange={(n) => setPatientName(n.target.value)}
          
        />
      </label>
      <div className='administracija-box-3-PATIENTS-with-button'>
      <input type='button' className="btn btn-primary administracija-box-3-PATIENTS-button" 
            value="Ieškoti"  onClick={() => handlePatientSearchByName()}/>
      </div>
      </form>

      </div>
    




      <div className='administracija-box-4-PATIENTS'>

        <form >
        <label>Pasirinkite pacientą: </label>
        <select
          value={appPatientID}
          onChange={(p) => handlePatientNameChange(p)}
        >
        <option style={{ color: 'blue' }} value={props.idInfoPatient}>
            {`${props.nameInfoPatient} ${props.surnameInfoPatient} (${props.noInfoPatient})`} 
            </option>
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
  
  
  