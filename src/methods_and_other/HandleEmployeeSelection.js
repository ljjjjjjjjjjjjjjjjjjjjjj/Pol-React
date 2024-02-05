
import '../main/custom-bootstrap.css';
import './PatientList.css';
import EmployeeSelectionRow from './EmployeeSelectionRow.js';
import { useState, useEffect} from 'react';
import axios from 'axios';




function HandleEmployeeSelection() {

  
  const [appEmployee, setAppEmployee] = useState("");
  const [appEmployeeCategory, setAppEmployeeCategory] = useState("");
  const [appSelectedEmployees, setAppSelectedEmployees] = useState( [] );


  const [categorySelected, setCategorySelected] = useState(false); 


  const fetchEmployeeByCategoryData = async () => {
    try {
      const myUrl = `http://localhost:8080/employees/get/category/${appEmployeeCategory}`;
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




  const handleEmployeeCategoryChange = (event) => {
    const selectedCategory = event.target.value;
           
    setAppEmployeeCategory(selectedCategory);
    console.log("handleEmployeeCategoryChange-Category:", appEmployeeCategory);

    setCategorySelected(true);
    
  };

  


  const handleEmployeeChange = (event) => {
    const selectedEmployee = event.target.value;
    setAppEmployee(selectedEmployee);
    
  
  }

  
 

  
  
  return (
    <div>
      <form>
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
        <form>
          <label>Pasirinkite gydytoją: </label>
          <select
            value={appEmployee}
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

export default HandleEmployeeSelection;