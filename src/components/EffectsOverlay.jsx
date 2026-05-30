import { useEffect } from 'react'

function EffectsOverlay() {
  useEffect(() => {
    function handleMouseMove(e) {
      if (Math.random() > 0.08) return

      const ripple = document.createElement('div')
      ripple.className =
        'fixed rounded-full border border-primary-fixed-dim/30 pointer-events-none z-[5]'
      const size = Math.random() * 80 + 40
      ripple.style.width = `${size}px`
      ripple.style.height = `${size}px`
      ripple.style.left = `${e.clientX - size / 2}px`
      ripple.style.top = `${e.clientY - size / 2}px`

      document.body.appendChild(ripple)

      ripple.animate(
        [
          { transform: 'scale(0)', opacity: 0.6 },
          { transform: 'scale(2.5)', opacity: 0 },
        ],
        { duration: 1200, easing: 'cubic-bezier(0.1, 0, 0.3, 1)' }
      ).onfinish = () => ripple.remove()
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div className="scanline-overlay" aria-hidden="true" />
      <div className="scanline-moving" aria-hidden="true" />
      <div className="fixed inset-0 circuit-bg pointer-events-none" aria-hidden="true" />
    </>
  )
}

export default EffectsOverlay
