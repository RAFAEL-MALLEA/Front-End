import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import Importar from "./pages/Importar";
import Configuracion from "./pages/Configuracion";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Importar" element={<Importar />} />
        <Route path="/Configuracion" element={<Configuracion />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
