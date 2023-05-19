import ShowError from '../../components/ShowError'
import { useFetchAllIdQuery } from '../../redux/features/NewsService'

import SingleNews from './SingleNews'

import { Box, List, ListItem, Divider } from '@mui/material'

const NewsList: React.FC = () => {
    const {
        data: newsId,
        isError,
        error,
        refetch,
    } = useFetchAllIdQuery(0)

    return (
        <>
            {isError && <ShowError error={error} />}

            <Box component="section" aria-label="News list">
                <List component="ol" sx={{ listStyle: 'number', pl: '2.5rem' }}>
                    {newsId?.slice(0, 15).map((itemId) => (
                        <ListItem key={itemId} sx={{ display: 'list-item' }}>
                            <SingleNews id={itemId} />
                            <Divider />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    )
}

export default NewsList
