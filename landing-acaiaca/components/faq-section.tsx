import { Poppins } from "next/font/google";
import { ChevronDown } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const faqItems = [
  {
    question: "Funciona pra quem ta comecando do zero?",
    answer:
      "Nada de achismo. Relatorio individual mostra sua nota subindo (ou caindo) e o que fazer para corrigir agora.",
  },
  {
    question: "Serve so pra quem quer Medicina?",
    answer:
      "Provavelmente o problema nao foi voce, foi o metodo. Aqui voce nao fica perdido na multidao. Turma pequena, acompanhamento individual e revisoes direcionadas para suas dificuldades especificas.",
  },
  {
    question: "O foco e so ENEM?",
    answer:
      "Nao. O conteudo cobre todos os vestibulares e o ENEM. Se seu objetivo e Medicina, Engenharia, Direito ou qualquer outro curso, o Acaiaca prepara voce para passar.",
  },
  {
    question: "Consigo conciliar com escola ou trabalho?",
    answer:
      "Sim. Trabalhamos tanto com ENEM quanto com vestibulares especificos. O cronograma inclui os temas que caem nas principais provas da regiao.",
  },
  {
    question: "Existe plantao de duvidas?",
    answer:
      "Sim. O cronograma e flexivel e voce monta de acordo com sua rotina. Nao e um curso engessado onde todos fazem tudo igual. Voce adapta conforme sua disponibilidade.",
  },
  {
    question: "As redacoes sao corrigidas por IA?",
    answer:
      "Voce faz um diagnostico inicial, a gente identifica seus pontos fortes e fracos, e montamos um plano semanal com foco no que voce mais precisa. Conforme evolui, o cronograma se ajusta.",
  },
  {
    question: "Como funcionam os simulados com TRI?",
    answer:
      "Nao. Professores de verdade corrigem competencia por competencia e comentam cada erro. Voce recebe feedback especifico, nao um comentario generico de robo.",
  },
  {
    question: "Existe desconto para Jovem Aprendiz?",
    answer:
      "Voce tem clareza do que estudar cada dia, revisoes programadas nos momentos certos, simulados mensais para medir evolucao e professores que acompanham seu progresso de perto.",
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer:
      "Depende do seu ponto de partida e objetivo. Em media, alunos dedicados veem evolucao clara em 3 meses de estudo consistente. O acompanhamento individual acelera esse processo.",
  },
  {
    question: "O que acontece se eu nao gostar do curso?",
    answer:
      "Voce tem 30 dias para testar. Se achar que nao vale a pena, devolvemos 100% do investimento. Sem perguntas, sem burocracia. Basta avisar.",
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
