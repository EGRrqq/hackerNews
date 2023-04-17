import { useState, useEffect, FC } from "react"
import newsService from '../../services/news'
import { INews } from "../../types/types";

import styles from './styles.module.css'
import classNames from "classnames";
import moment from "moment";
import { Link, Route, useParams } from "@tanstack/react-router";
import { rootRoute } from "../__root";

interface SingleNewsProps {
    id: number;
    i: number;
}

const SingleNews: FC<SingleNewsProps> = ({ id, i }) => {
    const [news, setNews] = useState<INews>({id: 0, title: '', score: 0, by: '', time: 0, url: '', kids: [], type: ''})

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
                        <Link 
                            to='/$itemId' 
                            params={{ itemId: news.id }}
                            >
                            {news.title}
                        </Link>
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