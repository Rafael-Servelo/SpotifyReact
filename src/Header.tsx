import {
  House,
  Search,
  SquareLibrary,
  Bell,
  Users,
  CircleArrowDown,
  Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../src/assets/Spotify_Primary_Logo_RGB_White.png";
import TooltipComponent from "./assets/Tooltip";
import axios from "axios";

export default function Header() {
  const token = localStorage.getItem("spotifyToken");
  const [activeHome, setActiveHome] = useState<boolean>(false);
  const [user, setUser] = useState<object>({}) as any;

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      {user ? (
        <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md">
          <div className="flex flex-row p-2 px-4 justify-between items-center">
            <div className="hover:opacity-90 transition cursor-pointer">
              <img
                draggable="false"
                src={logo}
                alt="Logo Spotify"
                className="w-8 h-8 object-contain min-w-8 mx-3"
              />
            </div>
            <div className="flex items-center gap-2">
              {" "}
              {/* Gap entre a Casa e a Busca */}
              {/* Ícone da Casa (Circle background no Spotify) */}
              <div
                className="bg-zinc-800 p-3 rounded-full hover:scale-105 transition cursor-pointer hover:bg-zinc-700"
                onClick={() => setActiveHome(!activeHome)}
              >
                <TooltipComponent
                  children={
                    <House
                      className={
                        activeHome
                          ? "text-zinc-200 fill-current"
                          : "text-zinc-400"
                      }
                      size={24}
                    />
                  }
                  text="Início"
                ></TooltipComponent>
              </div>
              {/* Campo de Busca */}
              <div className="flex flex-row items-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-4 py-3 rounded-full w-112.5 transition-all group focus-within:ring-2 focus-within:ring-white">
                <label htmlFor="search" className="cursor-pointer">
                  <TooltipComponent
                    children={
                      <Search
                        className="text-zinc-400 group-focus-within:text-white transition-colors"
                        size={25}
                      />
                    }
                    text="Buscar"
                  />
                </label>

                <input
                  id="search"
                  type="text"
                  placeholder="O que você quer ouvir?"
                  className="bg-transparent border-none outline-none text-sm text-white placeholder-zinc-400 w-full"
                />

                {/* Divisor vertical */}
                <div className="w-px h-6 bg-zinc-600"></div>

                <TooltipComponent
                  children={
                    <button className="hover:scale-110 transition cursor-pointer">
                      <SquareLibrary
                        className="text-zinc-400 hover:text-white"
                        size={22}
                      />
                    </button>
                  }
                  text="Navegar"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              {/* Item: Instalar App */}
              <div className="group flex items-center gap-2 cursor-pointer hover:scale-105 transition-all">
                <CircleArrowDown
                  className="text-zinc-400 group-hover:text-zinc-200 transition-colors"
                  size={17}
                />
                <a
                  href="https://open.spotify.com/download"
                  className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-sm font-bold"
                >
                  Instalar aplicativo
                </a>
              </div>

              {/* Item: Bell */}
              <TooltipComponent
                children={
                  <Bell
                    className="text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors"
                    size={20}
                  />
                }
                text="Novidades"
              />

              {/* Item: Users */}
              <TooltipComponent
                children={
                  <Users
                    className="text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors"
                    size={20}
                  />
                }
                text="Atividade de amigos"
              />

              {/* Item: Perfil */}
              <TooltipComponent
                children={
                  <div className="w-10 h-10 bg-zinc-700 rounded-full hover:scale-105 transition cursor-pointer overflow-hidden flex items-center justify-center">
                    {user && user.images && user.images.length > 0 ? (
                      <img
                        src={user.images[0].url} // normalmente a primeira imagem
                        alt="Perfil"
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-sm">
                        <Loader2 className="animate-spin" />
                      </div>
                    )}
                  </div>
                }
                text={user.display_name}
              />
            </div>
          </div>
        </header>
      ) : (
        <Loader2 className="animate-spin" />
      )}
    </>
  );
}
