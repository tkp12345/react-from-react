import { PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react'

interface Props {
  fallback?: ReactNode
  rootMargin?: string
  threshold?: number
  className?: string
}

const LazyRender = ({
  children,
  fallback = <div className="h-32 animate-pulse rounded-lg bg-gray-100" />,
  rootMargin = '100px',
  threshold = 0.1,
  className = '',
}: PropsWithChildren<Props>) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // 컴포넌트가 화면에 보이면 observer 해제
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin,
        threshold,
      },
    )

      const currentTargetRef = ref.current
      if(currentTargetRef){
          observer.observe(currentTargetRef)
      }

      return ()=>{
          if(currentTargetRef){
              observer.unobserve(currentTargetRef)
          }
      }
  }, [rootMargin,threshold])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  )
}

export default LazyRender