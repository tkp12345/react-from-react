import React, { StrictMode } from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { LDProvider } from 'launchdarkly-react-client-sdk'
const clientSideID = 'USER_KEY'

if (!clientSideID) {
  throw new Error('LaunchDarkly clientSideID is not defined in environment variables.')
}

ReactDom.render(
  <StrictMode>
    {/*<LDProvider clientSideID={clientSideID}>*/}
    <App />
    {/*</LDProvider>*/}
  </StrictMode>,
  document.getElementById('app'),
)
