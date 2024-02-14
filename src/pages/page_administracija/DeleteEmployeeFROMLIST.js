
import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState, useEffect} from 'react';
import { useNavigate,  useParams } from 'react-router-dom';
import axios from 'axios';



function DeleteEmployeeFROMLIST() {

  const { id } = useParams();

  const navigate = useNavigate();
  const navigateToReadEmployee = () => {
    navigate(`/reademployee`);
  };
  
  
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

  

  
  
  useEffect(() => {
    const handleSearchSubmit = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/logged/employees/get/${id}`);
        const empData = response.data;
              
        setEmpID(empData.empID);
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
                   
      } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Darbuotojas su tokiu ID nerastas');
      }
  };
  
  handleSearchSubmit(); 
  
  
  }, [] ); // Empty array - to run once 
  
  

  const handleEmployeeDeleteSubmit = async (event) => {
    event.preventDefault();

  try {
  
    const response = await axios.delete(`http://localhost:8080/employees/delete/${id}`);

      console.log('Response:', response.data);
    
      handleReset();

      setSuccessMessage('Darbuotojas sėkmingai ištrintas');
      setErrorMessage('');
     
   
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Darbuotojas NEBUVO ištrintas');
                   
  }
};

const handleReset = () => {
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
          <h4>4.Ištrinti esamą darbuotoją</h4>
                                                            
          <div className='administracija-box-1-cond'>
              
            <div>
              {/* P */}
              <p className='administracija-box-1-product-infolist'>ID: <strong>{empID}</strong> </p>                    
              <p className='administracija-box-1-product-infolist'>Vardas: <strong>{empName}</strong> </p>            
              <p className='administracija-box-1-product-infolist'>Pavarde: <strong>{empSurname}</strong> </p>    
              <p className='administracija-box-1-product-infolist'>No.: <strong>{empNO}</strong> </p>         
              <p className='administracija-box-1-product-infolist'>Adresas: <strong>{empAddress}</strong> </p>            
              <p className='administracija-box-1-product-infolist'>Tel nr.: <strong>{empPhone}</strong> </p>          
              <p className='administracija-box-1-product-infolist'>E-pastas: <strong>{empEmail}</strong> </p>          
              <p className='administracija-box-1-product-infolist'>Kategorija: <strong>{empCategory}</strong> </p>   
              <p className='administracija-box-1-product-infolist'>Nuotraukos url: <strong>{imageUrl}</strong> </p>
              {/* P */}
            </div>
            
        </div>
            

              
        <div className='administracija-box-1-cond'>
                          
          <div className='administracija-box-1-button-box'>
            {/* BUTTONS */}
             
            <p>Ar tikrai norite ištrinti šį darbuotoją? </p>                      
            <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
            value="Taip" onClick={handleEmployeeDeleteSubmit}/>                     
            <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
            value="Ne" onClick={handleReset}/>

            {/* BUTTONS */}
          </div>

        </div>
              


             
        <div  className='administracija-box-1-cond'>
          {/* MESSAGES */}
          <br></br>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <br></br>
          {/* MESSAGES */}
        </div>



        <div className='administracija-box-1'>
                  <div className='administracija-box-1-button-box-center'>                  
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value="&#9665; Grįžti į sąrašą" onClick={navigateToReadEmployee}/>                                
                  </div>
        </div>


              
            
             
      </div>
        
    </div>
  </div>
  
  
  
  
  
  );
};

  
  export default  DeleteEmployeeFROMLIST;

  