

import '../main/custom-bootstrap.css';
import '../pages/formats/Administracija.css';
import { useNavigate } from 'react-router-dom';






function NavigateToEmployee({idE}) {
  const [currentEmployeeID] = idE;


  /*  -----------------   Navigate    ------------------*/
  const navigate = useNavigate();

  const navigateToReadEmployee = () => {
    navigate(`/loggedpage/${currentEmployeeID}/reademployee`);
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
          value="&#9665; Grįžti į sąrašą" 
          onClick={navigateToReadEmployee}
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

  export default NavigateToEmployee;



