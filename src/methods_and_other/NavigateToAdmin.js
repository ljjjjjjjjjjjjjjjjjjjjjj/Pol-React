

import '../main/custom-bootstrap.css';
import '../pages/formats/Administracija.css';
import '../pages/formats/ElementsButtons.css';
import { useNavigate } from 'react-router-dom';






function NavigateToEmployee({idE}) {
  const [currentEmployeeID] = idE;


  /*  -----------------   Navigate    ------------------*/
  const navigate = useNavigate();

  
  const navigateToAdministracija = () => {
    navigate(`/loggedpage/${currentEmployeeID}/administracija`);
  };
  /*  -----------------   Navigate    ------------------*/





    
    return (
      <div className='administracija-box-1-button-box'>                  
        <br></br>
        <input 
          type='button' 
          className="btn btn-primary button-1-blue"
          value=" &#9665; Mano puslapis " 
          onClick={navigateToAdministracija} 
        />                              
      </div>


    );


  }

  export default NavigateToEmployee;



