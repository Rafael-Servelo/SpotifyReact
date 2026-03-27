interface SliderProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
  widthClass?: string; // Para definir se é largo (música) ou curto (volume)
}

export default function Slider({
  value,
  max,
  onChange,
  widthClass = "w-full",
}: SliderProps) {
  const percentage = (value / max) * 100;

  return (
    <div className={`group relative flex items-center h-4 ${widthClass}`}>
      {/* Input nativo invisível para capturar o clique/arrasto */}
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute w-full h-full opacity-0 z-40 cursor-pointer appearance-none"
      />

      {/* Trilho (Cinza) */}
      <div className="absolute w-full h-1 bg-zinc-600 rounded-full"></div>

      {/* Progresso (Branco que fica Verde no hover do grupo) */}
      <div
        className="absolute h-1 bg-white group-hover:bg-emerald-500 rounded-full z-10"
        style={{ width: `${percentage}%` }}
      ></div>

      {/* Botão (Thumb) - Aparece só no hover */}
      <div
        className="hidden group-hover:block absolute w-3 h-3 bg-white rounded-full z-20 shadow-md"
        style={{ left: `calc(${percentage}% - 6px)` }}
      ></div>
    </div>
  );
}
