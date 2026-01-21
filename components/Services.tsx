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
          <h3 className="text-white font-bold text-xl">
            Automação com Google Sheets
          </h3>
          <p className="mt-2 text-zinc-300">
            Atualizações automáticas, consolidação de dados, geração de
            relatórios e integração com CRMs, ERPs e APIs, tudo orquestrado no
            N8N.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">
            Mensagens no WhatsApp
          </h3>
          <p className="mt-2 text-zinc-300">
            Disparo de mensagens, respostas automáticas, funis e atendimento
            assistido por I.A, integrando provedores oficiais e gateways.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">Envio de E-mails</h3>
          <p className="mt-2 text-zinc-300">
            Campanhas, notificações transacionais e sequências automáticas com
            rastreamento, personalização e templates.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">I.A aplicada</h3>
          <p className="mt-2 text-zinc-300">
            Classificação de dados, geração de textos, análise de sentimentos e
            assistentes inteligentes conectados aos seus sistemas.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">Fluxos da Empresa</h3>
          <p className="mt-2 text-zinc-300">
            Integrações entre equipes, aprovações, sincronização de sistemas e
            automação de processos fim a fim com painéis de monitoramento.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">Contabilidade</h3>
          <p className="mt-2 text-zinc-300">
            Conciliação, organização de notas, lembretes fiscais e integração
            com plataformas contábeis, tudo sem esforço manual.
          </p>
        </div>
      </div>
    </section>
  );
}
