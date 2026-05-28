import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'lime' | 'light' | 'dark' | 'outline'
  className?: string
}

const variants = {
  lime: 'bg-lime/15 text-lime border border-lime/20',
  light: 'bg-paper/10 text-paper/70 border border-white/10',
  dark: 'bg-ink/10 text-ink/70 border border-ink/10',
  outline: 'border border-lime text-lime',
}

export default function Badge({
  children,
  variant = 'lime',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-[0.1em]',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
