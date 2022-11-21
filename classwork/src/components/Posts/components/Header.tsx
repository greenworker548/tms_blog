import React, { useContext } from 'react';
import { THEMES } from '../constants';
import { ThemeContext } from '../contexts';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const themeStyle = {
        [THEMES.light]: {
            backgroundColor: 'lightgray',
            color: 'black'
        },
        [THEMES.dark]: {
            backgroundColor: 'black',
            color: 'white'
        }
    }
    return (
        <>
            <div style={{ height: 50, textAlign: 'center', ...themeStyle[theme]}}>
                hello I'm header
            </div>
            <ThemeToggler />
        </>
    )
}

export { Header };