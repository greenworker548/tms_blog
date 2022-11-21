import React, { useState } from 'react';
import { Timer } from './components/Timer/Timer';
import { ThemeContext } from './components/Posts/contexts';
import { THEMES } from './components/Posts/constants';
import { Header } from './components/Posts/components/Header';
import { TestUseRef } from './components/useRef/TestUseRef';

const App = () => {
  const [theme, setTheme] = useState(THEMES.light);

  const toggleTheme = () => {
    setTheme(theme === THEMES.light ? THEMES.dark : THEMES.light)
  }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <TestUseRef />
      </ThemeContext.Provider>
    </div>
  )
}

export default App;