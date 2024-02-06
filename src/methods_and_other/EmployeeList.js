
import '../main/custom-bootstrap.css';
import './PatientList.css';
import { useNavigate } from 'react-router-dom';


function EmployeeList({employee}) {

  const navigate = useNavigate();

 
  const navigateToEditEmployee = () => {
    navigate(`/editemployee/${employee.empID}`);};
  
  const navigateToDeleteEmployee = () => {
    navigate(`/deleteemployee/${employee.empID}`);};

    
      return (

        
        <tr>
          <td> {employee.empName} </td>
          <td> {employee.empSurname} </td>
          <td> {employee.empNO} </td>
          <td> {employee.empAddress} </td>
          <td> {employee.empPhone} </td>
          <td> {employee.empEmail} </td>
          <td> {employee.empJobTitle} </td>
          <td> {employee.empCategory} </td>
          <td> {employee.imageUrl} </td>
          <td> 
            <div className='patient-list-button-box'>
              <button type="button" className="btn btn-primary patient-list-button-b" onClick={navigateToEditEmployee}>Koreguoti</button>
              <button type="button" className="btn btn-primary patient-list-button-g" onClick={navigateToDeleteEmployee}>Pašalinti</button>
            </div>     
          </td>
         
        </tr>
        
      );
    }
  
    export default EmployeeList;
  
  
  
  