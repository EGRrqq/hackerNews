import { FC } from 'react'

import moment from 'moment'

import styles from './styles.module.css'
import classNames from 'classnames'
import { INews } from '../../types/types'

interface DataProps {
    news: INews
}

const Data: FC<DataProps> = ({ news }) => {
    return (
        <>
            {news && (
                <table
                    className={classNames(styles.table, styles.zero)}
                    style={{ height: 100 }}
                >
                    <thead>
                        <tr className={classNames(styles.trData)}>
                            <th>
                                <a
                                    href={news?.url}
                                    target="_blank"
                                    style={{ textDecoration: 'none' }}
                                    rel="noreferrer"
                                >
                                    {news?.title}
                                </a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={classNames(styles.trData)}>
                            <td>by {news?.by} </td>
                            <td>{moment(news?.time, 'X').fromNow()} | </td>
                            <td>{news?.kids.length} comments</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Data
