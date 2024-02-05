

import '../../main/custom-bootstrap.css';
import '../formats/Administracija.css';
import EmployeeSelectionRow from '../../methods_and_other/EmployeeSelectionRow.js';
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

  const navigate = useNavigate();
  const navigateToReadAppointment = () => {
    navigate(`/readappointment`);
  };
  
  const navigateToAdministracija = () => {
    navigate(`/administracija`);
  };


  const [appCategory, setAppCategory] = useState("");
  const [appReason, setAppReason] = useState("");


  const [appEmployee, setAppEmployee] = useState("");
  const [appEmployeeCategory, setAppEmployeeCategory] = useState("");
  const [appSelectedEmployees, setAppSelectedEmployees] = useState( [] );

  
  const [appPatient, setAppPatient] = useState("");
  
           

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









   /*  -----------------   Employees   ------------------*/

   


   const [categorySelected, setCategorySelected] = useState(false); 

  useEffect(() => {
    console.log("Category Selected:", appEmployeeCategory);
  }, [ appEmployeeCategory]);



  const handleEmployeeCategoryChange = (event) => {
    console.log('Event (main test):', event.target.value);
    setAppEmployeeCategory("Seimos-medicina"); 
    console.log("Category Selected (main test):", appEmployeeCategory);
    setCategorySelected(true);
    fetchEmployeeByCategoryData();

    
  };



  const fetchEmployeeByCategoryData = async () => {
      
    try {
      const url = `http://localhost:8080/employees/get/category/${appEmployeeCategory}`;
      console.log('Uzklausos url adresas:', url);
      console.log('Emp kategorija:', appEmployeeCategory);
      const response = await axios.get(url);
      const employeeData = response.data;
      setAppSelectedEmployees(employeeData);


      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error); 
    }
  };

  

  /*  -----------------   Employees    ------------------*/







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
        appEmployee,
        appPatient
        });

        console.log('Response:', response.data);
        setSuccessMessage(<div>Rezervacija sėkmingai įvesta: <br /> <br />
                          <strong>Data ir laikas:</strong> &nbsp; {formattedDate} &nbsp; ({formattedTime} val.)<br /> 
                          <strong>Kategorija:</strong> &nbsp; {appCategory} <br />
                          <strong>Priežastis:</strong> &nbsp; {appReason} <br />
                          <strong>Gydytojas:</strong> &nbsp; {appEmployee.getEmpName} <br />
                          <strong>Pacientas:</strong> &nbsp; {appPatient.getPatientName}</div>);
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
    setAppEmployee('');
    setAppPatient(''); 
    
    
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


            <form>
              <label htmlFor="appEmpCategorySelection">Gydytojo kategorija: </label>
              <select
                id="appEmpCategorySelection"
                value={appEmployeeCategory}
                onChange={(event) => {
                handleEmployeeCategoryChange(event); 
                }}
              >
                <option value=""> ... </option>
                <option value="Seimos-medicina">Šeimos medicina</option>
                <option value="Gydytojai-specialistai">Gydytojas specialistas</option>
                <option value="Odontologija">Odontologas</option>
                <option value="Slaugytojos">Tyrimai ir skiepai</option>
              </select>
            </form>



            {categorySelected && (
              <form>
                <label htmlFor="AppEmployeeSelection">Pasirinkite gydytoją: </label>
                <select
                  id="AppEmployeeSelection"
                  value={appEmployee}
                  onChange={(p) => setAppEmployee(p.target.value)}
                >
                  <option value=""> ... </option>
                  {appSelectedEmployees.map((employee) => (
                    <EmployeeSelectionRow key={employee.empID} employee={employee}/>
                    ))}
                </select>
              </form>
            )}


          




            <form>
              <label htmlFor="patientSelection">Pacientas:</label>
              <select id="patientSelection" value={appPatient} onChange={(p) => setAppPatient(p.target.value)}>
                <option value="p1">p1</option>
                <option value="p2">p2</option>
                <option value="p3">p3</option>
              </select>              
            </form>


            






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




