import { workedFor } from '../data/profile'
import { Reveal } from './Reveal'

export function WorkedFor() {
  return (
    <section className="relative py-16 bg-[#070d18] border-y border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-blue-600/5"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 font-mono mb-2">
            Enterprise Client Experience
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Organizations &amp; Clients Worked For
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
            Practical IT support, network deployments, systems maintenance, and security infrastructure delivered for government departments, international consultants, higher education, and healthcare institutions.
          </p>
        </Reveal>

        {/* Logo Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {workedFor.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 0.06}>
              <div className="group relative h-full rounded-2xl border border-slate-800 bg-[#0e1726]/90 p-4 flex flex-col items-center justify-between text-center hover:border-cyan-500/40 hover:bg-[#111e33] transition-all shadow-lg hover:shadow-cyan-500/10">
                {/* Logo Frame */}
                <div className="h-16 w-full flex items-center justify-center p-2 rounded-xl bg-white/95 border border-slate-700/60 shadow-inner overflow-hidden mb-3 group-hover:scale-105 transition-transform">
                  <img
                    src={item.logo}
                    alt={`${item.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Company Name & Role */}
                <div className="w-full">
                  <h3 className="text-xs font-bold font-display text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-1">
                    {item.name}
                  </h3>
                  <span className="block text-[10px] font-mono text-cyan-400/90 mb-1">
                    {item.role}
                  </span>
                  <p className="text-[10px] text-slate-400 leading-tight line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
