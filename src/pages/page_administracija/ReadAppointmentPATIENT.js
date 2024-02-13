import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import AppointmentListPATIENT from '../../methods_and_other/AppointmentListPATIENT';
import { useState,  useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const ReadAppointmentPATIENT = () => {

  const { idP } = useParams();
  const [appPatientID, setAppPatientID] = useState(idP);


  const navigate = useNavigate();
  const navigateToAddAppointment = () => {
    navigate(`/patientpage/${appPatientID}/addappointmentpatient`);
  };
  const navigateToPatientPage = () => {
    navigate(`/patientpage/${appPatientID}`);
  };

  const [appointments, setAppointments] = useState( [] );
  const [selectedOption, setSelectedOption] = useState('appDate');
  

  
  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await axios.get(`http://localhost:8080/logged/appointments/get/all-patient-objects${appPatientID}`);
        
        let sortedAppointments = response.data;

    
      
        ;sortedAppointments = sortedAppointments.sort((a, b) => {
          const dateA = new Date(a[selectedOption]).getTime();
          const dateB = new Date(b[selectedOption]).getTime();
          return dateA - dateB;
        });

        




        
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
              <th scope='col'>Keisti</th>
             
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <AppointmentListPATIENT key={appointment.appID} appointment={appointment} />
            ))}
          </tbody> 
                 
        </table>

                <div className='administracija-box-1'>
                  <div className='administracija-box-1-button-box-center'>     
                    <p>&ensp;</p>             
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value="Grįžti atgal" onClick={navigateToPatientPage}/>                              
                  </div>
                </div>

      </div>

    </div>
    

    
    )
  };

  
  export default ReadAppointmentPATIENT;


