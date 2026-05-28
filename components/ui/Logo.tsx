import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** Height in pixels of the full logo image (width scales proportionally) */
  height?: number
  className?: string
  /** When true renders the icon-only favicon mark (square crop) */
  iconOnly?: boolean
  /** Not used — kept for API compat; logo colours are baked into the PNG */
  light?: boolean
}

export default function Logo({
  height = 36,
  className,
  iconOnly = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center group', className)}
      aria-label="Digital Expert Hub - Home"
    >
      {iconOnly ? (
        /* Favicon / icon-only mark */
        <Image
          src="/favicon.png"
          alt="Digital Expert Hub"
          width={height}
          height={height}
          className="object-contain"
          priority
        />
      ) : (
        /* Full horizontal logo — natural aspect ratio 2.5:1 (500×200 px source) */
        <Image
          src="/logo.png"
          alt="Digital Expert Hub"
          width={Math.round(height * 2.5)}
          height={height}
          className="object-contain"
          priority
        />
      )}
    </Link>
  )
}
