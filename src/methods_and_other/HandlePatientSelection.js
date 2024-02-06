
import '../main/custom-bootstrap.css';
import './PatientList.css';
import '../pages/formats/Administracija.css';
import PatientSelectionRow from './PatientSelectionRow.js';
import { useState, useEffect} from 'react';
import axios from 'axios';



function HandlePatientSelection( { onPatientSelect } ) {

  const [appPatientID, setAppPatientID] = useState("");
  const [appPatientName, setAppPatientName] = useState("");
  const [appSelectedPatients, setAppSelectedPatients] = useState( [] );

  const [nameSelected, setNameSelected] = useState(false); 


  const fetchPatientByNameData = async () => {
    try {
      const myUrl = `http://localhost:8080/patients/get/name/${appPatientName}`;
      console.log('Fetch - patient name:', appPatientName);

      const response = await axios.get(myUrl);

      const patientData = response.data;
      setAppSelectedPatients(patientData);

      console.log('Fetch - patient data:', response.data);
    } catch (error) {
      console.error('Error:', error);  
    }
  };




  useEffect(() => {
    console.log("useEffect-Name:", appPatientName);
    if (appPatientName.length > 0)
    {fetchPatientByNameData();}
  }, [appPatientName]);
  

  useEffect(() => {
    console.log("useEffect-Patient:", appPatientID);
    if (appPatientID == null)
    {handlePatientNameChange();}
  }, [appPatientID]);





  const  handlePatientSearchByName = (event) => {
    console.log("handlePatientSearchByName-Name:", appPatientName);
    setNameSelected(true);
    fetchPatientByNameData();
    
  };

  


  const handlePatientNameChange = (event) => {
    const selectedPatient = event.target.value;
    setAppPatientID(selectedPatient);
    console.log("handlePatientNameChange-patient:", appPatientID);
    onPatientSelect(selectedPatient); // Send selected employee to parent
    
  
  }
  


  
  return (
    <div >
      
      <div className='administracija-box-3-PATIENTS'>

     


      
      <form className='administracija-box-3-PATIENTS-flex-container'>
      <label>Ieškoti paciento pagal vardą:
        
        <input 
          type="text" 
          value={appPatientName}
          onChange={(n) => setAppPatientName(n.target.value)}
          
        />
      </label>
      <div className='administracija-box-3-PATIENTS-with-button'>
      <input type='button' className="btn btn-primary administracija-box-3-PATIENTS-button" 
            value="Ieškoti"  onClick={() => handlePatientSearchByName()}/>
      </div>
      </form>

      </div>
    




    <div className='administracija-box-4-PATIENTS'>
  


      {nameSelected && (
        <form >
          <label>Pasirinkite pacientą: </label>
          <select
            value={appPatientID}
            onChange={(p) => handlePatientNameChange(p)}
          >
            <option value=""> ... </option>
            {(appSelectedPatients ?? []).map((patient) => (
              <PatientSelectionRow key={patient.patientID} patient={patient}/>
            ))}
          </select>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </form>
        
      )}
      
    </div>











    </div>

    
  );
}

export default HandlePatientSelection;
  
  
  