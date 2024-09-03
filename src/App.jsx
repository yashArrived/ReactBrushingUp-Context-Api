import { useState,useContext } from 'react'

import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
function App() {
//  const context = useContext(null)

  return (
    <>
    <UserContextProvider>

     <Login/>
     <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
