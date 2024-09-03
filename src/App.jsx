import { useState,useContext, useEffect } from 'react'

import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import ThemeBtn from './components/ThemeBTN'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
function App() {
//  const context = useContext(null)
const [themeMode, setThemeMode] = useState('light')

;
const lightTheme = () => {
  setThemeMode('light');;
}
const darkTheme = () => { 
  setThemeMode('dark');}

useEffect(() => {
  document.querySelector('html').classList.remove('dark','light');
  document.querySelector('html').classList.add(themeMode);
}, [themeMode]);

  return (
    <>
    <UserContextProvider>

     <Login/>
     <Profile/>
      </UserContextProvider>

      <ThemeProvider value={{themeMode , lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>

    </>
  )
}

export default App
