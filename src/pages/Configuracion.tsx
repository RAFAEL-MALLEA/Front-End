import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { DashboardProvider } from "@/context/DashboardContext";

export default function Configuracion() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardProvider>
      {/* Layout Container */}
      <div className="flex h-screen bg-gray-50">
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
          <main className="flex-1 overflow-y-auto bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Encabezado */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-6 h-6 text-indigo-600" />
                  <h1 className="text-2xl font-bold text-gray-900">
                    Configuración de Métricas
                  </h1>
                </div>

              </div>

              {/* Estado vacío */}
              <div className="flex flex-col items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-xl bg-white">
                <p className="text-gray-500 text-lg mb-2">
                  No hay configuraciones definidas
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  ¡Crea la primera para comenzar!
                </p>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full shadow hover:bg-indigo-700 transition-colors"
                >
                  <span className="text-lg font-bold">+</span> Nueva Configuración
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
