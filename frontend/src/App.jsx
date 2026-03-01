import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import AdminPanel from "./components/AdminPanel"
import Contact from "./components/Contact"
import Login from "./components/Login"

export default function App() {

  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const [contactLinks, setContactLinks] = useState([])

  const [adminOpen, setAdminOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [about, setAbout] = useState(null)

  // ------------------------
  // CHECK TOKEN ON LOAD
  // ------------------------
  useEffect(() => {
    const token = localStorage.getItem("access_token")
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  // ------------------------
  // FETCH DATA
  // ------------------------
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then(res => res.json())
      .then(data => setProjects(data))

    fetch("http://127.0.0.1:8000/api/skills/")
      .then(res => res.json())
      .then(data => setSkills(data))

    fetch("http://127.0.0.1:8000/api/contact/")
      .then(res => res.json())
      .then(data => setContactLinks(data))

    fetch("http://127.0.0.1:8000/api/about/")
      .then(res => res.json())
      .then(data => setAbout(data))
      }, [])

  // ------------------------
  // ADMIN CLICK HANDLER
  // ------------------------
  function handleAdminClick() {
    console.log("CLICOU AQUI")
    if (isAuthenticated) {
      setAdminOpen(true)
    } else {
      setLoginOpen(true)
    }
  }

  // ------------------------
  // LOGIN SUCCESS
  // ------------------------
  function handleLoginSuccess() {
    setIsAuthenticated(true)
    setLoginOpen(false)
    setAdminOpen(true)
  }

  // ------------------------
  // LOGOUT
  // ------------------------
  function handleLogout() {
    localStorage.removeItem("access_token")
    setIsAuthenticated(false)
    setAdminOpen(false)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFF5F5] via-[#F0F7FF] to-[#F5FFF5]">

      {/* BLOBS */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-30 animate-blob animate-float bg-[#FFB3BA] z-0" />
      <div className="absolute top-40 right-20 w-48 h-48 rounded-full opacity-30 animate-blob animate-float-reverse bg-[#BAFFC9] z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-30 bg-[#EBD6FF] animate-blob z-0" />

      {/* CONTEÚDO */}
      <div className="relative z-10">

        <Navbar onAdminClick={handleAdminClick} />

        <Hero />
        <About/>
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact contactLinks={contactLinks} />

      </div>

      {/* LOGIN MODAL */}
      {loginOpen && (
        <Login
          onClose={() => setLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {/* ADMIN PANEL */}
      {adminOpen && (
        <AdminPanel
          onClose={handleLogout}
          projects={projects}
          setProjects={setProjects}
          skills={skills}
          setSkills={setSkills}
          contactLinks={contactLinks}
          setContactLinks={setContactLinks}
        />
      )}

    </div>
  )
}