import { Route, useMatch } from '@tanstack/react-router'
import { rootRoute } from '../__root'
import { useEffect, useState } from 'react'
import newsService from '../../services/news'
import SingleComment from './Comments'
import Data from './Data'

import styles from './styles.module.css'
import classNames from "classnames";

const NewsDataPage = () => {
    const [com, setCom] = useState<number[]>([])
    const newsMatch = useMatch({from: '/$itemId'})

    useEffect(() => {
      newsService.getNews(newsMatch.params.itemId).then(data => setCom(data.kids))
      console.log('third useEffect render counter');
    }, [])

    return (
        <>
            <Data id={newsMatch.params.itemId} />

            {com.map((it, i) =>
                        <ul key={i}>
                            <li style={{ margin: 7 }}><SingleComment id={it} /></li>
                        </ul>
                    )}
        </>
    )
}

export const newsDataRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/$itemId',
    component: NewsDataPage,
})