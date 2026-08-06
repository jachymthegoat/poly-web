import type { Project } from '../data/projects'

function BentoTile({ project }: { project: Project }) {
  const Tag = project.href ? 'a' : 'div'

  return (
    <Tag
      href={project.href}
      className={`bento-tile bento-tile--${project.span}`}
    >
      <span className="bento-tile__title">{project.title}</span>
    </Tag>
  )
}

export function BentoGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="bento-grid" aria-label="Projects">
      {projects.map((project) => (
        <BentoTile key={project.id} project={project} />
      ))}
    </section>
  )
}
