export default function Sites() {
  return (
    <section
      id="sites"
      aria-labelledby="sites-title"
      className="mt-16 w-full border-t border-zinc-800 pt-8"
    >
      <h2
        id="sites-title"
        className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white"
      >
        Criação de Sites
      </h2>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        Desenvolvemos sites modernos, responsivos e otimizados para SEO.
        Integramos formulários, WhatsApp, Google Analytics e automações com n8n
        para capturar leads e acelerar seu atendimento.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h3 className="text-white font-semibold">Landing Pages</h3>
          <p className="mt-2 text-zinc-300">
            Páginas de alta conversão com integração de captura de leads e
            automações.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h3 className="text-white font-semibold">Sites Institucionais</h3>
          <p className="mt-2 text-zinc-300">
            Presença digital profissional com conteúdo organizado e performance.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h3 className="text-white font-semibold">Integrações & SEO</h3>
          <p className="mt-2 text-zinc-300">
            Otimização para buscadores, métricas e integrações com WhatsApp e
            n8n.
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-zinc-800 pt-8">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">
            Plano Básico – Landing Page Profissional
          </h3>
          <p className="mt-2 text-zinc-300">
            Ideal para quem precisa de uma página única com foco em conversão.
          </p>
          <span className="mt-3 inline-flex w-fit rounded-full bg-red-600/10 text-red-400 px-3 py-1 text-sm font-semibold">
            R$ 1.490 • pagamento único
          </span>
          <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
            <li>Até 1 página (seções hero, sobre, serviços, CTA)</li>
            <li>Layout responsivo e otimizado para performance</li>
            <li>Formulário integrado (email/WhatsApp)</li>
            <li>SEO on-page básico (títulos, metas, sitemap)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">
            Plano Padrão – Site Institucional
          </h3>
          <p className="mt-2 text-zinc-300">
            Presença completa para empresas com páginas essenciais.
          </p>
          <span className="mt-3 inline-flex w-fit rounded-full bg-red-600/10 text-red-400 px-3 py-1 text-sm font-semibold">
            R$ 2.990 • pagamento único
          </span>
          <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
            <li>Até 5 páginas (Home, Sobre, Serviços, Contato, etc.)</li>
            <li>CMS simples para edição de conteúdo</li>
            <li>Integração com WhatsApp e formulários</li>
            <li>SEO on-page e performance (Core Web Vitals)</li>
            <li>Configuração inicial de domínio e hospedagem</li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-sm">
          <h3 className="text-white font-bold text-xl">
            Plano Premium – Projeto Avançado/E‑commerce
          </h3>
          <p className="mt-2 text-zinc-300">
            Para projetos robustos, com blog, integrações e customizações.
          </p>
          <span className="mt-3 inline-flex w-fit rounded-full bg-red-600/10 text-red-400 px-3 py-1 text-sm font-semibold">
            R$ 5.990 • pagamento único
          </span>
          <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
            <li>Até 12 páginas ou catálogo de produtos</li>
            <li>Integrações avançadas (pagamentos, CRM, chat)</li>
            <li>Blog com categorias e SEO técnico</li>
            <li>Otimizações avançadas de performance e acessibilidade</li>
            <li>Monitoramento (Analytics/Tag Manager) e relatórios</li>
            <li>30 dias de suporte pós-entrega</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
        <p className="text-zinc-300 text-sm">
          Observação: Podemos hospedar seu site por um valor mensal ou
          configurar na sua própria hospedagem. O domínio deve ser adquirido
          pelo cliente. Orientamos em todo o processo, indicando o que precisa
          ser feito e as melhores opções para o seu projeto.
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <a
          className="inline-flex h-11 items-center justify-center rounded-full bg-red-600 px-5 text-white font-semibold transition-colors hover:bg-red-500"
          href="https://wa.me/5534999426661?text=Quero%20um%20site%20profissional"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar proposta
        </a>
      </div>
    </section>
  );
}
