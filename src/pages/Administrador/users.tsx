import { useState } from "react";
import { Sidebar } from "@/components/Administrador/Inicio/inicio2/Sidebar2";
import { Header } from "@/components/Administrador/Inicio/inicio2/Header2";
import { DashboardProvider } from "@/context/DashboardContext";

export default function Users() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Lista de empresas
  const Users = [
    { id: 1, nombre: "Usuario 1" },
    { id: 2, nombre: "Usuario 1" },
    { id: 3, nombre: "Usuario 1" },
    { id: 4, nombre: "Usuario 1" },
    { id: 5, nombre: "Usuario 1" }
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
                  {Users.map((Users) => (
                    <div
                      key={Users.id}
                      className="bg-gradient-to-br bg-[skyblue] to-black shadow-lg rounded-xl p-6 text-center text-white grid place-items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      title={Users.nombre}
                    >
                      <span className="font-semibold text-lg">{Users.nombre}</span>
                      {/* <button className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg shadow-md transition-colors">
                        <a href={`//`}>Seleccionar</a>
                      </button> */}
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
