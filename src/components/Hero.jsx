import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STATS = [
  { ref: 'REF_001', icon: 'bolt', title: 'FULL STACK DEV', desc: 'Core Protocol Engineering', color: 'text-primary-fixed-dim' },
  { ref: 'REF_002', icon: 'grid_view', title: 'UI ARCHITECT', desc: 'Neural Interface Design', color: 'text-secondary', fill: true },
  { ref: 'REF_003', icon: 'security', title: 'CYBER_OPS', desc: 'Encrypted Systems Security', color: 'text-tertiary-fixed-dim', fill: true },
  { ref: 'REF_004', icon: 'hub', title: 'INFRASTRUCTURE', desc: 'Cloud Node Management', color: 'text-error', fill: true },
]

function Hero({ bootComplete }) {
  const [typedText, setTypedText] = useState('')
  const terminalText = 'initializing portfolio...'

  useEffect(() => {
    if (!bootComplete) return

    let i = 0
    let timeoutId

    function typeWriter() {
      if (i < terminalText.length) {
        setTypedText(terminalText.slice(0, i + 1))
        i++
        timeoutId = setTimeout(typeWriter, 50 + Math.random() * 80)
      }
    }

    timeoutId = setTimeout(typeWriter, 700)
    return () => clearTimeout(timeoutId)
  }, [bootComplete])

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop pt-24 pb-12 max-w-container-max mx-auto ${bootComplete ? 'boot-sequence' : 'invisible h-0 overflow-hidden'}`}>
      <section className="relative w-full flex flex-col items-center md:items-start text-center md:text-left">
        <div className="absolute -top-12 left-0 font-code-sm text-code-sm text-outline-variant opacity-50 hidden md:block select-none">
          0x01_INITIALIZING_SEQUENCE
          <br />
          SEC_LEVEL: ROOT_ADMIN
          <br />
          STATUS: ONLINE
        </div>

        <div className="absolute -top-32 md:-left-24 -z-10 font-display-lg text-[24rem] text-primary-fixed-dim/5 select-none pointer-events-none blur-[2px]">
          E
        </div>

        <div className="mb-6 flex flex-col gap-2">
          <div className="bg-surface-container-low border-l-4 border-primary-fixed-dim px-4 py-2 self-center md:self-start">
            <p className="font-code-sm text-code-sm text-primary-fixed-dim tracking-widest uppercase">
              system_v0.9.4_stable
            </p>
          </div>
          <h1 className="font-display-lg text-[4rem] md:text-[6rem] leading-none uppercase tracking-tighter heading-gradient glitch-text filter drop-shadow-[0_0_15px_rgba(0,228,121,0.3)]">
            HI HERE IS Elowen
          </h1>
        </div>

        <div className="mb-12">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            <span className="text-primary-fixed-dim">&gt;</span> {typedText}
            <span className="cursor-blink" />
          </p>
        </div>

        <div className="flex flex-wrap gap-gutter justify-center md:justify-start">
          <Link
            to="/contact"
            className="chamfer-btn bg-primary-container text-on-primary px-10 py-4 font-label-md text-label-md uppercase tracking-widest font-bold shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:shadow-[0_0_50px_rgba(0,255,136,0.7)] hover:scale-105 active:scale-95 transition-all duration-200 glitch-hover inline-block"
          >
            CONTACT ME
          </Link>
          <button
            type="button"
            className="border-2 border-secondary-fixed-dim text-secondary-fixed-dim px-10 py-4 font-label-md text-label-md uppercase tracking-widest font-bold hover:bg-secondary-fixed-dim/10 transition-all duration-300 flex items-center gap-2"
          >
            <span className="material-symbols-outlined">download</span>
            SOURCE_CODE
          </button>
        </div>

        <div className="mt-24 w-full grid grid-cols-1 md:grid-cols-4 gap-4">
          {STATS.map(({ ref, icon, title, desc, color, fill }) => (
            <div
              key={ref}
              className="bg-surface-container-lowest border border-outline-variant p-4 flex flex-col gap-2"
            >
              <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                <span className="font-code-sm text-code-sm text-outline">{ref}</span>
                <span
                  className={`material-symbols-outlined text-sm ${color}`}
                  style={fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {icon}
                </span>
              </div>
              <h3 className="font-label-md text-label-md text-primary heading-gradient">{title}</h3>
              <p className="font-code-sm text-code-sm text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Hero
