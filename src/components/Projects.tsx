import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Layers,
  ArrowRight,
  Maximize2,
} from 'lucide-react'
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from '../data/projects'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All')
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#0a1222] grid-bg">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Practical Implementations"
          title="Documented Technical Projects"
          description="Real infrastructure installations, ISP hotspot management, point-to-point wireless links, satellite backhaul, Proxmox virtualization, and hardware engineering."
        />

        {/* Category Filters */}
        <Reveal className="flex justify-center mt-8 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-slate-900/90 p-1.5 border border-slate-800 backdrop-blur-md">
            {projectCategories.map((category) => {
              const isActive = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl border border-slate-800/90 bg-[#0e1726]/85 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
              >
                <div>
                  {/* Project Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726] via-transparent to-transparent opacity-80" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md bg-slate-900/90 border border-slate-700/80 px-2.5 py-1 text-[11px] font-mono font-medium text-cyan-300 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Gallery Count Pill */}
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 rounded-md bg-black/70 px-2 py-0.5 text-[11px] font-mono text-slate-300 backdrop-blur-sm">
                        <Layers className="h-3 w-3 text-cyan-400" />
                        {project.gallery.length} photos
                      </span>
                    </div>

                    {/* Hover Overlay Button */}
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="absolute inset-0 flex items-center justify-center bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]"
                      aria-label={`View ${project.title} details`}
                    >
                      <span className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/30">
                        <Maximize2 className="h-4 w-4" />
                        <span>Inspect Project</span>
                      </span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 text-left">
                    <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-slate-800/80 border border-slate-700/50 px-2 py-0.5 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded bg-slate-800/50 px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0 text-left">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/50 py-2.5 text-xs font-semibold text-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all"
                  >
                    <span>View Technical Details &amp; Gallery</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  )
}
