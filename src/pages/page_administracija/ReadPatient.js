import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import PatientList from '../../methods_and_other/PatientList';
import { useState,  useEffect} from 'react';
import axios from 'axios';



const ReadPatient = () => {

  const [patients, setPatients] = useState( [] );

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/patients/get/all');
        setPatients(response.data);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className='administracija'>
      <h1>Pacientų sąrašas</h1>
      
      <div>

        <table className='table'>

          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Vardas</th>
              <th scope='col'>Pavarde</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <PatientList key={patient.patientID} patient={patient} />
            ))}
          </tbody> 
                 
        </table>

      </div>

    </div>
    

    
    )
  };

  
  export default ReadPatient;


