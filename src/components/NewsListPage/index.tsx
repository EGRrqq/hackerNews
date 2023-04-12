import { useState, useEffect } from "react"
import newsService from '../../services/news'
import SingleNews from "./SingleNews"

import styles from './styles.module.css'
import classNames from "classnames";

const NewsList = () => {
    const [newsId, setNewsId] = useState<Array<number>>([])

    useEffect(() => {
      newsService.getNewsId().then(data => setNewsId(data))
      console.log('useEffect render counter');
    }, [])

    return (
        <>  
            {newsId.slice(0, 10).map((item, i)=> 
                <ul key={item} className={classNames(styles.ul)}>
                    <li><SingleNews id={item} i={i + 1} /></li>
                </ul>
            )}
        </>
    )
}

export default NewsList