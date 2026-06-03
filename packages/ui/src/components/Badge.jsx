export function Badge({ variant = 'default', size = 'md', children }) {
  const variants = {
    default: 'bg-white/10 text-white/70',
    primary: 'bg-blue-600/20 text-blue-400 border border-blue-500/30',
    success: 'bg-green-600/20 text-green-400 border border-green-500/30',
    warning: 'bg-yellow-600/20 text-yellow-400 border border-yellow-500/30',
    danger:  'bg-red-600/20 text-red-400 border border-red-500/30',
  }
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
  }
  return (
    <span className={`
      inline-flex items-center rounded-full font-medium
      ${variants[variant]} ${sizes[size]}
    `}>
      {children}
    </span>
  )
}