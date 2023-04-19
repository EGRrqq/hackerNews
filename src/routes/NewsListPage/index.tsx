import { useState, useEffect, useRef } from "react"
import newsService from '../../services/news'
import SingleNews from "./SingleNews"
import { useInView } from "react-intersection-observer"

import { Route } from '@tanstack/react-router'
import { rootRoute } from '../__root'

import styles from './styles.module.css'
import classNames from "classnames";
import { useFetching } from "../../hooks/useFetching"

const NewsListPage = () => {
    const [newsId, setNewsId] = useState<number[]>([])
    const { ref, counter } = useFetching(25, 50, 100)

    useEffect(() => {
        newsService.getNewsId().then(data => setNewsId(data))
        console.log('useEffect render counter');
    }, [])

    
    return (
        <>  

            {/* {loading 
                ? <Spinner /> 
                : newsId.slice(0, 10).map((itemId, i)=> 
                    <ul key={itemId}>
                        <li style={{ margin: 5 }}><SingleNews id={itemId} i={i + 1} /></li>
                    </ul>)
            } */}

            {newsId.slice(0, counter).map((itemId, i)=> 
                    <ul key={itemId}>
                        <li style={{ margin: 5 }}><SingleNews id={itemId} i={i + 1} /></li>
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