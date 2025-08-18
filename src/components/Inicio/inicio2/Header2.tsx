import { MoreHorizontal, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="bg-white">
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
        <div className="flex items-center justify-between">
          {/* SALIR SESION DE EMPRESAS */}


          {/* Account Button */}
          <Button
            variant="outline"
            className="flex  space-x-1 sm:space-x-2 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 h-auto min-w-fit"
          >
            <User className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden xs:inline">Inventaria</span>
            <p>Administrador</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
