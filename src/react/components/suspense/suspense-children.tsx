import React, { useDeferredValue, useEffect, useState } from 'react'
import { wrapPromise } from './wrap-promise'
import { useQuery } from 'react-query'
import axiosInstance from '../../../../lib/react-query/axios'

const getApi = async (query: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  const { data } = await axiosInstance.get(`https://dummyjson.com/products/search?q=${query}`)
  return data
}

export const SuspenseChildren = ({ query }: { query: string | undefined }) => {
  const [hasInput, setHasInput] = useState(false)

  useEffect(() => {
    if (query !== undefined) {
      setHasInput(true)
    }
  }, [query])

  const { data } = useQuery(['products', query], () => getApi(query), {
    enabled: hasInput,
    // onError: (err) => {
    //   console.error('query error', err.response)
    // },
  })

  const res = data?.products

  return (
    <div>
      {res?.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.brand}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  )
}

// wrapPromise 함수를 이용해 비동기 데이터 요청을 처리할 리소스 객체를 생성하는 함수
const fetchProducts = (query) => {
  const promise = fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((json) => json.products)
  return wrapPromise(promise)
}
