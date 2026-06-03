const components = [
  { id: 'button', label: 'Button', desc: 'Clickable actions with variants',    icon: '🔲', count: '6 variants' },
  { id: 'card',   label: 'Card',   desc: 'Content containers with shadows',    icon: '🃏', count: '4 styles'   },
  { id: 'badge',  label: 'Badge',  desc: 'Status labels and tags',              icon: '🏷️', count: '5 variants' },
  { id: 'alert',  label: 'Alert',  desc: 'Feedback and notification messages',  icon: '🔔', count: '4 types'    },
]

export default function HomePage({ onNavigate }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      <div className="mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 text-blue-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          v0.1.0 — Just launched
        </div>

        <h1 className="text-5xl lg:text-6xl font-black text-white leading-none mb-4">
          DS-UI
        </h1>
        <p className="text-xl text-white/50 max-w-xl leading-relaxed mb-2">
          Zero dependency component library by{' '}
          <span className="text-white/70">DigitalSafety</span>.
        </p>
        <p className="text-white/30 text-base">
          Copy, paste, and customize. No npm install required.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          {['Zero Dependencies', 'Tailwind CSS', 'Copy & Paste', 'React + HTML', 'Fully Responsive'].map((f) => (
            <span
              key={f}
              className="text-sm text-white/40 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: '01', title: 'Browse',    desc: 'Find the component you need from our library' },
            { step: '02', title: 'Copy',      desc: 'Click copy and get JSX or HTML version' },
            { step: '03', title: 'Customize', desc: 'Paste in your project and modify as needed' },
          ].map((item) => (
            <div key={item.step} className="bg-[#111111] border border-white/5 rounded-2xl p-6">
              <span className="text-blue-500 font-black text-3xl font-mono">{item.step}</span>
              <h3 className="text-white font-semibold mt-3 mb-1">{item.title}</h3>
              <p className="text-white/30 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Components</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {components.map((comp) => (
            <button
              key={comp.id}
              onClick={() => onNavigate(comp.id)}
              className="bg-[#111111] border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 text-left transition-all duration-200 hover:bg-[#161616] group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{comp.icon}</span>
                <span className="text-xs text-white/20 bg-white/5 px-2 py-1 rounded-full">
                  {comp.count}
                </span>
              </div>
              <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                {comp.label}
              </h3>
              <p className="text-white/30 text-sm mt-1">{comp.desc}</p>
              <div className="flex items-center gap-1 mt-4 text-blue-500/60 text-xs group-hover:text-blue-400 transition-colors">
                View component →
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}