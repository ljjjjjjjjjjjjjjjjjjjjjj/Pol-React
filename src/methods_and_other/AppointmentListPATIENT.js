import '../main/custom-bootstrap.css';
import './PatientList.css';
import { useNavigate, useParams } from 'react-router-dom';


function AppointmentListPATIENT({appointment}) {
  const { idP } = useParams();
  const appPatientID = idP;

  const navigate = useNavigate();

 
  const navigateToEditAppointment = () => {
    navigate(`/loggedpage/patientpage/${appPatientID}/editappointmentpatient/${appointment.appID}`);};
  
  const navigateToDeleteAppointment = () => {
    navigate(`/loggedpage/patientpage/${appPatientID}/deleteappointment/${appointment.appID}`);};

    
      return (

        
        <tr>
          <td> {appointment.appID} </td>
          <td> {appointment.appCategory} </td>
          <td> {appointment.appReason} </td>
          <td> {appointment.appDate} </td>

          <td> {appointment.empName} {appointment.empSurname} ({appointment.empJobTitle})</td>
          <td> 
            <div className='patient-list-button-box'>
              <button type="button" className="btn btn-primary patient-list-button-b" onClick={navigateToEditAppointment}>Koreguoti</button>
              <button type="button" className="btn btn-primary patient-list-button-g" onClick={navigateToDeleteAppointment}>Pašalinti</button>
            </div>     
          </td>
         
        </tr>
        
      );
    }
  
    export default AppointmentListPATIENT;
  
  
  