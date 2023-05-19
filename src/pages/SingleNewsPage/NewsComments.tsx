import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'

import parse from 'html-react-parser'
import { options } from '../../utils/htmlParserOptions'
import moment from 'moment'
import ChildComments from './ChildComments'

type NewsCommentsProps = {
    id: number
}

const NewsComments: React.FC<NewsCommentsProps> = ({ id }) => {
    const {
        data: singleCom,
        isSuccess,
        isError,
        error,
        isLoading,
    } = useFetchSingleNewsQuery(Number(id))

    return (
        <>
            {isSuccess && (
                <article aria-label="News comment">
                    <details>
                        <summary>
                            <header style={{ display: 'inline' }}>
                                <b>{singleCom?.score} points</b>
                                <address style={{ display: 'inline' }}>
                                    by <a rel="author">{singleCom?.by}</a>
                                </address>
                                <time
                                    style={{ display: 'inline' }}
                                    dateTime={moment(
                                        singleCom?.time,
                                        'X'
                                    ).format()}
                                >
                                    {moment(singleCom?.time, 'X').fromNow()}
                                </time>
                            </header>
                            <main>{parse(singleCom?.text, options)}</main>
                        </summary>
                        <article aria-label="News subcomments">
                            <header>
                                <h2>comments:</h2>
                            </header>
                            <main>
                                <ol>
                                    {singleCom?.kids &&
                                        singleCom?.kids.map(
                                            (childId: number) => (
                                                <li key={childId}>
                                                    <ChildComments id={childId} />
                                                </li>
                                            )
                                        )}
                                </ol>
                            </main>
                        </article>
                    </details>
                </article>
            )}
        </>
    )
}

export default NewsComments
