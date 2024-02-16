import '../main/custom-bootstrap.css';
import './PatientList.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';








function ProductList({product}) {
  const { idE } = useParams();
  const [currentEmployeeID] = idE;

  const navigate = useNavigate();

 
  const navigateToEditProduct = () => {
    navigate(`/loggedpage/${currentEmployeeID}/editproduct/${product.productID}`);};
  
  const navigateToDeleteProduct = () => {
    navigate(`/loggedpage/${currentEmployeeID}/deleteproduct/${product.productID}`);};

    
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
  
  
  