import '../main/custom-bootstrap.css';
import './formats/Administracija.css';
import { useNavigate } from 'react-router-dom';





 

const Administracija = () => {

  const navigate = useNavigate();
  

  const navigateToAddPatient = () => { navigate('/loggedpage/addpatient'); };
  const navigateToEditPatient = () => { navigate('/loggedpage/editpatient'); };
  const navigateToDeletePatient = () => { navigate('/loggedpage/deletepatient'); };
  const navigateToReadPatient = () => { navigate('/loggedpage/readpatient'); };

  const navigateToAddEmployee = () => { navigate('/loggedpage/addemployee'); };
  const navigateToEditEmployee = () => { navigate('/loggedpage/editemployee'); };
  const navigateToDeleteEmployee = () => { navigate('/loggedpage/deleteemployee'); };
  const navigateToReadEmployee = () => { navigate('/loggedpage/reademployee'); };

  const navigateToAddProduct = () => { navigate('/loggedpage/addproduct'); };
  const navigateToEditProduct = () => { navigate('/loggedpage/editproduct'); };
  const navigateToDeleteProduct = () => { navigate('/loggedpage/deleteproduct'); };
  const navigateToReadProduct = () => { navigate('/loggedpage/readproduct'); };

  const navigateToAddAppointment = () => { navigate('/loggedpage/addappointment'); };
  const navigateToEditAppointment = () => { navigate('/loggedpage/editappointment'); };
  const navigateToDeleteAppointment = () => { navigate('/loggedpage/deleteappointment'); };
  const navigateToReadAppointment = () => { navigate('/loggedpage/readappointment'); };







  return (

   

  <div className='administracija'>
   {/* ---------------------------------      PSL     ----------------------------------    START */}
   <h1>Administracija</h1>

    
    <div className='administracija-box-container'> 
    {/* -----------------------------      ALL BOXES     -------------------------------    START */}







            
              
      <div className='administracija-box-main'> 
      { /* -------------------------    1. PACIENTAI    -------------------------------    START */}

      
      <h3>Pacienų sąrašo valdymas</h3>
                     
      <div className='administracija-box-4items-container'>                
        
 
        <div className='administracija-box-4items-items'                      /* READ - P */>                                                                      
            <button type="button" className="btn btn-primary" onClick={navigateToReadPatient}>
              Rodyti ir koreguoti <br></br> pacientų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary" onClick={navigateToAddPatient}>
              Įvesti naują pacientą <br></br> </button>                                     
        </div>
                     
        <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToEditPatient}>
              Koreguoti duomenis <br></br> (pagal ID)</button>                           
        </div>

        <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToDeletePatient}>
              Ištrinti pacientą <br></br> (pagal ID)</button>                      
        </div>
             
                        
        <p /* -------------------------   1.PACIENTAI   ----------------------------------- END */> </p>
      </div> 
      </div> 













      <div className='administracija-box-main'>
       <p /* ------------------------    2. DARBUOTOJAI   ---------------------------   START */> </p>
       <h3>Darbuotojų sąrašo valdymas</h3>
                       
      <div className='administracija-box-4items-container'>                
        
 
        <div className='administracija-box-4items-items'                      /* READ - P */>                                                                      
            <button type="button" className="btn btn-primary" onClick={navigateToReadEmployee}>
              Rodyti ir koreguoti <br></br> darbuotojų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary" onClick={navigateToAddEmployee}>
              Įvesti naują darbuotoją <br></br></button>                                     
        </div>
                     
        <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToEditEmployee}>
              Koreguoti duomenis <br></br> (pagal ID)</button>                           
        </div>

        <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToDeleteEmployee}>
              Ištrinti darbuotoją <br></br> (pagal ID)</button>                      
        </div>
             
                 
       <p /* -------------------------   2. DARBUOTOJAI   --------------------------------- END */> </p>
      </div>
      </div>









             
      <div className='administracija-box-main'> 
       <p /* -------------------------    3. M PASLAUGOS    -------------------------------    START */> </p>
       <h3>Paslaugų sąrašo valdymas</h3>
                        
      <div className='administracija-box-4items-container'>                
        
 
        <div className='administracija-box-4items-items'                      /* READ - P */>                                                                      
            <button type="button" className="btn btn-primary" onClick={navigateToReadProduct}>
              Rodyti ir koreguoti <br></br> paslaugų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary" onClick={navigateToAddProduct}>
              Įvesti naują paslaugą <br></br> </button>                                     
        </div>
                     
        <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToEditProduct}>
              Koreguoti duomenis <br></br> (pagal ID)</button>                           
        </div>

        <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToDeleteProduct}>
              Ištrinti paslaugą <br></br> (pagal ID)</button>                      
        </div>
             

                   
        <p /* -------------------------   3. M PASLAUGOS   ------------------------------ END */> </p>
      </div> 
      </div> 








                
      <div className='administracija-box-main'> 
       <p /* ------------------------    4. REZERVACIJOS    ----------------------------    START */> </p>
       <h3>Rezervacijų sąrašo valdymas</h3>
                     
                     
       <div className='administracija-box-4items-container'>                
        
 
        <div className='administracija-box-4items-items'                      /* READ - P */>                                                                      
            <button type="button" className="btn btn-primary" onClick={navigateToReadAppointment}>
              Rodyti ir koreguoti <br></br> rezervacijų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary" onClick={navigateToAddAppointment}>
              Įvesti naują rezervaciją <br></br> </button>                                     
        </div>
                     
        <div className='administracija-box-4items-items'                      /* EDIT - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToEditAppointment}>
              Koreguoti duomenis <br></br> (pagal ID)</button>                           
        </div>

        <div className='administracija-box-4items-items'                      /* DELETE - P */>                                                                              
            <button type="button" className="btn btn-primary" onClick={navigateToDeleteAppointment}>
              Ištrinti rezervaciją <br></br> (pagal ID)</button>                      
        </div>

                   
                   
        <p /* -------------------------    4. REZERVACIJOS    ------------------------ END */> </p>
      </div>
      </div> 

    
    </div>

  </div>)

  };
  
  export default Administracija;



