import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const LocationSection = () => {
  return (
    <section className="w-screen bg-[radial-gradient(circle_at_top_right,#217040_0%,#001408_58%)] px-4 py-16 text-white md:py-24">
      <div className="mx-auto w-full max-w-6xl text-center">
        <h2 className="text-4xl font-clash leading-tight tracking-tight text-white/80 md:text-6xl">
          Onde acontecem as aulas?
        </h2>

        <p
          className={`${poppins.className} mx-auto mt-5 max-w-5xl text-base leading-7 text-white/65 md:text-xl md:leading-10`}
        >
          As aulas presenciais do Acaiaca acontecem no iconico Edificio Acaiaca,
          um dos predios mais tradicionais de Belo Horizonte, localizado no
          coracao do Centro da cidade.
        </p>

        <div className="mt-12 overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#0e6f44]/60 shadow-[0_24px_50px_rgba(0,0,0,0.35)]">
          <iframe
            title="Mapa Edificio Acaiaca"
            src="https://www.google.com/maps?q=Edif%C3%ADcio%20Acaiaca%2C%20Belo%20Horizonte&output=embed"
            className="h-[330px] w-full md:h-[560px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
