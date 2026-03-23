import { Poppins } from "next/font/google";
import { ChevronDown } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const faqItems = [
  {
    question: "Funciona para quem está começando do zero?",
    answer:
      "Sim. O curso é estruturado para fortalecer base e desenvolver estratégia.",
  },
  {
    question: "Consigo conciliar com escola ou trabalho?",
    answer:
      "Sim. As aulas são noturnas, das 18h30 às 22h30.",
  },
  {
    question: "O foco é só ENEM?",
    answer:
      "O foco principal é incidência ENEM, mas o conteúdo também prepara para vestibulares tradicionais.",
  },
  {
    question: "Serve só para Medicina?",
    answer:
      "Não. É para qualquer curso superior.",
  },
  {
    question: "Como funcionam os simulados com TRI?",
    answer:
      "Utilizam o mesmo modelo estatístico do ENEM. A nota considera dificuldade das questões e coerência das respostas.",
  },
  {
    question: "As redações são corrigidas por IA?",
    answer:
      "Não. São corrigidas por professores especialistas em Letras.",
  },
  {
    question: "Existe plantão de dúvidas?",
    answer:
      "Sim, com atendimento durante o período do curso.",
  },
  {
    question: "Onde acontecem as aulas?",
    answer:
      "No Edifício Acaiaca, no centro de Belo Horizonte.",
  },
];

const FaqSection = () => {
  return (
    <section className="w-screen bg-[radial-gradient(circle_at_top_right,#217040_0%,#001408_58%)] px-4 py-16 text-white md:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <p
          className={`${poppins.className} text-center text-base text-white/70 md:text-lg`}
        >
          Duvidas frequentes
        </p>

        <h2 className="mt-3 text-center text-4xl font-clash leading-tight tracking-tight md:text-7xl">
          Perguntas &amp; Respostas
        </h2>

        <div className="mt-10 space-y-4 md:mt-12 md:space-y-5">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-2xl bg-[#d8d8d8] text-[#163224]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
                <span
                  className={`${poppins.className} text-lg font-clash leading-tight md:text-xl`}
                >
                  {item.question}
                </span>
                <ChevronDown className="h-8 w-8 shrink-0 text-[#2a8f5c] transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="px-5 pb-5 md:px-6 md:pb-6">
                <p
                  className={`${poppins.className} border-t border-[#163224]/15 pt-4 text-base leading-7 text-[#163224]/80 md:text-xl md:leading-9`}
                >
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
