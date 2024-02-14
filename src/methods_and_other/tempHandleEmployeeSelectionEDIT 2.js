
import '../main/custom-bootstrap.css';
import './PatientList.css';
import EmployeeSelectionRow from './EmployeeSelectionRow.js';
import { useState, useEffect} from 'react';
import axios from 'axios';




function HandleEmployeeSelectionEDIT( props ) {

  
  const [appEmployee, setAppEmployee] = useState(props.categoryInfo);
  const [appEmployeeCategory, setAppEmployeeCategory] = useState(props.idInfo);

  console.log('AR PERDUOTI DUOMENYS:?',props.categoryInfo, props.idInfo);




  const [appSelectedEmployees, setAppSelectedEmployees] = useState( [] );
  const [empInfo, setEmpInfo] = useState ("");
  


  
  const fetchEmployeeByCategoryData = async () => {
    try {
      const myUrl = `http://localhost:8080/logged/employees/get/category/${appEmployeeCategory}`;
      console.log('Emp kategorija:', appEmployeeCategory);

      const response = await axios.get(myUrl);
      const employeeData = response.data;
      setAppSelectedEmployees(employeeData);

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error); 
    }
  };




  useEffect(() => {
    console.log("useEffect-Category:", appEmployeeCategory);
    if (appEmployeeCategory.length > 0)
    {fetchEmployeeByCategoryData();}
  }, [appEmployeeCategory]);

  useEffect(() => {
    console.log("useEffect-Employee:", appEmployee);
    if (appEmployee == null)
    {handleEmployeeChange();}
  }, [appEmployee]);


  useEffect(() => {
    console.log("useEffect-INFO APP:", empInfo);
    if (empInfo == null)
    {handleEmployeeChange();}
  }, [empInfo]);




  const handleEmployeeCategoryChange = (event) => {
    const selectedCategory = event.target.value;
           
    setAppEmployeeCategory(selectedCategory);
    console.log("handleEmployeeCategoryChange-Category:", appEmployeeCategory);

    
  };

  


  const handleEmployeeChange = (event) => {
    const selectedEmployee = event.target.value;
    setAppEmployee(selectedEmployee);
    console.log("handleEmployeeChange-employee:", selectedEmployee);

    const info = `${selectedEmployee.empName} ${selectedEmployee.empSurname} (${selectedEmployee.jobTitle})`;
    setEmpInfo(info);
    console.log("INFO TO BE TRANSFERED:", empInfo );

    props.onEmployeeSelect(selectedEmployee, empInfo);

    
    
  
  }

  
 

  
  
  return (
    <div className='administracija-box-container'>
      

      <form className='administracija-box-3'>
        <label>Gydytojo kategorija: </label>
        <select               
          value={appEmployeeCategory}
          onChange={(c) => handleEmployeeCategoryChange(c)}
        >
          <option style={{ color: 'blue' }} value={appEmployeeCategory}>
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
            value={appEmployee}
            onChange={(e) => handleEmployeeChange(e)}
          >
            <option style={{ color: 'blue' }} value={appEmployee}>
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