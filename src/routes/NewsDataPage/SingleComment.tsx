import { SingleNewsAPI } from '../../services/SingleNewsService'
import { FC, useState } from 'react'

import moment from 'moment'

import parse from 'html-react-parser'
import { options } from '../../utils/htmlParserOptions'

import styles from './styles.module.css'
import classNames from 'classnames'
import ChildComments from './ChildComments'

interface NewsCommentProps {
    id: number
}

const SingleComment: FC<NewsCommentProps> = ({ id }) => {
    const {
        data: singleCom,
        error,
        isLoading,
    } = SingleNewsAPI.useFetchSingleNewsQuery(id)
    const [popup, setPopup] = useState<boolean>(false)

    return (
        <>
            {singleCom && !singleCom?.deleted && !singleCom?.dead ? (
                <table className={classNames(styles.zero)}>
                    <thead>
                        <tr className={classNames(styles.trCom)}>
                            <th>{singleCom?.by}</th>
                            <th>{moment(singleCom?.time, 'X').fromNow()}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={classNames(styles.trCom)}>
                            <td className={classNames(styles.td)}>
                                {parse(singleCom?.text, options)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i
                                    className={classNames(
                                        styles.arrow,
                                        styles.down
                                    )}
                                    onClick={() => setPopup(!popup)}
                                ></i>{' '}
                                {singleCom?.kids ? singleCom?.kids.length : 0}{' '}
                                replies
                                {popup &&
                                    singleCom?.kids &&
                                    singleCom?.kids.map(
                                        (childId: number, i) => (
                                            <ul key={childId}>
                                                <li>
                                                    <ChildComments
                                                        id={childId}
                                                    />
                                                </li>
                                            </ul>
                                        )
                                    )}
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

export default SingleComment
