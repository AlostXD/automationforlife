export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="mt-20 w-full border-t border-zinc-800 pt-8"
    >
      <h2
        id="servicos-title"
        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center sm:text-left mb-6"
      >
        Serviços
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">Sites</h3>
          <p className="mt-2 text-zinc-300">Landing pages e sites completos para vender ou apresentar seu negócio. Design responsivo, hospedagem e suporte.</p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">Automação de processos</h3>
          <p className="mt-2 text-zinc-300">Tarefas repetitivas (como preencher planilhas ou enviar arquivos) feitas automaticamente, para você economizar tempo.</p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">WhatsApp profissional</h3>
          <p className="mt-2 text-zinc-300">Atendimento e envio de mensagens automáticas para clientes, com fluxos simples para facilitar vendas e suporte.</p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">E‑mail e notificações</h3>
          <p className="mt-2 text-zinc-300">Envio de avisos, lembretes e campanhas por e‑mail sem trabalho manual.</p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">Conectar suas ferramentas</h3>
          <p className="mt-2 text-zinc-300">Fazemos suas planilhas, sistemas e apps conversarem entre si — tudo automático.</p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">Financeiro e contabilidade</h3>
          <p className="mt-2 text-zinc-300">Organizamos notas, lembretes fiscais e enviamos os dados certos para o seu contador, sem que você tenha trabalho extra.</p>
        </div>
      </div>
    </section>
  );
}
