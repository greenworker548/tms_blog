import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ThemeContext } from '../../contexts/contexts'
import { loadPosts } from '../../redux/actionCreators/postsActionCreators'
import { IPost, IStore } from '../../redux/types';
import { Card } from '../Card/Card';
import { cardsData } from '../Card/CardsData';
import { CardsDataType } from '../Card/CardsData';
import { Pagination } from '../Pagination/Pagination';

export const Favorites = () => {
    const [data, setData] = useState([] as IPost[]);
    const { theme } = useContext(ThemeContext);
    const posts = useSelector((state: IStore) => state.posts.posts);
    const favorites = useSelector((state: IStore) => state.posts.favorites)

    useEffect (() => {
        const resultData = [] as IPost[];
        posts.forEach((post) => {
            if (favorites.includes(post.id)) {
                resultData.push(post);
            }
        });
        setData(resultData);
    }, [favorites])


    return (
        <>
            <div className={`blog__body blog__body--${theme}`}>
                <div className='blog__main-content'>
                    {data.map( (card, i) =>  <Card key={card.id} variant='bg' id={card.id} date={card.date} title={card.title} text={card.text} image={card.image}/>)}
                </div>
            </div>
            {/* <Pagination /> */}
        </>
    )
}
