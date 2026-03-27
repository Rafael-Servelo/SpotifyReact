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
  Volume1,
  Volume,
  VolumeOff,
} from "lucide-react";
import { useState } from "react";
import TooltipComponent from "../assets/Tooltip";
import ProgressBar from "./RangerBar";
import Slider from "./Slider";

export default function Footer() {
  const [playMusic, setPlay] = useState<boolean>(false);
  const [repeatMusic, setRepeat] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(85); // 1:25 em segundos
  const duration = 225; // 3:45 em segundos
  const [mude, setMude] = useState(false);
  const [volume, setVolume] = useState(50);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setCurrentTime(newValue);
    // Aqui depois você enviará o comando para a API: spotifyApi.seek(newValue * 1000)
  };

  const renderVolumeIcon = () => {
    // Se estiver no mudo ou o volume for 0
    if (mude || volume === 0) {
      return <VolumeOff className="text-zinc-400 hover:text-white" size={20} />;
    }
    // Volume baixo
    if (volume < 33) {
      return <Volume className="text-zinc-400 hover:text-white" size={20} />;
    }
    // Volume médio
    if (volume < 66) {
      return <Volume1 className="text-zinc-400 hover:text-white" size={20} />;
    }
    // Volume alto
    return <Volume2 className="text-zinc-400 hover:text-white" size={20} />;
  };

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
              <div className="flex text-zinc-400 items-center gap-5 w-full justify-center">
                <span className="text-xs min-w-10 text-right">
                  {Math.floor(currentTime / 60)}:
                  {(currentTime % 60).toString().padStart(2, "0")}
                </span>

                <div className="w-80 lg:w-180">
                  <ProgressBar
                    value={currentTime}
                    max={duration}
                    onChange={handleSeek}
                  />
                </div>

                <span className="text-xs min-w-10">
                  -{Math.floor((duration - currentTime) / 60)}:
                  {((duration - currentTime) % 60).toString().padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
          {/* Controle de volume e diversos */}
          <div className="w-1/3">
            <div className="flex items-center justify-end p-5 gap-5">
              <TooltipComponent
                children={
                  <MicVocal
                    size={18}
                    className="text-zinc-400 cursor-pointer"
                  />
                }
                text="Letra"
              />
              <TooltipComponent
                children={
                  <ListEnd size={18} className="text-zinc-400 cursor-pointer" />
                }
                text="Fila"
              />
              <TooltipComponent
                children={
                  <Headphones
                    size={18}
                    className="text-zinc-400 cursor-pointer"
                  />
                }
                text="Conectar a um dispositivo"
              />

              {/* Controle de Volume */}
              <div className="flex items-center gap-2">
                <TooltipComponent
                  text={mude || volume === 0 ? "Ativar som" : "Mudo"}
                  children={
                    <button
                      onClick={() => setMude(!mude)}
                      className="flex items-center justify-center w-5 h-5"
                    >
                      {renderVolumeIcon()}
                    </button>
                  }
                />

                {/* O Slider de Volume */}
                <Slider
                  value={mude ? 0 : volume}
                  max={100}
                  onChange={(val) => {
                    setVolume(val);
                    if (val > 0) setMude(false); // Desmuta automaticamente se arrastar o volume
                  }}
                  widthClass="w-24"
                />
              </div>

              <TooltipComponent
                children={
                  <PictureInPicture2
                    size={18}
                    className="text-zinc-400 cursor-pointer"
                  />
                }
                text="Abrir miniplayer"
              />
              <TooltipComponent
                children={
                  <Maximize
                    size={18}
                    className="text-zinc-400 cursor-pointer"
                  />
                }
                text="Entrar na tela cheia"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
