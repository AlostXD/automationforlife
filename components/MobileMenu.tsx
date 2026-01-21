"use client";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
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
            onClick={onClose}
          >
            <span className="text-red-500">Automation For Life</span>
          </a>
          <button
            aria-label="Fechar menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition"
            onClick={onClose}
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
                onClick={onClose}
              >
                Início
              </a>
            </li>
            <li>
              <a
                className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                href="#servicos"
                onClick={onClose}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                href="#planos"
                onClick={onClose}
              >
                Planos
              </a>
            </li>
            <li>
              <a
                className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                href="#n8n"
                onClick={onClose}
              >
                O que é n8n
              </a>
            </li>
            <li>
              <a
                className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                href="#sobre"
                onClick={onClose}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                href="#contato"
                onClick={onClose}
              >
                Contatos
              </a>
            </li>
            <li>
              <a
                className="block rounded-md px-3 py-2 hover:bg-zinc-800 hover:text-white"
                href="#sites"
                onClick={onClose}
              >
                Sites
              </a>
            </li>
          </ul>
          <div className="mt-4 border-t border-zinc-800 pt-4">
            <a
              className="inline-flex h-10 items-center justify-center rounded-full bg-red-600 px-4 text-white font-semibold transition-colors hover:bg-red-500"
              href="https://wa.me/5534999426661?text=Quero%20falar%20sobre%20automacao"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
