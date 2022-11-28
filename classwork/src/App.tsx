import React, { useState } from 'react';
import { Timer } from './components/Timer/Timer';
import { ThemeContext } from './components/Posts/contexts';
import { THEMES } from './components/Posts/constants';
import { Header } from './components/Posts/components/Header';
import { TestUseRef } from './components/useRef/TestUseRef';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { FullPost } from './components/Posts/components/Posts/FullPost';
import { SignIn } from './components/Posts/components/SignIn';

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [theme, setTheme] = useState(THEMES.light);

  const toggleTheme = () => {
    setTheme(theme === THEMES.light ? THEMES.dark : THEMES.light)
  }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/">
              <Route index element={<div>Home page</div>}/>
              <Route path="hooks">
                <Route index element={<div>
                  My hooks
                  <NavLink to="/"><button>Home</button></NavLink>
                  <NavLink to="/hooks/useEffect"><button>UseEffect</button></NavLink>
                  <NavLink to="/hooks/useRef"><button>UseRef</button></NavLink>
                  </div>}/>
                <Route path="useRef" element={<TestUseRef />}/>
                <Route path="useEffect" element={<Timer />}/>
              </Route>
              <Route path="signin" element={<SignIn />} />
              <Route path="posts">
                <Route index element={<div>Posts</div>}/>
                <Route path=":postId" element={isAuthorized ? <FullPost /> : <Navigate to="/"/>} />
                <Route path="new" element={<div>new</div>} />
              </Route>
              <Route path="*" element={<div>404</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;