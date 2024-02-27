

import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import '../formats/ElementsButtons.css';
import NavigateToEmployee from '../../methods_and_other/NavigateToEmployee.js';
import API_ROOT_PATH from '../../main/configLogged.js';
import authHeader from "../../services/auth-header";
import { useState} from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';







const AddEmployee = () => {
  const { idE } = useParams();
  
  
 
    const [empName, setEmpName] = useState("");
    const [empSurname, setEmpSurname] = useState("");
    const [empNO, setEmpNO] = useState("");
    const [empAddress, setEmpAddress] = useState("");
    const [empPhone, setEmpPhone] = useState("");
    const [empEmail, setEmpEmail] = useState("");
    const [empJobTitle, setEmpJobTitle] = useState("");
    const [empCategory, setEmpCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("/imagesEmployees/Employee_profile.png");
 
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmpEditSubmit = async (event) => {
      event.preventDefault();


    try {
      const response = await axios.post(`${API_ROOT_PATH}/employees/add`, 
      {
        empName, 
        empSurname, 
        empNO,
        empAddress, 
        empPhone, 
        empEmail, 
        empJobTitle,
        empCategory,
        imageUrl
      },  
      {headers: authHeader()}
      );

        console.log('Response:', response.data);
        setSuccessMessage('Darbuotojas sėkmingai įvestas');
        setErrorMessage('');
        handleSubmit();
        
      
    } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Darbuotojas NEBUVO įvestas');
      
    }
  };

  const handleReset = () => {
    
    setEmpName('');
    setEmpSurname('');
    setEmpNO('');
    setEmpAddress(''); 
    setEmpPhone(''); 
    setEmpEmail(''); 
    setEmpJobTitle('');
    setEmpCategory('');
    setImageUrl('');
    
  };

  const handleSubmit = () => {
    
    setEmpName('');
    setEmpSurname('');
    setEmpNO('');
    setEmpAddress(''); 
    setEmpPhone(''); 
    setEmpEmail(''); 
    setEmpJobTitle('');
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

              <h4>1. Įvesti naują darbuotoją</h4>

              <div>
              <form onSubmit={handleEmpEditSubmit}>
                 
              
                 
                 
                 
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


                <label> No.: 
                <input 
                type='text' 
                value={empNO} 
                onChange={(p) => setEmpNO(p.target.value)}                 
                />
                <p className='administracija-box-1-comment'> <small>(Numerį gali sudaryti tik skaičiai)</small></p>
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

                


                <label> Pareigos: 
                <input 
                type='text' 
                value={empJobTitle} 
                onChange={(p) => setEmpJobTitle(p.target.value)}                
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
                <input type='submit' className="btn btn-primary button-1-blue" 
                value="Išsaugoti"/>

                <input type='reset' className="btn btn-secondary button-1-grey" 
                value="Išvalyti" onClick={handleReset}/>
                </div>
  
              </form>


                <div className='administracija-box-1'>
                  <div className='administracija-box-1'>
                    < NavigateToEmployee idE={idE} />
                  </div>
                </div>


              </div>
            </div>
        </div>
    </div>
    </div>
    
    
    
    
    )
  };

  
  export default AddEmployee;





