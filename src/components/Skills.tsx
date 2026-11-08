import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Network,
  Wrench,
  Server,
  ShieldCheck,
  Video,
  CheckCircle,
  Award,
} from 'lucide-react'
import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  networking: Network,
  support: Wrench,
  systems: Server,
  security: ShieldCheck,
  av: Video,
}

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all')

  const filteredGroups =
    activeTab === 'all'
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeTab)

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#0a1222] grid-bg">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Proficiencies"
          title="Verified Field Skills &amp; Certifications"
          description="Every capability displayed below is backed by documented professional experience, formal certifications, or real-world field installations."
        />

        {/* Filter Tabs */}
        <Reveal className="flex justify-center mt-8 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-slate-900/90 p-1.5 border border-slate-800 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Capabilities
            </button>
            {skillGroups.map((group) => {
              const Icon = categoryIcons[group.id] || Network
              const isActive = activeTab === group.id
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveTab(group.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{group.title}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-10 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
            <span>Demonstrated Field Experience</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex h-2 w-2 rounded-full bg-blue-400" />
            <span>Formally Certified Credential</span>
          </div>
        </div>

        {/* Skills Groups Display */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredGroups.map((group) => {
              const Icon = categoryIcons[group.id] || Network
              return (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-slate-800/90 bg-[#0e1726]/80 p-6 sm:p-8 backdrop-blur-md"
                >
                  {/* Group Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-800 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-display text-white">
                          {group.title}
                        </h3>
                        <p className="text-xs text-slate-400">{group.blurb}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {group.items.length} competencies
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {group.items.map((skill) => {
                      const isCertified = skill.level === 'certified'
                      return (
                        <div
                          key={skill.name}
                          className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-3.5 hover:border-slate-700 hover:bg-slate-900/90 transition-all flex flex-col justify-between"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="text-sm font-medium text-slate-200">
                              {skill.name}
                            </span>
                            {isCertified ? (
                              <span className="shrink-0 inline-flex items-center gap-1 rounded bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[10px] font-mono font-medium text-blue-300">
                                <Award className="h-3 w-3" />
                                Certified
                              </span>
                            ) : (
                              <span className="shrink-0 inline-flex items-center gap-1 rounded bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 text-[10px] font-mono font-medium text-cyan-300">
                                <CheckCircle className="h-3 w-3" />
                                Field
                              </span>
                            )}
                          </div>

                          {skill.note && (
                            <p className="text-[11px] font-mono text-slate-400 pt-1.5 border-t border-slate-800/60">
                              {skill.note}
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

