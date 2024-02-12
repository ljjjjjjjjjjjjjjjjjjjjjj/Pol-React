

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './formats/Layout.css';



const Layout = () => {

 
    return (
      <div className='primary'>
        <div className='layout'> 
  
          <div>
            <header className='upper-header'> 
               <div className='upper-header'>
                 <img src="./logo-blue.png" alt={"logo"} /> 
                 <p>Istaigos pavadinimas</p>
                 <Link to="/signin" type="button" className='link-login'> <span className='bust-in-silhouette'>&#128100;</span> Prisijungti</Link>
                 
               </div>     
            </header>
    
            <nav className='list'>  
             <ul className='list'>
               <li className='item'>
                 <Link to="/" className='link'>Pradžia</Link>
               </li>
               <li className='item'>
                 <Link to="/informacija" className='link'>Informacija</Link>
               </li>
               <li className='item'>
                 <Link to='/paslaugos' className='link'>Paslaugos</Link>
               </li>
               <li className='item'>
                 <Link to='/personalas' className='link'>Personalas</Link>
               </li>
               <li className='item'>
                 <Link to="/kontaktai" className='link'>Kontaktai</Link>
               </li>
               <li className='item'>
                 <Link to="/administracija" className='link' style={{ backgroundColor: 'rgba(65, 192, 64, 0.8)' }}>Admin</Link>
               </li>
             </ul>
            </nav>

          </div>
        </div>  
  
        <div className='content-container'>

          <div className='content-container-left'>
            <div className='header-zone'>   
              <p>&ensp;</p>  
            </div>
                      
            <div className='content-bottomleft'> 
              <p className='content-bottomleft'>
                <br></br>
                <strong> &emsp;&ensp;Registruotis tel.:</strong> 
                <br></br>
                &ensp;<strong className='blue-icon' >&#128381;</strong>  +370 643 12345
                <br></br>
                &ensp;
              </p> 
                 
            
              <p className='content-bottomleft'>
                <strong> &emsp;&ensp;Registruotis </strong>
                <br></br>
                &#127760; 
                <Link to="/signin" type="button" className='link-login'>  Internetu </Link>                
              </p>
              <p> &emsp;</p>
            </div>


            <div className='content-bottomleft' >                 
              <h5 className='content-bottomleft'>
                <strong> Naujienos ir naudingos nuorodos:</strong>
              </h5>

              <div className='content-bottomleft-image-box' > 
                <img className='content-bottomleft-images' 
                  src="./images/random-news-1.jpg" 
                  alt={"healthcare"} /> 
                <h6>&emsp;</h6> 
                <img className='content-bottomleft-images' 
                  src="./images/random-news-2.jpg" 
                  alt={"healthcare"} />  
              </div> 
            </div>
              
            
                       
          </div>
                   
          <div className='content-container-right'>
            <div className='header-zone'>   
              <p>&ensp;</p>  
            </div>
          <Outlet />
          </div>

          

        </div> 

        <div  className='content-container-bottom'>

        <div className='content-container-bottomleft'>
          <h5>Rekvizitai:</h5>
          <p >VšĮ "Vilniaus Miesto Poliklinika"</p>
          <p >Klinikų g. 80A, LT-10207, Vilnius </p>
          <p >Tel. nr.:&nbsp;&nbsp;+370 654 23456</p>
          <p >E-paštas:&nbsp;&nbsp;info@poliklinika.lt</p>
          <p >&nbsp;</p>
          <p >Įmonės kodas: 123456789</p>
          <p >A.s.: LT357300010123456789</p>
          <p >Swedbank AB, Banko kodas 73000</p>          
          <p ></p>
        </div>



        <div className='content-container-bottomright'>
        <h5>Darbo Laikas:</h5>  
          <p >I&nbsp;&nbsp;&nbsp;- &nbsp;&nbsp;07:00-19:00</p>
          <p >II&nbsp;&nbsp;- &nbsp;&nbsp;07:00-19:00</p>
          <p >III&nbsp;&nbsp;- &nbsp;&nbsp;07:00-19:00</p>
          <p >IV&nbsp;&nbsp;- &nbsp;&nbsp;07:00-19:00</p>
          <p >V&nbsp;&nbsp;- &nbsp;&nbsp;07:00-17:00</p>
          <p >VI&nbsp;&nbsp;- &nbsp;&nbsp;Nedirbame</p>
          <p >VII&nbsp;&nbsp;- &nbsp;&nbsp;Nedirbame</p>         
          <p ></p>
        </div>

          
          
        </div>

      </div> 

      
    );
  };
  
  export default Layout;

