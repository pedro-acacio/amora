import SpiralEdge from "./SpiralEdge";
import simboloDourado from "../assets/marca/simbolo-amora-dourado.svg";

// Capa de caderno de espiral no estilo dos mockups da marca (capa lisa
// com o símbolo da Amora em dourado), usada enquanto não há fotos reais.
export default function NotebookMock({ cover = "#703945", className = "", rotate = 0 }) {
  return (
    <div
      className={`flex flex-row rounded-2xl shadow-xl overflow-hidden ${className}`}
      style={{ background: cover, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <SpiralEdge count={9} direction="column" className="pl-3 pr-1 py-4 shrink-0" color="#c9a24d" />
      <div className="flex-1 flex items-center justify-center p-6">
        <img src={simboloDourado} alt="" aria-hidden="true" className="w-2/5 max-w-[120px] opacity-90" />
      </div>
    </div>
  );
}
