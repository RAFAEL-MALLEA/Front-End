import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [theme, setTheme] = useState("light");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Cargar tema desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Cambiar tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Manejo de submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // TODO: aquí debe validar credenciales contra el backend
    setTimeout(() => {
      setLoading(false);
      navigate("/inicio"); // redirige a inicio.tsx
    }, 800);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white dark:bg-gray-900">
      {/* Formulario */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col items-center justify-center p-8"
      >
        {/* Switch de tema */}
        <div className="absolute top-4 left-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src="/fulllogo.png"
              alt="Logo Inventaria"
              className="mx-auto h-12"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="usuario@ejemplo.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Contraseña *
            </label>
            <input
              type="password"
              id="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md transition-colors ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white"
            }`}
          >
            {loading ? "Iniciando..." : "Iniciar"}
          </button>
        </form>
      </motion.div>

      {/* Imagen derecha */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 h-64 md:h-full"
      >
        <img
          src="/login.png"
          alt="Bodega con estanterías y cajas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay + Texto */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white text-3xl md:text-4xl font-bold text-center"
          >
            Maximiza la precisión de tus inventarios con IA
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
}
