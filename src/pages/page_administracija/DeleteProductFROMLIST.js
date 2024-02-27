
import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import '../formats/ElementsButtons.css';
import NavigateToProduct from '../../methods_and_other/NavigateToProduct.js';
import API_ROOT_PATH from '../../main/configLogged.js';
import authHeader from "../../services/auth-header";
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';










function DeleteProductFROMLIST() {
  const { idI } = useParams();
  const { idE } = useParams();

    

  const [productID, setProductID] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productCategory, setProductCategory] = useState("");


  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  

  
  
  useEffect(() => {
    const handleSearchSubmit = async () => {
      try {
        const response = await axios.get(`${API_ROOT_PATH}/medical-products/get/${idI}`,  {headers: authHeader()});
        const productData = response.data;
              
        setProductID(productData.productID);
        setProductTitle(productData.productTitle);
        setProductSubCategory(productData.productSubCategory);
        setProductCategory(productData.productCategory);
                      
        setSuccessMessage('');
        setErrorMessage('');
                   
      } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Paslauga su tokiu ID nerasta');
      }
  };
  
  handleSearchSubmit(); 
  
  
  }, [] ); // Empty array - to run once 
  
  

  const handleProductDeleteSubmit = async (event) => {
    event.preventDefault();

  try {
  
    const response = await axios.delete(`${API_ROOT_PATH}/medical-products/delete/${idI}`,  {headers: authHeader()});

      console.log('Response:', response.data);
    
      handleReset();

      setSuccessMessage('Paslauga sėkmingai ištrinta');
      setErrorMessage('');
     
   
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Paslauga NEBUVO ištrinta');
                   
  }
};

const handleReset = () => {
  setProductID('');
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
          <h4>4.Ištrinti esamą paslaugą</h4>
                                                            
          <div className='administracija-box-1-cond'>
              
            <div>
              {/* P */}
              <p className='administracija-box-1-product-infolist'>ID: <strong>{productID}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Pavadinimas: <strong>{productTitle}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Sub-kategorija <strong>{productSubCategory}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Kategorija: <strong>{productCategory}</strong> </p>
              {/* P */}
            </div>
            
        </div>
            

              
        <div className='administracija-box-1-cond'>
                          
          <div className='administracija-box-1-button-box'>
            {/* BUTTONS */}
             
            <p>Ar tikrai norite ištrinti šią paslaugą? </p>                      
            <input type='submit' className="btn btn-primary button-1-blue" 
            value="Taip" onClick={handleProductDeleteSubmit}/>                     
            <input type='reset' className="btn btn-secondary button-1-grey" 
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
          <div className='administracija-box-1'>
            < NavigateToProduct idE={idE} />
          </div>
        </div>
              
            
             
      </div>
        
    </div>
  </div>
  
  
  
  
  
  );
};

  
  export default DeleteProductFROMLIST;

  