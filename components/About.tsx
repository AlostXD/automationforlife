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
      <Cards imageName="maria" Name="Maria Eduarda Radtke Pereira" email="dudaradtkelt@gmail.com" phone="+34 655 40 71 85" role="COO" internalRole="Marketing"/>
      <Cards imageName="alisson" Name="Alisson Luis Borges Oliveira" email="alissonluis2009@gmail.com" phone="+55 34 99839-0474" role="CIO" internalRole="Suporte"/>
      <Cards imageName="manu" Name="Emanuely Moreira da Conceição" email="emanuely.moreira7@Outlook.com" phone="+55 27 99887-9921" role="CMO" internalRole="Designer & Social Media"/>
      </div>
    </section>
  );
}
