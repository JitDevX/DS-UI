import { useState } from 'react'

export function Navbar({
  logo = 'DS-UI',
  links = [],
  variant = 'default',
  sticky = false,
  actions,
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const variants = {
    default:     'bg-[#111111] border-b border-white/10',
    transparent: 'bg-transparent border-b border-white/5',
    blur:        'bg-black/40 backdrop-blur-md border-b border-white/10',
    solid:       'bg-blue-600 border-b border-blue-500',
  }

  return (
    <nav className={`w-full ${variants[variant]} ${sticky ? 'sticky top-0 z-50' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">DS</span>
            </div>
            <span className="text-white font-bold text-lg">{logo}</span>
          </div>

          {/* Desktop Links */}
          {links.length > 0 && (
            <div className="hidden md:flex items-center gap-1">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href || '#'}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150
                    ${link.active
                      ? 'text-white bg-white/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Right Side — Actions */}
          <div className="hidden md:flex items-center gap-3">
            {actions}
          </div>

          {/* Mobile — Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/20">
          <div className="px-4 py-3 space-y-1">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href || '#'}
                className={`
                  block px-4 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${link.active
                    ? 'text-white bg-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
            {actions && (
              <div className="pt-3 border-t border-white/5 mt-3">
                {actions}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}