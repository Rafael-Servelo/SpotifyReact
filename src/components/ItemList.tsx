import { Volume2 } from "lucide-react";
type Props = {
  type: string;
  title: string;
  artist: string;
  album: string;
  user: string;
  musics: number;
  listen: boolean;
};

export default function ItemList({ type, title, user, listen }: Props) {
  return (
    <>
      {type === "playlist" ? (
        <div className="flex items-center justify-between gap-2 p-2 cursor-pointer rounded-sm hover:bg-zinc-800 w-full transition-colors">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-amber-600 rounded-md"></div>
            <div className="flex flex-col text-sm">
              <div className="">{title}</div>
              <div className="flex items-center gap-1 text-xs text-zinc-400">
                <span>Playlist</span>
                <span> ⋅ </span>
                <span>{user}</span>
              </div>
            </div>
          </div>
          {listen ? (
            <Volume2
              size={16}
              className="text-emerald-400 fill-current animate-pulse"
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div>teste2</div>
      )}
    </>
  );
}
