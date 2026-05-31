"use client";
import { useState } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";

export default function Termos() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans bg-gradient-to-b from-black via-zinc-900 to-black">
      <Header onOpenMobile={() => setMobileOpen(true)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main
        id="inicio"
        className="flex min-h-screen w-full max-w-6xl flex-col py-28 sm:py-32 px-6 sm:px-8"
      >
        <div className="w-full">
          <div className="mb-14 border-b border-zinc-800 pb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-600 tracking-tight">
              Política de Suporte e Garantia
            </h1>

            <p className="mt-4 text-zinc-400 text-sm sm:text-base">
              Última atualização: 21 (vinte e um) de Maio de 2026
            </p>

            <p className="mt-8 text-zinc-300 leading-8 text-base sm:text-lg max-w-4xl">
              A presente Política de Suporte e Garantia tem como objetivo estabelecer de forma transparente as condições de atendimento, suporte técnico, manutenção e garantia dos serviços prestados pela Noxys Studio, respeitando os princípios do Código de Defesa do Consumidor.
            </p>
          </div>

          <div className="space-y-14">
            <section>
              <h2 className="text-2xl font-semibold text-red-600 mb-5">
                1. Sobre os Serviços Prestados
              </h2>

              <p className="text-zinc-300 leading-8 mb-5">
                A Noxys Studio atua no desenvolvimento de soluções digitais, incluindo:
              </p>

              <ul className="grid sm:grid-cols-2 gap-4 text-zinc-300">
                {[
                  "Landing Pages",
                  "Sites institucionais",
                  "Sistemas personalizados",
                  "Interfaces web",
                  "Automações",
                  "Integrações",
                  "Soluções digitais sob demanda",
                  "Painéis administrativos",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="bg-zinc-900/60 border border-zinc-800 rounded-2xl px-5 py-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-600 mb-5">
                2. Garantia dos Serviços
              </h2>

              <p className="text-zinc-300 leading-8 mb-6">
                Todos os serviços desenvolvidos possuem garantia referente a erros técnicos diretamente relacionados ao desenvolvimento realizado.
              </p>

              <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-red-600 mb-5">
                  A garantia cobre:
                </h3>

                <ul className="space-y-4 text-zinc-300 leading-7">
                  <li>• Correção de erros de programação (Causados pelo código desenvolvido pela nossa empresa <span className="text-red-500">Noxys</span>. Erros causados por terceiros não estão incluídos)</li>
                  <li>• Problemas de funcionamento causados pelo código desenvolvido</li>
                  <li>• Ajustes relacionados ao funcionamento originalmente contratado</li>
                  <li>• Falhas técnicas que impeçam o uso correto da funcionalidade entregue</li>
                </ul>
              </div>

              <p className="mt-6 text-zinc-300 leading-8">
                O período padrão de garantia é de 7 (sete) dias corridos após a entrega oficial do projeto, salvo quando acordado prazo diferente entre as partes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-600 mb-5">
                3. Situações Não Cobertas Pela Garantia
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Alterações solicitadas após aprovação do projeto",
                  "Mudanças de layout ou identidade visual",
                  "Inclusão de novas funcionalidades",
                  "Problemas causados por terceiros",
                  "Alterações feitas pelo cliente no sistema",
                  "Problemas de hospedagem ou serviços externos",
                  "Falhas causadas por plugins ou integrações externas",
                  "Problemas decorrentes de mau uso da plataforma",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 text-zinc-300 leading-7"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-600 mb-5">
                4. Suporte Técnico
              </h2>

              <p className="text-zinc-300 leading-8 mb-5">
                O suporte técnico tem como finalidade auxiliar o cliente em questões relacionadas ao funcionamento do serviço entregue.
              </p>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8">
                <ul className="space-y-4 text-zinc-300 leading-7">
                  <li>• Orientações básicas de utilização</li>
                  <li>• Correção de falhas técnicas</li>
                  <li>• Auxílio relacionado à entrega realizada</li>
                  <li>• Verificação de problemas técnicos reportados</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-600 mb-5">
                5. Alterações e Novas Funcionalidades
              </h2>

              <p className="text-zinc-300 leading-8">
                Após a aprovação e entrega do projeto, qualquer solicitação adicional poderá ser considerada uma nova demanda. Funcionalidades, integrações, páginas adicionais, mudanças estruturais ou modificações não previstas inicialmente poderão gerar custos adicionais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-600 mb-5">
                6. Responsabilidades do Cliente
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Fornecer informações corretas para desenvolvimento do projeto",
                  "Revisar o material enviado antes da aprovação final",
                  "Manter seus acessos e credenciais em segurança",
                  "Contratar e manter domínio e hospedagem quando necessário",
                  "Utilizar o sistema de forma adequada e legal",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 text-zinc-300 leading-7"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-600 mb-5">
                7. Cancelamentos e Reembolsos
              </h2>

              <p className="text-zinc-300 leading-8">
                Em serviços digitais personalizados iniciados sob solicitação do cliente, o reembolso poderá não ser integral após o início do desenvolvimento, considerando o tempo técnico já investido.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-600 mb-5">
                8. Aprovação e Entrega
              </h2>

              <p className="text-zinc-300 leading-8 mb-5">
                A entrega será considerada concluída após:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Aprovação do cliente",
                  "Publicação do projeto",
                  "Envio oficial dos arquivos",
                  "Disponibilização do acesso acordado",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 text-zinc-300 leading-7"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-600 mb-5">
                9. Serviços de Terceiros
              </h2>

              <p className="text-zinc-300 leading-8">
                Alguns projetos podem depender de serviços externos como hospedagens, APIs, gateways de pagamento, plugins e plataformas terceiras. A Noxys Studio não possui responsabilidade sobre falhas, interrupções ou limitações causadas por serviços externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-600 mb-5">
                10. Atualizações Desta Política
              </h2>

              <p className="text-zinc-300 leading-8">
                A Noxys Studio poderá atualizar esta Política de Suporte e Garantia a qualquer momento visando melhorias, adequações legais ou operacionais.
              </p>
            </section>

            <section className="mt-16 bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-red-600 mb-5">
                Contato
              </h2>

              <p className="text-zinc-300 leading-8 mb-6">
                Em caso de dúvidas, solicitações ou suporte, entre em contato através dos canais oficiais da Noxys Studio.
              </p>

              <a
                href="https://www.automationforlife.cloud/"
                target="_blank"
                className="text-red-600 hover:text-red-500 transition-colors text-lg font-medium"
              >
                https://www.automationforlife.cloud/
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
