function Footer() {
  return (
    <footer className="w-full px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-gutter bg-surface-container-lowest border-t-2 border-outline-variant">
      <div className="text-label-md font-label-md text-on-surface">
        © 2024 ELOWEN // SYS_OP_TERMINAL
      </div>
      <div className="flex items-center gap-8">
        <a
          className="font-code-sm text-code-sm uppercase text-outline hover:text-secondary-fixed-dim hover:tracking-tighter transition-all"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
        </a>
        <a
          className="font-code-sm text-code-sm uppercase text-outline hover:text-secondary-fixed-dim hover:tracking-tighter transition-all"
          href="#"
        >
          LINKEDIN
        </a>
        <a
          className="font-code-sm text-code-sm uppercase text-outline hover:text-secondary-fixed-dim hover:tracking-tighter transition-all"
          href="#"
        >
          SOURCE
        </a>
      </div>
      <div className="font-code-sm text-code-sm text-outline-variant uppercase hidden md:block">
        loc: 127.0.0.1 // latency: 14ms
      </div>
    </footer>
  )
}

export default Footer
