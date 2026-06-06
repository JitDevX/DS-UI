import { useState } from 'react'
import CopyButton from './CopyButton'

export default function Playground({ title = 'Playground', controls, renderPreview, generateCode }) {
  const [values, setValues] = useState(() => {
    const initial = {}
    controls.forEach(ctrl => { initial[ctrl.name] = ctrl.default })
    return initial
  })

  const updateValue = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }))
  }

  const code = generateCode(values)

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#111111] mb-8">

      {/* Header */}
      <div className="px-6 py-4 border-b border-white/5">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-white/30 text-sm mt-0.5">Change props — preview updates live</p>
      </div>

      {/* Main Area */}
      <div className="flex flex-col lg:flex-row">

        {/* Preview */}
        <div className="flex-1 flex items-center justify-center min-h-[180px] p-8 bg-[#161616] border-b lg:border-b-0 lg:border-r border-white/5">
          {renderPreview(values)}
        </div>

        {/* Controls */}
        <div className="w-full lg:w-72 p-5 space-y-5">
          {controls.map((ctrl) => (
            <div key={ctrl.name}>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                {ctrl.name}
              </label>

              {/* Radio options */}
              {ctrl.type === 'select' && (
                <div className="flex flex-wrap gap-2">
                  {ctrl.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => updateValue(ctrl.name, opt)}
                      className={`
                        px-3 py-1 rounded-lg text-xs font-medium transition-all
                        ${values[ctrl.name] === opt
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                        }
                      `}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Toggle */}
              {ctrl.type === 'boolean' && (
                <button
                  onClick={() => updateValue(ctrl.name, !values[ctrl.name])}
                  className={`
                    relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                    ${values[ctrl.name] ? 'bg-blue-600' : 'bg-white/10'}
                  `}
                >
                  <span className={`
                    inline-block h-4 w-4 rounded-full bg-white transition-transform
                    ${values[ctrl.name] ? 'translate-x-6' : 'translate-x-1'}
                  `} />
                </button>
              )}

              {/* Text Input */}
              {ctrl.type === 'text' && (
                <input
                  type="text"
                  value={values[ctrl.name]}
                  onChange={(e) => updateValue(ctrl.name, e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500/50"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Generated Code */}
      <div className="border-t border-white/5 bg-[#0d0d0d]">
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
          <span className="text-xs text-white/30 font-mono">Generated Code</span>
          <CopyButton code={code} />
        </div>
        <pre className="px-5 py-4 text-sm font-mono text-blue-300 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>

      

    </div>
  )
}