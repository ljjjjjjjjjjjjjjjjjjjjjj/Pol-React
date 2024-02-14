
import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import API_ROOT_PATH from '../../main/configLogged.js';
import authHeader from "../../services/auth-header";
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const DeleteProduct = () => {

  
  const navigate = useNavigate();
  const navigateToReadProduct = () => {
    navigate(`/loggedpage/readproduct`);
  };
  
  const navigateToAdministracija = () => {
    navigate(`/loggedpage/administracija`);
  };

  const [selectedProductID, setSelectedProductID] = useState("");
  
  const [productID, setProductID] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productCategory, setProductCategory] = useState("");


  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [conditionalFieldInfo, setConditionalFieldInfo] = useState(false);
  const [conditionalFieldMessage, setConditionalFieldMessage] = useState(false);
  const [conditionalFieldButtons, setConditionalFieldButtons] = useState(false);

  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`${API_ROOT_PATH}/medical-products/get/${selectedProductID}`,  {headers: authHeader()});
      const productData = response.data;

      setProductID(productData.productID);
      setProductTitle(productData.productTitle);
      setProductSubCategory(productData.productSubCategory);
      setProductCategory(productData.productCategory);
     
         
      setSuccessMessage('');
      setErrorMessage('');

      setConditionalFieldInfo(true);
      setConditionalFieldMessage(true);
      setConditionalFieldButtons(true);
     

    } catch (error) {
      console.error('Error:', error);
      handlePartReset();

      setSuccessMessage('');
      setErrorMessage('Produktas su tokiu ID nerastas');
      setConditionalFieldMessage(true);
      setConditionalFieldButtons(false);
      
    }
  };
  

  const handleProductDeleteSubmit = async (event) => {
    event.preventDefault();

  try {
  
    const response = await axios.delete(`${API_ROOT_PATH}/medical-products/delete/${selectedProductID}`,  {headers: authHeader()});

      console.log('Response:', response.data);
      setSuccessMessage('Produktas sėkmingai ištrintas');
      setErrorMessage('');

      handlePartReset();

      setConditionalFieldMessage(true);
      setConditionalFieldInfo(false);
      setConditionalFieldButtons(false);
      
      
      
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Produktas NEBUVO ištrintas');

      setConditionalFieldMessage(true);
      setConditionalFieldInfo(true);
      setConditionalFieldButtons(false);
    
  }
};

const handleReset = () => {
  setSelectedProductID('');
  
  setProductID('');
  setProductTitle('');
  setProductSubCategory('');
  setProductCategory(''); 
  
  setConditionalFieldInfo(false);
  setConditionalFieldButtons(false);
   
};


const handlePartReset = () => {
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
            
            <div>
  
              <h4>4.Ištrinti esamą paslaugą</h4>
  
              <div className='administracija-box-1-plus'>
                <form  onSubmit={handleSearchSubmit}>
                  <label>Įveskite paslaugos ID numerį:
                    <input style={{ width: '50px', }}
                      type="text" 
                      value={selectedProductID}
                      onChange={(e) => setSelectedProductID(e.target.value)}
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
                  <p className='administracija-box-1-product-infolist'>ID: <strong>{productID}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Pavadinimas: <strong>{productTitle}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Sub-kategorija <strong>{productSubCategory}</strong> </p>
                  <p className='administracija-box-1-product-infolist'>Kategorija: <strong>{productCategory}</strong> </p>
                </div>
            
              </div>
              )}


              {conditionalFieldButtons && (  
              <div className='administracija-box-1-cond'>
              
            
                <div className='administracija-box-1-button-box'>
                  {/* BUTTONS */}
    
                  <p>Ar tikrai norite ištrinti šią paslaugą? </p>
    
                  <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
                  value="Taip" onClick={handleProductDeleteSubmit}/>
      
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
  
  
  
  
  
  );
};

  
  export default DeleteProduct;

  