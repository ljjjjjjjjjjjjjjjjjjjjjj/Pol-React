import config from '../main/config.js';
import './EmployeeList.css';


function EmployeeCard({employee}) {

    
      return (

      

        <div className='employee-card'>
          <img src={ config + employee.imageUrl} alt={employee.empName} />
          <h3> {employee.empName}&nbsp;{employee.empSurname}</h3>
          <p> {employee.empCategory}</p>
        </div>
      );
    }
  
    export default EmployeeCard;
  
  
  