export function Input({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  hint,
  disabled = false,
  required = false,
  leftIcon,
  rightIcon,
  size = 'md',
}) {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  }

  const inputClasses = [
    'w-full bg-white/5 border rounded-lg text-white',
    'placeholder-white/20 transition-all duration-200',
    'focus:outline-none focus:ring-1',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    error
      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
      : 'border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20',
    leftIcon  ? 'pl-10' : '',
    rightIcon ? 'pr-10' : '',
    sizes[size],
  ].filter(Boolean).join(' ')

  return (
    <div className="flex flex-col gap-1.5 w-full">

      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-white/70">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative">

        {/* Left Icon */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
            {leftIcon}
          </div>
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={inputClasses}
        />

        {/* Right Icon */}
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
            {rightIcon}
          </div>
        )}

      </div>

      {/* Error Message — inline, no SVG sizing issues */}
      {error && (
        <span className="text-red-400 text-xs mt-0.5">
          ⚠ {error}
        </span>
      )}

      {/* Hint — only when no error */}
      {hint && !error && (
        <span className="text-white/30 text-xs mt-0.5">{hint}</span>
      )}

    </div>
  )
}