const PROJECTS = [
  {
    ref: 'REF_001',
    title: 'NEURAL_DASH_V4',
    desc: 'Real-time data visualization engine for biometric feedback loops. Implements WebGL for high-performance rendering.',
    icon: 'dataset',
    glow: 'bg-primary-fixed-dim',
    hoverBorder: 'hover:border-primary-fixed-dim',
    titleColor: 'text-primary-fixed-dim',
    tags: ['#REACT', '#THREEJS', '#GLSL'],
    tagColor: 'text-tertiary-fixed-dim',
    meshStyle: {},
  },
  {
    ref: 'REF_002',
    title: 'VAULT_PROTOCOL',
    desc: 'End-to-end encrypted messaging substrate with automated decay cycles for transient communications.',
    icon: 'security',
    glow: 'bg-secondary-container',
    hoverBorder: 'hover:border-secondary-container',
    titleColor: 'text-secondary-container',
    tags: ['#NODE', '#CRYPTO', '#RUST'],
    tagColor: 'text-secondary-fixed-dim',
    meshStyle: { backgroundImage: 'radial-gradient(at 0% 100%, rgba(255, 0, 255, 0.15) 0px, transparent 50%)' },
    iconColor: 'text-secondary-container',
  },
  {
    ref: 'REF_003',
    title: 'SYNAPSE_OS',
    desc: 'An experimental web-based window manager for decentralized application orchestration.',
    icon: 'cloud_sync',
    glow: 'bg-tertiary-fixed-dim',
    hoverBorder: 'hover:border-tertiary-fixed-dim',
    titleColor: 'text-tertiary-fixed-dim',
    tags: ['#SVELTE', '#IPFS', '#CYBER'],
    tagColor: 'text-tertiary-fixed-dim',
    meshStyle: { backgroundImage: 'radial-gradient(at 100% 100%, rgba(0, 212, 255, 0.15) 0px, transparent 50%)' },
    iconColor: 'text-tertiary-fixed-dim',
  },
  {
    ref: 'REF_004',
    title: 'VOID_GRAPH',
    desc: 'Fractal mapping of relational database structures using force-directed graph algorithms.',
    icon: 'schema',
    glow: 'bg-primary-fixed-dim',
    hoverBorder: 'hover:border-primary-fixed-dim',
    titleColor: 'text-primary-fixed-dim',
    tags: ['#D3JS', '#NEO4J'],
    tagColor: 'text-tertiary-fixed-dim',
    meshStyle: {},
  },
  {
    ref: 'REF_005',
    title: 'SHELL_EXT',
    desc: 'Custom CLI toolkit for automated workflow deployments and remote environment synchronization.',
    icon: 'terminal',
    glow: 'bg-secondary-container',
    hoverBorder: 'hover:border-secondary-container',
    titleColor: 'text-secondary-container',
    tags: ['#GOLANG', '#DOCKER'],
    tagColor: 'text-secondary-fixed-dim',
    meshStyle: { backgroundImage: 'radial-gradient(at 0% 100%, rgba(255, 0, 255, 0.15) 0px, transparent 50%)' },
    iconColor: 'text-secondary-container',
  },
]

function ProjectCard({ project }) {
  const iconClass = project.iconColor || 'text-primary-fixed-dim'

  return (
    <div className="group relative transition-all duration-500">
      <div
        className={`absolute -inset-0.5 ${project.glow} opacity-0 group-hover:opacity-40 blur transition-all duration-500 rounded-lg`}
      />
      <div
        className={`relative bg-surface-container-low border-2 border-outline-variant ${project.hoverBorder} transition-colors chamfer-card-sm overflow-hidden h-full flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
      >
        <div className="bg-surface-container-highest px-4 py-2 flex justify-between items-center border-b border-outline-variant">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f56] inline-block" />
            <span className="w-2 h-2 rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-2 h-2 rounded-full bg-[#27c93f] inline-block" />
          </div>
          <span className="font-code-sm text-code-sm text-outline opacity-50 uppercase tracking-tighter">
            {project.ref}
          </span>
        </div>
        <div className="p-6 flex flex-col h-full">
          <div
            className="w-full h-40 bg-[#1c1c2e] mb-6 gradient-mesh flex items-center justify-center"
            style={project.meshStyle}
          >
            <span
              className={`material-symbols-outlined ${iconClass} text-6xl`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {project.icon}
            </span>
          </div>
          <h3 className={`font-body-md text-headline-md uppercase mb-3 ${project.titleColor}`}>
            {project.title}
          </h3>
          <p className="text-on-surface-variant font-body-md mb-6 flex-grow">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`bg-surface-container-highest ${project.tagColor} px-3 py-1 font-code-sm text-code-sm uppercase`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen page-transition">
      <header className="mb-16 border-l-4 border-primary-fixed-dim pl-6 py-2">
        <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-2">
          SYS.DIR/PROJECTS
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl blinking-cursor">
          A repository of digital artifacts, experimental protocols, and high-frequency development cycles.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.ref} project={project} />
        ))}

        <div className="group relative transition-all duration-500">
          <div className="absolute -inset-0.5 bg-outline opacity-0 group-hover:opacity-20 blur transition-all duration-500 rounded-lg" />
          <div className="relative bg-surface-container-lowest border-2 border-dashed border-outline-variant chamfer-card-sm overflow-hidden h-full flex flex-col opacity-60">
            <div className="p-6 flex flex-col items-center justify-center h-full text-center min-h-[320px]">
              <span className="material-symbols-outlined text-4xl mb-4 animate-pulse">lock</span>
              <h3 className="font-body-md text-headline-md uppercase mb-2">ACCESS_DENIED</h3>
              <p className="font-code-sm text-code-sm text-outline uppercase">Development in progress...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-gutter border-t border-outline-variant pt-8">
        <div className="font-code-sm text-code-sm text-outline uppercase flex items-center gap-4">
          <span>STATUS: STABLE</span>
          <span className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-ping" />
          <span>PKT_RECV: 1.2GB</span>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            className="bg-transparent border-2 border-secondary-container text-secondary-container px-6 py-2 font-body-md uppercase glitch-hover"
          >
            [ PREV_PAGE ]
          </button>
          <button
            type="button"
            className="bg-primary-container text-on-primary px-6 py-2 font-body-md uppercase font-bold glitch-hover"
          >
            [ NEXT_PAGE ]
          </button>
        </div>
      </div>
    </main>
  )
}

export default Projects
