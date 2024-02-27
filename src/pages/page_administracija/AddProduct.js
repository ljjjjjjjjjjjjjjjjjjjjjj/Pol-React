

import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import '../formats/ElementsButtons.css';
import NavigateToProduct from '../../methods_and_other/NavigateToProduct.js';
import API_ROOT_PATH from '../../main/configLogged.js';
import authHeader from "../../services/auth-header";
import { useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';








const AddProduct = () => {
  const { idE } = useParams();

  
 
    const [productTitle, setProductTitle] = useState("");
    const [productSubCategory, setProductSubCategory] = useState("");
    const [productCategory, setProductCategory] = useState("");
 
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleProductEditSubmit = async (event) => {
      event.preventDefault();


    try {
      const response = await axios.post(`${API_ROOT_PATH}/medical-products/add`, 
      {
        productTitle, 
        productSubCategory,
        productCategory
      },  
      {headers: authHeader()}
      );

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
                <input type='submit' className="btn btn-primary button-1-blue" 
                value="Išsaugoti"/>

                <input type='reset' className="btn btn-secondary button-1-grey" 
                value="Išvalyti" onClick={handleReset}/>
                </div>
  
              </form>


                <div className='administracija-box-1'>
                  <div className='administracija-box-1'>
                    < NavigateToProduct idE={idE} />
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





