import {
  Bookmark,
  Heart,
  Library,
  List,
  Maximize2,
  Pin,
  Play,
  Plus,
  Search,
  SquareArrowLeft,
  SquareArrowRight,
  Volume2,
} from "lucide-react";
import TooltipComponent from "../assets/Tooltip";
import { useState, useRef, useEffect } from "react";
import ItemList from "./ItemList";
import logo from "@/assets/Spotify_Primary_Logo_RGB_White.png";

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
                      <strong className="text-md">Sua Biblioteca</strong>
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
            <div className="flex flex-col gap-4 p-4">
              <div className="group flex gap-2 cursor-pointer">
                <SquareArrowRight
                  className="text-zinc-400 hover:text-white invisible opacity-0 -translate-x-5 
    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 
    duration-300 ease-out w-0 group-hover:w-auto transition-all"
                />
                <strong className="text-md">Album de exemplo</strong>
              </div>
              <div>
                <div className="lg:w-full w-50 max-w-max h-max rounded-xl overflow-hidden">
                  <img src={logo} alt="logo" className=" bg-red-500 min-w-50" />
                </div>
              </div>
              <div className="flex flex-col">
                <strong className="text-3xl">S.P.O.T.I.F.Y</strong>
                <span className="text-zinc-400 text-md">Spotify</span>
              </div>
              <div className="flex flex-col gap-4">
                <span>Videoclipes relacionados</span>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="w-50 h-30 bg-amber-300 rounded-lg"></div>
                    <span>Exmeplo 1</span>
                    <span className="text-zinc-400 text-sm">Spotify</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="w-50 h-30 bg-sky-400 rounded-lg"></div>
                    <span>Exmeplo 2</span>
                    <span className="text-zinc-400 text-sm">Spotify</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-zinc-800 p-4 flex flex-col gap-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <strong className="">Créditos</strong>
                    <button className="cursor-pointer hover:scale-105 active:scale-95">
                      <strong className="text-zinc-400 text-sm hover:underline hover:text-white active:text-zinc-400">
                        Mostrar tudo
                      </strong>
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="group flex justify-between items-center w-full cursor-pointer hover:bg-zinc-700 p-2 rounded-sm">
                      <div className="flex flex-col">
                        <span>Spotify</span>
                        <span className="text-sm text-zinc-400">
                          Artista Principal
                        </span>
                      </div>
                      <div>
                        <button className="bg-zinc-900 px-3 py-1 rounded-full outline outline-zinc-500 text-sm cursor-pointer hover:scale-105 hover:outline-white hover:bg-zinc-700">
                          <strong>Seguir</strong>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full p-2">
                      <div className="flex flex-col">
                        <span>Rafael Servelo</span>
                        <span className="text-sm text-zinc-400">Autores</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-zinc-800 p-4 flex flex-col gap-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <strong className="">A seguir</strong>
                    <button className="cursor-pointer hover:scale-105 active:scale-95">
                      <strong className="text-zinc-400 text-sm hover:underline hover:text-white active:text-zinc-400">
                        Abrir fila
                      </strong>
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="group flex justify-between items-center w-full cursor-pointer hover:bg-zinc-700 p-2 rounded-sm transition-all">
                      <div className="flex flex-row items-center gap-4">
                        <div>
                          <div className="w-20 h-20 relative rounded-md overflow-hidden">
                            <div className="w-full h-full bg-orange-500 absolute"></div>
                            <div className="w-full h-full absolute backdrop-blur-xs backdrop-brightness-75 items-center justify-center hidden group-hover:flex">
                              <Play className="fill-current"></Play>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span>Spotify</span>
                          <span className="text-sm text-zinc-400">
                            Artista Principal
                          </span>
                        </div>
                      </div>
                      <div>
                        <button className="hover:scale-105 cursor-pointer">
                          <strong className="hidden group-hover:block text-zinc-400 hover:text-white">
                            ...
                          </strong>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
