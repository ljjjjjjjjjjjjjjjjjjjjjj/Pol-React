

import React from 'react';
import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import HandleEmployeeSelection from '../../methods_and_other/HandleEmployeeSelection.js';
import HandlePatientSelection from '../../methods_and_other/HandlePatientSelection.js';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import lt from 'date-fns/locale/lt'; // Import Lithuanian locale
import { getDay } from 'date-fns';






const AddAppointment = () => {

  /*  -----------------   Navigate    ------------------*/
  const navigate = useNavigate();
  const navigateToReadAppointment = () => {
    navigate(`/readappointment`);};
  
  const navigateToAdministracija = () => {
    navigate(`/administracija`);};
  /*  -----------------   Navigate    ------------------*/





  /*  -----------------   Const setters    ------------------*/
  const [appCategory, setAppCategory] = useState("");
  const [appReason, setAppReason] = useState("");
  /*  -----------------   Const setters    ------------------*/





  /*  -----------------   Employee    ------------------*/
  const [appEmployee, setAppEmployee] = useState('');
  const [empInfo, setEmpInfo] = useState('');

  const handleEmployeeSelect = (employee, info) => {
    setAppEmployee(employee);
    setEmpInfo(info);
  };

 

  useEffect(() => {
    console.log("useEffect-employee (APP):", appEmployee);
    if (appEmployee == null)
    {handleEmployeeSelect();}
  }, [appEmployee]);
  /*  -----------------   Employee    ------------------*/

  




   /*  ------------------   Patient    -------------------*/
   const [appPatient, setAppPatient] = useState('');
   const handlePatientSelect = (patient) => {
     setAppPatient(patient);
   };

   useEffect(() => {
    console.log("useEffect-patient (APP):", appPatient);
    if (appPatient == null)
    {handlePatientSelect();}
  }, [appPatient]);
   /*  ------------------   Patient    -------------------*/


  
 
  
           

  /*  -----------------   Date    ------------------*/
  registerLocale('lt', lt); // Register Lithuanian locale
  setDefaultLocale('lt'); // Set Lithuanian locale as the default

  const getInitialDate = () => {
    const currentDate = new Date();
    let nextWorkingDay = currentDate;

    // If today is Saturday (6) or Sunday (0), find the next Monday (1)
    while (nextWorkingDay.getDay() === 0 || nextWorkingDay.getDay() === 6) {
      nextWorkingDay.setDate(nextWorkingDay.getDate() + 1);
    }

    return nextWorkingDay;
  };

  const [selectedDate, setSelectedDate] = useState( getInitialDate());
  const [selectedHour, setSelectedHour] = useState(7);
  const [selectedMinute, setSelectedMinute] = useState(0);

  
  const handleDateFilter = (date) => {
    const day = getDay(date);
    // Allow selection only if the day is Monday (1) to Friday (5)
    return day >= 1 && day <= 5;
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);};
  

  const handleTimeChange = (event) => {
    const [selectedHour, selectedMinute] = event.target.value.split(':');
    setSelectedHour(parseInt(selectedHour));
    setSelectedMinute(parseInt(selectedMinute));
  };
  /*  -----------------   Date    ------------------*/



  


  /*  -----------------   Handling    ------------------*/
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
       
  const handleAppointmentEditSubmit = async (event) => {
    event.preventDefault();

    try {

      if (!appEmployee || !appPatient) {
        setErrorMessage('Būtina pasirinkti gydytoją ir pacientą.');
        return;
      }

      const formattedDate = selectedDate
        ? format(selectedDate, 'yyyy/MM/dd')
        : '';
      const formattedTime = selectedDate
        ? `${selectedHour}:${selectedMinute.toString().padStart(2, '0')}`
        : '';


      
      console.log('TEST:', appEmployee);
      console.log('TEST:', appPatient);


      const request = await axios.post('http://localhost:8080/appointments/add', {
        appCategory, 
        appReason,
        appDate: `${formattedDate}, ${formattedTime}`,
        appEmployee,
        appPatient
      });

      



        console.log('Request:', request.data);
        setSuccessMessage(<div>Rezervacija sėkmingai įvesta: <br /> <br />
                          <strong>Data ir laikas:</strong> &nbsp; {formattedDate} &nbsp; ({formattedTime} val.)<br /> 
                          <strong>Kategorija:</strong> &nbsp; {appCategory} <br />
                          <strong>Priežastis:</strong> &nbsp; {appReason} <br />
                          <strong>Gydytojas:</strong> &nbsp; {appEmployee} <br />
                          <strong>Pacientas:</strong> &nbsp; {appPatient}</div>);
        setErrorMessage('');
        handleReset();
        
        
      
    } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Rezervacija NEBUVO įvesta');
      
    }
  };

  const handleReset = () => {
    setSelectedDate( getInitialDate());
    setSelectedHour(7);
    setSelectedMinute(0);
    
    
    setAppCategory('');
    setAppReason(''); 
    
  };
  /*  -----------------   Handling    ------------------*/




  

  
    
   
  return (
    <div className='administracija'>
      <div className='administracija-box-container'>
        <div>
          <h1>Administracija</h1>
        </div>
        <div className='administracija-box-1'>
          <h3>Rezervacijų sąrašo valdymas - naujos rezervacijos įvedimas</h3>
          <div>
            
            <div>


              <div className='administracija-box-3-PATIENTS-main'>
              <h4>1.1. Pasirinkti gydytoją</h4>
              <HandleEmployeeSelection onEmployeeSelect={handleEmployeeSelect}/>
              <p>&nbsp;</p>
              </div>


              <div className='administracija-box-3-PATIENTS-main'>
              <h4>1.2. Pasirinkti pacientą</h4>
              <HandlePatientSelection onPatientSelect={handlePatientSelect}/>
              
              </div>




            



              <div className='administracija-box-1'>
              <h4>1.3. Kiti duomenys: </h4>

              <div className='administracija-box-3-PATIENTS-plus'>

              <form onSubmit={handleAppointmentEditSubmit}>
                <label> Kategorija (gyvai, telefonu arba ūmus):
                  <input
                    type='text'
                    value={appCategory}
                    onChange={(p) => setAppCategory(p.target.value)}
                  />
                </label>
                <label> Priežastis (nusiskundimai):
                  <input
                    type='text'
                    value={appReason}
                    onChange={(p) => setAppReason(p.target.value)}
                  />
                </label>
                <br></br>
                <label > Data:
                  <div className='administracija-box-1-datepicker'>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy/MM/dd"
                      filterDate={handleDateFilter}

                    />
                    <div className='administracija-box-1'>
                      <label>Laikas:</label>
                      <select 
                        onChange={handleTimeChange}
                        defaultValue={`${selectedHour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')}`}
                      >
                        {[...Array(13).keys()].map((hour) => (
                          [...Array(4).keys()].map((quarter) => {
                            const time = `${(hour + 7).toString().padStart(2, '0')}:${(quarter * 15).toString().padStart(2, '0')}`;
                            return (
                              time <= "19:00" && (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              )
                            );
                          })
                        ))}
                      </select>
                    </div>
                  </div>
                </label>
                <div>
                  <br></br>
                  {successMessage && <div className="success-message">{successMessage}</div>}
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  <br></br>
                </div>
                <div className='administracija-box-1-button-box-differnet'>
                  <br></br>
                  <input type='submit' className="btn btn-primary administracija-box-1-button-b"
                    value="Išsaugoti" />
                  <input type='reset' className="btn btn-secondary administracija-box-1-button-g"
                    value="Išvalyti" onClick={handleReset} />
                </div>
              </form>
              </div>
              </div>
              <div className='administracija-box-1'>
                <div className='administracija-box-1-button-box-center'>
                  <input type='button' className="btn btn-secondary administracija-box-1-button-b"
                    value="&#9665; Rezervacijų sąrašas" onClick={navigateToReadAppointment} />
                  <br></br>
                  <br></br>
                  <input type='button' className="btn btn-secondary administracija-box-1-button-b"
                    value=" &#9665; Administracija " onClick={navigateToAdministracija} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;




