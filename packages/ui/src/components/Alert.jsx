export function Alert({ type = 'info', title, message }) {
  const types = {
    info:    { bg: 'bg-blue-600/10 border-blue-500/30',     text: 'text-blue-400',   icon: 'ℹ️' },
    success: { bg: 'bg-green-600/10 border-green-500/30',   text: 'text-green-400',  icon: '✅' },
    warning: { bg: 'bg-yellow-600/10 border-yellow-500/30', text: 'text-yellow-400', icon: '⚠️' },
    danger:  { bg: 'bg-red-600/10 border-red-500/30',       text: 'text-red-400',    icon: '❌' },
  }
  const t = types[type]
  return (
    <div className={`flex gap-3 p-4 rounded-xl border ${t.bg} w-full max-w-md`}>
      <span className="text-lg flex-shrink-0">{t.icon}</span>
      <div>
        {title && <p className={`font-semibold text-sm ${t.text}`}>{title}</p>}
        {message && <p className="text-white/40 text-sm mt-0.5">{message}</p>}
      </div>
    </div>
  )
}