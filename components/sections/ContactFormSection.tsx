'use client'

import { useState } from 'react'

export default function ContactFormSection() {
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

  const inputClass =
    'w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-2xl text-paper placeholder:text-paper/35 focus:outline-none focus:border-lime/50 focus:bg-white/8 transition-colors text-sm font-body'

  return (
    <div className="bg-forest/40 border border-white/10 rounded-4xl p-8 lg:p-10">
      <h3 className="text-xl font-display font-bold text-paper mb-2">Send Us a Message</h3>
      <p className="text-sm text-paper/60 mb-7">We typically respond within 2 hours during business hours.</p>

      {status === 'success' ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">🎉</div>
          <h4 className="text-xl font-display font-bold text-paper mb-2">Message Sent!</h4>
          <p className="text-paper/60 text-sm">We&apos;ll get back to you within 2 business hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              required
              placeholder="Email Address *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className={inputClass}
            >
              <option value="" disabled>Select a Service</option>
              <option value="seo">SEO Services</option>
              <option value="ppc">Google Ads / PPC</option>
              <option value="social">Social Media Marketing</option>
              <option value="web-design">Website Design</option>
              <option value="web-dev">Website Development</option>
              <option value="content">Content Marketing</option>
              <option value="email">Email Marketing</option>
              <option value="branding">Branding</option>
              <option value="other">Other</option>
            </select>
          </div>
          <textarea
            placeholder="Tell us about your project or goals..."
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} resize-none`}
          />

          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again or call us directly.</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full btn btn-lime btn-lg justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              'Send Message →'
            )}
          </button>

          <p className="text-xs text-paper/35 text-center">
            By submitting you agree to our{' '}
            <a href="/privacy-policy" className="text-lime hover:underline">Privacy Policy</a>
          </p>
        </form>
      )}
    </div>
  )
}
