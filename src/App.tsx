import React from 'react'
import { useAuth } from 'context/auth-context'
import { Authenticated } from 'authenticated-app'
import { UnauthenticatedApp } from 'unauthenticated-app'
function App() {
  const { user } = useAuth()
  return user ? <Authenticated /> : <UnauthenticatedApp />
}

export default App
