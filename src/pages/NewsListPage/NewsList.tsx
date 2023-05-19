import MainData from '../../components/pageData/MainData'
import ShowError from '../../components/feedback/ShowError'
import { useFetchAllIdQuery } from '../../redux/features/NewsService'

import { Stack, List, ListItem, Divider } from '@mui/material'
import { Link as RouterLink} from 'react-router-dom'

const NewsList: React.FC = () => {
    const { data: newsId, isError, error, refetch } = useFetchAllIdQuery(0)

    return (
        <>
            {isError && <ShowError error={error} />}

            <Stack
                direction="column"
                component="section"
                aria-label="News list"
            >
                <List component="ol" sx={{ listStyle: 'number', pl: '2.5rem' }}>
                    {newsId?.slice(0, 15).map((itemId) => (
                        <ListItem key={itemId} sx={{ display: 'list-item' }}>
                            <MainData id={itemId} component={RouterLink} to={`/${itemId}`} />
                            <Divider />
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </>
    )
}

export default NewsList
