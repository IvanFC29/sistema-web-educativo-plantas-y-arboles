import { Encabezado } from "./components/Encabezado";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { EcoCalculator } from "./pages/ecocalculator/Calculator";
import {Home} from "./pages/home/Inicio";
import { LandingPage } from "./pages/home/landingPage";
import { MisPlantas } from "./pages/jardin/MisPlantas";
import { Vista } from "./pages/consejosGame/Vista";
import { Toaster } from "react-hot-toast";

function App(){
  return(
    <BrowserRouter>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Navigate to="/index"/>}/>
        <Route path="/index" element={<LandingPage />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/calculadora-ecologica" element={<EcoCalculator />} />
        <Route path="/mis-plantas" element={<MisPlantas />}/>
        <Route path="/consejos" element={<Vista />}/>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App;