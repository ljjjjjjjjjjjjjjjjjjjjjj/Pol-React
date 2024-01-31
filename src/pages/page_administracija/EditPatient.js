import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';



const EditPatient = () => {


    return (

    <div className='administracija'>

      <p> EditPatient puslapis</p>

    </div>
    
    
     
    )
  };
  
  export default EditPatient;













   /*

    <div className='administracija-box-container'>

          <div>
          <h1>Administracija</h1>
          </div>

          <div className='administracija-box-1'>
          <h3>Pacienų sąrašo valdymas</h3>
            <div>
            <h4>1. Įvesti naują pacientą</h4>
            <div>
            <h3>Šablonas</h3>
           

            <form onSubmit={handlePatientEditSubmit}>
               <div>
                   <label> ID: 
                     <input 
                     type="text" 
                     value="patientID" 
                     onChange={(p) => setPatientID(p.target.value)} 
                
                     />
                    </label>
               </div>
               
               <div >
               <label> Vardas: 
                     <input 
                     type="text" 
                     value="patientName" 
                     onChange={(p) => setPatientName(p.target.value)} 
                     
                     />
                    </label>
               </div>
               
               <div>
               <label> Pavarde: 
                     <input 
                     type="text" 
                     value="{patientSurname}" 
                     onChange={(p) => setPatientSurname(p.target.value)} 
                     
                     />
                    </label>
               </div>
               
               
               <div>
                   <br></br>
                   <input type="submit" class="btn btn-primary" value="Save"/>
                   <input type="reset" class="btn btn-secondary" value="Reset"/>
               </div>

            </form>

            
            </div>
            <h4>Pakeisti esamo paciento duomenis</h4>
            <h4>Ištrinti pacientą</h4>
            
            <h4>Pacientų sąrašas</h4>

            <div>
       
            </div>

            <div>

            {patients.map( patient => (
            <PatientList key={patient.patientID} patient={patient} />
            ))}
            
            </div>

            </div>
          </div>


      


          <div>
          </div>


        </div>
    
   

        </p> */



