import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import authHeader from "../../services/auth-header";
import API_ROOT_PATH from '../../main/configLogged.js';
import EmployeeList from '../../methods_and_other/EmployeeList';
import { useState,  useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ReadEmployee = () => {

  const navigate = useNavigate();
  const navigateToAddEmployee = () => {
    navigate(`/loggedpage/addemployee`);
  };
  const navigateToAdministracija = () => {
    navigate(`/loggedpage/administracija`);
  };

  const [employees, setEmployees] = useState( [] );
  const [selectedOption, setSelectedOption] = useState("");
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ROOT_PATH}/employees/get/all`,  {headers: authHeader()});
        
        let sortedEmployees = response.data;

        if (selectedOption) {
          sortedEmployees = sortedEmployees.sort((a, b) => {
              const isNumeric = !isNaN(a[selectedOption]) && !isNaN(b[selectedOption]);
      
              if (isNumeric) {
                  return a[selectedOption] - b[selectedOption]; // number comparison
              } else {                   
                  return a[selectedOption].localeCompare(b[selectedOption]);  // String comparison
              }
          });
      }
        setEmployees(sortedEmployees);

        console.log('Response:', response.data);


      } catch (error) {
        console.error('Error:', error); 
      }
    };

    fetchData();
  }, [selectedOption]);


  const handleSelectedOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <div className='administracija'>
      <h1>Darbuotų sąrašas</h1>

    
      <div className='administracija-drop-down'>
        <label>Pasirinkti filtrą: </label>
        <select value={selectedOption} onChange={handleSelectedOption}>
          <option value="">pasirinkti...</option>
          <option value="empName">Vardas</option>
          <option value="empSurname">Pavardė</option>
          <option value="empNO">No.</option>
        </select>

        <input type='button' className="btn btn-secondary administracija-box-1-button-z" 
                   value="Prideti naują" onClick={navigateToAddEmployee}/>      
        
      </div>

      
      <div className='administracija-list'>

        <table className="table table-hover">

          <thead className="table-light">
            <tr>
              <th scope='col'>Vardas</th>
              <th scope='col'>Pavarde</th>
              <th scope='col'>No.</th>
              <th scope='col'>Adresas</th>
              <th scope='col'>Tel. nr.</th>
              <th scope='col'>E-pastas</th>
              <th scope='col'>Pareigos </th>
              <th scope='col'>Pareigų kategorija</th>
              <th scope='col'>Nuotraukos url</th>
              <th scope='col'>Keisti</th>
             
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <EmployeeList key={employee.empID} employee={employee} />
            ))}
          </tbody> 
                 
        </table>

                <div className='administracija-box-1'>
                  <div className='administracija-box-1-button-box-center'>     
                    <p>&ensp;</p>             
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value="Grįžti atgal" onClick={navigateToAdministracija}/>                              
                  </div>
                </div>

      </div>

    </div>
    

    
    )
  };

  
  export default ReadEmployee;


