import { Encabezado } from "./components/Encabezado";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Almanaque} from './pages/almanaque/Almanaque';
import { EcoCalculator } from "./pages/ecocalculator/Calculator";
import { Recognizer } from "./pages/recognizer/Recognizer";
import {Home} from "./pages/home/Inicio";
import { LandingPage } from "./pages/home/landingPage";

function App(){
  return(
    <BrowserRouter>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Navigate to="/index"/>}/>
        <Route path="/index" element={<LandingPage />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/almanaque" element={<Almanaque />} />
        <Route path="/calculadoras-ecologicas" element={<EcoCalculator />} />
        <Route path="/identificador" element={<Recognizer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;