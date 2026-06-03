import { useState } from 'react'
import CopyButton from './CopyButton'

export default function ComponentPreview({ title, description, preview, jsxCode, htmlCode }) {
  const [tab, setTab] = useState('preview')

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#111111] mb-8">

      {/* Header */}
      {(title || description) && (
        <div className="px-6 py-4 border-b border-white/5">
          {title && <h3 className="text-white font-semibold">{title}</h3>}
          {description && <p className="text-white/40 text-sm mt-0.5">{description}</p>}
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center justify-between px-4 border-b border-white/5 bg-[#0d0d0d]">
        <div className="flex">
          {['preview', 'jsx', 'html'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`
                px-4 py-3 text-sm font-medium transition-all border-b-2
                ${tab === t
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-white/30 hover:text-white/60'
                }
              `}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
        {tab !== 'preview' && (
          <CopyButton code={tab === 'jsx' ? jsxCode : htmlCode} />
        )}
      </div>

      {/* Content */}
      {tab === 'preview' && (
        <div className="p-8 flex flex-wrap gap-3 items-center justify-center min-h-[120px] bg-[#161616]">
          {preview}
        </div>
      )}

      {(tab === 'jsx' || tab === 'html') && (
        <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed bg-[#0d0d0d]">
          <code className={tab === 'jsx' ? 'text-blue-300' : 'text-green-300'}>
            {tab === 'jsx' ? jsxCode : htmlCode}
          </code>
        </pre>
      )}
    </div>
  )
}