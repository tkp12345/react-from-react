import React, { useEffect, useState } from 'react'

//현재 시간과 차이
const getTimeDiffer = (time: number) => {
  const now = Date.now()
  const diffInMin = Math.floor((now - time) / 60000)

  if (diffInMin < 1) return '방금 전'
  if (diffInMin < 60) return `${diffInMin}분 전`
  const diffInHour = Math.floor(diffInMin / 60)
  return `${diffInHour}시간 전`
}

export const TimeCheckerForInterval = ({ timestamp }: { timestamp: number }) => {
  const [timeDifference, setTimeDifference] = useState<string | number>(() => getTimeDiffer(timestamp))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDifference(getTimeDiffer(timestamp))
    }, 10000)

    return () => clearInterval(interval)
  }, [timestamp])

  return <span>{timeDifference}</span>
}

// export const TimeCheckerForAnimationFrame = ({ timestamp }: { timestamp: number }) => {
//   const getTimeDiffer = (timestamp: number) => {
//     const now = Date.now()
//     const diffInMin = Math.floor((now - timestamp) / 6000)
//
//     if (diffInMin < 1) return '방금 전'
//     if (diffInMin < 60) return `${diffInMin}분 전`
//     const diffInHour = Math.floor(diffInMin / 60)
//     return `${diffInHour}시간 전`
//   }
//   const [timeDifference, setTimeDifference] = useState(() => getTimeDiffer(timestamp))
//   const requestRef = useRef<number | null>(null) // requestAnimationFrame의 ID를 저장하는 ref
//   const prevTimeRef = useRef<number>(Date.now()) // 마지막 업데이트 시간을 저장하는 ref
//
//   const updateTimeDifference = (time: number) => {
//     if (!prevTimeRef.current) {
//       prevTimeRef.current = time
//     }
//
//     if (time - prevTimeRef.current >= 60000) {
//       setTimeDifference(getTimeDiffer(timestamp))
//       prevTimeRef.current = time
//     }
//     console.log('1')
//     requestRef.current = requestAnimationFrame(updateTimeDifference)
//   }
//
//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(updateTimeDifference)
//
//     return () => {
//       console.log('???')
//       if (requestRef.current) {
//         cancelAnimationFrame(requestRef.current)
//       }
//     }
//   })
//
//   return <span>{timeDifference}</span>
// }
