import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'

import parse from 'html-react-parser'
import { options } from '../../utils/htmlParserOptions'
import moment from 'moment'

type ChildCommentsProps = {
    id: number
}

const ChildComments: React.FC<ChildCommentsProps> = ({ id }) => {
    const {
        data: childCom,
        isSuccess,
        isError,
        error,
        isLoading,
    } = useFetchSingleNewsQuery(Number(id))

    return (
        <>
            {isSuccess && (
                <article>
                    <header style={{ display: 'inline' }}>
                        <b>{childCom?.score} points</b>
                        <address style={{ display: 'inline' }}>
                            by <a rel="author">{childCom?.by}</a>
                        </address>
                        <time
                            style={{ display: 'inline' }}
                            dateTime={moment(childCom?.time, 'X').format()}
                        >
                            {moment(childCom?.time, 'X').fromNow()}
                        </time>
                    </header>
                    <main>{parse(childCom?.text, options)}</main>
                </article>
            )}
        </>
    )
}

export default ChildComments
