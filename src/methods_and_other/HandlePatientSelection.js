
import '../main/custom-bootstrap.css';
import './PatientList.css';
import { useState, useEffect} from 'react';



function HandlePatientSelection() {

  const [appPatient, setAppPatient] = useState("");
  
  
  
  return (
    <div>
      <p>TBC - Bus info del Patient</p>

      <form>
              <label htmlFor="patientSelection">Pacientas:</label>
              <select id="patientSelection" value={appPatient} onChange={(p) => setAppPatient(p.target.value)}>
                <option value="p1">p1</option>
                <option value="p2">p2</option>
                <option value="p3">p3</option>
              </select>              
            </form>


    </div>

    
  );
}

export default HandlePatientSelection;
  
  
  