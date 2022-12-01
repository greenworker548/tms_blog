import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ThemeContext } from '../../contexts/contexts'
import { setPosts } from '../../redux/actionCreators/postsActionCreators'
import { IStore } from '../../redux/types'
import { Card } from '../Card/Card'
import { cardsData } from '../Card/CardsData'
import { CardsDataType } from '../Card/CardsData'
import './Blog.scss'

export const Blog = () => {
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const data = useSelector((state: IStore) => state.posts.posts);
    const activeTab = useSelector((state: IStore) => state.settings.activeTab);
    useEffect (() => {
        console.log(cardsData);
        dispatch(setPosts(cardsData))
    }, [])


    return (
        <div className={`blog__body blog__body--${theme}`}>
            <div className='blog__main-content'>
                {data.map( (card, i) => card === data[0] ? <Card key={card.id} variant='bg' id={card.id} date={card.date} title={card.title} text={card.text} image={card.image}/> : <Card key={card.id} variant='md' id={card.id} date={card.date} title={card.title} text={card.text} image={card.image}/>)}
            </div>
            <div className='blog__feat-content'>
                {data.map( (card, i) => <Card key={card.id} id={card.id} variant='sm' date={card.date} title={card.title} text={card.text} image={card.image}/>)}
            </div>
        </div>
    )
}
