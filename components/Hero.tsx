export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="w-full flex flex-col gap-6 text-center sm:text-left pt-10"
    >
      <h1
        id="hero-title"
        className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
      >
        Automação inteligente com N8N para seu negócio
      </h1>
      <p className="mx-auto sm:mx-0 max-w-3xl text-base sm:text-lg leading-8 text-zinc-300">
        Automatização de Google Sheets, mensagens no WhatsApp, envio de e-mails,
        integrações com I.A, fluxo de trabalhos da empresa, contabilidade e
        muito mais. Reduza custos, elimine tarefas repetitivas e acelere
        resultados com automações escaláveis.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 justify-center sm:justify-start">
        <a
          className="flex h-12 items-center justify-center rounded-full bg-red-600 px-6 text-white font-semibold transition-colors hover:bg-red-500"
          href="https://wa.me/5534999426661?text=Quero%20automatizar%20meu%20neg%C3%B3cio%20com%20N8N"
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar no WhatsApp
        </a>
        <a
          className="flex h-12 items-center justify-center rounded-full border border-red-600 px-6 text-red-500 bg-transparent font-semibold transition-colors hover:bg-red-600/10 hover:text-white"
          href="#servicos"
        >
          Ver Serviços
        </a>
      </div>
    </section>
  );
}
