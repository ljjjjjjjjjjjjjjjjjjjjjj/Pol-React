
import '../main/custom-bootstrap.css';
import './PatientList.css';



function PatientSelectionRow({ patient }) {
  return (
    <option key={patient.patientID} value={patient.patientID}>
      {`${patient.patientName} ${patient.patientSurname} (ID: ${patient.patientID})`}
      </option>
  );
}

export default PatientSelectionRow;
  
  
  