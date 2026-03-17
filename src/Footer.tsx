import {
  Headphones,
  ListEnd,
  Maximize,
  MicVocal,
  Repeat,
  Repeat1,
  Pause,
  PictureInPicture2,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { useState } from "react";
import TooltipComponent from "./assets/Tooltip";

export default function Footer() {
  const [playMusic, setPlay] = useState<boolean>(false);
  const [repeatMusic, setRepeat] = useState<boolean>(false);

  return (
    <>
      <footer className="sticky bottom-0 z-50 bg-zinc-950/80 backdrop-blur-md">
        <div className="flex p-3">
          {/* Musica Atual */}
          <div className="w-1/3 flex items-center justify-start gap-3">
            <div className="w-18 h-18 bg-red-700 flex items-center justify-center rounded-sm">
              <img
                src="src/assets/Spotify_Primary_Logo_RGB_White.png"
                alt="logo"
                width={50}
                className="bg-contain"
              />
            </div>
            <div>
              <div>S.P.O.T.I.F.Y</div>
              <div className="text-sm text-zinc-400">Spotify</div>
            </div>
          </div>
          {/* Player */}
          <div className="grow">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex items-center justify-center gap-6">
                <Shuffle className="text-zinc-300 cursor-pointer hover:text-white transition-all" />
                <SkipBack className="text-zinc-300 fill-current cursor-pointer hover:text-white transition-all" />
                <div
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-105 transition-all"
                  onClick={() => setPlay(!playMusic)}
                >
                  {playMusic ? (
                    <Pause className="text-zinc-950 fill-current" />
                  ) : (
                    <Play className="text-zinc-950 fill-current" />
                  )}
                </div>
                <SkipForward className="text-zinc-300 fill-current cursor-pointer hover:text-white transition-all" />
                {repeatMusic ? (
                  <Repeat1
                    className="text-zinc-300 cursor-pointer hover:text-white transition-all"
                    onClick={() => setRepeat(!repeatMusic)}
                  />
                ) : (
                  <Repeat
                    className="text-zinc-300 cursor-pointer hover:text-white transition-all"
                    onClick={() => setRepeat(!repeatMusic)}
                  />
                )}
              </div>
              {/* Controle de progresso */}
              <div className="flex text-zinc-400 items-center gap-5">
                <span className="text-sm">1:25</span>
                <div className="group relative w-80 lg:w-180 h-3 rounded-full cursor-pointer">
                  <div className="bg-white w-3 h-3 absolute z-30 rounded-full hidden group-hover:block left-1/2"></div>
                  <div className="bg-white w-1/2 h-1 absolute z-20 rounded-full group-hover:bg-emerald-400 top-1"></div>
                  <div className="bg-zinc-600 w-80 lg:w-180 h-1 absolute z-10 rounded-full top-1"></div>
                </div>
                <span className="text-sm">-3:45</span>
              </div>
            </div>
          </div>
          {/* Controle de volume e diversos */}
          <div className="w-1/3">
            <div className="flex items-center justify-end p-5 gap-5">
              <TooltipComponent
                children={<MicVocal className="text-zinc-400 cursor-pointer" />}
                text="Letra"
              />
              <TooltipComponent
                children={<ListEnd className="text-zinc-400 cursor-pointer" />}
                text="Fila"
              />
              <TooltipComponent
                children={
                  <Headphones className="text-zinc-400 cursor-pointer" />
                }
                text="Conectar a um dispositivo"
              />
              <TooltipComponent
                children={<Volume2 className="text-zinc-400 cursor-pointer" />}
                text="Mudo"
              />

              {/* Controle de Volume */}
              <div className="group relative w-22 h-3 rounded-full cursor-pointer">
                <div className="bg-white w-3 h-3 absolute z-30 rounded-full hidden group-hover:block left-17"></div>
                <div className="bg-white w-18 h-1 absolute z-20 rounded-full group-hover:bg-emerald-400 top-1"></div>
                <div className="bg-zinc-600 w-22 h-1 absolute z-10 rounded-full top-1"></div>
              </div>

              <TooltipComponent
                children={
                  <PictureInPicture2 className="text-zinc-400 cursor-pointer" />
                }
                text="Abrir miniplayer"
              />
              <TooltipComponent
                children={<Maximize className="text-zinc-400 cursor-pointer" />}
                text="Entrar na tela cheia"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
