import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function EditProductFROMLIST() {

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
  
  
  }, [] ); // Product array - to run once 
  
  


  const handleProductEditSubmit = async (event) => {
    event.preventDefault();

  try {
    const response = await axios.put(`http://localhost:8080/medical-products/edit/${id}`, {
      productID, 
      productTitle, 
      productSubCategory,
      productCategory
      });

      console.log('Response:', response.data);
      handleReset();

      setSuccessMessage('Paslauga sėkmingai atnaujinta');
      setErrorMessage('');
      
          
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Paslauga NEBUVO atnaujinta');
    
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
        <h4>3. Keisti esamos paslaugos duomenis</h4>
                         
        <div>
          <form onSubmit={handleProductEditSubmit}>
               
            <p>&ensp;ID:&emsp;&emsp;&emsp; <strong style={{color:'#3883b5'}}>{productID}</strong> </p>
                  
             
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
            value="Išsaugoti" />
                          
            <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
            value="Išvalyti" onClick={handleReset}/>
            </div>
                     
            <div className='administracija-box-1'>
              <div className='administracija-box-1-button-box'>                  
                <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                 value="Grįžti į sąrašą" onClick={navigateToReadProduct}/>                              
              </div>
            </div>
                   
          </form>
        </div>
      </div>
    </div>
  
  </div>
  
  
  
  
  )
};

  
  export default EditProductFROMLIST;





