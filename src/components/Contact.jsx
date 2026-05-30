import { useState } from 'react'

const SOCIAL_LINKS = [
  { icon: 'chat_bubble', label: 'WeChat', value: 'wechat_id', href: '#' },
  { icon: 'code', label: 'GitHub', value: 'github_username', href: 'https://github.com' },
  { icon: 'camera', label: 'Xiaohongshu', value: 'account_placeholder', href: '#' },
]

const METADATA = [
  { key: '0x01 LOCATION:', value: 'S_SPRAWL_SECTOR_7' },
  { key: '0x02 UPTIME:', value: '99.98%' },
  { key: '0x03 ENCRYPTION:', value: 'AES_256_GCM', valueClass: 'text-secondary' },
]

function TerminalInput({ label, placeholder, type = 'text', multiline = false }) {
  const InputTag = multiline ? 'textarea' : 'input'

  return (
    <div className="group">
      <label className="block text-primary-fixed-dim font-code-sm uppercase mb-2">{label}</label>
      <div
        className={`flex ${multiline ? 'items-start' : 'items-center'} border-b-2 border-outline-variant focus-within:border-primary-fixed-dim transition-colors py-2`}
      >
        <span className={`text-on-surface-variant mr-3 ${multiline ? 'mt-1' : ''} cursor-blink font-bold`}>
          &gt;
        </span>
        <InputTag
          type={multiline ? undefined : type}
          rows={multiline ? 4 : undefined}
          className="bg-transparent border-none focus:ring-0 focus:outline-none text-on-surface w-full font-body-md placeholder:text-surface-variant resize-none"
          placeholder={placeholder}
        />
        {multiline && <span className="text-primary-fixed-dim cursor-blink font-bold ml-2">_</span>}
      </div>
    </div>
  )
}

function Contact() {
  const [submitState, setSubmitState] = useState('idle')

  function handleSubmit() {
    if (submitState !== 'idle') return
    setSubmitState('loading')
    setTimeout(() => {
      setSubmitState('success')
      setTimeout(() => setSubmitState('idle'), 3000)
    }, 2000)
  }

  function handleReset() {
    setSubmitState('idle')
  }

  const buttonContent = {
    idle: (
      <>
        <span className="relative z-10">Execute Transfer</span>
        <span className="material-symbols-outlined relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>
          send
        </span>
      </>
    ),
    loading: 'ESTABLISHING_LINK...',
    success: 'PROTOCOL_SENT_SUCCESS',
  }

  const buttonClass =
    submitState === 'success'
      ? 'bg-tertiary-container text-on-tertiary opacity-100'
      : submitState === 'loading'
        ? 'bg-primary-container text-on-primary opacity-50'
        : 'bg-primary-container text-on-primary'

  return (
    <main className="relative z-10 pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter min-h-screen page-transition">
      <div className="md:col-span-4 flex flex-col gap-8">
        <div className="relative group">
          <div className="chamfer-border bg-surface-container-high border-2 border-outline-variant w-full aspect-square flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-primary-fixed-dim group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]">
            <div className="text-center font-code-sm uppercase space-y-2">
              <div className="text-outline-variant text-[64px] material-symbols-outlined">account_circle</div>
              <div className="text-primary-fixed-dim font-bold tracking-tighter">[ AVATAR SLOT ]</div>
              <div className="text-on-surface-variant opacity-50">NO_DATA_AVAILABLE</div>
            </div>
          </div>
          <div className="absolute -top-2 -left-2 bg-primary-container text-on-primary-fixed px-3 py-1 font-code-sm font-bold">
            REF_042
          </div>
        </div>

        <div className="bg-surface-container-low border border-outline-variant p-6 space-y-4">
          <div className="flex justify-between items-center border-b border-outline-variant pb-2">
            <span className="text-primary-fixed-dim font-bold uppercase text-label-md">Status</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse shadow-[0_0_8px_#00ff88]" />
              <span className="text-on-surface font-code-sm">ONLINE</span>
            </div>
          </div>
          <ul className="space-y-3 font-code-sm">
            {METADATA.map(({ key, value, valueClass }) => (
              <li key={key} className="flex justify-between">
                <span className="text-on-surface-variant">{key}</span>
                <span className={`uppercase ${valueClass || 'text-on-surface'}`}>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:col-span-8 flex flex-col gap-8">
        <div className="space-y-2">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tighter text-gradient-heading">
            Establish <span className="text-primary-fixed-dim">Link_</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            Initiate a peer-to-peer connection for professional collaboration or technical inquiries.
            Secure channels only.
          </p>
        </div>

        <div className="bg-surface-container-low border border-outline-variant rounded-none relative">
          <div className="bg-outline-variant/30 px-4 py-2 flex items-center justify-between border-b border-outline-variant">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-none bg-error/50" />
              <div className="w-3 h-3 rounded-none bg-primary-fixed-dim/50" />
              <div className="w-3 h-3 rounded-none bg-tertiary-fixed-dim/50" />
            </div>
            <span className="text-on-surface-variant font-code-sm tracking-widest uppercase">
              sys.msg_sender.v2
            </span>
          </div>
          <div className="p-8 space-y-8">
            <div className="space-y-6">
              <TerminalInput label="Identify Yourself" placeholder="GHOST_USER_NAME" />
              <TerminalInput label="Return Address" placeholder="ENCRYPTED_EMAIL" type="email" />
              <TerminalInput
                label="Protocol Buffer / Message"
                placeholder="INPUT_DATA_STREAM..."
                multiline
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitState !== 'idle'}
                className={`${buttonClass} font-bold px-8 py-4 uppercase tracking-widest flex items-center justify-center gap-3 transition-transform active:scale-95 group relative overflow-hidden`}
              >
                {buttonContent[submitState]}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="border-2 border-secondary text-secondary font-bold px-8 py-4 uppercase tracking-widest hover:bg-secondary/10 transition-all active:skew-x-2"
              >
                Reset Sequence
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
          {SOCIAL_LINKS.map(({ icon, label, value, href }) => (
            <a
              key={label}
              className="bg-surface-container p-6 border border-outline-variant hover:border-tertiary-fixed-dim transition-all group"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <div className="text-tertiary-fixed-dim mb-4 material-symbols-outlined text-[32px]">{icon}</div>
              <div className="font-code-sm text-on-surface-variant uppercase mb-1">{label}</div>
              <div className="text-on-surface font-bold group-hover:text-primary-fixed-dim transition-colors">
                {value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Contact
