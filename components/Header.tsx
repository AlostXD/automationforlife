"use client";

type HeaderProps = {
  onOpenMobile: () => void;
};

export default function Header({ onOpenMobile }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-zinc-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-2 text-white font-semibold px-4 py-2"
        >
          <span className="text-red-500 text-lg sm:text-2xl font-bold">
            Automation For Life
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-4 text-zinc-300 text-sm sm:text-base">
          <a href="#inicio" className="hover:text-white transition-colors px-1">
            Início
          </a>
          <a
            href="#servicos"
            className="hover:text-white transition-colors px-1"
          >
            Serviços
          </a>
          <a href="#planos" className="hover:text-white transition-colors px-1">
            Planos
          </a>
          <a href="#n8n" className="hover:text-white transition-colors px-1">
            O que é n8n
          </a>
          <a href="#sobre" className="hover:text-white transition-colors px-1">
            Sobre
          </a>
          <a
            href="#contato"
            className="hover:text-white transition-colors px-1"
          >
            Contatos
          </a>
          <a href="#sites" className="hover:text-white transition-colors px-1">
            Sites
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Abrir menu"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition"
          onClick={onOpenMobile}
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
  );
}
