import React, { useContext } from 'react';
import { THEMES } from '../../constants';
import { ThemeContext } from '../../contexts';
import './themeToggler.css'

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ display: 'flex', marginTop: 30 }}>
            <span>Light</span>
            <label className="switch">
                <input type="checkbox" checked={theme === THEMES.dark} onChange={toggleTheme} />
                <span className="slider round" />
            </label>
            <span>Dark</span>
        </div>
    )
}

export { ThemeToggler };