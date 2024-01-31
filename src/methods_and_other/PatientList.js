
import './PatientList.css';


function PatientList({patient}) {

    
      return (

        
        <tr>
          <td> {patient.patientID} </td>
          <td> {patient.patientName} </td>
          <td> {patient.patientSurname} </td>
         
        </tr>
        
      );
    }
  
    export default PatientList;
  
  
  