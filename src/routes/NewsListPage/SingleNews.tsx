import { useState, useEffect, FC } from "react"
import newsService from '../../services/news'
import { INews } from "../../types/types";

import styles from './styles.module.css'
import classNames from "classnames";
import moment from "moment";

interface SingleNewsProps {
    id: number;
    i: number;
}

const SingleNews: FC<SingleNewsProps> = ({ id, i }) => {
    const [news, setNews] = useState<INews>({id: 0, title: '', score: 0, by: '', time: 0, url: ''})

    useEffect(() => {
      newsService.getNews(id).then(data => setNews(data))
      console.log('second useEffect render counter');
    }, [])
    
    return (
      <table className={classNames(styles.table)}>
            <thead>
                <tr>
                    <th>{i}.</th>
                    <th>
                        <a href={news.url}>{news.title}</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{news.score} points</td>
                    <td>by {news.by}</td>
                    <td>{moment(news.time, 'X').fromNow()}</td>
                </tr>
            </tbody>
      </table>
    )
}

export default SingleNews