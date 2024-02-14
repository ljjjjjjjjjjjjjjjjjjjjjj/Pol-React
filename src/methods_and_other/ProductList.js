import '../main/custom-bootstrap.css';
import './PatientList.css';
import { useNavigate } from 'react-router-dom';


function ProductList({product}) {

  const navigate = useNavigate();

 
  const navigateToEditProduct = () => {
    navigate(`/loggedpage/editproduct/${product.productID}`);};
  
  const navigateToDeleteProduct = () => {
    navigate(`/loggedpage/deleteproduct/${product.productID}`);};

    
      return (

        
        <tr>
          <td> {product.productID} </td>
          <td> {product.productTitle} </td>
          <td> {product.productSubCategory} </td>
          <td> {product.productCategory} </td>
          <td> 
            <div className='patient-list-button-box'>
              <button type="button" className="btn btn-primary patient-list-button-b" onClick={navigateToEditProduct}>Koreguoti</button>
              <button type="button" className="btn btn-primary patient-list-button-g" onClick={navigateToDeleteProduct}>Pašalinti</button>
            </div>     
          </td>
         
        </tr>
        
      );
    }
  
    export default ProductList;
  
  
  