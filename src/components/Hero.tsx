import { motion } from 'framer-motion'
import {
  FileDown,
  ArrowRight,
  Radio,
  Server,
  Activity,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react'
import { profile } from '../data/profile'
import { NetworkCanvas } from './NetworkCanvas'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 grid-bg"
    >
      {/* Interactive Network Topology Simulation */}
      <NetworkCanvas />

      {/* Radial Gradient Glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 text-left">
            {/* Candidate Profile Avatar & Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="relative h-18 w-18 sm:h-20 sm:w-20 shrink-0 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/20 bg-slate-900 group">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#080F1C] animate-pulse" />
              </div>

              <div>
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/80 px-3.5 py-1 backdrop-blur-md mb-1.5 shadow-sm shadow-cyan-500/10">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-medium text-cyan-300">
                    {profile.status}
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-400">
                  {profile.heroEyebrow}
                </p>
              </div>
            </motion.div>

            {/* Candidate Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-white mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  {profile.name}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-display font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                <span>{profile.title}</span>
              </p>
            </motion.div>

            {/* Core Value Proposition / Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-display font-bold text-slate-100 leading-snug mb-5"
            >
              {profile.heroHeading}
            </motion.h2>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {profile.heroSupport} Field-tested with MikroTik, Ubiquiti, Ruijie, and Starlink infrastructure; rack operations; Proxmox virtualization; and dedicated layer-by-layer troubleshooting.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:from-blue-500 hover:to-blue-400 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Explore Technical Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={profile.cvPath}
                download="Ephraim-Addae-Sam-CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-900/90 px-5 py-3.5 text-sm font-semibold text-cyan-300 shadow-md shadow-cyan-950/40 hover:bg-cyan-950/40 hover:border-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileDown className="h-4 w-4 text-cyan-400" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/50 px-5 py-3.5 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Verified Credentials Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-800/70"
            >
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                Verified credentials:
              </span>
              <span className="rounded-md bg-blue-950/60 border border-blue-800/40 px-2.5 py-1 text-[11px] font-mono text-blue-300">
                Cisco CCNA
              </span>
              <span className="rounded-md bg-blue-950/60 border border-blue-800/40 px-2.5 py-1 text-[11px] font-mono text-blue-300">
                Cisco Switching &amp; Routing
              </span>
              <span className="rounded-md bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 text-[11px] font-mono text-cyan-300">
                Google IT Support Pro
              </span>
              <span className="rounded-md bg-slate-800/80 border border-slate-700/60 px-2.5 py-1 text-[11px] font-mono text-slate-300">
                Audinate Dante (L3)
              </span>
            </motion.div>
          </div>

          {/* Right Column: Live Network Telemetry & Infrastructure Terminal */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none rounded-2xl border border-slate-700/70 bg-[#0e1726]/90 p-5 shadow-2xl backdrop-blur-xl"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    eas-noc-telemetry.live
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <Activity className="h-3.5 w-3.5 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Telemetry Cards / Verified Field Metrics */}
              <div className="space-y-3 font-mono text-xs">
                {/* Metric 1: Starlink Telemetry */}
                <div className="rounded-xl border border-slate-800/90 bg-slate-900/80 p-3.5 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <Radio className="h-3.5 w-3.5" />
                      Starlink Terminal (Shylink)
                    </span>
                    <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] text-emerald-400 font-medium">
                      99.6% Ping
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-slate-300">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Downlink</span>
                      <span className="font-semibold text-white">92.1 Mbps</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Uplink</span>
                      <span className="font-semibold text-white">25.9 Mbps</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Latency</span>
                      <span className="font-semibold text-cyan-300">29 ms</span>
                    </div>
                  </div>
                </div>

                {/* Metric 2: Ubiquiti PtP Backhaul */}
                <div className="rounded-xl border border-slate-800/90 bg-slate-900/80 p-3.5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                      <Radio className="h-3.5 w-3.5" />
                      airOS 8 Point-to-Point Link
                    </span>
                    <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-300 font-medium">
                      5 GHz PtP
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] mb-1.5">
                    Sierra Lake Hostel LiteBeam ↔ LiteAP AC Sector
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>CINR: <strong className="text-white">+28 dB</strong></span>
                    <span>Expected: <strong className="text-white">-41 to -46 dBm</strong></span>
                    <span>WPA2 Bridge</span>
                  </div>
                </div>

                {/* Metric 3: Proxmox & Rack Ops */}
                <div className="rounded-xl border border-slate-800/90 bg-slate-900/80 p-3.5 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
                      <Server className="h-3.5 w-3.5" />
                      Proxmox VE 8.2 (Datacenter astro)
                    </span>
                    <span className="rounded bg-purple-500/10 px-1.5 py-0.5 text-[10px] text-purple-300 font-medium">
                      4 Guests Running
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[10px]">
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-slate-300">Ubuntu</span>
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-slate-300">Win 11</span>
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-cyan-300">MikroTik CHR</span>
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-slate-300">Windows Server 22</span>
                  </div>
                </div>

                {/* Verified Impact Banner */}
                <div className="rounded-xl bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-cyan-500/20 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-200">
                      Preventive maintenance outcome:
                    </span>
                  </div>
                  <span className="text-xs font-bold text-cyan-300">
                    -20% Client Downtime
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-14 lg:mt-16 text-center"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest">Explore Profile</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
