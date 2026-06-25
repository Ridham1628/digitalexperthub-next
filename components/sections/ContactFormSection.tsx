'use client'

import { useState, useId } from 'react'

export default function ContactFormSection() {
  const id = useId()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-2xl text-paper placeholder:text-paper/40 focus:outline-none focus-visible:border-lime/60 focus-visible:ring-2 focus-visible:ring-lime/30 hover:border-white/25 transition-colors text-sm font-body'

  const labelBase = 'block text-xs font-display font-semibold text-paper/80 uppercase tracking-wider mb-1.5'

  return (
    <div className="bg-forest/40 border border-white/10 rounded-4xl p-8 lg:p-10">
      <h3 className="text-xl font-display font-bold text-paper mb-2">Send Us a Message</h3>
      <p className="text-sm text-paper/70 mb-7">We typically respond within 2 hours during business hours.</p>

      {status === 'success' ? (
        <div className="text-center py-10" role="status" aria-live="polite">
          {/* SVG check instead of emoji */}
          <div className="w-16 h-16 rounded-full bg-lime/15 border border-lime/30 flex items-center justify-center mx-auto mb-5">
            <svg viewBox="0 0 24 24" fill="none" stroke="#c8f250" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h4 className="text-xl font-display font-bold text-paper mb-2">Message Sent!</h4>
          <p className="text-paper/70 text-sm">We&apos;ll get back to you within 2 business hours.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 text-sm text-lime font-display font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:rounded"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor={`${id}-name`} className={labelBase}>
                Full Name <span className="text-lime" aria-hidden="true">*</span>
              </label>
              <input
                id={`${id}-name`}
                type="text"
                required
                autoComplete="name"
                placeholder="Rajiv Sharma"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputBase}
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor={`${id}-email`} className={labelBase}>
                Email Address <span className="text-lime" aria-hidden="true">*</span>
              </label>
              <input
                id={`${id}-email`}
                type="email"
                required
                autoComplete="email"
                placeholder="rajiv@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputBase}
                aria-required="true"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor={`${id}-phone`} className={labelBase}>
                Phone Number
              </label>
              <input
                id={`${id}-phone`}
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor={`${id}-service`} className={labelBase}>
                Service Needed
              </label>
              <select
                id={`${id}-service`}
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={`${inputBase} appearance-none cursor-pointer`}
              >
                <option value="" className="bg-ink text-paper">Select a service…</option>
                <option value="seo" className="bg-ink text-paper">SEO Services</option>
                <option value="ppc" className="bg-ink text-paper">Google Ads / PPC</option>
                <option value="social" className="bg-ink text-paper">Social Media Marketing</option>
                <option value="web-design" className="bg-ink text-paper">Website Design</option>
                <option value="web-dev" className="bg-ink text-paper">Website Development</option>
                <option value="content" className="bg-ink text-paper">Content Marketing</option>
                <option value="email" className="bg-ink text-paper">Email Marketing</option>
                <option value="branding" className="bg-ink text-paper">Branding</option>
                <option value="other" className="bg-ink text-paper">Other / Not Sure</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor={`${id}-message`} className={labelBase}>
              Tell Us About Your Project
            </label>
            <textarea
              id={`${id}-message`}
              placeholder="Share your goals, current challenges, or any questions…"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputBase} resize-none`}
            />
          </div>

          {status === 'error' && (
            <p role="alert" className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              Something went wrong. Please try again or{' '}
              <a href="tel:+917986605418" className="underline">call us directly</a>.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full btn btn-lime btn-lg justify-center disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            aria-busy={status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Sending…</span>
              </>
            ) : (
              <>
                Send Message
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </>
            )}
          </button>

          <p className="text-xs text-paper/50 text-center">
            By submitting you agree to our{' '}
            <a href="/privacy-policy" className="text-lime hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime focus-visible:rounded">
              Privacy Policy
            </a>
            . We never share your data.
          </p>
        </form>
      )}
    </div>
  )
}
