export default function About() {
  return (
    <section id="sobre" className="mt-12 w-full border-t border-zinc-800 pt-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
        Sobre a equipe
      </h2>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        Somos uma equipe dedicada a transformar rotinas em processos
        automatizados simples e confiáveis. Unimos experiência prática em
        automação com foco em reduzir tarefas repetitivas, organizar informações
        e gerar resultados claros por meio de relatórios e alertas inteligentes.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
          <h3 className="text-white font-semibold">Vanderlei Júnio Ribeiro</h3>
          <p className="mt-2 text-zinc-300">
            Automação de processos, integração com planilhas, emails e bancos de
            dados.
          </p>
          <ul className="mt-3 text-zinc-300 space-y-1">
            <li>
              WhatsApp:{" "}
              <a
                className="text-red-500 hover:underline"
                href="https://wa.me/5534999426661"
                target="_blank"
                rel="noopener noreferrer"
              >
                (+55) 34 99942-6661
              </a>
            </li>
            <li>
              E-mail:{" "}
              <a
                className="text-red-500 hover:underline"
                href="mailto:junio.ribeiro02@hotmail.com"
              >
                junio.ribeiro02@hotmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
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
        </div>
      </div>
      <p className="mt-6 text-zinc-300 max-w-3xl">
        Nosso objetivo é apoiar pequenas e médias empresas e equipes
        administrativas com soluções diretas, reduzindo custos e ganhando
        eficiência nos processos do dia a dia.
      </p>
    </section>
  );
}
