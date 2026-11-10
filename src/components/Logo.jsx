import simbolo from "../assets/marca/simbolo-amora.svg";
import simboloCreme from "../assets/marca/simbolo-amora-creme.svg";
import nomeVinho from "../assets/marca/nome-amora-vinho.svg";
import nomeCreme from "../assets/marca/nome-amora-creme.svg";
import logoCor from "../assets/marca/logo-amora.svg";
import logoCreme from "../assets/marca/logo-amora-creme.svg";

// Arquivos vetoriais extraídos da apresentação oficial da marca.
// variant="horizontal": símbolo + "Amora", para barras estreitas (nav).
// variant="completo": logo empilhado com "Papelaria Afetiva".
export default function Logo({ variant = "horizontal", tom = "cor", className = "" }) {
  const claro = tom === "creme";

  if (variant === "completo") {
    return (
      <img
        src={claro ? logoCreme : logoCor}
        alt="Amora · Papelaria Afetiva"
        className={className}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img src={claro ? simboloCreme : simbolo} alt="" className="h-full w-auto" />
      <img
        src={claro ? nomeCreme : nomeVinho}
        alt="Amora · Papelaria Afetiva"
        className="h-[78%] w-auto"
      />
    </span>
  );
}
