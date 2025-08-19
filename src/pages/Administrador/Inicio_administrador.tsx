import { useState } from "react";
import { Sidebar } from "@/components/Administrador/Inicio/inicio2/Sidebar2";
import { Header } from "@/components/Administrador/dashboard/Header";
import { DashboardProvider } from "@/context/DashboardContext";

export default function Inicio_administrador() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Lista de empresas
  const empresas = [
    { id: 1, nombre: "JL Capanna" },
    { id: 2, nombre: "Librerias Bros" },
    { id: 3, nombre: "Rosen Peru" },
    { id: 4, nombre: "Aravena Parts" },
    { id: 5, nombre: "Marketcare" }
  ];

  return (
    <DashboardProvider>
      {/* Layout Container */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          className={`
            fixed md:static inset-y-0 left-0 z-50
            w-56 sm:w-64
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Desktop Header */}
          <div className="hidden md:block">
            <Header />
          </div>

          {/* Dashboard Content */}
          <main className="flex-1 overflow-y-auto">
            {/* Contenedor que contiene los recuadros de las empresas */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
                {/* Cards donde se muestran los nombres de las empresas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                  {empresas.map((empresa) => (
                    <div
                      key={empresa.id}
                      className="bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-lg rounded-xl p-6 text-center text-white grid place-items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      title={empresa.nombre}
                    >
                      <span className="font-semibold text-lg">{empresa.nombre}</span>
                      <button className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg shadow-md transition-colors">
                        <a href={`/Dashboard/`}>Seleccionar</a>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
