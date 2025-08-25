import React from 'react'
import Test from './test'
import OptimizedVideo from "./react-utils/utils/error/components/OptimizedVideo";

const src = "https://www.w3schools.com/html/mov_bbb.mp4"
const App: React.FC = () => {
  return (
      <>
      <div style={{height:"1000px"}}></div>
      <div style={{height:"1000px"}}></div>
      <div style={{height:"1000px"}}></div>
      <OptimizedVideo src={src} width="320" height="240" controls />
  </>
        )
}
export default App
