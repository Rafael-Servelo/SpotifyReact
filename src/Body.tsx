import {
  Bookmark,
  Heart,
  Library,
  List,
  Maximize2,
  Pin,
  Plus,
  Search,
  SquareArrowLeft,
  SquareArrowRight,
  Volume2,
} from "lucide-react";
import TooltipComponent from "./assets/Tooltip";
import { useState, useRef, useEffect } from "react";
import ItemList from "./ItemList";

export default function Body() {
  const [showLib, setLib] = useState<boolean>(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <>
      <main className="grow px-2 flex flex-col">
        <div className="flex gap-2 grow">
          <div
            className={
              showLib
                ? "w-1/3 max-w-112.5 bg-zinc-900 rounded-md p-6 flex flex-col gap-4"
                : "w-18 max-w-112.5 bg-zinc-900 rounded-md p-6"
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
                      <div className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
                        <div className="flex gap-1 items-center">
                          <Plus className="text-zinc-400" />
                          <span className="text-sm">Criar</span>
                        </div>
                      </div>
                    }
                    text="Crie uma playlist, pasta ou Jam"
                  />
                  <TooltipComponent
                    children={
                      <div className="w-8 h-8 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-all cursor-pointer">
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
            {showLib ? (
              <div className="flex flex-col gap-2">
                <div className="tags flex items-center gap-2">
                  <div className="px-3 py-1.5 bg-zinc-800 w-max rounded-full text-sm cursor-pointer hover:bg-zinc-700 ">
                    Playlists
                  </div>
                  <div className="px-3 py-1.5 bg-zinc-800 w-max rounded-full text-sm cursor-pointer hover:bg-zinc-700 ">
                    Podcasts
                  </div>
                  <div className="px-3 py-1.5 bg-zinc-800 w-max rounded-full text-sm cursor-pointer hover:bg-zinc-700 ">
                    Álbuns
                  </div>
                  <div className="px-3 py-1.5 bg-zinc-800 w-max rounded-full text-sm cursor-pointer hover:bg-zinc-700 ">
                    Artistas
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <TooltipComponent
                    children={
                      <div
                        className={`flex items-center gap-2 rounded-md transition-all duration-300 w-max ${
                          isSearchOpen
                            ? "bg-zinc-800 p-1" // Quando aberto, expande
                            : "bg-transparent p-2" // Quando fechado, fica transparente e curto
                        }`}
                      >
                        <button
                          onClick={() => setIsSearchOpen(!isSearchOpen)}
                          className="hover:bg-zinc-800 p-2 rounded-full transition-colors"
                        >
                          <Search
                            className={`${isSearchOpen ? "text-white" : "text-zinc-400"} cursor-pointer hover:text-white`}
                            size={20}
                          />
                        </button>

                        <input
                          ref={searchInputRef} // 4. Conecte a referência aqui
                          type="text"
                          placeholder="Buscar em Sua Biblioteca..."
                          className={`bg-transparent outline-none text-sm transition-all duration-300 placeholder:text-zinc-500 ${
                            isSearchOpen
                              ? "w-full opacity-100 block"
                              : "w-0 opacity-0 hidden"
                          }`}
                          onBlur={(e) => {
                            if (e.target.value === "") setIsSearchOpen(false);
                          }}
                        />
                      </div>
                    }
                    text="Buscar em Sua Biblioteca"
                  />
                  <div className="flex items-center gap-2 group cursor-pointer hover:scale-105 transition-all">
                    <span className="text-zinc-400 text-sm group-hover:text-white">
                      Recentes
                    </span>
                    <List className="text-zinc-400 group-hover:text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <ItemList
                    type="playlist"
                    title="Rock dos Bons"
                    artist=""
                    album=""
                    user="Rafael Servelo"
                    musics={0}
                    listen={false}
                  />
                  {/* Componente de Episódios Salvos */}
                  <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 w-full transition-colors">
                    <div className="w-12 h-12 rounded-md flex items-center justify-center bg-linear-to-tl from-indigo-200 to-indigo-700">
                      <Heart className="fill-current text-white" />
                    </div>
                    <div className="flex flex-col text-sm">
                      <div className="">Seus episódios</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <Pin
                          className="text-emerald-400 fill-current rotate-45"
                          size={14}
                        />
                        <span>Playlist</span>
                        <span> ⋅ </span>
                        <span>361 músicas</span>
                      </div>
                    </div>
                  </div>
                  {/* Componente de Episódios Salvos */}
                  <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 w-full transition-colors">
                    <div className="w-12 h-12 bg-emerald-700 rounded-md flex items-center justify-center">
                      <Bookmark className="fill-current text-emerald-400" />
                    </div>
                    <div className="flex flex-col text-sm">
                      <div className="">Seus episódios</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <Pin
                          className="text-emerald-400 fill-current rotate-45"
                          size={14}
                        />
                        <span>Playlist</span>
                        <span> ⋅ </span>
                        <span>Episódios salvos e baixados</span>
                      </div>
                    </div>
                  </div>
                  {/* Componente de playlists */}
                  <div className="flex items-center justify-between gap-2 p-2 cursor-pointer rounded-sm hover:bg-zinc-800 w-full transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-amber-600 rounded-md"></div>
                      <div className="flex flex-col text-sm">
                        <div className="">Nome da Playlist</div>
                        <div className="flex items-center gap-1 text-xs text-zinc-400">
                          <span>Playlist</span>
                          <span> ⋅ </span>
                          <span>Usuario</span>
                        </div>
                      </div>
                    </div>
                    <Volume2
                      size={16}
                      className="text-emerald-400 fill-current animate-pulse"
                    />
                  </div>
                  {/* Componente de Album */}
                  <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 w-full transition-colors">
                    <div className="w-12 h-12 bg-blue-600 rounded-md"></div>
                    <div className="flex flex-col text-sm">
                      <div className="">Nome do Album</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span>Álbum</span>
                        <span> ⋅ </span>
                        <span>Artista</span>
                      </div>
                    </div>
                  </div>
                  {/* Componente de Artista */}
                  <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 w-full transition-colors">
                    <div className="w-12 h-12 bg-fuchsia-700 rounded-full"></div>
                    <div className="flex flex-col text-sm">
                      <div className="">Nome do Artista</div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span>Artista</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
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
