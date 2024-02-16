import '../main/custom-bootstrap.css';
import './PatientList.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';




function AppointmentList({appointment}) {
  const { idE } = useParams();
  const [currentEmployeeID] = idE;
  

  const navigate = useNavigate();

 
  const navigateToEditAppointment = () => {
    navigate(`/loggedpage/${currentEmployeeID}/editappointment/${appointment.appID}`);};
  
  const navigateToDeleteAppointment = () => {
    navigate(`/loggedpage/${currentEmployeeID}/deleteappointment/${appointment.appID}`);};

    
      return (

        
        <tr>
          <td> {appointment.appID} </td>
          <td> {appointment.appCategory} </td>
          <td> {appointment.appReason} </td>
          <td> {appointment.appDate} </td>

          <td> {appointment.empName} {appointment.empSurname} ({appointment.empJobTitle})</td>
          <td> {appointment.patientName} {appointment.patientSurname} ({appointment.patientNO}) </td>
          <td> 
            <div className='patient-list-button-box'>
              <button type="button" className="btn btn-primary patient-list-button-b" onClick={navigateToEditAppointment}>Koreguoti</button>
              <button type="button" className="btn btn-primary patient-list-button-g" onClick={navigateToDeleteAppointment}>Pašalinti</button>
            </div>     
          </td>
         
        </tr>
        
      );
    }
  
    export default AppointmentList;
  
  
  