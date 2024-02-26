

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './formats/Paslaugos.css';
import '../main/custom-bootstrap.css';




const Products = () => {

     
  
  const navigate = useNavigate();


  const navigateToSignIn = () => {
    navigate('/signin');
  };




  return (
    <div className='paslaugos'>

    <h1>Teikiamos paslaugos:</h1>


      <div className='box-container'>   
           


        <div className='box-container-item'>
                     
          <div className='box-1-header'>
            <h3>Seimos medicina ir slauga</h3>
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
                      
        </div>
                     
                     
        <div className='box-container-item'>

          <div className='box-1-header'>
            <h3>Gydytojų specialistų konsultacijos</h3>
            <p></p>
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

        </div >

  
      </div>


      <div className='box-container'> 

        <div className='box-container-item'>

          <div className='box-1-header'>
            <h3>Odontologija</h3>
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

        </div>


        <div className='box-container-item'>

          <div className='box-1-header'>
            <h3>Tyrimai ir Skiepai</h3>
            <p></p>
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
           
      </div>






      <div className='box-container'> 

           <div className='box-2-content'>
           <button type="button" className="btn btn-primary" onClick={navigateToSignIn}>Registruotis internetu</button>
           </div>

           
      </div>

      <div>
        <div className='paslaugos-box-3-header'>
           <h3>&ensp;Paslaugų kokybė </h3>
        </div>
        <div className='paslaugos-box-3-content'>
          <h5>Mūsų klinikoje aukštą paslaugų kokybę užtikrina ne tik personalo kompetencija ir plati patirtis,
           bet ir taikomos naujausios technologijos.
          </h5>
          <p></p>


          <div className='home-imagecontainer-cover'>
           <img className='home-imagecontainer-cover-image' src="./images/technology-1.jpg" alt={"technology"} /> 
          </div> 

          <h5>Jūsu sveikata rūpintis padeda atnaujinta tyrimų laboratorija, moderni oftalmologų diagnostikos, 
            bei echoskopijos tyrimų įranga, ir įdiegtos naujausios odontologijos technologijos.
            <br></br>&ensp;
            <br></br>&ensp;
          </h5>

 
        </div>
           
      </div>


    </div>
  );

  
}
  
  
  export default Products;

