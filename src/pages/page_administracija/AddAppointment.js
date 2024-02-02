

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




const AddAppointment = () => {

  const navigate = useNavigate();
  const navigateToReadAppointment = () => {
    navigate(`/readappointment`);
  };
  
  const navigateToAdministracija = () => {
    navigate(`/administracija`);
  };


  const [appCategory, setAppCategory] = useState("");
  const [appReason, setAppReason] = useState("");
  
           

  /*  -----------------   Date    ------------------*/
  registerLocale('lt', lt); // Register Lithuanian locale
  setDefaultLocale('lt'); // Set Lithuanian locale as the default

 

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(7);
  const [selectedMinute, setSelectedMinute] = useState(0);



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
       
  const handleAppointmentEditSubmit = async (event) => {
      event.preventDefault();


    try {

      const formattedDate = selectedDate
        ? format(selectedDate, 'yyyy/MM/dd')
        : '';
      const formattedTime = selectedDate
        ? `${selectedHour}:${selectedMinute.toString().padStart(2, '0')}`
        : '';


      const response = await axios.post('http://localhost:8080/appointments/add', {
        appCategory, 
        appReason,
        appDate: `${formattedDate}, ${formattedTime}`,
        });

        console.log('Response:', response.data);
        setSuccessMessage(<div>Rezervacija sėkmingai įvesta: <br /> <br />
                          <strong>Data ir laikas:</strong> &nbsp; {formattedDate} &nbsp; ({formattedTime} val.)<br /> 
                          <strong>Kategorija:</strong> &nbsp; {appCategory} <br />
                          <strong>Priežastis:</strong> &nbsp; {appReason}</div>);
        setErrorMessage('');
        handleReset();
        
        
      
    } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('Rezervacija NEBUVO įvesta');
      
    }
  };

  const handleReset = () => {
    setSelectedDate(new Date());
    setSelectedHour(7);
    setSelectedMinute(0);
    
    
    setAppCategory('');
    setAppReason(''); 
    
    
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
            <h4>1. Įvesti naują Rezervaciją</h4>
            <div>
              <form onSubmit={handleAppointmentEditSubmit}>
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
                <label> Data:
                  <div className='administracija-box-1-datepicker'>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy/MM/dd"
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
                    value="Išvalyti" onClick={handleReset} />
                </div>
              </form>
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




