"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* HEADER/NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-zinc-800">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-between">
          <a
            href="#inicio"
            className="flex items-center gap-2 text-white font-semibold"
          >
            <Image
              src="/logoAlost.png"
              alt="Automation For Life - Logotipo"
              width={110}
              height={36}
              priority
            />
            <span className="text-red-500 text-sm sm:text-base">
              Automation For Life - Vanderlei Júnio Ribeiro
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-4 text-zinc-300 text-sm sm:text-base">
            <a
              href="#inicio"
              className="hover:text-white transition-colors px-1"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="hover:text-white transition-colors px-1"
            >
              Serviços
            </a>
            <a
              href="#planos"
              className="hover:text-white transition-colors px-1"
            >
              Planos
            </a>
            <a href="#n8n" className="hover:text-white transition-colors px-1">
              O que é n8n
            </a>
            <a
              href="#sobre"
              className="hover:text-white transition-colors px-1"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="hover:text-white transition-colors px-1"
            >
              Contatos
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Abrir menu"
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition"
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile sidebar + overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside
            className="fixed top-0 left-0 z-[70] h-full w-72 max-w-[80vw] bg-zinc-950 border-r border-zinc-800 shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
              <a
                href="#inicio"
                className="flex items-center gap-2 text-white font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/logoAlost.png"
                  alt="Automation For Life - Logotipo"
                  width={110}
                  height={36}
                  priority
                />
                <span className="text-red-500">Automation For Life</span>
              </a>
              <button
                aria-label="Fechar menu"
                className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition"
                onClick={() => setMobileOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M18.3 5.71 12 12.01 5.7 5.7 4.29 7.11l6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z" />
                </svg>
              </button>
            </div>
            <nav className="px-4 py-4">
              <ul className="space-y-2 text-zinc-300">
                <li>
                  <a
                    className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                    href="#inicio"
                    onClick={() => setMobileOpen(false)}
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                    href="#servicos"
                    onClick={() => setMobileOpen(false)}
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                    href="#planos"
                    onClick={() => setMobileOpen(false)}
                  >
                    Planos
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                    href="#n8n"
                    onClick={() => setMobileOpen(false)}
                  >
                    O que é n8n
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                    href="#sobre"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                    href="#contato"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contatos
                  </a>
                </li>
              </ul>
              <div className="mt-4 border-t border-zinc-800 pt-4">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-full bg-red-600 px-4 text-white font-semibold transition-colors hover:bg-red-500"
                  href="https://wa.me/5534999426661?text=Quero%20falar%20sobre%20automacao"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  Falar no WhatsApp
                </a>
              </div>
            </nav>
          </aside>
        </>
      )}

      <main
        id="inicio"
        className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-28 sm:py-32 px-6 sm:px-8 bg-transparent sm:items-start"
      >
        {/* HERO */}
        <section
          aria-labelledby="hero-title"
          className="w-full flex flex-col gap-6 text-center sm:text-left pt-10"
        >
          {/* <div className="flex items-center justify-center sm:justify-start gap-3">
            <Image
              className=""
              src="/logoAlost.png"
              alt="Automation For Life - Logotipo"
              width={150}
              height={50}
              priority
            />
            <span className="text-red-500 font-bold text-xl sm:text-2xl">
              Automation For Life - Vanderlei Júnio Ribeiro
            </span>
          </div> */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Automação inteligente com N8N para seu negócio
          </h1>
          <p className="mx-auto sm:mx-0 max-w-3xl text-base sm:text-lg leading-8 text-zinc-300">
            Automatização de Google Sheets, mensagens no WhatsApp, envio de
            e-mails, integrações com I.A, fluxo de trabalhos da empresa,
            contabilidade e muito mais. Reduza custos, elimine tarefas
            repetitivas e acelere resultados com automações escaláveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 justify-center sm:justify-start">
            <a
              className="flex h-12 items-center justify-center rounded-full bg-red-600 px-6 text-white font-semibold transition-colors hover:bg-red-500"
              href="https://wa.me/5547999999999?text=Quero%20automatizar%20meu%20neg%C3%B3cio%20com%20N8N"
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

        {/* FEATURES / SERVIÇOS */}
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
                relatórios e integração com CRMs, ERPs e APIs, tudo orquestrado
                no N8N.
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
                Campanhas, notificações transacionais e sequências automáticas
                com rastreamento, personalização e templates.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
              <h3 className="text-white font-bold text-xl">I.A aplicada</h3>
              <p className="mt-2 text-zinc-300">
                Classificação de dados, geração de textos, análise de
                sentimentos e assistentes inteligentes conectados aos seus
                sistemas.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
              <h3 className="text-white font-bold text-xl">
                Fluxos da Empresa
              </h3>
              <p className="mt-2 text-zinc-300">
                Integrações entre equipes, aprovações, sincronização de sistemas
                e automação de processos fim a fim com painéis de monitoramento.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-colors shadow-sm">
              <h3 className="text-white font-bold text-xl">Contabilidade</h3>
              <p className="mt-2 text-zinc-300">
                Conciliação, organização de notas, lembretes fiscais e
                integração com plataformas contábeis, tudo sem esforço manual.
              </p>
            </div>
          </div>
        </section>

        {/* PLANOS DE SERVIÇO */}
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
            reduzir trabalho manual, gerar relatórios automáticos e criar
            alertas inteligentes.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-sm">
              <h3 className="text-white font-bold text-xl">
                Plano Básico – Automação de Relatórios
              </h3>
              <p className="mt-2 text-zinc-300">
                Ideal para iniciar com automações simples e relatórios
                automáticos.
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
                Automação recorrente com consolidação e distribuição de
                informações.
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

        {/* O QUE É O N8N */}
        <section
          id="n8n"
          className="mt-16 w-full border-t border-zinc-800 pt-8"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            O que é o n8n?
          </h2>
          <p className="mt-3 text-zinc-300 max-w-3xl">
            O n8n é uma ferramenta que conecta diferentes sistemas e automatiza
            tarefas do dia a dia da empresa. Ele ajuda a reduzir trabalho
            manual, organizar informações e executar ações automaticamente, como
            enviar emails, atualizar planilhas e criar alertas.
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

        {/* SOBRE (resumo curto) */}
        <section
          id="sobre"
          className="mt-12 w-full border-t border-zinc-800 pt-8"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Sobre mim
          </h2>
          <p className="mt-3 text-zinc-300 max-w-3xl">
            Transformo processos em fluxos automatizados simples e confiáveis,
            reduzindo tarefas repetitivas, organizando informações e gerando
            relatórios e alertas claros.
          </p>
          <p className="mt-2 text-zinc-300 max-w-3xl">
            Quer saber mais sobre mim? Acesse meu portifólio{" "}
            <a href="https://portif-lio-zeta.vercel.app/" className="text-red-500 hover:underline">clicando aqui</a> ou
            no botão abaixo.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-20 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-zinc-700 px-6 text-white bg-transparent font-semibold transition-colors hover:bg-zinc-900 hover:border-zinc-600"
            href="https://portif-lio-zeta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Portfólio
          </a>
        </section>

        {/* FOOTER com contato */}
        <footer
          id="contato"
          className="mt-24 w-full border-t border-zinc-800 pt-6 text-zinc-400"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="col-span-1">
              <h3 className="text-white font-semibold">Fale comigo</h3>
              <p className="mt-2">
                WhatsApp:{" "}
                <a
                  className="text-red-500 hover:underline"
                  href="https://wa.me/5534999426661"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (+55) 34 99942-6661
                </a>
              </p>
                <p className="mt-1">
                E-mail:{" "}
                <a
                  className="text-red-500 hover:underline"
                  href="mailto:junio.ribeiro02@hotmail.com"
                >
                  junio.ribeiro02@hotmail.com
                </a>
                </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-white font-semibold">Links úteis</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a className="hover:text-red-500" href="#servicos">
                    Serviços
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-500" href="#planos">
                    Planos
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-500" href="#n8n">
                    O que é n8n
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-white font-semibold">Tecnologias</h3>
              <div className="mt-2 flex gap-4">
                <a
                  className="hover:text-red-500"
                  href="https://n8n.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  N8N
                </a>
                <a
                  className="hover:text-red-500 transition-colors"
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
          </div>
          <div className="mt-8 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
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
                className="hover:text-red-500 transition-colors"
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
