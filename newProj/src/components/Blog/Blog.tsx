import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'

import { ThemeContext } from '../../contexts/contexts'
import { loadPosts, setSearchValue } from '../../redux/actionCreators/postsActionCreators'
import { IStore } from '../../redux/types'
import { Card } from '../Card/Card'
import { cardsData } from '../Card/CardsData'
import { CardsDataType } from '../Card/CardsData'
import { Pagination } from '../Pagination/Pagination'
import './Blog.scss'

export const Blog = () => {
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const data = useSelector((state: IStore) => state.posts.posts);
    const dataCount = useSelector((state: IStore) => state.posts.countTotal);
    const activeTab = useSelector((state: IStore) => state.settings.activeTab);
    const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage);
    const searchValue = useSelector((state: IStore) => state.posts.searchValue);
    useEffect (() => {
        dispatch(loadPosts({ rowsPerPage, currentPage, searchValue}));
    }, [currentPage, rowsPerPage, searchValue])

    const handleChange = (e: any) => {
        setSearchValue(e.target.value)
    }
    
    return (
        <>
            <input value={searchValue} onChange={handleChange}/>
            <div className={`blog__body blog__body--${theme}`}>
                <div className='blog__main-content'>
                    {data.map( (card, i) => card === data[0] ? <Card key={card.id} variant='bg' id={card.id} date={card.date} title={card.title} text={card.text} image={card.image}/> : <Card key={card.id} variant='md' id={card.id} date={card.date} title={card.title} text={card.text} image={card.image}/>)}
                </div>
                <div className='blog__feat-content'>
                    {data.map( (card, i) => <Card key={card.id} id={card.id} variant='sm' date={card.date} title={card.title} text={card.text} image={card.image}/>)}
                </div>
            </div>
            <Pagination dataCount={dataCount}/>
        </>
    )
}
