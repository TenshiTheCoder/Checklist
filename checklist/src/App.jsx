import React from 'react'
import Header from './components/header'
import Footer from './components/Footer'
import FirstField from './components/FirstField'
import SwitchTheme from './components/themeButton'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <SwitchTheme />
      <FirstField />
      <Footer />
    </>
  )
}

export default App
