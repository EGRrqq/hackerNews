import { FC, useEffect, useState } from 'react'
import { IComment } from '../../types/types'
import newsService from '../../services/news'
import moment from 'moment';

import parse from "html-react-parser";
import { options } from '../../utils/htmlParserOptions';

import styles from './styles.module.css'
import classNames from "classnames";

interface NewsCommentProps {
    id: number;
}

const ChildComments: FC<NewsCommentProps> = ({ id }) => {
    const [childCom, setChildCom] = useState<IComment>({ by: '', id: 0, kids: [], time: 0, parent: 0, text: '', type: ''  })

    useEffect(() => {
      newsService.getNews(id).then(data => setChildCom(data))
      console.log('six useEffect render counter');
    }, [])

    return (
        <>
            {!childCom.deleted && !childCom.dead
                ?
                <table className={classNames(styles.zero)} >
                    <thead>
                        <tr className={classNames(styles.trCom)} >
                            <th>{childCom.by}</th>
                            <th>{moment(childCom.time, 'X').fromNow()}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={classNames(styles.trCom)} >
                            <td className={classNames(styles.td)} >{parse(childCom.text, options)}</td>
                        </tr>
                    </tbody>
                </table>
                : ''
            }
        </>

    )

}

export default ChildComments