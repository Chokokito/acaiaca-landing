import { Poppins } from "next/font/google";
import {
  ArrowUpRight,
  Lightbulb,
  Shield,
  Target,
  TriangleAlert,
  Users,
  Clock3,
} from "lucide-react";
import Button from "@/components/ui/button";
import Header from "@/components/header";
import Image from "next/image";
import TeachersCarousel from "@/components/teachers-carousel";
import { teachersData } from "@/data/teachers-data";
import StudyStepsSection from "@/components/study-steps-section";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import { testimonialsData } from "@/data/testimonials-data";
import FaqSection from "@/components/faq-section";
import LocationSection from "@/components/location-section";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-[radial-gradient(circle_at_top_right,#217040_0%,#001408_10%)] pt-16 text-white">
      <Header />

      <section className="mx-auto flex min-h-[70vh] w-[80vw] flex-col items-center justify-center px-6 text-center sm:px-10">
        <h1 className="w-full pt-10 text-2xl font-clash leading-tight tracking-tight text-balance sm:text-3xl md:text-5xl lg:text-6xl">
          A jornada para sua aprovação começa agora.
        </h1>

        <p
          className={`${poppins.className} mt-8 w-full text-base leading-7 text-white/75 sm:text-lg sm:leading-8`}
        >
          Chegou a nova opção de curso pré-vestibular em Belo Horizonte, o
          Acaiaca Pré-vestibular. Com foco em incidência ENEM, turmas reduzidas
          e professores formados nas melhores universidades públicas do país,
          oferecemos preparação, especialmente quem estuda ou estudou em escola
          pública e precisa de direção clara para competir de igual para igual.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            Icon={ArrowUpRight}
            cn="bg-white text-[#001408] hover:bg-white/90"
            cnText="font-semibold"
            cnIcon="bg-[#001408] text-white"
          >
            GARANTIR MINHA VAGA
          </Button>

          <Button
            Icon={Lightbulb}
            cn="border border-white bg-transparent text-white hover:bg-white/10"
            cnText="font-semibold"
            cnIcon="bg-white/15 text-white"
          >
            CONTATO
          </Button>
        </div>
      </section>
      <section className="w-screen">
        <Image
          src="/faixas.png"
          alt="Acaiaca Pre-vestibular"
          width={3200}
          height={800}
          priority
          className="h-auto w-full"
        />
      </section>

      <section className="w-screen flex flex-col items-center bg-[linear-gradient(to_top,#217040_0%,#001408_0%)]">
        <div className="mx-auto flex w-[80vw] flex-col items-center px-6 pt-16 pb-8 text-center sm:px-10 md:pt-8">
          <h2 className="w-full text-4xl font-clash leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Por que nos escolher?
          </h2>

          <p
            className={`${poppins.className} mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8`}
          >
            Não somos apenas mais um cursinho. Somos a nova alternativa
            estratégica em BH para quem quer estudar com direção.
          </p>
        </div>

        <div className="relative w-[90vw]">
          <Image
            src="/escolha.png"
            alt="Por que nos escolher"
            width={3200}
            height={1800}
            className="h-auto w-full"
          />

          <div className="pointer-events-none absolute top-[10%] left-[3%] hidden rounded-4xl border border-white/80 bg-black/10 p-4 text-center backdrop-blur-xl lg:block lg:w-80 lg:min-h-44 xl:w-96 xl:min-h-52 xl:p-5 2xl:w-110 2xl:min-h-60 2xl:p-6">
            <h3 className="text-2xl font-clash leading-tight text-white xl:text-3xl 2xl:text-4xl">
              Treino
              <br />
              Personalizado
            </h3>
            <p
              className={`${poppins.className} mt-3 text-base leading-7 text-white/75 xl:mt-4 xl:text-lg xl:leading-8`}
            >
              Revisões focadas nos conteúdos de maior incidência para aumentar
              sua nota onde realmente importa.
            </p>
          </div>

          <div className="pointer-events-none absolute top-[14%] right-[4%] hidden rounded-4xl border border-white/80 bg-black/10 p-4 text-center backdrop-blur-xl lg:block lg:w-80 lg:min-h-44 xl:w-96 xl:min-h-52 xl:p-5 2xl:w-110 2xl:min-h-60 2xl:p-6">
            <h3 className="text-2xl font-clash leading-tight text-white xl:text-3xl 2xl:text-4xl">
              Simulados
              <br />
              Com TRI
            </h3>
            <p
              className={`${poppins.className} mt-3 text-base leading-7 text-white/75 xl:mt-4 xl:text-lg xl:leading-8`}
            >
              Simulados que replicam o formato da sua banca com correção TRI.
              chegue preparado no dia da prova.
            </p>
          </div>

          <div className="pointer-events-none absolute bottom-[8%] left-[8%] hidden rounded-4xl border border-white/80 bg-black/20 p-4 text-center backdrop-blur-xl lg:block lg:w-80 lg:min-h-44 xl:w-96 xl:min-h-52 xl:p-5 2xl:w-110 2xl:min-h-60 2xl:p-6">
            <h3 className="text-2xl font-clash leading-tight text-white xl:text-3xl 2xl:text-4xl">
              Aulas
              <br />
              Focadas
            </h3>
            <p
              className={`${poppins.className} mt-3 text-base leading-7 text-white/75 xl:mt-4 xl:text-lg xl:leading-8`}
            >
              Conteúdo direto ao ponto. Professores que dominam a banca ensinam
              o que você precisa para acertar.
            </p>
          </div>

          <div className="pointer-events-none absolute right-[6%] bottom-[16%] hidden rounded-4xl border border-white/80 bg-black/15 p-4 text-center backdrop-blur-xl lg:block lg:w-80 lg:min-h-44 xl:w-96 xl:min-h-52 xl:p-5 2xl:w-110 2xl:min-h-60 2xl:p-6">
            <h3 className="text-2xl font-clash leading-tight text-white xl:text-3xl 2xl:text-4xl">
              Atualizações
              <br />
              Semanais
            </h3>
            <p
              className={`${poppins.className} mt-3 text-base leading-7 text-white/75 xl:mt-4 xl:text-lg xl:leading-8`}
            >
              Os principais acontecimentos do Brasil e do mundo conectados
              diretamente ao que mais cai no ENEM.
            </p>
          </div>
        </div>
      </section>

      <section className=" w-screen rounded-t-[2.5rem] bg-white py-16 text-[#001408] md:py-20">
        <div className="mx-auto flex w-[90vw] max-w-7xl flex-col items-center text-center">
          <Button
            Icon={ArrowUpRight}
            cn="bg-[#001408] text-white hover:bg-[#032512]"
            cnText="font-semibold"
            cnIcon="bg-[#217040] text-white"
          >
            QUERO ASSINAR
          </Button>

          <h2 className="mt-10 max-w-4xl text-3xl font-clash leading-tight tracking-tight md:text-5xl">
            Você sabe o que separa quem passa de quem fica para trás?
          </h2>

          <p
            className={`${poppins.className} mt-6 max-w-5xl text-base leading-7 text-[#001408]/75 md:text-xl md:leading-9`}
          >
            Estudar sozinho, sem direção, sem método e sem apoio é o caminho
            mais longo e mais arriscado. Milhares de estudantes perdem a vaga
            dos sonhos não por falta de esforço, mas por falta de estratégia.
          </p>

          <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            <article className="flex min-h-65 flex-col items-center rounded-[1.4rem] border-2 border-[#1ea96b] bg-[#001408] px-6 py-7 text-center text-white">
              <TriangleAlert size={48} className="text-[#1ea96b]" />
              <h3 className="mt-5 text-4xl font-clash leading-tight">
                Sem Direção
              </h3>
              <p
                className={`${poppins.className} mt-4 text-xl leading-8 text-white/65`}
              >
                Estudar sem saber o que realmente mais cai no ENEM. Perder tempo
                com conteúdos que quase não impactam sua nota.
              </p>
            </article>

            <article className="flex min-h-65 flex-col items-center rounded-[1.4rem] border-2 border-[#1ea96b] bg-[#001408] px-6 py-7 text-center text-white">
              <Target size={48} className="text-[#1ea96b]" />
              <h3 className="mt-5 text-4xl font-clash leading-tight">
                Sem Método
              </h3>
              <p
                className={`${poppins.className} mt-4 text-xl leading-8 text-white/65`}
              >
                Resolver exercícios aleatórios sem entender o padrão da prova.
                Acertar por sorte, errar por falta de estratégia.
              </p>
            </article>

            <article className="flex min-h-65 flex-col items-center rounded-[1.4rem] border-2 border-[#1ea96b] bg-[#001408] px-6 py-7 text-center text-white">
              <ArrowUpRight size={48} className="text-[#1ea96b]" />
              <h3 className="mt-5 text-4xl font-clash leading-tight">
                A Solução
              </h3>
              <p
                className={`${poppins.className} mt-4 text-xl leading-8 text-white/65`}
              >
                Método estruturado com foco em incidência ENEM e planejamento
                claro. Acompanhamento próximo para evoluir com consistência.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="w-screen bg-[#001408] px-4 py-14 text-white md:px-6 md:py-18 lg:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-center text-4xl font-clash leading-tight tracking-tight md:text-6xl">
            Nossos Professores
          </h2>

          <p
            className={`${poppins.className} mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-white/75 md:text-lg md:leading-8`}
          >
            Um time com vivencia real de sala de aula e estrategia para
            transformar preparo em aprovacao.
          </p>

          <TeachersCarousel data={teachersData} />
        </div>
      </section>

      <StudyStepsSection />

      <section className="w-screen bg-[radial-gradient(circle_at_top_right,#217040_0%,#001408_55%)] px-4 py-16 text-white md:py-24">
        <div className="mx-auto w-full max-w-6xl rounded-t-[2.2rem] pt-6 text-center md:pt-10">
          <h2 className="mx-auto max-w-5xl text-3xl font-clash leading-[1.1] tracking-tight md:text-5xl">
            Essa e a sua chance de
            <br />
            comecar com vantagem
          </h2>

          <p
            className={`${poppins.className} mx-auto mt-6 max-w-4xl text-base leading-7 text-white/75 md:text-xl md:leading-10`}
          >
            As vagas para a turma inaugural sao limitadas para garantir atencao
            ao aluno. e as condicoes especiais nao vao durar para sempre. Quem
            entra agora garante beneficios exclusivos que nao estarao
            disponiveis depois.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <article className="flex flex-col items-center text-center">
              <Clock3 size={56} className="text-[#1ea96b]" />
              <h3 className="mt-5 text-xl font-clash leading-tight md:text-3xl">
                Turmas inaugurais com
                <br />
                vagas limitadas.
              </h3>
            </article>

            <article className="flex flex-col items-center text-center">
              <Users size={56} className="text-[#1ea96b]" />
              <h3 className="mt-5 text-xl font-clash leading-tight md:text-3xl">
                Turma reduzida
                <br />e exclusiva
              </h3>
            </article>

            <article className="flex flex-col items-center text-center">
              <Shield size={56} className="text-[#1ea96b]" />
              <h3 className="mt-5 text-xl font-clash leading-tight md:text-3xl">
                Desconto para Jovens
                <br />
                Aprendizes
              </h3>
            </article>
          </div>

          <div className="mt-14 flex justify-center">
            <Button
              Icon={ArrowUpRight}
              cn="bg-white text-[#001408] shadow-[0_8px_20px_rgba(0,20,8,0.35)] hover:bg-white/90"
              cnText="font-semibold"
              cnIcon="bg-[#001408] text-white"
            >
              GARANTIR MINHA VAGA
            </Button>
          </div>
        </div>
      </section>
      <section className="w-screen rounded-t-[2.6rem] bg-[#d8d8d8] px-4 py-14 text-[#1a1a1a] md:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-center text-3xl font-clash leading-[1.08] tracking-tight text-[#173225] md:text-5xl">
            Quem passou pelo
            <br />
            Acaiaca, aprova.
          </h2>

          <p
            className={`${poppins.className} mx-auto mt-5 max-w-4xl text-center text-base leading-7 text-[#173225]/80 md:text-xl md:leading-10`}
          >
            Veja o que nossos alunos dizem sobre a experiencia de estudar com a
            gente.
          </p>

          <TestimonialsCarousel data={testimonialsData} />
        </div>
      </section>

      <FaqSection />

      <LocationSection />

      <footer className="w-full bg-[#001408] ">
        <div className="mx-auto w-full  rounded-t-[2.4rem] bg-[#d8d8d8] px-6 pt-8 pb-7 text-[#173225] md:px-10 md:pt-10 md:pb-9">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
            <div>
              <Image
                src="/logoblack.png"
                alt="Acaiaca"
                width={190}
                height={56}
                className="h-auto w-42.5 md:w-47.5"
              />

              <p
                className={`${poppins.className} mt-4 max-w-sm text-base leading-7 text-[#173225]/75 md:text-xl md:leading-9`}
              >
                Transformando a preparação para vestibulares com método,
                dedicação e resultados.
              </p>
            </div>

            <div className="text-left md:text-center">
              <p
                className={`${poppins.className} text-base leading-7 text-[#173225]/75 md:text-xl md:leading-9`}
              >
                Edificio Acaiaca
                <br />
                Avenida Afonso Pena, 867
                <br />
                Centro - Belo Horizonte/MG
                <br />
                CEP: 30130-002
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-[#173225]/60 pt-6 md:mt-9 md:pt-7">
            <p
              className={`${poppins.className} text-center text-sm text-[#173225]/70 md:text-lg`}
            >
              © 2026 Acaiaca. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
