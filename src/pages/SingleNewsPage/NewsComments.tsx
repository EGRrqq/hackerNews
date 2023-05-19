import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'

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
                            <header style={{ display: 'inline' }}>www</header>
                            <main>{singleCom?.text}</main>
                        </summary>
                        <article aria-label='News subcomments'>
                            <header></header>
                            <main>
                                <ol>
                                    {singleCom?.kids &&
                                        singleCom?.kids.map(
                                            (childId: number) => (
                                                <li key={childId}>{childId}</li>
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
