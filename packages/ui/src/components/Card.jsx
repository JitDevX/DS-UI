export function Card({
  variant = 'default',
  title,
  description,
  footer,
  image,
  children,
}) {
  const variants = {
    default:  'bg-[#1a1a1a] border border-white/10',
    outlined: 'bg-transparent border-2 border-white/20',
    elevated: 'bg-[#1a1a1a] border border-white/5 shadow-2xl shadow-black/50',
    flat:     'bg-white/5 border border-transparent',
  }
  return (
    <div className={`rounded-2xl overflow-hidden ${variants[variant]} max-w-xs w-full`}>
      {image && <img src={image} alt="" className="w-full h-40 object-cover" />}
      <div className="p-5">
        {title && <h3 className="text-white font-semibold text-base mb-1">{title}</h3>}
        {description && <p className="text-white/40 text-sm leading-relaxed">{description}</p>}
        {children}
      </div>
      {footer && (
        <div className="px-5 py-3 border-t border-white/5 text-white/30 text-xs">
          {footer}
        </div>
      )}
    </div>
  )
}