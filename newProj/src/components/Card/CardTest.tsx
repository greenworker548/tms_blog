import { useState } from 'react'

import { Button } from '../Button/Button'
import { IconDown } from '../Icon/IconDown'
import { IconMark } from '../Icon/IconMark'
import { IconUp } from '../Icon/IconUp'
import { IconMore } from '../Icon/IconMore'
import { Image } from '../Image/Image'

import './Card.scss'

interface CardType {
    variant?: string
    className?: string
    date?: string
    title?: string
    text?: string
    image?: string
}

export const CardTest = ({ variant, className, date, title, text, image }: CardType) => {


    const [count, setCount] = useState(0)
    const onClick = () => setCount(count + 1)
    const countstr = count === 0 ? ' ' : count
    const [count2, setCount2] = useState(0)
    const onClick2 = () => setCount2(count2 + 1)
    const countstr2 = count2 === 0 ? ' ' : count2

    return (
        <div className={`card--${variant} ${className}`}>
            <div className='card__main'>
                <div className='card__info'>
                    <div className='card__date'>
                        {date}
                    </div>
                    <div className='card__title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='card__description'>
                        {text}
                    </div>
                </div>
                <div className='card__image'>
                    <Image image={image} alt={title}/>
                </div>
            </div>
            <div className='card__footer'>
                <div className='card__like'>
                    <Button className='btn-card btn-like' onClick={onClick} icon={<IconUp/>}>{countstr}</Button>
                    <Button className='btn-card btn-dislike' onClick={onClick2} icon={<IconDown/>}>{countstr2}</Button>
                </div>
                <div className='card__edit'>
                    <Button className='btn-card btn-mark' icon={<IconMark/>}/>
                    <Button className='btn-card btn-edit' icon={<IconMore/>}/>
                </div>
            </div>
        </div>
    )
}
