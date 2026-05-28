import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: number
  className?: string
  showText?: boolean
  light?: boolean
}

export default function Logo({
  size = 44,
  className,
  showText = true,
  light = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-3 group', className)}
      aria-label="Digital Expert Hub - Home"
    >
      {/* Icon */}
      <div
        className="relative flex-shrink-0 rounded-xl flex items-center justify-center"
        style={{
          width: size,
          height: size,
          background: light ? '#0b0f0c' : '#c8f250',
        }}
      >
        <svg
          width={size * 0.65}
          height={size * 0.72}
          viewBox="0 0 56 62"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 7,4 L 7,58 L 22,58 A 27,27 0 0 0 22,4 Z"
            stroke={light ? '#c8f250' : '#0b0f0c'}
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="15" y="16" width="8" height="8" rx="1.5" fill={light ? '#c8f250' : '#0b0f0c'} />
          <rect x="25" y="18.5" width="15" height="3" rx="1" fill={light ? '#c8f250' : '#0b0f0c'} />
          <rect x="15" y="27" width="8" height="8" rx="1.5" fill={light ? '#c8f250' : '#0b0f0c'} />
          <rect x="25" y="27" width="8" height="8" rx="1.5" fill={light ? '#c8f250' : '#0b0f0c'} />
          <rect x="35" y="29.5" width="10" height="3" rx="1" fill={light ? '#c8f250' : '#0b0f0c'} />
          <rect x="15" y="38" width="8" height="8" rx="1.5" fill={light ? '#c8f250' : '#0b0f0c'} />
          <rect x="25" y="38" width="8" height="8" rx="1.5" fill={light ? '#c8f250' : '#0b0f0c'} />
          <rect x="35" y="38" width="8" height="8" rx="1.5" fill={light ? '#c8f250' : '#0b0f0c'} />
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              'text-[15px] font-display font-bold tracking-wider uppercase',
              light ? 'text-ink' : 'text-paper'
            )}
          >
            DIGITAL
          </span>
          <span
            className={cn(
              'text-[10px] font-display font-semibold tracking-[0.15em] uppercase',
              light ? 'text-ink/60' : 'text-lime'
            )}
          >
            EXPERT HUB
          </span>
        </div>
      )}
    </Link>
  )
}
