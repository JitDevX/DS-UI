import { useState } from 'react'

export default function CopyButton({ code }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className={`
        flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
        transition-all duration-200
        ${copied
          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
          : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white'
        }
      `}
    >
      {copied ? '✅ Copied!' : '📋 Copy'}
    </button>
  )
}