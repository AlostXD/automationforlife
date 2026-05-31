import Image from "next/image";

import Carousel from "./Carousel";

type PortfolioProject = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "Landing de Conversão",
    description: "Página criada para captar leads e transformar visitas em contatos.",
    image: "/portfolio/landing-1.svg",
    alt: "Preview de landing page de conversão",
    href: "/portfolio/landing-1.svg",
  },
  {
    id: 2,
    title: "Portal Corporativo",
    description: "Site institucional com foco em autoridade, credibilidade e organização.",
    image: "/portfolio/site-1.svg",
    alt: "Preview de portal corporativo",
    href: "/portfolio/site-1.svg",
  },
  {
    id: 3,
    title: "Automação Interna",
    description: "Fluxo para cortar tarefas repetitivas e devolver tempo ao time.",
    image: "/portfolio/automation-1.svg",
    alt: "Preview de automação interna",
    href: "/portfolio/automation-1.svg",
  },
  {
    id: 4,
    title: "Landing Campanha",
    description: "Página para campanhas, com foco em captar interesse e gerar ação.",
    image: "/portfolio/campaign-1.svg",
    alt: "Preview de landing para campanha",
    href: "/portfolio/campaign-1.svg",
  },
  {
    id: 5,
    title: "Site Comercial",
    description: "Página para mostrar serviços com clareza e converter visitantes em contatos.",
    image: "/portfolio/site-2.svg",
    alt: "Preview de site comercial",
    href: "/portfolio/site-2.svg",
  },
  {
    id: 6,
    title: "Fluxo Automatizado",
    description: "Estrutura para automatizar tarefas do dia a dia e reduzir trabalho manual.",
    image: "/portfolio/automation-2.svg",
    alt: "Preview de fluxo automatizado",
    href: "/portfolio/automation-2.svg",
  },
  {
    id: 7,
    title: "Campanha de Captação",
    description: "Layout pensado para campanhas rápidas e foco total em resultado.",
    image: "/portfolio/campaign-2.svg",
    alt: "Preview de campanha de captação",
    href: "/portfolio/campaign-2.svg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mt-12 w-full border-t border-zinc-800 pt-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-6">Portfólio</h2>
      <p className="text-zinc-400">
        Confira alguns dos projetos que foram desenvolvidos, desde landing pages até soluções de automação.
      </p>
      <Carousel
        items={projects}
        keyExtractor={(project) => project.id}
        renderItem={(project, isActive) => (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block overflow-hidden rounded-3xl border bg-zinc-950/90 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-colors ${
              isActive ? "border-white/20" : "border-white/10"
            }`}
          >
            <div className="relative aspect-16/10 overflow-hidden bg-zinc-900">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 78vw, 320px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold tracking-tight text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {project.description}
              </p>
            </div>
          </a>
        )}
      />
    </section>
  );
}
