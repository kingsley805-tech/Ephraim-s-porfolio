import {
  Wifi,
  Server,
  Layers,
  Radio,
} from 'lucide-react'
import { toolGroups } from '../data/tools'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Tools() {
  const groupIcons = [Wifi, Radio, Server, Layers]

  return (
    <section id="tools" className="relative py-24 sm:py-32 bg-[#080F1C]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Equipment &amp; Environments"
          title="Hardware, Tooling &amp; Infrastructure Ecosystem"
          description="A categorized catalog of physical networking devices, operating platforms, and diagnostic utilities deployed across projects and daily support roles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {toolGroups.map((group, idx) => {
            const Icon = groupIcons[idx % groupIcons.length]
            const isField = group.source === 'field'

            return (
              <Reveal key={group.title} delay={idx * 0.08}>
                <div className="rounded-2xl border border-slate-800 bg-[#0e1726]/80 p-6 text-left flex flex-col justify-between h-full hover:border-slate-700 transition-all shadow-xl">
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-cyan-400">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-bold font-display text-white">
                          {group.title}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {group.items.map((tool) => (
                        <li
                          key={tool}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800/70">
                    <span
                      className={`inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        isField
                          ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/30'
                          : 'bg-blue-950/60 text-blue-300 border border-blue-800/30'
                      }`}
                    >
                      {isField ? 'Physical Hardware Deployed' : 'Enterprise Software / CV'}
                    </span>
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
