import { FC } from 'react'

import moment from 'moment'

import { Link } from '@tanstack/react-router'

import styles from './styles.module.css'
import classNames from 'classnames'
import Spinner from '../../components/Spinner'
import { SingleNewsAPI } from '../../services/SingleNewsService'

interface SingleNewsProps {
    id: number
    i: number
}

const SingleNews: FC<SingleNewsProps> = ({ id, i }) => {
    const {
        data: news,
        error,
        isLoading,
    } = SingleNewsAPI.useFetchSingleNewsQuery(id)

    return (
        <>
            {news && (
                <table>
                    <thead>
                        <tr>
                            <th>{i}.</th>
                            <th>
                                <Link
                                    to="/$itemId"
                                    params={{ itemId: String(news?.id) }}
                                    className={classNames(styles.link)}
                                >
                                    {news?.title}
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{news?.score} points</td>
                            <td>by {news?.by}</td>
                            <td>{moment(news?.time, 'X').fromNow()}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default SingleNews
