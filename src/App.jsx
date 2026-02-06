const projects = [
  {
    title: "Flowboard de Metas",
    summary:
      "Dashboard Notion-lite em modo demo e somente leitura, com tarefas, hábitos e metas semanais em uma experiência fluida.",
    year: "2026",
    role: "Full Stack",
    tags: ["React", "Tailwind", "PostgreSQL"],
    embedUrl: "https://flowboard-tarefas.vercel.app/demo",
    visit: "https://flowboard-tarefas.vercel.app", 
  },
  {
    title: "Recomendei",
    summary:
      "Aplicativo que identifica filmes e séries a partir de gostos pessoais, com listas personalizadas e recomendações inteligentes.",
    year: "2024",
    role: "Full Stack",
    tags: ["React", "Flask", "IA"],
    embedUrl: "https://recomendei-filmes.vercel.app",
    visit: "https://recomendei-filmes.vercel.app",  
  },
  {
    title: "Gestão de Tarefas",
    summary:
      "Organizador de tarefas com prioridades, filtros e visão semanal para produtividade.",
    year: "2026",
    role: "Full Stack",
    tags: ["React", "Tailwind", "PostgreSQL"],
    embedUrl: "https://tarefas-web.vercel.app",
    visit: "https://tarefas-web.vercel.app",
  },
  {
    title: "The Sims Randomizer",
    summary:
      "Gerador de personagens e mapas aleatórios para The Sims 4, com desafios criados a partir de sorteios.",
    year: "2024",
    role: "Front-end",
    tags: ["JavaScript", "Randomizer", "Github Pages"],
    embedUrl: "https://tiago-gl.github.io/TheSimsRandomizer/",
    visit: "https://tiago-gl.github.io/TheSimsRandomizer/",
  },
]

const highlights = [
  {
    title: "Foco em produto",
    description:
      "Entrego interfaces que conectam claramente problema, solução e resultado.",
  },
  {
    title: "Execução rápida",
    description: "Itero com protótipos e testes curtos para acelerar decisões.",
  },
  {
    title: "Código enxuto",
    description: "Prefiro soluções simples, fáceis de manter e documentadas.",
  },
]

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f1e8]">
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[#ffb44f]/60 blur-3xl" />
      <div className="pointer-events-none absolute top-48 -left-16 h-80 w-80 rounded-full bg-[#76c7c5]/55 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-16 h-64 w-64 rounded-full bg-[#e7805e]/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.12),_transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12">
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Portfolio 2026
            </span>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
              Projetos digitais com narrativa clara, visual forte e foco em
              resultado.
            </h1>
            <p className="max-w-xl text-base text-slate-600 md:text-lg">
              Sou desenvolvedor focado em criar experiências úteis, bonitas e
              fáceis de usar. Abaixo estão alguns projetos com demos em vídeo e
              interativas para demonstrar o funcionamento.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              className="rounded-full border border-slate-900/20 bg-white/70 px-5 py-2 text-sm font-medium text-slate-900 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              href="mailto:tiagglo7@gmail.com"
            >
              Fale comigo
            </a>
            <a
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              href="#projetos"
            >
              Ver projetos
            </a>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-soft"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </section>

        <section id="projetos" className="space-y-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Projetos em destaque
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Resumo visual dos meus projetos
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Cada card tem título e resumo acima da mídia para contextualizar
              rapidamente o projeto.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {project.year}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
                      {project.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 md:justify-end">
                    <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                      {project.role}
                    </span>
                    <a
                      href={project.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-[#0f172a] px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-soft transition hover:-translate-y-0.5"
                    >
                      Visitar
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100">
                  {project.embedUrl ? (
                    <iframe
                      className="aspect-video w-full"
                      src={project.embedUrl}
                      title={`Demo do projeto ${project.title}`}
                      loading="lazy"
                    />
                  ) : (
                    <video
                      className="aspect-video w-full"
                      controls
                      preload="metadata"
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                      Seu navegador não suporta vídeo em HTML5.
                    </video>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Vamos construir algo memorável?
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-600">
                Se quiser conversar sobre um projeto, freelas ou colaboração,
                estou disponível para novas oportunidades.
              </p>
            </div>
            <a
              className="w-fit rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-soft transition hover:-translate-y-0.5"
              href="mailto:tiagglo7@gmail.com"
            >
              Entrar em contato
            </a>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-xs uppercase tracking-[0.3em] text-slate-500 md:flex-row">
          <a
            href="https://github.com/Tiago-gl?tab=repositories"
            className="w-fit rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-soft transition hover:-translate-y-0.5"
          >
            Tiago · Portfolio
          </a>
          <span>Desenvolvido com React + Tailwind</span>
        </footer>
      </div>
    </div>
  )
}
