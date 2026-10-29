import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection' // <-- 1. Import it here
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectsSection />
    </div>
  )
}

export default App