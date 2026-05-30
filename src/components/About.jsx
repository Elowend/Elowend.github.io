const ASCII_ART = `     _________________
    /                 \\
   /   _   _   _   _   \\
  /   / \\ / \\ / \\ / \\   \\
 /   | E | L | O | W |   \\
|     \\ / \\ / \\ / \\ /     |
|      V   V   V   V      |
|                         |
|   SYSTEM_OPERATOR_01    |
|                         |
|      ___________        |
|     |  _______  |       |
|     | |       | |       |
|     | |  0 1  | |       |
|     | |_______| |       |
|     |___________|       |
 \\                       /
  \\                     /
   \\___________________/`

const SKILLS = [
  { num: '01. ENGINE', label: 'REACT' },
  { num: '02. VISUALS', label: 'DESIGN' },
  { num: '03. SHELL', label: 'TERMINAL' },
  { num: '04. CORE', label: 'TYPESCRIPT' },
]

const SPECS = [
  { key: 'UPTIME:', value: '99.98% / RELIABLE' },
  { key: 'ARCH:', value: 'FULL-STACK_V3' },
  { key: 'MODUS:', value: 'REMOTE_ONLY' },
  { key: 'ENCRYPTION:', value: 'AES-256_ACTIVE' },
]

function About() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24 relative z-10 grid-background min-h-screen page-transition">
      <div className="w-full flex items-center justify-between border-b border-outline-variant pb-4 mb-16">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-primary-fixed-dim shadow-[0_0_8px_#00ff88] animate-pulse" />
          <span className="font-code-sm text-code-sm uppercase tracking-widest text-primary-fixed-dim">
            Status: ACTIVE_SESSION // USER_ELOWEN
          </span>
        </div>
        <div className="font-code-sm text-code-sm text-outline hidden sm:block">
          LOC: 37.7749° N, 122.4194° W
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-fixed-dim via-tertiary-fixed-dim to-secondary-fixed-dim rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000" />
            <div className="relative bg-surface chamfer-card border border-outline-variant p-8 shadow-2xl overflow-hidden holographic-hover">
              <div className="flex items-center justify-between mb-8 border-b border-outline-variant/30 pb-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-error rounded-full" />
                  <div className="w-2 h-2 bg-primary-fixed-dim rounded-full" />
                  <div className="w-2 h-2 bg-tertiary-fixed-dim rounded-full" />
                </div>
                <span className="font-code-sm text-code-sm text-outline-variant">BIO_LOG_v2.4.0</span>
              </div>

              <div className="space-y-6 font-body-md text-on-surface leading-relaxed">
                <p>
                  <span className="text-primary-fixed-dim mr-2">&gt;</span>
                  initializing_identity_protocol...
                </p>
                <p className="text-primary-fixed-dim font-bold uppercase tracking-widest">0x01 // ORIGIN_DATA</p>
                <p className="pl-6 border-l-2 border-primary-fixed-dim/20">
                  I am Elowen, a digital architect and creative engineer operating at the
                  intersection of high-fidelity aesthetics and brutalist functionality. My practice
                  revolves around the philosophy of{' '}
                  <span className="text-tertiary-fixed-dim">Minimalist Cyber-Optimization</span>.
                </p>
                <p className="text-primary-fixed-dim font-bold uppercase tracking-widest">0x02 // OBJECTIVE_CORE</p>
                <p className="pl-6 border-l-2 border-primary-fixed-dim/20">
                  To build immersive web environments that challenge the standard UI conventions. I
                  leverage modern frameworks to deliver lightning-fast, secure, and visually
                  provocative digital experiences.
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <span className="text-primary-fixed-dim">&gt;</span>
                  <span className="bg-primary-fixed-dim text-background px-2 py-0.5 text-label-md font-label-md">
                    READY_
                  </span>
                  <span className="w-2 h-5 bg-primary-fixed-dim blink" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map(({ num, label }) => (
              <div
                key={num}
                className="bg-surface-container border border-tertiary-fixed-dim/30 p-4 relative overflow-hidden holographic-hover group"
              >
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-tertiary-fixed-dim" />
                <div className="text-tertiary-fixed-dim font-code-sm text-code-sm mb-1">{num}</div>
                <div className="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary-fixed-dim transition-colors">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 space-y-12">
          <div className="relative aspect-square md:aspect-auto md:h-[400px] w-full bg-surface-container-low chamfer-card border-2 border-outline-variant flex items-center justify-center holographic-hover group holographic-glow">
            <div className="text-primary-fixed-dim font-code-sm whitespace-pre text-[10px] leading-[1.1] opacity-60 group-hover:opacity-100 transition-opacity">
              <pre>{ASCII_ART}</pre>
            </div>
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-secondary-fixed-dim" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-secondary-fixed-dim" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-secondary-fixed-dim text-background px-4 py-1 text-code-sm font-bold">
              USER_ID: #404-E
            </div>
          </div>

          <div className="bg-surface border-l-4 border-primary-fixed-dim p-6 space-y-4 holographic-hover">
            <h3 className="font-headline-md text-headline-md text-gradient-heading uppercase tracking-tighter italic underline decoration-2">
              Technical_Specs
            </h3>
            <ul className="space-y-3 font-code-sm text-code-sm">
              {SPECS.map(({ key, value }) => (
                <li key={key} className="flex justify-between border-b border-outline-variant/20 pb-1">
                  <span className="text-outline">{key}</span>
                  <span className="text-on-surface">{value}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="w-full mt-6 bg-primary-fixed-dim text-background font-bold py-3 uppercase tracking-widest glitch-hover transition-transform active:scale-95"
            >
              Download_Data_Packet
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 right-10 opacity-10 pointer-events-none select-none" aria-hidden="true">
        <div className="text-primary-fixed-dim font-display-lg text-[180px] leading-none">01</div>
      </div>
    </main>
  )
}

export default About
