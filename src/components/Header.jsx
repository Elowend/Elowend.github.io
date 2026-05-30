import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'HOME', end: true },
  { to: '/about', label: 'ABOUT ME' },
  { to: '/works', label: 'WORKS' },
  { to: '/contact', label: 'CONTACT ME' },
]

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-background/80 backdrop-blur-md border-b-2 border-outline-variant">
      <NavLink
        to="/"
        className="font-display-lg text-primary-fixed-dim drop-shadow-[0_0_10px_rgba(0,228,121,0.6)] animate-pulse text-[2.5rem] leading-none"
      >
        E
      </NavLink>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `font-body-md text-body-md uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim pb-1 shadow-[0_0_15px_rgba(0,255,136,0.4)]'
                  : 'text-on-surface-variant hover:text-primary-fixed-dim hover:skew-x-2 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center text-primary-fixed-dim">
        <span className="material-symbols-outlined text-2xl">terminal</span>
      </div>
    </header>
  )
}

export default Header
