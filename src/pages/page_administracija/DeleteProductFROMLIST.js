
import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate,  useParams } from 'react-router-dom';


function DeleteProductFROMLIST() {

  const { id } = useParams();

  const navigate = useNavigate();
  const navigateToReadProduct = () => {
    navigate(`/readproduct`);
  };
  
  
  const [productID, setProductID] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productCategory, setProductCategory] = useState("");


  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  

  
  
  useEffect(() => {
    const handleSearchSubmit = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/medical-products/get/${id}`);
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
  
    const response = await axios.delete(`http://localhost:8080/medical-products/delete/${id}`);

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
            <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
            value="Taip" onClick={handleProductDeleteSubmit}/>                     
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
             value="&#9665; Grįžti į sąrašą" onClick={navigateToReadProduct}/>                                
          </div>
        </div>
              
            
             
      </div>
        
    </div>
  </div>
  
  
  
  
  
  );
};

  
  export default DeleteProductFROMLIST;

  