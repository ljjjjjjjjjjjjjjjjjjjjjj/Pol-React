import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function EditEmployeeFROMLIST() {

  const { id } = useParams();

  const navigate = useNavigate();
  const navigateToReadEmployee = () => {
    navigate(`/reademployee`);
  };
  
  
  const [empID, setEmpID] = useState("");  
  const [empName, setEmpName] = useState("");
  const [empSurname, setEmpSurname] = useState("");
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
        const response = await axios.get(`http://localhost:8080/employees/get/${id}`);
        const empData = response.data;
              
        setEmpID(empData.empID);
        setEmpName(empData.empName);
        setEmpSurname(empData.empSurname);
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
  
  


  const handleEmployeeEditSubmit = async (event) => {
    event.preventDefault();

  try {
    const response = await axios.put(`http://localhost:8080/employees/edit/${id}`, {
      empID,
      empName, 
      empSurname, 
      empAddress, 
      empPhone, 
      empEmail, 
      empCategory,
      imageUrl
      });

      console.log('Response:', response.data);
      handleReset();

      setSuccessMessage('Darbuotojas sėkmingai atnaujintas');
      setErrorMessage('');
      
          
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Darbuotojas NEBUVO atnaujintas');
    
  }
};

const handleReset = () => {
  setEmpID('');
  setEmpName('');
  setEmpSurname('');
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
        <h4>3. Keisti esamo darbuotojo duomenis</h4>
                         
        <div>
          <form onSubmit={handleEmployeeEditSubmit}>
               
            <p>&ensp;ID:&emsp;&emsp;&emsp; <strong style={{color:'#3883b5'}}>{empID}</strong> </p>
                  
             
            <label> Vardas: 
            <input 
            type='text' 
            value={empName} 
            onChange={(p) => setEmpName(p.target.value)} 
            />
            </label>
             
             
             
            <label> Pavarde: 
            <input 
            type='text' 
            value={empSurname} 
            onChange={(p) => setEmpSurname(p.target.value)} 
            
            />
            </label>
                    
            <label> Adresas: 
            <input 
            type='text' 
            value={empAddress} 
            onChange={(p) => setEmpAddress(p.target.value)} 
            
            />
            </label>
                           
            <label> Tel. nr: 
            <input 
            type='text' 
            value={empPhone} 
            onChange={(p) => setEmpPhone(p.target.value)} 
            
            />
            </label>
                     
            <label> E-paštas: 
            <input 
            type='text' 
            value={empEmail} 
            onChange={(p) => setEmpEmail(p.target.value)} 
            
            />
            </label>
                      
            <label> Kategorija: 
            <input 
            type='text' 
            value={empCategory} 
            onChange={(p) => setEmpCategory(p.target.value)} 
            
            />
            </label>

            <label> Nuotraukos url: 
            <input 
            type='text' 
            value={imageUrl} 
            onChange={(p) => setImageUrl(p.target.value)} 
            
            />
            </label>
                         
                    
                         
            <div>
            <br></br>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <br></br>
            </div>
             
             
             
            <div className='administracija-box-1-button-box'>
            <br></br>
            <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
            value="Išsaugoti" />
                          
            <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
            value="Išvalyti" onClick={handleReset}/>
            </div>
                     
            <div className='administracija-box-1'>
              <div className='administracija-box-1-button-box-center'>                  
                <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                 value="Grįžti į sąrašą" onClick={navigateToReadEmployee}/>                              
              </div>
            </div>
                   
          </form>
        </div>
      </div>
    </div>
  
  </div>
  
  
  
  
  )
};

  
  export default EditEmployeeFROMLIST;





