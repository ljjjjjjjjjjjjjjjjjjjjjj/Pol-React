

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './formats/Paslaugos.css';
import '../main/custom-bootstrap.css';



const fetchData = () => {                                 // function    =   () => {}    
  return fetch( "http://localhost:8080/medical-products/get/all" );  
}                                                         // fetch irgi yra Promise


// const fetchProductByID = (productId) => {
//   return fetch(`http://localhost:8080/medical-products/get/${productId}`);
// };

// fetchProductByID()
// .then((response) => response.json())
// .then((json) => setSelectedProduct(json))
// .catch((e) => console.error(e));






const Products = () => {

     
  const [products, setProducts] = useState( [] );
  const navigate = useNavigate();


  const navigateToSignIn = () => {
    navigate('/signin');
  };

  

  useEffect( () => {
  
      fetchData()
      .then( response => response.json())
      .then( json => setProducts( json ))
      .catch( e => console.error (e))
      
      console.log("Promisas paleistas");
    
    } , [] );



  return (
    <div className='paslaugos'>

    <h1>Teikiamos paslaugos:</h1>


      <div className='box-container'>   
           

           <div className='box-1-header'>
           <h3>Seimos medicina ir slauga</h3>
           <p></p>
           </div>

           <div className='box-1-header'>
           <h3>Gydytojų specialistų konsultacijos</h3>
           <p></p>
           </div>

           <div className='box-1-content'>
           <p> </p>
           <ul>
             <li>Kūdikių ir vaikų sveikatos priežiūra ir profilaktinis stebėjimas</li>
             <li>Suaugusiųjų sveikatos priežiūra ir profilaktiniai sveikatos tikrinimai</li>
             <li>Nėščių moterų sveikatos priežiūra</li>
             <li>Tyrimų paskyrimas</li>
             <li>Būtinoji pagalba visiems besikreipiantiems šeimos medicinos skyriaus darbo metu</li>
             <li>Gyvensenos medicina</li>
           </ul>
           </div>

           <div className='box-1-content'>
           <p> </p>
           <ul>
             <li>Dermatologo</li>
             <li>Neurologo </li>
             <li>Otorinolaringologo (LOR) </li>
             <li>Traumatologo </li>
           </ul>
           </div>
      </div>


      <div className='box-container'> 


           <div className='box-1-header'>
           <h3>Odontologija</h3>
           </div>

          

           <div className='box-1-header'>
           <h3>Tyrimai ir Skiepai</h3>
           <p></p>
           </div>

           <div className='box-1-content'>
           <p> </p>
             <ul>
             <li>Profilaktinis vaikų ir suaugusiųjų dantų patikrinimas</li>
             <li>Gydytojo odontologo konsultacijos  </li>
             <li>Vaikų  dantų dengimas silantinėmis medžiagomis  </li>
             <li>Traumatologo </li>
             </ul>
           </div>

           <div className='box-1-content'>

        
            <p>Tyrimai:</p>
             <ul>
             <li>Kraujo bendriniai tyrimai (bendriniai ir tiksliniai)</li>
             <li>Gripo ir COVID testai </li>
             <li>Ekoskopija</li>
             </ul>

             <p>Skiepai nuo:</p>
              <ul>
              <li>COVID</li>
              <li>Ekinio encefalito </li>
              <li>Stabliges </li>
              </ul>
           </div>
      </div>

      <div className='box-container'> 


          

           <div className='box-2-content'>
           <button type="button" className="btn btn-primary" onClick={navigateToSignIn}>Registruotis internetu</button>
           </div>

           <div className='box-2-content'>
           <h4>&nbsp;&nbsp;&nbsp;Kita:</h4>
           <p></p>
           </div>
      </div>


    </div>
  );

  
}
  
  
  export default Products;


  // div className='product-category'>
  // <h3>Gydytojai specialistai:</h3>
  // {products
  //  .filter((product) => ["Seimos medicina ir slauga"].includes(product.productCategory))
  //  .map((product) => (
  //    <ProductCard key={product.Category} product={product} />
  //  ))}
  // </div>


  // <div>
  //       <br></br>
  //       <h1>Products data</h1>
  //       <br></br>
  //       <div>
  //        {products.map( product => (
  //           <ProductCard key={product.productID} product={product} />
  //        ))}
  //       </div>
  //     </div>