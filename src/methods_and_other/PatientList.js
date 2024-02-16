import '../main/custom-bootstrap.css';
import './PatientList.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';









function PatientList({patient}) {
  const { idE } = useParams();
  const [currentEmployeeID] = idE;

  const navigate = useNavigate();

 
  const navigateToEditPatient = () => {
    navigate(`/loggedpage/${currentEmployeeID}/editpatient/${patient.patientID}`);};
  
  const navigateToDeletePatient = () => {
    navigate(`/loggedpage/${currentEmployeeID}/deletepatient/${patient.patientID}`);};

    
      return (

        
        <tr>
          <td> {patient.patientName} </td>
          <td> {patient.patientSurname} </td>
          <td> {patient.patientNO} </td>
          <td> {patient.patientAddress} </td>
          <td> {patient.patientPhone} </td>
          <td> {patient.patientEmail} </td>
          <td> {patient.patientCategory} </td>
          <td> 
            <div className='patient-list-button-box'>
              <button type="button" className="btn btn-primary patient-list-button-b" onClick={navigateToEditPatient}>Koreguoti</button>
              <button type="button" className="btn btn-primary patient-list-button-g" onClick={navigateToDeletePatient}>Pašalinti</button>
            </div>     
          </td>
         
        </tr>
        
      );
    }
  
    export default PatientList;
  
  
  