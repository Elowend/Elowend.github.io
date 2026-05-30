import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import BootScreen from './components/BootScreen'
import EffectsOverlay from './components/EffectsOverlay'
import SplashCursor from './components/SplashCursor'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function PageWrapper({ children }) {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  )
}

function AppContent() {
  const [bootComplete, setBootComplete] = useState(false)

  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container ripple-container min-h-screen">
      {!bootComplete && <BootScreen onComplete={() => setBootComplete(true)} />}
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />
      <EffectsOverlay />
      <Header />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Hero bootComplete={bootComplete} />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
