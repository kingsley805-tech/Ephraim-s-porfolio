import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileDown, Send, ChevronRight } from 'lucide-react'
import { profile } from '../data/profile'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#videos', label: 'Videos' },
  { href: '#education', label: 'Education' },
  { href: '#services', label: 'Services' },
  { href: '#cv', label: 'CV' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map((link) => link.href.slice(1))
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080F1C]/92 border-b border-slate-800/80 backdrop-blur-md py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand with Profile Image */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-cyan-500/30 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform bg-slate-900">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-[#080F1C] animate-pulse" />
            </div>

            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                  {profile.name}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {profile.status.split('·')[0].trim()}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono tracking-wide">
                Networking &amp; IT Support Specialist
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 rounded-full bg-slate-900/60 p-1.5 border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-medium transition-colors rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/80 to-cyan-600/80 shadow-sm"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Action Buttons & Animated Hamburger Button */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <a
                href={profile.cvPath}
                download="Ephraim-Addae-Sam-CV.pdf"
                className="flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-2 text-xs font-medium text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-sm shadow-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileDown className="h-4 w-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-medium text-white hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Contact</span>
              </a>
            </div>

            {/* Custom Animated Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden relative flex h-11 w-11 flex-col items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/90 text-slate-300 hover:text-white hover:border-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative h-4 w-5 flex flex-col justify-between items-center">
                {/* Top line */}
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { rotate: 45, y: 7, backgroundColor: '#06B6D4' }
                      : { rotate: 0, y: 0, backgroundColor: '#F8FAFC' }
                  }
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="h-0.5 w-5 rounded-full block origin-center"
                />

                {/* Middle line */}
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1, backgroundColor: '#38BDF8' }
                  }
                  transition={{ duration: 0.15 }}
                  className="h-0.5 w-5 rounded-full block"
                />

                {/* Bottom line */}
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { rotate: -45, y: -7, backgroundColor: '#06B6D4' }
                      : { rotate: 0, y: 0, backgroundColor: '#F8FAFC' }
                  }
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="h-0.5 w-5 rounded-full block origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Drop/Slide in from Left) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Left Drawer Panel */}
            <motion.aside
              initial={{ x: '-100%', opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 bottom-0 left-0 w-80 max-w-[85vw] bg-[#080F1C]/98 border-r border-slate-800 shadow-2xl backdrop-blur-2xl flex flex-col justify-between p-6 z-50 overflow-y-auto"
            >
              <div>
                {/* Drawer Profile Header */}
                <div className="flex items-center gap-3.5 pb-6 border-b border-slate-800/80 mb-6">
                  <div className="relative h-12 w-12 shrink-0 rounded-xl overflow-hidden border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/20 bg-slate-900">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="h-full w-full object-cover object-top"
                    />
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#080F1C] animate-pulse" />
                  </div>

                  <div className="overflow-hidden">
                    <h2 className="font-display font-bold text-white text-base truncate">
                      {profile.name}
                    </h2>
                    <p className="text-[11px] font-mono text-cyan-400 truncate">
                      {profile.title}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono mt-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      On-Call &middot; Accra
                    </span>
                  </div>
                </div>

                {/* Navigation Links with Staggered Entrance */}
                <div className="space-y-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2 px-3">
                    Menu Navigation
                  </p>
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.href.slice(1)
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ x: -16, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.035 + 0.05 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600/30 to-cyan-600/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isActive ? 'bg-cyan-400' : 'bg-slate-600'
                            }`}
                          />
                          <span>{link.label}</span>
                        </span>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            isActive ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                          }`}
                        />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-slate-800/80 space-y-2.5 mt-6">
                <a
                  href={profile.cvPath}
                  download="Ephraim-Addae-Sam-CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/40 py-3 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-colors shadow-sm"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Official CV (PDF)</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs font-semibold text-white hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/20"
                >
                  <Send className="h-4 w-4" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
