import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import Importar from "./pages/Importar";
import Configuracion from "./pages/Configuracion";
import Login from "./pages/Login";
import Users from "./pages/users";
import Users2 from "./pages/users2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users2" element={<Users2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Importar" element={<Importar />} />
        <Route path="/Configuracion" element={<Configuracion />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
