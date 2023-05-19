import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'
import { useParams } from 'react-router-dom'
import { Container, Divider, List, ListItem, Stack } from '@mui/material'
import NewsComments from './NewsComments'
import MainData from '../../components/pageData/MainData'

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
            {isSuccess && (
                <Container component="section" aria-label="News page">
                    <MainData id={Number(id)} href={news?.url} target="_blank" rel="noreferrer"/>

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
