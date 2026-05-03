'use client'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  className?: string
  'aria-label'?: string
  icon?: ReactNode
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--color-primary)',
    color: '#fff',
    border: 'none',
  },
  dark: {
    background: '#1C2A42',
    color: '#F5F0EB',
    border: '1px solid #2A3F5F',
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1.5px solid var(--color-primary)',
  },
  ghost: {
    background: 'transparent',
    color: '#475569',
    border: 'none',
  },
}

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    padding: '10px 18px',
    fontSize: 14,
    borderRadius: 10,
  },
  md: {
    padding: '14px 24px',
    fontSize: 15,
    borderRadius: 14,
  },
  lg: {
    padding: '16px 28px',
    fontSize: 16,
    borderRadius: 16,
  },
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  icon,
}: ButtonProps) {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease',
    ...variantStyles[variant],
    ...sizeStyles[size],
  }

  const combinedClassName = `store-btn${className ? ` ${className}` : ''}`

  if (href) {
    return (
      <a href={href} style={style} className={combinedClassName} aria-label={ariaLabel}>
        {icon && icon}
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      style={style}
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon && icon}
      {children}
    </button>
  )
}
