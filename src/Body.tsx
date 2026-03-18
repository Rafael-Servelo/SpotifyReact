import {
  Plus,
  SquareArrowLeft,
  SquareArrowRight,
  Library,
  Maximize2,
} from "lucide-react";
import TooltipComponent from "./assets/Tooltip";
import { useState } from "react";

export default function Body() {
  const [showLib, setLib] = useState<boolean>(true);

  return (
    <>
      <main className="grow p-3 flex flex-col">
        <div className="flex gap-2 grow">
          <div
            className={
              showLib
                ? "w-1/3 max-w-112.5 bg-zinc-900 rounded-md p-6"
                : "w-15 max-w-112.5 bg-zinc-900 rounded-md p-6"
            }
          >
            <div className="flex flex-row justify-between">
              {showLib ? (
                <TooltipComponent
                  children={
                    <div
                      className="group flex items-center gap-2 cursor-pointer"
                      onClick={() => setLib(!showLib)}
                    >
                      <SquareArrowLeft
                        className="text-zinc-400 hover:text-white invisible opacity-0 -translate-x-5 
    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 
    duration-300 ease-out w-0 group-hover:w-auto transition-all"
                      />
                      <strong className="text-xl">Sua Biblioteca</strong>
                    </div>
                  }
                  text="Ocutar Sua Biblioteca"
                />
              ) : (
                <TooltipComponent
                  text="Mostrar Biblioteca"
                  children={
                    <div
                      className="group flex items-center justify-center cursor-pointer transition-all"
                      onClick={() => setLib(!showLib)}
                    >
                      {/* Ícone da Livraria: visível por padrão, some no hover do grupo */}
                      <Library className="text-zinc-400 block group-hover:hidden transition-all" />

                      {/* Ícone da Seta: escondido por padrão, aparece no hover do grupo */}
                      <SquareArrowRight className="text-white hidden group-hover:block transition-all" />
                    </div>
                  }
                />
              )}

              {showLib ? (
                <div className="flex gap-2">
                  <TooltipComponent
                    children={
                      <div className="w-8 h-8 bg-zinc-700 hover:bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer">
                        <Plus />
                      </div>
                    }
                    text="Crie uma playlist, pasta ou Jam"
                  />
                  <TooltipComponent
                    children={
                      <div className="w-8 h-8 hover:bg-zinc-600 rounded-full flex items-center justify-center transition-all cursor-pointer">
                        <Maximize2 size={15} />
                      </div>
                    }
                    text="Mostrar Biblioteca"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="grow bg-zinc-900 rounded-md">Centro</div>
          <div className="w-1/3 max-w-112.5 bg-zinc-900 rounded-md">
            Lat. Dir
          </div>
        </div>
      </main>
    </>
  );
}
