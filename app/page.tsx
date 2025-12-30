import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-24 px-6 bg-black sm:items-start">
        {/* HERO */}
        <section className="w-full flex flex-col gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Image
              className=""
              src="/logoAlost.png"
              alt="Automation For Life - Logotipo"
              width={80}
              height={20}
              priority
            />
            <span className="text-red-500 font-bold text-xl">
              Automation For Life
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Automação inteligente com N8N para seu negócio
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300">
            Automatizamos Google Sheets, mensagens no WhatsApp, envio de
            e-mails, integrações com I.A, fluxo de trabalhos da empresa,
            contabilidade e muito mais. Reduza custos, elimine tarefas
            repetitivas e acelere resultados com automações escaláveis.
          </p>
          <div className="flex flex-col justify-center sm:flex-row gap-4">
            <a
              className="flex h-12 items-center justify-center rounded-full bg-red-600 px-6 text-white font-semibold transition-colors hover:bg-red-500"
              href="https://wa.me/5547999999999?text=Quero%20automatizar%20meu%20neg%C3%B3cio%20com%20N8N"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
            <a
              className="flex h-12 items-center justify-center rounded-full border border-red-600 px-6 text-red-500 bg-black font-semibold transition-colors hover:bg-red-600 hover:text-white"
              href="#servicos"
            >
              Ver Serviços
            </a>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="servicos"
          className="mt-16 w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Google Sheets */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-white font-bold text-xl">
              Automação com Google Sheets
            </h3>
            <p className="mt-2 text-zinc-300">
              Atualizações automáticas, consolidação de dados, geração de
              relatórios e integração com CRMs, ERPs e APIs, tudo orquestrado no
              N8N.
            </p>
          </div>
          {/* WhatsApp */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-white font-bold text-xl">
              Mensagens no WhatsApp
            </h3>
            <p className="mt-2 text-zinc-300">
              Disparo de mensagens, respostas automáticas, funis e atendimento
              assistido por I.A, integrando provedores oficiais e gateways.
            </p>
          </div>
          {/* Emails */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-white font-bold text-xl">Envio de E-mails</h3>
            <p className="mt-2 text-zinc-300">
              Campanhas, notificações transacionais e sequências automáticas com
              rastreamento, personalização e templates.
            </p>
          </div>
          {/* I.A */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-white font-bold text-xl">I.A aplicada</h3>
            <p className="mt-2 text-zinc-300">
              Classificação de dados, geração de textos, análise de sentimentos
              e assistentes inteligentes conectados aos seus sistemas.
            </p>
          </div>
          {/* Empresa */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-white font-bold text-xl">Fluxos da Empresa</h3>
            <p className="mt-2 text-zinc-300">
              Integrações entre equipes, aprovações, sincronização de sistemas e
              automação de processos fim a fim com painéis de monitoramento.
            </p>
          </div>
          {/* Contabilidade */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-white font-bold text-xl">Contabilidade</h3>
            <p className="mt-2 text-zinc-300">
              Conciliação, organização de notas, lembretes fiscais e integração
              com plataformas contábeis, tudo sem esforço manual.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-zinc-700 px-6 text-white bg-black font-semibold transition-colors hover:bg-zinc-900"
            href="https://portif-lio-zeta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Portfólio
          </a>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 w-full border-t border-zinc-800 pt-6 text-zinc-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Automation For Life</span>
            <div className="flex gap-4">
              <a
                className="hover:text-red-500"
                href="https://n8n.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                N8N
              </a>
              <a
                className="hover:text-red-500"
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
              <a
                className="hover:text-red-500"
                href="https://wa.me/5534999426661"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
