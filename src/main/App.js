
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Informacija from "../pages/Informacija";
import Paslaugos from "../pages/Paslaugos";
import Personalas from "../pages/Personalas";
import Kontaktai from "../pages/Kontaktai";
import NoPage from "../pages/NoPage";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import Administracija from "../pages/Administracija";

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


import Profile from "../pages/Profile";



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
        <Route path="loggedpage/profile" element={<Profile />} />
       


        <Route path="loggedpage/:idE/administracija" element={<Administracija />} />

        
        <Route path="loggedpage/:idE/addpatient" element={<AddPatient />} />
        <Route path="loggedpage/:idE/readpatient" element={<ReadPatient />} />
        <Route path="loggedpage/:idE/editpatient" element={<EditPatient />} />
        <Route path="loggedpage/:idE/deletepatient" element={<DeletePatient />} />
        <Route path="loggedpage/:idE/editpatient/:idI" element={<EditPatientFROMLIST />} />
        <Route path="loggedpage/:idE/deletepatient/:idI" element={<DeletePatientFROMLIST />} />

        <Route path="loggedpage/:idE/addemployee" element={<AddEmployee />} />
        <Route path="loggedpage/:idE/reademployee" element={<ReadEmployee />} />
        <Route path="loggedpage/:idE/editemployee" element={<EditEmployee />} />
        <Route path="loggedpage/:idE/deleteemployee" element={<DeleteEmployee />} />
        <Route path="loggedpage/:idE/editemployee/:idI" element={<EditEmployeeFROMLIST />} />
        <Route path="loggedpage/:idE/deleteemployee/:idI" element={<DeleteEmployeeFROMLIST />} />

        <Route path="loggedpage/:idE/addproduct" element={<AddProduct />} />
        <Route path="loggedpage/:idE/readproduct" element={<ReadProduct />} />
        <Route path="loggedpage/:idE/editproduct" element={<EditProduct />} />
        <Route path="loggedpage/:idE/deleteproduct" element={<DeleteProduct />} />
        <Route path="loggedpage/:idE/editproduct/:idI" element={<EditProductFROMLIST />} />
        <Route path="loggedpage/:idE/deleteproduct/:idI" element={<DeleteProductFROMLIST />} />

        <Route path="loggedpage/:idE/addappointment" element={<AddAppointment />} />
        <Route path="loggedpage/:idE/readappointment" element={<ReadAppointment />} />
        <Route path="loggedpage/:idE/editappointment" element={<EditAppointment />} />
        <Route path="loggedpage/:idE/deleteappointment" element={<DeleteAppointment />} />
        <Route path="loggedpage/:idE/editappointment/:idI" element={<EditAppointmentFROMLIST />} />
        <Route path="loggedpage/:idE/deleteappointment/:idI" element={<DeleteAppointmentFROMLIST />} />

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
 