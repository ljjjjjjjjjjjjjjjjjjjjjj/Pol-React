import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import lt from 'date-fns/locale/lt'; // Import Lithuanian locale
import { getDay } from 'date-fns';






const EditAppointment = () => {

  const navigate = useNavigate();
  const navigateToReadAppointment = () => {
    navigate(`/readappointment`);
  };
  
  const navigateToAdministracija = () => {
    navigate(`/administracija`);
  };


  const [selectedAppID, setSelectedAppID] = useState("");

  const [appID, setAppID] = useState("");
  const [appCategory, setAppCategory] = useState("");
  const [appReason, setAppReason] = useState("");
  const [appDate, setAppDate] = useState("");

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

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/appointments/get/${selectedAppID}`);
      const appointmentData = response.data;
            
      setAppID(appointmentData.appID);
      setAppCategory(appointmentData.appCategory);
      setAppReason(appointmentData.appReason);
      setAppDate(appointmentData.appDate);

      const appDateObj = appointmentData.appDate ? new Date(appointmentData.appDate) : getInitialDate();

      setSelectedDate(appDateObj);
      setSelectedHour(appDateObj.getHours());
      setSelectedMinute(appDateObj.getMinutes());
      
                    
      setSuccessMessage('');
      setErrorMessage('');
                 
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Rezervacija su tokiu ID nerasta');
    }
  };
  

  const handleAppointmentEditSubmit = async (event) => {
    event.preventDefault();

  try {

    const formattedDate = selectedDate
        ? format(selectedDate, 'yyyy/MM/dd')
        : '';
    const formattedTime = selectedDate
      ? `${selectedHour}:${selectedMinute.toString().padStart(2, '0')}`
      : '';

    const response = await axios.put(`http://localhost:8080/appointments/edit/${selectedAppID}`, {
      appID,
      appCategory, 
      appReason, 
      appDate: `${formattedDate}, ${formattedTime}`
      });

      console.log('Response:', response.data);
      setSuccessMessage(<div>Rezervacija sėkmingai atnaujinta: <br /> <br />
                          <strong>Data ir laikas:</strong> &nbsp; {formattedDate} &nbsp; ({formattedTime} val.)<br /> 
                          <strong>Kategorija:</strong> &nbsp; {appCategory} <br />
                          <strong>Priežastis:</strong> &nbsp; {appReason}</div>);
      setErrorMessage('');

      handleReset();
      
    
  } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('Rezervacija NEBUVO atnaujinta');
    
  }
};

const handleReset = () => {
  setSelectedAppID('');
  setAppID('');
  setAppCategory('');
  setAppReason('');

  setSelectedDate(getInitialDate());
  setSelectedHour(7);
  setSelectedMinute(0); 

};





  
 


  return (

  <div className='administracija'>

  <div className='administracija-box-container'>

    <div>
    <h1>Administracija</h1>
    </div>

      <div className='administracija-box-1'>
          <h3>Rezervacijų sąrašo valdymas</h3>
          
          <div>

            <h4>3. Keisti esamos rezervacijos duomenis</h4>

            <div className='administracija-box-1-plus'>
              <form  onSubmit={handleSearchSubmit}>
                <label>Įveskite rezervacijos ID numerį:
                  <input style={{ width: '50px', }}
                    type="text" 
                    value={selectedAppID}
                    onChange={(e) => setSelectedAppID(e.target.value)}
                  />
                </label>

                <div className='administracija-box-1-button-box'>
                <p></p>
                <input type="submit" className="btn btn-primary administracija-box-1-button-b"
                       value="Patvirtinti" />
                <p>&nbsp;</p>
                </div>


            </form>
          </div>



            <div>
            <form onSubmit={handleAppointmentEditSubmit}>

              <p>&ensp;ID:&emsp;&emsp;&emsp; <strong style={{color:'#3883b5'}}>{appID}</strong> </p>
            
               
               
              <label> Kategorija: 
              <input 
              type='text' 
              value={appCategory} 
              onChange={(p) => setAppCategory(p.target.value)} 
              />
              </label>
               
               
               
              <label> Priežastis: 
              <input 
              type='text' 
              value={appReason} 
              onChange={(p) => setAppReason(p.target.value)}              
              />
              </label>



              <br></br>
                <label> Data: &emsp;&emsp;&emsp; {appDate} <br></br>
                  <div className='administracija-box-1-datepicker'>
                  <br></br>
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
               
               
               
              <div className='administracija-box-1-button-box'>
              <br></br>
              <input type='submit' className="btn btn-primary administracija-box-1-button-b" 
              value="Išsaugoti" />

              <input type='reset' className="btn btn-secondary administracija-box-1-button-g" 
              value="Išvalyti" onClick={handleReset}/>
              </div>

            </form>
            </div>

            <div className='administracija-box-1'>
                  <div className='administracija-box-1-button-box-center'>                  
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value="&#9665; Rezervacijų sąrašas" onClick={navigateToReadAppointment}/>
                     <br></br>
                     <br></br>
                    <input type='button' className="btn btn-secondary administracija-box-1-button-b" 
                     value=" &#9665; Administracija " onClick={navigateToAdministracija}/>                                     
                  </div>
                </div>

          </div>
      </div>
  </div>
  </div>
  
  
  
  
  )
};

  
  export default EditAppointment;





