

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
                 <img src="./logo-blue.png" alt={"Istaigos_logo"} /> 
                 <p>Istaigos pavadinimas</p>
               </div>     
            </header>
    
            <nav className='list'>  
             <ul className='list'>
               <li className='item'>
                 <Link to="/" className='link'>Home</Link>
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
             </ul>
            </nav>

          </div>
        </div>  
  
        <div className='content-container'>

            <div className='content-container-left'>
              <div className='header-zone'>   
              <p>&nbsp;</p>  
              </div>

              <div>     
              <p>text1</p>
              <p>text2</p>
              <p>text3</p>
              <p>text4</p>
              <p>text5</p>
              <p>text6</p>
              <p>text7</p>
              <p>text8</p>
              <p>text9</p>
              </div>

            </div>
      
            <div className='content-container-right'>
              <div className='header-zone'>   
              <p>&nbsp;</p>  
              </div>
            <Outlet />
            </div>

        </div> 

      </div> 

      
    );
  };
  
  export default Layout;

