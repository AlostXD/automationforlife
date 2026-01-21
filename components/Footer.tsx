export default function Footer() {
  return (
    <footer
      id="contato"
      className="mt-24 w-full border-t border-zinc-800 pt-6 text-zinc-400"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="col-span-1">
          <h3 className="text-white font-semibold">Fale Conosco</h3>
          <p className="mt-2">
            Vanderlei (WhatsApp):{" "}
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
            Vanderlei (E-mail):{" "}
            <a
              className="text-red-500 hover:underline"
              href="mailto:junio.ribeiro02@hotmail.com"
            >
              junio.ribeiro02@hotmail.com
            </a>
          </p>
          <p className="mt-4">
            Alisson (WhatsApp):{" "}
            <a
              className="text-red-500 hover:underline"
              href="https://wa.me/553498390474"
              target="_blank"
              rel="noopener noreferrer"
            >
              (+55) 34 99839-0474
            </a>
          </p>
          <p className="mt-1">
            Alisson (E-mail):{" "}
            <a
              className="text-red-500 hover:underline"
              href="mailto:alissonluis2009@gmail.com"
            >
              alissonluis2009@gmail.com
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
            <li>
              <a className="hover:text-red-500" href="#sites">
                Sites
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
  );
}
