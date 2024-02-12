


import { useState, useEffect } from 'react';
import EmployeeCard from '../methods_and_other/EmployeeCard';
import './formats/App.css';
import './formats/Personalas.css';
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
    <div className='personalas'>

      <div>   
           <h1>Personalas</h1>         
      </div>

       

      <div className='home-imagecontainer-cover'>
         <img className='home-imagecontainer-cover-image' 
              src="./images/healthcare-doctors2052.jpeg" 
              alt={"healthcare"} /> 
      </div> 


      <div>
        <p>&ensp;</p>
        <h3>Poliklinikoje dirba kvalifikuoti šeimos gydytojai, slaugytojos, akušerės, gydytojai specialistai, bei odontologai:</h3>
        <p>&ensp;</p>
      </div>
          
          
          
     

      

      <div className='personalas-emp-card-container'>
      
        
       
         {employees.map( employee => (
            <EmployeeCard key={employee.empID} employee={employee} />
         ))}
        
      </div>

    </div>
  );
}
  
  
  export default Employees;