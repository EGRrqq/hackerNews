import { FC, useEffect, useState } from 'react'
import { IComment } from '../../types/types'
import newsService from '../../services/news'

interface NewsCommentProps {
    id: number;
}

const SingleComment: FC<NewsCommentProps> = ({ id }) => {
    const [singlecom, setSingleCom] = useState<IComment>({ id: 0, kids: [], time: 0, parent: 0, text: '', type: ''  })
//  id: 0, kids: [], time: 0, parent: 0, text: '', type: '' 
    useEffect(() => {
      newsService.getNews(id).then(data => setSingleCom(data))
      console.log('fourth useEffect render counter');
    }, [])

    // if (!singlecom.deleted) { return <>{singlecom.text}</>}
    return (
        <>
            {singlecom.text}
        </>
    )

}

export default SingleComment