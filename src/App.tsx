import { Nav } from './components/Nav'
import { BentoGrid } from './components/BentoGrid'
import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <div className="page">
      <Nav />
      <BentoGrid projects={projects} />
    </div>
  )
}

export default App
