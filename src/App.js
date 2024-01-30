
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Informacija from "./pages/Informacija";
import Paslaugos from "./pages/Paslaugos";
import Personalas from "./pages/Personalas";
import Kontaktai from "./pages/Kontaktai";
import NoPage from "./pages/NoPage";


function App() {  
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="informacija" element={<Informacija />} />
        <Route path="paslaugos" element={<Paslaugos />} />
        <Route path="personalas" element={<Personalas />} />
        <Route path="Kontaktai" element={<Kontaktai />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

}


export default App;
 