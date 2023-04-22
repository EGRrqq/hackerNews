import { Route, useParams } from '@tanstack/react-router'
import { rootRoute } from '../__root'
import { useFetching } from '../../hooks/useFetching'

import SingleComment from './SingleComment'
import Data from './Data'

import styles from './styles.module.css'
import classNames from 'classnames'
import { SingleNewsAPI } from '../../services/SingleNewsService'
import { IComment } from '../../types/types'

const NewsDataPage = () => {
    const params: number = useParams()
    const {
        data: news,
        error,
        isLoading,
    } = SingleNewsAPI.useFetchSingleNewsQuery(params.itemId)
    const { ref, counter } = useFetching(0, 10, 30)

    return (
        <>
            {isLoading && <p>loading...</p>}
            {error && <p>sadcat</p>}

            {news && <Data news={news} />}

            {news &&
                news?.kids.slice(0, counter).map((itemId) => (
                    <ul key={itemId}>
                        <li className={classNames(styles.li)}>
                            <SingleComment id={itemId} />
                        </li>
                    </ul>
                ))}

            <div ref={ref} style={{ height: 20, background: 'red' }}></div>
        </>
    )
}

export const newsDataRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/$itemId',
    component: NewsDataPage,
})
