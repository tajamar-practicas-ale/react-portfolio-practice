// import { useState } from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import { Home } from './pages/Home'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import './styles/App.scss'

function App() {

  return (
    <>
      {/* <header>
        <div className="brand">
          <Link to='/'>Amazona</Link>
        </div>
        <div className="header-links">
          <Link to='/cart'>Cart</Link>
          <Link to='/signin'>Sign In</Link>
        </div>
      </header>
      <main className='main'>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
      <footer></footer> */}
      <header className="header">
        <div className="brand">
          <a href="./#hero">
            <h2>Alexander Rojas</h2>
          </a>
        </div>
        <div className="header-links">
          <a href="./#about">Sobre mí</a>
          <a href="./#projects">Proyectos</a>
          <a href="./#contacto">Contacto</a>
        </div>
      </header>
      <main className='main'>
        <Hero />
        <About />
        <Projects />
      </main>
      <footer></footer>
    </>
  )
}

export default App
