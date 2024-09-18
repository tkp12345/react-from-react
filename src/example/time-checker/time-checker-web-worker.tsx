import React, { useEffect, useRef, useState } from 'react'
export const TimeCheckerWebWorker = ({ timestamp }: { timestamp: number }) => {
  const [timeDifference, setTimeDifference] = useState<string | number>('방금 전')
  const workerRef = useRef<Worker | null>(null)

  useEffect(() => {
    if (workerRef.current) return
    workerRef.current = new Worker(`./time-worker.ts`)

    return () => {
      workerRef.current?.terminate()
    }
  }, [])

  useEffect(() => {
    if (workerRef.current) {
      //web Worker  초기 timestamp 전송
      workerRef.current.postMessage({ timestamp })

      //web Worker보낸 메세지  수신
      workerRef.current.onmessage = (e: MessageEvent) => {
        setTimeDifference(e.data)
      }
    }
  }, [timestamp])

  return <span>{timeDifference}</span>
}
