import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import PatientList from '../../methods_and_other/PatientList';
import { useState,  useEffect} from 'react';
import axios from 'axios';



const ReadPatient = () => {

  const [patients, setPatients] = useState( [] );
  const [selectedOption, setSelectedOption] = useState("");
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/patients/get/all');
        
        let sortedPatients = response.data;

        if (selectedOption) {
        sortedPatients = sortedPatients.sort((a, b) => a[selectedOption].localeCompare(b[selectedOption]));
        }
        setPatients(sortedPatients);

        console.log('Response:', response.data);


      } catch (error) {
        console.error('Error:', error); 
      }
    };

    fetchData();
  }, [selectedOption]);


  const handleSelectedOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <div className='administracija'>
      <h1>Pacientų sąrašas</h1>

    
      <div className='administracija-drop-down'>
        <label>Pasirinkti filtrą: </label>
        <select value={selectedOption} onChange={handleSelectedOption}>
          <option value="">pasirinkti...</option>
          <option value="patientID">ID</option>
          <option value="patientName">Vardas</option>
          <option value="patientSurname">Pavardė</option>
        </select>
        
      </div>

      
      <div className='administracija-list'>

        <table class="table table-hover">

          <thead class="table-light">
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Vardas</th>
              <th scope='col'>Pavarde</th>
              <th scope='col'>Adresas</th>
              <th scope='col'>Telefono nr.</th>
              <th scope='col'>E-pastas</th>
              <th scope='col'>Kategorija</th>
             
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


