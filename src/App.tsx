import { Seo } from './components/Seo'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WorkedFor } from './components/WorkedFor'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Gallery } from './components/Gallery'
import { VideoShowcase } from './components/VideoShowcase'
import { Education } from './components/Education'
import { Services } from './components/Services'
import { Tools } from './components/Tools'
import { CvSection } from './components/CvSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#080F1C] text-[#F8FAFC]">
      <Seo />
      <Navbar />

      <main>
        <Hero />
        <WorkedFor />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Gallery />
        <VideoShowcase />
        <Education />
        <Services />
        <Tools />
        <CvSection />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
