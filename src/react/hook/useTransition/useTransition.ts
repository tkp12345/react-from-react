import { useCallback, useRef, useState } from 'react'
type TransitionCallback = () => void

export const useTransition = (): [boolean, (cb: TransitionCallback) => void] => {
  const [isPending, setPending] = useState(false) //비동기 작업중 여부
  const transitionQueueRef = useRef<(() => void)[]>([]) // 초기화된 빈 배열로 설정

  const runtNextTransition = useCallback(() => {
    if (transitionQueueRef.current.length > 0) {
      //다음 큐에서 실행할 cb
      const nextTask = transitionQueueRef.current.shift()
      nextTask?.()
    }
  }, [])

  //비동기 상태 전환 처리
  const startTransition = useCallback(
    (cb: TransitionCallback) => {
      transitionQueueRef.current.push(() => {
        setPending(true)

        try {
          cb()
        } finally {
          //작업완료시
          setPending(false)
          //다음작업 실행
          runtNextTransition()
        }
      })

      //대기 중인 작업없으면 바로 실행
      // 대기 중인 작업이 없으면 바로 실행
      if (transitionQueueRef.current.length === 1) {
        runtNextTransition() // 첫 작업 실행
      }

      /*
    setTimeout을 통해 전달된 콜백 함수가 예약
    현재 실행 중인 모든 동기 작업이 완료된 후에 cb 실행
       */
    },
    [runtNextTransition],
  )

  return [isPending, startTransition]
}
