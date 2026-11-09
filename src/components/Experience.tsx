import {
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  Cpu,
} from 'lucide-react'
import { experience } from '../data/experience'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const clientLogos: Record<string, string> = {
  'Cowater International Ghana': '/images/worked-for/cowater.jpeg',
  'Shalina Healthcare Ghana': '/images/worked-for/shalina.jpeg',
  'Nova University': '/images/worked-for/nova.jpeg',
  'Department of Feeder Roads': '/images/worked-for/feeder-roads.jpeg',
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#080F1C]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Professional IT Experience &amp; Engagements"
          description="A chronological record of verified employment, client assignments, enterprise contract roles, and infrastructure deployments extracted directly from the CV."
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-3 bottom-3 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-slate-800" />

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.08}>
                <div className="relative pl-12 sm:pl-20">
                  {/* Timeline Node */}
                  <div
                    className={`absolute left-2 sm:left-6 -translate-x-1/2 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      item.current
                        ? 'border-cyan-400 bg-cyan-950 shadow-lg shadow-cyan-500/40'
                        : 'border-slate-600 bg-slate-900'
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        item.current ? 'bg-cyan-400 animate-pulse' : 'bg-slate-400'
                      }`}
                    />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl border border-slate-800/90 bg-[#0e1726]/85 p-6 sm:p-7 backdrop-blur-md hover:border-slate-700 transition-all shadow-xl">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold font-display text-white">
                            {item.role}
                          </h3>
                          {item.current && (
                            <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 text-[11px] font-mono text-cyan-300">
                              Active / Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                          <span className="flex items-center gap-1 text-slate-300 font-medium">
                            <Building className="h-3.5 w-3.5 text-cyan-400" />
                            {item.organization}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-slate-500" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-3 py-1.5 rounded-lg shrink-0">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Client Badges with Logos if available */}
                    {item.clients && item.clients.length > 0 && (
                      <div className="mb-5 rounded-xl bg-slate-900/80 border border-slate-800 p-3.5">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-2.5">
                          Client Organizations Served:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.clients.map((client) => {
                            const logo = clientLogos[client]
                            return (
                              <span
                                key={client}
                                className="inline-flex items-center gap-2 rounded-lg bg-slate-800/90 border border-slate-700/60 px-3 py-1.5 text-xs text-slate-200 shadow-sm"
                              >
                                {logo ? (
                                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white p-0.5 overflow-hidden">
                                    <img
                                      src={logo}
                                      alt=""
                                      className="max-h-full max-w-full object-contain"
                                    />
                                  </span>
                                ) : (
                                  <Building className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                                )}
                                <span>{client}</span>
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Responsibilities */}
                    <div className="space-y-2 mb-5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Tags */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="pt-4 border-t border-slate-800/70 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mr-1">
                          <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                          Tech:
                        </span>
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-blue-950/40 border border-blue-900/40 px-2.5 py-0.5 text-xs font-mono text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
