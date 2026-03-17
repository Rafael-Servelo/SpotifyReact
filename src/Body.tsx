import { SquareArrowLeft } from "lucide-react";

export default function Body() {
  return (
    <>
      <main className="grow p-3 flex flex-col">
        <div className="flex gap-2 grow">
          <div className="w-1/3 max-w-112.5 bg-zinc-900 rounded-md">
            <div className="group flex">
              <SquareArrowLeft />
              Sua Biblioteca
            </div>
            <div> + Criar Mostrar Biblioteca</div>
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
