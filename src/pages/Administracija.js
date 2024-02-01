import '../main/custom-bootstrap.css';
import './formats/Administracija.css';
import { useNavigate } from 'react-router-dom';





 

const Administracija = () => {

  const navigate = useNavigate();
  

  const navigateToAddPatient = () => {
    navigate('/addpatient');};
  
  const navigateToEditPatient = () => {
    navigate('/editpatient');};
  
  
  const navigateToDeletePatient = () => {
    navigate('/deletepatient');};
  
  
  const navigateToReadPatient = () => {
    navigate('/readpatient');};






  return (

   

  <div className='administracija'>
   <p /* ---------------------------------      PSL     ----------------------------------    START */> </p>
   <h1>Administracija</h1>

    
    <div className='administracija-box-container'> 
    <p /* -----------------------------      ALL BOXES     -------------------------------    START */> </p>







            
              
      <div className='administracija-box-main'> 
      <p /* -------------------------    1. PACIENTAI    -------------------------------    START */> </p>
      <h3>Pacienų sąrašo valdymas</h3>
                     
                     
        <div className='administracija-box-1'  /* ADD - P */>
          <h4>1. Įvesti naują pacientą</h4>
                            
          <p>Info apie įvedimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToAddPatient}>Įvesti naują pacientą</button>
          </div>
                             
        </div>

        

        <div className='administracija-box-1'  /* READ - P */>        
          <h4>2. Rodyti esamus pacientus </h4>

          <p>Info apie info rodymą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToReadPatient}>Rodyti sąrašą</button>
          </div>
                 
        </div>
                     


        <div className='administracija-box-1'  /* EDIT - P */>        
          <h4>3. Keisti esamo paciento duomenis</h4>

          <p>Info apie keitimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToEditPatient}>Koreguoti paciento duomenis</button>
          </div>
                 
        </div>



        <div className='administracija-box-1'  /* DELETE - P */>        
          <h4>4. Ištrinti esamą pacientą </h4>

          <p>Info apie ištrynimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToDeletePatient}>Ištrinti pacientą</button>
          </div>
                 
        </div>
     
                   
        <p /* -------------------------   1.PACIENTAI   ----------------------------------- END */> </p>
      </div> 













      <div className='administracija-box-main'>
       <p /* ------------------------    2. DARBUOTOJAI   ---------------------------   START */> </p>
       <h3>Darbuotojų sąrašo valdymas</h3>
            


        <div className='administracija-box-1'  /* ADD - D */>
          <h4>1. Įvesti naują darbuotoją</h4>
                            
          <p>Info apie įvedimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToAddPatient}>Įvesti naują pacientą</button>
          </div>
                             
        </div>

        

        <div className='administracija-box-1'  /* READ - P */>        
          <h4>2. Rodyti esamus darbuotojus </h4>

          <p>Info apie info rodymą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToReadPatient}>Įvesti naują pacientą</button>
          </div>
                 
        </div>
                     


        <div className='administracija-box-1'  /* EDIT - D */>        
          <h4>3. Pakeisti esamo darbuotojo duomenis</h4>

          <p>Info apie keitimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToEditPatient}>Įvesti naują pacientą</button>
          </div>
                 
        </div>



        <div className='administracija-box-1'  /* DELETE - D */>        
          <h4>4. Ištrinti esamą darbuotoją </h4>

          <p>Info apie ištrynimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToDeletePatient}>Įvesti naują pacientą</button>
          </div>
                 
        </div>


       <p /* -------------------------   2. DARBUOTOJAI   --------------------------------- END */> </p>
      </div>









             
      <div className='administracija-box-main'> 
       <p /* -------------------------    3. M PASLAUGOS    -------------------------------    START */> </p>
       <h3>Paslaugų sąrašo valdymas</h3>
                     
                     
        <div className='administracija-box-1'  /* ADD - MP */>
          <h4>1. Įvesti naują paslaugą</h4>
                            
          <p>Info apie įvedimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToAddPatient}>Įvesti naują pacientą</button>
          </div>
                             
        </div>

        

        <div className='administracija-box-1'  /* READ - MP */>        
          <h4>2. Rodyti esamas paslaugas </h4>

          <p>Info apie info rodymą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToReadPatient}>Įvesti naują pacientą</button>
          </div>
                 
        </div>
                     


        <div className='administracija-box-1'  /* EDIT - MP */>        
          <h4>3. Pakeisti esamos paslaugos duomenis</h4>

          <p>Info apie keitimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToEditPatient}>Įvesti naują pacientą</button>
          </div>
                 
        </div>




        <div className='administracija-box-1'  /* DELETE - MP */>        
          <h4>4. Ištrinti esamą paslaugą </h4>

          <p>Info apie ištrynimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToDeletePatient}>Įvesti naują pacientą</button>
          </div>
                 
        </div>
                 
            
                   
        <p /* -------------------------   3. M PASLAUGOS   ------------------------------ END */> </p>
      </div> 








                
      <div className='administracija-box-main'> 
       <p /* ------------------------    4. REZERVACIJOS    ----------------------------    START */> </p>
       <h3>Rezervacijų sąrašo valdymas</h3>
                     
                     
        <div className='administracija-box-1'  /* ADD - R */>
          <h4>1. Įvesti naują rezervaciją</h4>
                            
          <p>Info apie įvedimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToAddPatient}>Įvesti naują pacientą</button>
          </div>
                             
        </div>

        

        <div className='administracija-box-1'  /* READ - R */>        
          <h4>2. Rodyti esamas registracijas </h4>

          <p>Info apie info rodymą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToReadPatient}>Įvesti naują pacientą</button>
          </div>
                 
        </div>
                     


        <div className='administracija-box-1'  /* EDIT - R */>        
          <h4>3. Pakeisti esamų registracijų duomenis</h4>

          <p>Info apie keitimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToEditPatient}>Įvesti naują pacientą</button>
          </div>
                 
        </div>




        <div className='administracija-box-1'  /* DELETE - R */>        
          <h4>4. Ištrinti esamą registraciją </h4>

          <p>Info apie ištrynimą</p>
                                                  
          <div className='administracija-box-2'>
            <button type="button" className="btn btn-primary" onClick={navigateToDeletePatient}>Įvesti naują pacientą</button>
          </div>
                 
        </div>



                   
                   
        <p /* -------------------------    4. REZERVACIJOS    ------------------------ END */> </p>
      </div> 




    
    </div>

  </div>)

  };
  
  export default Administracija;







    /*<form action="#" th:action="@{/patient}" th:object="${patient}" method="post">
               <div>
                   <label for="patientID" class="form-label"> ID: </label>
                   <input type="text" th:field="*{patientID}" id="patientID" placeholder="${patient.getPatientID}" class="form-control"/>
               </div>
               
               <div >
                   <label for="patientName" class="form-label"> Patient Name: </label>
                   <input type="text" th:field="*{patientName}" id="patientName" placeholder="${patient.getPatientName}" class="form-control"/>
               </div>
               
               <div>
                   <label for="patientSurname" class="form-label"> Patient Surname: </label>
                   <input type="text" th:field="*{patientSurname}" id="patientSurname" placeholder="${patient.getPatientSurname}" class="form-control"/>
               </div>
               
               
               <div>
                   <br></br>
                   <input type="submit" class="btn btn-primary" value="Save"/>
                   <input type="reset" class="btn btn-secondary" value="Reset"/>
               </div>

            </form>
    */