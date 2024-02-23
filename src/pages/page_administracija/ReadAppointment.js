import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import '../formats/ElementsButtons.css';
import '../formats/ElementsDropdown.css';
import authHeader from "../../services/auth-header";
import API_ROOT_PATH from '../../main/configLogged.js';
import AppointmentList from '../../methods_and_other/AppointmentList';
import { useState,  useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';





const ReadAppointment = () => {
  const { idE } = useParams();
  const [currentEmployeeID] = idE;
  

  /*  -----------------   Navigate    ------------------*/
  const navigate = useNavigate();
  const navigateToAddAppointment = () => {
    navigate(`/loggedpage/${currentEmployeeID}/addappointment`);
  };
  const navigateToAdministracija = () => {
    navigate(`/loggedpage/${currentEmployeeID}/administracija`);
  };
  /*  -----------------   Navigate    ------------------*/


  const [appointments, setAppointments] = useState( [] );
  const [selectedOption, setSelectedOption] = useState("");
 
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ROOT_PATH}/appointments/get/all-objects`,  {headers: authHeader()});
        
        let sortedAppointments = response.data;

        

        if (selectedOption) {
          sortedAppointments = sortedAppointments.sort((a, b) => {
              const isNumeric = !isNaN(a[selectedOption]) && !isNaN(b[selectedOption]);
      
              if (isNumeric) {
                  return a[selectedOption] - b[selectedOption]; // number comparison
              } else {                   
                  return a[selectedOption].localeCompare(b[selectedOption]);  // String comparison
              }
          });
        }
        setAppointments(sortedAppointments);


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
      <h1>Rezervacijų sąrašas</h1>





      <div className='administracija-container-for-2 '>

      <div className='administracija-drop-down'>
        <label>Pasirinkti rikiavimą: </label>
          <select value={selectedOption} onChange={handleSelectedOption}>
            <option value="">pasirinkti...</option>
            <option value="appID">ID</option>
            <option value="appCategory">Kategorija</option>
            <option value="appDate">Data</option>
            <option value="patientName">Pacientas</option>
            <option value="empName">Gydytojas</option>
          </select>

        
      </div>
          
        
      <div className='button-box-3-rightside'>
         <input type='button' className="btn btn-success button-1-green" 
                   value="Prideti naują" onClick={navigateToAddAppointment}/>      
      </div>

  
      </div>

      
      <div className='administracija-table'>

        <table className="table table-hover">

          <thead className="table-light">
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Kategorija</th>
              <th scope='col'>Priežastis</th>
              <th scope='col'>Data</th>
              <th scope='col'>Gydytojas</th>
              <th scope='col'>Pacientas</th>
              <th scope='col'>Keisti</th>
             
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <AppointmentList key={appointment.appID} appointment={appointment} />
            ))}
          </tbody> 
                 
        </table>

                <div className='administracija-box-1'>
                  <div className='button-box-1-center'>     
                    <p>&ensp;</p>             
                    <input type='button' className="btn btn-primary button-1-blue" 
                     value="Grįžti atgal" onClick={navigateToAdministracija}/>                              
                  </div>
                </div>

      </div>

    </div>
    

    
    )
  };

  
  export default ReadAppointment;


