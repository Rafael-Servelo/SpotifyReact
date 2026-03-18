export default function ProgressBar({
  value,
  max,
  onChange,
}: {
  value: number;
  max: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  // O cálculo da porcentagem para o preenchimento da barra
  const percentage = (value / max) * 100;

  return (
    <div className="group relative flex items-center w-full h-4">
      {/* Input Real (Invisível, mas funcional) */}
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={onChange}
        className="absolute w-full h-full opacity-0 z-40 cursor-pointer appearance-none"
      />

      {/* Barra de Fundo (Cinza) */}
      <div className="absolute w-full h-1 bg-zinc-600 rounded-full"></div>

      {/* Barra de Progresso (Branca que fica Verde) */}
      <div
        className="absolute h-1 bg-white group-hover:bg-emerald-500 rounded-full z-10"
        style={{ width: `${percentage}%` }}
      ></div>

      {/* Bolinha (Thumb) - Só aparece no hover do container */}
      <div
        className="hidden group-hover:block absolute w-3 h-3 bg-white rounded-full z-20 shadow-md"
        style={{
          left: `calc(${percentage}% - 6px)`,
          transition: "none", // Evita atraso ao arrastar
        }}
      ></div>
    </div>
  );
}
