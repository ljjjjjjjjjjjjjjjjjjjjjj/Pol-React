

import React from 'react';
import '../../main/custom-bootstrap.css';
import '../formats/PatientPage.css';
import '../formats/Administracija.css';
import HandleEmployeeSelectionNEW from '../../methods_and_other/HandleEmployeeSelectionNEW.js';
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import lt from 'date-fns/locale/lt'; // Import Lithuanian locale
import { getDay } from 'date-fns';






const AddAppointmentPATIENT = () => {

  const { idP } = useParams();
  

  /*  -----------------   Navigate    ------------------*/
  const navigate = useNavigate();
  const navigateToReadAppointmentPatient = () => {
    navigate(`/patientpage/${appPatientID}/readappointmentpatient`);};
  
  const navigateToPatientPage = () => {
    navigate(`/patientpage/${appPatientID}`);};
  /*  -----------------   Navigate    ------------------*/

  






  /*  -----------------   Const setters    ------------------*/
  const [appCategory, setAppCategory] = useState("");
  const [appReason, setAppReason] = useState("");
  /*  -----------------   Const setters    ------------------*/





  /*  -----------------   Employee    ------------------*/
  const [appEmployeeID, setAppEmployeeID] = useState('');

  const [existingAppEmployeeName, setExistingAppEmployeeName] = useState('');
  const [existingAppEmployeeSurname, setExistingAppEmployeeSurname] = useState('');
  const [existingAppEmployeeJobTitle, setExistingAppEmployeeJobTitle] = useState('');

  const [empInfo, setEmpInfo] = useState({}); 

  const handleEmployeeSelect = (employee) => {
    setAppEmployeeID(employee);
    
  };

 

  useEffect(() => {
    console.log("1. EDITAPP - employee useEffect (appEmployeeID) NULL:", appEmployeeID);
    if (appEmployeeID == null)
    {handleEmployeeSelect();}
  }, [appEmployeeID]);


  useEffect(() => {
    console.log("1. EDITAPP - employee useEffect (appEmployeeID) NOT NULL:", appEmployeeID);
    if (appEmployeeID > 0)
    {handleGetEmployeeInfo();}
  }, [appEmployeeID]);


  useEffect(() => {
    console.log("1. EDITAPP - employee useEffect (existingAppEmployeeName):", existingAppEmployeeName);
    if (appEmployeeID == null)
    {handleEmployeeSelect();}
  }, [existingAppEmployeeName]);


  const handleGetEmployeeInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/employees/get/${appEmployeeID}`);
      const employeeData = response.data;
            

      setAppEmployeeID(employeeData.empID);
      setExistingAppEmployeeName(employeeData.empName);
      setExistingAppEmployeeSurname(employeeData.empSurname);
      setExistingAppEmployeeJobTitle(employeeData.empJobTitle);
    
      console.info('1. EDITAPP - handleGetEmployeeInfo (appEmployeeID): ', (employeeData.empID));
      console.info('1. EDITAPP - handleGetEmployeeInfo (employeeData.empName): ', (employeeData.empName));
      console.info('1. EDITAPP - handleGetEmployeeInfo (employeeData.empSurname): ', (employeeData.empSurname));
      console.info('1. EDITAPP - handleGetEmployeeInfo (employeeData.empJobTitle): ', (employeeData.empJobTitle));

                    
      setSuccessMessage('');
      setErrorMessage('');

      
                 
    } catch (error) {
      console.error('1. EDITAPP - Error:', error);
      setSuccessMessage('');
      setErrorMessage('Darbuotojas su tokiu ID nerastas');
    }
}
   
  /*  -----------------   Employee    ------------------*/

  







  /*  ------------------   Patient    -------------------*/
  
  const [appPatientID] = useState(idP);
  const [existingAppPatientName, setExistingAppPatientName] = useState('');
  const [existingAppPatientSurname, setExistingAppPatientSurname] = useState('');
  const [existingAppPatientNO, setExistingAppPatientNO] = useState('');



  useEffect(() => {
    const handleGetPatientInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/patients/get/${appPatientID}`);
        const patientData = response.data;
              
  
        setExistingAppPatientName(patientData.patientName);
        setExistingAppPatientSurname(patientData.patientSurname);
        setExistingAppPatientNO(patientData.patientNO);
      
        console.info('1. EDITAPP - handleGetPatientInfo (appPatientID): ', (appPatientID));
        console.info('1. EDITAPP - handleGetPatientInfo (patientData.patientName): ', (patientData.patientName));
        console.info('1. EDITAPP - handleGetPatientInfo (patientData.patientSurname): ', (patientData.patientSurname));
        console.info('1. EDITAPP - handleGetPatientInfo (patientData.patientNO): ', (patientData.patientNO));
  
                      
        setSuccessMessage('');
        setErrorMessage('');
  
        
                   
      } catch (error) {
        console.error('1. EDITAPP - Error:', error);
        setSuccessMessage('');
        setErrorMessage('Pacientas su tokiu ID nerastas');
      }
    };

    handleGetPatientInfo();

  }, [appPatientID]);

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


  const [buttonBoxSave, setButtonBoxSave] = useState(true);
  const [buttonBoxNew, setButtonBoxNew] = useState(false);



       
  const handleAppointmentEditSubmit = async (event) => {
    event.preventDefault();

    try {

      if (!appEmployeeID || !appPatientID) {
        setErrorMessage('Būtina pasirinkti gydytoją.');
        return;
      }

    

      const formattedDate = selectedDate
        ? format(selectedDate, 'yyyy/MM/dd')
        : '';
      const formattedTime = selectedDate
        ? `${selectedHour}:${selectedMinute.toString().padStart(2, '0')}`
        : '';


      
      console.log('1. EDITAPP - TEST:', appEmployeeID);
      console.log('1. EDITAPP - TEST:', appPatientID);


      const request = await axios.post('http://localhost:8080/appointments/add-objects', {
        appCategory, 
        appReason,
        appDate: `${formattedDate}, ${formattedTime}`,
        appEmployeeID,
        appPatientID
      });




      console.log('1. EDITAPP - Request:', request.data);

      setSuccessMessage(<div>Rezervacija sėkmingai įvesta: <br /> <br />
                          <strong>Data ir laikas:</strong> &nbsp; {formattedDate} &nbsp; ({formattedTime} val.)<br /> 
                          <strong>Kategorija:</strong> &nbsp; {appCategory} <br />
                          <strong>Priežastis:</strong> &nbsp; {appReason} <br />
                          <strong>Gydytojas:</strong> &nbsp; {existingAppEmployeeName} {existingAppEmployeeSurname} ({existingAppEmployeeJobTitle}) <br />
                          <strong>Pacientas:</strong> &nbsp; {existingAppPatientName} {existingAppPatientSurname} ({existingAppPatientNO})</div>);
      setErrorMessage('');


      handlePartReset()

      setButtonBoxNew(true)
      setButtonBoxSave(false)

 
      
    } catch (error) {
        console.error('1. EDITAPP - Error:', error);
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

    setAppEmployeeID('');
    setExistingAppEmployeeName('');
    setExistingAppEmployeeSurname('');
    setExistingAppEmployeeJobTitle('');

    setExistingAppPatientName('');
    setExistingAppPatientSurname('');
    setExistingAppPatientNO('');

    
    
  };


  const handlePartReset = () => {
    setSelectedDate( getInitialDate());
    setSelectedHour(7);
    setSelectedMinute(0);
    
    
    setAppCategory('');
    setAppReason(''); 

    setAppEmployeeID('');

   
    
  };
  /*  -----------------   Handling    ------------------*/




  

  
    
   
  return (
    <div className='patientPage'>
      <div className='patientPage'>
        <div>
          <h1>Rezervacijos</h1>
        </div>
        <div className='administracija-box-1'>
          <h3>Naujos rezervacijos įvedimas</h3>
          <div>
            
            <div>

              {buttonBoxSave && (
              <div className='administracija-box-3-PATIENTS-main'>
              <h4>1.1. Pasirinkti gydytoją</h4>
              <HandleEmployeeSelectionNEW 

                info={empInfo}
                onEmployeeSelect={handleEmployeeSelect}
                
              />
              <p>&nbsp;</p>
              </div>
              )}


                         


              {buttonBoxSave && (
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
              )}

                <div className='patientPage-box-1'>
                  <br></br>
                  {successMessage && <div className="success-message">{successMessage}</div>}
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  <br></br>
                </div>





              {buttonBoxNew && (
              <div className='administracija-box-1'>
                <div className='administracija-box-1-button-box-center'>
                    <br></br>
                    <input type='button' className="btn btn-primary administracija-box-1-button-z"
                      value="Įvesti dar vieną rezervaciją" onClick={() => {
                        setButtonBoxSave(true);
                        setButtonBoxNew(false);
                        setSuccessMessage('');
                    }}/>
  
                    
                </div>
              </div>
              )}












              <div className='administracija-box-1'>
                <div className='administracija-box-1-button-box-center'>
                  <input type='button' className="btn btn-secondary administracija-box-1-button-b"
                    value="&#9665; Rezervacijų sąrašas" onClick={navigateToReadAppointmentPatient} />
                  <br></br>
                  <br></br>
                  <input type='button' className="btn btn-secondary administracija-box-1-button-b"
                    value=" &#9665; Mano puslapis " onClick={navigateToPatientPage} />
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointmentPATIENT;


