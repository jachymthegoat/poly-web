import { useEffect, useRef, useState } from 'react'
import loadingVideo from '../assets/loading-site.mp4'

type LoadingOverlayProps = {
  onFinished: () => void
}

const WEBM_CODEC = 'video/webm; codecs="vp9, opus"'

function supportsTransparentWebm() {
  return document.createElement('video').canPlayType(WEBM_CODEC) !== ''
}

export function LoadingOverlay({ onFinished }: LoadingOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isExiting, setIsExiting] = useState(false)
  const finishedRef = useRef(false)

  useEffect(() => {
    if (!supportsTransparentWebm()) {
      onFinished()
      return
    }

    const finish = () => {
      if (finishedRef.current) return
      finishedRef.current = true
      setIsExiting(true)
      window.setTimeout(onFinished, 300)
    }

    const video = videoRef.current
    if (!video) {
      finish()
      return
    }

    let durationTimer: number | undefined

    const handleLoadedMetadata = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return
      durationTimer = window.setTimeout(finish, video.duration * 1000 + 200)
    }

    video.addEventListener('ended', finish)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.play().catch(finish)

    return () => {
      video.removeEventListener('ended', finish)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      if (durationTimer !== undefined) {
        window.clearTimeout(durationTimer)
      }
    }
  }, [onFinished])

  if (!supportsTransparentWebm()) {
    return null
  }

  return (
    <div
      className={`loading-overlay${isExiting ? ' loading-overlay--exit' : ''}`}
      aria-hidden={isExiting}
    >
      <video
        ref={videoRef}
        className="loading-overlay__video"
        src={loadingVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
    </div>
  )
}
