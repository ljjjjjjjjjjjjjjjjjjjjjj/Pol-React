
import './formats/Layout.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';



const Layout = () => {

  const isLoggedIn = !!AuthService.getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/");
    
  };

  

 
    return (
      <div className='primary'>
        <div className='layout'> 
  
          <div>
            <header className='upper-header'> 
               <div className='upper-header'>
                 <img src="./logo-blue.png" alt={"logo"} /> 
                 <p>Istaigos pavadinimas</p>
                 
                 {isLoggedIn ? (
                      <button onClick={handleLogout} className='link-login'>
                        <span className='bust-in-silhouette'>&#128100;</span> Sign-out&ensp;
                      </button>
                    ) : (
                      <Link to="/signin" type="button" className='link-login'>
                        <span className='bust-in-silhouette'>&#128100;</span> Sign-in&ensp;
                      </Link>
                    )}

               </div>     
            </header>
    
            <nav className='list'>  
              <ul className='list'>
                <li className='item'>
                  <Link to="/" className='header-link-blue'>Pradžia</Link>
                </li>
                <li className='item'>
                  <Link to="/informacija" className='header-link-blue'>Informacija</Link>
                </li>
                <li className='item'>
                  <Link to='/paslaugos' className='header-link-blue'>Paslaugos</Link>
                </li>
                <li className='item'>
                  <Link to='/personalas' className='header-link-blue'>Personalas</Link>
                </li>
                <li className='item'>
                  <Link to="/kontaktai" className='header-link-blue'>Kontaktai</Link>
                </li>
                {isLoggedIn ? (
                  <li className='item'>
                      <Link to="/loggedpage/profile" className='header-link-green'>Mano puslapis</Link>
                  </li>
                    ) : (
                  <li className='item'>
                      <Link to="/signin" className='header-link-green'>Mano puslapis</Link>
                  </li>
                )}
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
                <strong> Registruotis tel.:</strong> 
                <br></br>
                <strong className='blue-icon hide-700' >&#128381;</strong>  +370 643 12345
                <br></br>
                &ensp;
              </p> 




              {isLoggedIn ? (
                <p className='content-bottomleft'>
                  <strong> Registruotis: </strong>
                  <br></br>
                  <span className='hide-900'>&#127760; </span>
                  <Link to="/loggedpage/profile" type="button" className='link-login-left'>  Internetu </Link>                
                </p>
                ) : (
                <p className='content-bottomleft'>
                  <strong> Registruotis: </strong>
                  <br></br>
                  <span className='hide-900'>&#127760; </span>
                  <Link to="/signin" type="button" className='link-login-left'>  Internetu </Link>                
                </p>
                )}
                 
            
              
              
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
          <p >V&nbsp;&nbsp;- &nbsp;&nbsp;07:00-19:00</p>
          <p >VI&nbsp;&nbsp;- &nbsp;&nbsp;Nedirbame</p>
          <p >VII&nbsp;&nbsp;- &nbsp;&nbsp;Nedirbame</p>         
          <p ></p>
        </div>

          
          
        </div>

      </div> 

      
    );
  };
  
  export default Layout;

