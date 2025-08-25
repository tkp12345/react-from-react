import { useEffect, useRef, useState, VideoHTMLAttributes } from 'react'

function getMimeType(src: string): string {
  const extension = src.split('.').pop()?.toLowerCase()

  const mimeTypes: Record<string, string> = {
    mp4: 'video/mp4',
    webm: 'video/webm',
    ogg: 'video/ogg',
  }
  return mimeTypes[extension || ''] || 'video/mp4'
}

type Props = {
  src: string
  autoPlay?: boolean
  rootMargin?: string
} & VideoHTMLAttributes<HTMLVideoElement>

const OptimizedVideo = ({
  src,
  autoPlay = true,
  rootMargin = '100px',
  className,
  muted = true,
  preload = 'none',
  controls = false,
  loop = true,
  ...rest
}: Props) => {
  const videoRef = useRef<HTMLVideoElement|null>(null)
  const [shouldLoad, setShouldLoad] = useState(false) // <source> 주입 여부

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true) // <source> 주입

            //화면에 보일떄 재생
            if (autoPlay && video.paused) {
              video.play().catch((error) => {
                console.error('Error attempting to play', error)
              })
            }
          } else {
            if (!video.paused) {
              video.pause()
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: rootMargin,
      },
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      // 재생은 JS로 제어
      autoPlay={false}
      playsInline
      loop={loop}
      muted={muted}
      preload={preload}
      controls={controls}
      {...rest}
    >
      {shouldLoad && <source src={src} type={getMimeType(src)} />}
      Your browser does not support the video tag.{' '}
    </video>
  )
}

export default OptimizedVideo