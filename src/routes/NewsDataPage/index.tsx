import { Route, useMatch, useNavigate } from '@tanstack/react-router'
import { rootRoute } from '../__root'
import { useEffect, useState } from 'react'
import { INews } from '../../types/types'
import newsService from '../../services/news'
import SingleComment from './Comments'

import styles from './styles.module.css'
import classNames from "classnames";

const NewsDataPage = () => {
    const [news, setNews] = useState<INews>({ id: 0, title: '', score: 0, by: '', time: 0, url: '', kids: [], type: '' })
    const [com, setCom] = useState<Array<Number>>([])
    const newsMatch = useMatch({from: '/$itemId'})

    useEffect(() => {
      newsService.getNews(newsMatch.params.itemId).then(data => setNews(data))
      newsService.getNews(newsMatch.params.itemId).then(data => setCom(data.kids))
      console.log('third useEffect render counter');
    }, [])

    return (
        <>
            {news.title}
            {com.map((it, i) =>
                        <ul className={classNames(styles.ul)} key={i}>
                            <li className={classNames(styles.li)} ><SingleComment id={it} /></li>
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