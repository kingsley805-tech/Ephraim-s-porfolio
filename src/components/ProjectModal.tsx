import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Cpu,
  AlertCircle,
  CheckCircle,
  FileText,
} from 'lucide-react'
import type { Project } from '../data/projects'

interface Props {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  const [activeImageIdx, setActiveImageIdx] = useState(0)

  useEffect(() => {
    setActiveImageIdx(0)
  }, [project])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (!project) return
      if (e.key === 'ArrowRight') {
        setActiveImageIdx((prev) => (prev + 1) % project.gallery.length)
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIdx((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
      }
    }

    if (project) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const activeImage = project.gallery[activeImageIdx] || project.cover

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040812]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#0e1726] shadow-2xl no-scrollbar"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-[#0e1726]/95 px-6 py-4 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <span className="rounded-md bg-blue-600/20 border border-blue-500/30 px-2.5 py-1 text-xs font-mono font-medium text-cyan-300">
                {project.category}
              </span>
              <h3 className="text-lg font-bold font-display text-white truncate max-w-md">
                {project.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Gallery Viewer */}
            <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <div className="relative aspect-video w-full flex items-center justify-center bg-black">
                <img
                  src={activeImage}
                  alt={`${project.title} - view ${activeImageIdx + 1}`}
                  className="h-full w-full object-contain"
                />

                {/* Left/Right Carousel Controls */}
                {project.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIdx(
                          (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-cyan-500 hover:text-black transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIdx((prev) => (prev + 1) % project.gallery.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-cyan-500 hover:text-black transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Counter Pill */}
                <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2.5 py-1 text-xs font-mono text-white backdrop-blur-sm">
                  {activeImageIdx + 1} / {project.gallery.length}
                </div>
              </div>

              {/* Thumbnails Row */}
              {project.gallery.length > 1 && (
                <div className="flex gap-2 p-3 bg-slate-950/90 overflow-x-auto border-t border-slate-800/80">
                  {project.gallery.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        activeImageIdx === idx
                          ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/20'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description & Technical Deep Dive */}
            <div className="space-y-4">
              <div className="text-left">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-2">
                  Project Summary
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Challenge and Solution */}
              {(project.challenge || project.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {project.challenge && (
                    <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 p-4 text-left">
                      <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs font-mono mb-2">
                        <AlertCircle className="h-4 w-4" />
                        <span>Technical Challenge</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4 text-left">
                      <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs font-mono mb-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Solution &amp; Implementation</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Technologies */}
              <div className="pt-2 text-left">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 mb-2.5">
                  <Cpu className="h-4 w-4 text-cyan-400" />
                  <span>Hardware, Platforms &amp; Protocols</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-blue-950/50 border border-blue-800/40 px-3 py-1 text-xs font-mono text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Source Verification Note */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 flex items-start gap-2.5 text-xs text-slate-400 text-left">
                <FileText className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300">Verified Evidence: </strong>
                  {project.source}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
