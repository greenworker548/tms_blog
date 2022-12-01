import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../contexts/contexts'
import { IconDarkTheme } from '../Icon/IconDarkTheme'
import { IconLightTheme } from '../Icon/IconLightTheme'

import { userData } from './UserData'
import './BurgerMenu.scss'

export const BurgerMenu = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    //Забираю из API массив инициалов ФИО
    const arrLetters = userData.map(({ firthname, lastname }) => `${firthname[0]}${lastname[0]}`)
    //Забираю из API массив строк ФИО
    const arrStrings = userData.map(({ firthname, lastname }) => `${firthname} ${lastname}`)

    return (
        <div className={`burger-menu burger-menu--${theme}`}>
            <div className='burger-menu__row'>
                <div className='burger-menu__user'>
                    <span>{arrLetters[0]}</span>
                    {arrStrings[0]}
                </div>
                <div className='burger-menu__link'>
                    <NavLink to='/' style={{textDecoration: 'none'}}>Home</NavLink>
                </div>
                <div className='burger-menu__link'>
                    <NavLink to='/sign_in' style={{textDecoration: 'none'}}>Add post</NavLink>
                </div>
                <span></span>
            </div>
            <div className='burger-menu__row'>
                <div className='burger-menu__theme'>
                    <div className='burger-menu__light' onClick={toggleTheme}>
                        <IconLightTheme />
                    </div>
                    <div className='burger-menu__dark' onClick={toggleTheme}>
                        <IconDarkTheme />
                    </div>
                </div>
                <div className='burger-menu__link'>
                    <div><NavLink to='/sign_in' style={{textDecoration: 'none'}}>Log Out</NavLink></div>
                </div>
            </div>
        </div>
    )
}
