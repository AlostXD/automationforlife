export default function Plans() {
  return (
    <section
      id="planos"
      aria-labelledby="planos-title"
      className="mt-20 w-full border-t border-zinc-800 pt-8"
    >
      <h2
        id="planos-title"
        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center sm:text-left"
      >
        Planos de Serviço
      </h2>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        Soluções de automação para pequenas e médias empresas, com foco em
        reduzir trabalho manual, gerar relatórios automáticos e criar alertas
        inteligentes.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">
            Plano Básico – Automação de Relatórios
          </h3>
          <p className="mt-2 text-zinc-300">
            Ideal para iniciar com automações simples e relatórios automáticos.
          </p>
          <span className="mt-3 inline-flex w-fit rounded-full bg-red-600/10 text-red-400 px-3 py-1 text-sm font-semibold">
            R$ 119 • pagamento único
          </span>
          <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
            <li>Relatórios automáticos a partir de planilhas</li>
            <li>Envio de relatórios por email</li>
            <li>Agendamento mensal ou semanal</li>
            <li>Processamento simples de dados</li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">
            Plano Padrão – Automação Empresarial
          </h3>
          <p className="mt-2 text-zinc-300">
            Automação recorrente com consolidação e distribuição de informações.
          </p>
          <span className="mt-3 inline-flex w-fit rounded-full bg-red-600/10 text-red-400 px-3 py-1 text-sm font-semibold">
            R$ 299 • pagamento único
          </span>
          <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
            <li>Relatórios automáticos recorrentes</li>
            <li>Cálculos e consolidação de dados</li>
            <li>Envio para múltiplos emails</li>
            <li>Alertas condicionais (ex: valores fora do padrão)</li>
            <li>Tratamento básico de erros</li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">
            Plano Premium – Automação Avançada & Integrações
          </h3>
          <p className="mt-2 text-zinc-300">
            Para operações mais robustas, com integrações e monitoramento.
          </p>
          <span className="mt-3 inline-flex w-fit rounded-full bg-red-600/10 text-red-400 px-3 py-1 text-sm font-semibold">
            R$ 599 • pagamento único
          </span>
          <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
            <li>Automação avançada de processos</li>
            <li>Integração com banco de dados</li>
            <li>Múltiplas fontes de dados</li>
            <li>Alertas inteligentes</li>
            <li>Monitoramento e logs</li>
            <li>Suporte pós-entrega</li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-zinc-400 text-sm border-t border-zinc-800 pt-4">
        Observação: Quando a automação é hospedada na infraestrutura do
        prestador do serviço, é cobrada uma mensalidade adicional para
        hospedagem, manutenção e monitoramento.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          className="flex h-12 items-center justify-center rounded-full bg-red-600 px-6 text-white font-semibold transition-colors hover:bg-red-500"
          href="https://wa.me/5534999426661?text=Solicitar%20uma%20conversa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar uma conversa
        </a>
        <a
          className="flex h-12 items-center justify-center rounded-full border border-red-600 px-6 text-red-500 bg-black font-semibold transition-colors hover:bg-red-600 hover:text-white"
          href="https://wa.me/5534999426661?text=Falar%20sobre%20meu%20projeto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar sobre meu projeto
        </a>
      </div>
    </section>
  );
}
