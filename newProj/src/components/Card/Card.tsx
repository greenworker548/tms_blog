import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../Button/Button'
import { IconDown } from '../Icon/IconDown'
import { IconMark } from '../Icon/IconMark'
import { IconUp } from '../Icon/IconUp'
import { IconMore } from '../Icon/IconMore'
import { Image } from '../Image/Image'
import { ThemeContext } from '../../contexts/contexts'
import './Card.scss'
import { IPost, IStore } from '../../redux/types'
import { addFavorite, removeFavorite } from '../../redux/actionCreators/postsActionCreators'

interface ICard extends IPost {
    variant: string
}

export const Card = ({ variant, date, title, text, image, id }: ICard) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: IStore) => state.posts.favorites)
    const [count, setCount] = useState(0)
    const handleLike = () => setCount(count + 1)
    const countstr = count === 0 ? ' ' : count
    const [count2, setCount2] = useState(0)
    const handleDislike = () => setCount2(count2 + 1)
    const countstr2 = count2 === 0 ? ' ' : count2
    const isInclude = favorites.includes(id);
    const {theme} = useContext(ThemeContext);

    const handleToggleFavorite = () => {
        dispatch(isInclude ? removeFavorite(id) : addFavorite(id))
    }

    return (
        <div className={`card--${variant} card--${theme}`}>
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
                    <Button className='btn-card btn-like' onClick={handleLike} icon={<IconUp/>}>{count}</Button>
                    <Button className='btn-card btn-dislike' onClick={handleDislike} icon={<IconDown/>}>{count2}</Button>
                </div>
                <div className='card__edit'>
                    <Button className='btn-card btn-mark' icon={<IconMark color={isInclude ? 'red' : 'black'}/>} onClick={handleToggleFavorite}/>
                    <Button className='btn-card btn-edit' icon={<IconMore/>}/>
                </div>
            </div>
        </div>
    )
}
