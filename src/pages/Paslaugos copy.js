

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import './formats/Paslaugos.css';
import '../custom-bootstrap.css';



const fetchData = () => {                                 // function    =   () => {}    
  return fetch( "http://localhost:8080/medical-products/get/all" );  
}                                                         // fetch irgi yra Promise






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


      <div>   
           <p>My Paslaugos</p>
           <br></br>
           <p>TBD Paslaugos</p>
           <br></br>
           <p>TBD Paslaugos</p>
           <br></br>
           <p>TBD Paslaugos</p>

           <div>
           <button ctype="button" className="btn btn-primary" onClick={navigateToSignIn}>Registruotis</button>
           </div>


      </div>

      <br></br>

      <div>
        <br></br>
        <h1>Products data</h1>
        <br></br>
        <div>
         {products.map( product => (
            <ProductCard key={product.productID} product={product} />
         ))}
        </div>
      </div>

    

    </div>
  );
}
  
  
  export default Products;