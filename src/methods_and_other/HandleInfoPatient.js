
import '../main/custom-bootstrap.css';
import './PatientList.css';
import '../pages/formats/Administracija.css';
import authHeader from "../services/auth-header.js";
import API_ROOT_PATH from '../main/configLogged.js';
import { useState, useEffect} from 'react';
import axios from 'axios';



function HandleInfoPatient( { appPatientID } ) {

  const [patientID] = useState(appPatientID);
  const [appPatientName, setAppPatientName] = useState("");
  const [appPatientSurname, setAppPatientSurname] = useState("");
  const [appPatientNO, setAppPatientNO] = useState("");


  
  

  const fetchPatientByIDdata = async () => {
    try {
      const myUrl = `${API_ROOT_PATH}/patients/get-id/${patientID}`;
      console.log('4. Handle - Fetch - (patientID):', patientID);

      const response = await axios.get(myUrl ,  {headers: authHeader()});

      const patientData = response.data;
      setAppPatientName(patientData.patientName);
      setAppPatientSurname(patientData.patientSurname);
      setAppPatientNO(patientData.patientNO);

      console.log('4. Handle - Fetch - patient data (response.data):', response.data);
    } catch (error) {
      console.error('Error:', error);  
    }
  };


  useEffect(() => {
    console.log("4. Handle - useEffect-ID (patientID):", patientID);
    if (patientID) {
      fetchPatientByIDdata();
    }
  }, [patientID]);


  
  
  
  return (
    

    <span>{appPatientName} {appPatientSurname} ({appPatientNO})</span>
      
      

    
  );
}

export default HandleInfoPatient;
  
  
  