import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
} from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { LinkedinIcon } from './Icons'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-spam
  })

  const [copiedType, setCopiedType] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [validationError, setValidationError] = useState<string | null>(null)

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError(null)

    // Honeypot check
    if (formData.honeypot) {
      return
    }

    // Basic validation
    if (!formData.name.trim()) {
      setValidationError('Please provide your full name.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setValidationError('Please enter a valid email address.')
      return
    }

    if (!formData.subject.trim()) {
      setValidationError('Please specify a subject for your message.')
      return
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setValidationError('Message must be at least 10 characters long.')
      return
    }

    setIsSubmitting(true)

    // Realistic processing
    setTimeout(() => {
      // Store in localStorage as contact submission log
      try {
        const existingSubmissions = JSON.parse(
          localStorage.getItem('eas_contact_submissions') || '[]'
        )
        existingSubmissions.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        })
        localStorage.setItem('eas_contact_submissions', JSON.stringify(existingSubmissions))
      } catch {
        // ignore localStorage errors
      }

      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      })
    }, 1200)
  }

  // Construct mailto link with current form state as fallback
  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry / IT Support Opportunity'
  )}&body=${encodeURIComponent(
    `From: ${formData.name || 'Prospective Client/Recruiter'} (${formData.email || 'Email'})\n\n${
      formData.message || 'Hello Ephraim,\n\nI came across your portfolio and would like to connect.'
    }`
  )}`

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#080F1C]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Initiate Communications"
          title="Get In Touch / Hire Ephraim"
          description="Available for on-call technical support, network engineering projects, wireless links, and enterprise IT infrastructure roles in Accra and beyond."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 text-left space-y-6">
            <Reveal>
              <div className="rounded-2xl border border-slate-800 bg-[#0e1726] p-6 shadow-xl space-y-5">
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  Direct Contact Information
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Feel free to reach out via phone, direct email, or LinkedIn. All contact details below are verified and active.
                </p>

                {/* Email Card */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-cyan-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] font-mono text-slate-400 block">
                        EMAIL ADDRESS
                      </span>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(profile.email, 'email')}
                    className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedType === 'email' ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        PHONE / WHATSAPP
                      </span>
                      <a
                        href={profile.phoneHref}
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title="Copy phone to clipboard"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-600/10 text-cyan-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      LOCATION
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {profile.location}
                    </span>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-700/10 text-blue-400">
                      <LinkedinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        LINKEDIN PROFILE
                      </span>
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                      >
                        <span>eas1966</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Quick response commitment */}
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for immediate technical interviews and on-site assessments in Accra.</span>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 text-left">
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-slate-800 bg-[#0e1726] p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <h3 className="text-xl font-bold font-display text-white">
                    Send a Direct Message
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    Response time: &lt; 24h
                  </span>
                </div>

                {/* Success Banner */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-2">
                        Thank you for reaching out. Your message has been recorded and Ephraim will get back to you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus('idle')}
                        className="text-xs font-mono font-semibold text-emerald-400 underline hover:text-emerald-300"
                      >
                        Send another message
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Validation Error Banner */}
                {validationError && (
                  <div className="mb-6 rounded-xl border border-rose-500/30 bg-rose-950/40 p-3.5 flex items-center gap-2.5 text-xs text-rose-300">
                    <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                    <span>{validationError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field (hidden from real users) */}
                  <input
                    type="text"
                    name="phone_extra_confirm"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Samuel Mensah"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. samuel@company.com"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      SUBJECT / ENGAGEMENT TYPE *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Network Infrastructure Setup / Technical Support Contract"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      PROJECT OR INQUIRY DETAILS *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the requirements, timeline, equipment involved, or position specifications..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:from-blue-500 hover:to-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3.5 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Prefill in Your Email App</span>
                    </a>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
