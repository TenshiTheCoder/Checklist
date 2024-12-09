import React, { useState } from 'react'
import '../index.css'
import '../my-styles/themeButton.css'

function SwitchTheme(){

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  }

  return (
    <div className = "themeButton-container">
      <button type = "button" className = "themeButton" id = "themeSwitch" onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  )
}

export default SwitchTheme