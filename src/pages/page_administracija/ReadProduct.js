import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import ProductList from '../../methods_and_other/ProductList';
import { useState,  useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ReadProduct = () => {

  const navigate = useNavigate();
  const navigateToAddProduct = () => {
    navigate(`/addproduct`);
  };
  const navigateToAdministracija = () => {
    navigate(`/administracija`);
  };

  const [products, setProducts] = useState( [] );
  const [selectedOption, setSelectedOption] = useState("");
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/medical-products/get/all');
        
        let sortedProducts = response.data;

        if (selectedOption) {
        sortedProducts = sortedProducts.sort((a, b) => a[selectedOption].localeCompare(b[selectedOption]));
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

        <table class="table table-hover">

          <thead class="table-light">
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


