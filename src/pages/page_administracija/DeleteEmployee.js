
import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import NavigateToEmployee from '../../methods_and_other/NavigateToEmployee.js';
import API_ROOT_PATH from '../../main/configLogged.js';
import authHeader from "../../services/auth-header";
import { useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';









const DeleteEmployee = () => {
  const { idE } = useParams();
  


  const [selectedEmpID, setSelectedEmpID] = useState("");

  const [empID, setEmpID] = useState("");  
  const [empName, setEmpName] = useState("");
  const [empSurname, setEmpSurname] = useState("");
  const [empNO, setEmpNO] = useState("");
  const [empAddress, setEmpAddress] = useState("");
  const [empPhone, setEmpPhone] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empCategory, setEmpCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");


  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [conditionalFieldInfo, setConditionalFieldInfo] = useState(false);
  const [conditionalFieldMessage, setConditionalFieldMessage] = useState(false);
  const [conditionalFieldButtons, setConditionalFieldButtons] = useState(false);

  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`${API_ROOT_PATH}/employees/get/${selectedEmpID}`,  {headers: authHeader()});
      const empData = response.data;

      setEmpID(empID.empID);
      setEmpName(empData.empName);
      setEmpSurname(empData.empSurname);
      setEmpNO(empData.empNO);
      setEmpAddress(empData.empAddress);
      setEmpPhone(empData.empPhone);
      setEmpEmail(empData.empEmail);
      setEmpCategory(empData.empCategory);
      setImageUrl(empData.imageUrl);
     
         
      setSuccessMessage('');
      setErrorMessage('');

      setConditionalFieldInfo(true);
      setConditionalFieldMessage(true);
      setConditionalFieldButtons(true);
     

    } catch (error) {
      console.error('Error:', error);
      handlePartReset();

      setSuccessMessage('');
      setErrorMessage('Darbuotojas su tokiu ID nerastas');
      setConditionalFieldMessage(true);
      setConditionalFieldButtons(false);
      
    }
  };
  

  const handleEmployeeDeleteSubmit = async (event) => {
    event.preventDefault();

  try {
  
    const response = await axios.delete(`${API_ROOT_PATH}/employees/delete/${selectedEmpID}`,  {headers: authHeader()});

      console.log('Response:', response.data);
      setSuccessMessage('Darbuotojas sėkmingai ištrintas');
      setErrorMessage('');

      handlePartReset();

      setConditionalFieldMessage(true);
      setConditionalFieldInfo(false);
      setConditionalFieldButtons(false);
      
      
      
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Darbuotojas NEBUVO ištrintas');

      setConditionalFieldMessage(true);
      setConditionalFieldInfo(true);
      setConditionalFieldButtons(false);
    
  }
};

const handleReset = () => {
  setSelectedEmpID('');
  
  setEmpID('');
  setEmpName('');
  setEmpSurname('');
  setEmpNO('');
  setEmpAddress(''); 
  setEmpPhone(''); 
  setEmpEmail(''); 
  setEmpCategory('');
  setImageUrl('');

  
  setConditionalFieldInfo(false);
  setConditionalFieldButtons(false);
   
};

const handlePartReset = () => {
    
  setEmpID('');
  setEmpName('');
  setEmpSurname('');
  setEmpNO('');
  setEmpAddress(''); 
  setEmpPhone(''); 
  setEmpEmail(''); 
  setEmpCategory('');
  setImageUrl('');
   
};



  
 


  return (

  <div className='administracija'>

    <div className='administracija-box-container'>
  
      <div>
      <h1>Administracija</h1>
      </div>
  
        <div className='administracija-box-1'>
            <h3>Darbuotojų sąrašo valdymas</h3>
            
            <div>
  
              <h4>4.Ištrinti esamą darbuotoją</h4>
  
              <div className='administracija-box-1-plus'>
                <form  onSubmit={handleSearchSubmit}>
                  <label>Įveskite darbuotojo ID numerį:
                    <input style={{ width: '50px', }}
                      type="text" 
                      value={selectedEmpID}
                      onChange={(e) => setSelectedEmpID(e.target.value)}
                    />
                  </label>
  
                  <div className='administracija-box-1-button-box'>
                  <p></p>
                  <input type="submit" className="btn btn-primary administracija-box-1-button-b" />
                  <p>&nbsp;</p>
                  </div>
  
  
              </form>
            </div>
                     
                           
                          
              
            {conditionalFieldInfo && (  
            <div className='administracija-box-1-cond'>
              
                <div>
                  {/* P */}
                  <p className='administracija-box-1-product-infolist'>ID: <strong>{selectedEmpID}</strong> </p>                    
                  <p className='administracija-box-1-product-infolist'>Vardas: <strong>{empName}</strong> </p>            
                  <p className='administracija-box-1-product-infolist'>Pavarde: <strong>{empSurname}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>No.: <strong>{empNO}</strong> </p>                  
                  <p className='administracija-box-1-product-infolist'>Adresas: <strong>{empAddress}</strong> </p>            
                  <p className='administracija-box-1-product-infolist'>Tel nr.: <strong>{empPhone}</strong> </p>          
                  <p className='administracija-box-1-product-infolist'>E-pastas: <strong>{empEmail}</strong> </p>          
                  <p className='administracija-box-1-product-infolist'>Kategorija: <strong>{empCategory}</strong> </p>   
                  <p className='administracija-box-1-product-infolist'>Nuotraukos url: <strong>{imageUrl}</strong> </p>
                </div>
            
              </div>
              )}


              {conditionalFieldButtons && (  
              <div className='administracija-box-1-cond'>
              
            
                <div className='administracija-box-1-button-box'>
                  {/* BUTTONS */}
    
                  <p>Ar tikrai norite ištrinti šį darbuotoją? </p>
    
                  <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
                  value="Taip" onClick={handleEmployeeDeleteSubmit}/>
      
                  <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
                  value="Ne" onClick={handleReset}/>
                </div>

              </div>
              )}


              {conditionalFieldMessage && (   
              <div  className='administracija-box-1-cond'>
              {/* MESSAGES */}
              <br></br>
              {successMessage && <div className="success-message">{successMessage}</div>}
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <br></br>
              </div>
              )}

                <div className='administracija-box-1'>                 
                  <div className='administracija-box-1'>
                    < NavigateToEmployee idE={idE} />
                  </div>
                </div>
            
             
            </div>
        </div>
    </div>
  </div>
  
  
  
  
  
  );
};

  
  export default DeleteEmployee;
