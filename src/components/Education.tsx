import {
  GraduationCap,
  Award,
  ShieldCheck,
  Building2,
} from 'lucide-react'
import { education, certifications } from '../data/education'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-[#080F1C]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic &amp; Professional Credentials"
          title="Education &amp; Industry Certifications"
          description="Documented academic degrees and globally recognized technical certifications extracted directly from the CV."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Formal Education Column */}
          <div className="space-y-6">
            <Reveal>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 border border-blue-500/30 text-cyan-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold font-display text-white">
                    Formal Higher Education
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Degrees &amp; Secondary School Qualifications
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <Reveal key={item.id} delay={idx * 0.08}>
                  <div className="rounded-2xl border border-slate-800 bg-[#0e1726]/80 p-5 sm:p-6 text-left hover:border-slate-700 transition-all shadow-lg">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-base font-bold font-display text-white">
                        {item.title}
                      </h4>
                      <span className="shrink-0 rounded-md bg-blue-950/60 border border-blue-800/40 px-2 py-0.5 text-[11px] font-mono text-blue-300">
                        Academic
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-2">
                      <Building2 className="h-3.5 w-3.5" />
                      <span>{item.issuer}</span>
                    </div>

                    {item.detail && (
                      <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/60">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications & Licenses Column */}
          <div className="space-y-6">
            <Reveal>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400">
                  <Award className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold font-display text-white">
                    Certifications &amp; Licenses
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Industry Credentials &amp; Academy Programs
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-4">
              {certifications.map((item, idx) => (
                <Reveal key={item.id} delay={idx * 0.08}>
                  <div className="rounded-2xl border border-slate-800 bg-[#0e1726]/80 p-5 sm:p-6 text-left hover:border-cyan-500/30 transition-all shadow-lg">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-base font-bold font-display text-white">
                        {item.title}
                      </h4>
                      <span className="shrink-0 rounded-md bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 text-[11px] font-mono text-cyan-300">
                        Certified
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 mb-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                      <span>{item.issuer}</span>
                    </div>

                    {item.detail && (
                      <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/60">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
