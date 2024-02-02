

import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const AddProduct = () => {

  const navigate = useNavigate();
  const navigateToReadProduct = () => {
    navigate(`/readproduct`);
  };
  
  const navigateToAdministracija = () => {
    navigate(`/administracija`);
  };
 
    const [productTitle, setProductTitle] = useState("");
    const [productSubCategory, setProductSubCategory] = useState("");
    const [productCategory, setProductCategory] = useState("");
 
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleProductEditSubmit = async (event) => {
      event.preventDefault();


    try {
      const response = await axios.post('http://localhost:8080/medical-products/add', {
        productTitle, 
        productSubCategory,
        productCategory
        });

        console.log('Response:', response.data);
        setSuccessMessage('Paslauga sėkmingai įvesta');
        setErrorMessage('');
        handleSubmit();
        
      
    } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Paslauga NEBUVO įvesta');
      
    }
  };

  const handleReset = () => {
    
    setProductTitle('');
    setProductSubCategory(''); 
    setProductCategory('');
    
  };

  const handleSubmit = () => {
    
    setProductTitle('');
    setProductSubCategory(''); 
    setProductCategory('');
    
  };
    
   


    return (

    <div className='administracija'>

    <div className='administracija-box-container'>

      <div>
      <h1>Administracija</h1>
      </div>

        <div className='administracija-box-1'>
            <h3>Paslaugų sąrašo valdymas</h3>
            <div>

              <h4>1. Įvesti naują paslaugą</h4>

              <div>
              <form onSubmit={handleProductEditSubmit}>
                 
              
                 
                 
                 
                <label> Pavadinimas: 
                <input 
                type='text' 
                value={productTitle} 
                onChange={(p) => setProductTitle(p.target.value)} 
                />
                </label>
                 
                 

                <label> Sub-kategorija: 
                <input 
                type='text' 
                value={productSubCategory} 
                onChange={(p) => setProductSubCategory(p.target.value)} 
                />
                </label>
           

                <label> Kategorija: 
                <input 
                type='text' 
                value={productCategory} 
                onChange={(p) => setProductCategory(p.target.value)}                 
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
                value="Išsaugoti"/>

                <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
                value="Išvalyti" onClick={handleReset}/>
                </div>
  
              </form>

                <div className='administracija-box-1'>
                  <div className='administracija-box-1-button-box-center'>                  
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value="&#9665; Paslaugų sąrašas" onClick={navigateToReadProduct}/>
                     <br></br>
                     <br></br>
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value=" &#9665; Administracija " onClick={navigateToAdministracija}/>                                     
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
    
    
    
    
    )
  };

  
  export default AddProduct;





