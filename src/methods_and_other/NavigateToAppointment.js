

import '../main/custom-bootstrap.css';
import '../pages/formats/Administracija.css';
import '../pages/formats/ElementsButtons.css';
import { useNavigate } from 'react-router-dom';






function NavigateToAppointment({idE}) {
  const [currentEmployeeID] = idE;


  /*  -----------------   Navigate    ------------------*/
  const navigate = useNavigate();

  const navigateToReadAppointment = () => {
    navigate(`/loggedpage/${currentEmployeeID}/readappointment`);
  };
  
  const navigateToAdministracija = () => {
    navigate(`/loggedpage/${currentEmployeeID}/administracija`);
  };
  /*  -----------------   Navigate    ------------------*/





    
    return (
      <div className='administracija-box-1-button-box'>                  
        <input 
          type='button' 
          className="btn btn-primary button-1-blue" 
          value="&#9665; Rezervacijų sąrašas" 
          onClick={navigateToReadAppointment}
        />  
        <br></br>
        <br></br>
        <input 
          type='button' 
          className="btn btn-primary button-1-blue"
          value=" &#9665; Administracija " 
          onClick={navigateToAdministracija} 
        />                              
      </div>


    );


  }

  export default NavigateToAppointment;



