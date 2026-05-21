import Cards from "./Cards";

export default function About() {
  return (
    <section id="sobre" className="mt-12 w-full border-t border-zinc-800 pt-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
        Nossa equipe
      </h2>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        Somos uma equipe com foto total em entregar um produto de qualidade e que atenda às necessidades dos nossos clientes. Combinamos habilidades técnicas, criatividade e foco no cliente para transformar ideias em soluções digitais eficazes. Nosso compromisso é ajudar pequenas e médias empresas a crescerem e se destacarem no mercado por meio de automações inteligentes e sites profissionais.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Cards imageName="vanderlei" Name="Vanderlei Júnio Ribeiro" email="junio.ribeiro02@hotmail.com" phone="+55 34 99942-6661" role="CEO & CTO" internalRole="Desenvolvedor" website="https://portif-lio-zeta.vercel.app/" websiteName="Portfólio"/>
      <Cards imageName="maria" Name="Maria Eduarda Radtke Pereira" email="dudaradtkelt@gmail.com" phone="+34 655 40 71 85" role="CMO" internalRole="Marketing & Suporte"/>
        {/* <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
          <h3 className="text-white font-semibold">
            Alisson Luis Borges Oliveira
          </h3>
          <p className="mt-2 text-zinc-300">
            Suporte, organização de dados e automação aplicada ao dia a dia das
            empresas.
          </p>
          <ul className="mt-3 text-zinc-300 space-y-1">
            <li>
              WhatsApp:{" "}
              <a
                className="text-red-500 hover:underline"
                href="https://wa.me/553498390474"
                target="_blank"
                rel="noopener noreferrer"
              >
                (+55) 34 99839-0474
              </a>
            </li>
            <li>
              E-mail:{" "}
              <a
                className="text-red-500 hover:underline"
                href="mailto:alissonluis2009@gmail.com"
              >
                alissonluis2009@gmail.com
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}
