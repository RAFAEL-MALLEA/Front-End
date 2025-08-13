import { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import { Sidebar } from "@/components/Inicio/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { KPICard } from "@/components/dashboard/KPICard";
import { Charts } from "@/components/dashboard/Charts";
import { SearchHistoryTable } from "@/components/dashboard/SearchHistoryTable";
import { DashboardProvider } from "@/context/DashboardContext";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            {/* Mobile Header */}


            {/* Desktop Header */}
            <div className="hidden md:block">
              <Header />
            </div>

            {/* Dashboard Content */}
            <main className="flex-1 overflow-y-auto">
              {/* contenedor que contiene los recuadros de las empresas */}
              <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">


                  {/* Cards donde se mostraran los nombre de las empresas en el dashboard inicial de administrador */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    <div className="bg-black shadow rounded-lg p-4 sm:p-5 lg:p-6 text-center text-white grid place-items-center"
                      title={"nombre empresa"}
                    >
                      Empresa {/* JL CAMPANA  */}
                      <button>
                        <a href="/dashboard">Seleccionar</a>
                      </button>
                      
                    </div>
                    <div className="bg-black shadow rounded-lg p-4 sm:p-5 lg:p-6 text-center text-white grid place-items-center"
                      title={"nombre empresa"}
                    >
                      Empresa {/* LIBRERIA BROS  */}
                      <button>
                        <a href="/dashboard">Seleccionar</a>
                      </button>
                    </div>

                    <div className="bg-black shadow rounded-lg p-4 sm:p-5 lg:p-6 text-center text-white grid place-items-center"
                      title={"nombre empresa"}
                    >
                      Empresa {/* NOMBRE DE LA EMPRESA  */}
                      <button>
                        <a href="/dashboard">Seleccionar</a>
                      </button>
                    </div>

                    <div className="bg-black shadow rounded-lg p-4 sm:p-5 lg:p-6 text-center text-white grid place-items-center"
                      title={"nombre empresa"}
                    >
                      Empresa {/* NOMBRE DE LA EMPRESA  */}
                      <button>
                        <a href="/dashboard">Seleccionar</a>
                      </button>
                    </div>

                    <div className="bg-black shadow rounded-lg p-4 sm:p-5 lg:p-6 text-center text-white grid place-items-center"
                      title={"nombre empresa"}
                    >
                      Empresa {/* NOMBRE DE LA EMPRESA  */}
                      <button>
                        <a href="/dashboard">Seleccionar</a>
                      </button>
                    </div>

                    <div className="bg-black shadow rounded-lg p-4 sm:p-5 lg:p-6 text-center text-white grid place-items-center"
                      title={"nombre empresa"}
                    >
                      Empresa {/* NOMBRE DE LA EMPRESA  */}
                      <button>
                        <a href="/dashboard">Seleccionar</a>
                      </button>
                    </div>

                    <div className="bg-black shadow rounded-lg p-4 sm:p-5 lg:p-6 text-center text-white grid place-items-center"
                      title={"nombre empresa"}
                    >
                      Empresa {/* NOMBRE DE LA EMPRESA  */}
                      <button>
                        <a href="/dashboard">Seleccionar</a>
                      </button>
                    </div>
                    
                    <div className="bg-black shadow rounded-lg p-4 sm:p-5 lg:p-6 text-center text-white grid place-items-center"
                      title={"nombre empresa"}
                    >
                      Empresa {/* NOMBRE DE LA EMPRESA  */}
                      <button>
                        <a href="/dashboard">Seleccionar</a>
                      </button>
                    </div>

                    <div className="bg-black shadow rounded-lg p-4 sm:p-5 lg:p-6 text-center text-white grid place-items-center"
                      title={"nombre empresa"}
                    >
                      Empresa {/* NOMBRE DE LA EMPRESA  */}
                      <button>
                        <a href="/dashboard">Seleccionar</a>
                      </button>
                    </div>
        
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
    </DashboardProvider>
  );
}
