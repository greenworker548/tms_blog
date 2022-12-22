import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { IStore } from '../../redux/types'
import { ThemeContext } from '../../contexts/contexts'

import { IconDarkTheme } from '../Icon/IconDarkTheme'
import { IconLightTheme } from '../Icon/IconLightTheme'
import { logOut } from '../../redux/actionCreators/userActionCreators'

import { userData } from './UserData'
import './BurgerMenu.scss'




export const BurgerMenu = ({ setMenu }: { setMenu: Function}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: IStore) => state.users.user )

    const handleLogOut = () => {
        dispatch(logOut());
        localStorage.removeItem('jwtAccess');
        localStorage.removeItem('jwtRefresh');
        setMenu(false);
        navigate('/sign_in');  
    }

    return (
        <div className={`burger-menu burger-menu--${theme}`}>
            <div className='burger-menu__row'>
                {user &&
                    <div className='burger-menu__user'>
                        <span>{`${user.username?.charAt(0).toUpperCase()}${user.username?.charAt(user.username.length - 1).toUpperCase()}`}</span>
                        {user.username}
                    </div>
                }
                <div className='burger-menu__link'>
                    <NavLink to='/' style={{textDecoration: 'none'}}>Home</NavLink>
                </div>
                <div className='burger-menu__link'>
                    <NavLink to='/add_post' style={{textDecoration: 'none'}}>Add post</NavLink>
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
                {user &&
                    <div>
                        <button style={{textDecoration: 'none'}} onClick={handleLogOut}>
                            Log Out
                        </button>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}
