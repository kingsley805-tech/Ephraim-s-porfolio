import { services } from '../data/services'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0a1222] grid-bg">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions &amp; Offerings"
          title="Professional IT &amp; Engineering Services"
          description="Qualified services tailored for commercial offices, residential facilities, ISP operations, community networks, and event broadcasts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={idx * 0.05}>
                <div className="group relative rounded-2xl border border-slate-800 bg-[#0e1726]/80 p-6 sm:p-7 text-left hover:border-cyan-500/40 hover:bg-[#111d30]/90 transition-all flex flex-col justify-between shadow-xl">
                  {/* Glowing background hint on hover */}
                  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/5 group-hover:bg-cyan-500/15 blur-xl transition-all" />

                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-cyan-400 mb-5 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-bold font-display text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-cyan-400">Accra &amp; Remote</span>
                    <span>Service 0{idx + 1}</span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
