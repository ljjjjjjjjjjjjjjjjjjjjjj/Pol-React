

import '../main/custom-bootstrap.css';
import '../pages/formats/Administracija.css';
import { useNavigate } from 'react-router-dom';






function NavigateToPatient({idE}) {
  const [currentEmployeeID] = idE;


  /*  -----------------   Navigate    ------------------*/
  const navigate = useNavigate();

  const navigateToReadPatient = () => {
    navigate(`/loggedpage/${currentEmployeeID}/readpatient`);
  };
  
  const navigateToAdministracija = () => {
    navigate(`/loggedpage/${currentEmployeeID}/administracija`);
  };
  /*  -----------------   Navigate    ------------------*/





    
    return (
      <div className='administracija-box-1-button-box'>                  
        <input 
          type='button' 
          className="btn btn-primary administracija-box-1-button-b" 
          value="&#9665; Pacientų sąrašas" 
          onClick={navigateToReadPatient}
        />  
        <br></br>
        <br></br>
        <input 
          type='button' 
          className="btn btn-primary administracija-box-1-button-b"
          value=" &#9665; Administracija " 
          onClick={navigateToAdministracija} 
        />                              
      </div>


    );


  }

  export default NavigateToPatient;



