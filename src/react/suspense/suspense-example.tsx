import React from 'react'

export const SuspenseExample = () => {
  const [data, error] = fetchUserData().read()

  return (
    <div>
      data : {JSON.stringify(data)}
      {error ? error : null}
    </div>
  )
}

const fetchUserData = () => {
  const data = fetchUser()
  return wrapPromise(data)
}

export const fetchUser = () => {
  return new Promise((resolve) => {
    console.log('fetchUser...')
    setTimeout(() => {
      resolve([
        { id: 1, name: 'roberto' },
        { id: 2, name: 'kelly' },
        { id: 3, name: 'jackson' },
        { id: 4, name: 'andrew' },
        { id: 5, name: 'pill' },
      ])
    }, 2000)
  })
}

export const wrapPromise = (promise) => {
  let status = 'pending'
  let result: any
  const promiseResult = promise.then(
    (res) => {
      status = 'success'
      result = res
    },
    (error) => {
      status = 'error'
      result = error
    },
  )
  return {
    read() {
      if (status === 'pending') {
        throw promiseResult
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
  }
}
