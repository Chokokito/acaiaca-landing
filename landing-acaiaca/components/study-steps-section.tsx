import { Poppins } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const steps = [
  {
    id: 1,
    title: "Direção clara",
    description:
      "Cronograma estruturado do inicio ao fim do curso, com planejamento semanal focado nos conteudos de maior incidência no ENEM.",
  },
  {
    id: 2,
    title: "Aprenda, pratique, domine",
    description:
      'Aula presencial + exercícios direcionados + revisão estratégica. Cada conteúdo e trabalhado até você consolidar o aprendizado, não apenas "ver a matéria".',
  },
  {
    id: 3,
    title: "Simulados que revelam a verdade",
    description:
      "Todo mês voce faz prova de verdade. Acertou? Segue firme. Travou? A gente destrava junto, antes da prova oficial.",
  },
  {
    id: 4,
    title: "Sua evolução, escancarada",
    description:
      "Você identifica onde esta errando e quais conteúdos precisam de reforço. Com revisões e acompanhamento próximo, ajusta sua estratégia antes da prova.",
  },
];

const StudyStepsSection = () => {
  return (
    <section className="w-full overflow-x-hidden bg-[#d8d8d8]  rounded-4xl px-3 py-14 text-[#151515] sm:px-4 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-3xl font-clash leading-[1.05] tracking-tight sm:text-4xl md:text-7xl">
          Não basta estudar muito.
          <br />
          Você precisa estudar certo.
        </h2>

        <p
          className={`${poppins.className} mx-auto mt-5 max-w-5xl text-center text-sm leading-6 text-[#151515]/70 sm:text-base sm:leading-7 md:mt-6 md:text-xl md:leading-10`}
        >
          No ACAIACA, voce nao estuda no escuro. Acompanhamos sua preparacao
          com: planejamento semanal, revisoes estrategicas, simulados bimestrais
          com TRI, correcao especializada de redacao e plantao de duvidas.
        </p>

        <div className="mt-10 md:mt-12">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <article className="grid w-full grid-cols-1 gap-4 rounded-[1.6rem] bg-[#001408] px-4 py-6 text-white sm:px-6 sm:py-7 md:grid-cols-[1fr_1.3fr] md:gap-6 md:px-10 md:py-8">
                <div className="grid grid-cols-[auto_1fr] items-start gap-3 sm:gap-4 md:flex md:items-center md:gap-6">
                  <span className="text-5xl font-clash leading-none text-[#1ea96b] sm:text-6xl md:text-7xl">
                    {step.id}.
                  </span>
                  <h3 className="text-xl font-clash leading-tight sm:text-3xl md:text-3xl">
                    {step.title}
                  </h3>
                </div>

                <p
                  className={`${poppins.className} text-sm leading-7 text-white/70 md:text-xl md:leading-10`}
                >
                  {step.description}
                </p>
              </article>

              {index < steps.length - 1 ? (
                <span className="my-5 h-10 w-0.5 bg-[#1ea96b] md:my-3 md:h-8" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            Icon={ArrowUpRight}
            cn="bg-[#001408] text-white shadow-[0_8px_20px_rgba(0,20,8,0.4)] hover:bg-[#032512]"
            cnText="font-semibold"
            cnIcon="bg-white text-[#001408]"
          >
            QUERO ASSINAR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudyStepsSection;
