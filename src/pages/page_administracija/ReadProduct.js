import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import authHeader from "../../services/auth-header";
import API_ROOT_PATH from '../../main/configLogged.js';
import ProductList from '../../methods_and_other/ProductList';
import { useState,  useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';












const ReadProduct = () => {
  const { idE } = useParams();
  const [currentEmployeeID] = idE;
  


  /*  -----------------   Navigate    ------------------*/
  const navigate = useNavigate();
  const navigateToAddProduct = () => {
    navigate(`/loggedpage/${currentEmployeeID}/addproduct`);
  };
  const navigateToAdministracija = () => {
    navigate(`/loggedpage/${currentEmployeeID}/administracija`);
  };
  /*  -----------------   Navigate    ------------------*/



  const [products, setProducts] = useState( [] );
  const [selectedOption, setSelectedOption] = useState("");
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ROOT_PATH}/medical-products/get/all`,  {headers: authHeader()});
        
        let sortedProducts = response.data;

      
        if (selectedOption) {
          sortedProducts = sortedProducts.sort((a, b) => {
              const isNumeric = !isNaN(a[selectedOption]) && !isNaN(b[selectedOption]);
      
              if (isNumeric) {
                  return a[selectedOption] - b[selectedOption]; // number comparison
              } else {                   
                  return a[selectedOption].localeCompare(b[selectedOption]);  // String comparison
              }
          });
        }
        setProducts(sortedProducts);

        console.log('Response:', response.data);


      } catch (error) {
        console.error('Error:', error); 
      }
    };

    fetchData();
  }, [selectedOption]);


  const handleSelectedOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <div className='administracija'>
      <h1>Paslaugų sąrašas</h1>

    
      <div className='administracija-drop-down'>
        <label>Pasirinkti filtrą: </label>
        <select value={selectedOption} onChange={handleSelectedOption}>
          <option value="">pasirinkti...</option>
          <option value="productID">ID</option>
          <option value="productTitle">Pavadinimas</option>
          <option value="productCategory">Kategorija</option>
        </select>

        <input type='button' className="btn btn-secondary administracija-box-1-button-z" 
                   value="Prideti naują" onClick={navigateToAddProduct}/>      
        
      </div>

      
      <div className='administracija-list'>

        <table className="table table-hover">

          <thead className="table-light">
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Pavadinimas</th>
              <th scope='col'>Sub-kategorija</th>
              <th scope='col'>Kategorija</th>
              <th scope='col'>Keisti</th>
             
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <ProductList key={product.productID} product={product} />
            ))}
          </tbody> 
                 
        </table>

                <div className='administracija-box-1'>
                  <div className='administracija-box-1-button-box-center'>     
                    <p>&ensp;</p>             
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value="Grįžti atgal" onClick={navigateToAdministracija}/>                              
                  </div>
                </div>

      </div>

    </div>
    

    
    )
  };

  
  export default ReadProduct;


