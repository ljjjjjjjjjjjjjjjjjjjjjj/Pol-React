import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const EditProduct = () => {

  const navigate = useNavigate();
  const navigateToReadProduct = () => {
    navigate(`/readproduct`);
  };
  
  const navigateToAdministracija = () => {
    navigate(`/administracija`);
  };


  const [selectedProductID, setSelectedProductID] = useState("");

  const [productID, setProductID] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/medical-products/get/${selectedProductID}`);
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
  

  const handleProductEditSubmit = async (event) => {
    event.preventDefault();

  try {
    const response = await axios.put(`http://localhost:8080/medical-products/edit/${selectedProductID}`, {
      productID,
      productTitle, 
      productSubCategory, 
      productCategory
      });

      console.log('Response:', response.data);
      setSuccessMessage('Paslauga sėkmingai atnaujinta');
      setErrorMessage('');
      handleReset();
      
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Paslauga NEBUVO atnaujinta');
    
  }
};

const handleReset = () => {
  setSelectedProductID('');
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

            <h4>3. Keisti esamos paslaugos duomenis</h4>

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



            <div>
            <form onSubmit={handleProductEditSubmit}>

              <p>&ensp;ID:&emsp;&emsp;&emsp; <strong style={{color:'#3883b5'}}>{productID}</strong> </p>
            
               
               
              <label> Vardas: 
              <input 
              type='text' 
              value={productTitle} 
              onChange={(p) => setProductTitle(p.target.value)} 
              />
              </label>
               
               
               
              <label> Pavarde: 
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

            </form>
            </div>

            <div className='administracija-box-1'>
                  <div className='administracija-box-1-button-box-center'>                  
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value="&#9665; Pacientų sąrašas" onClick={navigateToReadProduct}/>
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
  
  
  
  
  )
};

  
  export default EditProduct;





