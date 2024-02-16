

import '../main/custom-bootstrap.css';
import '../pages/formats/Administracija.css';
import authHeader from "../services/auth-header";
import API_ROOT_PATH from '../main/configLogged.js';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";
import axios from 'axios';






function EmployeeProfile({idE}) {
  const [currentEmployeeID] = idE;
  const currentUser = AuthService.getCurrentUser();

  const navigate = useNavigate();
  const navigateToEditEmployee = () => { navigate(`/loggedpage/${currentEmployeeID}/editemployee/${currentEmployeeID}`); };



  /*  ------------------   Employee info    -------------------*/
 
  const [currentEmployeeName, setCurrentEmployeeName] = useState('');
  const [currentEmployeeSurname, setCurrentEmployeeSurname] = useState('');
  const [currentEmployeeNO, setCurrentEmployeeNO] = useState('');
  const [currentEmployeeAddress, setCurrentEmployeeAddress] = useState('');
  const [currentEmployeePhone, setCurrentEmployeePhone] = useState('');
  const [currentEmployeeEmail, setCurrentEmployeeEmail] = useState('');
  const [currentEmployeeJobTitle, setCurrentEmployeeJobTitle] = useState('');
  const [currentEmployeeCategory, setCurrentEmployeeCategory] = useState('');
  const [currentEmployeeImageUrl, setCurrentEmployeeImageUrl] = useState('');

   
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');





  useEffect(() => {
  const handleEmployeeSearch = async () => {
    try {
      setSuccessMessage('');
      const response = await axios.get(`${API_ROOT_PATH}/employees/get/${currentEmployeeID}`, {headers: authHeader()});
      const employeeData = response.data;
            
      setCurrentEmployeeName(employeeData.empName);
      setCurrentEmployeeSurname(employeeData.empSurname);
      setCurrentEmployeeNO(employeeData.empNO);
      setCurrentEmployeeAddress(employeeData.empAddress);
      setCurrentEmployeePhone(employeeData.empPhone);
      setCurrentEmployeeEmail(employeeData.empEmail);
      setCurrentEmployeeJobTitle(employeeData.empJobTitle);
      setCurrentEmployeeCategory(employeeData.empCategory);
      setCurrentEmployeeImageUrl(employeeData.imageUrl);
                           
      setSuccessMessage('');
      setErrorMessage('');
                 
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Darbuotojas su tokiu ID nerastas');
    }
};

handleEmployeeSearch(); 


}, [] ); // Patient array - to run once 



 
  

    
    return (
      <div className='administracija-employee-profile-box'>
        <h1>Mano profilis</h1>
               
        <div className='administracija-employee-profile-box'>
          <p> <strong> Vardas: </strong>           &ensp; {currentEmployeeName  } </p>       
          <p> <strong> Pavardė: </strong>          &ensp; {currentEmployeeSurname} </p>            
          <p> <strong> Asmens kodas: </strong>     &ensp; {currentEmployeeNO} </p>     
          <p> <strong> Adresas: </strong>          &ensp; {currentEmployeeAddress} </p>         
          <p> <strong> Tel. nr.: </strong>         &ensp; {currentEmployeePhone} </p>      
          <p> <strong> E-mail: </strong>           &ensp; {currentEmployeeEmail} </p> 
          <p> <strong> Pareigos: </strong>         &ensp; {currentEmployeeJobTitle} </p>         
          <p> <strong> Skyrius: </strong>          &ensp; {currentEmployeeCategory} </p>
          <p> <strong> Puslapio prieiga: </strong>          &ensp; 

          {currentUser.roles &&
          currentUser.roles.map((role, index) => <span key={index}>{role}  &ensp;</span>)} 

          </p>           
          <p> <strong> Profilio foto nuoroda: </strong> &ensp; {currentEmployeeImageUrl} </p> 



          <div className='administracija-employee-profile-box'>
            <br></br>
            <button type="button" className="btn btn-primary administracija-box-1-button-b" onClick={navigateToEditEmployee}>
                Koreguoti duomenis 
            </button>
          </div>  




        </div> 
                     
      </div>
      
      

    );


  }

  export default EmployeeProfile;



