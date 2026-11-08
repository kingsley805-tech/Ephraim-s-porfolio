import {
  CheckCircle2,
  FileDown,
  Calendar,
  Percent,
  Users,
  Radio,
  ExternalLink,
} from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#080F1C]">
      {/* Subtle top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Profile"
          title="Field-Grounded IT Engineering &amp; Systems Support"
          description="Solving technical problems, keeping networks dependable, and building IT infrastructure that people and businesses can rely on."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Visual Card with Real Console Photograph */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative rounded-2xl border border-slate-800 bg-[#0e1726] p-4 shadow-xl overflow-hidden group">
                {/* Glow accent */}
                <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-cyan-500/15 blur-2xl group-hover:bg-cyan-500/25 transition-all" />

                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-900 border border-slate-800/80">
                  <img
                    src="/images/rack-console-session.jpeg"
                    alt="Ephraim Addae Sam conducting a live console session in front of an IT equipment rack"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="bg-slate-900/90 border border-slate-700/80 px-2.5 py-1 rounded-md backdrop-blur-sm text-cyan-300 flex items-center gap-1.5">
                      <Radio className="h-3 w-3" />
                      Rack &amp; Console Session
                    </span>
                    <span className="text-slate-400">Accra, Ghana</span>
                  </div>
                </div>

                {/* Subtitle / Bio summary */}
                <div className="p-4 pt-5 text-left">
                  <h3 className="text-lg font-bold font-display text-white mb-1">
                    {profile.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">
                    {profile.title}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Based in Accra, operating at the intersection of wireless field engineering, datacenter rack servicing, and high-reliability end-user support.
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <a
                      href={profile.cvPath}
                      download="Ephraim-Addae-Sam-CV.pdf"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <FileDown className="h-4 w-4" />
                      <span>Download Resume (PDF)</span>
                    </a>

                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Verified Statistics Grid */}
            <div className="grid grid-cols-2 gap-3.5 mt-4">
              {profile.stats.map((stat, idx) => {
                const icons = [Calendar, Percent, Users, Radio]
                const Icon = icons[idx % icons.length]
                return (
                  <Reveal key={stat.label} delay={idx * 0.08}>
                    <div className="rounded-xl border border-slate-800/80 bg-[#111C2E]/60 p-4 text-left hover:border-slate-700 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5 text-cyan-400">
                        <Icon className="h-4 w-4" />
                        <span className="text-[11px] font-mono text-slate-400">
                          {stat.label}
                        </span>
                      </div>
                      <div className="text-2xl font-bold font-display text-white tracking-tight">
                        {stat.value}
                      </div>
                      <p className="mt-1 text-[11px] text-slate-400 leading-tight">
                        {stat.hint}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Strengths */}
          <div className="lg:col-span-7 text-left space-y-6">
            <Reveal>
              <div className="prose prose-invert max-w-none space-y-4 text-base leading-relaxed text-slate-300">
                {profile.about.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Core Strengths Checklist */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-slate-800 bg-[#0e1726]/80 p-6 mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-4 font-mono">
                  Core Strengths &amp; Operating Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profile.strengths.map((strength) => (
                    <div
                      key={strength}
                      className="flex items-start gap-2.5 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
