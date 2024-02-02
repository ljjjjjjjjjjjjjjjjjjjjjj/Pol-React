import '../main/custom-bootstrap.css';
import './formats/Administracija.css';
import { useNavigate } from 'react-router-dom';





 

const Administracija = () => {

  const navigate = useNavigate();
  

  const navigateToAddPatient = () => { navigate('/addpatient'); };
  const navigateToEditPatient = () => { navigate('/editpatient'); };
  const navigateToDeletePatient = () => { navigate('/deletepatient'); };
  const navigateToReadPatient = () => { navigate('/readpatient'); };

  const navigateToAddEmployee = () => { navigate('/addemployee'); };
  const navigateToEditEmployee = () => { navigate('/editemployee'); };
  const navigateToDeleteEmployee = () => { navigate('/deleteemployee'); };
  const navigateToReadEmployee = () => { navigate('/reademployee'); };

  const navigateToAddProduct = () => { navigate('/addproduct'); };
  const navigateToEditProduct = () => { navigate('/editproduct'); };
  const navigateToDeleteProduct = () => { navigate('/deleteproduct'); };
  const navigateToReadProduct = () => { navigate('/readproduct'); };

  const navigateToAddAppointment = () => { navigate('/addappointment'); };
  const navigateToEditAppointment = () => { navigate('/editappointment'); };
  const navigateToDeleteAppointment = () => { navigate('/deleteappointment'); };
  const navigateToReadAppointment = () => { navigate('/readappointment'); };







  return (

   

  <div className='administracija'>
   <p /* ---------------------------------      PSL     ----------------------------------    START */> </p>
   <h1>Administracija</h1>

    
    <div className='administracija-box-container'> 
    <p /* -----------------------------      ALL BOXES     -------------------------------    START */> </p>







            
              
      <div className='administracija-box-main'> 
      <p /* -------------------------    1. PACIENTAI    -------------------------------    START */> </p>

      
      <h3>Pacienų sąrašo valdymas</h3>
                     
      <div className='administracija-box-4items-container'>                
        
 
        <div className='administracija-box-4items-items'                      /* READ - P */>                                                                      
            <button type="button" className="btn btn-primary" onClick={navigateToReadPatient}>
              Rodyti ir koreguoti <br></br> pacientų sąrašą</button>                          
        </div>

        <div className='administracija-box-4items-items'                      /* ADD - P */>                                                            
            <button type="button" className="btn btn-primary" onClick={navigateToAddPatient}>
              Įvesti naują pacientą <br></br> (pagal ID)</button>                                     
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
              Įvesti naują darbuotoją <br></br> (pagal ID)</button>                                     
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
              Įvesti naują paslaugą <br></br> (pagal ID)</button>                                     
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
              Įvesti naują rezervaciją <br></br> (pagal ID)</button>                                     
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



