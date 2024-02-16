
import '../main/custom-bootstrap.css';
import '../pages/formats/Administracija.css';
import { useNavigate } from 'react-router-dom';






function NavigateToPATIENTPAGE({idP}) {
  const [appPatientID] = idP;


  
  /*  -----------------   Navigate    ------------------*/
  const navigate = useNavigate();

  const navigateToReadAppointmentPatient = () => {
    navigate(`/loggedpage/patientpage/${appPatientID}/readappointmentpatient`);};
  
  const navigateToPatientPage = () => {
    navigate(`/loggedpage/patientpage/${appPatientID}`);};
  /*  -----------------   Navigate    ------------------*/

  






    
    return (
      <div className='administracija-box-1-button-box-center'>
        <input 
          type='button' 
          className="btn btn-secondary administracija-box-1-button-b"
          value="&#9665; Rezervacijų sąrašas" 
          onClick={navigateToReadAppointmentPatient} 
        />
        <br></br>
        <br></br>
        <input 
          type='button' 
          className="btn btn-secondary administracija-box-1-button-b"
          value=" &#9665; Mano puslapis " 
          onClick={navigateToPatientPage} 
        />
      </div>
      
    );


  }

  export default NavigateToPATIENTPAGE;



