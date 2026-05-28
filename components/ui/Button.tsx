import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'lime' | 'ghost-dark' | 'ghost-light' | 'ink' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  external?: boolean
  arrow?: boolean
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<Variant, string> = {
  lime: 'bg-lime text-ink hover:bg-lime-deep active:scale-[0.98] shadow-lime/20 hover:shadow-lime',
  'ghost-dark': 'border border-white/20 text-paper hover:border-white/40 hover:bg-white/5',
  'ghost-light': 'border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/5',
  ink: 'bg-ink text-paper hover:bg-ink-light',
  outline: 'border-2 border-lime text-lime hover:bg-lime hover:text-ink',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2',
}

export default function Button({
  variant = 'lime',
  size = 'md',
  href,
  external = false,
  arrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center rounded-full font-display font-semibold transition-all duration-200 cursor-pointer hover:scale-[1.02]',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  const content = (
    <>
      {children}
      {arrow && (
        <span className="ml-0.5 transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(classes, 'group')}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={cn(classes, 'group')}>
        {content}
      </Link>
    )
  }

  return (
    <button className={cn(classes, 'group')} {...props}>
      {content}
    </button>
  )
}
