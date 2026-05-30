import { useEffect, useState } from 'react'

const BOOT_MESSAGES = [
  'BIOS_REV_1.0.4...',
  'MEMORY_CHECK: OK',
  'LOADING_ASSETS...',
  'DECRYPTING_NODE...',
  'ACCESS_GRANTED',
]

function BootScreen({ onComplete }) {
  const [logs, setLogs] = useState([])
  const [opacity, setOpacity] = useState(1)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function runBoot() {
      for (const msg of BOOT_MESSAGES) {
        if (cancelled) return
        setLogs((prev) => [...prev, msg])
        await new Promise((r) => setTimeout(r, 200))
      }

      if (cancelled) return
      await new Promise((r) => setTimeout(r, 300))
      setOpacity(0)
      setTimeout(() => {
        setMounted(false)
        onComplete?.()
      }, 500)
    }

    runBoot()
    return () => { cancelled = true }
  }, [onComplete])

  if (!mounted) return null

  return (
    <div
      className="boot-screen"
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="font-code-sm text-primary-fixed-dim text-center">
        <div className="text-left mb-4 opacity-70">
          {logs.map((msg) => (
            <div key={msg}>&gt; {msg}</div>
          ))}
        </div>
        <p className="animate-pulse">_ESTABLISHING_LINK</p>
      </div>
    </div>
  )
}

export default BootScreen
