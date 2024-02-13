
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Informacija from "../pages/Informacija";
import Paslaugos from "../pages/Paslaugos";
import Personalas from "../pages/Personalas";
import Kontaktai from "../pages/Kontaktai";
import NoPage from "../pages/NoPage";
import SignIn from "../pages/SignIn";
import Appointments from "../pages/Appointments";
import Administracija from "../pages/Administracija";
import LoggedPage from "../pages/LoggedPage";

import AddPatient from "../pages/page_administracija/AddPatient";
import ReadPatient from "../pages/page_administracija/ReadPatient";
import EditPatient from "../pages/page_administracija/EditPatient";
import DeletePatient from "../pages/page_administracija/DeletePatient";
import EditPatientFROMLIST from "../pages/page_administracija/EditPatientFROMLIST";
import DeletePatientFROMLIST from "../pages/page_administracija/DeletePatientFROMLIST";


import AddEmployee from "../pages/page_administracija/AddEmployee";
import ReadEmployee from "../pages/page_administracija/ReadEmployee";
import EditEmployee from "../pages/page_administracija/EditEmployee";
import DeleteEmployee from "../pages/page_administracija/DeleteEmployee";
import EditEmployeeFROMLIST from "../pages/page_administracija/EditEmployeeFROMLIST";
import DeleteEmployeeFROMLIST from "../pages/page_administracija/DeleteEmployeeFROMLIST";

import AddProduct from "../pages/page_administracija/AddProduct";
import ReadProduct from "../pages/page_administracija/ReadProduct";
import EditProduct from "../pages/page_administracija/EditProduct";
import DeleteProduct from "../pages/page_administracija/DeleteProduct";
import EditProductFROMLIST from "../pages/page_administracija/EditProductFROMLIST";
import DeleteProductFROMLIST from "../pages/page_administracija/DeleteProductFROMLIST";

import AddAppointment from "../pages/page_administracija/AddAppointment";
import ReadAppointment from "../pages/page_administracija/ReadAppointment";
import EditAppointment from "../pages/page_administracija/EditAppointment";
import DeleteAppointment from "../pages/page_administracija/DeleteAppointment";
import EditAppointmentFROMLIST from "../pages/page_administracija/EditAppointmentFROMLIST";
import DeleteAppointmentFROMLIST from "../pages/page_administracija/DeleteAppointmentFROMLIST";

import PatientPage from "../pages/PatientPage";
import ReadAppointmentPATIENT from "../pages/page_administracija/ReadAppointmentPATIENT";
import AddAppointmentPATIENT from "../pages/page_administracija/AddAppointmentPATIENT";
import EDIT_APPOINTMENT_FROMLIST_PATIENT from "../pages/page_administracija/EDIT_APPOINTMENT_FROMLIST_PATIENT";
import DELETE_APPOINTMENT_FROMLIST_PATIENT from "../pages/page_administracija/DELETE_APPOINTMENT_FROMLIST_PATIENT";

import AuthService from "../services/auth.service";

import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";



function App() {  
return (
  <BrowserRouter>
    <Routes>

      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="informacija" element={<Informacija />} />
        <Route path="paslaugos" element={<Paslaugos />} />
        <Route path="personalas" element={<Personalas />} />
        <Route path="kontaktai" element={<Kontaktai />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />




        <Route path="appointments" element={<Appointments />} />
        <Route path="loggedpage" element={<LoggedPage />} />
       


        <Route path="loggedpage/administracija" element={<Administracija />} />

        
        <Route path="loggedpage/addpatient" element={<AddPatient />} />
        <Route path="loggedpage/readpatient" element={<ReadPatient />} />
        <Route path="loggedpage/editpatient" element={<EditPatient />} />
        <Route path="loggedpage/deletepatient" element={<DeletePatient />} />
        <Route path="loggedpage/editpatient/:id" element={<EditPatientFROMLIST />} />
        <Route path="loggedpage/deletepatient/:id" element={<DeletePatientFROMLIST />} />

        <Route path="loggedpage/addemployee" element={<AddEmployee />} />
        <Route path="loggedpage/reademployee" element={<ReadEmployee />} />
        <Route path="loggedpage/editemployee" element={<EditEmployee />} />
        <Route path="loggedpage/deleteemployee" element={<DeleteEmployee />} />
        <Route path="loggedpage/editemployee/:id" element={<EditEmployeeFROMLIST />} />
        <Route path="loggedpage/deleteemployee/:id" element={<DeleteEmployeeFROMLIST />} />

        <Route path="loggedpage/addproduct" element={<AddProduct />} />
        <Route path="loggedpage/readproduct" element={<ReadProduct />} />
        <Route path="loggedpage/editproduct" element={<EditProduct />} />
        <Route path="loggedpage/deleteproduct" element={<DeleteProduct />} />
        <Route path="loggedpage/editproduct/:id" element={<EditProductFROMLIST />} />
        <Route path="loggedpage/deleteproduct/:id" element={<DeleteProductFROMLIST />} />

        <Route path="loggedpage/addappointment" element={<AddAppointment />} />
        <Route path="loggedpage/readappointment" element={<ReadAppointment />} />
        <Route path="loggedpage/editappointment" element={<EditAppointment />} />
        <Route path="loggedpage/deleteappointment" element={<DeleteAppointment />} />
        <Route path="loggedpage/editappointment/:id" element={<EditAppointmentFROMLIST />} />
        <Route path="loggedpage/deleteappointment/:id" element={<DeleteAppointmentFROMLIST />} />

        <Route path="loggedpage/patientpage/:idP" element={<PatientPage />} />
        <Route path="loggedpage/patientpage/:idP/readappointmentpatient" element={<ReadAppointmentPATIENT />} />
        <Route path="loggedpage/patientpage/:idP/addappointmentpatient" element={<AddAppointmentPATIENT />} />
        <Route path="loggedpage/patientpage/:idP/editappointmentpatient/:idA" element={<EDIT_APPOINTMENT_FROMLIST_PATIENT />} />
        <Route path="loggedpage/patientpage/:idP/deleteappointmentpatient/:idA" element={<DELETE_APPOINTMENT_FROMLIST_PATIENT />} />

        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

}


export default App;
 