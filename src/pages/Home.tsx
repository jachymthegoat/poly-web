import { Nav } from '../components/Nav'
import { BentoGrid } from '../components/BentoGrid'
import { projects } from '../data/projects'

export function Home() {
  return (
    <div className="page">
      <Nav />
      <BentoGrid projects={projects} />
    </div>
  )
}
