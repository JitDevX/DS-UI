const navItems = [
  {
    section: 'Getting Started',
    items: [
      { id: 'home', label: 'Introduction', icon: '⚡' },
    ]
  },
  {
    section: 'Components',
    items: [
      { id: 'button', label: 'Button', icon: '🔲' },
      { id: 'card',   label: 'Card',   icon: '🃏' },
      { id: 'badge',  label: 'Badge',  icon: '🏷️' },
      { id: 'alert',  label: 'Alert',  icon: '🔔' },
    ]
  }
]

export default function Sidebar({ currentPage, onNavigate, isOpen }) {
  return (
    <aside className={`
      fixed lg:sticky top-0 h-screen z-30
      w-64 bg-[#111111] border-r border-white/5
      flex flex-col transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-black text-sm">DS</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-base leading-none">DS-UI</h1>
            <p className="text-white/30 text-xs mt-0.5">DigitalSafety</p>
          </div>
        </div>
      </div>

      {/* Version */}
      <div className="px-6 py-3 border-b border-white/5">
        <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full font-mono">
          v0.1.0
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navItems.map((group) => (
          <div key={group.section} className="mb-6">
            <p className="text-[11px] font-semibold text-white/25 uppercase tracking-widest px-3 mb-2">
              {group.section}
            </p>
            {group.items.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                  transition-all duration-150 text-left mb-0.5
                  ${currentPage === item.id
                    ? 'bg-blue-600/20 text-blue-400 font-medium'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <span>{item.icon}</span>
                {item.label}
                {currentPage === item.id && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/5">
        <p className="text-[11px] text-white/20 text-center">Built by DigitalSafety</p>
      </div>
    </aside>
  )
}