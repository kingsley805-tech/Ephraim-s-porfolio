import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import type { GalleryItem } from '../data/gallery'

interface Props {
  items: GalleryItem[]
  initialIndex: number | null
  onClose: () => void
}

export function Lightbox({ items, initialIndex, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    setCurrentIndex(initialIndex)
    setIsZoomed(false)
  }, [initialIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }

    if (currentIndex !== null) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [currentIndex, items.length])

  if (currentIndex === null || !items[currentIndex]) return null

  const currentItem = items[currentIndex]

  const handleNext = () => {
    setIsZoomed(false)
    setCurrentIndex((prev) => (prev !== null ? (prev + 1) % items.length : null))
  }

  const handlePrev = () => {
    setIsZoomed(false)
    setCurrentIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null))
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030712]/95 backdrop-blur-lg"
        />

        {/* Lightbox Controls Top Bar */}
        <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-cyan-950/80 border border-cyan-800/40 px-2.5 py-1 text-xs font-mono text-cyan-300">
              {currentItem.category}
            </span>
            <span className="text-xs font-mono text-slate-300">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
              title={isZoomed ? 'Zoom out' : 'Zoom in'}
            >
              {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-cyan-500 hover:text-black transition-all shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-cyan-500 hover:text-black transition-all shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Main Image Container */}
        <div className="relative z-40 max-h-[82vh] max-w-[92vw] flex flex-col items-center justify-center p-2 sm:p-4">
          <motion.div
            key={currentItem.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: isZoomed ? 1.35 : 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className={`relative max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl cursor-${
              isZoomed ? 'zoom-out' : 'zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-h-[70vh] sm:max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* Caption & Metadata Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 max-w-2xl text-center px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md"
          >
            <p className="text-sm text-slate-200 font-medium">{currentItem.caption}</p>
            <p className="text-[11px] font-mono text-slate-400 mt-1">{currentItem.alt}</p>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}
