import { MessageCircle, ArrowDown } from "lucide-react";
import Reveal from "./Reveal";
import Ornamento from "./Ornamento";
import caderno from "../assets/marca/caderno-amora.webp";
import ramo from "../assets/marca/amoras-ramo.webp";
import folha from "../assets/marca/folha.webp";
import { WHATSAPP_LINK } from "../data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden bg-creme"
    >
      <img
        src={folha}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-72 opacity-[0.12] pointer-events-none -scale-x-100 rotate-12 grayscale"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="rotulo text-oliva">Papelaria afetiva</span>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mt-4 text-vinho">
            Cadernos que te aproximam da <em className="text-amora">Palavra</em>.
          </h1>
          <Ornamento className="mt-6 text-amora/70" />
          <p className="mt-5 text-base md:text-lg text-vinho/80 max-w-md leading-relaxed">
            Cadernos devocionais, blocos de estudo bíblico, planners e agendas
            feitos à mão, capa por capa, para o seu tempo diário com Deus.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-amora text-creme hover:bg-vinho transition-colors"
            >
              <MessageCircle size={17} />
              Fazer pedido
            </a>
            <a
              href="#produtos"
              className="flex items-center gap-2 text-sm text-vinho/80 hover:text-amora transition-colors"
            >
              Ver produtos
              <ArrowDown size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-[400px]">
            <img
              src={caderno}
              alt="Caderno de capa vinho com o logo da Amora em dourado"
              className="w-full aspect-[688/900] object-cover rounded-2xl shadow-2xl rotate-2"
            />
            <img
              src={ramo}
              alt=""
              aria-hidden="true"
              className="absolute -top-10 -right-8 w-32 md:w-40 drop-shadow-lg pointer-events-none"
            />
            <div className="absolute -bottom-6 -left-4 md:-left-10 bg-vinho text-creme rounded-xl px-6 py-4 shadow-lg max-w-[220px]">
              <p className="font-display text-xl leading-snug">Feito à mão</p>
              <p className="text-xs text-creme/75 mt-1">capa por capa, em Recife-PE</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
