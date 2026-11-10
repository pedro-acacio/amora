import Reveal from "./Reveal";
import NotebookMock from "./NotebookMock";
import { GALERIA } from "../data";

// Cores de capa tiradas da paleta oficial (vinhos e olivas)
const COVERS = ["#703945", "#56583c", "#391120", "#a16b71", "#343419", "#703945"];

export default function Galeria() {
  return (
    <section id="galeria" className="px-6 py-24 bg-creme">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl">
          <span className="rotulo text-oliva">Galeria</span>
          <h2 className="font-display text-3xl md:text-4xl text-vinho mt-4">
            Peças feitas à mão
          </h2>
          <p className="mt-3 text-sm text-vinho/60">
            Em breve, fotos reais dos produtos. Por enquanto, um espaço reservado
            para cada categoria.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALERIA.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <NotebookMock cover={COVERS[i % COVERS.length]} className="w-full aspect-[4/3]" />
              <p className="mt-3 text-center font-display text-lg text-vinho">{p.title}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
