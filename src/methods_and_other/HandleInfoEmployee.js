
import '../main/custom-bootstrap.css';
import './PatientList.css';
import '../pages/formats/Administracija.css';
import authHeader from "../services/auth-header.js";
import API_ROOT_PATH from '../main/configLogged.js';
import { useState, useEffect} from 'react';
import axios from 'axios';



function HandleInfoEmployee( { appEmployeeID } ) {

  const [empID] = useState(appEmployeeID);
  const [appEmployeeName, setAppEmployeeName] = useState("");
  const [appEmployeeSurname, setAppEmployeeSurname] = useState("");
  const [appEmployeeJobTitle, setAppEmployeeJobTitle] = useState("");


  
  

  const fetchEmployeeByIDdata = async () => {
    try {
      const myUrl = `${API_ROOT_PATH}/employees/get-id/${empID}`;
      console.log('4. Handle - Fetch - (empID):', empID);

      const response = await axios.get(myUrl ,  {headers: authHeader()});

      const employeeData = response.data;
      setAppEmployeeName(employeeData.empName);
      setAppEmployeeSurname(employeeData.empSurname);
      setAppEmployeeJobTitle(employeeData.empJobTitle);

      console.log('4. Handle - Fetch - emp data (response.data):', response.data);
    } catch (error) {
      console.error('Error:', error);  
    }
  };


  useEffect(() => {
    console.log("4. Handle - useEffect-ID (empID):", empID);
    if (empID) {
      fetchEmployeeByIDdata();
    }
  }, [empID]);


  
  
  
  return (
    

    <span>{appEmployeeName} {appEmployeeSurname} ({appEmployeeJobTitle})</span>
      
      

    
  );
}

export default HandleInfoEmployee;
  
  
  