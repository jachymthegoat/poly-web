import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

const STAGGER_MS = 40
const STAGGER_CAP = 6

function BentoTile({ project, index }: { project: Project; index: number }) {
  const [hasImageError, setHasImageError] = useState(false)
  const [hasVideoError, setHasVideoError] = useState(false)
  const hasVideo = Boolean(project.video) && !hasVideoError
  const hasImage = Boolean(project.image) && !hasImageError
  const hasMedia = hasVideo || hasImage
  const staggerIndex = Math.min(index, STAGGER_CAP)

  useEffect(() => {
    setHasImageError(false)
    setHasVideoError(false)
  }, [project.image, project.video])

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`bento-tile bento-tile--enter bento-tile--${project.span}${hasMedia ? ' bento-tile--has-media' : ''}`}
      style={{ animationDelay: `${staggerIndex * STAGGER_MS}ms` }}
    >
      {hasVideo && (
        <>
          <video
            className="bento-tile__media"
            src={project.video}
            poster={hasImage ? project.image : undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setHasVideoError(true)}
          />
          <div className="bento-tile__gradient" aria-hidden="true" />
        </>
      )}
      {!hasVideo && hasImage && (
        <>
          <img
            className="bento-tile__media"
            src={project.image}
            alt=""
            loading="lazy"
            onError={() => setHasImageError(true)}
          />
          <div className="bento-tile__gradient" aria-hidden="true" />
        </>
      )}
      {hasMedia && project.tags && project.tags.length > 0 && (
        <div className="bento-tile__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="bento-tile__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      <span className="bento-tile__title">{project.title}</span>
    </Link>
  )
}

export function BentoGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="bento-grid" aria-label="Projects">
      {projects.map((project, index) => (
        <BentoTile key={project.id} project={project} index={index} />
      ))}
    </section>
  )
}
