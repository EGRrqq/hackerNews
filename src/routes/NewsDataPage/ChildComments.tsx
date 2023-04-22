import { FC } from 'react'
import moment from 'moment'

import parse from 'html-react-parser'
import { options } from '../../utils/htmlParserOptions'

import styles from './styles.module.css'
import classNames from 'classnames'
import { SingleNewsAPI } from '../../services/SingleNewsService'

interface NewsCommentProps {
    id: number
}

const childComments: FC<NewsCommentProps> = ({ id }) => {
    const {
        data: childCom,
        error,
        isLoading,
        isFetching,
    } = SingleNewsAPI.useFetchSingleNewsQuery(id)

    return (
        <>
            {isLoading || (isFetching && <p>fetching...</p>)}
            {error && <p>sadcat</p>}
            {childCom && !childCom?.deleted && !childCom?.dead ? (
                <table className={classNames(styles.zero)}>
                    <thead>
                        <tr className={classNames(styles.trCom)}>
                            <th>{childCom?.by}</th>
                            <th>{moment(childCom?.time, 'X').fromNow()}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={classNames(styles.trCom)}>
                            <td className={classNames(styles.td)}>
                                {parse(childCom?.text, options)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                ''
            )}
        </>
    )
}

export default childComments
