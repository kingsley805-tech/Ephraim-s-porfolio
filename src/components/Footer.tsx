import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUp,
  Mail,
  Phone,
  FileDown,
} from 'lucide-react'
import { profile } from '../data/profile'
import { LinkedinIcon } from './Icons'

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#050a14] border-t border-slate-800/80 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80 text-left">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-display font-bold text-white shadow-md shadow-cyan-500/20">
                EA
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">
                  {profile.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  Networking &amp; IT Support
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated to designing, deploying, and maintaining high-availability wireless infrastructure, structured LANs, and mission-critical systems.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-[11px] font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for On-Call &amp; Contract Roles</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Professional Biography
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Technical Proficiencies
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Career Experience Timeline
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Technical Project Showcase
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Field Photo Catalog (66)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Nav Col 2 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Resources &amp; Media
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#videos" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Video Documentation Showcase
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Education &amp; CCNA Credentials
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Engineering Services
                </a>
              </li>
              <li>
                <a href="#tools" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Hardware &amp; Equipment Tools
                </a>
              </li>
              <li>
                <a href={profile.cvPath} download="Ephraim-Addae-Sam-CV.pdf" className="text-cyan-400 hover:underline flex items-center gap-1 font-mono">
                  <FileDown className="h-3 w-3" />
                  <span>Download CV (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-cyan-400" />
                  <span className="truncate">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.phoneHref}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-cyan-400" />
                  <span>{profile.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li className="pt-2 text-slate-500 font-mono text-[11px]">
                Location: {profile.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All verified assets and credentials reserved.
          </p>

          
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xl shadow-blue-600/30 hover:bg-cyan-500 hover:text-black transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
