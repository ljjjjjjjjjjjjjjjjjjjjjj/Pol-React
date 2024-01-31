import '../pages/formats/EmployeeCard.css';

function ProductCard({product}) {

    
      return (
        <div>
          <img src="./logo-blue.png" alt={product.productTitle} /> 
          <h3> {product.productCategory}&nbsp;{product.productTitle}</h3>
          <p> {product.productCategory}</p>
        </div>
      );
    }
  
    export default ProductCard;
  
  
  