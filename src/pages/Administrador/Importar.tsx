import { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import { Sidebar } from "@/components/Administrador/dashboard/Sidebar";
import { Header } from "@/components/Administrador/dashboard/Header";
import { KPICard } from "@/components/Administrador/dashboard/KPICard";
import { Charts } from "@/components/Administrador/dashboard/Charts";
import { SearchHistoryTable } from "@/components/Administrador/dashboard/SearchHistoryTable";
import { DashboardProvider } from "@/context/DashboardContext";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import InfoIcon from '@mui/icons-material/Info';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CheckIcon from '@mui/icons-material/Check';

import * as XLSX from 'xlsx';



export default function Importar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadTemplate = () => {
    // Replace with actual download logic
    const link = document.createElement('a');
    link.href = '/path/to/plantilla.xlsx';
    link.download = 'plantilla.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  
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

            {/* importacion content */}
              <h4 className="text-center h-100">Importador de datos</h4>
              <p className="text-center h-100">Sigue los pasos a continuación para importar tus datos de forma masiva.</p>
              <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                     <Card variant="outlined" sx={{ mb: 4, textAlign: 'left' }}>
                      <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                          <InfoIcon sx={{ mr: 1, color: 'primary.main' }} />
                          Instrucciones de Uso
                        </Typography>
                        <List>
                          <ListItem>
                            <ListItemIcon><DownloadIcon color="action" /></ListItemIcon>
                            <ListItemText primary="Descarga la Plantilla" secondary="Usa nuestro archivo base para asegurar que tus datos tengan el formato correcto." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><UploadIcon color="action" /></ListItemIcon>
                            <ListItemText primary="Sube tu Archivo" secondary="Haz clic en 'Abrir Importador' y selecciona el archivo que llenaste." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><CompareArrowsIcon color="action" /></ListItemIcon>
                            <ListItemText primary="Haz Match de Columnas" secondary="El sistema intentará coincidir tus columnas automáticamente. Revisa y ajusta si es necesario." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><CheckIcon color="action" /></ListItemIcon>
                            <ListItemText primary="Valida y Confirma" secondary="Corrige cualquier error en los datos y confirma la importación final." />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
              </div>
              <div className="flex justify-center space-x-4 p-3 sm:p-4 md:p-6 lg:p-8">
                                            <Button
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            onClick={handleDownloadTemplate}
                          >
                            Descargar Plantilla
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<UploadIcon />}
                            onClick={() => setIsOpen(true)}
                          >
                            Abrir Importador
                          </Button>
              </div>
          </div>
        </div>
    </DashboardProvider>
  );
}
