import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import AppointmentList from '../../methods_and_other/AppointmentList';
import { useState,  useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ReadAppointment = () => {

  const navigate = useNavigate();
  const navigateToAddAppointment = () => {
    navigate(`/addappointment`);
  };
  const navigateToAdministracija = () => {
    navigate(`/administracija`);
  };

  const [appointments, setAppointments] = useState( [] );
  const [selectedOption, setSelectedOption] = useState("");
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/appointments/get/all-objects');
        
        let sortedAppointments = response.data;

        if (selectedOption) {
        sortedAppointments = sortedAppointments.sort((a, b) => a[selectedOption].localeCompare(b[selectedOption]));
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

    
      <div className='administracija-drop-down'>
        <label>Pasirinkti filtrą: </label>
        <select value={selectedOption} onChange={handleSelectedOption}>
          <option value="">pasirinkti...</option>
          <option value="appID">ID</option>
          <option value="appCategory">Kategorija</option>
          <option value="appDate">Data</option>
        </select>

        <input type='button' className="btn btn-secondary administracija-box-1-button-z" 
                   value="Prideti naują" onClick={navigateToAddAppointment}/>      
        
      </div>

      
      <div className='administracija-list'>

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

  
  export default ReadAppointment;


