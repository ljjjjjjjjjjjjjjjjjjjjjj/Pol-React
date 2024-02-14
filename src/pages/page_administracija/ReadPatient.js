import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import authHeader from "../../services/auth-header";
import API_ROOT_PATH from '../../main/configLogged.js';
import PatientList from '../../methods_and_other/PatientList';
import { useState,  useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ReadPatient = () => {

  const navigate = useNavigate();
  const navigateToAddPatient = () => {
    navigate(`/loggedpage/addpatient`);
  };
  const navigateToAdministracija = () => {
    navigate(`/loggedpage/administracija`);
  };

  const [patients, setPatients] = useState( [] );
  const [selectedOption, setSelectedOption] = useState("");
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ROOT_PATH}/patients/get/all`,  {headers: authHeader()});
        

        let sortedPatients = response.data;

        if (selectedOption) {
            sortedPatients = sortedPatients.sort((a, b) => {
                const isNumeric = !isNaN(a[selectedOption]) && !isNaN(b[selectedOption]);
        
                if (isNumeric) {
                    return a[selectedOption] - b[selectedOption]; // number comparison
                } else {                   
                    return a[selectedOption].localeCompare(b[selectedOption]);  // String comparison
                }
            });
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
          <option value="patientName">Vardas</option>
          <option value="patientSurname">Pavardė</option>
          <option value="patientNO">NO.</option>
        </select>

        <input type='button' className="btn btn-secondary administracija-box-1-button-z" 
                   value="Prideti naują" onClick={navigateToAddPatient}/>      
        
      </div>

      
      <div className='administracija-list'>

        <table className="table table-hover">

          <thead className="table-light">
            <tr>              
              <th scope='col'>Vardas</th>
              <th scope='col'>Pavarde</th>
              <th scope='col'>NO.</th>
              <th scope='col'>Adresas</th>
              <th scope='col'>Tel. nr.</th>
              <th scope='col'>E-pastas</th>
              <th scope='col'>Kategorija</th>
              <th scope='col'>Keisti</th>
             
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <PatientList key={patient.patientID} patient={patient} />
            ))}
          </tbody> 
                 
        </table>

                <div className='administracija-box-1'>
                  <div className='administracija-box-1-button-box-center'>     
                    <p>&ensp;</p>             
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value="Grįžti atgal" onClick={navigateToAdministracija}/>                              
                  </div>
                </div>

      </div>

    </div>
    

    
    )
  };

  
  export default ReadPatient;


