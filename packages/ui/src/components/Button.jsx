export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  onClick,
}) {
  const variants = {
    primary:   'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    ghost:     'bg-transparent text-gray-700 hover:bg-gray-100',
    danger:    'bg-red-600 text-white hover:bg-red-700',
    outline:   'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    success:   'bg-green-600 text-white hover:bg-green-700',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        font-medium transition-all duration-200 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      {children}
    </button>
  )
}