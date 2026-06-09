import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-airbnb-pink text-white hover:bg-airbnb-pink-dark focus:ring-airbnb-pink disabled:hover:bg-airbnb-pink',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-800 disabled:hover:bg-gray-800',
    outline: 'border-2 border-gray-300 text-gray-900 hover:bg-gray-50 focus:ring-gray-300 disabled:hover:bg-transparent',
    ghost: 'text-gray-900 hover:bg-gray-100 focus:ring-gray-300 disabled:hover:bg-transparent',
    link: 'text-airbnb-pink hover:text-airbnb-pink-dark underline-offset-4 hover:underline focus:ring-airbnb-pink disabled:hover:text-airbnb-pink disabled:hover:no-underline',
  }
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const widthStyle = fullWidth ? 'w-full' : ''
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim()
  
  return (
    <button
      className={combinedClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
