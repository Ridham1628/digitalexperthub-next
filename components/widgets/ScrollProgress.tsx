'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-0.5 bg-lime z-[9999] transition-[width] duration-100"
      aria-hidden="true"
    />
  )
}
