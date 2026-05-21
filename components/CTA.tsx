import Link from "next/link";

export default function CTA() {
  return (
    <section className="mt-20 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* <a
        className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-zinc-700 px-6 text-white bg-transparent font-semibold transition-colors hover:bg-zinc-900 hover:border-zinc-600"
        href="https://portif-lio-zeta.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Portfólio
      </a> */}
      
      <p className="mt-8 text-zinc-400 text-sm">
        <span className="font-bold text-red-700">Importante:</span> Todos os planos possuem suporte pós-entrega, como previsto no Código de Defesa do Consumidor, para garantir que a solução atenda às suas necessidades e funcione corretamente em um período de 90 dias após a entrega. Acesse nossa <Link href="/termos" className="text-red-500 hover:text-red-700 hover:underline">Política de Suporte e Garantia</Link> para mais detalhes.
      </p>
    </section>
  );
}
