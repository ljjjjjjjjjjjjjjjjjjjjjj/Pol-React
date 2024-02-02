
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

        <Route path="addemployee" element={<AddEmployee />} />
        <Route path="reademployee" element={<ReadEmployee />} />
        <Route path="editemployee" element={<EditEmployee />} />
        <Route path="deleteemployee" element={<DeleteEmployee />} />
        <Route path="editemployee/:id" element={<EditEmployeeFROMLIST />} />
        <Route path="deleteemployee/:id" element={<DeleteEmployeeFROMLIST />} />

        <Route path="addproduct" element={<AddProduct />} />
        <Route path="readproduct" element={<ReadProduct />} />
        <Route path="editproduct" element={<EditProduct />} />
        <Route path="deleteproduct" element={<DeleteProduct />} />
        <Route path="editproduct/:id" element={<EditProductFROMLIST />} />
        <Route path="deleteproduct/:id" element={<DeleteProductFROMLIST />} />

        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

}


export default App;
 