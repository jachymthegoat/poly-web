import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="project-page project-page--enter">
      <header className="project-nav">
        <Link to="/" className="nav-link">
          ← Zpět
        </Link>
      </header>

      <main className="project-main">
        {project.image && (
          <div className="project-hero">
            <img className="project-hero__img" src={project.image} alt="" />
          </div>
        )}

        <div className="project-body">
          <h1 className="project-title">{project.title}</h1>

          {project.tags && project.tags.length > 0 && (
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {project.description && (
            <p className="project-description">{project.description}</p>
          )}

          {(project.liveUrl || project.githubUrl) && (
            <div className="project-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="project-gallery">
              {project.gallery.map((src) => (
                <img
                  key={src}
                  className="project-gallery__img"
                  src={src}
                  alt=""
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
