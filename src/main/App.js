
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

import AddPatient from "../pages/page_administracija/AddPatient";
import ReadPatient from "../pages/page_administracija/ReadPatient";
import EditPatient from "../pages/page_administracija/EditPatient";
import DeletePatient from "../pages/page_administracija/DeletePatient";
import EditPatientFROMLIST from "../pages/page_administracija/EditPatientFROMLIST";
import DeletePatientFROMLIST from "../pages/page_administracija/DeletePatientFROMLIST";





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
        <Route path="appointments" element={<Appointments />} />
        <Route path="administracija" element={<Administracija />} />
        <Route path="addpatient" element={<AddPatient />} />
        <Route path="readpatient" element={<ReadPatient />} />
        <Route path="editpatient" element={<EditPatient />} />
        <Route path="deletepatient" element={<DeletePatient />} />

        <Route path="editpatient/:id" element={<EditPatientFROMLIST />} />
        <Route path="deletepatient/:id" element={<DeletePatientFROMLIST />} />

        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

}


export default App;
 