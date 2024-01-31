


import { useState, useEffect } from 'react';
import EmployeeCard from '../methods_and_other/EmployeeCard';
import './formats/App.css';
import '../main/custom-bootstrap.css';




const fetchData = () => {                                 // function    =   () => {}    
  return fetch( "http://localhost:8080/employees/get/all" );  
}                                                         // fetch irgi yra Promise



const Employees = () => {
    
  const [employees, setEmployees] = useState( [] );



  useEffect( () => {
  
      fetchData()
      .then( response => response.json())
      .then( json => setEmployees( json ))
      .catch( e => console.error (e))
  
      console.log("Promisas paleistas");
    
    } , [] );



  return (
    <div className='app'>

      <div>   
           <p>My Page</p>
           <br></br>
           <p>TBD</p>
           <br></br>
           <p>TBD</p>
           <br></br>
           <p>TBD</p>
      </div>

      <br></br>

      <div>
      <br></br>
      <h1>Employee data</h1>
      <br></br>
      <div className='employee-list'>
       {employees.map( employee => (
          <EmployeeCard key={employee.empID} employee={employee} />
       ))}
      </div>
      </div>

    </div>
  );
}
  
  
  export default Employees;