import { Heart, BookOpen, Scissors } from "lucide-react";
import Reveal from "./Reveal";
import Logo from "./Logo";
import Ornamento from "./Ornamento";
import { MISSAO, CONCEITO, SOBRE_FUNDADORA, FUNDADORA } from "../data";

const VALORES = [
  { icon: Heart, label: "Fé em cada detalhe" },
  { icon: Scissors, label: "Feito à mão, com cuidado" },
  { icon: BookOpen, label: "Pensado para a Palavra" },
];

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="fundo-folhas px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[minmax(0,260px)_1fr] gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="bg-creme rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-5">
              {VALORES.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.label} className="flex items-center gap-3">
                    <Icon size={22} className="text-amora shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-vinho/85">{v.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="rotulo text-salvia">A nossa missão</span>
            <div className="mt-5 flex flex-col gap-4">
              {MISSAO.map((paragrafo) => (
                <p key={paragrafo.slice(0, 24)} className="text-sm md:text-base text-creme/90 leading-relaxed">
                  {paragrafo}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 py-24 bg-papel">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="bg-creme rounded-2xl px-8 py-12 sm:px-14 shadow-sm">
              <Logo variant="completo" className="w-full max-w-xs mx-auto" />
              <ul className="mt-10 flex flex-col gap-5">
                {CONCEITO.map((c) => (
                  <li key={c.title}>
                    <p className="font-display text-lg text-amora">{c.title}</p>
                    <p className="text-sm text-vinho/75 leading-relaxed mt-0.5">{c.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="rotulo text-oliva">Quem faz</span>
            <h2 className="font-display text-3xl md:text-4xl text-vinho mt-4">
              {FUNDADORA}
            </h2>
            <Ornamento className="mt-5 text-amora/70" />
            <p className="mt-5 text-vinho/80 leading-relaxed">{SOBRE_FUNDADORA}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
