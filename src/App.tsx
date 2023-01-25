import { Route, Routes, NavLink, Navigate } from 'react-router-dom'
import { PageProjects } from './pages/projects/PageProjects'
import { PageSkills } from './pages/skills/PageSkills'
import { PageWelcome } from './pages/home/PageWelcome'
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <NavLink to='/welcome'><i className="fa-solid fa-feather"></i>MoA</NavLink>
          <div className="contact">
            <a href="https://www.linkedin.com/in/mohammad-amaren-195a86231/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/MohammadAmarena"><i className="fa-brands fa-github"></i></a>
            <a href="mailto:mohammad.amarena@gmail.com"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <nav>
          <NavLink to='/welcome'>Welcome</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/skills'>Skills</NavLink>
        </nav>

        <Routes>
          <Route path='/welcome' element={<PageWelcome />} />
          <Route path='/projects' element={<PageProjects />} />
          <Route path='/skills' element={<PageSkills />} />
          <Route path='/' element={<Navigate to='/welcome' replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
