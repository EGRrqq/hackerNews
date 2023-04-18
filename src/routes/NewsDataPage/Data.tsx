import { useState, useEffect, FC } from "react"
import newsService from '../../services/news'
import { INews } from "../../types/types";
import moment from "moment";

import styles from './styles.module.css'
import classNames from "classnames";

interface DataProps {
    id: string;
}

const Data: FC<DataProps> = ({ id }) => {
    const [news, setNews] = useState<INews>({id: 0, title: '', score: 0, by: '', time: 0, url: '', kids: [], type: ''})

    useEffect(() => {
      newsService.getNews(id).then(data => setNews(data))
      console.log('fifth useEffect render counter');
    }, [])

    return (
      <table className={classNames(styles.table)} style={{ height: 100}}>
            <thead>
                <tr style={{ marginLeft: 5, marginTop: 5 }}>
                    <th>
                        <a href={news.url} target='_blank'>{news.title}</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr style={{ marginLeft: 5, marginBottom: 5 }}>
                    <td>by {news.by} </td>
                    <td>{moment(news.time, 'X').fromNow()} | </td>
                    <td>{news.kids.length} comments</td>
                </tr>
            </tbody>
      </table>
    )
}

export default Data;