import { Encabezado } from "./components/Encabezado";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { VistaHE } from "./pages/huellaEcologica/VistaHE";
import {Home} from "./pages/home/Inicio";
import { LandingPage } from "./pages/home/landingPage";
import { MisPlantas } from "./pages/jardin/MisPlantas";
import { VistaGame } from "./pages/miniJuego/VistaGame";
import { Toaster } from "react-hot-toast";
import { VistaR } from "./pages/recomendaciones/VistaR";

function App(){
  return(
    <BrowserRouter>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Navigate to="/index"/>}/>
        <Route path="/index" element={<LandingPage />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/conociendo-tu-planta" element={<VistaHE />} />
        <Route path="/mis-plantas" element={<MisPlantas />}/>
        <Route path="/puzzle-plantar" element={<VistaGame />}/>
        <Route path="/recomendaciones" element={<VistaR />}/>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App;