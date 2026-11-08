import { useRef, useState } from 'react'
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  FileVideo,
} from 'lucide-react'
import { videos, type VideoItem } from '../data/videos'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function VideoCard({ item }: { item: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(false)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setIsPlaying(true)
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  const handleTimeUpdate = () => {
    const v = videoRef.current
    if (!v || !v.duration) return
    setCurrentTime(v.currentTime)
    setProgress((v.currentTime / v.duration) * 100)
  }

  const handleLoadedMetadata = () => {
    const v = videoRef.current
    if (!v) return
    setDuration(v.duration)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current
    if (!v || !v.duration) return
    const newTime = (parseFloat(e.target.value) / 100) * v.duration
    v.currentTime = newTime
    setProgress(parseFloat(e.target.value))
  }

  const handleFullscreen = () => {
    const v = videoRef.current
    if (!v) return
    if (v.requestFullscreen) {
      v.requestFullscreen()
    }
  }

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00'
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  return (
    <div
      className="group relative rounded-2xl border border-slate-800 bg-[#0e1726]/85 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 shadow-xl transition-all"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Container */}
      <div className="relative aspect-video w-full bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          className="h-full w-full object-cover"
        />

        {/* Big Center Play Overlay Button (when paused) */}
        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all cursor-pointer"
            aria-label={`Play ${item.title}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 fill-current ml-0.5" />
            </div>
          </button>
        )}

        {/* Video Control Bar */}
        <div
          className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 pt-6 flex flex-col gap-1.5 transition-opacity duration-200 ${
            isPlaying && !showControls ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Progress Seek Bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            aria-label="Seek video progress"
          />

          <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="hover:text-cyan-400 transition-colors p-1"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="hover:text-cyan-400 transition-colors p-1"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="h-4 w-4 text-rose-400" /> : <Volume2 className="h-4 w-4" />}
              </button>

              <span className="text-[11px] text-slate-400">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleFullscreen}
              className="hover:text-cyan-400 transition-colors p-1"
              aria-label="Fullscreen"
            >
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-5 text-left flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1.5">
            <FileVideo className="h-3.5 w-3.5" />
            <span>Field Recording</span>
          </div>
          <h3 className="text-base font-bold font-display text-white mb-2">
            {item.title}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function VideoShowcase() {
  return (
    <section id="videos" className="relative py-24 sm:py-32 bg-[#0a1222] grid-bg">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Live Field Recordings"
          title="Video Documentation Showcase"
          description={`Direct video recordings from on-site installations, live rack work, wireless access point mounting, and satellite performance verification.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {videos.map((video, idx) => (
            <Reveal key={video.id} delay={idx * 0.06}>
              <VideoCard item={video} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
