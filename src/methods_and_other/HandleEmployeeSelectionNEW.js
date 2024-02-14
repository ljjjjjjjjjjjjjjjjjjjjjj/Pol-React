
import '../main/custom-bootstrap.css';
import './PatientList.css';
import authHeader from "../services/auth-header";
import API_ROOT_PATH from '../main/configLogged.js';
import EmployeeSelectionRow from './EmployeeSelectionRow.js';
import { useState, useEffect} from 'react';
import axios from 'axios';




function HandleEmployeeSelectionNEW( props ) {

  const [appEmployee, setAppEmployee] = useState('');
  const [appEmployeeID, setAppEmployeeID] = useState('');
  const [appEmployeeCategory, setAppEmployeeCategory] = useState('');
  

  const [categorySelected, setCategorySelected] = useState(false); 


  const [appSelectedEmployees, setAppSelectedEmployees] = useState( [] );
  const [empInfo, setEmpInfo] = useState('');


  

  const fetchEmployeeByCategoryData = async () => {
    try {
      const myUrl = `${API_ROOT_PATH}/employees/get/category/${appEmployeeCategory}`;
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
    if (empInfo == null || undefined)
    {handleEmployeeChange();}
  }, [empInfo]);




  const handleEmployeeCategoryChange = (event) => {
    const selectedCategory = event.target.value;
      
    setAppEmployeeCategory(selectedCategory);
    console.log("handleEmployeeCategoryChange-Category:", appEmployeeCategory);

    setCategorySelected(true);
    
  };

  


  const handleEmployeeChange = (event) => {
    const selectedEmployee = event.target.value;
    setAppEmployeeID(selectedEmployee);
    console.log("2. HANDLE - handle ID (selectedEmployee): ", selectedEmployee);
    console.log("2. HANDLE - handle ID (appEmployeeID): ", appEmployeeID);

    
    const info = {
      empName: selectedEmployee.empName,
      empSurname: selectedEmployee.empSurname,
      empJobTitle: selectedEmployee.jobTitle
    };

    setEmpInfo(info);
    console.log("2. HANDLE - handle INFO (empInfo):", info );

    props.onEmployeeSelect(selectedEmployee);
   
  
  }

  
 

  
  
  return (
    <div className='administracija-box-container'>
      

      <form className='administracija-box-3'>
        <label>Gydytojo kategorija: </label>
        <select               
          value={appEmployeeCategory}
          onChange={(c) => handleEmployeeCategoryChange(c)}
        >
          <option value=""> ... </option>
          <option value="Seimos-medicina">Šeimos medicina</option>
          <option value="Gydytojai-specialistai">Gydytojas specialistas</option>
          <option value="Odontologija">Odontologas</option>
          <option value="Slaugytojos">Tyrimai ir skiepai</option>
        </select>
      </form>


      {categorySelected && (
        <form className='administracija-box-3'>
          <label>Pasirinkite gydytoją: </label>
          <select
            value={appEmployeeID}
            onChange={(e) => handleEmployeeChange(e)}
          >
            <option value=""> ... </option>
            {appSelectedEmployees.map((employee) => (
              <EmployeeSelectionRow key={employee.empID} employee={employee}/>
            ))}
          </select>
        </form>
      )}
    </div>
  );
}

export default HandleEmployeeSelectionNEW;