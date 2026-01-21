export default function N8NSection() {
  return (
    <section id="n8n" className="mt-16 w-full border-t border-zinc-800 pt-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
        O que é o n8n?
      </h2>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        O n8n é uma ferramenta que conecta diferentes sistemas e automatiza
        tarefas do dia a dia da empresa. Ele ajuda a reduzir trabalho manual,
        organizar informações e executar ações automaticamente, como enviar
        emails, atualizar planilhas e criar alertas.
      </p>
      <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
        <li>Integra processos sem complicação</li>
        <li>Economiza tempo e evita erros repetitivos</li>
        <li>Gera relatórios e notificações automáticas</li>
        <li>Conecta planilhas, emails e bancos de dados</li>
        <li>Escala conforme a empresa cresce</li>
      </ul>
      <div className="mt-6">
        <a
          className="inline-flex h-11 items-center justify-center rounded-full bg-red-600 px-5 text-white font-semibold transition-colors hover:bg-red-500"
          href="https://wa.me/5534999426661?text=Quero%20entender%20melhor%20o%20n8n%20para%20minha%20empresa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tirar dúvidas sobre n8n
        </a>
      </div>
    </section>
  );
}
