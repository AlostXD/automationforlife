import Cards from "./Cards";

export default function About() {
  return (
    <section id="sobre" className="mt-12 w-full border-t border-zinc-800 pt-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
        Sobre a Noxys
      </h2>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        A Noxys nasceu no final de 2025 para facilitar a rotina de empresários. Começamos automatizando tarefas repetitivas que tomavam tempo — como atualizar planilhas, enviar notificações e organizar processos — para que donos de negócio pudessem focar no crescimento.
        Além disso, passamos a criar sites e landing pages para dar identidade visual profissional a empresas, com design prático, hospedagem e suporte. Trabalhamos para entregar soluções simples, úteis e sem complicação.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* 
      <Cards imageName="vanderlei" Name="Vanderlei Júnio Ribeiro" email="junio.ribeiro02@hotmail.com" phone="+55 34 99942-6661" role="CEO & CTO" internalRole="Desenvolvedor" website="https://portif-lio-zeta.vercel.app/" websiteName="Portfólio"/>
      <Cards imageName="maria" Name="Maria Eduarda Radtke Pereira" email="dudaradtkelt@gmail.com" phone="+34 655 40 71 85" role="COO" internalRole="Marketing"/>
      <Cards imageName="alisson" Name="Alisson Luis Borges Oliveira" email="alissonluis2009@gmail.com" phone="+55 34 99839-0474" role="CIO" internalRole="Suporte"/>
      <Cards imageName="manu" Name="Emanuely Moreira da Conceição" email="emanuely.moreira7@Outlook.com" phone="+55 27 99887-9921" role="CMO" internalRole="Designer & Social Media"/>
       */}
      </div>
    </section>
  );
}
