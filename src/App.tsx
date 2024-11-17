import React from 'react'
import { UseStateExample1 } from './react/hook/useState/useState-example-1'
import { useFlags } from 'launchdarkly-react-client-sdk'

const App: React.FC = () => {
  const { sample } = useFlags()

  console.log('sample:', sample)
  return (
    <>
      <UseStateExample1 />
    </>
  )
}
export default App
