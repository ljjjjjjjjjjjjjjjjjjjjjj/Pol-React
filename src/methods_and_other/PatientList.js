
import './PatientList.css';


function PatientList({patient}) {

    
      return (

        
        <tr>
          <td> {patient.patientID} </td>
          <td> {patient.patientName} </td>
          <td> {patient.patientSurname} </td>
          <td> {patient.patientAddress} </td>
          <td> {patient.patientPhone} </td>
          <td> {patient.patientEmail} </td>
          <td> {patient.patientCategory} </td>
         
        </tr>
        
      );
    }
  
    export default PatientList;
  
  
  