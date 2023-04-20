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

const SingleComment: FC<NewsCommentProps> = ({ id }) => {
    const [singlecom, setSingleCom] = useState<IComment>({ by: '', id: 0, kids: [], time: 0, parent: 0, text: '', type: ''  })
//  id: 0, kids: [], time: 0, parent: 0, text: '', type: '' 
    useEffect(() => {
      newsService.getNews(id).then(data => setSingleCom(data))
      console.log('fourth useEffect render counter');
    }, [])

    // if (!singlecom.deleted) { return <>{singlecom.text}</>}
    return (
        <table className={classNames(styles.zero)} >
            <thead>
                <tr className={classNames(styles.trCom)} >
                    <th>{singlecom.by}</th>
                    <th>{moment(singlecom.time, 'X').fromNow()}</th>
                </tr>
            </thead>
            <tbody>
                <tr className={classNames(styles.trCom)} >
                    <td className={classNames(styles.td)} >{parse(singlecom.text, options)}</td>
                </tr>
            </tbody>
        </table>
    )

}

export default SingleComment