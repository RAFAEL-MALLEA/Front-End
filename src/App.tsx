import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Administrador/Dashboard";
import Inicio from "./pages/Administrador/Inicio_administrador";
import NotFound from "./pages/Administrador/NotFound";
import Importar from "./pages/Administrador/Importar";
import Configuracion from "./pages/Administrador/Configuracion";
import Login from "./pages/Administrador/Login";
import Users from "./pages/Administrador/users";
import Users2 from "./pages/Administrador/users2";
import Reports from "./pages/Administrador/Reports";

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
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
