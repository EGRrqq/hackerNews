import { Route, useMatch } from '@tanstack/react-router'
import { rootRoute } from '../__root'
import { useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'

import newsService from '../../services/news'
import SingleComment from './Comments'
import Data from './Data'

import styles from './styles.module.css'
import classNames from "classnames";

const NewsDataPage = () => {
    const [com, setCom] = useState<number[]>([])
    
    const newsMatch = useMatch({from: '/$itemId'})
    const { ref, counter } = useFetching(0, 25, 30)
    
    useEffect(() => {
      newsService.getNews(newsMatch.params.itemId).then(data => setCom(data.kids))
      console.log('third useEffect render counter');
    }, [])

    return (
        <>
            <Data id={newsMatch.params.itemId} />

            {com.slice(0, counter).map(comId =>
                        <ul key={comId}>
                            <li className={classNames(styles.li)}><SingleComment id={comId} /></li>
                        </ul>)
            }

            <div ref={ref} style={{height: 20, background: 'red'}}></div>
        </>
    )
}

export const newsDataRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/$itemId',
    component: NewsDataPage,
})