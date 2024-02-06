import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import EmployeeList from '../../methods_and_other/EmployeeList';
import { useState,  useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ReadEmployee = () => {

  const navigate = useNavigate();
  const navigateToAddEmployee = () => {
    navigate(`/addemployee`);
  };
  const navigateToAdministracija = () => {
    navigate(`/administracija`);
  };

  const [employees, setEmployees] = useState( [] );
  const [selectedOption, setSelectedOption] = useState("");
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/employees/get/all');
        
        let sortedEmployees = response.data;

        if (selectedOption) {
        sortedEmployees = sortedEmployees.sort((a, b) => a[selectedOption].localeCompare(b[selectedOption]));
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
          <option value="empID">ID</option>
          <option value="empName">Vardas</option>
          <option value="empSurname">Pavardė</option>
        </select>

        <input type='button' className="btn btn-secondary administracija-box-1-button-z" 
                   value="Prideti naują" onClick={navigateToAddEmployee}/>      
        
      </div>

      
      <div className='administracija-list'>

        <table className="table table-hover">

          <thead className="table-light">
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Vardas</th>
              <th scope='col'>Pavarde</th>
              <th scope='col'>Adresas</th>
              <th scope='col'>Tel. nr.</th>
              <th scope='col'>E-pastas</th>
              <th scope='col'>Kategorija</th>
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


