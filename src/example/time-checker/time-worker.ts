export {} //모듈처리 스코프 충돌방지

self.onmessage = function (e: MessageEvent) {
  const { timestamp } = e.data

  const getTimerDiffer = (time: number) => {
    const now = Date.now()
    const diffInMin = Math.floor((now - time) / 60000)

    if (diffInMin < 1) return '방금전'
    if (diffInMin < 60) return `${diffInMin}분전`
    const diffInHour = Math.floor(diffInMin / 60)
    return `${diffInHour}시간 전`
  }

  setInterval(() => {
    const timeDifference = getTimerDiffer(timestamp)
    postMessage(timeDifference) // 메인 스레드로 결과 전송
  }, 10000)
}
