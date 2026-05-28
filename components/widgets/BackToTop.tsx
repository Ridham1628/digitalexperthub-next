'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ bottom: 'max(5.5rem, calc(5.5rem + env(safe-area-inset-bottom, 0px)))' }}
      className={cn(
        'fixed right-6 z-50 w-11 h-11 rounded-full bg-ink border border-white/20 flex items-center justify-center text-paper/80 hover:bg-lime hover:text-ink hover:border-transparent transition-all duration-200 shadow-lg',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
