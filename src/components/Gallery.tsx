import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, Search, X, RotateCcw } from 'lucide-react'
import { gallery, galleryCategories } from '../data/gallery'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Lightbox } from './Lightbox'

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems = gallery.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory
    const query = searchQuery.trim().toLowerCase()
    const matchesSearch =
      !query ||
      item.caption.toLowerCase().includes(query) ||
      item.alt.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })

  const resetFilters = () => {
    setSelectedCategory('All')
    setSearchQuery('')
  }

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#080F1C]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Field Evidence"
          title="Technical Photographic Gallery"
          description={`Comprehensive catalog of all ${gallery.length} field photographs documenting tower climbs, wireless alignment, rack cabling, GPON terminals, Starlink setups, and endpoint servicing.`}
        />

        {/* Search Bar & Category Controls */}
        <Reveal className="mt-8 mb-10 space-y-4 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 66 photos (e.g. Starlink, MikroTik, Tower, GPON, Ruijie)..."
              className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 pl-10 pr-10 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-slate-900/90 p-1.5 border border-slate-800 backdrop-blur-md">
            {galleryCategories.map((category) => {
              const isActive = selectedCategory === category
              const count =
                category === 'All'
                  ? gallery.length
                  : gallery.filter((i) => i.category === category).length

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-2 pt-1">
            <span>
              Showing {filteredItems.length} of {gallery.length} field photographs
              {searchQuery ? ` matching "${searchQuery}"` : ''}
            </span>
            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </Reveal>

        {/* Empty State when no results */}
        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-[#0e1726]/80 p-12 text-center max-w-md mx-auto my-12">
            <p className="text-slate-300 text-sm mb-4">
              No photographs found matching the selected filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Show All 66 Photographs</span>
            </button>
          </div>
        ) : (
          /* Image Grid */
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.02, 0.3) }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-cyan-500/50 cursor-pointer shadow-md transition-all hover:shadow-cyan-500/10"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3" />

                  {/* Top Badge */}
                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="rounded bg-black/70 px-2 py-0.5 text-[10px] font-mono text-cyan-300 backdrop-blur-sm border border-slate-700">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Caption and Zoom Icon */}
                  <div className="absolute bottom-2 inset-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between gap-1.5">
                    <p className="text-[11px] font-medium text-white line-clamp-2 drop-shadow-sm text-left">
                      {item.caption}
                    </p>
                    <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500 text-slate-950 shadow-md">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        items={filteredItems}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  )
}
