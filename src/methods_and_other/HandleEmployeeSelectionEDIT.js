
import '../main/custom-bootstrap.css';
import './PatientList.css';
import authHeader from "../services/auth-header";
import API_ROOT_PATH from '../main/configLogged.js';
import EmployeeSelectionRow from './EmployeeSelectionRow.js';
import { useState, useEffect} from 'react';
import axios from 'axios';




function HandleEmployeeSelectionEDIT( props ) {

  
const [appEmployeeID, setAppEmployeeID] = useState('');
const [appEmployeeCategory, setAppEmployeeCategory] = useState('');


useEffect(() => {
  if (props.categoryInfo) {
    setAppEmployeeCategory(props.categoryInfo);
  }
}, [props.categoryInfo]);

useEffect(() => {
  if (props.idInfo) {
    setAppEmployeeID(props.idInfo);
  }
}, [props.idInfo]);

console.log('2. HANDLE - pirminiai duomenys (props.categoryInfo): ',props.categoryInfo, '(props.idInfo):', props.idInfo);




  const [appSelectedEmployees, setAppSelectedEmployees] = useState( [] );
  const [empInfo, setEmpInfo] = useState ("");
  


  
  const fetchEmployeeByCategoryData = async () => {
    try {
      const myUrl = ` ${API_ROOT_PATH}/employees/get-category/${appEmployeeCategory}`;
      console.log('2. HANDLE - fetchEmployeeByCategoryData (appEmployeeCategory):', appEmployeeCategory);

      const response = await axios.get(myUrl,  {headers: authHeader()});
      const employeeData = response.data;
      setAppSelectedEmployees(employeeData);

      console.log('2. HANDLE - fetchEmployeeByCategoryData (Response): ', response.data);
    } catch (error) {
      console.error('2. HANDLE - fetchEmployeeByCategoryData (Error): ', error); 
    }
  };




  useEffect(() => {
    console.log("2. HANDLE - useEffect CAT (appEmployeeCategory):", appEmployeeCategory);
    if (appEmployeeCategory.length > 0)
    {fetchEmployeeByCategoryData();}
  }, [appEmployeeCategory]);

  useEffect(() => {
    console.log("2. HANDLE - useEffect ID  (appEmployeeID): ", appEmployeeID);
    if (appEmployeeID == null)
    {handleEmployeeChange();}
  }, [appEmployeeID]);


  useEffect(() => {
    console.log("2. HANDLE - useEffect INFO (empInfo): ", empInfo);
    if (empInfo == null)
    {handleEmployeeChange();}
  }, [empInfo]);




  const handleEmployeeCategoryChange = (event) => {
    const selectedCategory = event.target.value;
           
    setAppEmployeeCategory(selectedCategory);
    console.log("2. HANDLE - handle Category (appEmployeeCategory):", appEmployeeCategory);

    
  };

  


  const handleEmployeeChange = (event) => {
    const selectedEmployee = event.target.value;
    setAppEmployeeID(selectedEmployee);
    console.log("2. HANDLE - handle ID (selectedEmployee): ", selectedEmployee);

    const info = {
      empName: selectedEmployee.empName,
      empSurname: selectedEmployee.empSurname,
      empJobTitle: selectedEmployee.jobTitle
    };
    setEmpInfo(info);
    console.log("2. HANDLE - handle INFO (empInfo):", empInfo );

    props.onEmployeeSelect(selectedEmployee, info);

    
    
  
  }

  
 

  
  
  return (
    <div className='administracija-box-container'>
      

      <form className='administracija-box-3'>
        <label>Gydytojo kategorija: </label>
        <select               
          value={appEmployeeCategory}
          onChange={(c) => handleEmployeeCategoryChange(c)}
        >
          <option style={{ color: 'blue' }} value={props.categoryInfo}>
            {`${props.categoryInfo}`} 
            </option>
          <option value="Seimos-medicina">Šeimos medicina</option>
          <option value="Gydytojai-specialistai">Gydytojas specialistas</option>
          <option value="Odontologija">Odontologas</option>
          <option value="Slaugytojos">Tyrimai ir skiepai</option>
        </select>
      </form>


      
        <form className='administracija-box-3'>
          <label>Pasirinkite gydytoją: </label>
          <select
            value={appEmployeeID}
            onChange={(e) => handleEmployeeChange(e)}
          >
            <option style={{ color: 'blue' }} value={props.idInfo}>
            {`${props.nameInfo} ${props.surnameInfo} (${props.jobTitleInfo})`} 
            </option>
            {appSelectedEmployees.map((employee) => (
              <EmployeeSelectionRow key={employee.empID} employee={employee}/>
            ))}
            
          </select>
        </form>
      
    </div>
  );
}

export default HandleEmployeeSelectionEDIT;