import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoadingOverlay } from './components/LoadingOverlay'
import { Home } from './pages/Home'
import { ProjectPage } from './pages/ProjectPage'
import './App.css'

function App() {
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(true)

  return (
    <>
      {showLoadingOverlay && (
        <LoadingOverlay onFinished={() => setShowLoadingOverlay(false)} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default App
