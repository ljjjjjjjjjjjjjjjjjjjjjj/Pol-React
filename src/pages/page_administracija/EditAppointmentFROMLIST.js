

import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import NavigateToAppointment from '../../methods_and_other/NavigateToAppointment.js';
import authHeader from "../../services/auth-header";
import API_ROOT_PATH from '../../main/configLogged.js';
import HandleEmployeeSelectionEDIT from '../../methods_and_other/HandleEmployeeSelectionEDIT.js';
import HandlePatientSelectionEDIT from '../../methods_and_other/HandlePatientSelectionEDIT.js';
import HandleInfoPatient from '../../methods_and_other/HandleInfoPatient.js';
import HandleInfoEmployee from '../../methods_and_other/HandleInfoEmployee.js';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import lt from 'date-fns/locale/lt'; // Import Lithuanian locale
import { getDay } from 'date-fns';













function EditAppointmentFROMLIST() {
  const { idI } = useParams();
  const { idE } = useParams();
 


  
  
  /*  -----------------   Const setters    ------------------*/
  const [appID, setAppID] = useState("");
  const [appCategory, setAppCategory] = useState("");
  const [appReason, setAppReason] = useState("");


  const [patientSelectionField, setPatientSelectionField] = useState(true);
  const [employeeSelectionField, setEmployeeSelectionField] = useState(true);
  const [otherSelectionField, setOtherSelectionField] = useState(true);
  /*  -----------------   Const setters    ------------------*/





  /*  -----------------   Employee    ------------------*/
  const [appEmployeeID, setAppEmployeeID] = useState('');
  

  const [existingAppEmployeeID, setExistingAppEmployeeID] = useState('');
  const [existingAppEmployeeName, setExistingAppEmployeeName] = useState('');
  const [existingAppEmployeeSurname, setExistingAppEmployeeSurname] = useState('');
  const [existingAppEmployeeJobTitle, setExistingAppEmployeeJobTitle] = useState('');
  const [existingAppEmployeeCategory, setExistingAppEmployeeCategory] = useState('');

  const handleEmployeeSelect = (employee, info) => {
    setAppEmployeeID(employee);
    setExistingAppEmployeeName(info.empName);
    setExistingAppEmployeeSurname(info.empSurname);
    setExistingAppEmployeeJobTitle(info.empJobTitle);
  };

 
  useEffect(() => {
    console.log("1. EDITAPP - employee useEffect (appEmployee):", appEmployeeID);
    if (appEmployeeID == null)
    {handleEmployeeSelect();}
  }, [appEmployeeID]);
  /*  -----------------   Employee    ------------------*/





  /*  ------------------   Patient    -------------------*/
  const [appPatientID, setAppPatientID] = useState('');
  

  const [existingAppPatientID, setExistingAppPatientID] = useState('');
  const [existingAppPatientName, setExistingAppPatientName] = useState('');
  const [existingAppPatientSurname, setExistingAppPatientSurname] = useState('');
  const [existingAppPatientNO, setExistingAppPatientNO] = useState('');





  const handlePatientSelect = (patient) => {
    setAppPatientID(patient);
   
    
  };
  

  useEffect(() => {
   console.log("1. EDITAPP - patient useEffect (appPatientID):", appPatientID);
   if (appPatientID == null)
   {handlePatientSelect();}
 }, [appPatientID]);
  /*  ------------------   Patient    -------------------*/








  
  /*  -----------------   Date    ------------------*/
  const [appDate, setAppDate] = useState("");
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


  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');


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



  useEffect(() => {
    const handleSearchSubmit = async () => {
      try {
        const response = await axios.get(`${API_ROOT_PATH}/appointments/get/objects${idI}`,  {headers: authHeader()});
        const appointmentData = response.data;
              
        setAppID(appointmentData.appID);
        setAppCategory(appointmentData.appCategory);
        setAppReason(appointmentData.appReason);
        setAppDate(appointmentData.appDate);

        setAppEmployeeID(appointmentData.appEmployeeID);
        console.info('1. EDITAPP - handleSearchSubmit (appEmployeeID): ', (appointmentData.appEmployeeID));

        setExistingAppEmployeeID(appointmentData.appEmployeeID);
        setExistingAppEmployeeName(appointmentData.empName);
        setExistingAppEmployeeSurname(appointmentData.empSurname);
        setExistingAppEmployeeJobTitle(appointmentData.empJobTitle);
        setExistingAppEmployeeCategory(appointmentData.empCategory);

        console.info('1. EDITAPP - handleSearchSubmit (appointmentData.empCategory): ', (appointmentData.empCategory), '(ID): ', (appointmentData.appEmployeeID));
        
        setAppPatientID(appointmentData.appPatientID);
        setExistingAppPatientID(appointmentData.appPatientID);
        setExistingAppPatientName(appointmentData.patientName);
        setExistingAppPatientSurname(appointmentData.patientSurname);
        setExistingAppPatientNO(appointmentData.patientNO);
        
        console.info('1. EDITAPP - handleSearchSubmit (appointmentData.appPatientID): ', (appointmentData.appPatientID));

        const appDateObj = appointmentData.appDate ? new Date(appointmentData.appDate) : getInitialDate();

        setSelectedDate(appDateObj);
        setSelectedHour(appDateObj.getHours());
        setSelectedMinute(appDateObj.getMinutes());
        
                      
        setSuccessMessage('');
        setErrorMessage('');

        
                   
      } catch (error) {
        console.error('1. EDITAPP - Error:', error);
        setSuccessMessage('');
        setErrorMessage('Rezervacija su tokiu ID nerasta');
      }
  };
  
  handleSearchSubmit(); 
  
  
  
  }, [idI] ); // Appointment array - to run once 

  
  
  


  const handleAppointmentEditSubmit = async (event) => {
    event.preventDefault();

  try {

    if (!appEmployeeID || !appPatientID) {
      setErrorMessage('Būtina pasirinkti gydytoją ir pacientą.');
      return;
    }




    const formattedDate = selectedDate
      ? format(selectedDate, 'yyyy/MM/dd')
      : ''
    ;
    const formattedTime = selectedDate
      ? `${selectedHour}:${selectedMinute.toString().padStart(2, '0')}`
      : ''
    ;

    console.log('1. EDITAPP - TEST (appEmployeeID):', appEmployeeID);
    console.log('1. EDITAPP - TEST (appPatientID):', appPatientID);    


    const request = await axios.put(`${API_ROOT_PATH}/appointments/edit/objects${idI}`, 
    {
      appID, 
      appCategory, 
      appReason,
      appDate: `${formattedDate}, ${formattedTime}`,
      appEmployeeID,
      appPatientID
    },  
    {headers: authHeader()}
    );



    console.log('1. EDITAPP - Request:', request.data);
      
    setSuccessMessage(<div>Rezervacija sėkmingai atnaujina: <br /> <br />
                        <strong>Data ir laikas:</strong> &nbsp; {formattedDate} &nbsp; ({formattedTime} val.)<br /> 
                        <strong>Kategorija:</strong> &nbsp; {appCategory} <br />
                        <strong>Priežastis:</strong> &nbsp; {appReason} <br />
                        <strong>Gydytojas:</strong> &nbsp;  <HandleInfoEmployee appEmployeeID={appEmployeeID} />  <br />
                        <strong>Pacientas:</strong> &nbsp;  <HandleInfoPatient appPatientID={appPatientID} /> </div>);
    setErrorMessage('');


    handleReset();
      
          
  } catch (error) {
      console.error('1. EDITAPP - Error:', error);
      setSuccessMessage('');
      setErrorMessage('Rezervacija NEBUVO atnaujinta');
    
  }
};

const handleReset = () => {
  
  setPatientSelectionField(false);
  setEmployeeSelectionField(false);
  setOtherSelectionField(false);


  setSelectedDate( getInitialDate());
  setSelectedHour(7);
  setSelectedMinute(0); 

  setAppID('');
  setAppCategory('');
  setAppReason('');

  setAppEmployeeID('');
  setExistingAppEmployeeID('');
  setExistingAppEmployeeName('');
  setExistingAppEmployeeSurname('');
  setExistingAppEmployeeJobTitle('');
  setExistingAppEmployeeCategory('');

  setAppPatientID('');
  setExistingAppPatientID('');
  setExistingAppPatientName('');
  setExistingAppPatientSurname('');
  setExistingAppPatientNO('');
 

  
};
/*  -----------------   Handling    ------------------*/





  
 


return (

<div className='administracija'>

  <div className='administracija-box-container'>

    <div>
    <h1>Administracija</h1>
    </div>

    <div className='administracija-box-1'>
      <h3>Rezervacijų sąrašo valdymas - keisti esamos rezervacijos duomenis</h3>                          
      <p>&ensp;ID:&emsp;&emsp;&emsp; <strong style={{color:'#3883b5'}}>{appID}</strong> </p>
         


      <div className='administracija-box-3-PATIENTS-main'>
        <h4>1.1. Pasirinkti gydytoją</h4>
        <h5>Gydytojas: <strong>{existingAppEmployeeName}  {existingAppEmployeeSurname} ({existingAppEmployeeJobTitle})</strong></h5>



        {!!employeeSelectionField && (
        <HandleEmployeeSelectionEDIT 
          
          
          idInfo={existingAppEmployeeID}
          nameInfo={existingAppEmployeeName}
          surnameInfo={existingAppEmployeeSurname}
          jobTitleInfo={existingAppEmployeeJobTitle}
          categoryInfo={existingAppEmployeeCategory}

          onEmployeeSelect={handleEmployeeSelect}          
        />
        )}


        <p>&nbsp;</p>
      </div>


      <div className='administracija-box-3-PATIENTS-main'>
        <h4>1.2. Pasirinkti pacientą</h4>
        <h5>Pacientas: <strong>{existingAppPatientName}  {existingAppPatientSurname} ({existingAppPatientNO})</strong></h5> 

        {!!patientSelectionField && (
        <HandlePatientSelectionEDIT 
        
          idInfoPatient={existingAppPatientID}
          nameInfoPatient={existingAppPatientName}
          surnameInfoPatient={existingAppPatientSurname}
          noInfoPatient={existingAppPatientNO}
        
          onPatientSelect={handlePatientSelect}/>
        )}

              
      </div>








      <div className='administracija-box-1'>
        <h4>1.3. Kiti duomenys: </h4>

        <div className='administracija-box-3-PATIENTS-plus'>

        {!!otherSelectionField && (

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
            <p>Data: &emsp;&emsp;&emsp; <strong style={{color:'#3883b5'}}>{appDate}</strong></p>    
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
                         
                    
                         
            <div >
              <br></br>
              {successMessage && <div className="success-message">{successMessage}</div>}
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <br></br>
            </div>
             
             
             
            <div className='administracija-box-1-button-box'>
            <br></br>
            <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
            value="Išsaugoti" />
                          
            <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
            value="Išvalyti" onClick={handleReset}/>
            </div>

                     
            

                   
          </form>
          )}

            




          </div>
          
          
        </div>

          <div className='administracija-box-1-plus'>
                <br></br>
                {successMessage && <div className="success-message">{successMessage}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <br></br>
          </div>

          <div className='administracija-box-1-plus'>
            <div className='administracija-box-1'>
              < NavigateToAppointment idE={idE} />
            </div>
          </div>


      </div>
    </div>
  
  </div>
  
  
  
  
  )
  
};

  
  export default EditAppointmentFROMLIST;





