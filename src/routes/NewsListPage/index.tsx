import { useFetching } from '../../hooks/useFetching'
import { Route } from '@tanstack/react-router'
import { rootRoute } from '../__root'

import SingleNews from './SingleNews'

import styles from './styles.module.css'
import classNames from 'classnames'
import Spinner from '../../components/Spinner'

import { NewsIdAPI } from '../../services/NewsIdService'

const NewsListPage = () => {
    const {
        data: newsId,
        error,
        refetch,
    } = NewsIdAPI.useFetchAllIDQuery(0)
    const { ref, counter } = useFetching(0, 25, 500)

    return (
        <>
            <Spinner refetch={refetch} />

            {error && <h4 className={classNames(styles.err)}>sadcat</h4>}

            {newsId &&
                newsId?.slice(0, counter).map((itemId, i) => (
                    <ul key={itemId}>
                        <li className={classNames(styles.li)}>
                            <SingleNews id={itemId} i={i + 1} />
                        </li>
                    </ul>
                ))}

            <div ref={ref} style={{ height: 20, background: 'inherit' }}></div>
        </>
    )
}

export const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: NewsListPage,
})
