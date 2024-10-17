import React, { useState } from 'react'
import { useTransition } from './useTransition'

export const UseTransitionExample = () => {
  const [isPending, startTransition] = useTransition()
  const [count, setCount] = useState(0)
  const [data, setData] = useState<string[]>([])
  //비동기 아이템 추가
  const addDataHandler = () => {
    startTransition(() => {
      setTimeout(() => {
        setData((prev) => [...data, `data ${prev.length + 1}`])
      }, 2000)
    })
  }

  //비동기 카운트 증가
  const increaseCountHandler = () => {
    startTransition(() => {
      setTimeout(() => {
        setCount((prev) => prev + 1)
      }, 300)
    })
  }

  return (
    <div className="flex flex-col">
      <button onClick={addDataHandler} disabled={isPending}>
        {isPending ? 'Processing...' : 'Add Data'}
      </button>
      <button onClick={increaseCountHandler} disabled={isPending}>
        {isPending ? 'Processing...' : 'Increase count'}
      </button>

      <p>Count : {count}</p>

      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
