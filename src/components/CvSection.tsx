import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileDown,
  ExternalLink,
  Printer,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  FileText,
} from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const cvPages = [
  {
    num: 1,
    title: 'Page 1 — Profile, Career Objective & Recent Roles',
    image: '/cv/cv-page-1.png',
    summary: 'Personal contacts, career objective, Yabyne Technologies on-call role, Freelance wireless work, and major enterprise contract assignments (Cowater, Shalina Healthcare, Nova Univ, Department of Feeder Roads, First National Bank).',
  },
  {
    num: 2,
    title: 'Page 2 — Dataleap Technologies & A/V Broadcast Roles',
    image: '/cv/cv-page-2.png',
    summary: 'Dataleap Technologies support role (VDI/Citrix for 20+ users, 20% downtime reduction, datacenter ops), LightRoomMedia remote live production, and KOFM live broadcast workflow optimization.',
  },
  {
    num: 3,
    title: 'Page 3 — Education, Certifications & Hotspot Project',
    image: '/cv/cv-page-3.png',
    summary: 'BSc. Computer Science (UoPeople), BSc. Networking (GCTU), CCNA, Cisco SRW, Google IT Support, Audinate Dante (L3), AITI Cisco Academy, and detailed Hostel & Community Wi-Fi Hotspot project description.',
  },
]

export function CvSection() {
  const [activePage, setActivePage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const currentPage = cvPages[activePage]

  return (
    <section id="cv" className="relative py-24 sm:py-32 bg-[#0a1222] grid-bg">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="Official Professional Resume &amp; Credentials"
          description="Directly inspect the verified 3-page CV document or download the official PDF for recruitment and technical review."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          {/* Left Column: Quick Actions & Highlights */}
          <div className="lg:col-span-5 text-left space-y-6">
            <Reveal>
              <div className="rounded-2xl border border-slate-800 bg-[#0e1726] p-6 shadow-xl">
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-800">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-cyan-400">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-white">
                      Ephraim Addae Sam — CV
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      Format: Adobe PDF (3 Pages)
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  This official document outlines complete employment timelines, verified corporate client engagements in Ghana, certified Cisco/Google/Audinate credentials, and hands-on networking achievements.
                </p>

                {/* Primary Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={profile.cvPath}
                    download="Ephraim-Addae-Sam-CV.pdf"
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3.5 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:from-blue-500 hover:to-cyan-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <FileDown className="h-4 w-4" />
                    <span>Download Official PDF Resume</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={profile.cvPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 py-2.5 px-3 text-xs font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Open in Tab</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => window.open(profile.cvPath, '_blank')?.print()}
                      className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 py-2.5 px-3 text-xs font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
                    >
                      <Printer className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Print Document</span>
                    </button>
                  </div>
                </div>

                {/* Page Navigation Switcher */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                    <span>SELECT DOCUMENT PAGE:</span>
                    <span className="text-cyan-400">{activePage + 1} of 3</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {cvPages.map((page, idx) => (
                      <button
                        key={page.num}
                        type="button"
                        onClick={() => {
                          setActivePage(idx)
                          setIsZoomed(false)
                        }}
                        className={`rounded-xl p-2.5 text-center border transition-all ${
                          activePage === idx
                            ? 'bg-blue-600/20 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        <span className="block text-xs font-bold font-mono">
                          Page {page.num}
                        </span>
                        <span className="block text-[10px] text-slate-400 mt-0.5 truncate">
                          {page.num === 1 ? 'Objective' : page.num === 2 ? 'Experience' : 'Education'}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl bg-slate-900/80 border border-slate-800 p-3.5 text-xs text-slate-300">
                    <strong className="text-cyan-400 block mb-1">
                      {currentPage.title}
                    </strong>
                    <p className="text-[12px] leading-relaxed text-slate-400">
                      {currentPage.summary}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: High-Resolution Interactive Page Previewer */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="relative rounded-2xl border border-slate-800 bg-[#0e1726] p-4 sm:p-5 shadow-2xl">
                {/* Viewer Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-300">Preview: {currentPage.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      title={isZoomed ? 'Zoom out' : 'Zoom in'}
                    >
                      {isZoomed ? (
                        <>
                          <ZoomOut className="h-3.5 w-3.5" />
                          <span className="text-[11px]">Normal</span>
                        </>
                      ) : (
                        <>
                          <ZoomIn className="h-3.5 w-3.5" />
                          <span className="text-[11px]">Zoom</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Page Image Display */}
                <div
                  className={`relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 flex items-center justify-center transition-all ${
                    isZoomed ? 'max-h-[900px] overflow-auto' : 'max-h-[720px] overflow-hidden'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPage.image}
                      src={currentPage.image}
                      alt={`CV Page ${currentPage.num}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: isZoomed ? 1.3 : 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className={`w-full object-contain cursor-${isZoomed ? 'zoom-out' : 'zoom-in'}`}
                      onClick={() => setIsZoomed(!isZoomed)}
                    />
                  </AnimatePresence>

                  {/* Left / Right Page Switch Overlays */}
                  <button
                    type="button"
                    onClick={() => {
                      setActivePage((prev) => (prev - 1 + cvPages.length) % cvPages.length)
                      setIsZoomed(false)
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-cyan-500 hover:text-black transition-all shadow-lg"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActivePage((prev) => (prev + 1) % cvPages.length)
                      setIsZoomed(false)
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-cyan-500 hover:text-black transition-all shadow-lg"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Footer status */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                  <span>Click image to toggle zoom</span>
                  <span className="text-cyan-400">PDF Ready for Direct Download</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
