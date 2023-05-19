import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'
import { useParams } from 'react-router-dom'
import NewsData from './NewsData'
import { Container, Divider, List, ListItem, Stack } from '@mui/material'
import NewsComments from './NewsComments'

const SingleNewsPage: React.FC = () => {
    const { id } = useParams()
    const {
        data: news,
        isSuccess,
        isError,
        error,
        isLoading,
    } = useFetchSingleNewsQuery(Number(id))

    return (
        <>
            {/* <section>
                <article></article>
                <section>
                    <article>
                        <details>
                            <summary></summary>
                            <p></p>
                        </details>
                    </article>
                </section>
            </section> */}

            {isSuccess && (
                <Container component="section" aria-label="News page">
                    <NewsData news={news} />

                    <Stack direction="column" component="section" aria-label="Comments list">
                        <List
                            component="ol"
                            sx={{ listStyle: 'number', pl: '2.5rem' }}
                        >
                            {news?.kids.slice(0, 15).map((itemId) => (
                                <ListItem
                                    key={itemId}
                                    sx={{ display: 'list-item' }}
                                >
                                    <NewsComments id={itemId} />
                                    <Divider />
                                </ListItem>
                            ))}
                        </List>
                    </Stack>
                </Container>
            )}
        </>
    )
}

export default SingleNewsPage
