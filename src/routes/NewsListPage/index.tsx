import { useState, useEffect } from "react"
import { useFetching } from "../../hooks/useFetching"
import { Route } from '@tanstack/react-router'
import { rootRoute } from '../__root'

import newsService from '../../services/news'
import SingleNews from "./SingleNews"

import styles from './styles.module.css'
import classNames from "classnames";

const NewsListPage = () => {
    const [newsId, setNewsId] = useState<number[]>([])
    const { ref, counter } = useFetching(0, 25, 500)

    useEffect(() => {
        newsService.getNewsId().then(data => setNewsId(data))
        console.log('useEffect render counter');
    }, [])

    
    return (
        <>  
            {newsId.slice(0, counter).map((itemId, i)=> 
                    <ul key={itemId}>
                        <li className={classNames(styles.li)}><SingleNews id={itemId} i={i + 1} /></li>
                    </ul>)
            }

            <div ref={ref} style={{height: 20, background: 'red'}}></div>
        </>
    )
}

export const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: NewsListPage,
})