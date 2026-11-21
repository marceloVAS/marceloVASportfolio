import { useState } from 'react'
import ProjectsSection from '../src/sections/ProjectStationHome';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      <section id="center">
        <div>
          <h1>Hey, I'm Marcelo</h1>
          <p>Toronto based Front-end Developer.</p>
          <p>As a Front-End Developer and UX Designer, I've worn multiple hats in different interactive projects.</p>
        </div>
        <button>
          BOtao
        </button>
      </section>
      
      <ProjectsSection />

      <Footer />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
