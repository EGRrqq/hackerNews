import { Route, useMatch } from '@tanstack/react-router'
import { rootRoute } from '../__root'
import { SingleNewsAPI } from '../../services/SingleNewsService'
import { useFetching } from '../../hooks/useFetching'

import SingleComment from './SingleComment'
import Data from './Data'

import styles from './styles.module.css'
import classNames from 'classnames'
import Spinner from '../../components/Spinner'

const NewsDataPage = () => {
    const newsMatch = useMatch({from: '/$itemId'})
    const id: string = newsMatch.params.itemId

    const {
        data: news,
        error,
        isLoading,
        refetch,
    } = SingleNewsAPI.useFetchSingleNewsQuery(Number(id))


    const { ref, counter } = useFetching(0, 10, 30)

    return (
        <>
            <Spinner refetch={refetch} />
            {isLoading && <h4 className={classNames(styles.load)}>loading data...</h4>}
            {error && <h4 className={classNames(styles.err)}>sadcat</h4>}

            {news && <Data news={news} />}

            {news &&
                news?.kids.slice(0, counter).map((itemId) => (
                    <ul key={itemId}>
                        <li className={classNames(styles.li)}>
                            <SingleComment id={itemId} />
                        </li>
                    </ul>
                ))}

            <div ref={ref} style={{ height: 20, background: 'inherit' }}></div>
        </>
    )
}

export const newsDataRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/$itemId',
    component: NewsDataPage,
})
