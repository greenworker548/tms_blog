import { useContext } from 'react'

import { Button } from '../Button/Button'
import { IconLeftArrow } from '../Icon/IconLeftArrow'
import { IconRightArrow } from '../Icon/IconRightArrow'
import { ThemeContext } from '../../contexts/contexts'
import './Pagination.scss'

interface PaginationType {
    children?: any
}

export const Pagination = ({ children }: PaginationType) => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`paginations paginations--${theme}`}>
            <div className='wrapper'>
                <div className='pagination__body'>
                    <div className='pagination__left'>
                        <Button className='pagination__btn'><IconLeftArrow/>{'Prev'}</Button>
                    </div>
                    {children}
                    <div className='pagination__right'>
                        <Button className='pagination__btn'>{'Next'}<IconRightArrow/></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
