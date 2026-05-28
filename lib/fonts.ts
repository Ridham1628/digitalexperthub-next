import { Bricolage_Grotesque, Hanken_Grotesk, Fraunces } from 'next/font/google'

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  // Variable font — use weight: 'variable' when specifying axes
  weight: 'variable',
  axes: ['opsz'],
})

export const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['italic'],
  // Variable font — use weight: 'variable' when specifying axes
  weight: 'variable',
  axes: ['opsz'],
})
