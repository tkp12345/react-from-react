import React from 'react'
import { ToastContainer } from 'react-toastify'
import { UseStateExample1 } from './react/hook/useState/useState-example-1'
import { useMediaQuery } from './hooks/use-media-query'

const App: React.FC = () => {
  const isTablet = useMediaQuery(`(max-width:780px)`)

  console.log(isTablet)
  return (
    <>
      {/*<Test />*/}

      <UseStateExample1 />
      <ToastContainer />
    </>
  )
}
export default App
